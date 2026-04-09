// "use client";

// import { useEffect, useRef } from "react";
// import { PageFlip } from "page-flip";
// import "./magzine.css";

// export default function MagazineBook() {
//   const bookRef = useRef(null);
//   const pageFlip = useRef(null);

//   useEffect(() => {
//     if (!bookRef.current) return;

//     // ⏳ Delay init to ensure DOM is ready
//     const init = requestAnimationFrame(() => {
//       pageFlip.current = new PageFlip(bookRef.current, {
//         width: 400,
//         height: 400,
//         size: "stretch",
//         showCover: false,
//         useMouseEvents: true,
//         mobileScrollSupport: false,

//         // realism
//         maxShadowOpacity: 0.7,
//         drawShadow: true,
//         flippingTime: 900,
//         swipeDistance: 30,
//       });

//       pageFlip.current.loadFromImages([
//         "/m1.avif",
//         "/m2.avif",
//         "/m1.avif",
//         "/m2.avif",
//         "/m1.avif",
//         "/m2.avif",
//       ]);
//     });

//     return () => {
//       cancelAnimationFrame(init);
//       pageFlip.current?.destroy();
//     };
//   }, []);

//   return (
//     <div className="magazine-wrapper">
//       <div ref={bookRef} className="magazine-book" />
//     </div>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";
import { PageFlip } from "page-flip";
import "./magzine.css";

export default function MagazineBook() {
  const bookRef = useRef(null);
  const pageFlip = useRef(null);

  const [step, setStep] = useState(0); 
  // 0 = forward hint, 1 = back hint, 2 = hide forever

  useEffect(() => {
    if (!bookRef.current) return;

    const isMobile = window.innerWidth <= 768;

    const init = requestAnimationFrame(() => {
      pageFlip.current = new PageFlip(bookRef.current, {
        width: isMobile ? 360 : 700,
        height: isMobile ? 460 : 700,
        size: "fixed",
        showCover: false,
        useMouseEvents: true,
        mobileScrollSupport: false,
        maxShadowOpacity: 0.7,
        drawShadow: true,
        flippingTime: 900,
        swipeDistance: 30,
        disableFlipByClick: false,
        showPageCorners: !isMobile,
        mode: isMobile ? "single" : "double",
      });

      pageFlip.current.loadFromImages([
        "/about/magazine/1.jpg",
        "/about/magazine/2.jpg",
        "/about/magazine/3.jpg",
        "/about/magazine/4.jpg",
        "/about/magazine/5.jpg",
        "/about/magazine/6.jpg",
        "/about/magazine/7.jpg",
        "/about/magazine/8.jpg",
        "/about/magazine/9.jpg",
        "/about/magazine/10.jpg",
        "/about/magazine/11.jpg",
        "/about/magazine/12.jpg",
        "/about/magazine/13.jpg",
        "/about/magazine/14.jpg",
        "/about/magazine/15.jpg",
        "/about/magazine/16.jpg",
        "/about/magazine/17.jpg",
        "/about/magazine/18.jpg",
        "/about/magazine/19.jpg",
      ]);

      // 🔥 Flip step logic
      pageFlip.current.on("flip", () => {
        setStep((prev) => {
          if (prev === 0) return 1;
          if (prev === 1) return 2;
          return prev;
        });
      });
    });

    return () => {
      cancelAnimationFrame(init);
      pageFlip.current?.destroy();
    };
  }, []);

  return (
    <div className="magazine-wrapper">
      <div ref={bookRef} className="magazine-book" />

      {/* 🔥 POSITION BASED TEXT */}
      {step !== 2 && (
        <div className={`flip-overlay ${step === 0 ? "right" : "left"} show`}>
          <span>
            {step === 0 ? "Click to Flip →" : "← Flip Back"}
          </span>
        </div>
      )}
    </div>
  );
}