"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./branding.css";

export default function Page() {
  // const sections = [
  //   {
  //     slides: [
  //       {
  //         img: "/projects/vikram-mills/brandings/vikram-mills-branding1.jpg",
  //         title: "Bold Logo Identity",
  //         desc: "Custom logo designs tailored to reflect your brand personality and create a strong visual identity.",
  //       },
  //       {
  //         img: "/projects/vikram-mills/brandings/vikram-mills-branding2.jpg",
  //         title: "Brand System Design",
  //         desc: "Complete brand identity systems including typography, color palettes, and visual guidelines.",
  //       },
  //       {
  //         img: "/projects/vikram-mills/brandings/vikram-mills-branding3.jpg",
  //         title: "Scalable Branding Assets",
  //         desc: "Assets designed to work seamlessly across digital and offline platforms with consistency.",
  //       },
  //       {
  //         img: "/projects/vikram-mills/brandings/vikram-mills-branding4.jpg",
  //         title: "Visual Communication",
  //         desc: "Design systems that improve clarity, recognition, and brand storytelling.",
  //       },
  //       {
  //         img: "/projects/vikram-mills/brandings/vikram-mills-branding5.jpg",
  //         title: "Creative Direction",
  //         desc: "Strategic design direction that aligns visuals with business goals and audience psychology.",
  //       },
  //       {
  //         img: "/projects/vikram-mills/brandings/vikram-mills-branding6.jpg",
  //         title: "Modern Brand Evolution",
  //         desc: "Refreshing existing identities into modern, high-impact brand experiences.",
  //       },
  //     ],
  //   },
  // ];
  const sections = [
  {
    title: "Vikram Mills Brand Identity & Campaign Designs",
    desc: "A curated collection of branding, packaging, and marketing creatives developed for Vikram Mills and KILOI showcasing premium visual storytelling.",

    slides: [
      {
        img: "/projects/vikram-mills/brandings/vikram-mills-branding1.jpg",
        title: "Brand Calendar Design",
        desc: "A premium desk calendar design combining product storytelling with functional daily usability, featuring seasonal branding and product placement."
      },
      {
         img: "/projects/vikram-mills/brandings/vikram-mills-branding2.jpg",
        title: "Reward Scheme Campaign",
        desc: "A promotional reward scheme brochure designed to increase customer engagement through structured incentive communication and festive visual impact."
      },
      {
        img: "/projects/vikram-mills/brandings/vikram-mills-branding3.jpg",
        title: "Corporate Brand Brochure",
        desc: "A multi-page brand brochure showcasing company identity, product philosophy, and visual storytelling with elegant editorial layout."
      },
      {
         img: "/projects/vikram-mills/brandings/vikram-mills-branding4.jpg",
        title: "Lifestyle Brand Presentation",
        desc: "A clean and modern brochure spread focusing on emotional branding and lifestyle-oriented product positioning."
      },
      {
        img: "/projects/vikram-mills/brandings/vikram-mills-branding5.jpg",
        title: "Premium Brand Cover Design",
        desc: "A high-impact cover design combining luxury aesthetics with minimal typography to establish strong first impression branding."
      },
      
    ]
  }
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

  const activeSlide = data.slides[activeIndex];

  return (
    <section className={`section-block ${index % 2 === 1 ? "reverse" : ""}`}>
      
      {/* LEFT CONTENT (dynamic per slide) */}
      <div className="left">
        <h2 key={activeIndex}>{activeSlide?.title}</h2>

        <p className="main-desc" key={"desc-" + activeIndex}>
          {activeSlide?.desc}
        </p>

        <div className="glass-card">
          <p className="slide-text">
            {activeSlide?.desc}
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
        >
          {data.slides.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="slide-inner">
                <img src={item.img} alt={item.title} loading="lazy" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}