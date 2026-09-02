"use client";

import Link from "next/link";
import "./blog.css";

const blogs = [
  // {
  //   id: 8,
  //   title: "Right Gold – Turning Trust into Sales Through Strategic Video Marketing",
  //   category: "Case Study",
  //   date: "27 March 2024",
  //   readTime: "5 min read",
  //   img: "/blog/Right Gold.webp",
  //   link: "/blogs/right-gold-case-study",
  // },
  // {
  //   id: 7,
  //   title: "Galaxy Sawasdee Heights Case Study",
  //   category: "Case Study",
  //   date: "23 March 2024",
  //   readTime: "4 min read",
  //   img: "/blog/galaxy-case-study.webp",
  //   link: "/blogs/galaxy-sawasdee-heights-case-study",
  // },
  // {
  //   id: 6,
  //   title: "Vikram Mills Case Study",
  //   category: "Case Study",
  //   date: "18 March 2024",
  //   readTime: "4 min read",
  //   img: "/blog/vikram-mills.webp",
  //   link: "/blogs/vikram-mills-case-study",
  // },
  // {
  //   id: 5,
  //   title:
  //     "Digital Marketing Agency in Delhi NCR: Your Growth Catalyst in a Hyperconnected World",
  //   category: "Marketing",
  //   desc: "The Delhi National Capital Region (NCR) isn’t just India’s economic powerhouse—it’s a digital battleground where brands compete for attention across search engines, social platforms, and emerging channels. A specialized digital marketing agency in Delhi NCR acts as your strategic ally, blending localized expertise with global best practices to drive measurable business outcomes.  ",
  //   author: "Adclan Media",
  //   date: "March 2026",
  //   readTime: "5 min read",
  //   img: "/blog/artboard-1.webp",
  //   link: "/blogs/Digital-Marketing-Agencyin-Delhi-NCR",
  // },

  // {
  //   id: 4,
  //   title:
  //     "Adclan Media – The Marketing Agency You Were Looking For in Delhi NCR",
  //   category: "Agency",
  //   date: "April 2025",
  //   readTime: "4 min read",
  //   img: "/blog/artboard-3.webp",
  //   link: "/blogs/adclan-media-marketing-agency-delhi",
  // },

  {
    id: 3,
    title: "How to Choose the Right Digital Marketing Agency in Delhi NCR: A Strategic Guide",
    category: "Blog",
    date: "August 2026",
    // readTime: "3 min read",
    img: "/blog/how-to-choose-the-right-digital-marketing-agency-in-delhi-ncr.webp",
    link: "/blogs/how-to-choose-the-right-digital-marketing-agency-in-delhi-ncr",
  },

  {
    id: 2,
    title: "Performance Marketing Agency in Delhi: The Catalyst for Business Growth in India’s Digital Landscape",
    category: "Blog",
    date: "August 2026",
    // readTime: "4 min read",
    img: "/blog/performance-marketing-agency-in-delhi-the-catalyst-for-business-growth-in-indias-digital-landscape.webp",
    link: "/blogs/performance-marketing-agency-in-delhi-the-catalyst-for-business-growth-in-indias-digital-landscape",
  },
  {
    id: 1,
    title: "Why Your Business Needs a Digital Marketing Agency in Delhi",
    category: "Blog",
    date: "August 2026",
    // readTime: "4 min read",
    img: "/blog/why-your-business-strip.webp",
    link: "/blogs/why-your-business-needs-a-digital-marketing-agency-in-delhi-and-how-to-choose-the-right-one",
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
