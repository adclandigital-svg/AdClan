"use client";

import "./work.css";
import Link from "next/link";

export default function ProjectPage() {
  const works = [
    {
      title: "Video Production",
      desc: "Impactful awareness films and emotional storytelling content created to support Smile Train’s healthcare initiatives and outreach campaigns.",
      icon: "🎬",
      link: "/projects/smile-train/video-production",
    },
    {
      title: "Radio Jingles",
      desc: "Meaningful radio campaigns and awareness jingles designed to spread Smile Train’s message with emotional audience connection.",
      icon: "🎧",
      link: "/projects/smile-train/radio-jingles",
    },
  ];

  return (
    <div className="project-page">
      <div className="project-hero-image">
        <img src="/projects/smile_train/smile train.png" />
      </div>

      {/* HERO */}
      <div className="project-hero1">
        <div className="hero-badge">Healthcare Awareness Campaign</div>

        <h1>Smile Train</h1>

        <p className="hero-sub">
          We collaborated with Smile Train to create impactful awareness-driven
          campaigns focused on storytelling, emotional engagement, and audience
          outreach through creative media production and strategic communication.
        </p>

        <div className="hero-actions">
          <a href="/contact" className="btn-secondary">
            Start Project
          </a>
        </div>
      </div>

      {/* WORK SECTION */}
      <div className="project-works" id="works">
        <h2>Work We Did</h2>

        <div className="work-grid">
          {works.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="work-card"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();

                e.currentTarget.style.setProperty(
                  "--x",
                  `${e.clientX - rect.left}px`
                );

                e.currentTarget.style.setProperty(
                  "--y",
                  `${e.clientY - rect.top}px`
                );
              }}
            >
              <div className="work-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <div className="work-arrow">→</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}