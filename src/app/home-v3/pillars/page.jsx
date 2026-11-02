"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import HomeV3Navbar from "@/components/home-v3/HomeV3Navbar";
import HomeV3Footer from "@/components/home-v3/HomeV3Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/components/home-v3/homeV3.css";
import "@/components/home-v3/homeV3Sections.css";

export default function HomeV3PillarsPage() {
  useEffect(() => {
    document.body.classList.add("home-v3-active");
    window.scrollTo({ top: 0, behavior: "instant" });

    return () => {
      document.body.classList.remove("home-v3-active");
    };
  }, []);

  return (
    <div className="home-v3-full-flow">
      <HomeV3Navbar />
      <main className="pt-5 mt-5">
        <div className="container-fluid v3-section-container px-3 px-md-5 px-xl-5 py-5">
          <div className="d-flex align-items-center gap-3 mb-4">
            <Link
              href="/home-v3"
              className="d-inline-flex align-items-center gap-2 text-decoration-none text-muted"
              style={{ fontFamily: "Raleway, sans-serif", fontSize: "12px", fontWeight: "700", letterSpacing: "0.14em" }}
            >
              <ArrowLeft size={14} />
              <span>BACK TO HOME-V3</span>
            </Link>
          </div>

          <div className="v3-methodology-section mb-5">
            <div className="row mb-5">
              <div className="col-12 col-lg-8">
                <div className="v3-section-eyebrow-wrap">
                  <span className="v3-eyebrow-dash" />
                  <span className="v3-section-eyebrow">OUR METHODOLOGY</span>
                </div>
                <h1 className="v3-craft-heading" style={{ fontSize: "clamp(38px, 4.2vw, 68px)" }}>
                  THE D3 PILLARS
                </h1>
                <p className="v3-editorial-subtext">
                  Our strategic framework combines investigative market insight, world-class aesthetic craft,
                  and surgical multi-channel orchestration to drive compounding brand equity.
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-12 col-md-4">
                <div className="v3-pillar-card h-100">
                  <div className="v3-pillar-top">
                    <span className="v3-pillar-num">01</span>
                    <span className="v3-pillar-phase">STRATEGY</span>
                  </div>
                  <h2 className="v3-pillar-title" style={{ fontFamily: "Raleway, sans-serif", fontWeight: "800" }}>
                    Think.
                  </h2>
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
                  <h2 className="v3-pillar-title" style={{ fontFamily: "Raleway, sans-serif", fontWeight: "800" }}>
                    Create.
                  </h2>
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
                  <h2 className="v3-pillar-title" style={{ fontFamily: "Raleway, sans-serif", fontWeight: "800" }}>
                    Deliver.
                  </h2>
                  <p className="v3-pillar-desc">
                    We execute with precision across media channels. Every project is measured for
                    performance, engagement, and exponential brand recall that compounds for years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <HomeV3Footer />
    </div>
  );
}
