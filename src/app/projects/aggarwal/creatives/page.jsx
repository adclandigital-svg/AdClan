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
    // title: "Aggarwal Namkeen Product Reel",
    type: "video",
    client: "Aggarwal Namkeen",
    platform: "Instagram",
    duration: "60 Days",
    src: "/projects/aggarwal/creative/1.mp4",
  },
  {
    id: 2,
    category: "Reels",
    // title: "Namkeen Brand Campaign",
    type: "video",
    client: "Aggarwal Namkeen",
    platform: "Instagram",
    duration: "60 Days",
    src: "/projects/aggarwal/creative/2.mp4",
  },
  {
    id: 3,
    category: "Reels",
    // title: "Food Product Reel",
    type: "video",
    client: "Aggarwal Namkeen",
    platform: "Instagram",
    duration: "60 Days",
    src: "/projects/aggarwal/creative/3.mp4",
  },
  {
    id: 4,
    category: "Reels",
    // title: "Snacks Promotional Reel",
    type: "video",
    client: "Aggarwal Namkeen",
    platform: "Instagram",
    duration: "60 Days",
    src: "/projects/aggarwal/creative/4.mp4",
  },
  {
    id: 5,
    category: "Reels",
    // title: "Festival Campaign Reel",
    type: "video",
    client: "Aggarwal Namkeen",
    platform: "Instagram",
    duration: "60 Days",
    src: "/projects/aggarwal/creative/5.mp4",
  },
  {
    id: 6,
    category: "Reels",
    // title: "Aggarwal Namkeen Creative Post",
    type: "video",
    client: "Aggarwal Namkeen",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/aggarwal/creative/6.mp4",
  },

  {
    id: 7,
    category: "Creatives",
    // title: "Namkeen Brand Poster",
    type: "image",
    client: "Aggarwal Namkeen",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/aggarwal/creative/1.jpg",
  },
  {
    id: 8,
    category: "Creatives",
    // title: "Product Promotion Design",
    type: "image",
    client: "Aggarwal Namkeen",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/aggarwal/creative/2.jpg",
  },
  {
    id: 9,
    category: "Creatives",
    // title: "Festival Creative Campaign",
    type: "image",
    client: "Aggarwal Namkeen",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/aggarwal/creative/3.jpg",
  },
  {
    id: 10,
    category: "Creatives",
    // title: "Food Marketing Creative",
    type: "image",
    client: "Aggarwal Namkeen",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/aggarwal/creative/4.jpg",
  },
  {
    id: 11,
    category: "Creatives",
    // title: "Packaging Promotion Creative",
    type: "image",
    client: "Aggarwal Namkeen",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/aggarwal/creative/5.jpg",
  },
  {
    id: 12,
    category: "Creatives",
    // title: "Namkeen Social Campaign",
    type: "image",
    client: "Aggarwal Namkeen",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/aggarwal/creative/6.webp",
  },
  {
    id: 13,
    category: "Creatives",
    // title: "Snack Branding Poster",
    type: "image",
    client: "Aggarwal Namkeen",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/aggarwal/creative/7.jpg",
  },

  {
    id: 21,
    category: "Reels",
    // title: "Aggarwal Namkeen Product Reel",
    type: "video",
    client: "Aggarwal Namkeen",
    platform: "Instagram",
    duration: "60 Days",
    src: "/projects/aggarwal/creative/1.mp4",
  },
  {
    id: 22,
    category: "Reels",
    // title: "Namkeen Brand Campaign",
    type: "video",
    client: "Aggarwal Namkeen",
    platform: "Instagram",
    duration: "60 Days",
    src: "/projects/aggarwal/creative/2.mp4",
  },
  {
    id: 223,
    category: "Reels",
    // title: "Food Product Reel",
    type: "video",
    client: "Aggarwal Namkeen",
    platform: "Instagram",
    duration: "60 Days",
    src: "/projects/aggarwal/creative/3.mp4",
  },
  {
    id: 24,
    category: "Reels",
    // title: "Snacks Promotional Reel",
    type: "video",
    client: "Aggarwal Namkeen",
    platform: "Instagram",
    duration: "60 Days",
    src: "/projects/aggarwal/creative/4.mp4",
  },
  {
    id: 25,
    category: "Reels",
    // title: "Festival Campaign Reel",
    type: "video",
    client: "Aggarwal Namkeen",
    platform: "Instagram",
    duration: "60 Days",
    src: "/projects/aggarwal/creative/5.mp4",
  },
  {
    id: 26,
    category: "Reels",
    // title: "Aggarwal Namkeen Creative Post",
    type: "video",
    client: "Aggarwal Namkeen",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/aggarwal/creative/6.mp4",
  },

  {
    id: 27,
    category: "Creatives",
    // title: "Namkeen Brand Poster",
    type: "image",
    client: "Aggarwal Namkeen",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/aggarwal/creative/1.jpg",
  },
  {
    id: 28,
    category: "Creatives",
    // title: "Product Promotion Design",
    type: "image",
    client: "Aggarwal Namkeen",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/aggarwal/creative/2.jpg",
  },
  {
    id: 29,
    category: "Creatives",
    // title: "Festival Creative Campaign",
    type: "image",
    client: "Aggarwal Namkeen",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/aggarwal/creative/3.jpg",
  },
  {
    id: 30,
    category: "Creatives",
    // title: "Food Marketing Creative",
    type: "image",
    client: "Aggarwal Namkeen",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/aggarwal/creative/4.jpg",
  },
  {
    id: 31,
    category: "Creatives",
    // title: "Packaging Promotion Creative",
    type: "image",
    client: "Aggarwal Namkeen",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/aggarwal/creative/5.jpg",
  },
  {
    id: 32,
    category: "Creatives",
    // title: "Namkeen Social Campaign",
    type: "image",
    client: "Aggarwal Namkeen",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/aggarwal/creative/6.webp",
  },
  {
    id: 33,
    category: "Creatives",
    // title: "Snack Branding Poster",
    type: "image",
    client: "Aggarwal Namkeen",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/aggarwal/creative/7.jpg",
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
        <h1>Aggarwal Namkeen Creatives</h1>

        <p className="cr-hero-desc">
          Premium food branding, engaging social creatives, high-performing
          reels, and digital marketing content crafted for Aggarwal Namkeen.
        </p>

        <div className="cr-info-bar">
          <div>
            <Users size={16} /> FMCG Food Branding
          </div>

          <div>
            <BarChart3 size={16} /> High Engagement Campaigns
          </div>

          <div>
            <Clock size={16} /> Long-Term Brand Marketing
          </div>

          <div>
            <Sparkles size={16} /> Creative Social Presence
          </div>
        </div>

        <div className="cr-socials">
          <a href="#">
            <FaInstagram /> Instagram Reels
          </a>

          <a href="#">
            <FaYoutube /> Product Campaigns
          </a>

          <a href="#">
            <FaLinkedin /> Digital Branding
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
