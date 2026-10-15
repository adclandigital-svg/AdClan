"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, ArrowUpRight, Clock, Calendar, Sparkles } from "lucide-react";
import { blogListData as blogs } from "@/data/blogListData";

export default function BlogSectionV2() {
  const featuredBlog = blogs[0];
  const gridBlogs = blogs.slice(1, 5);

  return (
    <section className="v2-blog-section" id="v2-insights">
      <div className="v2-ambient-glow v2-ambient-glow-right" />

      <div className="v2-container">
        {/* Section Header */}
        <div className="v2-section-header v2-blog-header-row">
          <div className="v2-blog-header-left">
            <div className="v2-badge">
              <BookOpen size={14} className="v2-badge-icon" />
              <span>PERSPECTIVES & THOUGHT LEADERSHIP</span>
            </div>

            <h2 className="v2-section-title">
              Stories Behind <span className="v2-gradient-text">The Strategy</span>
            </h2>

            <p className="v2-section-desc">
              Insights, case studies, and actionable growth frameworks from the team steering
              India's high-impact brand campaigns.
            </p>
          </div>

          <div className="v2-blog-header-right">
            <Link href="/blogs" className="v2-view-all-btn">
              <span>View All Articles</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        {/* Featured Editorial Article */}
        {featuredBlog && (
          <div className="v2-featured-card-wrapper">
            <Link href={featuredBlog.link} className="v2-featured-card">
              <div className="v2-featured-image-col">
                <img
                  src={featuredBlog.img}
                  alt={featuredBlog.title}
                  className="v2-featured-img"
                  loading="lazy"
                />
                <div className="v2-featured-img-overlay" />
                <span className="v2-pill-featured">
                  <Sparkles size={12} /> FEATURED CASE STUDY
                </span>
              </div>

              <div className="v2-featured-content-col">
                <div className="v2-article-meta">
                  <span className="v2-meta-tag">{featuredBlog.category || "Growth"}</span>
                  <span className="v2-meta-item">
                    <Calendar size={13} /> {featuredBlog.date}
                  </span>
                  <span className="v2-meta-item">
                    <Clock size={13} /> {featuredBlog.readTime || "5 min read"}
                  </span>
                </div>

                <h3 className="v2-featured-title">{featuredBlog.title}</h3>
                <p className="v2-featured-desc">{featuredBlog.desc}</p>

                <div className="v2-featured-author-row">
                  <div className="v2-author-avatar">A</div>
                  <div className="v2-author-info">
                    <span className="v2-author-name">{featuredBlog.author || "AdClan Editorial"}</span>
                    <span className="v2-author-role">Strategy & Growth Team</span>
                  </div>

                  <span className="v2-read-cta">
                    Read Article <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* 4-Card Secondary Grid */}
        <div className="v2-blog-grid">
          {gridBlogs.map((blog) => (
            <Link key={blog.id} href={blog.link} className="v2-blog-card">
              <div className="v2-blog-card-thumb">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="v2-blog-card-img"
                  loading="lazy"
                />
                <div className="v2-blog-thumb-overlay" />
                <span className="v2-blog-badge">{blog.category || "Strategy"}</span>
              </div>

              <div className="v2-blog-card-body">
                <div className="v2-card-meta">
                  <span>
                    <Calendar size={12} /> {blog.date}
                  </span>
                  <span>
                    <Clock size={12} /> {blog.readTime || "4 min read"}
                  </span>
                </div>

                <h4 className="v2-blog-card-title">{blog.title}</h4>

                <div className="v2-blog-card-footer">
                  <span className="v2-card-link-text">
                    Read Insight <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
