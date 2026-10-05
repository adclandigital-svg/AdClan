"use client";

import Link from "next/link";
import "./blog.css";

import { blogListData as blogs } from "../../data/blogListData";

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
