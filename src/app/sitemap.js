import { blogs } from '@/data/blogs';
import { PROJECTS } from '@/data/projectData';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://adclan.in';

// Static pages
const staticPages = [
  {
    url: '/',
    changeFrequency: 'weekly',
    priority: 1,
  },
  {
    url: '/about',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: '/services',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: '/projects',
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  {
    url: '/blogs',
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    url: '/contact',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: '/career',
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    url: '/privacy-policy',
    changeFrequency: 'yearly',
    priority: 0.5,
  },
  {
    url: '/term-and-condition',
    changeFrequency: 'yearly',
    priority: 0.5,
  },
  {
    url: '/cookie-policy',
    changeFrequency: 'yearly',
    priority: 0.5,
  },
];

// Dynamic blog pages
const dynamicBlogPages = blogs?.map((blog) => ({
  url: `/blogs/${blog.slug}`,
  changeFrequency: 'monthly',
  priority: 0.8,
}));

// Dynamic project pages
const dynamicProjectPages = PROJECTS?.map((project) => ({
  url: `/projects/${project.slug}`,
  changeFrequency: 'monthly',
  priority: 0.8,
}));

// Combine all pages
const allPages = [...staticPages, ...dynamicBlogPages, ...dynamicProjectPages];

export default function sitemap() {
  return allPages?.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
