"use client";

import React, { useState, useRef } from "react";
import "./reels-page.css";

import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

import { Users, BarChart3, Clock, Sparkles } from "lucide-react";

import { useRouter } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

/* =========================================
   ELMAS GROUP SHOWCASE DATA
========================================= */

/* =========================================
   INDIA GATE SHOWCASE DATA
========================================= */

const showcaseData = [
  /* ================= REELS ================= */

  {
    id: 1,
    category: "Reels",
    type: "video",
    client: "India Gate",
    platform: "Instagram",
    duration: "45 Days",
    src: "/projects/india_gate/creative/1.mp4",
  },

  {
    id: 2,
    category: "Reels",
    type: "video",
    client: "India Gate",
    platform: "Instagram",
    duration: "45 Days",
    src: "/projects/india_gate/creative/2.mp4",
  },

  {
    id: 3,
    category: "Reels",
    type: "video",
    client: "India Gate",
    platform: "Instagram",
    duration: "60 Days",
    src: "/projects/india_gate/creative/3.mp4",
  },

  {
    id: 4,
    category: "Reels",
    type: "video",
    client: "India Gate",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/india_gate/creative/4.mp4",
  },

  {
    id: 5,
    category: "Reels",
    type: "video",
    client: "India Gate",
    platform: "Instagram",
    duration: "60 Days",
    src: "/projects/india_gate/creative/5.mp4",
  },
  {
    id: 6,
    category: "Reels",
    type: "video",
    client: "India Gate",
    platform: "Instagram",
    duration: "45 Days",
    src: "/projects/india_gate/creative/1.mp4",
  },

  {
    id: 10,
    category: "Reels",
    type: "video",
    client: "India Gate",
    platform: "Instagram",
    duration: "45 Days",
    src: "/projects/india_gate/creative/2.mp4",
  },

  {
    id: 7,
    category: "Reels",
    type: "video",
    client: "India Gate",
    platform: "Instagram",
    duration: "60 Days",
    src: "/projects/india_gate/creative/3.mp4",
  },

  {
    id: 8,
    category: "Reels",
    type: "video",
    client: "India Gate",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/india_gate/creative/4.mp4",
  },

  {
    id: 9,
    category: "Reels",
    type: "video",
    client: "India Gate",
    platform: "Instagram",
    duration: "60 Days",
    src: "/projects/india_gate/creative/5.mp4",
  },

  /* ================= CREATIVES ================= */

  {
    id: 11,
    category: "Creatives",
    type: "image",
    client: "India Gate",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/india_gate/creative/1.jpg",
  },

  {
    id: 12,
    category: "Creatives",
    type: "image",
    client: "India Gate",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/india_gate/creative/2.jpg",
  },

  {
    id: 13,
    category: "Creatives",
    type: "image",
    client: "India Gate",
    platform: "Instagram",
    duration: "45 Days",
    src: "/projects/india_gate/creative/3.jpg",
  },

  {
    id: 14,
    category: "Creatives",
    type: "image",
    client: "India Gate",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/india_gate/creative/4.jpg",
  },

  {
    id: 15,
    category: "Creatives",
    type: "image",
    client: "India Gate",
    platform: "Instagram",
    duration: "60 Days",
    src: "/projects/india_gate/creative/5.jpg",
  },

  {
    id: 16,
    category: "Creatives",
    type: "image",
    client: "India Gate",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/india_gate/creative/6.jpg",
  },

  {
    id: 17,
    category: "Creatives",
    type: "image",
    client: "India Gate",
    platform: "Instagram",
    duration: "45 Days",
    src: "/projects/india_gate/creative/7.jpg",
  },
  {
    id: 18,
    category: "Creatives",
    type: "image",
    client: "India Gate",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/india_gate/creative/8.jpg",
  },
  {
    id: 19,
    category: "Creatives",
    type: "image",
    client: "India Gate",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/india_gate/creative/9.jpg",
  },
  {
    id: 20,
    category: "Creatives",
    type: "image",
    client: "India Gate",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/india_gate/creative/10.jpg",
  },
];

/* =========================================
   PAGE
========================================= */

export default function Page() {
  const [activeItem, setActiveItem] = useState(null);

  const router = useRouter();

  const reels = showcaseData.filter((i) => i.category === "Reels");

  const creatives = showcaseData.filter((i) => i.category === "Creatives");

  return (
    <div className="cr-showcase">
      {/* =========================================
          HERO
      ========================================= */}

      <div className="cr-hero">
        <h1>India Gate Media</h1>

        <p className="cr-hero-desc">
          Premium wheat and food branding campaigns crafted for India Gate,
          showcasing purity, healthy living and trusted kitchen experiences.
        </p>

        {/* INFO BAR */}

        <div className="cr-info-bar">
          <div>
            <Users size={16} />
            Wheat Product Branding
          </div>

          <div>
            <BarChart3 size={16} />
            High Engagement Campaigns
          </div>

          <div>
            <Clock size={16} />
            Digital Food Promotions
          </div>

          <div>
            <Sparkles size={16} />
            Premium Food Visuals
          </div>
        </div>

        {/* CTA */}

        <div className="cr-hero-cta">
          <button onClick={() => router.push("/contact")}>
            Start Food Branding →
          </button>
        </div>
      </div>
      {/* =========================================
          CREATIVES
      ========================================= */}

      <Section
        title="Luxury Creative Designs"
        data={creatives}
        setActiveItem={setActiveItem}
      />

      {/* =========================================
          REELS
      ========================================= */}

      <Section
        title="Luxury Reels Showcase"
        data={reels}
        setActiveItem={setActiveItem}
      />

      {/* =========================================
          MODAL
      ========================================= */}

      {activeItem && (
        <div className="cr-modal" onClick={() => setActiveItem(null)}>
          <div
            className="cr-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {activeItem.type === "video" ? (
              <video src={activeItem.src} controls autoPlay />
            ) : (
              <img src={activeItem.src} alt={activeItem.title} />
            )}

            <button onClick={() => setActiveItem(null)}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================
   SECTION COMPONENT
========================================= */

function Section({ title, data, setActiveItem }) {
  const swiperRef = useRef(null);

  return (
    <div className="crs-section">
      <div className="crs-header">
        <h2>{title}</h2>

        <p>
          Premium wheat product visuals designed for digital campaigns, customer
          engagement and modern food branding.
        </p>
      </div>

      <div
        className="crs-slider"
        onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay?.start()}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={20}
          centeredSlides={true}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },

            768: {
              slidesPerView: 2.5,
            },

            1024: {
              slidesPerView: 5,
            },
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
                  <img src={item.src} className="crs-media" alt={item.title} />
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
