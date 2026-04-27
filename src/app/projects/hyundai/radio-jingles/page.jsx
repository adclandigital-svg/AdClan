"use client";

import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Users, BarChart3, Clock, Sparkles } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

import "./radio.css";

/* =========================
   JSON DATA (INSIDE SAME FILE)
========================= */
/* =========================
   JSON DATA (HYUNDAI CLIENT)
========================= */
const reels = [
  {
    id: 1,
    title: "The Signature Recall",
    subtitle: "Premium Brand Positioning",
    audio: "/projects/hyundai/radio/hyundai1.mpeg",
    description:
      "A sophisticated sonic branding piece designed to elevate Hyundai’s premium positioning. By blending ambient electronic textures with a melodic signature, this jingle establishes an emotional connection, ensuring the brand remains top-of-mind during the consumer’s daily commute.",
    platform: "National FM + Digital Audio",
    reach: "Premium Urban Commuters",
    impact: "20% Uplift in TOMA (Top of Mind Awareness)",
    duration: "Annual Brand Campaign",
    client: "Hyundai India",
    result:
      "Successfully established a unified brand voice across 12+ metro markets, creating a 'sonic anchor' that consumers recognize within 2 seconds.",
  },
  {
    id: 2,
    title: "The Festive Pulse",
    subtitle: "Tactical Sales Acceleration",
    audio: "/projects/hyundai/radio/hyundai2.mpeg",
    description:
      "A high-energy, retail-focused spot engineered for the holiday season. This jingle utilizes upbeat percussion and a celebratory vocal delivery to drive immediate action, specifically targeting families looking to make high-value purchases during auspicious periods.",
    platform: "Regional Radio Networks",
    reach: "Tier 1 & Tier 2 Markets",
    impact: "High Urgency & Engagement",
    duration: "15-Day Festive Peak",
    client: "Hyundai India",
    result:
      "Generated a 35% increase in dealership inquiries and a significant spike in 'Test Drive' bookings within the first 14 days of airtime.",
  },
  {
    id: 3,
    title: "The Pattern Interrupt",
    subtitle: "High-Frequency Product Promo",
    audio: "/projects/hyundai/radio/hyundai3.mpeg",
    description:
      "A minimalist, high-impact 'stinger' optimized for high-frequency rotation. Designed to deliver a single message in under 15 seconds, this jingle uses sharp audio cues to grab attention in crowded morning-show radio environments.",
    platform: "Prime-Time Radio Spots",
    reach: "Daily Office Commuters",
    impact: "Fast Message Penetration",
    duration: "7-10 Days Flash Promo",
    client: "Hyundai India",
    result:
      "Achieved maximum frequency-reach with minimal 'listener fatigue,' maintaining high recall for specific year-end clearance offers.",
  },
];

/* =========================
   COMPONENT
========================= */
export default function VikramMillsHero() {
  const router = useRouter();
  const swiperRef = useRef(null);

  const [active, setActive] = useState(reels[0]);

  const handleSlideChange = (swiper) => {
    const current = reels[swiper.realIndex];
    setActive(current);

    // stop all audio
    audioRefs.current.forEach((audio) => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    // stop all video
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  const videoRefs = useRef([]);
  const audioRefs = useRef([]);
  const [progress, setProgress] = useState([]);
  const [volume, setVolume] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  // PROGRESS
  const updateProgress = (index) => {
    const audio = audioRefs.current[index];
    if (!audio) return;

    const value = (audio.currentTime / audio.duration) * 100;

    setProgress((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  // SEEK
  const handleSeek = (e, index) => {
    const audio = audioRefs.current[index];
    if (!audio) return;

    const value = e.target.value;
    audio.currentTime = (value / 100) * audio.duration;
  };

  // VOLUME CHANGE
  const handleVolume = (e, index) => {
    const audio = audioRefs.current[index];
    const value = e.target.value;

    if (!audio) return;

    audio.volume = value;

    setVolume((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  // MUTE
  const toggleMute = (index) => {
    const audio = audioRefs.current[index];
    if (!audio) return;

    const newVolume = audio.volume > 0 ? 0 : 1;
    audio.volume = newVolume;

    setVolume((prev) => {
      const updated = [...prev];
      updated[index] = newVolume;
      return updated;
    });
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <div className="vm-hero">
        <h1>Hyundai – Radio Jingle Campaign</h1>

        <p className="vm-hero-desc">
          We executed a performance-driven radio jingle campaign for Hyundai,
          designed to strengthen brand recall, enhance awareness, and drive
          customer engagement through strategic audio storytelling and
          high-frequency radio exposure across metro and regional markets.
        </p>

        <div className="vm-info-bar">
          <div className="vm-info-item">
            <Users size={16} /> Brand Awareness Growth
          </div>
          <div className="vm-info-item">
            <BarChart3 size={16} /> Multi-City Radio Reach
          </div>
          <div className="vm-info-item">
            <Clock size={16} /> 10–30 Days Campaign
          </div>
        </div>

        <div className="vm-cta">
          <button onClick={() => router.push("/contact")}>
            Discuss Similar Campaign →
          </button>
        </div>
      </div>

      {/* ================= SECTION ================= */}
      <div className="vm-section">
        {/* ================= LEFT - SWIPER ================= */}
        <div
          className="vm-left"
          onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
          onMouseLeave={() => swiperRef.current?.autoplay?.start()}
        >
          {/* 🔥 NAV BUTTONS */}
          <button
            className="vm-nav prev"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            ←
          </button>

          <button
            className="vm-nav next"
            onClick={() => swiperRef.current?.slideNext()}
          >
            →
          </button>

          <Swiper
            className="vm-swiper"
            modules={[Pagination]}
            slidesPerView={1}
            loop={true}
            centeredSlides={false}
            spaceBetween={20}
            pagination={{ clickable: true }}
            speed={500}
            threshold={8}
            resistanceRatio={0.85}
            simulateTouch={true}
            touchStartPreventDefault={false}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              handleSlideChange(swiper);
            }}
            onSlideChange={handleSlideChange}
          >
            {reels.map((item, index) => (
              <SwiperSlide key={item.id}>
                <div className="vm-audio-card">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    className="vm-video"
                    src="/projects/vikram-mills/sound-wave.mov"
                    muted
                    loop
                    playsInline
                  />

                  <div className="vm-audio">
                    <button
                      className="vm-play"
                      onClick={() => {
                        const audio = audioRefs.current[index];
                        const video = videoRefs.current[index];

                        if (!audio) return;

                        if (audio.paused) {
                          audio.play();
                          video?.play();
                          swiperRef.current?.autoplay?.stop();
                        } else {
                          audio.pause();
                          video?.pause();
                          swiperRef.current?.autoplay?.start();
                        }
                      }}
                    >
                      {audioRefs.current[index]?.paused ? "▶" : "❚❚"}
                    </button>

                    <input
                      type="range"
                      className="vm-progress"
                      min="0"
                      max="100"
                      value={progress[index] || 0}
                      onChange={(e) => handleSeek(e, index)}
                    />

                    <button
                      className="vm-volume-btn"
                      onClick={() => toggleMute(index)}
                    >
                      {volume[index] === 0 ? "🔇" : "🔊"}
                    </button>

                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume[index] ?? 1}
                      onChange={(e) => handleVolume(e, index)}
                      className="vm-volume"
                    />

                    <audio
                      ref={(el) => (audioRefs.current[index] = el)}
                      src={item.audio}
                      onTimeUpdate={() => updateProgress(index)}
                      onEnded={() => {
                        const video = videoRefs.current[index];
                        video?.pause();
                        swiperRef.current?.slideNext();
                        swiperRef.current?.autoplay?.start();
                      }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ================= RIGHT - DETAILS ================= */}
        <div className="vm-right">
          {/* HEADER */}
          <div className="vm-title-block">
            <div>
              <h2>{active.title}</h2>
              <p className="vm-sub">{active.subtitle}</p>
            </div>
            <span className="vm-tag">🎧 Radio Case Study</span>
          </div>

          {/* DESCRIPTION */}
          <p className="vm-desc">{active.description}</p>

          {/* METRICS */}
          <div className="vm-metrics">
            <div className="vm-metric-card">
              <span>📻 Platform</span>
              <p>{active.platform}</p>
            </div>

            <div className="vm-metric-card">
              <span>🎯 Reach</span>
              <p>{active.reach}</p>
            </div>

            <div className="vm-metric-card">
              <span>📊 Impact</span>
              <p>{active.impact}</p>
            </div>

            <div className="vm-metric-card">
              <span>⏱ Duration</span>
              <p>{active.duration}</p>
            </div>

            <div className="vm-metric-card full highlight">
              <span>🏢 Client</span>
              <p>{active.client}</p>
            </div>
          </div>

          {/* RESULT */}
          <div className="vm-result-card">
            <h4>📌 Campaign Result</h4>
            <p>{active.result}</p>
          </div>
        </div>
      </div>
    </>
  );
}
