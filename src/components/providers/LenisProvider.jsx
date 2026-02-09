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
import { initLenis, destroyLenis, getLenisInstance } from "@/utils/lenisInit";

export default function LenisProvider({ children }) {
  const initTimeoutRef = useRef(null);
  const pathname = usePathname();

  /* INIT LENIS - DELAYED UNTIL PAGE IS FULLY INTERACTIVE */
  useEffect(() => {
    let isMounted = true;

    const startInit = async () => {
      if (!isMounted) return;

      try {
        // Wait extra time to ensure LoadingScreen has a chance to render
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (!isMounted) return;

        // Initialize Lenis with retry logic built in
        await initLenis();
      } catch (error) {
        console.error("Failed to initialize Lenis:", error);
      }
    };

    startInit();

    return () => {
      isMounted = false;
      if (initTimeoutRef.current) {
        clearTimeout(initTimeoutRef.current);
      }
    };
  }, []);

  /* Cleanup on unmount */
  useEffect(() => {
    return () => {
      destroyLenis();
    };
  }, []);

  /* 🔝 SCROLL TO TOP ON ROUTE CHANGE */
  useEffect(() => {
    try {
      const lenisInstance = getLenisInstance();
      if (lenisInstance && typeof lenisInstance.scrollTo === "function") {
        lenisInstance.scrollTo(0, {
          immediate: true,
        });
      }
    } catch (error) {
      console.warn("Scroll to top error:", error);
    }
  }, [pathname]);

  return <>{children}</>;
}

