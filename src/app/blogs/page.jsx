"use client";

import Link from "next/link";
import "./blog.css";
import { blogs } from "@/data/blogs";

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
            href={`/blogs/${blog.slug}`}
            key={blog.id}
            className="adclan-blog-card"
          >
            <div className="adclan-blog-video-wrapper">
              <video
                src={blog.video}
                muted
                loop
                playsInline
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
              />
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