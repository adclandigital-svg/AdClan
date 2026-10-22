const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function createBanner() {
  const width = 1850;
  const height = 950;

  const heroImagePath = 'C:/Users/Preet Sharma/.gemini/antigravity-ide/brain/ce3496a6-b339-43b1-8df3-5496f1d7995f/branding_agency_delhi_hero_1792685293940.jpg';
  const logoPath = path.resolve('public/adclan-logo-1.png');
  const outputPath = path.resolve('public/blog/top-branding-agency-in-delhi-ncr-for-business-growth.webp');

  // Read logo as base64 for embedding in SVG
  const logoBase64 = fs.readFileSync(logoPath).toString('base64');

  // Crop & resize hero image to fit right portion or full width with gradient
  const resizedHero = await sharp(heroImagePath)
    .resize(width, height, { fit: 'cover', position: 'right' })
    .toBuffer();

  // Create SVG overlay with white fade on the left, typography, and badges
  const svgOverlay = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="whiteFade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
          <stop offset="38%" stop-color="#ffffff" stop-opacity="1" />
          <stop offset="55%" stop-color="#ffffff" stop-opacity="0.92" />
          <stop offset="72%" stop-color="#ffffff" stop-opacity="0.4" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
        </linearGradient>
      </defs>

      <!-- Gradient mask/backdrop -->
      <rect x="0" y="0" width="${width}" height="${height}" fill="url(#whiteFade)" />

      <!-- Adclan Logo -->
      <g transform="translate(100, 90)">
        <image href="data:image/png;base64,${logoBase64}" width="240" height="60" />
      </g>

      <!-- Main Headline -->
      <g transform="translate(100, 270)">
        <text font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="800" fill="#0f172a" letter-spacing="-1.5">
          Branding <tspan fill="#2563eb">Agency</tspan> in
        </text>
        <text y="78" font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="800" fill="#0f172a" letter-spacing="-1.5">
          <tspan fill="#2563eb">Delhi NCR</tspan>
        </text>
        <!-- Accent line -->
        <rect y="105" width="140" height="6" rx="3" fill="#2563eb" />
      </g>

      <!-- Key Pillars / Badges -->
      <g transform="translate(100, 480)">
        <!-- Item 1: Strategic Foundations -->
        <g transform="translate(0, 0)">
          <circle cx="28" cy="28" r="28" fill="#eff6ff" />
          <path d="M28 14 L32 24 L42 25 L34 33 L37 43 L28 37 L19 43 L22 33 L14 25 L24 24 Z" fill="#2563eb" />
          <text x="76" y="36" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700" fill="#1e293b" letter-spacing="0.5">
            STRATEGIC BRAND FOUNDATIONS
          </text>
        </g>

        <!-- Item 2: Visual Identity Systems -->
        <g transform="translate(0, 85)">
          <circle cx="28" cy="28" r="28" fill="#fdf2f8" />
          <circle cx="28" cy="28" r="14" fill="#db2777" />
          <circle cx="28" cy="28" r="8" fill="#ffffff" />
          <text x="76" y="36" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700" fill="#1e293b" letter-spacing="0.5">
            VISUAL IDENTITY &amp; DESIGN
          </text>
        </g>

        <!-- Item 3: Hyperlocal Delhi Insights -->
        <g transform="translate(0, 170)">
          <circle cx="28" cy="28" r="28" fill="#ecfdf5" />
          <path d="M28 16 C22 16 17 21 17 27 C17 35 28 44 28 44 C28 44 39 35 39 27 C39 21 34 16 28 16 Z M28 31 C25.8 31 24 29.2 24 27 C24 24.8 25.8 23 28 23 C30.2 23 32 24.8 32 27 C32 29.2 30.2 31 28 31 Z" fill="#059669" />
          <text x="76" y="36" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700" fill="#1e293b" letter-spacing="0.5">
            HYPERLOCAL REGIONAL INSIGHTS
          </text>
        </g>

        <!-- Item 4: Market Leadership -->
        <g transform="translate(0, 255)">
          <circle cx="28" cy="28" r="28" fill="#fef3c7" />
          <path d="M18 36 L24 28 L30 32 L38 20" stroke="#d97706" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" />
          <polyline points="32,20 38,20 38,26" stroke="#d97706" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" />
          <text x="76" y="36" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700" fill="#1e293b" letter-spacing="0.5">
            MEASURABLE MARKET LEADERSHIP
          </text>
        </g>
      </g>
    </svg>
  `);

  await sharp(resizedHero)
    .composite([
      {
        input: svgOverlay,
        top: 0,
        left: 0,
      },
    ])
    .webp({ quality: 90 })
    .toFile(outputPath);

  console.log('Banner created at:', outputPath);
}

createBanner().catch(console.error);
