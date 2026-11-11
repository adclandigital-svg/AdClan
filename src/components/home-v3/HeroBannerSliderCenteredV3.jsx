"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import VideoModalV3 from "./VideoModalV3";
import "./heroBannerCentered.css";

// 7 Portfolio Slides with High-End Photography from the Original Slider
const SLIDES_DATA = [
  {
    id: 1,
    lines: ["Right", "Gold"],
    cap: "Right Gold",
    image: "/home-v3/ban-1.webp",
    a: "#f6b24a",
    b: "#3a4252",
    c: "#0e1117",
    sx: "68%",
    sy: "26%",
    // Agar video button chahiye toh 'video' me path de, aur agar link button chahiye toh 'url' ya 'link' me URL de:
    url: "/projects/right-gold",
    video: "",
  },
  {
    id: 2,
    lines: ["Vikram", "Mills"],
    cap: "Vikram Mills",
    image: "/home-v3/ban-2.webp",
    a: "#ffd23f",
    b: "#4a4f5a",
    c: "#14161b",
    sx: "30%",
    sy: "22%",
    url: "",
    video: "/home/22.mp4",
  },
  {
    id: 3,
    lines: ["Live", "at", "scale"],
    cap: "Live at<br>scale",
    image: "/home-v3/ban-3.webp",
    a: "#6fb4ff",
    b: "#1d2c52",
    c: "#070b16",
    sx: "50%",
    sy: "18%",
    url: "",
    video: "/home/23.mp4",
  },
  {
    id: 4,
    lines: ["Revfin"],
    cap: "Revfin",
    image: "/home-v3/ban-4.webp",
    a: "#d99a7a",
    b: "#2b2326",
    c: "#0a0809",
    sx: "60%",
    sy: "32%",
    url: "",
    video: "/home/24.mp4",
  },
  {
    id: 5,
    lines: ["After", "the", "dark"],
    cap: "After the dark",
    image: "/home-v3/ban-5.webp",
    a: "#e86f5c",
    b: "#3a2230",
    c: "#0c070c",
    sx: "40%",
    sy: "28%",
    url: "",
    video: "/home/25.mp4",
  },
  {
    id: 6,
    lines: ["Stories", "in", "motion"],
    cap: "Stories in motion",
    image: "/home-v3/slide-6.jpg",
    a: "#8fd9b6",
    b: "#1f3a3a",
    c: "#07100f",
    sx: "72%",
    sy: "24%",
    url: "",
    video: "/home/26.mp4",
  },
  {
    id: 7,
    lines: ["Crowds", "that", "cheer"],
    cap: "Crowds that cheer",
    image: "/home-v3/narrative_studio.jpg",
    a: "#ffb36b",
    b: "#33283a",
    c: "#0b080e",
    sx: "55%",
    sy: "20%",
    url: "",
    video: "/home/banner.mp4",
  },
];

export default function HeroBannerSliderCenteredV3() {
  const [active, setActive] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const sxRef = useRef(null);
  const n = SLIDES_DATA.length;
  const pad = (v) => String(v).padStart(2, "0");

  const go = useCallback(
    (i) => {
      setActive(((i % n) + n) % n);
    },
    [n],
  );

  // Exact Positional calculation from user reference prototype:
  // p = ((i - active) % n + n) % n; if (p > Math.floor(n / 2)) p -= n;
  // hid = Math.abs(p) > 3; data-pos = hid ? 'hidden' : p
  const getPos = useCallback(
    (i) => {
      let p = (((i - active) % n) + n) % n;
      if (p > Math.floor(n / 2)) p -= n;
      const hid = Math.abs(p) > 3;
      return hid ? "hidden" : String(p);
    },
    [active, n],
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") go(active + 1);
      if (e.key === "ArrowLeft") go(active - 1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [active, go]);

  // Autoplay functionality with pause on hover
  useEffect(() => {
    if (isPaused || videoModalOpen) return;
    const interval = setInterval(() => {
      go(active + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, videoModalOpen, active, go]);

  // Pointer swipe gestures (from reference)
  const handlePointerDown = (e) => {
    sxRef.current = e.clientX;
  };

  const handlePointerUp = (e) => {
    if (sxRef.current === null) return;
    const d = e.clientX - sxRef.current;
    sxRef.current = null;
    if (Math.abs(d) > 50) {
      go(active + (d < 0 ? 1 : -1));
    }
  };

  const handlePointerCancel = () => {
    sxRef.current = null;
  };

  const currentSlide = SLIDES_DATA[active];

  return (
    <section
      className="v3-centered-hero-section hero"
      aria-roledescription="carousel"
      aria-label="Brand showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 3D Stage with exact reference markup */}
      <div
        className="stage"
        id="stage"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        {SLIDES_DATA.map((s, i) => {
          const pos = getPos(i);
          const isCenter = pos === "0";
          const isHidden = pos === "hidden";

          return (
            <div
              key={s.id}
              className="card"
              data-pos={pos}
              tabIndex={isCenter || isHidden ? -1 : 0}
              role="group"
              aria-label={`Slide ${i + 1} of ${n}: ${s.lines.join(" ")}`}
              aria-hidden={isHidden ? "true" : "false"}
              style={{
                "--a": s.a,
                "--b": s.b,
                "--c": s.c,
                "--sx": s.sx,
                "--sy": s.sy,
              }}
              onClick={() => {
                if (!isCenter && !isHidden) go(i);
              }}
              onKeyDown={(e) => {
                if (
                  (e.key === "Enter" || e.key === " ") &&
                  !isCenter &&
                  !isHidden
                ) {
                  e.preventDefault();
                  go(i);
                }
              }}
            >
              {/* Photo Media Layer from Original Slider */}
              <img
                src={s.image}
                alt={s.lines.join(" ")}
                className="card-media-img"
                loading={i === 0 ? "eager" : "lazy"}
              />

              {/* Radial gradient + skyline silhouette scene */}
              <div className="bg" />

              {/* Vignette Shades */}
              <div className="shade" />

              {/* Small Caption for background cards */}
              <div
                className="cap"
                dangerouslySetInnerHTML={{ __html: s.cap }}
              />

              {/* Headline Copy for active center card with staggered entrance */}
              <div className="copy">
                <h2>
                  {s.lines.map((word) => (
                    <span key={word}>{word}</span>
                  ))}
                </h2>
                <i />
              </div>

              {/* Action Button: Link button if url/link is provided, or Video Play button if video is provided */}
              {(s.url || s.link) ? (
                <a
                  href={s.url || s.link}
                  className="play slide-link-btn"
                  aria-label="Visit link"
                  tabIndex={isCenter ? 0 : -1}
                  target={(s.url || s.link).startsWith("http") ? "_blank" : undefined}
                  rel={(s.url || s.link).startsWith("http") ? "noopener noreferrer" : undefined}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isCenter) {
                      e.preventDefault();
                      go(i);
                    }
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              ) : s.video ? (
                <button
                  type="button"
                  className="play"
                  aria-label="Play video"
                  tabIndex={isCenter ? 0 : -1}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isCenter) setVideoModalOpen(true);
                  }}
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    aria-hidden="true"
                  >
                    <path d="M4 2.5v15l13-7.5z" />
                  </svg>
                </button>
              ) : null}
            </div>
          );
        })}
      </div>

      {/* Navigation Controls: (< 01 / 07 —————— >) with progress bar */}
      <div className="nav">
        <button
          type="button"
          id="prev"
          aria-label="Previous slide"
          onClick={() => go(active - 1)}
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M7 1 1 7l6 6" />
          </svg>
        </button>

        <span aria-live="polite">
          <b id="cur">{pad(active + 1)}</b> /{" "}
          <span id="tot">{pad(n)}</span>
        </span>

        <span
          className="track"
          role="progressbar"
          aria-valuenow={active + 1}
          aria-valuemin={1}
          aria-valuemax={n}
          aria-label={`Slide progress ${active + 1} of ${n}`}
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const pct = clickX / rect.width;
            const targetIndex = Math.min(
              n - 1,
              Math.max(0, Math.floor(pct * n)),
            );
            go(targetIndex);
          }}
        >
          <i
            id="fill"
            style={{
              transform: `scaleX(${(active + 1) / n})`,
              "--p": (active + 1) / n,
            }}
          />
        </span>

        <button
          type="button"
          id="next"
          aria-label="Next slide"
          onClick={() => go(active + 1)}
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="m1 1 6 6-6 6" />
          </svg>
        </button>
      </div>

      {/* Video Modal */}
      <VideoModalV3
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoSrc={currentSlide.video}
        title={currentSlide.lines.join(" ")}
      />
    </section>
  );
}
