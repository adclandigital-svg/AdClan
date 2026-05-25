"use client";

import React, { useState, useRef, useEffect } from "react";
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
        <ImagePopup
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}

/* ========================= */
/* IMAGE POPUP */
/* ========================= */

function ImagePopup({ image, onClose }) {
  const imageRef = useRef(null);

  const [scale, setScale] = useState(1);

  // =========================
  // CTRL + SCROLL FIX
  // =========================

  useEffect(() => {
    const preventBrowserZoom = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", preventBrowserZoom, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", preventBrowserZoom);
    };
  }, []);

  // =========================
  // SCROLL ZOOM
  // =========================

  const handleWheel = (e) => {
    e.preventDefault();

    let newScale = scale + e.deltaY * -0.002;

    newScale = Math.min(Math.max(1, newScale), 5);

    setScale(newScale);
  };

  // =========================
  // DOUBLE CLICK ZOOM
  // =========================

  const handleDoubleClick = () => {
    if (scale > 1) {
      setScale(1);
    } else {
      setScale(2.5);
    }
  };

  return (
    <div className="popup" onClick={onClose}>
      {/* CLOSE */}
      <button
        className="popup-close"
        onClick={onClose}
      >
        ×
      </button>

      {/* IMAGE WRAPPER */}
      <div
        className="popup-image-wrapper"
        onClick={(e) => e.stopPropagation()}
        onWheel={handleWheel}
      >
        <img
          ref={imageRef}
          src={image}
          alt="preview"
          className="popup-image"
          onDoubleClick={handleDoubleClick}
          draggable={false}
          style={{
            transform: `scale(${scale})`,
          }}
        />
      </div>
    </div>
  );
}