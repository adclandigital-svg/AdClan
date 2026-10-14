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

// 4x upsampled smooth SVG
const scale = 4;
const W = width * scale;
const H = height * scale;
const up = new Float32Array(W * H);
for (let y = 0; y < H; y++) {
  const sy = y / scale;
  const y0 = Math.floor(sy);
  const y1 = Math.min(height - 1, y0 + 1);
  const fy = sy - y0;
  for (let x = 0; x < W; x++) {
    const sx = x / scale;
    const x0 = Math.floor(sx);
    const x1 = Math.min(width - 1, x0 + 1);
    const fx = sx - x0;
    const v00 = alpha[y0 * width + x0];
    const v10 = alpha[y0 * width + x1];
    const v01 = alpha[y1 * width + x0];
    const v11 = alpha[y1 * width + x1];
    up[y * W + x] = (v00 * (1 - fx) + v10 * fx) * (1 - fy) + (v01 * (1 - fx) + v11 * fx) * fy;
  }
}

// Full logo path
let dFull = '';
const THRESH = 85;
for (let y = 0; y < H; y++) {
  let inLine = false;
  let startX = 0;
  for (let x = 0; x < W; x++) {
    const val = up[y * W + x];
    if (val >= THRESH && !inLine) {
      inLine = true;
      startX = x;
    } else if (val < THRESH && inLine) {
      inLine = false;
      dFull += `M${startX},${y}h${x - startX}v1h-${x - startX}z `;
    }
  }
  if (inLine) {
    dFull += `M${startX},${y}h${W - startX}v1h-${W - startX}z `;
  }
}

// Monogram only path (x: 0 to 55 * scale = 220)
let dMonogram = '';
const MONO_W = 55 * scale;
for (let y = 0; y < H; y++) {
  let inLine = false;
  let startX = 0;
  for (let x = 0; x < MONO_W; x++) {
    const val = up[y * W + x];
    if (val >= THRESH && !inLine) {
      inLine = true;
      startX = x;
    } else if (val < THRESH && inLine) {
      inLine = false;
      dMonogram += `M${startX},${y}h${x - startX}v1h-${x - startX}z `;
    }
  }
  if (inLine) {
    dMonogram += `M${startX},${y}h${MONO_W - startX}v1h-${MONO_W - startX}z `;
  }
}

const fullSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" fill="#FFFFFF" shape-rendering="geometricPrecision">\n  <path d="${dFull.trim()}" fill="#FFFFFF" />\n</svg>\n`;
fs.writeFileSync('public/adclan-logo-solid-white.svg', fullSvg);

const monoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${MONO_W} ${H}" fill="#FFFFFF" shape-rendering="geometricPrecision">\n  <path d="${dMonogram.trim()}" fill="#FFFFFF" />\n</svg>\n`;
fs.writeFileSync('public/adclan-monogram-solid-white.svg', monoSvg);

console.log('Successfully generated public/adclan-logo-solid-white.svg and public/adclan-monogram-solid-white.svg');
