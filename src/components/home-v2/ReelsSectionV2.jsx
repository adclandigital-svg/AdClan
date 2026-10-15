"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Eye,
  Film,
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const REELS_DATA = [
  {
    id: "jaipurjewellers",
    src: "/home/reels/jaipurjewellers.mp4",
    client: "Jaipur Jewellers",
    category: "Luxury Heritage",
    headline: "Royal Heritage Collection",
    views: "4.1M",
    growth: "+140% Footfall",
  },
  {
    id: "aggarwal",
    src: "/home/reels/aggarwal.mp4",
    client: "Aggarwal Sweets",
    category: "Culinary & FMCG",
    headline: "Festive Indulgence Campaign",
    views: "2.4M",
    growth: "3.2x Festive Orders",
  },
  {
    id: "smiletrain",
    src: "/home/reels/smile train video ad 2.mp4",
    client: "Smile Train India",
    category: "Social Impact & NGO",
    headline: "Transforming Smiles Worldwide",
    views: "5.6M",
    growth: "High Donor Action",
  },
  {
    id: "kb-mart",
    src: "/home/reels/kb-mart.mp4",
    client: "KB Mart",
    category: "Modern Retail",
    headline: "Supermarket Grand Opening",
    views: "1.8M",
    growth: "10K+ Store Visits",
  },
  {
    id: "vikram-mills",
    src: "/home/reels/vikram-mills.mp4",
    client: "Vikram Roller Flour Mills",
    category: "Heritage FMCG",
    headline: "Purity In Every Grain",
    views: "3.0M",
    growth: "Pan-India Reach",
  },
];

export default function ReelsSectionV2() {
  const videoRefs = useRef([]);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const handleSlideChange = (swiper) => {
    const realIdx = swiper.realIndex;
    setActiveIndex(realIdx);

    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === realIdx) {
        video.currentTime = 0;
        video.muted = isMuted;
        video
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      } else {
        video.pause();
      }
    });
  };

  const togglePlay = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const newMuted = !isMuted;
    setIsMuted(newMuted);

    const currentVideo = videoRefs.current[activeIndex];
    if (currentVideo) {
      currentVideo.muted = newMuted;
    }
  };

  return (
    <section className="v2-reels-section" id="v2-featured-work">
      {/* Ambient background glow */}
      <div className="v2-ambient-glow v2-ambient-glow-cyan" />
      <div className="v2-ambient-glow v2-ambient-glow-purple" />

      <div className="v2-container">
        {/* Section Header */}
        <div className="v2-section-header">
          <div className="v2-badge">
            <Sparkles size={14} className="v2-badge-icon" />
            <span>CREATIVE SHOWCASE IN MOTION</span>
          </div>

          <h2 className="v2-section-title">
            Visuals Engineered To <span className="v2-gradient-text">Stop The Scroll</span>
          </h2>

          <p className="v2-section-desc">
            From high-octane social reels to television-grade commercials, we craft retention-first
            visual stories that capture attention and drive measurable brand growth.
          </p>
        </div>

        {/* Carousel Viewport with Mockup Framing */}
        <div className="v2-reels-carousel-container">
          {/* Navigation Controls */}
          <button
            type="button"
            className="v2-carousel-nav v2-carousel-nav-prev"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous reel"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            className="v2-carousel-nav v2-carousel-nav-next"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next reel"
          >
            <ChevronRight size={22} />
          </button>

          <Swiper
            modules={[Pagination, Navigation]}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            spaceBetween={32}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              handleSlideChange(swiper);
            }}
            onSlideChange={handleSlideChange}
            pagination={{
              clickable: true,
              el: ".v2-reels-pagination",
            }}
            breakpoints={{
              0: { slidesPerView: 1.1, spaceBetween: 16 },
              640: { slidesPerView: 1.6, spaceBetween: 24 },
              992: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="v2-reels-swiper"
          >
            {REELS_DATA.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <SwiperSlide key={item.id} className="v2-reel-slide">
                  <div
                    className={`v2-phone-mockup ${isActive ? "is-active" : ""}`}
                    onClick={() => togglePlay(index)}
                  >
                    {/* Device bezel sheen & status bar */}
                    <div className="v2-phone-notch">
                      <span className="v2-live-indicator">
                        <span className="v2-live-dot" /> 4K FILM
                      </span>
                      <span className="v2-phone-brand">ADCLAN STUDIO</span>
                    </div>

                    {/* Sound Control Toggle */}
                    {isActive && (
                      <button
                        type="button"
                        className="v2-sound-btn"
                        onClick={toggleMute}
                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                      >
                        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                        <span>{isMuted ? "Sound Off" : "Sound On"}</span>
                      </button>
                    )}

                    {/* Play / Pause Overlay Icon */}
                    {!isPlaying && isActive && (
                      <div className="v2-play-indicator">
                        <Play size={28} fill="#ffffff" />
                      </div>
                    )}

                    {/* Video player */}
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={item.src}
                      muted={isMuted}
                      loop={false}
                      playsInline
                      className="v2-reel-video"
                      onEnded={() => {
                        swiperRef.current?.slideNext();
                      }}
                    />

                    {/* Bottom Metadata Scrim */}
                    <div className="v2-reel-overlay">
                      <div className="v2-reel-tags">
                        <span className="v2-reel-category">{item.category}</span>
                        <span className="v2-reel-stat">
                          <Eye size={12} /> {item.views}
                        </span>
                      </div>

                      <h3 className="v2-reel-client">{item.client}</h3>
                      <p className="v2-reel-headline">{item.headline}</p>

                      <div className="v2-reel-footer">
                        <span className="v2-reel-metric">
                          <TrendingUp size={12} /> {item.growth}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Custom pagination bullets */}
          <div className="v2-reels-pagination" />
        </div>

        {/* Bottom Production Metrics Strip */}
        <div className="v2-reels-stats-strip">
          <div className="v2-reels-stat-pill">
            <span className="v2-stat-num">50M+</span>
            <span className="v2-stat-label">Organic Views Driven</span>
          </div>
          <div className="v2-reels-stat-pill">
            <span className="v2-stat-num">4.8x</span>
            <span className="v2-stat-label">Average CTR Boost</span>
          </div>
          <div className="v2-reels-stat-pill">
            <span className="v2-stat-num">100+</span>
            <span className="v2-stat-label">Commercials Produced</span>
          </div>
          <div className="v2-reels-stat-pill">
            <span className="v2-stat-num">72h</span>
            <span className="v2-stat-label">Rapid Production Turnaround</span>
          </div>
        </div>
      </div>
    </section>
  );
}
