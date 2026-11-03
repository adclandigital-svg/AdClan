"use client";

import React, { useEffect } from "react";
import HomeV3Navbar from "@/components/home-v3/HomeV3Navbar";
import HeroBannerSliderV3 from "@/components/home-v3/HeroBannerSliderV3";
import BottomServicesBarV3 from "@/components/home-v3/BottomServicesBarV3";
import OurCraftSectionV3 from "@/components/home-v3/OurCraftSectionV3";
import NarrativeSectionV3 from "@/components/home-v3/NarrativeSectionV3";
import ExpertiseSectionV3 from "@/components/home-v3/ExpertiseSectionV3";
import WorkSectionV3 from "@/components/home-v3/WorkSectionV3";
import BrandsSectionV3 from "@/components/home-v3/BrandsSectionV3";
import HomeBlogSectionV3 from "@/components/home-v3/HomeBlogSectionV3";
import ReachUsSectionV3 from "@/components/home-v3/ReachUsSectionV3";
import HomeV3Footer from "@/components/home-v3/HomeV3Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/components/home-v3/homeV3.css";
import "@/components/home-v3/homeV3Sections.css";

export default function HomeV3Page() {
  useEffect(() => {
    // Add scoped class to body for Home-v3
    document.body.classList.add("home-v3-active");

    return () => {
      document.body.classList.remove("home-v3-active");
    };
  }, []);

  return (
    <div className="home-v3-full-flow">
      {/* =========================================================================
          1. MAIN HERO BANNER (PURE WHITE THEME & BODY WAVE OVERLAY)
          - Keeps exact slider layout, 3D cards, and crisp live website typography
          ========================================================================= */}
      <section className="home-v3-page-wrapper">
        <div className="home-v3-bg-decor" aria-hidden="true">
          <svg
            className="home-v3-bg-curve-svg"
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 720 0 Q 400 450 1440 900 L 1440 0 Z" />
          </svg>
          <div className="home-v3-grain" />
        </div>

        {/* Top Navigation Bar */}
        <HomeV3Navbar />

        {/* Hero Section with Synchronized 3D Card Slider */}
        <HeroBannerSliderV3 />

        {/* Bottom Services Strip with Crisp Iconography */}
        <BottomServicesBarV3 />
      </section>

      {/* =========================================================================
          HOMEPAGE – FINAL SECTION STRUCTURE (PER SECTION 3 INSTRUCTIONS)
          1. Main Hero Banner – Above
          2. Our Craft – Immediately following Hero Banner
          3. Case Studies – Optional section for future use
          4. Articles – Existing content and design same
          5. Footer – New light/white design
          ========================================================================= */}
      
      {/* 2. Our Craft (Work showcase with category filters & real project images) */}
      <OurCraftSectionV3 />

      {/* 3. Case Studies (Hidden from Homepage as requested — preserved for dedicated routes/future use) */}
      {/* <WorkSectionV3 /> */}

      {/* 4. Articles ("Stories Behind the Strategy" — Unchanged content & design) */}
      <HomeBlogSectionV3 />

      {/* =========================================================================
          SECTIONS PRESERVED FOR DEDICATED SEPARATE PAGES (PER SECTION 6)
          Hidden from Homepage, preserved intact for individual routes:
          - Narrative & Founder: /home-v3/narrative & /home-v3/founder
          - Expertise: /home-v3/expertise
          - D3 Pillars / Brands: /home-v3/pillars & /home-v3/brands
          - Connect: /home-v3/connect
          ========================================================================= */}
      {/* <NarrativeSectionV3 /> */}
      {/* <ExpertiseSectionV3 /> */}
      {/* <BrandsSectionV3 /> */}
      {/* <ReachUsSectionV3 /> */}

      {/* 5. Ultra-Clean Light/White Home-v3 Footer */}
      <HomeV3Footer />
    </div>
  );
}
