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

const showcaseData = [
  /* ================= REELS ================= */

  {
    id: 1,
    category: "Reels",
    title: "Luxury Residence Reel",
    type: "video",
    client: "Elmas Group",
    platform: "Instagram",
    duration: "60 Days",
    src: "/projects/elmasGroup/creatives/v1.mp4",
  },

  {
    id: 2,
    category: "Reels",
    title: "Premium Lifestyle Campaign",
    type: "video",
    client: "Elmas Group",
    platform: "Instagram",
    duration: "60 Days",
    src: "/projects/elmasGroup/creatives/v2.mp4",
  },

  {
    id: 3,
    category: "Reels",
    title: "Modern Living Experience",
    type: "video",
    client: "Elmas Group",
    platform: "Instagram",
    duration: "60 Days",
    src: "/projects/elmasGroup/creatives/v3.mp4",
  },

  {
    id: 4,
    category: "Reels",
    title: "Senior Friendly Residence",
    type: "video",
    client: "Elmas Group",
    platform: "Instagram",
    duration: "60 Days",
    src: "/projects/elmasGroup/creatives/v4.mp4",
  },

  {
    id: 5,
    category: "Reels",
    title: "Architectural Showcase",
    type: "video",
    client: "Elmas Group",
    platform: "Instagram",
    duration: "60 Days",
    src: "/projects/elmasGroup/creatives/v5.mp4",
  },

  {
    id: 6,
    category: "Reels",
    title: "Luxury Interior Tour",
    type: "video",
    client: "Elmas Group",
    platform: "Instagram",
    duration: "60 Days",
    src: "/projects/elmasGroup/creatives/v6.mp4",
  },

  {
    id: 7,
    category: "Reels",
    title: "Real Estate Brand Film",
    type: "video",
    client: "Elmas Group",
    platform: "Instagram",
    duration: "60 Days",
    src: "/projects/elmasGroup/creatives/v7.mp4",
  },

  {
    id: 8,
    category: "Reels",
    title: "Investment Opportunity Reel",
    type: "video",
    client: "Elmas Group",
    platform: "Instagram",
    duration: "60 Days",
    src: "/projects/elmasGroup/creatives/v8.mp4",
  },

  /* ================= CREATIVES ================= */

  {
    id: 11,
    category: "Creatives",
    title: "Luxury Residence Creative",
    type: "image",
    client: "Elmas Group",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/elmasGroup/creatives/t11.png",
  },

  {
    id: 12,
    category: "Creatives",
    title: "Premium Living Poster",
    type: "image",
    client: "Elmas Group",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/elmasGroup/creatives/t12.png",
  },

  {
    id: 13,
    category: "Creatives",
    title: "Luxury Apartment Campaign",
    type: "image",
    client: "Elmas Group",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/elmasGroup/creatives/t13.png",
  },

  {
    id: 14,
    category: "Creatives",
    title: "Modern Interior Creative",
    type: "image",
    client: "Elmas Group",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/elmasGroup/creatives/t21.png",
  },

  {
    id: 15,
    category: "Creatives",
    title: "Elite Lifestyle Branding",
    type: "image",
    client: "Elmas Group",
    platform: "Instagram",
    duration: "30 Days",
     src: "/projects/elmasGroup/creatives/t22.png",
  },

  {
    id: 16,
    category: "Creatives",
    title: "Residential Project Poster",
    type: "image",
    client: "Elmas Group",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/elmasGroup/creatives/t23.png",
  },

  {
    id: 17,
    category: "Creatives",
    title: "Investment Campaign Creative",
    type: "image",
    client: "Elmas Group",
    platform: "Instagram",
    duration: "30 Days",
     src: "/projects/elmasGroup/creatives/t31.png",
  },

  {
    id: 18,
    category: "Creatives",
    title: "Luxury Brand Campaign",
    type: "image",
    client: "Elmas Group",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/elmasGroup/creatives/t32.gif",
  },
  {
    id: 19,
    category: "Creatives",
    title: "Premium Property Creative",
    type: "image",
    client: "Elmas Group",
    platform: "Instagram",
    duration: "30 Days",
    src: "/projects/elmasGroup/creatives/t33.gif",
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
        <h1>Elmas Group Media</h1>

        <p className="cr-hero-desc">
          Premium Instagram reels and luxury creatives crafted for modern real
          estate branding and engagement.
        </p>

        {/* INFO BAR */}

        <div className="cr-info-bar">
          <div>
            <Users size={16} />
            Luxury Branding
          </div>

          <div>
            <BarChart3 size={16} />
            Instagram Growth
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
            Brand Content
          </a>
        </div>

        {/* CTA */}

        <div className="cr-hero-cta">
          <button onClick={() => router.push("/contact")}>
            Start Campaign →
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
          Premium visuals designed for luxury branding, engagement and real
          estate marketing.
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
