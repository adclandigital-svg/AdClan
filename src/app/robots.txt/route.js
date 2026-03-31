// /app/robots.txt/route.js
export async function GET() {
  return new Response(
    `User-agent: *
Allow: /
Disallow: /api/
Sitemap: https://www.adclan.in/sitemap.xml`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}