"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, MessageSquare, PhoneCall } from "lucide-react";

export default function CtaSectionV2() {
  return (
    <section className="v2-cta-section" id="v2-cta">
      <div className="v2-ambient-glow v2-ambient-glow-cta" />

      <div className="v2-container">
        <div className="v2-cta-card">
          {/* Subtle grid pattern inside */}
          <div className="v2-cta-grid-pattern" />

          {/* Availability pill */}
          <div className="v2-cta-availability">
            <span className="v2-live-pulse-green" />
            <span>Accepting New Brand Partnerships</span>
          </div>

          <h2 className="v2-cta-title">
            Ready To Build Something <br />
            <span className="v2-gradient-text">Truly Unforgettable?</span>
          </h2>

          <p className="v2-cta-desc">
            Partner with Delhi-NCR's top creative & performance agency. From viral commercial
            films to high-ROI multi-channel campaigns, let's turn your vision into market dominance.
          </p>

          <div className="v2-cta-actions">
            <Link href="/reach-us" className="v2-cta-btn-primary">
              <PhoneCall size={18} />
              <span>Schedule Strategy Call</span>
              <ArrowUpRight size={18} />
            </Link>

            <Link href="/what-we-do" className="v2-cta-btn-secondary">
              <Sparkles size={18} />
              <span>Explore Capabilities</span>
            </Link>
          </div>

          {/* Quick trust metrics */}
          <div className="v2-cta-trust-row">
            <div className="v2-cta-trust-item">
              <strong>24h</strong>
              <span>Response Time</span>
            </div>
            <div className="v2-cta-trust-divider" />
            <div className="v2-cta-trust-item">
              <strong>100+</strong>
              <span>Brands Scaled</span>
            </div>
            <div className="v2-cta-trust-divider" />
            <div className="v2-cta-trust-item">
              <strong>100%</strong>
              <span>Tailored Strategy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
