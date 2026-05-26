"use client";

import React, { useState, useRef } from "react";
import "./reels-page.css";

import { FaInstagram } from "react-icons/fa";

import { Users, BarChart3, Clock, Sparkles } from "lucide-react";

import { useRouter } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

/* =========================================
   KB WEST WALK SHOWCASE DATA
========================================= */

const showcaseData = [
  /* ================= REELS ================= */

  {
    id: 1,
    category: "Reels",
    title: "",
    type: "video",
    client: "KB West Walk",
    platform: "Instagram",
    duration: "45 Days",
    src: "/projects/kb/creative/v1.mp4",
  },

  {
    id: 2,
    category: "Reels",
    title: "",
    type: "video",
    client: "KB West Walk",
    platform: "Instagram",
    duration: "45 Days",
    src: "/projects/kb/creative/v2.mp4",
  },

  {
    id: 3,
    category: "Reels",
    title: "",
    type: "video",
    client: "KB West Walk",
    platform: "Instagram",
    duration: "45 Days",
    src: "/projects/kb/creative/v3.mp4",
  },

  {
    id: 4,
    category: "Reels",
    title: "",
    type: "video",
    client: "KB West Walk",
    platform: "Instagram",
    duration: "45 Days",
    src: "/projects/kb/creative/v4.mp4",
  },

  {
    id: 5,
    category: "Reels",
    title: "",
    type: "video",
    client: "KB West Walk",
    platform: "Instagram",
    duration: "45 Days",
    src: "/projects/kb/creative/v5.mp4",
  },
  {
    id: 21,
    category: "Reels",
    title: "",
    type: "video",
    client: "KB West Walk",
    platform: "Instagram",
    duration: "45 Days",
    src: "/projects/kb/creative/v1.mp4",
  },

  {
    id: 22,
    category: "Reels",
    title: "",
    type: "video",
    client: "KB West Walk",
    platform: "Instagram",
    duration: "45 Days",
    src: "/projects/kb/creative/v2.mp4",
  },

  {
    id: 23,
    category: "Reels",
    title: "",
    type: "video",
    client: "KB West Walk",
    platform: "Instagram",
    duration: "45 Days",
    src: "/projects/kb/creative/v3.mp4",
  },

  {
    id: 24,
    category: "Reels",
    title: "",
    type: "video",
    client: "KB West Walk",
    platform: "Instagram",
    duration: "45 Days",
    src: "/projects/kb/creative/v4.mp4",
  },

  {
    id: 25,
    category: "Reels",
    title: "",
    type: "video",
    client: "KB West Walk",
    platform: "Instagram",
    duration: "45 Days",
    src: "/projects/kb/creative/v5.mp4",
  },

  {
    id: 12,
    category: "Creatives",
    title: "",
    type: "image",
    client: "KB West Walk",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/kb/creative/3.jpg",
  },

  {
    id: 13,
    category: "Creatives",
    title: "",
    type: "image",
    client: "KB West Walk",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/kb/creative/11.webp",
  },

  {
    id: 14,
    category: "Creatives",
    title: "",
    type: "image",
    client: "KB West Walk",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/kb/creative/4.webp",
  },

  {
    id: 15,
    category: "Creatives",
    title: "",
    type: "image",
    client: "KB West Walk",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/kb/creative/5.webp",
  },

  {
    id: 16,
    category: "Creatives",
    title: "",
    type: "image",
    client: "KB West Walk",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/kb/creative/6.webp",
  },

  {
    id: 17,
    category: "Creatives",
    title: "",
    type: "image",
    client: "KB West Walk",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/kb/creative/7.webp",
  },

  {
    id: 18,
    category: "Creatives",
    title: "",
    type: "image",
    client: "KB West Walk",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/kb/creative/8.webp",
  },

  {
    id: 19,
    category: "Creatives",
    title: "",
    type: "image",
    client: "KB West Walk",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/kb/creative/10.png",
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
      {/* HERO */}

      <div className="cr-hero">
        <h1>KB West Walk Media</h1>

        <p className="cr-hero-desc">
          Premium Instagram reels and commercial creatives designed for modern
          retail branding, luxury shopping experiences and investment-focused
          marketing.
        </p>

        {/* INFO BAR */}

        <div className="cr-info-bar">
          <div>
            <Users size={16} />
            Commercial Branding
          </div>

          <div>
            <BarChart3 size={16} />
            Retail Marketing
          </div>

          <div>
            <Clock size={16} />
            Creative Campaigns
          </div>

          <div>
            <Sparkles size={16} />
            Premium Visuals
          </div>
        </div>

        {/* SOCIALS */}

        <div className="cr-socials">
          <a href="#">
            <FaInstagram />
            Instagram Reels
          </a>

          <a href="#">
            <FaInstagram />
            Creative Posts
          </a>

          <a href="#">
            <FaInstagram />
            Brand Campaigns
          </a>
        </div>

        {/* CTA */}

        <div className="cr-hero-cta">
          <button onClick={() => router.push("/contact")}>
            Start Campaign →
          </button>
        </div>
      </div>

      {/* CREATIVES */}

      <Section
        title="Commercial Creative Designs"
        data={creatives}
        setActiveItem={setActiveItem}
      />

      {/* REELS */}

      <Section
        title="Retail Reels Showcase"
        data={reels}
        setActiveItem={setActiveItem}
      />

      {/* MODAL */}

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
          Premium visuals designed for commercial branding, engagement and
          luxury retail marketing.
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
