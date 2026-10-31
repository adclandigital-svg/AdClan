"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Play, Pause, ArrowRight, ArrowUpRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const REEL_PROJECTS = [
  {
    id: 1,
    title: "Aggarwal Sweets",
    category: "TVC & SOCIAL FILM",
    src: "/home/reels/aggarwal.mp4",
    client: "Aggarwal Heritage",
    stats: "2.4M+ Impressions",
  },
  {
    id: 2,
    title: "Jaipur Jewellers",
    category: "LUXURY BRAND FILM",
    src: "/home/reels/jaipurjewellers.mp4",
    client: "Jaipur Jewels Royal Collection",
    stats: "3.8x Return on Ad Spend",
  },
  {
    id: 3,
    title: "KB Mart Mega Campaign",
    category: "RETAIL PROMO & BTL",
    src: "/home/reels/kb-mart.mp4",
    client: "KB Mart Superstores",
    stats: "450K+ In-Store Footfall",
  },
  {
    id: 4,
    title: "Smile Train India",
    category: "CAUSE MARKETING & PSA",
    src: "/home/reels/smile train video ad 2.mp4",
    client: "Smile Train Global NGO",
    stats: "Pan-India Emotional Recall",
  },
  {
    id: 5,
    title: "Vikram Mills Heritage",
    category: "COMMERCIAL ADVERTISING",
    src: "/home/reels/vikram-mills.mp4",
    client: "Vikram Mills FMCG",
    stats: "National Broadcast Reach",
  },
];

const FEATURED_STUDIES = [
  {
    id: 101,
    title: "Kidsmate by Leader Cycles — National Brand Launch",
    category: "360° INTEGRATED CAMPAIGN",
    image: "/projects/1.png",
    metric: "1 Lakh+ New Customers",
    link: "/projects",
  },
  {
    id: 102,
    title: "Ace Hanei — Luxury Architectural Unveiling",
    category: "EXPERIENTIAL & DIGITAL",
    image: "/projects/2.png",
    metric: "100% Inventory Subscribed",
    link: "/projects",
  },
  {
    id: 103,
    title: "Jindal Fine Industries — Enterprise Brand Identity",
    category: "BRAND ARCHITECTURE & PR",
    image: "/projects/3.png",
    metric: "B2B Market Authority",
    link: "/projects",
  },
];

export default function WorkSectionV3() {
  const [playingIndex, setPlayingIndex] = useState(0);
  const [currentSlideNum, setCurrentSlideNum] = useState(1);
  const videoRefs = useRef([]);
  const swiperRef = useRef(null);
  const totalSlides = REEL_PROJECTS.length;

  const handleSlideChange = (swiper) => {
    const activeIdx = swiper.realIndex;
    setPlayingIndex(activeIdx);
    setCurrentSlideNum(activeIdx + 1);

    videoRefs.current.forEach((vid, idx) => {
      if (!vid) return;
      if (idx === activeIdx) {
        vid.currentTime = 0;
        vid.play().catch(() => {});
      } else {
        vid.pause();
      }
    });
  };

  const toggleVideoPlay = (idx) => {
    const vid = videoRefs.current[idx];
    if (!vid) return;

    if (vid.paused) {
      vid.play();
      setPlayingIndex(idx);
    } else {
      vid.pause();
      setPlayingIndex(null);
    }
  };

  return (
    <section className="v3-work-section" id="work">
      <div className="container-fluid v3-section-container px-3 px-md-5 px-xl-5">
        {/* Section Header with Bootstrap row & col */}
        <div className="row mb-5">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="v3-section-eyebrow-wrap">
              <span className="v3-eyebrow-dash" />
              <span className="v3-section-eyebrow">03 / WORK</span>
            </div>
            <h2 className="v3-editorial-headline">
              Crafting Moments. <br />
              <span>Defining Cultural Conversations.</span>
            </h2>
            <p className="v3-editorial-subtext">
              Every campaign we launch is engineered to stand out in crowded feeds and urban spaces,
              driving tangible consumer affection and commercial return.
            </p>
          </div>
        </div>

        {/* =====================================================================
            1. CINEMATIC VIDEO REELS CAROUSEL WITH SECTION-1 MATCHING NAV
            ===================================================================== */}
        <div className="v3-work-reels-block mb-5">
          <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-3 v3-work-reels-header">
            <span className="v3-work-sub-eyebrow">FEATURED PRODUCTION REELS</span>
            
            {/* Custom < 01 / 05 > Navigation matching Section 1 Hero Nav */}
            <div className="v3-reels-nav-controls">
              <button
                type="button"
                className="v3-reels-nav-btn"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous reel"
              >
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 1 1 7l6 6" />
                </svg>
              </button>

              <span className="v3-reels-counter">
                <b>{String(currentSlideNum).padStart(2, "0")}</b> / {String(totalSlides).padStart(2, "0")}
              </span>

              <button
                type="button"
                className="v3-reels-nav-btn"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next reel"
              >
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="m1 1 6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="v3-reels-stage">
            <Swiper
              modules={[Navigation]}
              slidesPerView={3}
              centeredSlides={true}
              loop={true}
              spaceBetween={32}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                handleSlideChange(swiper);
              }}
              onSlideChange={handleSlideChange}
              breakpoints={{
                0: { slidesPerView: 1.1, spaceBetween: 16 },
                640: { slidesPerView: 1.8, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 32 },
              }}
              className="v3-work-swiper"
            >
              {REEL_PROJECTS.map((reel, index) => {
                const isCurrentPlaying = playingIndex === index;

                return (
                  <SwiperSlide key={reel.id} className="v3-work-slide">
                    <div
                      className={`v3-work-reel-card ${isCurrentPlaying ? "is-playing" : ""}`}
                      onClick={() => toggleVideoPlay(index)}
                    >
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={reel.src}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="v3-work-reel-video"
                        onEnded={() => swiperRef.current?.slideNext()}
                      />

                      {/* Vignette Shade */}
                      <div className="v3-work-reel-shade" />

                      {/* Header Badge */}
                      <div className="v3-work-reel-top">
                        <span className="v3-reel-category-pill">{reel.category}</span>
                        <span className="v3-reel-stats-pill">{reel.stats}</span>
                      </div>

                      {/* Glassmorphism Play Button Matching Section 1 Hero */}
                      <div className="v3-work-play-btn" aria-hidden="true">
                        {isCurrentPlaying ? <Pause size={20} /> : <Play size={20} style={{ marginLeft: 2 }} />}
                      </div>

                      {/* Caption Bottom */}
                      <div className="v3-work-reel-bottom">
                        <span className="v3-reel-client-name">{reel.client}</span>
                        <h4 className="v3-reel-headline">{reel.title}</h4>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>

        {/* =====================================================================
            2. CURATED CASE STUDIES (BOOTSTRAP 3-COLUMN SPREAD)
            ===================================================================== */}
        <div className="v3-studies-section pt-5 mb-5">
          <div className="row mb-4">
            <div className="col-12">
              <span className="v3-sub-eyebrow">CURATED CLIENT ARCHIVE</span>
              <h3 className="v3-studies-heading">Selected Benchmark Deployments</h3>
            </div>
          </div>

          <div className="row g-4 v3-studies-three-col">
            {FEATURED_STUDIES.map((study) => (
              <div key={study.id} className="col-12 col-md-6 col-lg-4">
                <Link href={study.link} className="v3-study-card h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div className="v3-study-image-wrapper">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="v3-study-img"
                        loading="lazy"
                      />
                      <div className="v3-study-corner-pill">
                        <span>{study.metric}</span>
                      </div>
                    </div>

                    <div className="v3-study-info">
                      <span className="v3-study-category">{study.category}</span>
                      <h4 className="v3-study-title">{study.title}</h4>
                    </div>
                  </div>

                  <div className="v3-study-cta-link mt-3">
                    <span>READ CASE STUDY</span>
                    <ArrowUpRight size={14} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Explore All Work Link matching Section 1 Signature CTA */}
        <div className="row justify-content-center text-center pt-2">
          <div className="col-auto">
            <Link href="/projects" className="v3-editorial-cta-link">
              <span className="v3-cta-dash" aria-hidden="true" />
              <span>EXPLORE FULL ARCHIVE & CAMPAIGNS</span>
              <span className="v3-cta-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

