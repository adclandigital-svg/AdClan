"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./multiSection.css";

export default function Page() {
  const sections = [
    {
      title: "Creative Branding",
      desc: "We build strong brand identities that connect emotionally with your audience.",
      slides: [
        {
          img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
          text: "Logo & identity design for strong recall.",
        },
        {
          img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
          text: "Consistent brand voice across all channels.",
        },
      ],
    },
    {
      title: "Digital Marketing",
      desc: "Performance-driven campaigns to scale your business growth.",
      slides: [
        {
          img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
          text: "Social media campaigns that convert.",
        },
        {
          img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop",
          text: "Data-driven ad strategies for ROI.",
        },
      ],
    },
  ];

  return (
    <div className="multi-page">
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
      {/* LEFT */}
      <div className="left">
        <h2>{data.title}</h2>
        <p className="main-desc">{data.desc}</p>
        <p className="slide-text">{data.slides[activeIndex]?.text}</p>
      </div>

      {/* RIGHT */}
      <div className="right">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={0}
          observer={true}
          observeParents={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {data.slides.map((item, i) => (
            <SwiperSlide key={i}>
              <img src={item.img} alt={item.text} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}