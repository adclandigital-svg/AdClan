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
        title: "Smile Train Awareness Film Campaign",

        category: "Video Production",

        year: "Recent Campaign",

        client: "SMILE TRAIN",

        intro:
          "Professional awareness-focused video production for Smile Train, creating emotional storytelling films and impactful visual campaigns that highlight healthcare support, hope, and life-changing cleft treatment initiatives.",

        src: "/projects/smile_train/final.mp4",
      },
    ],
  };

  const caseStudy = {
    title: "Smile Train Healthcare Awareness Campaign",

    subtitle: "Awareness Film Production & Digital Campaign",

    description:
      "Adclan executed a complete awareness-driven video production campaign for Smile Train focused on emotional storytelling, audience engagement, and impactful visual communication that highlighted healthcare accessibility and cleft treatment awareness.",

    duration: "Awareness Campaign",

    client: "Smile Train",

    services: [
      "Video Production",
      "Awareness Campaign",
      "Creative Direction",
      "Digital Branding",
    ],

    result:
      "Successfully increased awareness, audience engagement, and emotional connection through powerful storytelling and impactful visual campaign execution.",

    video: "/projects/smile_train/final.mp4",
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

            <Link href="/contact" className="cs-contact-btn">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
