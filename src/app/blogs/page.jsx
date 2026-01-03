"use client";

import Link from "next/link";
import "./blog.css";
import { blogs } from "@/data/blogs";

export default function BlogsPage() {
  return (
    <section className="blogs-page">
      <header className="blogs-hero">
        <h1>Insights</h1>
        <p>Creative thoughts & studio experiments</p>
      </header>

      <div className="blogs-list">
        {blogs.map((blog) => (
          <Link href={`/blogs/${blog.slug}`} key={blog.id} className="blog-card">
            <div className="video-wrapper">
              <video
                src={blog.video}
                muted
                loop
                playsInline
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
              />
            </div>
            <div className="blog-info">
              <span className="blog-date">{blog.date}</span>
              <h2>{blog.title}</h2>
              <span className="read-more">Read →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
