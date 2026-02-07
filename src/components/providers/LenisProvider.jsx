// "use client";

// import { useEffect } from "react";
// import Lenis from "lenis";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function LenisProvider({ children }) {
//   useEffect(() => {
//     const lenis = new Lenis({
//       smooth: true,
//       lerp: 0.08,
//     });

//     // 🔥 CRITICAL
//     lenis.on("scroll", ScrollTrigger.update);

//     gsap.ticker.add((time) => {
//       lenis.raf(time * 1000);
//     });

//     gsap.ticker.lagSmoothing(0);

//     return () => {
//       lenis.destroy();
//       gsap.ticker.remove(lenis.raf);
//     };
//   }, []);

//   return <>{children}</>;
// }


"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);
  const timerRef = useRef(null);
  const pathname = usePathname();

  /* INIT LENIS */
  useEffect(() => {
    // Wait for DOM to be ready before initializing Lenis
    timerRef.current = setTimeout(() => {
      try {
        if (!document || !window) return;

        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
          smoothWheel: true,
          smoothTouch: false,
          wheelMultiplier: 1,
          touchMultiplier: 1.5,
        });

        lenisRef.current = lenis;

        // Sync with ScrollTrigger
        lenis.on("scroll", () => {
          try {
            ScrollTrigger.update();
          } catch (e) {
            console.warn("ScrollTrigger update error:", e);
          }
        });

        // Store the function reference so we can remove it later
        const rafCallback = (time) => {
          try {
            if (lenisRef.current) {
              lenisRef.current.raf(time * 1000);
            }
          } catch (e) {
            console.warn("RAF callback error:", e);
          }
        };
        rafRef.current = rafCallback;

        gsap.ticker.add(rafCallback);
        gsap.ticker.lagSmoothing(0);
      } catch (error) {
        console.error("Lenis initialization error:", error);
      }
    }, 100);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      try {
        if (rafRef.current && lenisRef.current) {
          gsap.ticker.remove(rafRef.current);
          lenisRef.current.destroy();
          lenisRef.current = null;
          rafRef.current = null;
        }
      } catch (error) {
        console.error("Lenis cleanup error:", error);
      }
    };
  }, []);

  /* 🔝 SCROLL TO TOP ON ROUTE CHANGE */
  useEffect(() => {
    try {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, {
          immediate: true,
        });
      }
    } catch (error) {
      console.warn("Scroll to top error:", error);
    }
  }, [pathname]);

  return <>{children}</>;
}

