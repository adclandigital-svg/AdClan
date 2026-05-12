"use client";
import { useState } from "react";
import "./project.css";

export default function ProjectPage() {
  const [activePreview, setActivePreview] = useState(false);

  const project = {
    name: "Vikram Mills Ads Landing Page",

    tagline:
      "Single landing page designed for Vikram Mills advertising campaigns with optimized performance, responsive layouts, and modern frontend integrations.",

    website: "https://ads.vikrammills.com/",

    description:
      "A campaign-focused landing page developed for Vikram Mills to support digital advertising and product promotion. The website delivers a clean user experience with fast-loading frontend architecture and modern web integrations.",

    tech: [
      "Google Font API",
      "Font Awesome 6.5.0",
      "Swiper",
    ],

    features: [
      "Single Landing Page Design",
      "Responsive Layout",
      "Fast Loading Experience",
      "Swiper Slider Integration",
      "Modern Typography",
      "CDN Optimization",
    ],

    hosting: "Vercel",

    work: [
      "Developed responsive landing page",
      "Integrated Swiper functionality",
      "Configured modern font systems",
      "Optimized frontend performance",
      "Implemented responsive campaign layout",
      "Integrated CDN delivery optimization",
    ],

    challenges: [
      "Maintaining smooth performance",
      "Optimizing responsive layouts",
      "Handling fast-loading media delivery",
      "Creating clean campaign-focused UI",
    ],

    result:
      "Delivered a fast, responsive, and modern advertising landing page experience for Vikram Mills campaigns.",
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