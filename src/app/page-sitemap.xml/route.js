import { PROJECTS } from "@/data/projectData";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.adclan.in";

const staticPages = [
  { url: "/", priority: 1, lastModified: "2026-03-20" },
  { url: "/about", priority: 0.9, lastModified: "2026-03-18" },
  { url: "/services", priority: 0.9, lastModified: "2026-03-15" },
  { url: "/projects", priority: 0.9, lastModified: "2026-03-25" },
  { url: "/blogs", priority: 0.8, lastModified: "2026-03-25" },
  { url: "/contact", priority: 0.7, lastModified: "2026-03-10" },
  { url: "/career", priority: 0.6, lastModified: "2026-03-05" },
  { url: "/privacy-policy", priority: 0.5, lastModified: "2025-01-01" },
  { url: "/term-and-condition", priority: 0.5, lastModified: "2025-01-01" },
  { url: "/cookie-policy", priority: 0.5, lastModified: "2025-01-01" },
];

const dynamicProjectPages = PROJECTS?.filter(
  (project) => project.category !== "Website Development",
).map((project) => ({
  url: `/projects/${project.slug}`,
  priority: 0.8,
  lastModified: project.updatedAt || project.createdAt || "2026-03-01",
}));

const allPages = [...staticPages, ...dynamicProjectPages];

export async function GET() {
  const urls = allPages
    .map(
      (page) => `
      <url>
        <loc>${baseUrl}${page.url}</loc>
        <lastmod>${page?.lastModified}</lastmod>
        <priority>${page.priority}</priority>
      </url>`,
    )
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       ${urls}
     </urlset>`,
    {
      headers: { "Content-Type": "application/xml" },
    },
  );
}
