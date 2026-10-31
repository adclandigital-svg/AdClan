"use client";

import React, { useEffect } from "react";
import HomeV3Navbar from "@/components/home-v3/HomeV3Navbar";
import HeroBannerSliderV3 from "@/components/home-v3/HeroBannerSliderV3";
import BottomServicesBarV3 from "@/components/home-v3/BottomServicesBarV3";
import "@/components/home-v3/homeV3.css";

export default function HomeV3Page() {
  useEffect(() => {
    // Add scoped class to body for Home-v3
    document.body.classList.add("home-v3-active");

    return () => {
      document.body.classList.remove("home-v3-active");
    };
  }, []);

  return (
    <main className="home-v3-page-wrapper">
      {/* Background Architectural Decorative Arc / Sweep matching Screenshot */}
      <div className="home-v3-bg-decor" aria-hidden="true">
        <svg
          className="home-v3-bg-curve-svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter
              id="arcDropShadow"
              x="-20%"
              y="-10%"
              width="150%"
              height="120%"
            >
              <feGaussianBlur stdDeviation="22" result="blur" />
              <feOffset dx="-14" dy="0" result="offsetBlur" />
              <feFlood floodColor="#1a1712" floodOpacity="0.09" result="color" />
              <feComposite in="color" in2="offsetBlur" operator="in" result="shadow" />
              <feMerge>
                <feMergeNode in="shadow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient
              id="arcSurfaceGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="80%"
            >
              <stop offset="0%" stopColor="#f8f6f1" />
              <stop offset="40%" stopColor="#f5f3ed" />
              <stop offset="100%" stopColor="#f0ede7" />
            </linearGradient>
          </defs>
          {/*
            True circular arc matching reference screenshot:
            - A giant circle centered roughly at (200, -600) with radius ~1250
            - The arc enters the viewport near the top at x≈780, y=0
            - It sweeps convexly to the right, exiting at x≈1440, y≈580
            - Everything to the right of / inside the arc is the lighter warm panel
          */}
          <path
            d="M 720 0 Q 400 450 1440 900 L 1440 0 Z"
            fill="url(#arcSurfaceGrad)"
            filter="url(#arcDropShadow)"
          />
        </svg>

        {/* Ambient ultra-fine grain texture */}
        <div className="home-v3-grain" />
      </div>

      {/* 1. Exact Reference Top Navigation Bar */}
      <HomeV3Navbar />

      {/* 2. Exact Reference Hero Section with Synchronized 3D Card Slider & Left Text */}
      <HeroBannerSliderV3 />

      {/* 3. Exact Reference Bottom Services Strip with Crisp Iconography */}
      <BottomServicesBarV3 />
    </main>
  );
}
