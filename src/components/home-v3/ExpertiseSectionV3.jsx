"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Play, CheckCircle2 } from "lucide-react";

const CAPABILITIES = [
  {
    id: "01",
    title: "Brand Strategy & Positioning",
    discipline: "BRAND ARCHITECTURE",
    desc: "We define distinctive market territory. Through ethnographic consumer research, competitive whitespace analysis, and brand architecture, we engineer positioning that cannot be commoditized.",
    tags: ["Brand Positioning", "Identity Systems", "Brand Books", "Verbal Tone & Voice", "Corporate Rebranding"],
    video: "/service/branding.mp4",
    projectLink: "/services",
  },
  {
    id: "02",
    title: "Creative TVCs & Broadcast Films",
    discipline: "COMMERCIAL ADVERTISING",
    desc: "Broadcast-quality commercials and digital films designed to capture culture. From high-concept scripting to international post-production, we engineer unignorable emotional resonance.",
    tags: ["Television Commercials", "Digital Ad Films", "Creative Copywriting", "Sound Design & Direction"],
    video: "/service/creative.mp4",
    projectLink: "/services",
  },
  {
    id: "03",
    title: "Media Planning & Buying",
    discipline: "MASS REACH & AMPLIFICATION",
    desc: "Integrated media deployment across Radio Mirchi/Red FM, leading TV channels, print, high-impact outdoor transit, and digital networks for maximum cost-per-reach efficiency.",
    tags: ["Radio Networks", "Print Media", "Transit & OOH", "Cross-Platform Optimization", "Broadcast TV"],
    video: "/service/video.mp4",
    projectLink: "/services",
  },
  {
    id: "04",
    title: "Digital Performance & Ecosystems",
    discipline: "DATA-DRIVEN GROWTH",
    desc: "Hyper-targeted digital marketing, algorithmic media buying, and conversion architecture engineered to maximize customer lifetime value and drive verifiable ROAS.",
    tags: ["Meta & Google Ads", "Search Engine Authority", "Funnel Optimization", "CRO & Analytics"],
    video: "/service/digital marketing.mp4",
    projectLink: "/services",
  },
  {
    id: "05",
    title: "OTT & Programmatic Advertising",
    discipline: "STREAMING NETWORKS",
    desc: "Precision programmatic advertising across Disney+ Hotstar, JioCinema, SonyLIV, and premium connected TV platforms targeting high-intent demographic segments.",
    tags: ["Connected TV (CTV)", "High-Impact Pre-Rolls", "Programmatic Buying", "Live Sports Integration"],
    video: "/service/video.mp4",
    projectLink: "/services",
  },
  {
    id: "06",
    title: "Celebrity Endorsements & PR",
    discipline: "CULTURAL AUTHORITY",
    desc: "Strategic partnerships with A-list actors, sports icons, and category creators that amplify brand credibility and ignite national mainstream conversations.",
    tags: ["Celebrity Management", "Press Relations", "Influencer Media", "Event Appearances"],
    video: "/service/creative.mp4",
    projectLink: "/services",
  },
  {
    id: "07",
    title: "Experiential Activations & BTL",
    discipline: "REAL-WORLD ENGAGEMENT",
    desc: "Large-scale on-ground consumer activations, mall roadshows, product launches, and corporate summits that forge tangible, visceral memories between humans and brands.",
    tags: ["Grand Product Launches", "Mall Activations", "Corporate Summits", "Live Brand Activations"],
    video: "/service/btl.mp4",
    projectLink: "/services",
  },
  {
    id: "08",
    title: "Modern Web & Digital Platforms",
    discipline: "DIGITAL ARCHITECTURE",
    desc: "High-performance digital flagships, web apps, and interactive brand experiences built with speed, editorial aesthetics, and conversion mechanics.",
    tags: ["Next.js Applications", "Editorial UI/UX", "Mobile First", "High Conversion Rate"],
    video: "/service/web.mp4",
    projectLink: "/services",
  },
];

export default function ExpertiseSectionV3() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="v3-expertise-section" id="expertise">
      <div className="container-fluid v3-section-container px-3 px-md-5 px-xl-5">
        {/* =====================================================================
            SECTION HEADER & INTRO
            ===================================================================== */}
        <div className="row g-4 g-lg-5 align-items-end mb-5 v3-expertise-header-row">
          <div className="col-12 col-lg-7 col-xl-8">

            <h2 className="v3-editorial-headline mb-0">
              Expertise.
            </h2>
          </div>

          <div className="col-12 col-lg-5 col-xl-4 text-lg-end d-flex flex-column align-items-lg-end justify-content-end">
            <div className="v3-expertise-top-actions">
              <Link href="/services" className="v3-craft-all-link">
                <span>VIEW ALL CAPABILITIES</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================================
            REDESIGNED EXPERTISE PRESENTATION:
            Two-column layout with interactive discipline switcher + full-detail card
            ===================================================================== */}
        <div className="row g-4 g-xl-5 v3-expertise-showcase-row">
          {/* Left Column: Interactive Capabilities Directory / Tabs */}
          <div className="col-12 col-lg-5 col-xl-5">
            <div className="v3-expertise-nav-list">
              <div className="v3-expertise-nav-header">
                <span className="v3-sub-eyebrow">CORE DISCIPLINES</span>
                <span className="v3-expertise-count-badge">08 SERVICES</span>
              </div>

              {CAPABILITIES.map((cap, idx) => {
                const isActive = activeTab === idx;

                return (
                  <button
                    key={cap.id}
                    type="button"
                    className={`v3-expertise-tab-item ${isActive ? "is-active" : ""}`}
                    onClick={() => setActiveTab(idx)}
                    onMouseEnter={() => setActiveTab(idx)}
                    aria-selected={isActive}
                  >
                    <div className="v3-tab-item-left">
                      <span className="v3-tab-item-num">{cap.id}</span>
                      <div className="v3-tab-item-text">
                        <span className="v3-tab-item-discipline">{cap.discipline}</span>
                        <h3 className="v3-tab-item-title">{cap.title}</h3>
                      </div>
                    </div>

                    <div className="v3-tab-item-arrow" aria-hidden="true">
                      <ArrowRight size={16} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Discipline Spotlight Card with Hierarchy & View Projects */}
          <div className="col-12 col-lg-7 col-xl-7">
            {CAPABILITIES.map((cap, idx) => {
              const isActive = activeTab === idx;
              if (!isActive) return null;

              return (
                <div key={cap.id} className="v3-expertise-spotlight-card">
                  {/* Card Top Metadata Bar */}
                  <div className="v3-spotlight-top-bar">
                    <div className="d-flex align-items-center gap-3">
                      <span className="v3-spotlight-num">{cap.id}</span>
                      <span className="v3-spotlight-discipline">{cap.discipline}</span>
                    </div>
                    <span className="v3-spotlight-badge">SPECIALIZED SERVICE</span>
                  </div>

                  {/* Main Headline */}
                  <h3 className="v3-spotlight-title">{cap.title}</h3>

                  {/* Service Description */}
                  <p className="v3-spotlight-desc">{cap.desc}</p>

                  {/* Tags Pill Cloud */}
                  <div className="v3-spotlight-tags-section">
                    <span className="v3-spotlight-tags-label">DELIVERABLES & CAPABILITIES:</span>
                    <div className="v3-spotlight-tags-grid">
                      {cap.tags.map((tag) => (
                        <span key={tag} className="v3-spotlight-tag-pill">
                          <CheckCircle2 size={13} className="v3-tag-check-icon" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Video Reel Preview if Available */}
                  {cap.video && (
                    <div className="v3-spotlight-media-wrap mt-4">
                      <div className="v3-spotlight-video-frame">
                        <video
                          key={cap.video}
                          src={cap.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="v3-spotlight-media-video"
                        />
                        <div className="v3-spotlight-video-overlay">
                          <span className="v3-video-badge">
                            <Play size={12} fill="#ffffff" stroke="#ffffff" />
                            <span>SHOWCASE REEL</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* BOTTOM ACTION: Explicit View Projects Option Retained & Elevated */}
                  <div className="v3-spotlight-footer-actions mt-4 pt-4">
                    <Link
                      href={cap.projectLink || "/services"}
                      className="v3-expertise-view-projects-btn"
                    >
                      <span className="v3-cta-dash" aria-hidden="true" />
                      <span>VIEW PROJECTS IN THIS DOMAIN</span>
                      <ArrowUpRight size={16} />
                    </Link>

                    <Link href="/projects" className="v3-expertise-archive-link">
                      <span>EXPLORE CASE STUDIES</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
