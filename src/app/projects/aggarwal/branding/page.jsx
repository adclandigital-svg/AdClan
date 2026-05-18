"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./branding.css";

export default function Page() {
  const sections = [
    {
      title: "Aggarwal Namkeen Digital Branding & Marketing",
      desc: "A complete digital branding showcase for Aggarwal Namkeen including social media campaigns, website creatives, SEO growth strategies, ad campaigns, and performance marketing assets.",

      slides: [
        {
          img: "/projects/aggarwal/digital/ads.jpg",
          title: "Meta Ads Campaign Design",
          desc: "High-converting Facebook & Instagram ad creatives designed for product promotions, festive campaigns, and customer engagement."
        },
        {
          img: "/projects/aggarwal/digital/website.jpg",
          title: "Website Design & UI Experience",
          desc: "Modern and responsive website interface created to showcase products, improve user experience, and increase brand trust online."
        },
        {
          img: "/projects/aggarwal/digital/seo.jpg",
          title: "SEO & Google Ranking Strategy",
          desc: "Search engine optimization campaigns focused on improving Google visibility, organic traffic, keyword rankings, and local discoverability."
        },
        {
          img: "/projects/aggarwal/digital/social-media.jpg",
          title: "Social Media Branding",
          desc: "Creative Instagram and Facebook branding with premium product visuals, reels, festive creatives, and audience-focused content strategy."
        },
        {
          img: "/projects/aggarwal/digital/google-ads.jpg",
          title: "Google Ads Performance Campaign",
          desc: "Targeted Google Ads campaigns built to drive website traffic, generate leads, and improve online sales performance."
        },
        {
          img: "/projects/aggarwal/digital/reels.jpg",
          title: "Reels & Video Marketing",
          desc: "Short-form video content and engaging product reels designed to maximize reach, engagement, and social media growth."
        },
      ]
    }
  ];

  return (
    <div className="multi-page">
      <h2 className="multi-page-headings">
        Aggarwal Namkeen Digital Branding
      </h2>

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
    <section
      className={`section-block ${index % 2 === 1 ? "reverse" : ""}`}
    >
      {/* LEFT CONTENT */}
      <div className="left">
        <span className="section-tag">Digital Marketing</span>

        <h2 key={activeIndex}>{activeSlide?.title}</h2>

        <p className="main-desc" key={"desc-" + activeIndex}>
          {activeSlide?.desc}
        </p>

        <div className="glass-card">
          <div className="glass-top">
            <span>Client</span>
            <h4>Aggarwal Namkeen</h4>
          </div>

          <div className="glass-stats">
            <div>
              <h3>360°</h3>
              <p>Branding</p>
            </div>

            <div>
              <h3>SEO</h3>
              <p>Growth</p>
            </div>

            <div>
              <h3>Ads</h3>
              <p>Marketing</p>
            </div>
          </div>

          <p className="slide-text">
            From performance marketing and SEO to social media creatives and
            website branding, this project reflects a complete digital presence
            strategy for Aggarwal Namkeen.
          </p>
        </div>
      </div>

      {/* RIGHT SWIPER */}
      <div className="right">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={800}
          slidesPerView={1}
          onSlideChange={(swiper) =>
            setActiveIndex(swiper.realIndex)
          }
        >
          {data.slides.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="slide-inner">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                />

                <div className="overlay-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}