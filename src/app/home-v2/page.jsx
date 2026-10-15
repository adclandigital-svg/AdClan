"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect } from "react";
import MadisonIntroHero from "@/components/home/MadisonIntroHero";
import "@/components/home-v2/homeV2Sections.css";
import "./homeV2Beautify.css";

// Dynamic imports for luxury V2 home sections
const ReelsSectionV2 = dynamic(() => import("@/components/home-v2/ReelsSectionV2"), { ssr: false });
const ClientsSectionV2 = dynamic(() => import("@/components/home-v2/ClientsSectionV2"), { ssr: false });
const ImpactSectionV2 = dynamic(() => import("@/components/home-v2/ImpactSectionV2"), { ssr: false });
const BlogSectionV2 = dynamic(() => import("@/components/home-v2/BlogSectionV2"), { ssr: false });
const CtaSectionV2 = dynamic(() => import("@/components/home-v2/CtaSectionV2"), { ssr: false });

export default function HomeV2() {
  useEffect(() => {
    // Add scoped class to body only for this duplicate page
    document.body.classList.add("home-v2-active");

    return () => {
      document.body.classList.remove("home-v2-active");
      document.body.classList.remove("past-intro");
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
            background: "#06070a",
            color: "#fff",
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

        {/* Subsequent High-Impact V2 Homepage Sections */}
        <main id="actual-home-content" className="actual-home-content">
          <ReelsSectionV2 />
          <div className="v2-section-divider" />
          <ClientsSectionV2 />
          <div className="v2-section-divider" />
          <ImpactSectionV2 />
          <div className="v2-section-divider" />
          <BlogSectionV2 />
          <div className="v2-section-divider" />
          <CtaSectionV2 />
        </main>
      </div>
    </Suspense>
  );
}
