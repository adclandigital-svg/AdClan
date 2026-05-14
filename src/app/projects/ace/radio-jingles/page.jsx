"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Users, BarChart3, Clock } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

import "./radio.css";

/* =========================
   RADIO CAMPAIGN DATA
========================= */

const reels = [
  {
    id: 1,

    title: "Ace Group - Run FM Radio Teaser",

    subtitle: "Real Estate Audio Promotion Campaign",

    audio: "/projects/ace/Teaser-Spot-ACE.mp3",

    description:
      "A high-impact radio teaser campaign created for Ace Group to build excitement, improve local brand awareness, and generate audience interest through energetic voiceovers, catchy scripting, and strategic FM radio placements.",

    platform: "FM Radio Advertising",

    reach: "Delhi NCR & Regional Audience",

    impact: "Strong Local Brand Recall",

    duration: "Teaser Marketing Campaign",

    client: "Ace Group",

    result:
      "The radio advertisement successfully boosted campaign visibility and created strong audience curiosity through repeated audio exposure and engaging promotional messaging.",
  },
];

/* =========================
   COMPONENT
========================= */

export default function AceRunRadioCampaign() {
  const router = useRouter();
  const swiperRef = useRef(null);

  const [active, setActive] = useState(reels[0]);

  const videoRefs = useRef([]);
  const audioRefs = useRef([]);

  const [progress, setProgress] = useState([]);
  const [volume, setVolume] = useState([]);

  /* =========================
     SLIDE CHANGE
  ========================= */

  const handleSlideChange = (swiper) => {
    const current = reels[swiper.realIndex];
    setActive(current);

    audioRefs.current.forEach((audio) => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  /* =========================
     PROGRESS
  ========================= */

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

  /* =========================
     SEEK
  ========================= */

  const handleSeek = (e, index) => {
    const audio = audioRefs.current[index];

    if (!audio) return;

    const value = e.target.value;

    audio.currentTime = (value / 100) * audio.duration;
  };

  /* =========================
     VOLUME
  ========================= */

  const handleVolume = (e, index) => {
    const audio = audioRefs.current[index];

    if (!audio) return;

    const value = e.target.value;

    audio.volume = value;

    setVolume((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  /* =========================
     MUTE
  ========================= */

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
        <h1>Ace Group – Run  Radio Advertising Campaign</h1>

        <p className="vm-hero-desc">
          We produced a professional radio advertisement campaign for Ace Group
          focused on building strong brand recall, improving audience reach, and
          creating impactful audio engagement through strategic radio marketing.
        </p>

        <div className="vm-info-bar">
          <div className="vm-info-item">
            <Users size={16} /> Brand Awareness Campaign
          </div>

          <div className="vm-info-item">
            <BarChart3 size={16} /> FM Radio Promotion
          </div>

          <div className="vm-info-item">
            <Clock size={16} /> Promotional Audio Campaign
          </div>
        </div>

        <div className="vm-cta">
          <button onClick={() => router.push("/contact")}>
            Start Your Radio Campaign →
          </button>
        </div>
      </div>

      {/* ================= SECTION ================= */}

      <div className="vm-section">
        {/* ================= LEFT ================= */}

        <div className="vm-left">
          <Swiper
            className="vm-swiper"
            modules={[Pagination]}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
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
                        } else {
                          audio.pause();
                          video?.pause();
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
                      }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ================= RIGHT ================= */}

        <div className="vm-right">
          <div className="vm-title-block">
            <div>
              <h2>{active.title}</h2>

              <p className="vm-sub">{active.subtitle}</p>
            </div>

            <span className="vm-tag">🎧 Radio Advertisement</span>
          </div>

          <p className="vm-desc">{active.description}</p>

          {/* ================= METRICS ================= */}

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
              <span>📈 Impact</span>
              <p>{active.impact}</p>
            </div>

            <div className="vm-metric-card">
              <span>⏱ Campaign</span>
              <p>{active.duration}</p>
            </div>

            <div className="vm-metric-card full highlight">
              <span>🏢 Client</span>
              <p>{active.client}</p>
            </div>
          </div>

          {/* ================= RESULT ================= */}

          <div className="vm-result-card">
            <h4>📌 Campaign Result</h4>

            <p>{active.result}</p>
          </div>
        </div>
      </div>
    </>
  );
}
