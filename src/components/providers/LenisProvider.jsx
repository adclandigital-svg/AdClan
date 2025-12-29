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

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,          // ⬅️ smoother glide
      easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
      smoothWheel: true,
      smoothTouch: false,     // disable on mobile (important)
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    // 🔗 Sync Lenis → ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // 🧠 GSAP drives Lenis RAF
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // 🚫 Disable GSAP lag smoothing
    gsap.ticker.lagSmoothing(0);

    // 🧹 Cleanup
    return () => {
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
