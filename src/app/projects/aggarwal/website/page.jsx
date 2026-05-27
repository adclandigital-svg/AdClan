"use client";
import { useState } from "react";
import "./project.css";

export default function ProjectPage() {
  const [activePreview, setActivePreview] = useState(false);

  const project = {
    name: "Aggarwal Namkeen E-Commerce Website",

    tagline:
      "Modern WooCommerce-based e-commerce website developed for Aggarwal Namkeen with responsive UI, SEO optimization, analytics integrations, and performance-focused architecture.",

    website: "https://aggarwalnamkeen.com/",

    description:
      "A complete food e-commerce platform created for Aggarwal Namkeen to showcase and sell namkeen, snacks, and food products online. The website combines WordPress CMS flexibility, WooCommerce functionality, responsive layouts, SEO optimization, analytics tracking, and fast-loading performance to deliver a seamless shopping experience across all devices.",

    tech: [
      "WordPress",
      "WooCommerce 10.6.1",
      "PHP 8.2.30",
      "MySQL",
      "Elementor 4.0.5",
      "Swiper",
      "jQuery 3.7.1",
      "Lightbox",
      "Masonry",
      "Isotope",
      "core-js 3.46.0",
      "Google Font API",
      "Font Awesome",
      "Hostinger CDN",
      "HTTP/3",
    ],

    features: [
      "WooCommerce E-Commerce Store",
      "Responsive Website Design",
      "SEO Optimized Architecture",
      "Google Analytics Integration",
      "Facebook Pixel Setup",
      "Microsoft Clarity Tracking",
      "Google Tag Manager Integration",
      "WhatsApp Business Chat",
      "Elementor Page Builder",
      "Product Showcase Layouts",
      "Fast Loading Performance",
      "WP Rocket Optimization",
      "reCAPTCHA Security",
      "Contact Form Integration",
      "Open Graph Optimization",
      "Priority Hints Performance",
    ],

    hosting: "Hostinger / Hostinger CDN / HTTP/3",

    work: [
      "Developed responsive e-commerce website",
      "Integrated WooCommerce product system",
      "Configured WordPress CMS",
      "Implemented Elementor page builder",
      "Integrated Google Analytics tracking",
      "Configured Facebook Pixel setup",
      "Integrated Microsoft Clarity",
      "Configured Google Tag Manager",
      "Optimized website speed using WP Rocket",
      "Integrated WhatsApp Business Chat",
      "Implemented responsive product layouts",
      "Configured Contact Form 7",
      "Optimized SEO using All in One SEO Pack",
      "Implemented CDN delivery optimization",
      "Configured Open Graph metadata",
      "Integrated reCAPTCHA protection",
    ],

    challenges: [
      "Optimizing WooCommerce performance",
      "Maintaining fast-loading product pages",
      "Handling responsive e-commerce layouts",
      "Balancing SEO optimization with performance",
      "Managing multiple analytics integrations",
    ],

    result:
      "Successfully delivered a responsive, SEO-optimized, and performance-focused WooCommerce e-commerce platform for Aggarwal Namkeen with improved online presence, smooth shopping experience, and scalable digital infrastructure.",
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
