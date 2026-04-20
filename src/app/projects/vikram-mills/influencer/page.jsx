"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./homereels.css";

const projects = [
  {
    id: 1,
    title: "Ayesha Khan x Right Gold",
    subtitle: "Influencer Collaboration & Social Commerce",
    description:
      "We partnered with a lifestyle influencer to create a high-converting reels campaign.",
    video:
      "https://videocdn.cdnpk.net/videos/f2dc8650-74a4-51dc-b90f-eda22ebf9ec5/vertical/previews/watermarked/large.mp4",
    platform: "Instagram",
    followers: "2.4M+",
    engagement: "8.7%",
    duration: "45 Days",
    client: "Right Gold",
    services: ["Influencer Strategy", "Reels"],
    result: "3.2M+ Views • 2.8X Sales Growth",
  },
  {
    id: 2,
    title: "Riya Sharma x Glow Skin",
    subtitle: "Beauty Influencer Campaign",
    description: "Beauty campaign focused on tutorials & UGC.",
    video:
      "https://videocdn.cdnpk.net/videos/f2dc8650-74a4-51dc-b90f-eda22ebf9ec5/vertical/previews/watermarked/large.mp4",
    platform: "Instagram, YouTube",
    followers: "1.8M+",
    engagement: "9.2%",
    duration: "30 Days",
    client: "Glow Skin",
    services: ["UGC", "Tutorials"],
    result: "2.1M+ Views • 2.3X Sales Growth",
  },
  {
    id: 3,
    title: "Arjun Mehta x FitFuel",
    subtitle: "Fitness Influencer Campaign",
    description: "Fitness campaign with reels + challenges.",
    video:
      "https://videocdn.cdnpk.net/videos/f2dc8650-74a4-51dc-b90f-eda22ebf9ec5/vertical/previews/watermarked/large.mp4",
    platform: "Instagram Reels",
    followers: "3.1M+",
    engagement: "7.5%",
    duration: "60 Days",
    client: "FitFuel",
    services: ["Fitness Content"],
    result: "4.5M+ Views • 3.5X ROI",
  },
  {
    id: 4,
    title: "Ayesha Khan x Right Gold",
    subtitle: "Influencer Collaboration & Social Commerce",
    description:
      "We partnered with a lifestyle influencer to create a high-converting reels campaign.",
    video:
      "https://videocdn.cdnpk.net/videos/f2dc8650-74a4-51dc-b90f-eda22ebf9ec5/vertical/previews/watermarked/large.mp4",
    platform: "Instagram",
    followers: "2.4M+",
    engagement: "8.7%",
    duration: "45 Days",
    client: "Right Gold",
    services: ["Influencer Strategy", "Reels"],
    result: "3.2M+ Views • 2.8X Sales Growth",
  },
  {
    id: 5,
    title: "Riya Sharma x Glow Skin",
    subtitle: "Beauty Influencer Campaign",
    description: "Beauty campaign focused on tutorials & UGC.",
    video:
      "https://videocdn.cdnpk.net/videos/f2dc8650-74a4-51dc-b90f-eda22ebf9ec5/vertical/previews/watermarked/large.mp4",
    platform: "Instagram, YouTube",
    followers: "1.8M+",
    engagement: "9.2%",
    duration: "30 Days",
    client: "Glow Skin",
    services: ["UGC", "Tutorials"],
    result: "2.1M+ Views • 2.3X Sales Growth",
  },
  {
    id: 6,
    title: "Arjun Mehta x FitFuel",
    subtitle: "Fitness Influencer Campaign",
    description: "Fitness campaign with reels + challenges.",
    video:
      "https://videocdn.cdnpk.net/videos/f2dc8650-74a4-51dc-b90f-eda22ebf9ec5/vertical/previews/watermarked/large.mp4",
    platform: "Instagram Reels",
    followers: "3.1M+",
    engagement: "7.5%",
    duration: "60 Days",
    client: "FitFuel",
    services: ["Fitness Content"],
    result: "4.5M+ Views • 3.5X ROI",
  },
];

export default function Homereels() {
  const videoRefs = useRef([]);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    const realIndex = swiper.realIndex;
    setActiveIndex(realIndex);

    videoRefs.current.forEach((video, idx) => {
      if (!video) return;

      if (idx === realIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });

    // 🔥 Preload next video
    const nextIndex = (realIndex + 1) % projects.length;
    const nextVideo = videoRefs.current[nextIndex];
    if (nextVideo && nextVideo.readyState < 3) {
      nextVideo.load();
    }
  };

  const activeProject = projects[activeIndex];

  return (
    <>
      <div className="reels-wrapper">
        <Swiper
          modules={[Pagination]}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          spaceBetween={20}
          speed={250} // ✅ faster transition
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
          {projects.map((item, index) => (
            <SwiperSlide key={item.id} className="reel-slide">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={item.video}
                muted
                playsInline
                preload="metadata"
                className="reel-video"
                onCanPlay={(e) => {
                  if (index === swiperRef.current?.realIndex) {
                    e.target.play().catch(() => {});
                  }
                }}
                onEnded={() => swiperRef.current?.slideNext()}
                onMouseEnter={(e) => e.target.pause()}
                onMouseLeave={(e) => {
                  if (index === swiperRef.current?.realIndex) {
                    e.target.play().catch(() => {});
                  }
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="reels-right">
          <div className="badge">🎬 Featured Campaign</div>

          <h2 className="project-title">{activeProject.title}</h2>
          <p className="project-subtitle">{activeProject.subtitle}</p>

          <div className="info-grid">
            <div>📱 {activeProject.platform}</div>
            <div>👥 {activeProject.followers}</div>
            <div>📊 {activeProject.engagement}</div>
            <div>⏱️ {activeProject.duration}</div>
            <div>🏢 {activeProject.client}</div>
          </div>

          <p className="project-desc">{activeProject.description}</p>

          <div className="project-result">{activeProject.result}</div>

          <button className="project-btn">View Video →</button>
        </div>
      </div>

      {/* 🔻 Thumbnail Grid */}
      <div className="thumb-slide-outer">
        {projects.map((item, index) => (
          <div
            key={index}
            className={`thumb-slide ${
              index === activeIndex ? "active-thumb" : ""
            }`}
            onClick={() => swiperRef.current?.slideToLoop(index)}
          >
            <video src={item.video} muted playsInline className="thumb-video" />

            <div className="thumb-content">
              <h4 className="thumb-title">{item.title}</h4>
              <p className="thumb-subtitle">{item.platform}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}