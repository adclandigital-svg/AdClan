"use client";
import React, { useState } from "react";
import "./fmcg-packaging.css";

const packagingData = [
  {
    company: "Vikram Mills Pvt. Ltd.",
    description:
      "A premium FMCG brand specializing in high-quality food products. We created a complete packaging system focused on shelf visibility, brand recall, and modern consumer appeal.",
    details: [
      "Packaging Design",
      "Brand Identity",
      "Label Design",
      "Print Design",
    ],
    images: [
      {
        img: "/projects/vikram-mills/pkg/1.png",
      },
      {
        img: "/projects/vikram-mills/pkg/2.png",
      },
      {
        img: "/projects/vikram-mills/pkg/3.png",
      },
      {
        img: "/projects/vikram-mills/pkg/4.png",
      },
       {
        img: "/projects/vikram-mills/pkg/5.png",
      },
      {
        img: "/projects/vikram-mills/pkg/6.png",
      },
      {
        img: "/projects/vikram-mills/pkg/7.png",
      },
      {
        img: "/projects/vikram-mills/pkg/8.png",
      },
       {
        img: "/projects/vikram-mills/pkg/9.png",
      },
      {
        img: "/projects/vikram-mills/pkg/10.png",
      },
      {
        img: "/projects/vikram-mills/pkg/11.png",
      },
      {
        img: "/projects/vikram-mills/pkg/12.png",
      },
       {
        img: "/projects/vikram-mills/pkg/13.png",
      },
      {
        img: "/projects/vikram-mills/pkg/14.png",
      },
      {
        img: "/projects/vikram-mills/pkg/15.png",
      },
      {
        img: "/projects/vikram-mills/pkg/16.png",
      },
       {
        img: "/projects/vikram-mills/pkg/17.png",
      },
      {
        img: "/projects/vikram-mills/pkg/18.png",
      },
      {
        img: "/projects/vikram-mills/pkg/19.png",
      },
      {
        img: "/projects/vikram-mills/pkg/20.png",
      },
       {
        img: "/projects/vikram-mills/pkg/21.png",
      },
      {
        img: "/projects/vikram-mills/pkg/22.png",
      },
      {
        img: "/projects/vikram-mills/pkg/23.png",
      },
      {
        img: "/projects/vikram-mills/pkg/24.png",
      },
    ],
  },
];

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(null);

  const project = packagingData[0];
  const images = project.images;

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="fmcg-page">

      {/* HEADER */}
      <div className="fmcg-header">
        <h3 className="fmcg-company">{project.company}</h3>
        <p className="fmcg-desc">{project.description}</p>

        <div className="fmcg-tags">
          {project.details.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className="fmcg-grid">
        {images.map((item, i) => (
          <div
            key={i}
            className="fmcg-card"
            onClick={() => setActiveIndex(i)}
          >
            <img src={item.img} alt={item.title} />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activeIndex !== null && (
        <div className="fmcg-modal">
          <span
            className="fmcg-close"
            onClick={() => setActiveIndex(null)}
          >
            ✕
          </span>

          <button className="fmcg-prev" onClick={prevSlide}>
            ‹
          </button>

          <img
            src={images[activeIndex].img}
            alt={images[activeIndex].title}
            className="fmcg-modal-img"
          />

          <button className="fmcg-next" onClick={nextSlide}>
            ›
          </button>
        </div>
      )}
    </div>
  );
}