"use client";

import React, { useState } from "react";
import "./branding.css";

export default function Page() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { img: "/projects/elmasGroup/1.jpeg" },
    { img: "/projects/elmasGroup/2.jpeg" },
    { img: "/projects/elmasGroup/3.jpeg" },
    { img: "/projects/elmasGroup/4.jpeg" },
    { img: "/projects/elmasGroup/11p.jpeg" },
    { img: "/projects/elmasGroup/5.jpeg" },
    { img: "/projects/elmasGroup/12p.jpeg" },
    { img: "/projects/elmasGroup/6.jpeg" },
    { img: "/projects/elmasGroup/7.jpeg" },
    { img: "/projects/elmasGroup/8.jpeg" },
    { img: "/projects/elmasGroup/9.jpeg" },
    { img: "/projects/elmasGroup/10.jpeg" },
    { img: "/projects/elmasGroup/11.jpeg" },
    { img: "/projects/elmasGroup/12.jpeg" },
    { img: "/projects/elmasGroup/13.jpeg" },
    { img: "/projects/elmasGroup/14.jpeg" },
    { img: "/projects/elmasGroup/15.jpeg" },
    { img: "/projects/elmasGroup/16.jpeg" },
    { img: "/projects/elmasGroup/17.jpeg" },
  ];

  return (
    <div className="branding-page">
      <h2 className="page-title">Elmas Group Branding</h2>

      {/* GRID */}
      <div className="images-grid">
        {images.map((item, i) => (
          <div
            className="grid-item"
            key={i}
            onClick={() => setSelectedImage(item.img)}
          >
            <img src={item.img} alt={`img-${i}`} loading="lazy" />
          </div>
        ))}
      </div>

      {/* POPUP */}
      {selectedImage && (
        <div className="popup">
          {/* CLOSE BUTTON */}
          <button
            className="popup-close"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          {/* IMAGE */}
          <img src={selectedImage} alt="preview" />
        </div>
      )}
    </div>
  );
}
