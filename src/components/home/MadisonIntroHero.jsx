"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ADCLAN_FULL_LOGO_PATH, ADCLAN_MONOGRAM_PATH } from "./adclanLogoPaths";
import "./madisonIntroHero.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CYCLING_WORDS = [
  "Creatives",
  "Digital",
  "OTT",
  "TV",
  "Radio",
  "Print",
  "Outdoor",
  "Influencer",
  "Celebrity",
  "PR",
  "Online Reputation Management",
  "Events",
  "BTL",
  "IT",
];

export default function MadisonIntroHero() {
  const wrapperRef = useRef(null);
  const stageRef = useRef(null);
  const logoWrapperRef = useRef(null);
  const wordBoxRef = useRef(null);
  const scrollDownRef = useRef(null);
  const leftWatermarkRef = useRef(null);

  const [wordIndex, setWordIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  // 1. Cycle words every 2 seconds with smooth fade right-to-left
  useEffect(() => {
    const timer = setInterval(() => {
      // Start fade-out
      setFadeClass("fade-out");
      // After fade-out completes (600ms), switch word and fade-in
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % CYCLING_WORDS.length);
        setFadeClass("fade-in");
      }, 600);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  // 2. Exact Madison India Scroll-Driven Zoom Timeline
  useGSAP(
    () => {
      if (!wrapperRef.current || !logoWrapperRef.current || !stageRef.current) return;

      const logoEl = logoWrapperRef.current;
      const wordEl = wordBoxRef.current;
      const scrollDownEl = scrollDownRef.current;
      const stageEl = stageRef.current;
      const watermarkEl = leftWatermarkRef.current;
      const trackEl = wrapperRef.current;

      // Zoom from the exact center of the logo
      gsap.set(logoEl, {
        transformOrigin: "50% 50%",
        willChange: "transform",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trackEl,
          start: "top top",
          end: "+=100%", // Single viewport height = completes in one scroll gesture
          pin: true, // Pin the section while animating
          pinSpacing: false, // Prevents dead scroll gap and prevents spacer stacking issues
          scrub: 0.3, // Snappy, near-instant response to scroll
          onUpdate: (self) => {
            const isPast = self.progress > 0.85;
            if (typeof document !== "undefined") {
              if (isPast) {
                document.body.classList.add("past-intro");
              } else {
                document.body.classList.remove("past-intro");
              }
            }
            if (trackEl && stageEl) {
              if (self.progress >= 0.92) {
                trackEl.style.pointerEvents = "none";
                stageEl.style.pointerEvents = "none";
              } else {
                trackEl.style.pointerEvents = "auto";
                stageEl.style.pointerEvents = "auto";
              }
            }
          },
        },
      });

      // Step 1: Subtitle words & Scroll Down vanish immediately (0% -> 12% scroll)
      tl.to(
        [wordEl, scrollDownEl],
        {
          opacity: 0,
          ease: "power2.out",
          duration: 0.12,
        },
        0
      );

      // Step 2: Left giant watermark slides left & fades (0% -> 40% scroll)
      if (watermarkEl) {
        tl.to(
          watermarkEl,
          {
            scale: 1.35,
            x: -200,
            opacity: 0,
            ease: "power1.inOut",
            duration: 0.4,
          },
          0
        );
      }

      // Step 3A: Phase 1 Zoom (0% -> 50% scroll):
      // Logo scales from 1x to 12x from center
      tl.to(
        logoEl,
        {
          scale: 12,
          ease: "power1.inOut",
          duration: 0.5,
        },
        0
      );

      // Step 3B: Phase 2 Zoom (50% -> 95% scroll):
      // Logo expands from 12x to 80x, stretching past screen edges
      tl.to(
        logoEl,
        {
          scale: 80,
          ease: "power2.in",
          duration: 0.45,
        },
        0.5
      );

      // Step 4: Stage and wrapper dissolve cleanly as logo expands past viewport (75% -> 100% scroll)
      tl.to(
        [stageEl, trackEl],
        {
          opacity: 0,
          ease: "power1.inOut",
          duration: 0.25,
        },
        0.75
      );

      ScrollTrigger.refresh();

      return () => {
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
        tl.kill();
      };
    },
    { scope: wrapperRef }
  );

  // 3. Scroll Down click handler
  const handleScrollDown = useCallback(() => {
    // With pin: true and end: "+=100%", total scroll distance through intro is ~2 viewport heights
    window.scrollTo({
      top: window.innerHeight * 2 + 10,
      behavior: "smooth",
    });
  }, []);

  return (
    <section ref={wrapperRef} className="madison-intro-wrapper">
      {/* Sticky Fullscreen Stage in Pure Black (#000000) */}
      <div ref={stageRef} className="madison-intro-stage">
        {/* Left-Side Giant Watermark (Exact Madison reference: subtle emblem on left edge) */}
        <div ref={leftWatermarkRef} className="adclan-left-watermark">
          <svg
            className="adclan-watermark-svg"
            viewBox="0 0 220 264"
            fill="currentColor"
            shapeRendering="geometricPrecision"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={ADCLAN_MONOGRAM_PATH} fill="currentColor" />
          </svg>
        </div>

        {/* Ambient Subtle Radial Center Glow */}
        <div className="madison-ambient-glow" />

        {/* Center Content Box: Logo centered at exact 50% 50% */}
        <div className="madison-center-box">
          <div
            ref={logoWrapperRef}
            className="madison-logo-wrapper"
            onClick={handleScrollDown}
          >
            <svg
              className="madison-vector-svg-logo"
              viewBox="0 0 1200 264"
              fill="currentColor"
              shapeRendering="geometricPrecision"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={ADCLAN_FULL_LOGO_PATH} fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Changing Word Underneath Logo (Positioned absolute so logo is dead center) */}
        <div ref={wordBoxRef} className="madison-changing-word-box">
          <span key={wordIndex} className={`madison-changing-word ${fadeClass}`}>
            {CYCLING_WORDS[wordIndex]}
          </span>
        </div>

        {/* Bottom: Scroll Down Indicator */}
        <div
          ref={scrollDownRef}
          className="madison-scroll-down"
          onClick={handleScrollDown}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleScrollDown();
          }}
        >
          <span>Scroll Down</span>
          <svg
            className="madison-chevron-arrow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  );
}
