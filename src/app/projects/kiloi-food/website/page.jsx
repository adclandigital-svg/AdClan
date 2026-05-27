"use client";
import { useState } from "react";
import "./project.css";

export default function ProjectPage() {
  const [activePreview, setActivePreview] = useState(false);

  const project = {
    name: "Kiloi Foods Website",

    tagline:
      "Modern corporate website developed for Kiloi Foods with WordPress CMS, SEO optimization, responsive UI, and performance-focused frontend architecture.",

    website: "https://kiloifoods.com/",

    description:
      "A professionally designed corporate food industry website created for Kiloi Foods to showcase products, company presence, and digital branding. The platform combines responsive design, SEO optimization, lightweight frontend performance, and scalable WordPress management systems.",

    tech: [
      "WordPress",
      "PHP",
      "MySQL",
      "Swiper",
      "jQuery",
      "Lightbox",
      "Masonry",
      "LazySizes",
      "particles.js",
      "Apache Server",
      "Ubuntu",
    ],

    features: [
      "Corporate Website Development",
      "Responsive WordPress Design",
      "SEO Optimized Architecture",
      "Elementor Page Builder",
      "Google Analytics Integration",
      "GA4 Tracking Setup",
      "Google Tag Manager Integration",
      "Contact Form Integration",
      "Performance Optimization",
      "Lazy Loading Media",
      "Modern UI & Typography",
      "Secure reCAPTCHA Integration",
    ],

    hosting: "Apache HTTP Server 2.4.58 / Ubuntu",

    work: [
      "Developed responsive corporate website",
      "Integrated WordPress CMS",
      "Configured Elementor page builder",
      "Implemented RankMath SEO setup",
      "Integrated Google Analytics & GA4",
      "Configured Google Tag Manager",
      "Optimized frontend performance",
      "Implemented Lazy Loading assets",
      "Integrated Contact Form 7",
      "Configured responsive Swiper sliders",
      "Implemented Open Graph optimization",
      "Configured reCAPTCHA security",
    ],

    challenges: [
      "Optimizing website loading performance",
      "Maintaining responsive consistency across devices",
      "Handling large media assets efficiently",
      "Balancing SEO optimization with UI performance",
      "Managing lightweight frontend rendering",
    ],

    result:
      "Successfully delivered a fast, scalable, SEO-optimized, and responsive corporate website experience for Kiloi Foods with improved digital presence and performance-focused architecture.",
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
