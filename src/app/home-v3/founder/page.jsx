"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import HomeV3Navbar from "@/components/home-v3/HomeV3Navbar";
import HomeV3Footer from "@/components/home-v3/HomeV3Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/components/home-v3/homeV3.css";
import "@/components/home-v3/homeV3Sections.css";

export default function HomeV3FounderPage() {
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

                <h1 className="v3-craft-heading" style={{ fontSize: "clamp(38px, 4.2vw, 64px)" }}>
                  SANDEEP DUBEY
                </h1>
                <span className="v3-founder-official-title d-block mb-3">
                  Founder & Chief Executive Officer • AdClan Media
                </span>

                <p className="v3-founder-biography">
                  Visionary leader with expertise in brand strategy and digital innovation. With over
                  15 years of industry experience, Sandeep Dubey has helped brands find clarity, build
                  enduring market identities, and scale with purpose across Indian and global markets.
                </p>

                <blockquote className="v3-founder-callout-quote my-4">
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
      </main>
      <HomeV3Footer />
    </div>
  );
}
