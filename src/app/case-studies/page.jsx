"use client";

import Link from "next/link";
import "./case-studies.css";

const blogs = [
  {
    id: 8,
    title: "Right Gold – Turning Trust into Sales Through Strategic Video Marketing",
    category: "Case Study",
    date: "27 March 2024",
    readTime: "5 min read",
    img: "/blog/Right Gold.webp",
    link: "/case-studies/right-gold-case-study",
  },
  {
    id: 7,
    title: "Galaxy Sawasdee Heights Case Study",
    category: "Case Study",
    date: "23 March 2024",
    readTime: "4 min read",
    img: "/blog/galaxy-case-study.webp",
    link: "/case-studies/galaxy-sawasdee-heights-case-study",
  },
  {
    id: 6,
    title: "Vikram Mills Case Study",
    category: "Case Study",
    date: "18 March 2024",
    readTime: "4 min read",
    img: "/blog/vikram-mills.webp",
    link: "/case-studies/vikram-mills-case-study",
  },
  {
    id: 5,
    title:
      "Digital Marketing Agency in Delhi NCR: Your Growth Catalyst in a Hyperconnected World",
    category: "Marketing",
    desc: "The Delhi National Capital Region (NCR) isn’t just India’s economic powerhouse—it’s a digital battleground where brands compete for attention across search engines, social platforms, and emerging channels. A specialized digital marketing agency in Delhi NCR acts as your strategic ally, blending localized expertise with global best practices to drive measurable business outcomes.  ",
    author: "Adclan Media",
    date: "March 2026",
    readTime: "5 min read",
    img: "/blog/artboard-1.webp",
    link: "/case-studies/Digital-Marketing-Agencyin-Delhi-NCR",
  },

  {
    id: 4,
    title:
      "Adclan Media – The Marketing Agency You Were Looking For in Delhi NCR",
    category: "Agency",
    date: "April 2025",
    readTime: "4 min read",
    img: "/blog/artboard-3.webp",
    link: "/case-studies/adclan-media-marketing-agency-delhi",
  },

  {
    id: 3,
    title: "Adclan Onboard Shweta Tiwari as Brand Ambassador for Kidsmate",
    category: "Brand Campaign",
    date: "January 2025",
    readTime: "3 min read",
    img: "/blog/artboard-2.webp",
    link: "/case-studies/adclan-onboard-shweta-tiwari",
  },

  {
    id: 2,
    title: "Adclan Media’s Triumph with Ace Hanei: Masterclass in Campaign",
    category: "Case Study",
    date: "October 2024",
    readTime: "4 min read",
    img: "/blog/artboard-4.webp",
    link: "/case-studies/adclan-media-triumph-ace-hanei",
  },
  {
    id: 1,
    title: "5 Radio Ads Strategies for Business Growth",
    category: "Case Study",
    date: "September 2024",
    readTime: "4 min read",
    img: "/blog/artboard-5.webp",
    link: "/case-studies/5-radio-ads-strategies-for-buisness-growth",
  },
];

export default function BlogsPage() {
  return (
    <section className="adclan-blog-page">
      <header className="adclan-blog-hero">
        <h1>Insights</h1>
        <p>Creative thoughts & studio experiments</p>
      </header>

      <div className="adclan-blog-list">
        {blogs.map((blog) => (
          <Link href={blog.link} key={blog.id} className="adclan-blog-card">
            <div className="adclan-blog-image-wrapper">
              <img src={blog.img} alt={blog.title} />
            </div>

            <div className="adclan-blog-info">
              <span className="adclan-blog-date">{blog.date}</span>
              <h2>{blog.title}</h2>
              <span className="adclan-blog-read-more">Read →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
