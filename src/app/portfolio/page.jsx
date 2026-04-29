"use client";

import { useEffect, useRef, useState } from "react";
import { PageFlip } from "page-flip";
import dynamic from "next/dynamic";
import "./portfolio.css";

// PDF Viewer (client only)
const PdfViewer = dynamic(() => import("./components/PdfViewer"), {
  ssr: false,
});

export default function MagazineBook() {
  const bookRef = useRef(null);
  const pageFlip = useRef(null);

  const [step, setStep] = useState(0);
  const [activeTab, setActiveTab] = useState("book");
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // =========================
  // INIT CLIENT + RESPONSIVE
  // =========================
  useEffect(() => {
    setIsClient(true);

    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // =========================
  // SIZE CONFIG
  // =========================
  const getSize = () => {
    const screenWidth = window.innerWidth;
    const containerWidth = Math.min(screenWidth * 0.9, 1800);

    if (screenWidth >= 1200) {
      return {
        width: containerWidth / 2,
        height: (containerWidth / 2) * 0.8,
        mode: "double",
      };
    }

    return {
      width: screenWidth * 0.95,
      height: containerWidth * 1,
      mode: "single",
    };
  };

  // =========================
  // FLIPBOOK INIT
  // =========================
  useEffect(() => {
    if (!isClient) return;

    if (activeTab !== "book") {
      pageFlip.current?.destroy();
      pageFlip.current = null;
      return;
    }

    const timer = setTimeout(() => {
      if (!bookRef.current) return;

      const size = getSize();
      pageFlip.current?.destroy();

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

      const images = Array.from({ length: 43 }, (_, i) => {
        const num = String(i + 1).padStart(4, "0");
        return `/portfolio-image/Adclan Portfolio_page-${num}.jpg`;
      });

      flip.loadFromImages(images);

      flip.on("flip", () => {
        setStep((prev) => (prev === 0 ? 1 : prev === 1 ? 2 : prev));
      });

      pageFlip.current = flip;
    }, 0);

    return () => clearTimeout(timer);
  }, [activeTab, isClient]);

  // =========================
  // LOADING
  // =========================
  if (!isClient) {
    return <div className="magazine-section" style={{ minHeight: "90vh" }} />;
  }

  // =========================
  // UI
  // =========================
  return (
    <div className="magazine-section">
      {/* TABS (ALWAYS VISIBLE) */}
      <div className="tabs-container">
        <div className="tabs-slider">
          <div className={`slider ${activeTab === "pdf" ? "pdf" : ""}`} />

          <button
            className={`tab-btn ${activeTab === "book" ? "active" : ""}`}
            onClick={() => setActiveTab("book")}
          >
            Book View
          </button>

          <button
            className={`tab-btn ${activeTab === "pdf" ? "active" : ""}`}
            onClick={() => setActiveTab("pdf")}
          >
            PDF Preview
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="content-container">
        {/* BOOK */}
        {activeTab === "book" && (
          <div className="magazine-wrapper">
            <div ref={bookRef} className="magazine-book" />

            {step !== 2 && (
              <div
                className={`flip-overlay ${step === 0 ? "right" : "left"} show`}
              >
                <span>{step === 0 ? "Click to Flip →" : "← Flip Back"}</span>
              </div>
            )}
          </div>
        )}

        {/* PDF */}
        {activeTab === "pdf" && <PdfViewer />}
      </div>
    </div>
  );
}
