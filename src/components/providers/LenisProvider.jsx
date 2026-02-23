// "use client";

// import { useEffect, useRef } from "react";
// import { usePathname } from "next/navigation";
// import { initLenis, destroyLenis, getLenisInstance } from "@/utils/lenisInit";

// export default function LenisProvider({ children }) {
//   const initTimeoutRef = useRef(null);
//   const pathname = usePathname();

//   /* INIT LENIS - DELAYED UNTIL PAGE IS FULLY INTERACTIVE */
//   useEffect(() => {
//     let isMounted = true;

//     const startInit = async () => {
//       if (!isMounted) return;

//       try {
//         // Wait extra time to ensure LoadingScreen has a chance to render
//         await new Promise((resolve) => setTimeout(resolve, 1000));

//         if (!isMounted) return;

//         // Initialize Lenis with retry logic built in
//         await initLenis();
//       } catch (error) {
//         console.error("Failed to initialize Lenis:", error);
//       }
//     };

//     startInit();

//     return () => {
//       isMounted = false;
//       if (initTimeoutRef.current) {
//         clearTimeout(initTimeoutRef.current);
//       }
//     };
//   }, []);

//   /* Cleanup on unmount */
//   useEffect(() => {
//     return () => {
//       destroyLenis();
//     };
//   }, []);

//   /* 🔝 SCROLL TO TOP ON ROUTE CHANGE */
//   useEffect(() => {
//     try {
//       const lenisInstance = getLenisInstance();
//       if (lenisInstance && typeof lenisInstance.scrollTo === "function") {
//         lenisInstance.scrollTo(0, {
//           immediate: true,
//         });
//       }
//     } catch (error) {
//       console.warn("Scroll to top error:", error);
//     }
//   }, [pathname]);

//   return <>{children}</>;
// }


"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

let lenisInstance = null;
let isInitializing = false;

export default function LenisProvider({ children }) {
  const pathname = usePathname();
  const rafRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    // Prevent multiple initializations
    if (lenisInstance || isInitializing) return;
    
    isInitializing = true;

    try {
      // Use a small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        if (lenisInstance) {
          isInitializing = false;
          return;
        }

        try {
          lenisInstance = new Lenis({
            smoothWheel: true,
            smoothTouch: false,
          });

          instanceRef.current = lenisInstance;

          const raf = (time) => {
            try {
              if (lenisInstance?.raf && typeof lenisInstance.raf === "function") {
                lenisInstance.raf(time);
              }
              rafRef.current = requestAnimationFrame(raf);
            } catch (error) {
              console.error("Lenis RAF error:", error);
              // Continue animating even if there's an error
              rafRef.current = requestAnimationFrame(raf);
            }
          };

          rafRef.current = requestAnimationFrame(raf);
          isInitializing = false;
        } catch (error) {
          console.error("Failed to initialize Lenis:", error);
          lenisInstance = null;
          instanceRef.current = null;
          isInitializing = false;
        }
      }, 100);

      return () => {
        clearTimeout(timer);
      };
    } catch (error) {
      console.error("Lenis setup error:", error);
      isInitializing = false;
    }

    return () => {
      try {
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
        
        if (lenisInstance?.destroy && typeof lenisInstance.destroy === "function") {
          lenisInstance.destroy();
        }
        
        lenisInstance = null;
        instanceRef.current = null;
        isInitializing = false;
      } catch (e) {
        console.warn("Lenis cleanup error:", e);
      }
    };
  }, []);

  useEffect(() => {
    try {
      const instance = lenisInstance || instanceRef.current;
      if (instance?.scrollTo && typeof instance.scrollTo === "function") {
        instance.scrollTo(0, { immediate: true });
      }
    } catch (error) {
      console.error("Lenis scroll to top error:", error);
    }
  }, [pathname]);

  return children;
}
