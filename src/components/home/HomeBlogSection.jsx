"use client";

import "./homeBlog.css";
import Link from "next/link";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    title:
      "Digital Marketing Agency in Delhi NCR: Your Growth Catalyst in a Hyperconnected World",
    category: "Marketing",
    desc: "The Delhi National Capital Region (NCR) isn’t just India’s economic powerhouse—it’s a digital battleground where brands compete for attention across search engines, social platforms, and emerging channels. A specialized digital marketing agency in Delhi NCR acts as your strategic ally, blending localized expertise with global best practices to drive measurable business outcomes.  ",
    author: "Adclan Media",
    date: "March 2026",
    readTime: "5 min read",
    img: "/blog/Artboard 1.png",
    link: "/blogs/Digital-Marketing-Agencyin-Delhi-NCR",
  },

  {
    id: 2,
    title:
      "Adclan Media – The Marketing Agency You Were Looking For in Delhi NCR",
    category: "Agency",
    date: "April 2025",
    readTime: "4 min read",
    img: "/blog/Artboard 3.png",
    link: "/blogs/adclan-media-marketing-agency-delhi",
  },

  {
    id: 3,
    title: "Adclan Onboard Shweta Tiwari as Brand Ambassador for Kidsmate",
    category: "Brand Campaign",
    date: "January 2025",
    readTime: "3 min read",
    img: "/blog/Artboard 2.png",
    link: "/blogs/adclan-onboard-shweta-tiwari",
  },

  {
    id: 4,
    title: "Adclan Media’s Triumph with Ace Hanei: Masterclass in Campaign",
    category: "Case Study",
    date: "October 2024",
    readTime: "4 min read",
    img: "/blog/Artboard 4.png",
    link: "/blogs/adclan-media-triumph-ace-hanei",
  },
  {
    id: 5,
    title: "5 Radio Ads Strategies for Business Growth",
    category: "Case Study",
    date: "September 2024",
    readTime: "4 min read",
    img: "/blog/Artboard 5.png",
    link: "/blogs/5-radio-ads-strategies-for-buisness-growth",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HomeBlogSection() {
  return (
    <section className="visual-blog">
      <div className="visual-container">

        {/* Heading */}
        <motion.div
          className="visual-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span>Stories</span>
          <h2>Behind the Strategy</h2>
        </motion.div>

        {/* Featured Blog */}
        <motion.div
          className="featured-blog"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="featured-image">
            <img src={blogs[0].img} alt="" />
          </div>

          <div className="featured-content">
            <div>
              <span className="tag">{blogs[0].category}</span>&nbsp;
              <span className="tag">{blogs[0].author}</span>&nbsp;
              <span className="tag">{blogs[0].date}</span>
            </div>

            <h3>{blogs[0].title}</h3>
            <p>{blogs[0].desc}</p>

            <Link href={blogs[0].link}>Read Article →</Link>
          </div>
        </motion.div>

        {/* Blog Cards */}
        <motion.div
          className="blog-cards"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {blogs.slice(1,5).map((blog) => (
            <motion.div key={blog.id} variants={item}>
              <Link href={blog.link} className="blog-card">
                <img src={blog.img} alt="" />

                <div className="card-content">
                  <span>{blog.category}</span>
                  <h4>{blog.title}</h4>
                  <p>{blog.date}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}