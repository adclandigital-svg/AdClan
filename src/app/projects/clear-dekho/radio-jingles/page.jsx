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
    title: "Clear Dekho – Affordable Eyewear Radio Campaign",
    subtitle: "FM Radio Brand Promotion",
    audio: "/projects/clear_dekho/83-Clear-dekho-40sec-promo.mp3",
    description:
      "A high-energy radio advertising campaign developed for Clear Dekho to promote affordable and stylish eyewear solutions across regional and metro audiences. The campaign focused on strong recall, catchy audio storytelling, engaging voiceovers, and repeated FM radio exposure to drive customer attention and brand recognition.",
    platform: "FM Radio & Audio Advertising",
    reach: "Delhi NCR & North India Audience",
    impact: "High Brand Recall & Promotional Awareness",
    duration: "40 Seconds Radio Commercial",
    client: "Clear Dekho",
    result:
      "The radio campaign successfully boosted audience engagement and strengthened Clear Dekho’s local market presence through impactful audio branding, memorable promotional messaging, and consistent FM radio visibility.",
  },
  {
    id: 2,
    title: "Clear Dekho – Trendy Eyewear Jingle",
    subtitle: "Short Retail Promo",
    audio: "/projects/clear_dekho/Cleardekho-New-retail.mp3",
    description:
      "A crisp 15-second Hindi radio jingle promoting Clear Dekho stores. It highlights trendy, cool, and affordable glasses & sunglasses with a strong call-to-action to visit the store.",
    platform: "FM Radio Jingle",
    reach: "Pan-India Retail Audience",
    impact: "High Recall & Store Footfall",
    duration: "15.6 Seconds Jingle",
    client: "Clear Dekho",
    result:
      "Short and catchy jingle designed for high rotation on FM radio to drive immediate store visits and reinforce brand positioning as affordable & stylish eyewear destination.",
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
        <h1>Clear Dekho – Radio Advertising Campaign</h1>

        <p className="vm-hero-desc">
          We produced a performance-driven radio advertising campaign for Clear
          Dekho focused on improving eyewear brand awareness, increasing
          audience engagement, and promoting affordable stylish eyewear through
          strategic FM radio promotions and memorable audio storytelling.
        </p>

        <div className="vm-info-bar">
          <div className="vm-info-item">
            <Users size={16} /> Eyewear Brand Promotion
          </div>

          <div className="vm-info-item">
            <BarChart3 size={16} /> FM Radio Advertising
          </div>

          <div className="vm-info-item">
            <Clock size={16} /> 40 Sec Promotional Campaign
          </div>
        </div>

        <div className="vm-cta">
          <button onClick={() => router.push("/contact")}>
            Launch Your Radio Campaign →
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
