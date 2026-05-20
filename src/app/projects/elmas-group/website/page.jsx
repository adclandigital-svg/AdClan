"use client";
import { useState } from "react";
import "./project.css";

export default function ProjectPage() {
  const [activePreview, setActivePreview] = useState(false);

  const project = {
    name: "Elmas Group Corporate Website",

    tagline:
      "Modern corporate website developed for Elmas Group with smooth animations, optimized frontend architecture, responsive layouts, and premium user experience.",

    website: "https://elmas-group.vercel.app/",

    description:
      "A modern business website designed and developed for Elmas Group to showcase corporate services, brand identity, and digital presence. The project focused on premium UI/UX, smooth page transitions, responsive performance, and modern frontend technologies for an engaging user experience across all devices.",

    tech: [
      "React",
      "Next.js",
      "GSAP",
      "Swiper",
      "Lenis",
      "Turbopack",
      "Priority Hints",
    ],

    features: [
      "Responsive Corporate Website",
      "Smooth GSAP Animations",
      "Lenis Smooth Scrolling",
      "Swiper Slider Integration",
      "Modern UI/UX Design",
      "Optimized Performance",
      "Fast Page Transitions",
      "SEO-Friendly Structure",
    ],

    hosting: " Ubuntu Server",

    work: [
      "Developed complete responsive frontend",
      "Integrated GSAP animations and transitions",
      "Implemented smooth scrolling with Lenis",
      "Configured Swiper sliders and interactions",
      "Optimized website performance and loading speed",
      "Created SEO-friendly structure using Next.js",
      "Configured VPS deployment on Ubuntu server",
      "Managed production hosting environment",
    ],

    challenges: [
      "Maintaining animation performance across devices",
      "Optimizing smooth scrolling and transitions",
      "Handling responsive layouts for large sections",
      "Deploying and configuring Next.js on Ubuntu VPS",
      "Balancing visual quality with loading speed",
    ],

    result:
      "Delivered a premium, responsive, and high-performance corporate website experience for Elmas Group with smooth animations, modern design, and optimized frontend architecture deployed on a GoDaddy Ubuntu VPS server.",
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
            <h3>What We Did ?</h3>

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
