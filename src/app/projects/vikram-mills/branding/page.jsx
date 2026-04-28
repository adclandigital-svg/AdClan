"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import your CSS file (update path if needed)
import "./branding.css";

export default function Page() {
  const sections = [
    {
      title: "Logo & Identity Design",
      desc: "We craft distinctive logos and cohesive brand identities that establish strong recognition, communicate brand values, and create lasting impressions.",
      slides: [
        {
          img: "/projects/vikram-mills/brandings/vikram-mills-branding1.jpg",
          text: "Custom logo designs tailored to reflect your brand personality and create a strong visual identity.",
        },
        {
          img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1200&auto=format&fit=crop",
          text: "Complete brand identity systems including typography, color palettes, and visual guidelines.",
        },
        {
          img: "https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1200&auto=format&fit=crop",
          text: "Scalable branding assets designed to work seamlessly across digital and offline platforms.",
        },
      ],
    },

    
  ];

  return (
    <div className="multi-page">
      <h2 className="multi-page-headings">Vikram Mills Brandings</h2>
      {sections.map((section, index) => (
        <SectionBlock key={index} data={section} index={index} />
      ))}
    </div>
  );
}

function SectionBlock({ data, index }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={`section-block ${index % 2 === 1 ? "reverse" : ""}`}>
      {/* LEFT CONTENT */}
      <div className="left">
        <h2>{data.title}</h2>
        <p className="main-desc">{data.desc}</p>

        <div className="glass-card">
          <p className="slide-text" key={activeIndex}>
            {data.slides[activeIndex]?.text}
          </p>
        </div>
      </div>

      {/* RIGHT SWIPER */}
      <div className="right">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={800}
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          style={{ width: "100%", height: "auto" }}
        >
          {data.slides.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="slide-inner">
                <img src={item.img} alt={item.text} loading="lazy" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
