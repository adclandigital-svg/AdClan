const fs = require('fs');
const zlib = require('zlib');

// Read PNG and get alpha
const buf = fs.readFileSync('public/adclan-logo-1 white.png');
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
let offset = 8;
const idats = [];
while (offset < buf.length) {
  const len = buf.readUInt32BE(offset);
  const type = buf.toString('ascii', offset + 4, offset + 8);
  if (type === 'IDAT') idats.push(buf.subarray(offset + 8, offset + 8 + len));
  offset += 12 + len;
}
const raw = zlib.inflateSync(Buffer.concat(idats));
const stride = width * 4 + 1;
const alpha = new Uint8Array(width * height);
var prevRow = null;
for (let y = 0; y < height; y++) {
  const filter = raw[y * stride];
  const rowStart = y * stride + 1;
  const row = new Uint8Array(width * 4);
  for (let x = 0; x < width * 4; x++) {
    let val = raw[rowStart + x];
    const a = x >= 4 ? row[x - 4] : 0;
    const b = prevRow ? prevRow[x] : 0;
    const c = (x >= 4 && prevRow) ? prevRow[x - 4] : 0;
    if (filter === 1) val = (val + a) & 0xff;
    else if (filter === 2) val = (val + b) & 0xff;
    else if (filter === 3) val = (val + ((a + b) >> 1)) & 0xff;
    else if (filter === 4) {
      const p = a + b - c;
      const pa = Math.abs(p - a);
      const pb = Math.abs(p - b);
      const pc = Math.abs(p - c);
      let pr = c;
      if (pa <= pb && pa <= pc) pr = a;
      else if (pb <= pc) pr = b;
      val = (val + pr) & 0xff;
    }
    row[x] = val;
  }
  prevRow = row;
  for (let x = 0; x < width; x++) alpha[y * width + x] = row[x * 4 + 3];
}

// 4x upsampled grid for subpixel smoothness
const S = 4;
const W = width * S;
const H = height * S;
const grid = new Uint8Array(W * H);
for (let y = 0; y < H; y++) {
  const sy = y / S;
  const y0 = Math.floor(sy);
  const y1 = Math.min(height - 1, y0 + 1);
  const fy = sy - y0;
  for (let x = 0; x < W; x++) {
    const sx = x / S;
    const x0 = Math.floor(sx);
    const x1 = Math.min(width - 1, x0 + 1);
    const fx = sx - x0;
    const v00 = alpha[y0 * width + x0];
    const v10 = alpha[y0 * width + x1];
    const v01 = alpha[y1 * width + x0];
    const v11 = alpha[y1 * width + x1];
    const val = (v00 * (1 - fx) + v10 * fx) * (1 - fy) + (v01 * (1 - fx) + v11 * fx) * fy;
    grid[y * W + x] = val >= 90 ? 1 : 0;
  }
}

// Boundary edge extraction: vertical and horizontal edges
const hEdges = new Map(); // "x,y" -> true
const vEdges = new Map(); // "x,y" -> true

for (let y = 0; y <= H; y++) {
  for (let x = 0; x <= W; x++) {
    const top = y > 0 && x < W ? grid[(y - 1) * W + x] : 0;
    const bot = y < H && x < W ? grid[y * W + x] : 0;
    if (top !== bot) hEdges.set(`${x},${y}`, top === 1 ? -1 : 1); // 1 = rightward, -1 = leftward

    const lft = x > 0 && y < H ? grid[y * W + x - 1] : 0;
    const rgt = x < W && y < H ? grid[y * W + x] : 0;
    if (lft !== rgt) vEdges.set(`${x},${y}`, lft === 1 ? 1 : -1); // 1 = downward, -1 = upward
  }
}

// Extract closed contour loops from directed segment graph
const adj = new Map();
function addDirEdge(x1, y1, x2, y2) {
  const k = `${x1},${y1}`;
  if (!adj.has(k)) adj.set(k, []);
  adj.get(k).push({ x: x2, y: y2 });
}

for (const [k, dir] of hEdges.entries()) {
  const [x, y] = k.split(',').map(Number);
  if (dir === 1) addDirEdge(x, y, x + 1, y);
  else addDirEdge(x + 1, y, x, y);
}
for (const [k, dir] of vEdges.entries()) {
  const [x, y] = k.split(',').map(Number);
  if (dir === 1) addDirEdge(x, y, x, y + 1);
  else addDirEdge(x, y + 1, x, y);
}

// Follow contours
const visited = new Set();
const loops = [];

for (const [startK, nextList] of adj.entries()) {
  for (const nextPt of nextList) {
    const edgeKey = `${startK}->${nextPt.x},${nextPt.y}`;
    if (visited.has(edgeKey)) continue;
    visited.add(edgeKey);

    const [sx, sy] = startK.split(',').map(Number);
    const loop = [{ x: sx, y: sy }];
    let curr = nextPt;

    while (curr && !(curr.x === sx && curr.y === sy)) {
      loop.push(curr);
      const currK = `${curr.x},${curr.y}`;
      const edges = adj.get(currK) || [];
      let found = null;
      for (const e of edges) {
        const ek = `${currK}->${e.x},${e.y}`;
        if (!visited.has(ek)) {
          visited.add(ek);
          found = e;
          break;
        }
      }
      curr = found;
      if (loop.length > 50000) break;
    }
    if (loop.length >= 8) loops.push(loop);
  }
}

// Douglas-Peucker simplification
function rdp(pts, eps) {
  if (pts.length <= 2) return pts;
  let dmax = 0, idx = 0;
  const [x1, y1] = [pts[0].x, pts[0].y];
  const [x2, y2] = [pts[pts.length - 1].x, pts[pts.length - 1].y];
  const l = Math.hypot(x2 - x1, y2 - y1);
  for (let i = 1; i < pts.length - 1; i++) {
    let d = 0;
    if (l === 0) d = Math.hypot(pts[i].x - x1, pts[i].y - y1);
    else d = Math.abs((y2 - y1) * pts[i].x - (x2 - x1) * pts[i].y + x2 * y1 - y2 * x1) / l;
    if (d > dmax) { dmax = d; idx = i; }
  }
  if (dmax > eps) {
    const r1 = rdp(pts.slice(0, idx + 1), eps);
    const r2 = rdp(pts.slice(idx), eps);
    return r1.slice(0, -1).concat(r2);
  }
  return [pts[0], pts[pts.length - 1]];
}

// Build smooth SVG paths
let svgPathFull = '';
let svgPathMono = '';

for (const rawLoop of loops) {
  const simp = rdp(rawLoop, 1.2);
  if (simp.length < 3) continue;
  let pStr = `M${simp[0].x},${simp[0].y}`;
  for (let i = 1; i < simp.length; i++) {
    pStr += `L${simp[i].x},${simp[i].y}`;
  }
  pStr += 'Z ';
  svgPathFull += pStr;

  // Check if loop belongs to monogram (max X <= 55 * S)
  const isMono = simp.every(p => p.x <= 55 * S + 5);
  if (isMono) svgPathMono += pStr;
}

const outContent = `// Clean, vector-smooth outline paths for AdClan Logo (no horizontal scanlines, 100% scalable)
export const ADCLAN_FULL_LOGO_PATH = "${svgPathFull.trim()}";

export const ADCLAN_MONOGRAM_PATH = "${svgPathMono.trim()}";
`;

fs.writeFileSync('src/components/home/adclanLogoPaths.js', outContent);
console.log('Successfully generated clean polygon contours in src/components/home/adclanLogoPaths.js');
console.log('Total loops:', loops.length, 'File size:', fs.statSync('src/components/home/adclanLogoPaths.js').size);
