"use client";

import {
  ChevronLeft,
  ChevronRight,
  Music,
  Pause,
  Play,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

// Helper to format seconds into mm:ss
function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

// Helper to extract clean track name from filepath
function getTrackName(src, index) {
  if (!src) return `Track ${index + 1}`;
  try {
    const filename = src.split("/").pop() || "";
    const clean = filename
      .replace(/\.(mp3|mpeg|wav|ogg|m4a)$/i, "")
      .replace(/[-_]/g, " ")
      .trim();
    return clean || `Track ${index + 1}`;
  } catch {
    return `Track ${index + 1}`;
  }
}

export default function AudioModalV3({
  isOpen,
  onClose,
  audioSrc,
  audios,
  title,
  image,
  accentColor = "#ffd23f",
}) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  const audioRef = useRef(null);
  const progressTrackRef = useRef(null);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  // Normalize all provided audio sources into a clean array
  const audioList = useMemo(() => {
    const list = [];
    if (Array.isArray(audios)) {
      list.push(...audios);
    } else if (typeof audios === "string" && audios.trim()) {
      list.push(audios.trim());
    }
    if (Array.isArray(audioSrc)) {
      list.push(...audioSrc);
    } else if (typeof audioSrc === "string" && audioSrc.trim()) {
      list.push(audioSrc.trim());
    }
    const unique = Array.from(new Set(list.filter(Boolean)));
    return unique.length > 0
      ? unique
      : ["/home/main_banner/audio/anytimefitness.mp3"];
  }, [audios, audioSrc]);

  const totalAudios = audioList.length;
  const currentAudio = audioList[currentIdx] || audioList[0];

  // Reset index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIdx(0);
      setCurrentTime(0);
    }
  }, [isOpen]);

  // Load and play when audio source or index changes
  useEffect(() => {
    if (!isOpen || !audioRef.current) return;

    audioRef.current.src = currentAudio;
    audioRef.current.load();

    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Auto-play was blocked or interrupted:", err);
          setIsPlaying(false);
        });
    }
  }, [isOpen, currentIdx, currentAudio]);

  // Stop playback when modal closes
  useEffect(() => {
    if (!isOpen && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrentTime(0);
    }
  }, [isOpen]);

  const nextAudio = useCallback(() => {
    setCurrentIdx((prev) => (prev + 1) % totalAudios);
  }, [totalAudios]);

  const prevAudio = useCallback(() => {
    setCurrentIdx((prev) => (prev - 1 + totalAudios) % totalAudios);
  }, [totalAudios]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Audio playback error:", err));
    }
  };

  const seekRelative = (seconds) => {
    if (!audioRef.current) return;
    const newTime = Math.max(
      0,
      Math.min(duration, audioRef.current.currentTime + seconds)
    );
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleProgressClick = (e) => {
    if (!progressTrackRef.current || !audioRef.current || !duration) return;
    const rect = progressTrackRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = pct * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const nextMuted = !isMuted;
    audioRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === " " || e.code === "Space") {
        e.preventDefault();
        togglePlay();
      }
      if (totalAudios > 1) {
        if (e.key === "ArrowLeft") prevAudio();
        if (e.key === "ArrowRight") nextAudio();
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
  }, [isOpen, onClose, prevAudio, nextAudio, totalAudios, isPlaying]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (Math.abs(diff) > 40 && totalAudios > 1) {
      if (diff > 0) nextAudio();
      else prevAudio();
    }
  };

  if (!isOpen) return null;

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const currentTrackTitle = getTrackName(currentAudio, currentIdx);

  return (
    <div
      className="v3-audio-modal-backdrop"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClose();
      }}
      tabIndex={0}
      role="dialog"
      aria-modal="true"
      aria-label={title || "AdClan Audio Showcase"}
    >
      <div
        className="v3-audio-modal-container"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="region"
        tabIndex={-1}
        aria-label="Audio Player"
        style={{ "--modal-accent": accentColor }}
      >
        {/* Subtle Ambient Glow based on slide accent */}
        <div className="v3-audio-modal-glow" />

        {/* Header Info: Title & Counter badge */}
        <div className="v3-audio-modal-header">
          {title && <span className="v3-audio-modal-title">{title}</span>}
          {totalAudios > 1 && (
            <span className="v3-audio-modal-counter">
              Audio {currentIdx + 1} / {totalAudios}
            </span>
          )}
        </div>

        {/* Close Button */}
        <button
          type="button"
          className="v3-audio-close-btn"
          onClick={onClose}
          aria-label="Close Audio Player"
        >
          <X size={20} />
        </button>

        {/* Player Main Content */}
        <div className="v3-audio-player-body">
          {/* Artwork / Vinyl Disc Visualizer */}
          <div className="v3-audio-artwork-wrap">
            <div
              className={`v3-audio-disc ${isPlaying ? "is-spinning" : ""}`}
            >
              {image ? (
                <img
                  src={image}
                  alt={title || "Audio Track"}
                  className="v3-audio-disc-img"
                />
              ) : (
                <div className="v3-audio-disc-fallback">
                  <Music size={42} />
                </div>
              )}
              <div className="v3-audio-disc-center" />
            </div>

            {/* Sound Wave Equalizer Bars */}
            <div
              className={`v3-audio-equalizer ${isPlaying ? "is-playing" : ""}`}
              aria-hidden="true"
            >
              {[12, 28, 16, 32, 20, 36, 14, 26, 38, 18, 30, 15, 24, 34, 16].map(
                (h, idx) => (
                  <span
                    key={idx}
                    className="v3-eq-bar"
                    style={{
                      "--bar-height": `${h}px`,
                      animationDelay: `${idx * 0.08}s`,
                    }}
                  />
                )
              )}
            </div>
          </div>

          {/* Track Details */}
          <div className="v3-audio-meta">
            <h3 className="v3-audio-track-name">{currentTrackTitle}</h3>
            <p className="v3-audio-brand-subtitle">
              {title || "AdClan Sonic Branding & Radio Production"}
            </p>
          </div>

          {/* Scrubbable Progress Bar */}
          <div className="v3-audio-progress-section">
            <div
              className="v3-audio-progress-track"
              ref={progressTrackRef}
              onClick={handleProgressClick}
              role="slider"
              aria-label="Audio progress"
              aria-valuenow={currentTime}
              aria-valuemin={0}
              aria-valuemax={duration || 100}
              tabIndex={0}
            >
              <div
                className="v3-audio-progress-fill"
                style={{ width: `${progressPercent}%` }}
              >
                <span className="v3-audio-progress-handle" />
              </div>
            </div>
            <div className="v3-audio-time-row">
              <span className="v3-audio-time">{formatTime(currentTime)}</span>
              <span className="v3-audio-time">{formatTime(duration)}</span>
            </div>
          </div>

          {/* Audio Controls Toolbar */}
          <div className="v3-audio-controls-row">
            {/* Rewind 10s */}
            <button
              type="button"
              className="v3-audio-sec-btn"
              onClick={() => seekRelative(-10)}
              aria-label="Rewind 10 seconds"
              title="Rewind 10s"
            >
              <RotateCcw size={18} />
              <span className="v3-audio-btn-label">10s</span>
            </button>

            {/* Prev Track (if multiple) */}
            {totalAudios > 1 && (
              <button
                type="button"
                className="v3-audio-step-btn"
                onClick={prevAudio}
                aria-label="Previous Track"
                title="Previous Track"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            {/* Master Play / Pause */}
            <button
              type="button"
              className={`v3-audio-play-master ${
                isPlaying ? "is-playing" : ""
              }`}
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause Audio" : "Play Audio"}
            >
              {isPlaying ? (
                <Pause size={24} fill="currentColor" />
              ) : (
                <Play size={24} fill="currentColor" style={{ marginLeft: 3 }} />
              )}
            </button>

            {/* Next Track (if multiple) */}
            {totalAudios > 1 && (
              <button
                type="button"
                className="v3-audio-step-btn"
                onClick={nextAudio}
                aria-label="Next Track"
                title="Next Track"
              >
                <ChevronRight size={22} />
              </button>
            )}

            {/* Forward 10s */}
            <button
              type="button"
              className="v3-audio-sec-btn"
              onClick={() => seekRelative(10)}
              aria-label="Forward 10 seconds"
              title="Forward 10s"
            >
              <RotateCw size={18} />
              <span className="v3-audio-btn-label">10s</span>
            </button>

            {/* Mute Toggle */}
            <button
              type="button"
              className={`v3-audio-mute-btn ${isMuted ? "is-muted" : ""}`}
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute" : "Mute"}
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        </div>

        {/* Outer Slider Navigation Arrows (when multiple audios exist) */}
        {totalAudios > 1 && (
          <>
            <button
              type="button"
              className="v3-modal-nav-btn v3-modal-nav-prev"
              onClick={(e) => {
                e.stopPropagation();
                prevAudio();
              }}
              aria-label="Previous Track"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              className="v3-modal-nav-btn v3-modal-nav-next"
              onClick={(e) => {
                e.stopPropagation();
                nextAudio();
              }}
              aria-label="Next Track"
            >
              <ChevronRight size={24} />
            </button>

            {/* Slider Dots Indicator */}
            <div className="v3-modal-dots-bar">
              {audioList.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`v3-modal-dot ${i === currentIdx ? "active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIdx(i);
                  }}
                  aria-label={`Jump to audio ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Native Audio Element */}
        <audio
          ref={audioRef}
          onTimeUpdate={() => {
            if (audioRef.current) {
              setCurrentTime(audioRef.current.currentTime);
            }
          }}
          onLoadedMetadata={() => {
            if (audioRef.current) {
              setDuration(audioRef.current.duration);
            }
          }}
          onEnded={() => {
            if (totalAudios > 1) {
              nextAudio();
            } else {
              setIsPlaying(false);
              setCurrentTime(0);
            }
          }}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          preload="metadata"
        />
      </div>
    </div>
  );
}
