"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import VideoModalV3 from "./VideoModalV3";
import "./heroBannerCentered.css";
// 7 Portfolio Slides with High-End Photography from the Original Slider
// - 'url' ya 'link': Pure active slide aur title pe clickable link banata hai (button ki jagah)
// - 'video': Button place pe Video play button show karta hai
// - 'video' ya 'videos': Single ya multiple videos (local MP4 ya YouTube link). Multiple hone par popup me slider chalega.
// - 'audio' ya 'mp3' ya 'music': Button place pe MP3 audio play/pause button show karta hai
const SLIDES_DATA = [
  {
    id: 1,
    lines: ["Right", "Gold"],
    cap: "Right Gold",
    image: "/home-v3/ban-1.webp",
    a: "#f6b24a",
    b: "#3a4252",
    c: "#0e1117",
    sx: "68%",
    sy: "26%",
    url: "/projects/right-gold",
    video: "",
    audio: "",
  },
  {
    id: 2,
    lines: ["Vikram", "Mills"],
    cap: "Vikram Mills",
    image: "/home-v3/ban-2.webp",
    a: "#ffd23f",
    b: "#4a4f5a",
    c: "#14161b",
    sx: "30%",
    sy: "22%",
    url: "/projects/vikram-mills",
    video: "/home/22.mp4",
    videos: ["/home/22.mp4", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
    audio: "",
  },
  {
    id: 3,
    lines: ["Smile", "Train", "India"],
    cap: "Smile Train India",
    image: "/home-v3/ban-3.webp",
    a: "#6fb4ff",
    b: "#1d2c52",
    c: "#070b16",
    sx: "50%",
    sy: "18%",
    url: "/projects/smile-train",
    video: "",
    audio: "/projects/smile_train/RJM-Cut-Smile-train-India.mp3",
  },
  {
    id: 4,
    lines: ["Revfin"],
    cap: "Revfin",
    image: "/home-v3/ban-4.webp",
    a: "#d99a7a",
    b: "#2b2326",
    c: "#0a0809",
    sx: "60%",
    sy: "32%",
    url: "/projects/revfin",
    video: "/home/revfin.mp4",
    videos: ["/home/24.mp4", "/home/25.mp4"],
    audio: "",
  },
  {
    id: 5,
    lines: ["Hyundai"],
    cap: "Hyundai",
    image: "/home-v3/ban-5.webp",
    a: "#e86f5c",
    b: "#3a2230",
    c: "#0c070c",
    sx: "40%",
    sy: "28%",
    url: "/projects/hyundai",
    video: "/home/25.mp4",
    videos: ["/home/25.mp4", "/home/banner.mp4"],
    audio: "",
  },
  {
    id: 6,
    lines: ["Aggarwal", "Namkeen"],
    cap: "Aggarwal Namkeen",
    image: "/home-v3/ban-6.webp",
    a: "#8fd9b6",
    b: "#1f3a3a",
    c: "#07100f",
    sx: "72%",
    sy: "24%",
    url: "/projects/aggarwal-namkeen",
    video: "",
    audio: "/projects/clear_dekho/Cleardekho-New-retail.mp3",
  },
  {
    id: 7,
    lines: ["Ashiana", "Housing"],
    cap: "Ashiana Housing",
    image: "/home-v3/ban-7.webp",
    a: "#ffb36b",
    b: "#33283a",
    c: "#0b080e",
    sx: "55%",
    sy: "20%",
    url: "/projects/ashiana-housing",
    video: "/home/banner.mp4",
    videos: ["/home/banner.mp4", "/home/26.mp4"],
    audio: "",
  },
  {
    id: 8,
    lines: ["Dayal", "Opticals"],
    cap: "Dayal Opticals",
    image: "/home-v3/ban-8.webp",
    a: "#4da8ff",
    b: "#1a2c42",
    c: "#08101a",
    sx: "62%",
    sy: "24%",
    url: "/projects",
    video: "/home/26.mp4",
    videos: ["/home/26.mp4", "/home/22.mp4"],
    audio: "",
  },
  {
    id: 9,
    lines: ["Astrosage"],
    cap: "Astrosage",
    image: "/home-v3/ban-9.webp",
    a: "#a855f7",
    b: "#2e1b4d",
    c: "#0e071a",
    sx: "50%",
    sy: "20%",
    url: "/projects",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    videos: ["https://www.youtube.com/watch?v=dQw4w9WgXcQ", "/home/banner.mp4"],
    audio: "",
  }
];

// Helper to extract videos array from a slide (handles single string or array, mp4 or YouTube)
const getSlideVideos = (slide) => {
  if (!slide) return [];
  const list = [];
  if (Array.isArray(slide.videos)) {
    list.push(...slide.videos);
  } else if (typeof slide.videos === "string" && slide.videos.trim()) {
    list.push(slide.videos.trim());
  }
  if (Array.isArray(slide.video)) {
    list.push(...slide.video);
  } else if (typeof slide.video === "string" && slide.video.trim()) {
    list.push(slide.video.trim());
  }
  return Array.from(new Set(list.filter(Boolean)));
};

export default function HeroBannerSliderCenteredV3() {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Audio playback state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeAudioSlide, setActiveAudioSlide] = useState(null);
  const audioRef = useRef(null);

  const sxRef = useRef(null);
  const isDraggingRef = useRef(false);
  const n = SLIDES_DATA.length;
  const pad = (v) => String(v).padStart(2, "0");

  const go = useCallback(
    (i) => {
      setActive(((i % n) + n) % n);
    },
    [n],
  );

  // Positional calculation from user reference prototype:
  const getPos = useCallback(
    (i) => {
      let p = (((i - active) % n) + n) % n;
      if (p > Math.floor(n / 2)) p -= n;
      const hid = Math.abs(p) > 3;
      return hid ? "hidden" : String(p);
    },
    [active, n],
  );

  // Stop audio playback when slide changes
  useEffect(() => {
    if (audioRef.current && isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
      setActiveAudioSlide(null);
    }
  }, [active]);

  // Stop audio playback when video modal opens
  useEffect(() => {
    if (videoModalOpen && audioRef.current && isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
      setActiveAudioSlide(null);
    }
  }, [videoModalOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") go(active + 1);
      if (e.key === "ArrowLeft") go(active - 1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [active, go]);

  // Autoplay functionality with pause on hover, video open, or audio playing
  useEffect(() => {
    if (isPaused || videoModalOpen || isPlayingAudio) return;
    const interval = setInterval(() => {
      go(active + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, videoModalOpen, isPlayingAudio, active, go]);

  // Pointer swipe gestures
  const handlePointerDown = (e) => {
    sxRef.current = e.clientX;
    isDraggingRef.current = false;
  };

  const handlePointerUp = (e) => {
    if (sxRef.current === null) return;
    const d = e.clientX - sxRef.current;
    sxRef.current = null;
    if (Math.abs(d) > 20) {
      isDraggingRef.current = true;
    }
    if (Math.abs(d) > 50) {
      go(active + (d < 0 ? 1 : -1));
    }
  };

  const handlePointerCancel = () => {
    sxRef.current = null;
    isDraggingRef.current = false;
  };

  // Toggle MP3 audio playback
  const handleToggleAudio = (e, audioSrc, slideIndex) => {
    e.stopPropagation();
    if (!audioSrc || !audioRef.current) return;

    if (activeAudioSlide === slideIndex && isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      if (
        !audioRef.current.src.endsWith(audioSrc) &&
        audioRef.current.src !== audioSrc
      ) {
        audioRef.current.src = audioSrc;
      }
      audioRef.current
        .play()
        .then(() => {
          setActiveAudioSlide(slideIndex);
          setIsPlayingAudio(true);
        })
        .catch((err) => {
          console.error("Audio playback error:", err);
          setIsPlayingAudio(false);
        });
    }
  };

  // Handle slide card click: if center & has url -> navigate; if side card -> center it
  const handleCardClick = (i, isCenter, isHidden, slide) => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      return;
    }
    if (!isCenter && !isHidden) {
      go(i);
    } else if (isCenter && (slide.url || slide.link)) {
      const targetUrl = slide.url || slide.link;
      if (targetUrl.startsWith("http")) {
        window.open(targetUrl, "_blank", "noopener,noreferrer");
      } else {
        router.push(targetUrl);
      }
    }
  };

  const currentSlide = SLIDES_DATA[active];

  return (
    <section
      className="v3-centered-hero-section hero"
      aria-roledescription="carousel"
      aria-label="Brand showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 3D Stage with exact reference markup */}
      <div
        className="stage"
        id="stage"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        {SLIDES_DATA.map((s, i) => {
          const pos = getPos(i);
          const isCenter = pos === "0";
          const isHidden = pos === "hidden";

          return (
            <div
              key={s.id}
              className={`card ${isCenter && (s.url || s.link) ? "has-link" : ""}`}
              data-pos={pos}
              tabIndex={isCenter || isHidden ? -1 : 0}
              role="group"
              aria-label={`Slide ${i + 1} of ${n}: ${s.lines.join(" ")}`}
              aria-hidden={isHidden ? "true" : "false"}
              style={{
                "--a": s.a,
                "--b": s.b,
                "--c": s.c,
                "--sx": s.sx,
                "--sy": s.sy,
              }}
              onClick={() => handleCardClick(i, isCenter, isHidden, s)}
              onKeyDown={(e) => {
                if (
                  (e.key === "Enter" || e.key === " ") &&
                  !isCenter &&
                  !isHidden
                ) {
                  e.preventDefault();
                  go(i);
                } else if (
                  e.key === "Enter" &&
                  isCenter &&
                  (s.url || s.link)
                ) {
                  e.preventDefault();
                  const targetUrl = s.url || s.link;
                  if (targetUrl.startsWith("http")) {
                    window.open(targetUrl, "_blank", "noopener,noreferrer");
                  } else {
                    router.push(targetUrl);
                  }
                }
              }}
            >
              {/* Photo Media Layer from Original Slider */}
              <img
                src={s.image}
                alt={s.lines.join(" ")}
                className="card-media-img"
                loading={i === 0 ? "eager" : "lazy"}
              />

              {/* Radial gradient + skyline silhouette scene */}
              <div className="bg" />

              {/* Vignette Shades */}
              <div className="shade" />

              {/* Small Caption for background cards */}
              <div
                className="cap"
                dangerouslySetInnerHTML={{ __html: s.cap }}
              />

              {/* Headline Copy for active center card: title is link if url is provided */}
              <div className="copy">
                {isCenter && (s.url || s.link) ? (
                  <Link
                    href={s.url || s.link}
                    className="copy-link"
                    target={(s.url || s.link).startsWith("http") ? "_blank" : undefined}
                    rel={(s.url || s.link).startsWith("http") ? "noopener noreferrer" : undefined}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h2>
                      {s.lines.map((word) => (
                        <span key={word}>{word}</span>
                      ))}
                    </h2>
                    <i />
                  </Link>
                ) : (
                  <>
                    <h2>
                      {s.lines.map((word) => (
                        <span key={word}>{word}</span>
                      ))}
                    </h2>
                    <i />
                  </>
                )}
              </div>

              {/* Action Button: Video Play button if video is provided, or Audio/MP3 button if audio is provided */}
              {getSlideVideos(s).length > 0 ? (
                <button
                  type="button"
                  className="play slide-media-btn slide-video-btn"
                  aria-label="Play video"
                  tabIndex={isCenter ? 0 : -1}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isCenter) {
                      if (audioRef.current && isPlayingAudio) {
                        audioRef.current.pause();
                        setIsPlayingAudio(false);
                      }
                      setVideoModalOpen(true);
                    } else if (!isHidden) {
                      go(i);
                    }
                  }}
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    aria-hidden="true"
                  >
                    <path d="M4 2.5v15l13-7.5z" />
                  </svg>
                </button>
              ) : (s.audio || s.mp3 || s.music) ? (
                <button
                  type="button"
                  className={`play slide-media-btn slide-audio-btn ${isPlayingAudio && activeAudioSlide === i ? "is-playing" : ""
                    }`}
                  aria-label={
                    isPlayingAudio && activeAudioSlide === i
                      ? "Pause music"
                      : "Play music"
                  }
                  tabIndex={isCenter ? 0 : -1}
                  onClick={(e) =>
                    handleToggleAudio(e, s.audio || s.mp3 || s.music, i)
                  }
                >
                  {isPlayingAudio && activeAudioSlide === i ? (
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="20"
                      height="20"
                      aria-hidden="true"
                    >
                      <rect x="6" y="5" width="4" height="14" rx="1.5" />
                      <rect x="14" y="5" width="4" height="14" rx="1.5" />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      width="22"
                      height="22"
                      aria-hidden="true"
                    >
                      <path d="M9 18V5l12-2v13" />
                      <circle cx="6" cy="18" r="3" />
                      <circle cx="18" cy="16" r="3" />
                    </svg>
                  )}
                </button>
              ) : null}
            </div>
          );
        })}
      </div>

      {/* Navigation Controls: (< 01 / 07 —————— >) with progress bar */}
      <div className="nav">
        <button
          type="button"
          id="prev"
          aria-label="Previous slide"
          onClick={() => go(active - 1)}
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M7 1 1 7l6 6" />
          </svg>
        </button>

        <span aria-live="polite">
          <b id="cur">{pad(active + 1)}</b> /{" "}
          <span id="tot">{pad(n)}</span>
        </span>

        <span
          className="track"
          role="progressbar"
          aria-valuenow={active + 1}
          aria-valuemin={1}
          aria-valuemax={n}
          aria-label={`Slide progress ${active + 1} of ${n}`}
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const pct = clickX / rect.width;
            const targetIndex = Math.min(
              n - 1,
              Math.max(0, Math.floor(pct * n)),
            );
            go(targetIndex);
          }}
        >
          <i
            id="fill"
            style={{
              transform: `scaleX(${(active + 1) / n})`,
              "--p": (active + 1) / n,
            }}
          />
        </span>

        <button
          type="button"
          id="next"
          aria-label="Next slide"
          onClick={() => go(active + 1)}
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="m1 1 6 6-6 6" />
          </svg>
        </button>
      </div>

      {/* Video Modal */}
      <VideoModalV3
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoSrc={currentSlide?.video}
        videos={getSlideVideos(currentSlide)}
        title={currentSlide?.lines ? currentSlide.lines.join(" ") : ""}
      />

      {/* Hidden Audio Player for MP3 slides */}
      <audio
        ref={audioRef}
        onEnded={() => {
          setIsPlayingAudio(false);
          setActiveAudioSlide(null);
        }}
        onPause={() => {
          setIsPlayingAudio(false);
        }}
        preload="none"
      />
    </section>
  );
}
