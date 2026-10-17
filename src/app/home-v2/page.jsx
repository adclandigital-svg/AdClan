"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect } from "react";
import MadisonIntroHero from "@/components/home/MadisonIntroHero";
import "@/components/home-v2/homeV2Sections.css";
import "./homeV2Beautify.css";

// Dynamic imports for luxury V2 home sections
const HeroBannerSliderV2 = dynamic(
  () => import("@/components/home-v2/HeroBannerSliderV2"),
  { ssr: false }
);
const ReelsSectionV2 = dynamic(
  () => import("@/components/home-v2/ReelsSectionV2"),
  { ssr: false }
);
const ClientsSectionV2 = dynamic(
  () => import("@/components/home-v2/ClientsSectionV2"),
  { ssr: false }
);
const ImpactSectionV2 = dynamic(
  () => import("@/components/home-v2/ImpactSectionV2"),
  { ssr: false }
);
const BlogSectionV2 = dynamic(
  () => import("@/components/home-v2/BlogSectionV2"),
  { ssr: false }
);
const CtaSectionV2 = dynamic(
  () => import("@/components/home-v2/CtaSectionV2"),
  { ssr: false }
);

// Dynamic import for live Client Theme & RGB Color Customizer Studio
const ThemeCustomizerFloating = dynamic(
  () => import("@/components/home-v2/ThemeCustomizerFloating"),
  { ssr: false }
);

export default function HomeV2() {
  useEffect(() => {
    // Add scoped class to body for Home V2 with Light Theme as Default
    document.body.classList.add("home-v2-active");
    document.body.classList.add("theme-light");

    return () => {
      document.body.classList.remove("home-v2-active");
      document.body.classList.remove("past-intro");
      document.body.classList.remove("theme-light");
      document.body.classList.remove("theme-dark");
    };
  }, []);

  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f8fafc",
            color: "#0f172a",
            fontFamily: "Outfit, sans-serif",
          }}
        >
          Loading AdClan Luxury Experience...
        </div>
      }
    >
      <div className="Home-page home-v2-page">
        {/* =========================================================================
            MADISON INDIA REFERENCE EFFECT (ADCLAN CUSTOMIZED):
            1. Pure Black Background (#000000)
            2. Left-Side Subtle AdClan Monogram Watermark
            3. Razor-Sharp Vector AdClan Logo (Zero Blur)
            4. Changing Words fade right-to-left
            5. Header completely hidden during intro display
            6. Scroll zoom directly tied to scroll speed (forward & reverse butter-smooth)
            ========================================================================= */}
        <MadisonIntroHero />

        {/* Subsequent High-Impact V2 Homepage Sections (Light Theme Default) */}
        <main id="actual-home-content" className="actual-home-content">
          {/* =========================================================================
              SECTION SEPARATION: Clean, elegant separation bridge between
              the Pure Black Intro Hero and the Luxury Light Theme content
              ========================================================================= */}
          <div className="v2-intro-section-separation">
            <div className="v2-separation-line" />
            <div className="v2-separation-badge">
              <span className="v2-separation-dot" />
              <span>ADCLAN DIGITAL ECOSYSTEM</span>
            </div>
            <div className="v2-separation-line" />
          </div>

          {/* 1. Brand New Hero Slider Banner Section */}
          <HeroBannerSliderV2 />

          <div className="v2-section-divider" />

          {/* 2. Viral Cinematic Reels Section */}
          <ReelsSectionV2 />

          <div className="v2-section-divider" />

          {/* 3. Clients Infinite Marquee */}
          <ClientsSectionV2 />

          <div className="v2-section-divider" />

          {/* 4. Impact Bento Numbers Section */}
          <ImpactSectionV2 />

          <div className="v2-section-divider" />

          {/* 5. Editorial Blog Magazine Section */}
          <BlogSectionV2 />

          <div className="v2-section-divider" />

          {/* 6. High-Conversion Grand Finale CTA */}
          <CtaSectionV2 />
        </main>

        {/* Floating Real-Time Theme & Color Studio for Client Approval */}
        <ThemeCustomizerFloating />
      </div>
    </Suspense>
  );
}

