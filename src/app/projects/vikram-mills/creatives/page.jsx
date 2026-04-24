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
    title: "Fashion Campaign",
    type: "video",
    client: "Right Gold",
    platform: "Instagram",
    duration: "45 Days",
    src: "https://videocdn.cdnpk.net/videos/f2dc8650-74a4-51dc-b90f-eda22ebf9ec5/vertical/previews/watermarked/large.mp4",
  },
  {
    id: 2,
    category: "Reels",
    title: "Product Reel",
    type: "video",
    client: "Glow Skin",
    platform: "Instagram / YouTube",
    duration: "30 Days",
    src: "https://videocdn.cdnpk.net/videos/f2dc8650-74a4-51dc-b90f-eda22ebf9ec5/vertical/previews/watermarked/large.mp4",
  },
  {
    id: 3,
    category: "Creatives",
    title: "Instagram Ad",
    type: "image",
    client: "Nike",
    platform: "Instagram",
    duration: "15 Days",
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 4,
    category: "Creatives",
    title: "Brand Poster",
    type: "image",
    client: "Adidas",
    platform: "Facebook",
    duration: "20 Days",
    src: "https://images.unsplash.com/photo-1503602642458-232111445657",
  },
  {
    id: 5,
    category: "Reels",
    title: "Fashion Campaign",
    type: "video",
    client: "Right Gold",
    platform: "Instagram",
    duration: "45 Days",
    src: "https://videocdn.cdnpk.net/videos/f2dc8650-74a4-51dc-b90f-eda22ebf9ec5/vertical/previews/watermarked/large.mp4",
  },
  {
    id: 6,
    category: "Reels",
    title: "Product Reel",
    type: "video",
    client: "Glow Skin",
    platform: "Instagram / YouTube",
    duration: "30 Days",
    src: "https://videocdn.cdnpk.net/videos/f2dc8650-74a4-51dc-b90f-eda22ebf9ec5/vertical/previews/watermarked/large.mp4",
  },
  {
    id: 7,
    category: "Creatives",
    title: "Instagram Ad",
    type: "image",
    client: "Nike",
    platform: "Instagram",
    duration: "15 Days",
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 8,
    category: "Creatives",
    title: "Brand Poster",
    type: "image",
    client: "Adidas",
    platform: "Facebook",
    duration: "20 Days",
    src: "https://images.unsplash.com/photo-1503602642458-232111445657",
  },
  {
    id: 9,
    category: "Reels",
    title: "Fashion Campaign",
    type: "video",
    client: "Right Gold",
    platform: "Instagram",
    duration: "45 Days",
    src: "https://videocdn.cdnpk.net/videos/f2dc8650-74a4-51dc-b90f-eda22ebf9ec5/vertical/previews/watermarked/large.mp4",
  },
  {
    id: 10,
    category: "Reels",
    title: "Product Reel",
    type: "video",
    client: "Glow Skin",
    platform: "Instagram / YouTube",
    duration: "30 Days",
    src: "https://videocdn.cdnpk.net/videos/f2dc8650-74a4-51dc-b90f-eda22ebf9ec5/vertical/previews/watermarked/large.mp4",
  },
  {
    id: 11,
    category: "Creatives",
    title: "Instagram Ad",
    type: "image",
    client: "Nike",
    platform: "Instagram",
    duration: "15 Days",
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 12,
    category: "Creatives",
    title: "Brand Poster",
    type: "image",
    client: "Adidas",
    platform: "Facebook",
    duration: "20 Days",
    src: "https://images.unsplash.com/photo-1503602642458-232111445657",
  },
  {
    id: 13,
    category: "Reels",
    title: "Fashion Campaign",
    type: "video",
    client: "Right Gold",
    platform: "Instagram",
    duration: "45 Days",
    src: "https://videocdn.cdnpk.net/videos/f2dc8650-74a4-51dc-b90f-eda22ebf9ec5/vertical/previews/watermarked/large.mp4",
  },
  {
    id: 14,
    category: "Reels",
    title: "Product Reel",
    type: "video",
    client: "Glow Skin",
    platform: "Instagram / YouTube",
    duration: "30 Days",
    src: "https://videocdn.cdnpk.net/videos/f2dc8650-74a4-51dc-b90f-eda22ebf9ec5/vertical/previews/watermarked/large.mp4",
  },
  {
    id: 15,
    category: "Creatives",
    title: "Instagram Ad",
    type: "image",
    client: "Nike",
    platform: "Instagram",
    duration: "15 Days",
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 16,
    category: "Creatives",
    title: "Brand Poster",
    type: "image",
    client: "Adidas",
    platform: "Facebook",
    duration: "20 Days",
    src: "https://images.unsplash.com/photo-1503602642458-232111445657",
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
            <Users size={16} /> 25+ Clients
          </div>
          <div>
            <BarChart3 size={16} /> 10M+ Reach
          </div>
          <div>
            <Clock size={16} /> 15–60 Days
          </div>
          <div>
            <Sparkles size={16} /> Performance Creative
          </div>
        </div>

        <div className="cr-socials">
          <a href="#">
            <FaInstagram /> Instagram
          </a>
          <a href="#">
            <FaYoutube /> YouTube
          </a>
          <a href="#">
            <FaLinkedin /> LinkedIn
          </a>
        </div>

        <div className="cr-hero-cta">
          <button onClick={() => router.push("/contact")}>
            Start Project →
          </button>
        </div>
      </div>

      {/* 🎬 REELS */}
      <Section
        title="Reels Showcase"
        data={reels}
        setActiveItem={setActiveItem}
      />

      {/* 🎨 CREATIVES */}
      <Section
        title="Creative Designs"
        data={creatives}
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
