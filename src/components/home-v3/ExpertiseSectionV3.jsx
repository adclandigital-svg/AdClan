"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Plus, Minus } from "lucide-react";

const CAPABILITIES = [
  {
    id: "01",
    title: "Brand Strategy & Positioning",
    discipline: "BRAND ARCHITECTURE",
    desc: "We define distinctive market territory. Through ethnographic consumer research, competitive whitespace analysis, and brand architecture, we engineer positioning that cannot be commoditized.",
    tags: ["Brand Positioning", "Identity Systems", "Brand Books", "Verbal Tone & Voice", "Corporate Rebranding"],
    video: "/service/branding.mp4",
  },
  {
    id: "02",
    title: "Creative TVCs & Broadcast Films",
    discipline: "COMMERCIAL ADVERTISING",
    desc: "Broadcast-quality commercials and digital films designed to capture culture. From high-concept scripting to international post-production, we engineer unignorable emotional resonance.",
    tags: ["Television Commercials", "Digital Ad Films", "Creative Copywriting", "Sound Design & Direction"],
    video: "/service/creative.mp4",
  },
  {
    id: "03",
    title: "Media Planning & Buying",
    discipline: "MASS REACH & REACH AMPLIFICATION",
    desc: "Integrated media deployment across Radio Mirchi/Red FM, leading TV channels, print, high-impact outdoor transit, and digital networks for maximum cost-per-reach efficiency.",
    tags: ["Radio Networks", "Print Media", "Transit & OOH", "Cross-Platform Optimization", "Broadcast TV"],
    video: "/service/video.mp4",
  },
  {
    id: "04",
    title: "Digital Performance & Ecosystems",
    discipline: "DATA-DRIVEN GROWTH",
    desc: "Hyper-targeted digital marketing, algorithmic media buying, and conversion architecture engineered to maximize customer lifetime value and drive verifiable ROAS.",
    tags: ["Meta & Google Ads", "Search Engine Authority", "Funnel Optimization", "CRO & Analytics"],
    video: "/service/digital marketing.mp4",
  },
  {
    id: "05",
    title: "OTT & Programmatic Advertising",
    discipline: "STREAMING NETWORKS",
    desc: "Precision programmatic advertising across Disney+ Hotstar, JioCinema, SonyLIV, and premium connected TV platforms targeting high-intent demographic segments.",
    tags: ["Connected TV (CTV)", "High-Impact Pre-Rolls", "Programmatic Buying", "Live Sports Integration"],
    video: "/service/video.mp4",
  },
  {
    id: "06",
    title: "Celebrity Endorsements & PR",
    discipline: "CULTURAL AUTHORITY",
    desc: "Strategic partnerships with A-list actors, sports icons, and category creators that amplify brand credibility and ignite national mainstream conversations.",
    tags: ["Celebrity Management", "Press Relations", "Influencer Media", "Event Appearances"],
    video: "/service/creative.mp4",
  },
  {
    id: "07",
    title: "Experiential Activations & BTL",
    discipline: "REAL-WORLD ENGAGEMENT",
    desc: "Large-scale on-ground consumer activations, mall roadshows, product launches, and corporate summits that forge tangible, visceral memories between humans and brands.",
    tags: ["Grand Product Launches", "Mall Activations", "Corporate Summits", "Live Brand Activations"],
    video: "/service/btl.mp4",
  },
  {
    id: "08",
    title: "Modern Web & Digital Platforms",
    discipline: "DIGITAL ARCHITECTURE",
    desc: "High-performance digital flagships, web apps, and interactive brand experiences built with speed, editorial aesthetics, and conversion mechanics.",
    tags: ["Next.js Applications", "Editorial UI/UX", "Mobile First", "High Conversion Rate"],
    video: "/service/web.mp4",
  },
];

export default function ExpertiseSectionV3() {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section className="v3-expertise-section" id="expertise">
      <div className="container-fluid v3-section-container px-3 px-md-5 px-xl-5">
        <div className="row g-4 g-lg-5 align-items-start v3-expertise-split-layout">
          {/* Left Column: Sticky Editorial Heading & Descriptor (Bootstrap col-12 col-lg-5 col-xl-4) */}
          <div className="col-12 col-lg-5 col-xl-4 v3-expertise-col-sticky">
            <div className="v3-section-eyebrow-wrap">
              <span className="v3-eyebrow-dash" />
              <span className="v3-section-eyebrow">02 / EXPERTISE</span>
            </div>

            <h2 className="v3-editorial-headline">
              360° Marketing. <br />
              <span>Engineered for Scale.</span>
            </h2>

            <p className="v3-editorial-subtext">
              We bridge creative ambition and performance science, deploying unified capabilities
              across traditional airwaves, high-intent digital streams, and live arenas.
            </p>

            <div className="v3-expertise-sticky-cta">
              <Link href="/services" className="v3-editorial-cta-link">
                <span className="v3-cta-dash" aria-hidden="true" />
                <span>VIEW ALL CAPABILITIES</span>
                <span className="v3-cta-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Architectural Interactive Accordion Rows (Bootstrap col-12 col-lg-7 col-xl-8) */}
          <div className="col-12 col-lg-7 col-xl-8 v3-expertise-col-rows">
            {CAPABILITIES.map((item, idx) => {
              const isOpen = activeItem === idx;

              return (
                <div
                  key={item.id}
                  className={`v3-service-accordion-row ${isOpen ? "is-expanded" : ""}`}
                  onMouseEnter={() => setActiveItem(idx)}
                  onClick={() => setActiveItem(isOpen ? -1 : idx)}
                >
                  <div className="v3-accordion-summary">
                    <div className="v3-summary-left">
                      <span className="v3-accordion-num">{item.id}</span>
                      <div className="v3-summary-title-block">
                        <span className="v3-summary-discipline">{item.discipline}</span>
                        <h3 className="v3-accordion-title">{item.title}</h3>
                      </div>
                    </div>

                    <div className="v3-summary-toggle">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </div>

                  {/* Expandable Details Tray with Bootstrap Grid */}
                  <div className={`v3-accordion-details ${isOpen ? "open" : ""}`}>
                    <div className="row g-4 align-items-center v3-accordion-expanded-layout">
                      <div className={`col-12 ${item.video && isOpen ? "col-md-7 col-lg-8" : "col-12"} v3-accordion-text-content`}>
                        <p className="v3-accordion-desc">{item.desc}</p>

                        <div className="v3-accordion-tags-grid">
                          {item.tags.map((tag) => (
                            <span key={tag} className="v3-accordion-tag">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="v3-accordion-footer">
                          <Link href="/services" className="v3-accordion-explore-link">
                            <span>EXPLORE CASE STUDIES IN THIS DOMAIN</span>
                            <ArrowUpRight size={14} />
                          </Link>
                        </div>
                      </div>

                      {item.video && isOpen && (
                        <div className="col-12 col-md-5 col-lg-4">
                          <div className="v3-accordion-video-preview">
                            <video
                              src={item.video}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="v3-accordion-preview-media"
                            />
                            <div className="v3-preview-badge">LIVE REEL</div>
                          </div>
                        </div>
                      )}
                    </div>
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
