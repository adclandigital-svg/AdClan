"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogListData as blogs } from "@/data/blogListData";

export default function HomeBlogSectionV3() {
  // Select 3 flagship editorial dispatches
  const curatedArticles = blogs.slice(1, 4);

  return (
    <section className="v3-journal-section" id="stories">
      <div className="container-fluid v3-section-container px-3 px-md-5 px-xl-5">
        {/* Section Header with Bootstrap row & col */}
        <div className="row mb-5">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="v3-section-eyebrow-wrap">
              <span className="v3-eyebrow-dash" />
              <span className="v3-section-eyebrow">PERSPECTIVES</span>
            </div>
            <h2 className="v3-editorial-headline">
              Stories Behind <br />
              <span>The Strategy.</span>
            </h2>
            <p className="v3-editorial-subtext">
              Dispatches on brand architecture, media disruption, creative technology,
              and the modern psychology of consumer choice.
            </p>
          </div>
        </div>

        {/* Stately 3-Column Curated Journal Grid via Bootstrap row & col-md-6 col-lg-4 */}
        <div className="row g-4 mb-5 v3-journal-three-col-grid">
          {curatedArticles.map((article, idx) => (
            <div key={article.id} className="col-12 col-md-6 col-lg-4">
              <Link
                href={article.link}
                className="v3-journal-card h-100 d-flex flex-column justify-content-between"
              >
                <div>
                  <div className="v3-journal-media-frame">
                    <img
                      src={article.img}
                      alt={article.title}
                      className="v3-journal-card-img"
                      loading="lazy"
                    />
                    <div className="v3-journal-num-badge">
                      <span>DISPATCH 0{idx + 1}</span>
                    </div>
                  </div>

                  <div className="v3-journal-card-body">
                    <div className="v3-journal-meta-row">
                      <span className="v3-journal-cat">{article.category}</span>
                      <span className="v3-dot-separator">•</span>
                      <span className="v3-journal-date">{article.date}</span>
                      <span className="v3-dot-separator">•</span>
                      <span className="v3-journal-read-time">{article.readTime || "5 min read"}</span>
                    </div>

                    <h3 className="v3-journal-card-title">{article.title}</h3>
                    <p className="v3-journal-card-excerpt">{article.desc}</p>
                  </div>
                </div>

                <div className="px-4 pb-4">
                  <div className="v3-journal-card-cta">
                    <span className="v3-cta-dash" aria-hidden="true" />
                    <span>READ DISPATCH</span>
                    <ArrowUpRight size={14} className="v3-action-arrow" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Stories Signature CTA Link */}
        <div className="row justify-content-center text-center pt-2">
          <div className="col-auto">
            <Link href="/blogs" className="v3-editorial-cta-link">
              <span className="v3-cta-dash" aria-hidden="true" />
              <span>ACCESS COMPLETE ADCLAN JOURNAL ARCHIVE</span>
              <span className="v3-cta-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
