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
  const pathname = usePathname();

  /* INIT LENIS */
  useEffect(() => {
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
    lenis.on("scroll", ScrollTrigger.update);

    // Store the function reference so we can remove it later
    const rafCallback = (time) => {
      lenis.raf(time * 1000);
    };
    rafRef.current = rafCallback;

    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      if (rafRef.current) {
        gsap.ticker.remove(rafRef.current);
      }
      lenis.destroy();
    };
  }, []);

  /* 🔝 SCROLL TO TOP ON ROUTE CHANGE */
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, {
        immediate: true, // important for route change
      });
    }
  }, [pathname]);

  return <>{children}</>;
}

