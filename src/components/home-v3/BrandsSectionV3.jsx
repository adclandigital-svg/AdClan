"use client";

import React from "react";
import Link from "next/link";

// 32 Client Logos
const TRACK_A = [
  { id: 1, src: "/client-logo/adclan-logo-1.png", alt: "Brand Partner 1" },
  { id: 2, src: "/client-logo/adclan-logo-2.png", alt: "Brand Partner 2" },
  { id: 3, src: "/client-logo/adclan-logo-3.png", alt: "Brand Partner 3" },
  { id: 4, src: "/client-logo/adclan-logo-4.png", alt: "Brand Partner 4" },
  { id: 5, src: "/client-logo/adclan-logo-5.png", alt: "Brand Partner 5" },
  { id: 6, src: "/client-logo/adclan-logo-6.png", alt: "Brand Partner 6" },
  { id: 7, src: "/client-logo/adclan-logo-7.png", alt: "Brand Partner 7" },
  { id: 8, src: "/client-logo/adclan-logo-8.png", alt: "Brand Partner 8" },
  { id: 9, src: "/client-logo/adclan-logo-9.png", alt: "Brand Partner 9" },
  { id: 10, src: "/client-logo/adclan-logo-10.png", alt: "Brand Partner 10" },
  { id: 11, src: "/client-logo/adclan-logo-11.png", alt: "Brand Partner 11" },
  { id: 12, src: "/client-logo/adclan-logo-12.png", alt: "Brand Partner 12" },
  { id: 13, src: "/client-logo/adclan-logo-13.png", alt: "Brand Partner 13" },
  { id: 14, src: "/client-logo/adclan-logo-14.png", alt: "Brand Partner 14" },
  { id: 15, src: "/client-logo/adclan-logo-15.png", alt: "Brand Partner 15" },
  { id: 16, src: "/client-logo/adclan-logo-16.png", alt: "Brand Partner 16" },
];

const TRACK_B = [
  { id: 17, src: "/client-logo/adclan-logo-17.png", alt: "Brand Partner 17" },
  { id: 18, src: "/client-logo/adclan-logo-18.png", alt: "Brand Partner 18" },
  { id: 19, src: "/client-logo/adclan-logo-19.png", alt: "Brand Partner 19" },
  { id: 20, src: "/client-logo/adclan-logo-20.png", alt: "Brand Partner 20" },
  { id: 21, src: "/client-logo/adclan-logo-21.png", alt: "Brand Partner 21" },
  { id: 22, src: "/client-logo/adclan-logo-22.png", alt: "Brand Partner 22" },
  { id: 23, src: "/client-logo/adclan-logo-23.png", alt: "Brand Partner 23" },
  { id: 24, src: "/client-logo/adclan-logo-24.png", alt: "Brand Partner 24" },
  { id: 25, src: "/client-logo/adclan-logo-25.png", alt: "Brand Partner 25" },
  { id: 26, src: "/client-logo/adclan-logo-26.png", alt: "Brand Partner 26" },
  { id: 27, src: "/client-logo/adclan-logo-27.png", alt: "Brand Partner 27" },
  { id: 28, src: "/client-logo/adclan-logo-28.png", alt: "Brand Partner 28" },
  { id: 29, src: "/client-logo/adclan-logo-29.png", alt: "Brand Partner 29" },
  { id: 30, src: "/client-logo/adclan-logo-30.png", alt: "Brand Partner 30" },
  { id: 31, src: "/client-logo/adclan-logo-31.svg", alt: "Brand Partner 31" },
  { id: 32, src: "/client-logo/adclan-logo-32.png", alt: "Brand Partner 32" },
];

export default function BrandsSectionV3() {
  return (
    <section className="v3-brands-section" id="brands">
      <div className="container-fluid v3-section-container px-3 px-md-5 px-xl-5">
        {/* Section Header with Bootstrap row & col */}
        <div className="row mb-5">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="v3-section-eyebrow-wrap">
              <span className="v3-eyebrow-dash" />
              <span className="v3-section-eyebrow">PARTNERSHIPS</span>
            </div>
            <h2 className="v3-craft-heading">
              BRANDS
            </h2>
            <p className="v3-editorial-subtext">
              From iconic consumer staples to modern enterprise innovators, leading brands across
              diverse industries partner with AdClan to command attention and create lasting market impact.
            </p>
          </div>
        </div>

        {/* Endless Logo Marquee Ribbon with edge feathering */}
        <div className="v3-brands-ribbon-stage">
          <div className="v3-ribbon-mask-left" />
          <div className="v3-ribbon-mask-right" />

          {/* Row 1: Leftward infinite motion */}
          <div className="v3-marquee-ribbon-row v3-row-scroll-left">
            {[...TRACK_A, ...TRACK_A].map((brand, idx) => (
              <div key={`trackA-${brand.id}-${idx}`} className="v3-floating-logo-item">
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="v3-prestigious-logo"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Row 2: Rightward infinite motion */}
          <div className="v3-marquee-ribbon-row v3-row-scroll-right">
            {[...TRACK_B, ...TRACK_B].map((brand, idx) => (
              <div key={`trackB-${brand.id}-${idx}`} className="v3-floating-logo-item">
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="v3-prestigious-logo"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Trust Metrics Bar with Bootstrap row & col-md-4 */}
        <div className="row g-4 v3-brands-bottom-strip mt-5">
          <div className="col-12 col-md-4">
            <div className="v3-brands-strip-item h-100">
              <span className="v3-strip-highlight">100+ BRANDS</span>
              <span className="v3-strip-caption">FMCG, Real Estate, OTT & Consumer Tech</span>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="v3-brands-strip-item h-100">
              <span className="v3-strip-highlight">99.4% ATTENTION</span>
              <span className="v3-strip-caption">High-impact recall and consumer engagement</span>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="v3-brands-strip-item h-100">
              <span className="v3-strip-highlight">PAN-INDIA SCALE</span>
              <span className="v3-strip-caption">Delhi-NCR, Mumbai & Tier-1 Metros</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
