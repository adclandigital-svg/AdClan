"use client";

import React, { useRef, useState } from "react";
import "./projects.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const TABS = ["All", "Branding", "Digital", "Film"];

// initial projects
const PROJECTS = [
  {
    id: 1,
    title: "Luxury Brand Identity",
    description:
      "Visual identity and design language for a premium real estate brand.",
    category: "Branding",
    type: "image",
    src: "https://picsum.photos/1800/1200?random=21",
  },
  {
    id: 2,
    title: "Corporate Story Film",
    description: "Narrative-driven brand film highlighting vision and culture.",
    category: "Film",
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 3,
    title: "Digital Product Launch",
    description:
      "Integrated digital campaign across web, social, and performance.",
    category: "Digital",
    type: "image",
    src: "https://picsum.photos/1800/1200?random=22",
  },
  {
    id: 4,
    title: "Real Estate Brand Film",
    description: "Cinematic storytelling for a landmark residential launch.",
    category: "Film",
    type: "video",
    src: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 5,
    title: "E-commerce Branding",
    description: "Modern brand identity for a luxury online fashion store.",
    category: "Branding",
    type: "image",
    src: "https://picsum.photos/1800/1200?random=23",
  },
  {
    id: 6,
    title: "Social Media Campaign",
    description: "Digital campaign targeting social media engagement.",
    category: "Digital",
    type: "image",
    src: "https://picsum.photos/1800/1200?random=24",
  },
];

export default function ProjectsPage() {
  const pageRef = useRef(null);
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);

  const filteredProjects =
    activeTab === "All"
      ? PROJECTS.slice(0, visibleCount)
      : PROJECTS.filter((p) => p.category === activeTab).slice(0, visibleCount);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Step 1: Hero text animation
      tl.from(".portfolio-hero span", {
        y: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,

      });

      // Step 2: Animate project descriptions after hero animation
      tl.from(".portfolio-hero p", {
        y: 20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
      });
    },
    { scope: pageRef }
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setVisibleCount(4);

    gsap.from(".project-card", {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.from(".project-meta p", {
      y: 20,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <main className="projects-page" ref={pageRef}>
      {/* HERO */}
      <section className="portfolio-hero">
        <h1>
          <span>We design</span>
          <span>brands,</span>
          <span>experiences</span>
          <span>& stories.</span>
        </h1>

        <p>
          A creative agency crafting brand identities, digital experiences, and
          films that connect culture and commerce.
        </p>
      </section>

      {/* TABS */}
      <div className="projects-tabs">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabChange(tab)}
          >
            [ {tab} ]
          </button>
        ))}
      </div>

      {/* GRID */}
      <section className="projects-grid">
        {filteredProjects.map((project) => (
          <article className="project-card big" key={project.id}>
            <div className="project-media">
              {project.type === "video" ? (
                <video src={project.src} muted loop autoPlay playsInline />
              ) : (
                <img src={project.src} alt={project.title} />
              )}
            </div>

            <div className="project-meta">
              <span>[ {project.category} ]</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </section>

      {/* LOAD MORE */}
      {visibleCount < PROJECTS.length && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load More Projects
          </button>
        </div>
      )}
    </main>
  );
}
