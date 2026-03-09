"use client";

import Link from "next/link";
import "./blog.css";

const blogs = [
  {
    id: 1,
    title:
      "Digital Marketing Agency in Delhi NCR: Your Growth Catalyst in a Hyperconnected World",
    category: "Marketing",
    desc: "The Delhi NCR is a digital battleground where brands compete for attention...",
    author: "Adclan Media",
    date: "March 2026",
    readTime: "5 min read",
    img: "/blog/1.jpg",
    link: "/blogs/Digital-Marketing-Agencyin-Delhi-NCR",
  },
  {
    id: 2,
    title: "Adclan Media – The Marketing Agency You Were Looking For in Delhi NCR",
    category: "Agency",
    date: "April 2025",
    readTime: "4 min read",
    img: "https://adclan.in/wp-content/uploads/2025/04/square-banner.png",
    link: "/blogs/adclan-media-marketing-agency-delhi",
  },
  {
    id: 3,
    title: "Adclan Onboard Shweta Tiwari as Brand Ambassador for Kidsmate",
    category: "Brand Campaign",
    date: "January 2025",
    readTime: "3 min read",
    img: "https://adclan.in/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-23-at-4.20.17-PM-600x600.jpeg",
    link: "/blogs/adclan-onboard-shweta-tiwari",
  },
  {
    id: 4,
    title: "Adclan Media’s Triumph with Ace Hanei: Masterclass in Campaign",
    category: "Case Study",
    date: "October 2024",
    readTime: "4 min read",
    img: "https://adclan.in/wp-content/uploads/2024/10/Untitled-2-600x600.png",
    link: "/blogs/adclan-media-triumph-ace-hanei",
  },
  {
    id: 5,
    title: "5 Radio Ads Strategies for Business Growth",
    category: "Case Study",
    date: "September 2024",
    readTime: "4 min read",
    img: "https://adclan.in/wp-content/uploads/2024/09/Radio-Advert.png",
    link: "/blogs/5-radio-ads-strategies-for-buisness-growth",
  },
  {
    id: 6,
    title: "Adclan Media Organizes Galaxy Group Interview",
    category: "Case Study",
    date: "July 2024",
    readTime: "10 min read",
    img: "https://adclan.in/wp-content/uploads/2024/10/sdfaa.jpg",
    link: "/blogs/adclan-media-organizes-galaxy-group-interview",
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
          <Link
            href={blog.link}
            key={blog.id}
            className="adclan-blog-card"
          >
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