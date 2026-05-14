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
  const swiperRef = useRef(null);

  const hideTimeout = useRef(null);

  const mainSwiperRef = useRef(null);

  const [showPopup, setShowPopup] = useState(false);
  const imageSlider = [
    "/projects/right-gold/gallery/1.jpg",
    "/projects/right-gold/gallery/2.jpg",
    "/projects/right-gold/gallery/3.jpg",
    "/projects/right-gold/gallery/4.jpg",
    "/projects/right-gold/gallery/5.jpg",
    "/projects/right-gold/gallery/6.jpg",
    "/projects/right-gold/gallery/7.jpg",
    // "/projects/right-gold/gallery/8.jpg",
    // "/projects/right-gold/gallery/9.jpg",
    // "/projects/right-gold/gallery/10.jpg",
    // "/projects/right-gold/gallery/11.jpg",
    // "/projects/right-gold/gallery/12.jpg",
    // "/projects/right-gold/gallery/13.jpg",
    // "/projects/right-gold/gallery/14.jpg",
    // "/projects/right-gold/gallery/15.jpg",
    // "/projects/right-gold/gallery/16.jpg",
  ];

  const project = {
    slides: [
      {
        title: "Right Gold Ads Shoot & Campaign",

        category: "Celebrity Management",

        year: "2026",

        client: "RIGHT GOLD",

        intro:
          "Adclan delivered a complete celebrity-driven advertising campaign for Right Gold, handling everything from concept development and artist management to production and campaign execution. The project focused on building a premium jewellery brand image through cinematic visuals, influencer-led storytelling, and high-impact promotional content.",

        src: "/projects/right-gold/banner.mov",
      },
    ],
  };

  const caseStudy = {
    title: "Right Gold Ads Shoot & Campaign",

    subtitle: "Celebrity Management & Ad Production",

    description:
      "Adclan didn't just create an advertisement for Right Gold — we built a complete brand campaign designed to drive visibility, engagement, and premium market positioning. From celebrity coordination and creative planning to ad shoot execution and production management, every stage was handled end-to-end to deliver impactful visual storytelling and measurable brand presence.",

    duration: "2026 Campaign",

    client: "Right Gold",

    services: [
      "Celebrity Management",

      "Ad Film Production",

      "Creative Direction",

      "Brand Campaign",

      "Production Management",

      "Digital Promotion",
    ],

    result:
      "Successfully elevated Right Gold’s premium brand image through celebrity-led advertising, high-quality production, and performance-focused campaign execution that strengthened audience attention and digital engagement.",

    video: "/projects/right-gold/banner.mov",
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
                    isHovering.current = true;

                    clearTimeout(hideTimeout.current);

                    setShowCard(true);
                  }}
                  onMouseLeave={() => {
                    isHovering.current = false;

                    startHideTimer();
                  }}
                >
                  <div className="video-meta">
                    <span>{slide.client}</span>

                    <span>{slide.category}</span>

                    <span>{slide.year}</span>
                  </div>

                  <h2>{slide.title}</h2>

                  <p className="intro">{slide.intro}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="cs-section">
        <div className="cs-card">
          <div className="cs-content">
            <h2 className="cs-title">{caseStudy.title}</h2>

            <p className="cs-description">{caseStudy.description}</p>

            <div className="cs-details">
              <div>
                <span>Client</span>

                <p>{caseStudy.client}</p>
              </div>

              <div>
                <span>Campaign</span>

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
        onMouseEnter={() => {
          if (!swiperRef.current) return;

          const swiper = swiperRef.current;

          // freeze smoothly at exact current position
          const currentTranslate = swiper.getTranslate();

          swiper.setTranslate(currentTranslate);

          swiper.wrapperEl.style.transitionDuration = "0ms";
        }}
        onMouseLeave={() => {
          if (!swiperRef.current) return;

          const swiper = swiperRef.current;

          // continue smoothly from same point
          swiper.wrapperEl.style.transitionTimingFunction = "linear";

          swiper.slideTo(swiper.activeIndex + 1, 5000, false);
        }}
      >
        <h2 className="section-title">Behind the Story</h2>

        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={"auto"}
          spaceBetween={20}
          loop={true}
          loopAdditionalSlides={imageSlider.length}
          allowTouchMove={false}
          freeMode={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          className="smooth-swiper"
        >
          {[...imageSlider, ...imageSlider].map((img, i) => (
            <SwiperSlide
              key={i}
              className="smooth-slide"
              onClick={() => setShowPopup(true)}
            >
              <div className="image-card">
                <img src={img} alt="gallery" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section> */}

      <section className="image-slider-section">
        <h2 className="section-title">Behind the Story</h2>

        <div
          className="smooth-swiper-container"
          onMouseEnter={(e) => {
            e.currentTarget.style.animationPlayState = "paused";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animationPlayState = "running";
          }}
        >
          <div className="smooth-swiper-track">
            {[...imageSlider, ...imageSlider].map((img, i) => (
              <div
                key={i}
                className="smooth-slide"
                onClick={() => setShowPopup(true)}
              >
                <div className="image-card">
                  <img src={img} alt="gallery" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showPopup && (
        <div className="cs-popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="cs-popup" onClick={(e) => e.stopPropagation()}>
            <button className="cs-close" onClick={() => setShowPopup(false)}>
              ✕
            </button>

            <h2 className="cs-title">{caseStudy.title}</h2>

            <p className="cs-description">{caseStudy.description}</p>

            <div className="cs-details">
              <div>
                <span>Client</span>

                <p>{caseStudy.client}</p>
              </div>

              <div>
                <span>Campaign</span>

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

            <Link href="/contact" className="cs-contact-btn">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
