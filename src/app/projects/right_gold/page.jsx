"use client";

import "./work.css";
import Link from "next/link";

export default function ProjectPage() {
  const works = [
    {
      title: "Celebrity Management",
      desc: "Strategic celebrity collaborations, influencer partnerships, and brand endorsement campaigns executed for Right Gold.",
      icon: "🎤",
      link: "/projects/right-gold/celebrity-managements",
    },
    {
      title: "Video Production",
      desc: "Premium video shoots, celebrity campaign films, and high-impact branded content production.",
      icon: "🎬",
      link: "/projects/right-gold/video-production",
    },
  ];

  return (
    <div className="project-page">
      <div className="project-hero-image">
        <img src="/projects/right-gold/right-gold-banner.png" />
      </div>

      {/* HERO */}
      <div className="project-hero1">
        <div className="hero-badge">
          Jewellery Brand Celebrity Campaign
        </div>

        <h1>Right Gold</h1>

        <p className="hero-sub">
          We helped Right Gold elevate its premium jewellery brand presence
          through impactful celebrity collaborations, creative campaign
          execution, and visually engaging branded content designed to increase
          audience trust and brand visibility.
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