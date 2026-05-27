"use client";

import "./work.css";
import Link from "next/link";

export default function ProjectPage() {
  const works = [
    {
      title: "Celebrity Management",
      desc: "End-to-end celebrity collaborations, brand endorsements, and talent management.",
      icon: "🎤",
      link: "/projects/vikram-mills/celebrity-managements",
    },
    {
      title: "Branding",
      desc: "Complete brand identity creation with strategic positioning and visual storytelling.",
      icon: "🏷️",
      link: "/projects/vikram-mills/branding",
    },
    {
      title: "FMCG Branding & Packaging",
      desc: "Packaging design and brand transformation for high-impact retail presence.",
      icon: "📦",
      link: "/projects/vikram-mills/fmcg-branding",
    },
    {
      title: "Video Production",
      desc: "Cinematic brand films, ad shoots, and high-quality video content production.",
      icon: "🎬",
      link: "/projects/vikram-mills/video-production",
    },
    {
      title: "Influencer's Video",
      desc: "Influencer-led content designed for engagement, reach, and brand storytelling.",
      icon: "⭐",
      link: "/projects/vikram-mills/influencer",
    },
    {
      title: "Digital & Creatives",
      desc: "Scroll-stopping creatives, social media designs, and digital campaign assets.",
      icon: "🎨",
      link: "/projects/vikram-mills/creatives",
    },
    {
      title: "Radio Jingles",
      desc: "Catchy audio branding and radio ads crafted for maximum recall.",
      icon: "🎧",
      link: "/projects/vikram-mills/radio-jingles",
    },
    {
      title: "Website Development",
      desc: "Modern, high-performance websites focused on UX, design, and conversions.",
      icon: "💻",
      link: "/projects/vikram-mills/website",
    },
  ];

  return (
    <div className="project-page">
      <div className="project-hero-image">
        <img src="/projects/vikram-mills/Vikram mills Banner.png" />
        {/* <img src="/projects/vikram-mills/1.png" /> */}
      </div>

      {/* HERO */}
      <div className="project-hero1">
          <div className="hero-badge">FMCG Brand Transformation</div>
          <h1>Vikram Mills</h1>

          <p className="hero-sub">
            From a traditional rice manufacturer to a premium FMCG powerhouse —
            we redefined Vikram Mills with modern branding, packaging, and
            performance-driven marketing strategies.
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
            < Link
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
