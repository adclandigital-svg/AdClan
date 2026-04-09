"use client";

import "./work.css";

export default function ProjectPage() {
  const works = [
    {
      title: "Celebrity Management",
      desc: "End-to-end celebrity collaborations, brand endorsements, and talent management.",
      icon: "🎤",
      link: "/projects/celebrity-management",
    },
    {
      title: "Branding",
      desc: "Complete brand identity creation with strategic positioning and visual storytelling.",
      icon: "🏷️",
      link: "/projects/branding",
    },
    {
      title: "FMCG Branding & Packaging",
      desc: "Packaging design and brand transformation for high-impact retail presence.",
      icon: "📦",
      link: "/projects/fmcg-branding",
    },
    {
      title: "Video Production",
      desc: "Cinematic brand films, ad shoots, and high-quality video content production.",
      icon: "🎬",
      link: "/projects/video-production",
    },
    {
      title: "Influencer's Video",
      desc: "Influencer-led content designed for engagement, reach, and brand storytelling.",
      icon: "⭐",
      link: "/projects/influencers",
    },
    {
      title: "Digital & Creatives",
      desc: "Scroll-stopping creatives, social media designs, and digital campaign assets.",
      icon: "🎨",
      link: "/projects/creatives",
    },
    {
      title: "Radio Jingles",
      desc: "Catchy audio branding and radio ads crafted for maximum recall.",
      icon: "🎧",
      link: "/projects/radio-jingles",
    },
    {
      title: "Website Development",
      desc: "Modern, high-performance websites focused on UX, design, and conversions.",
      icon: "💻",
      link: "/projects/web-development",
    },
  ];

  return (
    <div className="project-page">
      {/* HERO */}
      <div className="project-hero">
        {/* 🔥 Small Tag */}
        <div className="hero-badge">FMCG Brand Transformation</div> <br />
        {/* <img src="/projects/vikram-mills/logo1.jpg" alt="" height={300} /> */}

        {/* 🎯 Title */}
        <h1>Vikram Mills</h1>

        {/* 💬 Subtitle */}
        <p className="hero-sub">
          From a traditional rice manufacturer to a premium FMCG powerhouse — we
          redefined Vikram Mills with modern branding, packaging, and
          performance-driven marketing strategies.
        </p>
        {/* 🚀 CTA */}
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
            <a
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
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
