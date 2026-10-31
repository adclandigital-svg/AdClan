"use client";

import { X } from "lucide-react";
import React, { useEffect } from "react";

export default function VideoModalV3({ isOpen, onClose, videoSrc, title }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="v3-video-modal-backdrop"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClose();
      }}
      tabIndex={0}
      role="dialog"
      aria-modal="true"
      aria-label={title || "AdClan Video Showcase"}
    >
      <div
        className="v3-video-modal-container"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role="region"
        tabIndex={-1}
        aria-label="Video Player"
      >
        <button
          type="button"
          className="v3-video-close-btn"
          onClick={onClose}
          aria-label="Close Video"
        >
          <X size={22} />
        </button>

        <video
          className="v3-video-modal-element"
          src={videoSrc || "/home/banner1.mp4"}
          autoPlay
          controls
          playsInline
        >
          <track kind="captions" />
        </video>
      </div>
    </div>
  );
}
