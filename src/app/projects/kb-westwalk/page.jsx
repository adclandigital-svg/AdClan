"use client";

import "./work.css";
import Link from "next/link";

export default function ProjectPage() {
  const works = [
    {
      title: "Branding",
      desc: "Luxury mall branding, premium identity design, and modern visual communication for KB West Walk.",
      icon: "🏷️",
      link: "/projects/kb-westwalk/branding",
    },

    {
      title: "Digital & Creatives",
      desc: "High-end promotional creatives, launch campaigns, social media posts, and cinematic digital content.",
      icon: "🎨",
      link: "/projects/kb-westwalk/creatives",
    },
  ];

  return (
    <div className="project-page">
      <div className="project-hero-image">
        <img src="/projects/kb/banner.png" />
      </div>

      {/* HERO */}

      <div className="project-hero1">
        <div className="hero-badge">
          Premium Commercial Destination
        </div>

        <h1>KB West Walk</h1>

        <p className="hero-sub">
          KB West Walk is a premium commercial and lifestyle destination
          designed to deliver luxury shopping, modern architecture,
          entertainment spaces, vibrant retail experiences, and a
          contemporary urban environment for businesses and visitors.
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