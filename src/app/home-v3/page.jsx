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
          HERO SCREEN (EXACTLY AS USER DESIGNED & STYLED IN homeV3.css)
          - Keeps exact background gradient, architectural circle, and slider
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

        {/* 1. Exact Reference Top Navigation Bar (OUR CRAFT, NARRATIVE, EXPERTISE, BRANDS, REACH US) */}
        <HomeV3Navbar />

        {/* 2. Exact Reference Hero Section with Synchronized 3D Card Slider */}
        <HeroBannerSliderV3 />

        {/* 3. Exact Reference Bottom Services Strip with Crisp Iconography */}
        <BottomServicesBarV3 />
      </section>

      {/* =========================================================================
          SUBSEQUENT SECTIONS IN MATCHING HOME-V3 WARM EDITORIAL AESTHETIC
          ========================================================================= */}
      
      {/* 4. NEW SECTION: "Our Craft" (Combined portfolio placed immediately after Hero Banner per Section 3 instructions) */}
      <OurCraftSectionV3 />

      {/* 5. Narrative Section ("The Art of Listening", Methodology + Founder & CEO) */}
      <NarrativeSectionV3 />

      {/* 6. Expertise Section (Redesigned "What We Do" -> "Expertise") */}
      <ExpertiseSectionV3 />

      {/* 6. Work Section ("Our work" -> "Work", Cinematic Reels + Case Studies) */}
      <WorkSectionV3 />

      {/* 7. Brands Section ("Our clients" -> "Brands", Dual Infinite Marquee) */}
      <BrandsSectionV3 />

      {/* 8. The Journal / Blog Section ("Stories Behind the Strategy") */}
      <HomeBlogSectionV3 />

      {/* 9. Reach Us Section ("reach us" remains same) */}
      <ReachUsSectionV3 />

      {/* 10. Ultra-Premium Bespoke Home-v3 Footer */}
      <HomeV3Footer />
    </div>
  );
}
