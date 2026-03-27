const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.adclan.in";

const blogPages = [
  {
    url: "/blogs/5-radio-ads-strategies-for-buisness_growth",
    lastModified: "2026-03-20",
  },
  {
    url: "/blogs/adclan-media-marketing-agency-delhi",
    lastModified: "2026-03-18",
  },
  {
    url: "/blogs/adclan-media-organizes-galaxy-group-interview",
    lastModified: "2026-03-15",
  },
  {
    url: "/blogs/adclan-media-triumph-ace-hanei",
    lastModified: "2026-03-10",
  },
  {
    url: "/blogs/Digital-Marketing-Agencyin-Delhi-NCR",
    lastModified: "2026-03-12",
  },
  {
    url: "/blogs/galaxy-sawasdee-heights-case-study",
    lastModified: "2026-03-24",
  },
  {
    url: "/blogs/vikram-mills-case-study",
    lastModified: "2026-03-21",
  },
  {
    url: "/blogs/right-gold-case-study",
    lastModified: "2026-03-27",
  },
];

export async function GET() {
  const urls = blogPages
    .map(
      (page) => `
      <url>
        <loc>${baseUrl}${page.url}</loc>
        <lastmod>${page?.lastModified}</lastmod>
        <priority>0.5</priority>
      </url>`
    )
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       ${urls}
     </urlset>`,
    {
      headers: { "Content-Type": "application/xml" },
    }
  );
}