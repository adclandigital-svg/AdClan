"use client";

import React, { useRef, useState } from "react";
import "./projects.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PROJECTS } from "@/data/projectData";
import { useRouter } from "next/navigation";

const TABS = ["All", ...Array.from(new Set(PROJECTS?.map((p) => p?.category)))];

export default function ProjectsPage() {
  const pageRef = useRef(null);
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);
  const router = useRouter();

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
          films that connect culture and commerce. We blend strategy,
          storytelling, and design to build meaningful brands, create immersive
          experiences, and deliver work that resonates across platforms,
          audiences, and time.
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
        {filteredProjects?.map((project, key) => (
          <article
            className="project-card big"
            key={key}
            onClick={() => router.push(`/projects/${project?.slug}`)}
          >
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
              <p>
                {project.intro.split(" ").slice(0, 30).join(" ")}
                {project.intro.split(" ").length > 30 && "..."}
              </p>
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
