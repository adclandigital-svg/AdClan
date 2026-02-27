"use client";

import React, { useRef, useState, useEffect } from "react";
import "./projects.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PROJECTS } from "@/data/projectData";
import { useRouter } from "next/navigation";

const TABS = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

export default function ProjectsPage() {
  const pageRef = useRef(null);
  const loaderRef = useRef(null);
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState([]);

  // Track previous number of cards to animate only new ones
  const prevCardCountRef = useRef(0);

  // Filter projects when tab changes
  useEffect(() => {
    const result =
      activeTab === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === activeTab);

    setFilteredProjects(result);
    setVisibleProjects(result.slice(0, 8));
    setVisibleCount(8);
    prevCardCountRef.current = 0; // reset on tab change
  }, [activeTab]);

  // Update visible projects when count or filter changes
  useEffect(() => {
    setVisibleProjects(filteredProjects.slice(0, visibleCount));
  }, [visibleCount, filteredProjects]);

  // Infinite scroll with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          visibleCount < filteredProjects.length
        ) {
          setVisibleCount((prev) => prev + 4);
        }
      },
      { threshold: 0.5 } // Trigger when half of the loader is visible
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [visibleCount, filteredProjects]); // Re‑create when dependencies change

  // Hero title animation
  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".portfolio-hero span", {
        y: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
      }).from(
        ".portfolio-hero p",
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.3"
      );
    },
    { scope: pageRef }
  );

  // Card animation – only new cards
  useEffect(() => {
    const currentCount = visibleProjects.length;
    if (currentCount > prevCardCountRef.current) {
      // Select only the newly added cards (those after the previous count)
      const newCards = Array.from(
        document.querySelectorAll(".project-card")
      ).slice(prevCardCountRef.current);

      gsap.from(newCards, {
        opacity: 0,
        y: 40,
        stagger: 0.05,
        duration: 0.5,
        ease: "power2.out",
      });
    }
    prevCardCountRef.current = currentCount;
  }, [visibleProjects]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
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
          A creative agency crafting brand identities, digital experiences,
          and films that connect culture and commerce.
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
        {visibleProjects.map((project) => (
          <article
            className="project-card"
            key={project.slug} // Use unique slug instead of index
            onClick={() => router.push(`/projects/${project.slug}`)}
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
              {/* <p>
                {project.intro.split(" ").slice(0, 20).join(" ")}
                {project.intro.split(" ").length > 20 && "..."}
              </p> */}
            </div>
          </article>
        ))}
      </section>

      {/* Infinite Scroll Loader */}
      <div ref={loaderRef} style={{ height: "50px" }}></div>
    </main>
  );
}