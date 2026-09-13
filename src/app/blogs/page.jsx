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
  {
    id: 7,
    title: "Radio Advertisement Examples: The Definitive Indian Guide",
    category: "Blog",
    date: "September 2026",
    readTime: "4 min read",
    img: "/blog/radio-advertisement-examples-the-definitive-indian-guide.webp",
    link: "/blogs/radio-ad-examples-best-indian-campaigns-and-how-they-work",
  },
  {
    id: 6,
    title:
      "Digital Marketing Strategy for Businesses in Delhi NCR: A Data-Driven Blueprint",
    category: "Blog",
    desc: "Digital Marketing Strategy for Businesses in Delhi NCR: A Data-Driven Blueprint Delhi NCR’s hyper-competitive business landscape demands more than generic digital marketing tactics. ",
    author: "Adclan Media",
    date: "September 2026",
    img: "/blog/digital-marketing-strategy-for-businesses-in-delhi-ncr-a-data-driven-blueprint.webp",
    link: "/blogs/digital-marketing-strategy-for-businesses-in-delhi-ncr-a-data-driven-blueprint",
  },

  {
    id: 5,
    title: "How Much Does Digital Marketing Cost in Delhi NCR in 2026? A Realistic Breakdown",
    category: "Blog",
    date: "September 2026",
    // readTime: "5 min read",
    img: "/blog/how-much-does-digital-marketing-cost-in-delhi-ncr-in-2026-a-realistic-breakdown.webp",
    link: "/blogs/how-much-does-digital-marketing-cost-in-delhi-ncr-in-2026-a-realistic-breakdown",
  },

  {
    id: 4,
    title:
      "Best Digital Marketing Services for Small Businesses in Delhi: A Strategic Approach",
    category: "Agency",
    date: "September 2026",
    readTime: "4 min read",
    img: "/blog/best-digital-marketing-services-for-small-businesses-in-delhi-a-strategic-approach.webp",
    link: "/blogs/best-digital-marketing-services-for-small-businesses-in-delhi-a-strategic-approach",
  },

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
