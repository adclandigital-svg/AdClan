"use client";

import "./work.css";
import Link from "next/link";

export default function ProjectPage() {
  const works = [
    {
      title: "Radio Jingles",
      desc: "Catchy audio branding and radio ads crafted for maximum recall.",
      icon: "🎧",
      link: "/projects/hyundai/radio-jingles",
    },
  ];

  return (
    <div className="project-page">
      <div className="project-hero-image">
        <img src="/projects/vikram-mills/banner-strips.png" />
      </div>

      {/* HERO */}
      <div className="project-hero1">
        <div className="hero-badge">Automotive Radio Campaign</div>

        <h1>Hyundai</h1>

        <p className="hero-sub">
          We executed a high-performance radio campaign for Hyundai, focused on
          amplifying brand recall, promoting key vehicle launches, and driving
          showroom visits through compelling audio storytelling and
          high-frequency media placements across major markets.
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
                  `${e.clientX - rect.left}px`,
                );
                e.currentTarget.style.setProperty(
                  "--y",
                  `${e.clientY - rect.top}px`,
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
