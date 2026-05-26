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
      title: "KB West Walk Outdoor Branding Campaigns",

      desc:
        "Premium outdoor branding, billboard campaigns, retail promotions and commercial marketing creatives designed for KB West Walk.",

      slides: [
        {
          img: "/projects/kb/branding/banners.jpg",

          title: "Lifestyle Hub Billboard Design",

          date: "January 2025",

          duration: "15 Days Campaign",

          conclusion:
            "Successfully positioned KB West Walk as a modern lifestyle and commercial destination with strong outdoor visibility and premium brand recall.",

          desc:
            "A premium outdoor billboard campaign highlighting KB West Walk as a modern lifestyle destination featuring retail, food, cinema and entertainment experiences.",
        },

        {
          img: "/projects/kb/branding/westwalk1.jpeg",

          title: "Modern Commercial Campaign",

          date: "February 2025",

          duration: "15 Days Campaign",

          conclusion:
            "Enhanced commercial branding presence through luxury visuals, strategic marketing creatives and impactful outdoor advertising.",

          desc:
            "A luxury commercial branding creative focused on modern architecture, premium business spaces and high-visibility outdoor marketing.",
        },
      ],
    },
  ];

  const [popupImage, setPopupImage] = useState(null);

  return (
    <div className="multi-page">
      <h2 className="multi-page-headings">
        KB West Walk Branding
      </h2>

      {sections.map((section, index) => (
        <SectionBlock
          key={index}
          data={section}
          index={index}
          setPopupImage={setPopupImage}
        />
      ))}

      {/* IMAGE POPUP */}

      {popupImage && (
        <div
          className="image-popup"
          onClick={() => setPopupImage(null)}
        >
          <button
            className="popup-close"
            onClick={() => setPopupImage(null)}
          >
            ✕
          </button>

          <img
            src={popupImage}
            alt="popup"
            className="popup-img"
          />
        </div>
      )}
    </div>
  );
}

function SectionBlock({
  data,
  index,
  setPopupImage,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = data.slides[activeIndex];

  return (
    <section
      className={`section-block ${
        index % 2 === 1 ? "reverse" : ""
      }`}
    >
      {/* LEFT CONTENT */}

      <div className="left">
        <h2 key={activeIndex}>
          {activeSlide?.title}
        </h2>

        <p
          className="main-desc"
          key={"desc-" + activeIndex}
        >
          {activeSlide?.desc}
        </p>

        <div className="glass-card">
          <div className="campaign-details">
            <div className="detail-row">
              <span>Date</span>
              <p>{activeSlide?.date}</p>
            </div>

            <div className="detail-row">
              <span>Duration</span>
              <p>{activeSlide?.duration}</p>
            </div>

            <div className="detail-row">
              <span>Conclusion</span>
              <p>{activeSlide?.conclusion}</p>
            </div>
          </div>
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
              <div
                className="slide-inner"
                onClick={() =>
                  setPopupImage(item.img)
                }
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}