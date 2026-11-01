"use client";

import React from "react";
import Link from "next/link";
import { Quote } from "lucide-react";

export default function NarrativeSectionV3() {
  return (
    <section className="v3-narrative-section" id="narrative">
      <div className="container-fluid v3-section-container px-3 px-md-5 px-xl-5">
        {/* =====================================================================
            1. EDITORIAL SPREAD: MANIFESTO & PHILOSOPHY
            ===================================================================== */}
        {/* Section Header using Bootstrap row & col */}
        <div className="row mb-5">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="v3-section-eyebrow-wrap">
              <span className="v3-eyebrow-dash" />
              <span className="v3-section-eyebrow">02 / NARRATIVE</span>
            </div>

            <h2 className="v3-editorial-headline">
              The Art of Listening. <br />
              <span>The Power of Impact.</span>
            </h2>

            <p className="v3-editorial-subtext">
              Adclan Media Services is a premier creative brand consultancy and advertising agency
              headquartered in New Delhi. We transform ambitious brands into unignorable cultural forces.
            </p>
          </div>
        </div>

        {/* Editorial Two-Column Spread via Bootstrap Grid */}
        <div className="row g-4 g-xl-5 align-items-start mb-5 v3-narrative-intro-spread">
          {/* Left Column: Studio Photo + Micro Metrics Strip */}
          <div className="col-12 col-lg-6 v3-narrative-col-left">
            <div className="v3-narrative-image-wrapper">
              <img
                src="/home-v3/narrative_studio_adclan.jpg"
                alt="AdClan Atelier of Strategic Design"
                className="v3-narrative-studio-img"
                loading="lazy"
              />
              <div className="v3-image-corner-tag">
                <span>NEW DELHI ATELIER • EST. 2018</span>
              </div>
            </div>

            {/* Micro-metrics with clean Bootstrap col-4 distribution */}
            <div className="row g-2 text-center v3-narrative-metrics-strip mt-2">
              <div className="col-4 v3-narrative-metric-item">
                <span className="v3-metric-val">360°</span>
                <span className="v3-metric-name">Full-Stack Capability</span>
              </div>
              <div className="col-4 v3-narrative-metric-item">
                <span className="v3-metric-val">7+</span>
                <span className="v3-metric-name">Years of Excellence</span>
              </div>
              <div className="col-4 v3-narrative-metric-item">
                <span className="v3-metric-val">100+</span>
                <span className="v3-metric-name">Brands Empowered</span>
              </div>
            </div>
          </div>

          {/* Right Column: Pull Quote, Deep Philosophy & Signature CTA */}
          <div className="col-12 col-lg-6 v3-narrative-col-right d-flex flex-column justify-content-between">
            <div className="v3-editorial-quote-card">
              <Quote size={28} className="v3-quote-glyph" />
              <blockquote className="v3-manifesto-quote">
                “When the creator made us with two ears and one mouth, it was clear that we were
                meant to listen more and speak less.”
              </blockquote>
            </div>

            <div className="v3-manifesto-body">
              <p>
                At our core, Adclan operates on deep empathy and rigorous inquiry. Most agencies
                walk into the boardroom with a pre-packaged pitch deck; we walk in with open ears,
                uncompromising curiosity, and a relentless commitment to understanding your business
                fundamentals before sketching a single frame.
              </p>
              <p>
                Blending brand architecture, cinematic visual storytelling, and surgical media
                analytics across traditional television, digital networks, OTT platforms, and live
                arenas, we build comprehensive ecosystems that command attention and drive exponential
                commercial return.
              </p>
            </div>

            <div className="v3-narrative-cta-wrap">
              <Link href="/about" className="v3-editorial-cta-link">
                <span className="v3-cta-dash" aria-hidden="true" />
                <span>EXPLORE OUR PHILOSOPHY</span>
                <span className="v3-cta-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================================
            2. METHODOLOGY: THINK. CREATE. DELIVER. (ARCHITECTURAL STRIP)
            ===================================================================== */}
        <div className="v3-methodology-section mb-5">
          <div className="row mb-4">
            <div className="col-12">
              <span className="v3-sub-eyebrow">OUR METHODOLOGY</span>
              <h3 className="v3-methodology-heading">The Three Pillars of Brand Evolution</h3>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="v3-pillar-card h-100">
                <div className="v3-pillar-top">
                  <span className="v3-pillar-num">01</span>
                  <span className="v3-pillar-phase">STRATEGY</span>
                </div>
                <h4 className="v3-pillar-title">Think.</h4>
                <p className="v3-pillar-desc">
                  We start with razor-sharp insight and market interrogation. We analyze cultural
                  undercurrents and audience psychology to ensure every creative initiative has
                  undeniable commercial intent.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="v3-pillar-card h-100">
                <div className="v3-pillar-top">
                  <span className="v3-pillar-num">02</span>
                  <span className="v3-pillar-phase">CREATIVE</span>
                </div>
                <h4 className="v3-pillar-title">Create.</h4>
                <p className="v3-pillar-desc">
                  We design and build unforgettable brand universes. From broadcast TVCs to digital
                  growth systems, aesthetic excellence meets modern technology to move audiences deeply.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="v3-pillar-card h-100">
                <div className="v3-pillar-top">
                  <span className="v3-pillar-num">03</span>
                  <span className="v3-pillar-phase">ORCHESTRATION</span>
                </div>
                <h4 className="v3-pillar-title">Deliver.</h4>
                <p className="v3-pillar-desc">
                  We execute with precision across media channels. Every project is measured for
                  performance, engagement, and exponential brand recall that compounds for years.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            3. AGENCY LEADERSHIP / FOUNDER & CEO SECTION
            ===================================================================== */}
        <div className="v3-founder-editorial-section pt-3">
          <div className="row g-4 g-lg-5 align-items-center">
            {/* Left: Portrait in Architectural Framing */}
            <div className="col-12 col-md-5 col-lg-5">
              <div className="v3-founder-portrait-frame">
                <img
                  src="/about/ceo2.png"
                  alt="Sandeep Dubey - Founder & CEO"
                  className="v3-founder-portrait-img"
                  loading="lazy"
                />
                <div className="v3-founder-corner-badge">
                  <span>FOUNDER & CEO</span>
                </div>
              </div>
            </div>

            {/* Right: Leadership Philosophy & Bio */}
            <div className="col-12 col-md-7 col-lg-7">
              <div className="v3-section-eyebrow-wrap">
                <span className="v3-eyebrow-dash" />
                <span className="v3-section-eyebrow">AGENCY LEADERSHIP</span>
              </div>

              <h3 className="v3-founder-display-name">Sandeep Dubey.</h3>
              <span className="v3-founder-official-title">Founder & Chief Executive Officer • AdClan</span>

              <p className="v3-founder-biography">
                Visionary leader with expertise in brand strategy and digital innovation. With over
                15 years of industry experience, Sandeep Dubey has helped brands find clarity, build
                enduring market identities, and scale with purpose across Indian and global markets.
              </p>

              <blockquote className="v3-founder-callout-quote">
                “Creativity must never be art for art’s sake — it must be rooted in strategic
                empathy. When you listen genuinely, the path to market leadership becomes undeniable.”
              </blockquote>

              <div className="v3-founder-sign-off">
                <span className="v3-signature-rendered">Sandeep Dubey</span>
                <span className="v3-sign-title">New Delhi Headquarters</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
