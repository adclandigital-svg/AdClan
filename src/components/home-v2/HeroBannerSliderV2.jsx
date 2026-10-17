"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./heroBannerSliderV2.css";

const BANNER_SLIDES = [
  {
    id: "kb-spices",
    src: "/projects/kb/banner.png",
    alt: "K.B. Spices Campaign Showcase - AdClan Digital",
  },
  {
    id: "adah-sharma",
    src: "/projects/adah_sharma/banner.png",
    alt: "Adah Sharma Celebrity Brand Endorsement - AdClan Digital",
  },
  {
    id: "aggarwal",
    src: "/projects/aggarwal/banner2.png",
    alt: "Aggarwal Sweets & Restaurant Billboard Campaign - AdClan Digital",
  },
  {
    id: "jassie-gill",
    src: "/projects/jassie_gill/banner.png",
    alt: "Jassie Gill Celebrity Campaign - AdClan Digital",
  },
  {
    id: "vikram-mills",
    src: "/projects/vikram-mills/pr-banner1.png",
    alt: "Vikram Roller Flour Mills Campaign - AdClan Digital",
  },
  {
    id: "elmas-group",
    src: "/projects/elmasGroup/banner1.png",
    alt: "Elmas Group Luxury Real Estate Campaign - AdClan Digital",
  },
  {
    id: "agropure",
    src: "/projects/agropure/banner.png",
    alt: "Agropure Brand Campaign - AdClan Digital",
  },
];

const AUTOPLAY_INTERVAL_MS = 5000;

export default function HeroBannerSliderV2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  const totalSlides = BANNER_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Autoplay timer with pause on hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
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
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <section
      className="v2-fullwidth-hero-slider"
      aria-label="AdClan Featured Campaigns Hero Banner"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Viewport */}
      <div className="v2-hero-slider-track-wrap">
        <div
          className="v2-hero-slider-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {BANNER_SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className={`v2-hero-banner-slide ${idx === currentIndex ? "is-active" : ""}`}
              aria-hidden={idx !== currentIndex}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="v2-hero-banner-image"
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrow Controls */}
      <button
        type="button"
        className="v2-hero-slider-arrow v2-hero-slider-arrow-prev"
        onClick={prevSlide}
        aria-label="Previous Campaign Banner"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        type="button"
        className="v2-hero-slider-arrow v2-hero-slider-arrow-next"
        onClick={nextSlide}
        aria-label="Next Campaign Banner"
      >
        <ChevronRight size={28} />
      </button>

      {/* Pagination Navigation Dots */}
      <div className="v2-hero-slider-dots" role="tablist">
        {BANNER_SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={idx === currentIndex}
            aria-label={`Go to slide ${idx + 1}`}
            className={`v2-hero-slider-dot ${idx === currentIndex ? "is-active" : ""}`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>
    </section>
  );
}
