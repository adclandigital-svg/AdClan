"use client";

import "./work.css";
import Link from "next/link";

export default function ProjectPage() {
  const works = [
    {
      title: "Branding",
      desc: "Complete brand identity creation with strategic positioning and visual storytelling.",
      icon: "🏷️",
      link: "/projects/elmas-group/branding",
    },
    {
      title: "Digital & Creatives",
      desc: "Scroll-stopping creatives, social media designs, and digital campaign assets.",
      icon: "🎨",
      link: "/projects/elmas-group/creatives",
    },
    {
      title: "Website Development",
      desc: "Modern, high-performance websites focused on UX, design, and conversions.",
      icon: "💻",
      link: "/projects/elmas-group/website",
    },
  ];

  return (
    <div className="project-page">
      <div className="project-hero-image">
        <img src="/projects/elmasGroup/banner.png" />
      </div>

      {/* HERO */}
      <div className="project-hero1">
        <div className="hero-badge">Premium Real Estate Experience</div>

        <h1>Elmas Group</h1>

        <p className="hero-sub">
          Elmas Group offers premium senior-friendly residences, luxury living
          spaces, modern real estate developments, elegant community
          experiences, and thoughtfully designed environments focused on
          comfort, wellness, and modern lifestyles.
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
