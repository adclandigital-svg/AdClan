"use client";
import { useState } from "react";
import "./project.css";

export default function ProjectPage() {
  const [activePreview, setActivePreview] = useState(false);

  const project = {
    name: "Vikram Mills",

    tagline:
      "Vikram Mills is a landmark redevelopment project that transforms a historic textile mill into a vibrant commercial and lifestyle destination. The digital experience was crafted to reflect its legacy while showcasing modern architecture, premium retail spaces, and dynamic business environments.",

    website: "https://vikrammills.com/",

    description:
      "Vikram Mills is a landmark redevelopment project that transforms a historic textile mill into a vibrant commercial and lifestyle destination. The digital experience was crafted to reflect its legacy while showcasing modern architecture, premium retail spaces, and dynamic business environments.",

    tech: [
      "Next.js",
      "React",
      "GSAP",
      "Three.js",
      "CSS",
      "AMP",
      "Font Awesome 4.7.0",
      "PHP 8.3.30",
      "Bootstrap 3.4.1",
      "jQuery 3.5.1",
      "OWL Carousel",
      "Masonry",
      "LazySizes",
      "Isotope",
      "core-js 3.32.2",
    ],

    features: [
      "Cinematic Visual Experience",
      "Smooth Scroll Animations",
      "Interactive Layouts",
      "High Performance Optimization",
      "Responsive Design",
      "Facebook Pixel Integration",
      "Google AdSense",
      "Cloudflare CDN",
      "Apache HTTP Server",
      "Lazy Loading Optimization",
    ],

    hosting: "Apache HTTP Server with Cloudflare CDN",

    work: [
      "Designed modern UI inspired by architectural layouts",
      "Developed full website using Next.js",
      "Implemented smooth animations using GSAP",
      "Optimized performance and loading speed",
      "Created responsive design for all devices",
      "Integrated Facebook Pixel",
      "Configured Google AdSense",
      "Implemented LazySizes optimization",
      "Integrated OWL Carousel and Masonry layouts",
    ],

    challenges: [
      "Balancing heritage feel with modern UI",
      "Handling heavy visuals without performance loss",
      "Maintaining smooth animation experience",
      "Optimizing third-party libraries and scripts",
      "Improving overall frontend performance",
    ],

    result:
      "Delivered a premium, high-performance website that enhances brand presence and creates a strong digital impression for commercial users and investors.",
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
            className={`website-iframe-container ${activePreview ? "website-active" : ""}`}
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
