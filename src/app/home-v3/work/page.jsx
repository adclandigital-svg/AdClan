"use client";

import React, {
  useRef,
  useState,
  useEffect,
  Suspense,
} from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { PROJECTS } from "@/data/projectData";
import HomeV3Navbar from "@/components/home-v3/HomeV3Navbar";
import HomeV3Footer from "@/components/home-v3/HomeV3Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/components/home-v3/homeV3.css";
import "@/components/home-v3/homeV3Sections.css";
import "./workV3.css";

/* ==========================================================================
   CATEGORY ORDER (SAME AS MAIN /projects)
   ========================================================================== */
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

/* ==========================================================================
   SORT PROJECTS
   ========================================================================== */
const sortedProjects = [...PROJECTS].sort((a, b) => {
  const aCategories = Array.isArray(a.category)
    ? a.category
    : [a.category];

  const bCategories = Array.isArray(b.category)
    ? b.category
    : [b.category];

  const aIndex = Math.min(
    ...aCategories.map((cat) => {
      const idx = CATEGORY_ORDER.indexOf(cat);
      return idx === -1 ? 999 : idx;
    }),
  );

  const bIndex = Math.min(
    ...bCategories.map((cat) => {
      const idx = CATEGORY_ORDER.indexOf(cat);
      return idx === -1 ? 999 : idx;
    }),
  );

  return aIndex - bIndex;
});

/* ==========================================================================
   HOME V3 WORK CONTENT
   ========================================================================== */
function HomeV3WorkContent() {
  const pageRef = useRef(null);
  const loaderRef = useRef(null);

  const router = useRouter();
  const searchParams = useSearchParams();

  const projectsData = Array.isArray(sortedProjects)
    ? sortedProjects
    : [];

  const initialTab = searchParams.get("category") || "All";
  const [activeTab, setActiveTab] = useState(initialTab);
  const [visibleCount, setVisibleCount] = useState(8);

  const initialFiltered =
    initialTab === "All"
      ? projectsData
      : projectsData.filter((p) => {
          const categories = Array.isArray(p.category)
            ? p.category
            : [p.category];
          return categories.includes(initialTab);
        });

  const [filteredProjects, setFilteredProjects] = useState(initialFiltered);
  const [visibleProjects, setVisibleProjects] = useState(initialFiltered.slice(0, 8));
  const prevCardCountRef = useRef(0);

  /* Body class for Home V3 scoping */
  useEffect(() => {
    document.body.classList.add("home-v3-active");
    window.scrollTo({ top: 0, behavior: "instant" });

    return () => {
      document.body.classList.remove("home-v3-active");
    };
  }, []);

  /* =========================
     CATEGORY TABS (ORDERED)
  ========================= */
  const allCategories = Array.from(
    new Set(
      projectsData.flatMap((p) =>
        Array.isArray(p.category)
          ? p.category
          : [p.category],
      ),
    ),
  );

  const TABS = [
    "All",
    ...CATEGORY_ORDER.filter((cat) => allCategories.includes(cat)),
    ...allCategories.filter((cat) => !CATEGORY_ORDER.includes(cat)),
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
        ? "/home-v3/work"
        : `/home-v3/work?category=${encodeURIComponent(tab)}`;

    window.history.pushState({}, "", url);
  };

  /* =========================
     FILTER PROJECTS
  ========================= */
  useEffect(() => {
    const result =
      activeTab === "All"
        ? projectsData
        : projectsData.filter((p) => {
            const categories = Array.isArray(p.category)
              ? p.category
              : [p.category];

            return categories.includes(activeTab);
          });

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
      { threshold: 0.2 },
    );

    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [visibleCount, filteredProjects]);

  /* =========================
     HERO ANIMATION (GSAP)
  ========================= */
  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".v3-editorial-headline", {
        y: 35,
        opacity: 0,
        duration: 0.65,
        ease: "power3.out",
      }).from(
        ".v3-editorial-subtext",
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3",
      );
    },
    { scope: pageRef },
  );

  /* =========================
     CARD ENTRANCE ANIMATION
  ========================= */
  useEffect(() => {
    const currentCount = visibleProjects.length;

    if (currentCount > prevCardCountRef.current) {
      const newCards = Array.from(
        document.querySelectorAll(".v3-project-card"),
      ).slice(prevCardCountRef.current);

      if (newCards.length > 0) {
        gsap.from(newCards, {
          opacity: 0,
          y: 35,
          stagger: 0.05,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    }

    prevCardCountRef.current = currentCount;
  }, [visibleProjects]);

  /* =========================
     CARD CLICK ROUTING
  ========================= */
  const handleCardClick = (project) => {
    const categories = Array.isArray(project.category)
      ? project.category
      : [project.category];

    const rawSlug = project.slug || "";
    const cleanSlug = rawSlug.replace(/^\//, "");

    if (categories.includes("Website Development")) {
      if (rawSlug.startsWith("http")) {
        window.open(rawSlug, "_blank", "noopener,noreferrer");
      } else {
        router.push(`/projects/${cleanSlug}`);
      }
    } else {
      router.push(`/projects/${cleanSlug}`);
    }
  };

  return (
    <div className="home-v3-full-flow" ref={pageRef}>
      {/* Top Navigation */}
      <HomeV3Navbar />

      <main className="v3-work-portfolio-page pt-5 mt-5">
        <div className="container-fluid v3-section-container px-3 px-md-5 px-xl-5 pt-4">
          {/* Back link & Eyebrow */}
          <div className="v3-work-top-nav-bar">
            <Link
              href="/home-v3"
              className="v3-work-back-link"
              aria-label="Back to Home V3"
            >
              <ArrowLeft size={13} />
              <span>BACK TO HOME</span>
            </Link>
            <span className="text-muted" style={{ opacity: 0.4 }}>•</span>
            <span className="v3-work-header-badge">DISCIPLINE ARCHIVE</span>
          </div>

          {/* =================================================================
              STANDARD HOME V3 SECTION HEADER (MATCHING OTHER V3 PAGES)
              ================================================================= */}
          <div className="row mb-5">
            <div className="col-12 col-lg-10 col-xl-8">
              <div className="v3-section-eyebrow-wrap">
                <span className="v3-eyebrow-dash" />
                <span className="v3-section-eyebrow">01 / WORK ARCHIVE</span>
              </div>

              <h1 className="v3-editorial-headline">
                We design brands, <br />
                <span>experiences & stories.</span>
              </h1>

              <p className="v3-editorial-subtext">
                A creative agency crafting brand identities, digital experiences,
                and campaigns that connect brands with audiences across India.
              </p>
            </div>
          </div>

          {/* =================================================================
              CATEGORY FILTER TABS & WORK COUNTER (BRACKETED FORMAT [ ... ])
              ================================================================= */}
          <div className="v3-tabs-container">
            <div className="v3-projects-tabs" role="tablist">
              {TABS.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`v3-tab-btn ${isActive ? "is-active" : ""}`}
                    onClick={() => handleTabChange(tab)}
                  >
                    [ {tab} ]
                  </button>
                );
              })}
            </div>

            {/* Showing Count */}
            <div className="v3-work-counter-badge">
              <Sparkles size={12} />
              <span>
                SHOWING {visibleProjects.length} OF {filteredProjects.length} WORKS
              </span>
            </div>
          </div>

          {/* =================================================================
              4-COLUMN PROJECTS GRID (SAME AS /projects WITH V3 ELEGANCE)
              ================================================================= */}
          {filteredProjects.length === 0 ? (
            <div className="v3-work-empty-state">
              <h3>No Works Found</h3>
              <p>
                No projects matched the selected category <strong>"{activeTab}"</strong>.
              </p>
              <button
                type="button"
                className="v3-reset-btn"
                onClick={() => handleTabChange("All")}
              >
                RESET TO ALL WORKS
              </button>
            </div>
          ) : (
            <section className="v3-projects-grid">
              {visibleProjects.map((project, idx) => {
                const categories = Array.isArray(project.category)
                  ? project.category
                  : [project.category];

                return (
                  <article
                    className="v3-project-card"
                    key={(project.slug || "") + "-" + idx}
                    onClick={() => handleCardClick(project)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleCardClick(project);
                      }
                    }}
                    aria-label={`${project.title} project`}
                  >
                    {/* MEDIA CONTAINER */}
                    <div className="v3-project-media">
                      {project.type === "video" ? (
                        <video
                          src={project.src}
                          muted
                          loop
                          autoPlay
                          playsInline
                        />
                      ) : (
                        <img
                          src={project.src}
                          alt={project.title}
                          loading="lazy"
                        />
                      )}

                      {/* Corner Link Arrow */}
                      <div className="v3-card-corner-arrow" aria-hidden="true">
                        <ArrowUpRight size={17} />
                      </div>
                    </div>

                    {/* PROJECT META */}
                    <div className="v3-project-meta">
                      <div className="v3-project-category-tag">
                        <span>
                          [ {categories.slice(0, 3).join(" • ")}
                          {categories.length > 3 ? ` +${categories.length - 3}` : ""} ]
                        </span>
                      </div>

                      <h3 className="v3-project-title">{project.title}</h3>

                      {project.client && (
                        <p className="v3-project-client">{project.client}</p>
                      )}
                    </div>
                  </article>
                );
              })}
            </section>
          )}

          {/* =================================================================
              INFINITE SCROLL LOADER
              ================================================================= */}
          <div ref={loaderRef} className="v3-infinite-loader">
            {visibleCount < filteredProjects.length && (
              <div className="v3-loader-spinner" aria-label="Loading more works..." />
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <HomeV3Footer />
    </div>
  );
}

/* ==========================================================================
   PAGE EXPORT WITH SUSPENSE (FOR useSearchParams)
   ========================================================================== */
export default function HomeV3WorkPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", background: "#ffffff" }} />}>
      <HomeV3WorkContent />
    </Suspense>
  );
}
