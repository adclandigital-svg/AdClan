"use client";

import "./homeBlog.css";
import Link from "next/link";
import { motion } from "framer-motion";

import { blogListData as blogs } from "../../data/blogListData";

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
              <span className="tag">{blogs[0].category || "Blog"}</span>&nbsp;
              {blogs[0].author && <><span className="tag">{blogs[0].author}</span>&nbsp;</>}
              <span className="tag">{blogs[0].date}</span>
            </div>

            <h3>{blogs[0].title}</h3>
            {blogs[0].desc && <p>{blogs[0].desc}</p>}

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
          {blogs.slice(1, 5).map((blog) => (
            <motion.div key={blog.id} variants={item}>
              <Link href={blog.link} className="blog-card">
                <img src={blog.img} alt={blog.id} loading="lazy" />

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