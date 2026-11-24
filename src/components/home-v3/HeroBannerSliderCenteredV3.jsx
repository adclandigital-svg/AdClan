"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import AudioModalV3 from "./AudioModalV3";
import VideoModalV3 from "./VideoModalV3";
import "./heroBannerCentered.css";
// - 'url' ya 'link': Pure active slide aur title pe clickable link banata hai (button ki jagah)
// - 'video': Button place pe Video play button show karta hai
// - 'video' ya 'videos': Single ya multiple videos (local MP4 ya YouTube link). Multiple hone par popup me slider chalega.
// - 'audio' ya 'audios' ya 'mp3': Single ya multiple audios (MP3/MPEG). Multiple hone par popup me audio slider chalega.
const SLIDES_DATA = [
  {
    id: 1,
    lines: ["Hilary", "Rodha"],
    cap: "Hilary Rodha",
    image: "/home/main_banner/hilaryrhoda.webp",
    a: "#e85d9e",
    b: "#3a2030",
    c: "#0e0712",
    sx: "68%",
    sy: "26%",
    url: "/projects",
    videos: [
      "https://youtube.com/shorts/NiCmOvYI2LQ?feature=share",
      "https://youtube.com/shorts/BuRKhRih77o?feature=share",
    ],
    audio: "",
  },
  {
    id: 2,
    lines: ["Anytime", "Fitness"],
    cap: "Anytime Fitness",
    image: "/home/main_banner/anytime_fitness.webp",
    a: "#8b5cf6",
    b: "#2c1c4d",
    c: "#0b0616",
    sx: "55%",
    sy: "28%",
    url: "/projects",
    video: "",
    videos: [""],
    audio: "/home/main_banner/audio/anytimefitness.mp3",
  },
  {
    id: 3,
    lines: ["Hyundai"],
    cap: "Hyundai",
    image: "/home/main_banner/ban-5.webp",
    a: "#00aad2",
    b: "#0f2f45",
    c: "#05111c",
    sx: "40%",
    sy: "28%",
    url: "/projects/hyundai",
    video: "",
    videos: [""],
    audios: [
      "/home/main_banner/audio/hyundai/Hyundai_ICC_T20-spot-1.mp3",
      "/home/main_banner/audio/hyundai/Hyundai_ICC_T20-spot-2.mp3",
      "/home/main_banner/audio/hyundai/Hyundai_ICC_T20-spot-3.mp3",
      "/home/main_banner/audio/hyundai/Hyundai_ICC_T20-spot-4.mp3",
    ],
  },
  {
    id: 4,
    lines: ["Pathkind"],
    cap: "Pathkind",
    image: "/home/main_banner/pathkind.webp",
    a: "#00b4d8",
    b: "#123b4e",
    c: "#051117",
    sx: "65%",
    sy: "24%",
    url: "/projects",
    video: "",
    videos: [""],
    audio: "/home/main_banner/audio/pathkind.mp3",
  },
  {
    id: 5,
    lines: ["Valvoline"],
    cap: "Valvoline",
    image: "/home/main_banner/volvoline.webp",
    a: "#e63946",
    b: "#1d3557",
    c: "#080f1a",
    sx: "58%",
    sy: "25%",
    url: "/projects",
    video: "",
    videos: [""],
    audios: [
      "/home/main_banner/audio/Valvoline_Brand_Spot.mp3",
      "/home/main_banner/audio/Valvoline_NEW_HOURLEY_TAG.mp3",
    ],
  },
  {
    id: 6,
    lines: ["Ashiana", "Housing"],
    cap: "Ashiana Housing",
    image: "/home/main_banner/ban-7.webp",
    a: "#ffb36b",
    b: "#33283a",
    c: "#0b080e",
    sx: "55%",
    sy: "20%",
    url: "/projects/ashiana-housing",
    video: "",
    videos: [""],
    audio: "",
  },
  {
    id: 7,
    lines: ["Astrosage"],
    cap: "Astrosage",
    image: "/home/main_banner/ban-9.webp",
    a: "#a855f7",
    b: "#2e1b4d",
    c: "#0e071a",
    sx: "50%",
    sy: "20%",
    url: "/projects",
    video: "",
    videos: [""],
    audio: "",
  },
  {
    id: 8,
    lines: ["Vikram", "Mills"],
    cap: "Vikram Mills",
    image: "/home/main_banner/ban-2.webp",
    a: "#ffd23f",
    b: "#4a4f5a",
    c: "#14161b",
    sx: "30%",
    sy: "22%",
    url: "/projects/vikram-mills",
    video: "",
    videos: [""],
    audio: "",
  },
  {
    id: 9,
    lines: ["Smile", "Train", "India"],
    cap: "Smile Train India",
    image: "/home/main_banner/ban-3.webp",
    a: "#6fb4ff",
    b: "#1d2c52",
    c: "#070b16",
    sx: "50%",
    sy: "18%",
    url: "/projects/smile-train",
    video: "",
    audio: "",
  },
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

// Helper to extract audios array from a slide (handles single string or array, mp3, mpeg, etc.)
const getSlideAudios = (slide) => {
  if (!slide) return [];
  const list = [];
  if (Array.isArray(slide.audios)) {
    list.push(...slide.audios);
  } else if (typeof slide.audios === "string" && slide.audios.trim()) {
    list.push(slide.audios.trim());
  }
  if (Array.isArray(slide.audio)) {
    list.push(...slide.audio);
  } else if (typeof slide.audio === "string" && slide.audio.trim()) {
    list.push(slide.audio.trim());
  }
  if (Array.isArray(slide.mp3)) {
    list.push(...slide.mp3);
  } else if (typeof slide.mp3 === "string" && slide.mp3.trim()) {
    list.push(slide.mp3.trim());
  }
  if (Array.isArray(slide.mp3s)) {
    list.push(...slide.mp3s);
  } else if (typeof slide.mp3s === "string" && slide.mp3s.trim()) {
    list.push(slide.mp3s.trim());
  }
  if (Array.isArray(slide.music)) {
    list.push(...slide.music);
  } else if (typeof slide.music === "string" && slide.music.trim()) {
    list.push(slide.music.trim());
  }
  if (Array.isArray(slide.musics)) {
    list.push(...slide.musics);
  } else if (typeof slide.musics === "string" && slide.musics.trim()) {
    list.push(slide.musics.trim());
  }
  return Array.from(new Set(list.filter(Boolean)));
};

export default function HeroBannerSliderCenteredV3() {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [audioModalOpen, setAudioModalOpen] = useState(false);
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

  // Stop audio playback when video or audio modal opens
  useEffect(() => {
    if ((videoModalOpen || audioModalOpen) && audioRef.current && isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
      setActiveAudioSlide(null);
    }
  }, [videoModalOpen, audioModalOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") go(active + 1);
      if (e.key === "ArrowLeft") go(active - 1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [active, go]);

  // Autoplay functionality with pause on hover, video open, audio open, or audio playing
  useEffect(() => {
    if (isPaused || videoModalOpen || audioModalOpen || isPlayingAudio) return;
    const interval = setInterval(() => {
      go(active + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, videoModalOpen, audioModalOpen, isPlayingAudio, active, go]);

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
              ) : getSlideAudios(s).length > 0 ? (
                <button
                  type="button"
                  className={`play slide-media-btn slide-audio-btn ${(isPlayingAudio && activeAudioSlide === i) ||
                    (audioModalOpen && active === i)
                    ? "is-playing"
                    : ""
                    }`}
                  aria-label="Play audio showcase"
                  tabIndex={isCenter ? 0 : -1}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isCenter) {
                      if (audioRef.current && isPlayingAudio) {
                        audioRef.current.pause();
                        setIsPlayingAudio(false);
                      }
                      setAudioModalOpen(true);
                    } else if (!isHidden) {
                      go(i);
                    }
                  }}
                >
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
                </button>
              ) : (
                <button
                  type="button"
                  className="play slide-media-btn slide-link-btn"
                  aria-label={`View ${s.lines.join(" ")} project`}
                  tabIndex={isCenter ? 0 : -1}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isCenter) {
                      const dest = s.url || s.link || "/projects";
                      if (dest.startsWith("http")) {
                        window.open(dest, "_blank", "noopener,noreferrer");
                      } else {
                        router.push(dest);
                      }
                    } else if (!isHidden) {
                      go(i);
                    }
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="20"
                    height="20"
                    aria-hidden="true"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </button>
              )}
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

      {/* Audio Modal for Single & Multiple Audio Tracks */}
      <AudioModalV3
        isOpen={audioModalOpen}
        onClose={() => setAudioModalOpen(false)}
        audioSrc={currentSlide?.audio}
        audios={getSlideAudios(currentSlide)}
        title={currentSlide?.lines ? currentSlide.lines.join(" ") : ""}
        image={currentSlide?.image}
        accentColor={currentSlide?.a}
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
