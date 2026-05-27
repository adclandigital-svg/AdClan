"use client";
import { useState } from "react";
import "./project.css";

export default function ProjectPage() {
  const [activePreview, setActivePreview] = useState(false);

  const project = {
    name: "Spring Elmas Portfolio Website",

    tagline:
      "Premium real estate portfolio website developed for Spring Elmas with responsive UI, modern frontend interactions, and performance-focused architecture.",

    website: "https://springelmas.com/spring-elmas.html",

    description:
      "A professionally designed portfolio website created for Spring Elmas to showcase luxury real estate projects, company presence, and premium property experiences. The platform combines responsive layouts, smooth frontend interactions, optimized performance, and modern UI systems to deliver an engaging and visually refined digital presence across all devices.",

    tech: [
      "Bootstrap",
      "jQuery 3.6.0",
      "jQuery UI 1.11.4",
      "Modernizr 2.8.3",
      "Masonry",
      "Isotope",
      "Google Maps",
      "Font Awesome",
      "Popper.js",
      "Apache HTTP Server",
    ],

    features: [
      "Real Estate Portfolio Website",
      "Responsive Bootstrap Layout",
      "Interactive Project Showcase",
      "Luxury Property Presentation",
      "Google Maps Integration",
      "Dynamic Masonry Grid Layouts",
      "Isotope Portfolio Filtering",
      "Smooth UI Interactions",
      "Cross Browser Compatibility",
      "Performance Optimized Frontend",
      "Modern Typography & Icons",
      "Responsive Multi-Device Experience",
    ],

    hosting: "Apache HTTP Server",

    work: [
      "Developed responsive portfolio website",
      "Built Bootstrap-based frontend architecture",
      "Integrated dynamic Masonry layouts",
      "Configured Isotope portfolio filtering",
      "Implemented Google Maps functionality",
      "Optimized responsive project sections",
      "Integrated Font Awesome icon system",
      "Configured smooth frontend interactions",
      "Optimized website loading performance",
      "Implemented responsive navigation systems",
      "Created premium real estate UI presentation",
      "Enhanced cross-device user experience",
    ],

    challenges: [
      "Maintaining responsive consistency across devices",
      "Optimizing performance with visual-heavy sections",
      "Creating premium real estate presentation layouts",
      "Managing smooth grid rendering responsiveness",
      "Balancing UI richness with loading performance",
    ],

    result:
      "Successfully delivered a modern, responsive, and visually premium portfolio website for Spring Elmas that enhanced digital brand presence, improved user engagement, and elevated luxury real estate project showcasing.",
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
