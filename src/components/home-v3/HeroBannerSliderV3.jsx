"use client";

import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import VideoModalV3 from "./VideoModalV3";

const SLIDES_DATA = [
  {
    id: 1,
    indexStr: "01",
    eyebrow: "360° MARKETING AGENCY",
    headingLines: ["Ideas.", "Media.", "Impact."],
    description:
      "Strategic thinking. Powerful storytelling.\nReal-world results.",
    ctaText: "EXPLORE OUR WORK",
    ctaLink: "/projects",
    image: "/home-v3/slide-1.jpg",
    cardLines: ["Brands", "that", "move", "people"],
    cap: "Brands that move people",
    video: "/home/banner1.mp4",
    a: "#f6b24a",
    b: "#3a4252",
    c: "#0e1117",
    sx: "68%",
    sy: "26%",
  },
  {
    id: 2,
    indexStr: "02",
    eyebrow: "EXPERIENTIAL & OUTDOOR",
    headingLines: ["Bigger.", "Bolder.", "Brands."],
    description:
      "Commanding urban skylines and live arenas.\nUnignorable mass visibility.",
    ctaText: "EXPLORE OUR WORK",
    ctaLink: "/projects",
    image: "/home-v3/slide-2.jpg",
    cardLines: ["Bigger", "bolder", "brands"],
    cap: "Bigger<br>bolder<br>brands",
    video: "/home/22.mp4",
    a: "#ffd23f",
    b: "#4a4f5a",
    c: "#14161b",
    sx: "30%",
    sy: "22%",
  },
  {
    id: 3,
    indexStr: "03",
    eyebrow: "CELEBRITY MANAGEMENT",
    headingLines: ["Iconic.", "Culture.", "Influence."],
    description:
      "High-voltage celebrity endorsements.\nDefining cultural conversations.",
    ctaText: "EXPLORE OUR WORK",
    ctaLink: "/projects",
    image: "/home-v3/slide-3.jpg",
    cardLines: ["Live", "at", "scale"],
    cap: "Bigger<br>bolder<br>brands",
    video: "/home/23.mp4",
    a: "#6fb4ff",
    b: "#1d2c52",
    c: "#070b16",
    sx: "50%",
    sy: "18%",
  },
  {
    id: 4,
    indexStr: "04",
    eyebrow: "COMMERCIAL PRODUCTIONS",
    headingLines: ["Vision.", "Cinema.", "Craft."],
    description:
      "World-class broadcast films and digital TVCs.\nEngineered for deep emotional resonance.",
    ctaText: "EXPLORE OUR WORK",
    ctaLink: "/projects",
    image: "/home-v3/slide-4.jpg",
    cardLines: ["Faces", "of", "the", "brand"],
    cap: "Faces of<br>the brand",
    video: "/home/24.mp4",
    a: "#d99a7a",
    b: "#2b2326",
    c: "#0a0809",
    sx: "60%",
    sy: "32%",
  },
  {
    id: 5,
    indexStr: "05",
    eyebrow: "DIGITAL ECOSYSTEMS",
    headingLines: ["Data.", "Digital.", "Growth."],
    description:
      "Hyper-targeted digital marketing and analytics.\nDriving measurable customer lifetime value.",
    ctaText: "EXPLORE OUR WORK",
    ctaLink: "/projects",
    image: "/home-v3/slide-5.jpg",
    cardLines: ["After", "the", "dark"],
    cap: "After the dark",
    video: "/home/25.mp4",
    a: "#e86f5c",
    b: "#3a2230",
    c: "#0c070c",
    sx: "40%",
    sy: "28%",
  },
  {
    id: 6,
    indexStr: "06",
    eyebrow: "BRAND ARCHITECTURE & PR",
    headingLines: ["Presence.", "Energy.", "Legacy."],
    description:
      "Spectacular brand launches, galas and summits.\nMoments that make history.",
    ctaText: "EXPLORE OUR WORK",
    ctaLink: "/projects",
    image: "/home-v3/slide-6.jpg",
    cardLines: ["Stories", "in", "motion"],
    cap: "Stories in motion",
    video: "/home/26.mp4",
    a: "#8fd9b6",
    b: "#1f3a3a",
    c: "#07100f",
    sx: "72%",
    sy: "24%",
  },
];

export default function HeroBannerSliderV3() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimatingText, setIsAnimatingText] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);
  const totalSlides = SLIDES_DATA.length;

  const goToSlide = useCallback(
    (newIndex) => {
      if (newIndex === currentIndex) return;
      setIsAnimatingText(true);
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setIsAnimatingText(false);
      }, 240);
    },
    [currentIndex],
  );

  const nextSlide = useCallback(() => {
    const nextIdx = (currentIndex + 1) % totalSlides;
    goToSlide(nextIdx);
  }, [currentIndex, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    const prevIdx = (currentIndex - 1 + totalSlides) % totalSlides;
    goToSlide(prevIdx);
  }, [currentIndex, totalSlides, goToSlide]);

  // Autoplay functionality with pause on hover
  useEffect(() => {
    if (isPaused || videoModalOpen) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, videoModalOpen, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  const currentSlide = SLIDES_DATA[currentIndex];

  return (
    <section
      className="v3-hero-section"
      aria-label="AdClan Agency Hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="v3-hero-container">
        {/* =====================================================================
            LEFT COLUMN: TEXT UPDATING WITH CURRENT SLIDE
            ===================================================================== */}
        <div className="v3-hero-left">
          {/* Eyebrow / 360° Tagline */}
          <div className="v3-eyebrow-wrap">
            <p
              className={`v3-eyebrow ${
                isAnimatingText
                  ? "v3-text-animating-out"
                  : "v3-text-animating-in"
              }`}
            >
              {currentSlide.eyebrow}
            </p>
          </div>

          {/* Big Editorial 3-Line Headline with Periods */}
          <div className="v3-headline-wrap">
            <h1 className="v3-headline">
              {currentSlide.headingLines.map((line, idx) => (
                <span key={line} className="v3-headline-line">
                  <span
                    className={`v3-headline-text ${
                      isAnimatingText
                        ? "v3-text-animating-out"
                        : "v3-text-animating-in"
                    }`}
                    style={{
                      transitionDelay: `${idx * 40}ms`,
                    }}
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h1>
          </div>

          {/* Subtitle Description */}
          <div className="v3-description-wrap">
            <p
              className={`v3-description ${
                isAnimatingText
                  ? "v3-text-animating-out"
                  : "v3-text-animating-in"
              }`}
            >
              {currentSlide.description}
            </p>
          </div>

          {/* CTA Link */}
          <div className="v3-cta-wrap">
            <Link href={currentSlide.ctaLink} className="v3-explore-link">
              <span className="v3-cta-dash" aria-hidden="true" />
              <span>{currentSlide.ctaText}</span>
              <span className="v3-cta-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* =====================================================================
            RIGHT COLUMN: STACKED CARD SLIDER (USER'S EXACT HTML REFERENCE)
            ===================================================================== */}
        <div className="v3-hero-right">
          <div className="stage" id="stage">
            {SLIDES_DATA.map((slide, i) => {
              const pos = (i - currentIndex + totalSlides) % totalSlides;
              const isFront = pos === 0;

              return (
                <div
                  key={slide.id}
                  className="card"
                  data-pos={pos}
                  tabIndex={isFront || pos > 3 ? -1 : 0}
                  role="group"
                  aria-label={`Slide ${i + 1} of ${totalSlides}`}
                  aria-hidden={pos > 3 ? "true" : "false"}
                  style={{
                    "--a": slide.a,
                    "--b": slide.b,
                    "--c": slide.c,
                    "--sx": slide.sx,
                    "--sy": slide.sy,
                  }}
                  onClick={() => {
                    if (!isFront) goToSlide(i);
                  }}
                  onKeyDown={(e) => {
                    if ((e.key === "Enter" || e.key === " ") && !isFront) {
                      e.preventDefault();
                      goToSlide(i);
                    }
                  }}
                >
                  {/* Photo Media Layer (High-End Photography matching reference) */}
                  <img
                    src={slide.image}
                    alt={slide.headingLines.join(" ")}
                    className="card-media-img"
                    loading={i === 0 ? "eager" : "lazy"}
                  />

                  {/* Gradient + Skyline Graphic Silhouette Layer from Reference */}
                  <div className="bg" />

                  {/* Vignette Shades */}
                  <div className="shade" />

                  {/* Small Caption for background cards */}
                  <div
                    className="cap"
                    dangerouslySetInnerHTML={{ __html: slide.cap }}
                  />

                  {/* Headline Copy for active card */}
                  <div className="copy">
                    <h2>
                      {slide.cardLines.map((word) => (
                        <span key={word}>{word}</span>
                      ))}
                    </h2>
                    <i />
                  </div>

                  {/* Centered / Lower Play Button for active card */}
                  <button
                    type="button"
                    className="play"
                    aria-label="Play video"
                    onClick={(e) => {
                      e.stopPropagation();
                      setVideoModalOpen(true);
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
                </div>
              );
            })}
          </div>

          {/* Slider Pagination & Arrow Navigation (Exact Reference Nav) */}
          <div className="nav">
            <button
              type="button"
              id="prev"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M7 1 1 7l6 6" />
              </svg>
            </button>

            <span aria-live="polite">
              <b id="cur">{currentSlide.indexStr}</b> /{" "}
              <span id="tot">{String(totalSlides).padStart(2, "0")}</span>
            </span>

            <button
              type="button"
              id="next"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="m1 1 6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModalV3
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoSrc={currentSlide.video}
        title={currentSlide.headingLines.join(" ")}
      />
    </section>
  );
}
