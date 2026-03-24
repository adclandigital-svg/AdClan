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



  {
    url: '/blogs/5-radio-ads-strategies-for-buisness-growth',
    changeFrequency: 'yearly',
    priority: 0.5,
  },
  {
    url: '/blogs/adclan-media-marketing-agency-delhi',
    changeFrequency: 'yearly',
    priority: 0.5,
  },
  {
    url: '/blogs/adclan-media-organizes-galaxy-group-interview',
    changeFrequency: 'yearly',
    priority: 0.5,
  },
  {
    url: '/blogs/adclan-media-triumph-ace-hanei',
    changeFrequency: 'yearly',
    priority: 0.5,
  },
  {
    url: '/blogs/Digital-Marketing-Agencyin-Delhi-NCR',
    changeFrequency: 'yearly',
    priority: 0.5,
  },
  {
    url: '/blogs/galaxy-sawasdee-heights-case-study',
    changeFrequency: 'yearly',
    priority: 0.5,
  },
  {
    url: '/blogs/vikram-mills-case-study',
    changeFrequency: 'yearly',
    priority: 0.5,
  },

  
];

// Dynamic project pages
const dynamicProjectPages = PROJECTS?.map((project) => ({
  url: `/projects/${project.slug}`,
  changeFrequency: 'monthly',
  priority: 0.8,
}));

// Combine all pages
const allPages = [...staticPages, ...dynamicProjectPages];

export default function sitemap() {
  return allPages?.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
