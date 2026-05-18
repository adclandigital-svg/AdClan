"use client";

import "./work.css";
import Link from "next/link";

export default function ProjectPage() {
  const works = [
    // {
    //   title: "Branding",
    //   desc: "Complete food brand identity creation with modern visuals, packaging direction, and strategic positioning.",
    //   icon: "🏷️",
    //   link: "/projects/aggarwal/branding",
    // },

    // {
    //   title: "Influencer's Video",
    //   desc: "Influencer-led promotional content crafted to increase engagement, reach, and product visibility.",
    //   icon: "⭐",
    //   link: "/projects/aggarwal/influencer",
    // },
    {
      title: "Digital & Creatives",
      desc: "Creative campaigns, social media branding, ads designs, reels, and digital visuals built to grow brand visibility and customer engagement.",
      icon: "🎨",
      link: "/projects/aggarwal/creatives",
    },
    {
      title: "Website Development",
      desc: "Responsive WooCommerce website development with modern design, smooth user experience, SEO optimization, and high-performance functionality.",
      icon: "💻",
      link: "/projects/aggarwal/website",
    },
  ];

  return (
    <div className="project-page">
      <div className="project-hero-image">
        <img src="/projects/aggarwal/banner3.png" alt="" />
      </div>

      {/* HERO */}
      <div className="project-hero1">
        <div className="hero-badge">Food Brand Transformation</div>

        <h1>Aggarwal Namkeen</h1>

        <p className="hero-sub">
          We transformed Aggarwal Namkeen into a modern digital-first food brand
          through strategic branding, video production, influencer campaigns,
          SEO-focused marketing, creative advertising, and performance-driven
          website development.
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
