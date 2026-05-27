"use client";

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./video-productions.css";
import Link from "next/link";

export default function Page() {
  const [showCard, setShowCard] = useState(true);
  const hideTimeout = useRef(null);
  const mainSwiperRef = useRef(null);
  const swiperRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  const project = {
    slides: [
      {
        title: "RJ Naved x Classic Fitness Academy",
        category: "Fitness Influencer Campaign",
        year: "2024",
        client: "CLASSIC FITNESS ACADEMY",
        intro:
          "A high-energy fitness influencer campaign featuring RJ Naved, showcasing gym workouts, transformation motivation and premium training experiences for Classic Fitness Academy.",
        src: "/projects/naved/RJ Naved.mp4",
      },

      {
        title: "RJ Rahul Makin x Classic Fitness Academy",
        category: "Gym Branding & Promotional Campaign",
        year: "2024",
        client: "CLASSIC FITNESS ACADEMY",
        intro:
          "Professional promotional video content featuring RJ Rahul Makin, created to enhance digital branding, audience engagement and social media visibility for Classic Fitness Academy.",
        src: "/projects/rj_rahul_makin/banner.mp4",
      },
    ],
  };

  const caseStudy = {
    title: "Classic Fitness Academy Influencer Campaign",
    subtitle: "Fitness Branding & Video Production",

    description:
      "Adclan produced premium influencer-driven fitness campaigns for Classic Fitness Academy featuring RJ Naved and RJ Rahul Makin, focusing on gym culture, workout motivation and modern fitness branding across digital platforms.",

    duration: "Fitness Promotion Campaign",

    client: "Classic Fitness Academy",

    services: [
      "Video Production",
      "Influencer Marketing",
      "Gym Branding",
      "Social Media Promotions",
    ],

    result:
      "Improved brand visibility, stronger social media engagement and premium digital presence for Classic Fitness Academy.",

    video: "/projects/rj_rahul_makin/banner.mp4",
  };

  const isHovering = useRef(false);

  const startHideTimer = () => {
    clearTimeout(hideTimeout.current);

    hideTimeout.current = setTimeout(() => {
      if (!isHovering.current) {
        setShowCard(false);
      }
    }, 5000);
  };

  useEffect(() => {
    startHideTimer();
    return () => clearTimeout(hideTimeout.current);
  }, []);

  // Mouse move → show again
  const handleMouseMove = () => {
    setShowCard(true);
    startHideTimer();
  };

  return (
    <>
      <section className="project-showcase" onMouseMove={handleMouseMove}>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          className="swiper-container"
          onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
        >
          {project.slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slide">
                <video
                  src={slide.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="bg-video"
                />
                <div
                  className={`info-card ${showCard ? "show" : "hide"}`}
                  onMouseEnter={() => {
                    isHovering.current = true; // 🔒 lock
                    clearTimeout(hideTimeout.current);
                    setShowCard(true); // always visible
                  }}
                  onMouseLeave={() => {
                    isHovering.current = false; // 🔓 unlock
                    startHideTimer(); // resume normal
                  }}
                >
                  <div className="video-meta">
                    <span>{slide.client}</span>

                    <span>{slide.category}</span>
                    <span>{slide.year}</span>
                  </div>
                  {/* <p className="category">{slide.category}</p> */}
                  <h2>{slide.title}</h2>

                  <p className="intro">{slide.intro}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* <section className="vp-cards-section">
        {project.slides.map((data, i) => (
          <div
            key={i}
            className="vp-card"
            onClick={() => {
              if (mainSwiperRef.current) {
                mainSwiperRef.current.slideToLoop(i); // 🔥 important for loop mode
              }
            }}
          >
            <div className="vp-card-media">
              <video src={data.src} playsInline />
            </div>
          </div>
        ))}
      </section> */}

      <section className="cs-section">
        <div className="cs-card">
          {/* RIGHT SIDE - CONTENT */}
          <div className="cs-content">
            {/* <p className="cs-subtitle">{caseStudy.subtitle}</p> */}
            <h2 className="cs-title">{caseStudy.title}</h2>

            <p className="cs-description">{caseStudy.description}</p>

            <div className="cs-details">
              <div>
                <span>Client</span>
                <p>{caseStudy.client}</p>
              </div>

              <div>
                <span>Duration</span>
                <p>{caseStudy.duration}</p>
              </div>
            </div>

            <div className="cs-services">
              {caseStudy.services.map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>

            <div className="cs-result">
              <strong>Conclusion:</strong> {caseStudy.result}
            </div>
          </div>
        </div>
      </section>

      {/* <section
        className="image-slider-section"
        onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay?.start()}
      >
        <h2 className="section-title">Behind the Story</h2>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={20}
          loop
          centeredSlides={true} // ✅ IMPORTANT
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2.5,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 4,
              centeredSlides: false, // ❗ keep false for desktop if you want full row
            },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {imageSlider.map((img, i) => (
            <SwiperSlide
              key={i}
              onClick={() => {
                if (mainSwiperRef.current) {
                  mainSwiperRef.current.slideToLoop(i);
                }
                setShowPopup(true); // 🔥 open popup
              }}
            >
              <div className="image-card">
                <img src={img} alt="gallery" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section> */}

      {showPopup && (
        <div className="cs-popup-overlay" onClick={() => setShowPopup(false)}>
          <div
            className="cs-popup"
            onClick={(e) => e.stopPropagation()} // prevent close on inside click
          >
            {/* CLOSE BUTTON */}
            <button className="cs-close" onClick={() => setShowPopup(false)}>
              ✕
            </button>

            {/* CONTENT */}
            <h2 className="cs-title">{caseStudy.title}</h2>

            <p className="cs-description">{caseStudy.description}</p>

            <div className="cs-details">
              <div>
                <span>Client</span>
                <p>{caseStudy.client}</p>
              </div>

              <div>
                <span>Duration</span>
                <p>{caseStudy.duration}</p>
              </div>
            </div>

            <div className="cs-services">
              {caseStudy.services.map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>

            <div className="cs-result">
              <strong>Conclusion:</strong> {caseStudy.result}
            </div>

            {/* 🔥 CONTACT BUTTON */}
            <Link href="" className="cs-contact-btn">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
