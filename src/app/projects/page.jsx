"use client";

import React, { useRef, useState, useEffect } from "react";
import "./projects.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PROJECTS } from "@/data/projectData";
import { useRouter, useSearchParams } from "next/navigation";

const CATEGORY_ORDER = [
  "Celebrity Management",
  "Branding",
  "FMCG Branding & Packaging",
  "Video Production",
  "Influencer's Video",
  "Digital & Creatives",
  "Radio Jingles",
  "Website Development",
];

/* =========================
   SORT PROJECTS
========================= */
const sortedProjects = [...PROJECTS].sort((a, b) => {
  const aIndex = Math.min(
    ...a.category.map((cat) => CATEGORY_ORDER.indexOf(cat)),
  );

  const bIndex = Math.min(
    ...b.category.map((cat) => CATEGORY_ORDER.indexOf(cat)),
  );

  return aIndex - bIndex;
});

export default function ProjectsPage() {
  const pageRef = useRef(null);
  const loaderRef = useRef(null);

  const router = useRouter();
  const searchParams = useSearchParams();

  /* =========================
     ACTIVE TAB FROM URL
  ========================= */
  const initialTab = searchParams.get("category") || "All";

  const [activeTab, setActiveTab] = useState(initialTab);

  const [visibleCount, setVisibleCount] = useState(8);

  const [filteredProjects, setFilteredProjects] = useState([]);

  const [visibleProjects, setVisibleProjects] = useState([]);

  const prevCardCountRef = useRef(0);

  const projectsData = Array.isArray(sortedProjects) ? sortedProjects : [];

  /* =========================
     TABS
  ========================= */
  const TABS = [
    "All",
    ...Array.from(new Set(projectsData.flatMap((p) => p.category))),
  ];

  /* =========================
     URL TAB SYNC
  ========================= */
  useEffect(() => {
    const category = searchParams.get("category") || "All";

    setActiveTab(category);
  }, [searchParams]);

  /* =========================
     TAB CHANGE
  ========================= */
  const handleTabChange = (tab) => {
    setActiveTab(tab);

    const url =
      tab === "All"
        ? "/projects"
        : `/projects?category=${encodeURIComponent(tab)}`;

    /* ✅ NO REFRESH */
    window.history.pushState({}, "", url);
  };

  /* =========================
     FILTER PROJECTS
  ========================= */
  useEffect(() => {
    const result =
      activeTab === "All"
        ? projectsData
        : projectsData.filter((p) => p.category.includes(activeTab));

    setFilteredProjects(result);

    setVisibleProjects(result.slice(0, 8));

    setVisibleCount(8);

    prevCardCountRef.current = 0;
  }, [activeTab]);

  /* =========================
     UPDATE VISIBLE
  ========================= */
  useEffect(() => {
    setVisibleProjects(filteredProjects.slice(0, visibleCount));
  }, [visibleCount, filteredProjects]);

  /* =========================
     INFINITE SCROLL
  ========================= */
  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          visibleCount < filteredProjects.length
        ) {
          setVisibleCount((prev) => prev + 4);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [visibleCount, filteredProjects]);

  /* =========================
     HERO ANIMATION
  ========================= */
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
        "-=0.3",
      );
    },
    { scope: pageRef },
  );

  /* =========================
     CARD ANIMATION
  ========================= */
  useEffect(() => {
    const currentCount = visibleProjects.length;

    if (currentCount > prevCardCountRef.current) {
      const newCards = Array.from(
        document.querySelectorAll(".project-card"),
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

  return (
    <main className="projects-page" ref={pageRef}>
      {/* =========================
          HERO
      ========================= */}
      <section className="portfolio-hero">
        <h1>
          <span>We design</span>
          <span>brands,</span>
          <span>experiences</span>
          <span>& stories.</span>
        </h1>

        <p>
          A creative agency crafting brand identities, digital experiences and
          campaigns that connect brands with audiences.
        </p>
      </section>

      {/* =========================
          TABS
      ========================= */}
      <div className="projects-tabs">
        {TABS?.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabChange(tab)}
          >
            [ {tab} ]
          </button>
        ))}
      </div>

      {/* =========================
          PROJECT GRID
      ========================= */}
      <section className="projects-grid">
        {visibleProjects.map((project) => (
          <article
            className="project-card"
            key={project.slug}
            onClick={() => {
              const currentCategory =
                activeTab !== "All"
                  ? `?category=${encodeURIComponent(activeTab)}`
                  : "";

              if (project.category.includes("Website Development")) {
                if (project.slug.startsWith("http")) {
                  window.open(project.slug, "_blank");
                } else {
                  router.push(`/projects/${project.slug}`);
                }
              } else {
                router.push(`/projects/${project.slug}`);
              }
            }}
          >
            {/* MEDIA */}
            <div className="project-media">
              {project.type === "video" ? (
                <video src={project.src} muted loop autoPlay playsInline />
              ) : (
                <img src={project.src} alt={project.title} />
              )}
            </div>

            {/* META */}
            <div className="project-meta">
              {/* <span>
                [
                {project.category.map((cat, i) => (
                  <React.Fragment key={i}>
                    {cat}
                    {i !== project.category.length - 1 &&
                      " • "}
                  </React.Fragment>
                ))}
                ]
              </span> */}

              <h3>{project.title}</h3>
            </div>
          </article>
        ))}
      </section>

      {/* =========================
          LOADER
      ========================= */}
      <div ref={loaderRef} style={{ height: "50px" }}></div>
    </main>
  );
}
