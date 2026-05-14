"use client";
import { useState } from "react";
import "./project.css";

export default function ProjectPage() {
  const [activePreview, setActivePreview] = useState(false);

  const project = {
    name: "Adore Realtech Ads Landing Page",

    tagline:
      "High-converting advertising landing page developed for Adore Realtech with immersive UI, smooth animations, and performance-focused frontend architecture.",

    website: "https://adore-real.vercel.app/",

    description:
      "A modern campaign-focused landing page created for Adore Realtech: Top Builders & Developer Sector 12 Faridabad to support digital advertising, lead generation, and premium property promotions. The platform combines cinematic animations, responsive layouts, smooth scrolling interactions, and optimized frontend performance to deliver a strong advertising experience across all devices.",

    tech: [
      "React",
      "Next.js 16.1.6",
      "GSAP",
      "Framer Motion",
      "Swiper",
      "Lenis 1.3.21",
      "Lucide Icons",
      "Google Maps",
      "YouTube Integration",
      "Vercel",
    ],

    features: [
      "Ads Landing Page Development",
      "Responsive Campaign Layout",
      "Smooth Scroll Experience",
      "GSAP Motion Animations",
      "Framer Motion Interactions",
      "Swiper Slider Integration",
      "Lead Generation UI",
      "Modern Property Showcase",
      "Google Maps Integration",
      "YouTube Video Sections",
      "Fast Loading Frontend",
      "Performance Optimized Architecture",
    ],

    hosting: "Vercel / Next.js Infrastructure",

    work: [
      "Developed responsive ads landing page",
      "Built modern Next.js frontend architecture",
      "Integrated GSAP animations",
      "Implemented smooth Lenis scrolling",
      "Configured Swiper interactions",
      "Integrated Framer Motion effects",
      "Created campaign-focused property layouts",
      "Integrated Google Maps functionality",
      "Embedded YouTube promotional sections",
      "Optimized frontend loading performance",
      "Implemented responsive ad-focused UI",
      "Deployed optimized production build on Vercel",
    ],

    challenges: [
      "Maintaining smooth animation performance",
      "Optimizing landing page loading speed",
      "Balancing cinematic visuals with responsiveness",
      "Creating high-conversion campaign layouts",
      "Managing seamless scrolling interactions",
    ],

    result:
      "Successfully delivered a modern, responsive, and performance-optimized advertising landing page for Adore Realtech that improved campaign presentation, user engagement, and premium real estate showcasing experience.",
  };
  return (
    <div className="website-project-page">
      {/* HERO */}
      <section className="website-hero">
        <h1>{project.name}</h1>
        <p>{project.tagline}</p>
      </section>

      {/* PREVIEW */}
      <section className="website-preview">
        <div className="website-browser">
          <div className="website-browser-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div
            className={`website-iframe-container ${
              activePreview ? "website-active" : ""
            }`}
          >
            {!activePreview && (
              <div
                className="website-overlay"
                onClick={() => setActivePreview(true)}
              >
                <div className="website-overlay-content">
                  <div className="website-play-icon">▶</div>
                  <p>Click to Preview</p>
                </div>
              </div>
            )}

            <iframe src={project.website} title="preview"></iframe>
          </div>
        </div>
      </section>

      <section className="website-details">
        <div className="website-card">
          <h3>Features:</h3>

          {project.features.map((f, i) => (
            <p key={i}>{f}</p>
          ))}
        </div>

        <div className="website-card">
          <h3>Tech Stack:</h3>

          {project.tech.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
        </div>

        <div className="website-card website-highlight">
          <h3>Hosting:</h3>

          <p>{project.hosting}</p>
        </div>
      </section>

      {/* WORK */}
      <section className="website-work">
        <div className="website-work-grid">
          <div>
            <h3>What I Did ?</h3>

            <ul>
              {project.work.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Challenges:</h3>

            <ul>
              {project.challenges.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Result:</h3>

            <p>{project.result}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
