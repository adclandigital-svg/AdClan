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
        title: "GGI Institute Brand Film & Promotional Campaign",
        category: "Video Production",
        year: "2024",
        client: "GGI - Gulzar Group of Institutes",
        intro:
          "Professional brand film production for Gulzar Group of Institutes, showcasing campus life, student experiences, academic excellence, infrastructure, and modern educational facilities through cinematic storytelling and engaging visuals.",
        src: "/projects/ggit/GGIT.mp4",
      },
    ],
  };

  const caseStudy = {
    title: "GGI Educational Brand Awareness Campaign",
    subtitle: "Brand Film Production & Digital Marketing",
    description:
      "Adclan executed a complete branding and video production campaign for Gulzar Group of Institutes, creating visually engaging promotional content focused on campus infrastructure, student opportunities, academic programs, and modern educational experiences to strengthen the institute’s digital presence and brand identity.",
    duration: "2 Months",
    client: "GGI - Gulzar Group of Institutes",
    services: ["Video Production", "Brand Film", "Digital Marketing"],
    result:
      "Increased brand visibility, improved student engagement, and strengthened the institute’s online presence through cinematic storytelling and premium promotional visuals.",
    video: "/projects/ggit/GGIT.mp4",
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
