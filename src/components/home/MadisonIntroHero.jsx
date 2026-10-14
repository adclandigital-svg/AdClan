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
  "PERFORMANCE MARKETING",
  "BRAND STRATEGY",
  "CREATIVE PRODUCTION",
  "INFLUENCER MARKETING",
  "DIGITAL MEDIA",
  "PUBLIC RELATIONS",
  "SEO & CONTENT",
  "INTEGRATED CAMPAIGNS",
];

export default function MadisonIntroHero() {
  const wrapperRef = useRef(null);
  const stageRef = useRef(null);
  const logoWrapperRef = useRef(null);
  const wordBoxRef = useRef(null);
  const scrollDownRef = useRef(null);
  const leftWatermarkRef = useRef(null);

  const [wordIndex, setWordIndex] = useState(0);

  // 1. Cycle words every 1.5 seconds (Left to Right transition)
  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % CYCLING_WORDS.length);
    }, 1500);

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

      // Target exact center of monogram circular loop (x: 9.8%, y: 49.6%)
      gsap.set(logoEl, {
        transformOrigin: "9.8% 49.6%",
        willChange: "transform",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trackEl,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5, // 1:1 direct coupling with scroll speed
          onUpdate: (self) => {
            const isPast = self.progress > 0.82;
            if (typeof document !== "undefined") {
              if (isPast) {
                document.body.classList.add("past-intro");
              } else {
                document.body.classList.remove("past-intro");
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
          x: 50,
          ease: "power2.out",
          duration: 0.12,
        },
        0
      );

      // Step 2: Left giant watermark slides left & fades (0% -> 45% scroll)
      if (watermarkEl) {
        tl.to(
          watermarkEl,
          {
            scale: 1.35,
            x: -200,
            opacity: 0,
            ease: "power1.inOut",
            duration: 0.45,
          },
          0
        );
      }

      // Step 3A: Phase 1 Zoom (0% -> 48% scroll):
      // Logo scales from 1x to 10x while translating to center the monogram loop in viewport.
      // At ~48% scroll, loop fills ~80% of screen (Matches Screenshot 3!)
      tl.to(
        logoEl,
        {
          scale: 10,
          x: () => 0.402 * logoEl.offsetWidth,
          ease: "power1.inOut",
          duration: 0.48,
        },
        0
      );

      // Step 3B: Phase 2 Zoom (48% -> 92% scroll):
      // Loop expands from 10x to 65x, stretching past screen edges (Matches Screenshot 4!)
      tl.to(
        logoEl,
        {
          scale: 65,
          ease: "power2.in",
          duration: 0.44,
        },
        0.48
      );

      // Step 4: Stage dissolves cleanly as loop expands (60% -> 92% scroll)
      tl.to(
        stageEl,
        {
          opacity: 0,
          ease: "power1.inOut",
          duration: 0.32,
        },
        0.6
      );

      // Disable pointer events on stage after dissolve so HomeSecond is interactive
      tl.set(stageEl, { pointerEvents: "none" }, 0.88);

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
    if (!wrapperRef.current) return;
    const targetY = wrapperRef.current.offsetTop + wrapperRef.current.offsetHeight - window.innerHeight + 10;
    window.scrollTo({
      top: targetY,
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
            fill="#FFFFFF"
            shapeRendering="geometricPrecision"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={ADCLAN_MONOGRAM_PATH} fill="#FFFFFF" />
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
              fill="#FFFFFF"
              shapeRendering="geometricPrecision"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={ADCLAN_FULL_LOGO_PATH} fill="#FFFFFF" />
            </svg>
          </div>
        </div>

        {/* Changing Word Underneath Logo (Positioned absolute so logo is dead center) */}
        <div ref={wordBoxRef} className="madison-changing-word-box">
          <span key={wordIndex} className="madison-changing-word">
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
