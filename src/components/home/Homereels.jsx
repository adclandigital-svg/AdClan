"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./homereels.css";

const reels = [
  { src: "/home/25.mp4" },
  { src: "/home/26.mp4" },
  { src: "/home/27.mp4" },
  { src: "/home/22.mp4" },
  { src: "/home/23.mp4" },
  { src: "/home/24.mp4" },
];

export default function Homereels() {
  const videoRefs = useRef([]);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === swiper.realIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  };

  return (
    <div className="reels-wrapper">
      <Swiper
        modules={[Pagination]}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        spaceBetween={20}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          handleSlideChange(swiper);
        }}
        onSlideChange={handleSlideChange}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 1.5 },
          768: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {reels.map((item, index) => (
          <SwiperSlide key={index} className="reel-slide">
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={item.src}
              muted
              loop={false} // ❗ IMPORTANT
              playsInline
              className="reel-video"
              onEnded={() => {
                // 👉 slide to next ONLY when video ends
                swiperRef.current?.slideNext();
              }}
              onMouseEnter={(e) => e.target.pause()}
              onMouseLeave={(e) => {
                const swiper = swiperRef.current;
                if (index === swiper.realIndex) {
                  e.target.play();
                }
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="reels-heading-div">
        {["Works", "Who", "Describe", "Our Potential"].map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
