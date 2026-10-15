"use client";

import React, { useState } from "react";
import { ShieldCheck, Award, Sparkles, Building2, ArrowUpRight } from "lucide-react";

// All 32 client logos available in public/client-logo/
const LOGOS_ROW_ONE = [
  { id: 1, src: "/client-logo/adclan-logo-1.png", alt: "Client Partner 1" },
  { id: 2, src: "/client-logo/adclan-logo-2.png", alt: "Client Partner 2" },
  { id: 3, src: "/client-logo/adclan-logo-3.png", alt: "Client Partner 3" },
  { id: 4, src: "/client-logo/adclan-logo-4.png", alt: "Client Partner 4" },
  { id: 5, src: "/client-logo/adclan-logo-5.png", alt: "Client Partner 5" },
  { id: 6, src: "/client-logo/adclan-logo-6.png", alt: "Client Partner 6" },
  { id: 7, src: "/client-logo/adclan-logo-7.png", alt: "Client Partner 7" },
  { id: 8, src: "/client-logo/adclan-logo-8.png", alt: "Client Partner 8" },
  { id: 9, src: "/client-logo/adclan-logo-9.png", alt: "Client Partner 9" },
  { id: 10, src: "/client-logo/adclan-logo-10.png", alt: "Client Partner 10" },
  { id: 11, src: "/client-logo/adclan-logo-11.png", alt: "Client Partner 11" },
  { id: 12, src: "/client-logo/adclan-logo-12.png", alt: "Client Partner 12" },
  { id: 13, src: "/client-logo/adclan-logo-13.png", alt: "Client Partner 13" },
  { id: 14, src: "/client-logo/adclan-logo-14.png", alt: "Client Partner 14" },
  { id: 15, src: "/client-logo/adclan-logo-15.png", alt: "Client Partner 15" },
  { id: 16, src: "/client-logo/adclan-logo-16.png", alt: "Client Partner 16" },
];

const LOGOS_ROW_TWO = [
  { id: 17, src: "/client-logo/adclan-logo-17.png", alt: "Client Partner 17" },
  { id: 18, src: "/client-logo/adclan-logo-18.png", alt: "Client Partner 18" },
  { id: 19, src: "/client-logo/adclan-logo-19.png", alt: "Client Partner 19" },
  { id: 20, src: "/client-logo/adclan-logo-20.png", alt: "Client Partner 20" },
  { id: 21, src: "/client-logo/adclan-logo-21.png", alt: "Client Partner 21" },
  { id: 22, src: "/client-logo/adclan-logo-22.png", alt: "Client Partner 22" },
  { id: 23, src: "/client-logo/adclan-logo-23.png", alt: "Client Partner 23" },
  { id: 24, src: "/client-logo/adclan-logo-24.png", alt: "Client Partner 24" },
  { id: 25, src: "/client-logo/adclan-logo-25.png", alt: "Client Partner 25" },
  { id: 26, src: "/client-logo/adclan-logo-26.png", alt: "Client Partner 26" },
  { id: 27, src: "/client-logo/adclan-logo-27.png", alt: "Client Partner 27" },
  { id: 28, src: "/client-logo/adclan-logo-28.png", alt: "Client Partner 28" },
  { id: 29, src: "/client-logo/adclan-logo-29.png", alt: "Client Partner 29" },
  { id: 30, src: "/client-logo/adclan-logo-30.png", alt: "Client Partner 30" },
  { id: 31, src: "/client-logo/adclan-logo-31.svg", alt: "Client Partner 31" },
  { id: 32, src: "/client-logo/adclan-logo-32.png", alt: "Client Partner 32" },
];

export default function ClientsSectionV2() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section className="v2-clients-section" id="v2-clients">
      {/* Background glow and subtle grid */}
      <div className="v2-clients-grid-bg" />
      <div className="v2-ambient-glow v2-ambient-glow-center" />

      <div className="v2-container">
        {/* Section Header */}
        <div className="v2-section-header">
          <div className="v2-badge">
            <ShieldCheck size={14} className="v2-badge-icon" />
            <span>INDUSTRY LEADERSHIP & CLIENT ROSTER</span>
          </div>

          <h2 className="v2-section-title">
            Names That <span className="v2-gradient-text">Define Our Potential</span>
          </h2>

          <p className="v2-section-desc">
            From high-growth consumer brands to iconic Indian conglomerates, industry leaders trust
            AdClan to craft narratives that dominate market mindshare.
          </p>
        </div>

        {/* Marquee Showcase: Two continuous moving tracks */}
        <div className="v2-marquee-container">
          {/* Gradient fade edge masks */}
          <div className="v2-marquee-mask v2-marquee-mask-left" />
          <div className="v2-marquee-mask v2-marquee-mask-right" />

          {/* Track 1: Leftward infinite motion */}
          <div className="v2-marquee-track v2-marquee-track-left">
            {[...LOGOS_ROW_ONE, ...LOGOS_ROW_ONE].map((logo, idx) => (
              <div key={`r1-${logo.id}-${idx}`} className="v2-logo-card">
                <div className="v2-logo-inner">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="v2-logo-img"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Track 2: Rightward infinite motion */}
          <div className="v2-marquee-track v2-marquee-track-right">
            {[...LOGOS_ROW_TWO, ...LOGOS_ROW_TWO].map((logo, idx) => (
              <div key={`r2-${logo.id}-${idx}`} className="v2-logo-card">
                <div className="v2-logo-inner">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="v2-logo-img"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Trust Highlights */}
        <div className="v2-clients-summary-grid">
          <div className="v2-summary-card">
            <div className="v2-summary-icon">
              <Building2 size={24} />
            </div>
            <div className="v2-summary-text">
              <h4>100+ Enterprise & D2C Brands</h4>
              <p>Scalable brand communication across OTT, digital & print</p>
            </div>
          </div>

          <div className="v2-summary-card">
            <div className="v2-summary-icon">
              <Award size={24} />
            </div>
            <div className="v2-summary-text">
              <h4>99.4% Client Satisfaction</h4>
              <p>Long-term strategic retainers & continuous campaign ROI</p>
            </div>
          </div>

          <div className="v2-summary-card">
            <div className="v2-summary-icon">
              <Sparkles size={24} />
            </div>
            <div className="v2-summary-text">
              <h4>Pan-India Execution</h4>
              <p>Full 360° capabilities spanning Delhi-NCR, Mumbai, and tier-1 metros</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
