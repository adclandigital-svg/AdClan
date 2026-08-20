"use client";
import "./hero.css";

export default function HeroVideo() {
  return (
    <section className="hero-section">
      <div className="hero-video-wrapper">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"   // ✅ Only small initial chunk
        >
          <source src="/banner-new.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
}
