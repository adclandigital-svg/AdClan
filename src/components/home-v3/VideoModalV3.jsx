"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

/**
 * Checks if a given URL is a YouTube URL and returns the privacy-enhanced embed URL
 */
export function getYouTubeEmbedUrl(url) {
  if (!url || typeof url !== "string") return null;
  const trimmed = url.trim();
  const match = trimmed.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/
  );
  if (match && match[1]) {
    return `https://www.youtube-nocookie.com/embed/${match[1]}?autoplay=1&rel=0&modestbranding=1`;
  }
  return null;
}

export default function VideoModalV3({
  isOpen,
  onClose,
  videoSrc,
  videos,
  title,
}) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  // Normalize all provided video sources into a clean array
  const videoList = useMemo(() => {
    const list = [];
    if (Array.isArray(videos)) {
      list.push(...videos);
    } else if (typeof videos === "string" && videos.trim()) {
      list.push(videos.trim());
    }
    if (Array.isArray(videoSrc)) {
      list.push(...videoSrc);
    } else if (typeof videoSrc === "string" && videoSrc.trim()) {
      list.push(videoSrc.trim());
    }
    const unique = Array.from(new Set(list.filter(Boolean)));
    return unique.length > 0 ? unique : ["/home/banner1.mp4"];
  }, [videos, videoSrc]);

  const totalVideos = videoList.length;

  // Reset index when modal opens or if out of bounds
  useEffect(() => {
    if (isOpen) {
      setCurrentIdx(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (currentIdx >= totalVideos) {
      setCurrentIdx(0);
    }
  }, [totalVideos, currentIdx]);

  const nextVideo = useCallback(() => {
    setCurrentIdx((prev) => (prev + 1) % totalVideos);
  }, [totalVideos]);

  const prevVideo = useCallback(() => {
    setCurrentIdx((prev) => (prev - 1 + totalVideos) % totalVideos);
  }, [totalVideos]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (totalVideos > 1) {
        if (e.key === "ArrowLeft") prevVideo();
        if (e.key === "ArrowRight") nextVideo();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, prevVideo, nextVideo, totalVideos]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (Math.abs(diff) > 40 && totalVideos > 1) {
      if (diff > 0) nextVideo();
      else prevVideo();
    }
  };

  if (!isOpen) return null;

  const currentVideo = videoList[currentIdx] || videoList[0];
  const ytEmbedUrl = getYouTubeEmbedUrl(currentVideo);

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
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="region"
        tabIndex={-1}
        aria-label="Video Player"
      >
        {/* Header Info: Title & Counter badge */}
        <div className="v3-video-modal-header">
          {title && <span className="v3-video-modal-title">{title}</span>}
          {totalVideos > 1 && (
            <span className="v3-video-modal-counter">
              {currentIdx + 1} / {totalVideos}
            </span>
          )}
        </div>

        {/* Close Button */}
        <button
          type="button"
          className="v3-video-close-btn"
          onClick={onClose}
          aria-label="Close Video"
        >
          <X size={20} />
        </button>

        {/* Video Player Display: YouTube Embed or HTML5 Video */}
        <div className="v3-video-player-wrapper">
          {ytEmbedUrl ? (
            <iframe
              key={`yt-${currentIdx}-${currentVideo}`}
              className="v3-video-modal-iframe"
              src={ytEmbedUrl}
              title={title ? `${title} (${currentIdx + 1})` : "Video player"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <video
              key={`local-${currentIdx}-${currentVideo}`}
              className="v3-video-modal-element"
              src={currentVideo}
              autoPlay
              controls
              playsInline
            >
              <track kind="captions" />
            </video>
          )}
        </div>

        {/* Slider Navigation Arrows (shown only when multiple videos exist) */}
        {totalVideos > 1 && (
          <>
            <button
              type="button"
              className="v3-modal-nav-btn v3-modal-nav-prev"
              onClick={(e) => {
                e.stopPropagation();
                prevVideo();
              }}
              aria-label="Previous Video"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              className="v3-modal-nav-btn v3-modal-nav-next"
              onClick={(e) => {
                e.stopPropagation();
                nextVideo();
              }}
              aria-label="Next Video"
            >
              <ChevronRight size={24} />
            </button>

            {/* Slider Dots Indicator */}
            <div className="v3-modal-dots-bar">
              {videoList.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`v3-modal-dot ${i === currentIdx ? "active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIdx(i);
                  }}
                  aria-label={`Jump to video ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}