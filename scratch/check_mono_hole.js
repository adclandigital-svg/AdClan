const fs = require('fs');
const zlib = require('zlib');
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

// Check pixels at center x=26, y=32 in 1x space
console.log('Pixels around x=26, y=32 in 1x:');
for (let y = 22; y <= 42; y++) {
  let s = '';
  for (let x = 16; x <= 36; x++) {
    const a = alpha[y * width + x];
    s += a > 128 ? '#' : (a > 40 ? '.' : ' ');
  }
  console.log(`${y}: [${s}]`);
}
