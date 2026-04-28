"use client";

import { useEffect, useRef, useState } from "react";
import { PageFlip } from "page-flip";
import "./portfolio.css";

export default function MagazineBook() {
  const bookRef = useRef(null);
  const pageFlip = useRef(null);
  const [step, setStep] = useState(0);

  const getSize = () => {
    const screenWidth = window.innerWidth;

    const containerWidth = Math.min(screenWidth * 0.9, 1800);

    // ✅ ONLY LARGE SCREENS (>=1200) → DOUBLE
    if (screenWidth >= 1200) {
      return {
        width: containerWidth / 2,
        height: (containerWidth / 2) * 0.8,
        mode: "double",
      };
    }

    // ✅ EVERYTHING BELOW 1200 → SINGLE
    if (screenWidth >= 574) {
      return {
        width: screenWidth * 1, // ✅ correct replacement for 90%
        height: containerWidth * 1.1,
        mode: "single",
      };
    }

    // ✅ MOBILE
    return {
      width: screenWidth * 1,
      height: containerWidth * 1,
      mode: "single",
    };
  };

  useEffect(() => {
    if (!bookRef.current) return;

    const initFlip = () => {
      const size = getSize();

      if (pageFlip.current) {
        pageFlip.current.destroy();
      }

      const flip = new PageFlip(bookRef.current, {
        width: size.width,
        height: size.height,
        size: "fixed",
        showCover: false,
        useMouseEvents: true,
        mobileScrollSupport: false,
        maxShadowOpacity: 0.7,
        drawShadow: true,
        flippingTime: 700,
        swipeDistance: 30,
        disableFlipByClick: false,
        showPageCorners: size.mode === "double",
        mode: size.mode,
      });

      flip.loadFromImages([
        "/portfolio-image/Adclan Portfolio_page-0001.jpg",
        "/portfolio-image/Adclan Portfolio_page-0002.jpg",
        "/portfolio-image/Adclan Portfolio_page-0003.jpg",
        "/portfolio-image/Adclan Portfolio_page-0004.jpg",
        "/portfolio-image/Adclan Portfolio_page-0005.jpg",
        "/portfolio-image/Adclan Portfolio_page-0006.jpg",
        "/portfolio-image/Adclan Portfolio_page-0007.jpg",
        "/portfolio-image/Adclan Portfolio_page-0008.jpg",
        "/portfolio-image/Adclan Portfolio_page-0009.jpg",
        "/portfolio-image/Adclan Portfolio_page-0010.jpg",
        "/portfolio-image/Adclan Portfolio_page-0011.jpg",
        "/portfolio-image/Adclan Portfolio_page-0012.jpg",
        "/portfolio-image/Adclan Portfolio_page-0013.jpg",
        "/portfolio-image/Adclan Portfolio_page-0014.jpg",
        "/portfolio-image/Adclan Portfolio_page-0015.jpg",
        "/portfolio-image/Adclan Portfolio_page-0016.jpg",
        "/portfolio-image/Adclan Portfolio_page-0017.jpg",
        "/portfolio-image/Adclan Portfolio_page-0018.jpg",
        "/portfolio-image/Adclan Portfolio_page-0019.jpg",
        "/portfolio-image/Adclan Portfolio_page-0020.jpg",
        "/portfolio-image/Adclan Portfolio_page-0021.jpg",
        "/portfolio-image/Adclan Portfolio_page-0022.jpg",
        "/portfolio-image/Adclan Portfolio_page-0023.jpg",
        "/portfolio-image/Adclan Portfolio_page-0024.jpg",
        "/portfolio-image/Adclan Portfolio_page-0025.jpg",
        "/portfolio-image/Adclan Portfolio_page-0026.jpg",
        "/portfolio-image/Adclan Portfolio_page-0027.jpg",
        "/portfolio-image/Adclan Portfolio_page-0028.jpg",
        "/portfolio-image/Adclan Portfolio_page-0029.jpg",
        "/portfolio-image/Adclan Portfolio_page-0030.jpg",
        "/portfolio-image/Adclan Portfolio_page-0031.jpg",
        "/portfolio-image/Adclan Portfolio_page-0032.jpg",
        "/portfolio-image/Adclan Portfolio_page-0033.jpg",
        "/portfolio-image/Adclan Portfolio_page-0034.jpg",
        "/portfolio-image/Adclan Portfolio_page-0035.jpg",
        "/portfolio-image/Adclan Portfolio_page-0036.jpg",
        "/portfolio-image/Adclan Portfolio_page-0037.jpg",
        "/portfolio-image/Adclan Portfolio_page-0038.jpg",
        "/portfolio-image/Adclan Portfolio_page-0039.jpg",
        "/portfolio-image/Adclan Portfolio_page-0040.jpg",
        "/portfolio-image/Adclan Portfolio_page-0041.jpg",
        "/portfolio-image/Adclan Portfolio_page-0042.jpg",
        "/portfolio-image/Adclan Portfolio_page-0043.jpg",
      ]);

      flip.on("flip", () => {
        setStep((prev) => {
          if (prev === 0) return 1;
          if (prev === 1) return 2;
          return prev;
        });
      });

      pageFlip.current = flip;
    };

    initFlip();

    const handleResize = () => initFlip();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      pageFlip.current?.destroy();
    };
  }, []);

  return (
    <div className="magazine-section">
      <div className="magazine-wrapper">
        <div ref={bookRef} className="magazine-book" />
      </div>

      {step !== 2 && (
        <div className={`flip-overlay ${step === 0 ? "right" : "left"} show`}>
          <span>{step === 0 ? "Click to Flip →" : "← Flip Back"}</span>
        </div>
      )}
    </div>
  );
}
