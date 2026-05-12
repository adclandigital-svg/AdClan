"use client";
import React, { useState, useRef } from "react";
import "./reels-page.css";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Users, BarChart3, Clock, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css";

/* 🔥 DATA */
const showcaseData = [
  {
    id: 1,
    category: "Reels",
    title: "Vikram Mills Product Reel",
    type: "video",
    client: "Vikram Mills",
    platform: "Instagram",
    duration: "45 Days",
    src: "/projects/vikram-mills/creatives/1.mp4",
  },
  {
    id: 2,
    category: "Reels",
    title: "Vikram Mills Brand Reel",
    type: "video",
    client: "Vikram Mills",
    platform: "Instagram",
    duration: "45 Days",
    src: "/projects/vikram-mills/creatives/2.mp4",
  },
  {
    id: 3,
    category: "Reels",
    title: "Vikram Mills Campaign Reel",
    type: "video",
    client: "Vikram Mills",
    platform: "Instagram",
    duration: "45 Days",
    src: "/projects/vikram-mills/creatives/3.mp4",
  },
  {
    id: 4,
    category: "Reels",
    title: "Vikram Mills Rice Reel",
    type: "video",
    client: "Vikram Mills",
    platform: "Instagram",
    duration: "45 Days",
    src: "/projects/vikram-mills/creatives/4.mp4",
  },
  {
    id: 5,
    category: "Reels",
    title: "Vikram Mills Wheat Reel",
    type: "video",
    client: "Vikram Mills",
    platform: "Instagram",
    duration: "45 Days",
    src: "/projects/vikram-mills/creatives/5.mp4",
  },
  {
    id: 6,
    category: "Reels",
    title: "Vikram Mills Social Reel",
    type: "video",
    client: "Vikram Mills",
    platform: "Instagram",
    duration: "45 Days",
    src: "/projects/vikram-mills/creatives/6.mp4",
  },
  {
    id: 7,
    category: "Reels",
    title: "Vikram Mills Premium Reel",
    type: "video",
    client: "Vikram Mills",
    platform: "Instagram",
    duration: "45 Days",
    src: "/projects/vikram-mills/creatives/7.mp4",
  },
  {
    id: 8,
    category: "Reels",
    title: "Vikram Mills Creative Reel",
    type: "video",
    client: "Vikram Mills",
    platform: "Instagram",
    duration: "45 Days",
    src: "/projects/vikram-mills/creatives/8.mp4",
  },

  {
    id: 11,
    category: "Creatives",
    title: "Vikram Mills Creative Post",
    type: "image",
    client: "Vikram Mills",
    platform: "Instagram",
    duration: "20 Days",
    src: "/projects/vikram-mills/creatives/1.jpg",
  },
  {
    id: 12,
    category: "Creatives",
    title: "Vikram Mills Brand Poster",
    type: "image",
    client: "Vikram Mills",
    platform: "Instagram",
    duration: "20 Days",
    src: "/projects/vikram-mills/creatives/2.jpg",
  },
  {
    id: 13,
    category: "Creatives",
    title: "Vikram Mills Product Poster",
    type: "image",
    client: "Vikram Mills",
    platform: "Instagram",
    duration: "20 Days",
    src: "/projects/vikram-mills/creatives/3.jpg",
  },
  {
    id: 14,
    category: "Creatives",
    title: "Vikram Mills Marketing Creative",
    type: "image",
    client: "Vikram Mills",
    platform: "Instagram",
    duration: "20 Days",
    src: "/projects/vikram-mills/creatives/4.jpg",
  },
  {
    id: 15,
    category: "Creatives",
    title: "Vikram Mills Social Creative",
    type: "image",
    client: "Vikram Mills",
    platform: "Instagram",
    duration: "20 Days",
    src: "/projects/vikram-mills/creatives/5.jpg",
  },
  {
    id: 16,
    category: "Creatives",
    title: "Vikram Mills Poster Design",
    type: "image",
    client: "Vikram Mills",
    platform: "Instagram",
    duration: "20 Days",
    src: "/projects/vikram-mills/creatives/6.jpg",
  },
  {
    id: 17,
    category: "Creatives",
    title: "Vikram Mills Product Creative",
    type: "image",
    client: "Vikram Mills",
    platform: "Instagram",
    duration: "20 Days",
    src: "/projects/vikram-mills/creatives/7.jpg",
  },
  {
    id: 18,
    category: "Creatives",
    title: "Vikram Mills Campaign Poster",
    type: "image",
    client: "Vikram Mills",
    platform: "Instagram",
    duration: "20 Days",
    src: "/projects/vikram-mills/creatives/8.jpg",
  },
  {
    id: 19,
    category: "Creatives",
    title: "Vikram Mills Food Creative",
    type: "image",
    client: "Vikram Mills",
    platform: "Instagram",
    duration: "20 Days",
    src: "/projects/vikram-mills/creatives/9.jpg",
  },
  {
    id: 20,
    category: "Creatives",
    title: "Vikram Mills Branding Creative",
    type: "image",
    client: "Vikram Mills",
    platform: "Instagram",
    duration: "20 Days",
    src: "/projects/vikram-mills/creatives/10.jpg",
  },
];

export default function Page() {
  const [activeItem, setActiveItem] = useState(null);
  const router = useRouter();

  const reels = showcaseData.filter((i) => i.category === "Reels");
  const creatives = showcaseData.filter((i) => i.category === "Creatives");

  return (
    <div className="cr-showcase">
      {/* 🔻 HERO */}
      <div className="cr-hero">
        <h1>Vikram Mills Creatives</h1>

        <p className="cr-hero-desc">
          We craft high-performing content blending storytelling, design and
          performance marketing.
        </p>

        <div className="cr-info-bar">
          <div>
            <Users size={16} /> Food Brand Campaigns
          </div>

          <div>
            <BarChart3 size={16} /> High Engagement Reels
          </div>

          <div>
            <Clock size={16} /> Trusted Brand Collaboration Over The Years
          </div>

          <div>
            <Sparkles size={16} /> Instagram Creatives
          </div>
        </div>

        <div className="cr-socials">
          <a href="#">
            <FaInstagram /> Instagram Reels
          </a>

          <a href="#">
            <FaYoutube /> Video Campaigns
          </a>

          <a href="#">
            <FaLinkedin /> Brand Marketing
          </a>
        </div>

        <div className="cr-hero-cta">
          <button onClick={() => router.push("/contact")}>
            Start Campaign →
          </button>
        </div>
      </div>
      {/* 🎨 CREATIVES */}
      <Section
        title="Creative Designs"
        data={creatives}
        setActiveItem={setActiveItem}
      />

      {/* 🎬 REELS */}
      <Section
        title="Reels Showcase"
        data={reels}
        setActiveItem={setActiveItem}
      />

      {/* 🔻 MODAL */}
      {activeItem && (
        <div className="cr-modal" onClick={() => setActiveItem(null)}>
          <div
            className="cr-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {activeItem.type === "video" ? (
              <video src={activeItem.src} controls autoPlay />
            ) : (
              <img src={activeItem.src} />
            )}
            <button onClick={() => setActiveItem(null)}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
}

/* 🔻 SECTION COMPONENT */
function Section({ title, data, setActiveItem }) {
  const swiperRef = useRef(null);

  return (
    <div className="crs-section">
      <div className="crs-header">
        <h2>{title}</h2>
        <p>High-performing visuals crafted for engagement.</p>
      </div>

      <div
        className="crs-slider"
        onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay?.start()}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          centeredSlides={true} // ✅ makes active slide centered
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 5 },
          }}
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="crs-card" onClick={() => setActiveItem(item)}>
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    className="crs-media"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img src={item.src} className="crs-media" />
                )}

                <div className="crs-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.client}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
