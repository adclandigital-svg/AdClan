const fs = require('fs');
const code = fs.readFileSync('src/components/home/adclanLogoPaths.js', 'utf8');
const match = code.match(/ADCLAN_FULL_LOGO_PATH = "([^"]+)"/);
const loops = match[1].split('Z').filter(s => s.trim().length > 0);
console.log('Loops found:', loops.length);
loops.forEach((l, i) => {
  const pts = l.match(/[ML](\d+),(\d+)/g).map(p => {
    const [x, y] = p.substring(1).split(',').map(Number);
    return { x, y };
  });
  const xs = pts.map(p => p.x);
  const ys = pts.map(p => p.y);
  const minX = Math.min(...xs), maxX = Math.max(...xs);
  const minY = Math.min(...ys), maxY = Math.max(...ys);
  const cx = ((minX + maxX) / 2).toFixed(1);
  const cy = ((minY + maxY) / 2).toFixed(1);
  console.log(`Loop ${i}: pts=${pts.length} X:[${minX}..${maxX}] Y:[${minY}..${maxY}] center=(${cx},${cy})`);
});
