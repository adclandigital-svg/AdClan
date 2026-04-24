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
    audio: "https://www.adclan.in/projects/radio/Teaser-Spot-ACE.mp3",
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
    audio: "https://www.adclan.in/projects/radio/Teaser-Spot-ACE.mp3",
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
    audio: "https://www.adclan.in/projects/radio/Teaser-Spot-ACE.mp3",
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
          {/* <Swiper
            className="vm-swiper"
            modules={[Pagination, Autoplay]}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            spaceBetween={20}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
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
          > */}
          <Swiper
            className="vm-swiper"
            modules={[Pagination]}
            slidesPerView={1} // ✅ IMPORTANT
            loop={false} // ✅ REMOVE LOOP (main fix)
            centeredSlides={false}
            spaceBetween={20}
            pagination={{ clickable: true }}
            // ✅ smooth drag
            speed={500}
            threshold={8}
            resistanceRatio={0.85}
            // ✅ allow drag properly
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
                  {/* VIDEO */}
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    className="vm-video"
                    src="/projects/vikram-mills/sound-wave.mov"
                    muted
                    loop
                    playsInline
                  />

                  <div className="vm-audio">
                    {/* PLAY BUTTON */}
                    <button
                      className="vm-play"
                      onClick={() => {
                        const audio = audioRefs.current[index];
                        const video = videoRefs.current[index];

                        if (!audio) return;

                        if (audio.paused) {
                          // ▶ PLAY
                          audio.play();
                          video?.play();

                          // 🛑 STOP SLIDER
                          swiperRef.current?.autoplay?.stop();
                        } else {
                          // ❚❚ PAUSE
                          audio.pause();
                          video?.pause();

                          // ▶ RESUME SLIDER
                          swiperRef.current?.autoplay?.start();
                        }
                      }}
                    >
                      {audioRefs.current[index]?.paused ? "▶" : "❚❚"}
                    </button>

                    {/* PROGRESS */}
                    <input
                      type="range"
                      className="vm-progress"
                      min="0"
                      max="100"
                      value={progress[index] || 0}
                      onChange={(e) => handleSeek(e, index)}
                    />

                    {/* VOLUME ICON */}
                    <button
                      className="vm-volume-btn"
                      onClick={() => toggleMute(index)}
                    >
                      {volume[index] === 0 ? "🔇" : "🔊"}
                    </button>

                    {/* VOLUME SLIDER */}
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume[index] ?? 1}
                      onChange={(e) => handleVolume(e, index)}
                      className="vm-volume"
                    />

                    {/* AUDIO */}
                    <audio
                      ref={(el) => (audioRefs.current[index] = el)}
                      src={item.audio}
                      onTimeUpdate={() => updateProgress(index)}
                      onEnded={() => {
                        const video = videoRefs.current[index];

                        // stop video
                        video?.pause();

                        // 👉 GO NEXT SLIDE
                        swiperRef.current?.slideNext();
                        // ▶ resume autoplay
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
