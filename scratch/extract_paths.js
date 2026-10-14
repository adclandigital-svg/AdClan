const fs = require('fs');
const fullSvg = fs.readFileSync('public/adclan-logo-solid-white.svg', 'utf8');
const monoSvg = fs.readFileSync('public/adclan-monogram-solid-white.svg', 'utf8');

const fullMatch = fullSvg.match(/d="([^"]+)"/);
const monoMatch = monoSvg.match(/d="([^"]+)"/);

const content = '// High-resolution 4x solid white vector paths for MadisonIntroHero\n' +
  'export const ADCLAN_FULL_LOGO_PATH = "' + fullMatch[1] + '";\n\n' +
  'export const ADCLAN_MONOGRAM_PATH = "' + monoMatch[1] + '";\n';

fs.writeFileSync('src/components/home/adclanLogoPaths.js', content);
console.log('Written src/components/home/adclanLogoPaths.js, size:', fs.statSync('src/components/home/adclanLogoPaths.js').size);
