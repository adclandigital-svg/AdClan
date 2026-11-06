"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import "./brandsV3.css";

// Exact 8-Category Client Data from Main /clients Roster
const CLIENT_CATEGORIES = [
  {
    id: "real-estate",
    title: "Real Estate & Infrastructure",
    shortLabel: "Real Estate",
    logos: [
      "/client-logo/adclan-logo-9.png",
      "/client-logo/adclan-logo-10.png",
      "/client-logo/adclan-logo-11.png",
      "/client-logo/adclan-logo-15.png",
      "/client-logo/adclan-logo-17.png",
      "/client-logo/adclan-logo-18.png",
      "/client-logo/adclan-logo-19.png",
      "/client-logo/adclan-logo-20.png",
      "/client-logo/adclan-logo-22.png",
      "/client-logo/adclan-logo-24.png",
      "/client-logo/adclan-logo-28.png",
      "/client-logo/adclan-logo-30.png",
      "/client-logo/adclan-logo-32.png",
      "/client-logo/adclan-logo-25.png",
      "/new-clients/2.webp",
      "/new-clients/3.webp",
      "/new-clients/4.webp",
      "/new-clients/6.webp",
      "/new-clients/8.webp",
      "/new-clients/13.webp",
      "/new-clients/14.webp",
      "/new-clients/16.webp",
      "/new-clients/17.webp",
      "/new-clients/20.webp",
      "/new-clients/22.webp",
    ],
  },
  {
    id: "fmcg",
    title: "FMCG & Retail",
    shortLabel: "FMCG & Retail",
    logos: [
      "/client-logo/adclan-logo-3.png",
      "/client-logo/adclan-logo-4.png",
      "/client-logo/adclan-logo-8.png",
      "/new-clients/7.webp",
      "/new-clients/24.webp",
    ],
  },
  {
    id: "jewellery",
    title: "Jewellery & Fashion",
    shortLabel: "Jewellery & Fashion",
    logos: [
      "/client-logo/adclan-logo-13.png",
      "/client-logo/adclan-logo-27.png",
      "/client-logo/adclan-logo-29.png",
      "/client-logo/adclan-logo-14.png",
      "/new-clients/15.webp",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare & Wellness",
    shortLabel: "Healthcare",
    logos: [
      "/client-logo/adclan-logo-2.png",
      "/client-logo/adclan-logo-5.png",
      "/client-logo/adclan-logo-23.png",
      "/new-clients/5.webp",
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Industrial",
    shortLabel: "Manufacturing",
    logos: [
      "/client-logo/adclan-logo-16.png",
      "/client-logo/adclan-logo-26.png",
      "/new-clients/10.webp",
      "/new-clients/21.webp",
    ],
  },
  {
    id: "tech",
    title: "Technology & Electronics",
    shortLabel: "Tech & Electronics",
    logos: [
      "/client-logo/adclan-logo-21.png",
      "/client-logo/adclan-logo-31.svg",
    ],
  },
  {
    id: "consulting",
    title: "Consulting & Services",
    shortLabel: "Consulting",
    logos: [
      "/client-logo/adclan-logo-12.png",
      "/client-logo/adclan-logo-1.png",
      "/client-logo/adclan-logo-6.png",
    ],
  },
  {
    id: "education",
    title: "Institutes & Education",
    shortLabel: "Education",
    logos: [
      "/new-clients/11.webp",
      "/new-clients/19.webp",
      "/new-clients/23.webp",
    ],
  },
];

export default function BrandsSectionV3({ isStandalone = false }) {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const totalLogosCount = useMemo(() => {
    return CLIENT_CATEGORIES.reduce((acc, cat) => acc + cat.logos.length, 0);
  }, []);

  const displayedCategories = useMemo(() => {
    if (activeCategory === "ALL") return CLIENT_CATEGORIES;
    return CLIENT_CATEGORIES.filter((cat) => cat.id === activeCategory);
  }, [activeCategory]);

  return (
    <section
      className={`v3-brands-section ${isStandalone ? "is-standalone" : ""}`}
      id="brands"
    >
      <div className="container-fluid v3-section-container px-3 px-md-5 px-xl-5">
        {/* =====================================================================
            1. PAGE HEADER
            ===================================================================== */}
        <div className="v3-brands-page-header">
          <div className="row align-items-center justify-content-between g-4">
            <div className="col-12 col-md-8">
              <h1 className="v3-brands-headline mb-0">
                Trusted by Brands, <br />
                <span>that shape the nation.</span>
              </h1>
            </div>

            <div className="col-12 col-md-4 text-start text-md-end">
              <Link href="/home-v3/connect" className="v3-brands-top-btn">
                <span>BECOME A PARTNER</span>
                <div className="v3-btn-arrow-wrap">
                  <ArrowUpRight size={15} />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================================
            2. INTERACTIVE CATEGORY FILTER TABS
            ===================================================================== */}
        <div className="v3-brands-tabs-wrapper">
          <div className="v3-brands-tabs">
            <button
              type="button"
              className={`v3-brands-tab-btn ${activeCategory === "ALL" ? "is-active" : ""}`}
              onClick={() => setActiveCategory("ALL")}
            >
              <span>All Categories</span>
              <span className="v3-brands-tab-count">{totalLogosCount}</span>
            </button>

            {CLIENT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`v3-brands-tab-btn ${activeCategory === cat.id ? "is-active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.shortLabel}</span>
                <span className="v3-brands-tab-count">{cat.logos.length}</span>
              </button>
            ))}
          </div>
        </div>

        {/* =====================================================================
            3. CATEGORY SECTIONS STACK
            ===================================================================== */}
        <div className="v3-brands-categories-stack">
          {displayedCategories.map((section) => (
            <div
              key={section.id}
              className="v3-brands-cat-block"
              id={`cat-${section.id}`}
            >
              {/* Category Header */}
              <div className="v3-brands-cat-header">
                <div className="v3-brands-cat-title-wrap">
                  <span className="v3-brands-cat-indicator" />
                  <h2 className="v3-brands-cat-title">{section.title}</h2>
                </div>

                <span className="v3-brands-cat-pill">
                  {section.logos.length} PARTNERS
                </span>
              </div>

              {/* Symmetrical 6-Column Logo Grid */}
              <div className="v3-brands-cat-grid">
                {section.logos.map((logo, i) => (
                  <div
                    key={`${section.id}-${i}-${logo}`}
                    className="v3-brand-card"
                    title={`${section.title} Partner ${i + 1}`}
                  >
                    {/* biome-ignore lint/performance/noImgElement: static client logo asset */}
                    <img
                      src={logo}
                      alt={`${section.title} Partner ${i + 1}`}
                      className="v3-brand-card-img"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================================
            4. TRUST METRICS BAR
            ===================================================================== */}
        <div className="row g-4 v3-brands-stats-strip">
          <div className="col-12 col-md-4">
            <div className="v3-brands-stat-box">
              <span className="v3-brands-stat-label">MARKET TRUST</span>
              <span className="v3-brands-stat-num">50+ BRANDS</span>
              <p className="v3-brands-stat-desc">
                High-growth consumer brands, legacy conglomerates, and venture
                enterprises.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="v3-brands-stat-box">
              <span className="v3-brands-stat-label">DIVERSIFICATION</span>
              <span className="v3-brands-stat-num">8 VERTICALS</span>
              <p className="v3-brands-stat-desc">
                Real Estate, FMCG, Luxury Jewellery, Healthcare, Tech &
                Industrial domains.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="v3-brands-stat-box">
              <span className="v3-brands-stat-label">GEOGRAPHIC SCALE</span>
              <span className="v3-brands-stat-num">PAN-INDIA</span>
              <p className="v3-brands-stat-desc">
                Campaign deployments active across Delhi-NCR, Mumbai, Bangalore
                & Tier-1 metros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
