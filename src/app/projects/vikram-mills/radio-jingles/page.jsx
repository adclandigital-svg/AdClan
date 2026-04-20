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
const reels = [
  {
    id: 1,
    title: "Main Brand Jingle",
    subtitle: "Core sonic identity for Vikram Mills",
    audio: "/audio/vikram-main.mp3",
    description:
      "Primary radio identity jingle defining Vikram Mills across all campaigns.",
    platform: "FM Radio + Online Radio",
    reach: "Multi-city Coverage",
    impact: "High Brand Recall",
    duration: "15–30 Days",
    client: "Vikram Mills",
    result:
      "Strong brand recognition and improved recall across radio audiences.",
  },
  {
    id: 2,
    title: "Festival Jingle",
    subtitle: "Seasonal promotional campaign",
    audio: "/audio/vikram-festival.mp3",
    description:
      "Festive radio jingle designed to increase emotional engagement.",
    platform: "FM + Seasonal Ads",
    reach: "Regional + National",
    impact: "High Engagement Spike",
    duration: "10–15 Days",
    client: "Vikram Mills",
    result: "Boosted festive engagement and audience interaction.",
  },
  {
    id: 3,
    title: "15 Sec Ad Jingle",
    subtitle: "Short high-impact radio ad",
    audio: "/audio/vikram-15sec.mp3",
    description:
      "Short format jingle designed for repetition-based brand recall.",
    platform: "FM Radio Spots",
    reach: "High Frequency Broadcast",
    impact: "Strong Recall",
    duration: "7–10 Days",
    client: "Vikram Mills",
    result: "Improved brand familiarity through repetition.",
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
  };

  const videoRefs = useRef([]);

  return (
    <>
      {/* ================= HERO ================= */}
      <div className="vm-hero">
        <h1>Vikram Mills – Radio Jingle Campaign</h1>

        <p className="vm-hero-desc">
          A high-impact audio branding campaign crafted for Vikram Mills,
          blending storytelling, sonic identity, and radio reach to build strong
          brand recall across audiences.
        </p>

        <div className="vm-info-bar">
          <div className="vm-info-item">
            <Users size={16} /> Brand Awareness Boost
          </div>
          <div className="vm-info-item">
            <BarChart3 size={16} /> Multi-Platform Radio Reach
          </div>
          <div className="vm-info-item">
            <Clock size={16} /> 15–30 Days Execution
          </div>
          <div className="vm-info-item">
            <Sparkles size={16} /> Custom Sonic Identity
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
        <div className="vm-left">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            spaceBetween={20}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              handleSlideChange(swiper);
            }}
            onSlideChange={handleSlideChange}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
          >
            {reels.map((item, index) => (
              <SwiperSlide key={item.id}>
                <div className="vm-audio-card">
                  <div className="vm-badge">🎧 Jingle</div>

                  {/* VIDEO */}
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    className="vm-video"
                    src="https://videocdn.cdnpk.net/videos/f250584a-cbc9-5d72-bd9e-030677bf5b9d/horizontal/previews/watermarked/large.mp4"
                    muted
                    loop
                    playsInline
                  />

                  {/* AUDIO (CONTROLLED SYNC) */}
                  <audio
                    className="vm-audio"
                    controls
                    onPlay={() => {
                      videoRefs.current[index]?.play();
                    }}
                    onPause={() => {
                      videoRefs.current[index]?.pause();
                    }}
                    onEnded={() => {
                      videoRefs.current[index]?.pause();
                    }}
                  >
                    <source src={item.audio} type="audio/mp3" />
                  </audio>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ================= RIGHT - DETAILS ================= */}
        <div className="vm-right">
          {/* HEADER */}
          <div className="vm-title-block">
            <h2>{active.title}</h2>
            <span className="vm-tag">Radio Jingle Case Study</span>
          </div>

          {/* DESCRIPTION */}
          <p className="vm-desc">{active.description}</p>

          {/* METRICS CARDS */}
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
              <span>⏱️ Duration</span>
              <p>{active.duration}</p>
            </div>

            <div className="vm-metric-card full">
              <span>🏢 Client</span>
              <p>{active.client}</p>
            </div>
          </div>

          {/* RESULT HIGHLIGHT BOX */}
          <div className="vm-result-card">
            <h4>📌 Campaign Result</h4>
            <p>{active.result}</p>
          </div>
        </div>
      </div>
    </>
  );
}
