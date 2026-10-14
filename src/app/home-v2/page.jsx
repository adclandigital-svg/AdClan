"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect } from "react";
import MadisonIntroHero from "@/components/home/MadisonIntroHero";

// Dynamic imports for home components (Hero section removed as requested)
const HomeSecond = dynamic(() => import("@/components/home/HomeSecond"), { ssr: false });
const HomeThird = dynamic(() => import("@/components/home/HomeThird"), { ssr: false });
const Homereels = dynamic(() => import("@/components/home/Homereels"), { ssr: false });
const HomeSeven = dynamic(() => import("@/components/home/HomeSeven"), { ssr: false });
const HomeBlogSection = dynamic(() => import("@/components/home/HomeBlogSection"), { ssr: false });

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
            background: "#000",
            color: "#fff",
          }}
        >
          Loading AdClan Preview...
        </div>
      }
    >
      <div className="Home-page home-v2-page">
        {/* =========================================================================
            MADISON INDIA REFERENCE EFFECT (ADCLAN CUSTOMIZED):
            1. Pure Black Background (#000000)
            2. Left-Side Subtle AdClan Monogram Watermark (matches Madison's left "M")
            3. Razor-Sharp Vector AdClan Logo (Zero Blur)
            4. Changing Words Underneath animating LEFT TO RIGHT every 1.5s
            5. Header completely hidden during intro display
            6. Scroll zoom directly tied to scroll speed (forward & reverse butter-smooth)
            ========================================================================= */}
        <MadisonIntroHero />

        {/* Subsequent Homepage Sections (Hero video removed as requested) */}
        <main id="actual-home-content" className="actual-home-content">
          <HomeSecond />
          <Homereels />
          <HomeThird />
          <HomeSeven />
          <HomeBlogSection />
        </main>
      </div>
    </Suspense>
  );
}
