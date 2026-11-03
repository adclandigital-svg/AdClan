"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Search, X, Sparkles } from "lucide-react";
import HomeV3Navbar from "@/components/home-v3/HomeV3Navbar";
import HomeV3Footer from "@/components/home-v3/HomeV3Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/components/home-v3/homeV3.css";
import "@/components/home-v3/homeV3Sections.css";

const CATEGORIES = [
  "All Work",
  "FMCG",
  "High Jewellery",
  "Celebrity Management",
  "Video Production",
  "Radio",
  "Branding",
  "Influencer",
  "Digital & Creative",
  "Website Development",
];

// Curated 36 real portfolio projects spanning all disciplines and client partners
const PORTFOLIO_PROJECTS = [
  {
    id: "vm-atta",
    title: "Chakki Fresh Atta Heritage Packaging & Rebrand",
    client: "Vikram Mills",
    categories: ["Branding", "FMCG", "Digital & Creative"],
    thumbnail: "/projects/vikram-mills/pr-banner1.png",
    link: "/projects/vikram-mills",
    year: "2024",
  },
  {
    id: "rg-choker",
    title: "22K Royal Gold Bridal Choker & Necklace Suite",
    client: "Right Gold",
    categories: ["High Jewellery", "Branding", "Digital & Creative"],
    thumbnail: "/projects/right-gold/1.jpg",
    link: "/projects/right-gold",
    year: "2024",
  },
  {
    id: "bfm-naved",
    title: "RJ Naved — Voice of Delhi-NCR Primetime Campaign",
    client: "Big FM",
    categories: ["Celebrity Management", "Radio", "Digital & Creative"],
    thumbnail: "/projects/project-thumbnail/RJ NAVED.png",
    link: "/projects/big-fm/celebrity-managements",
    year: "2024",
  },
  {
    id: "rg-shoot",
    title: "Imperial Bridal Jewellery TV Commercial Shoot",
    client: "Right Gold",
    categories: ["High Jewellery", "Video Production", "Celebrity Management"],
    thumbnail: "/projects/right-gold/banner2.png",
    link: "/projects/right-gold",
    year: "2024",
  },
  {
    id: "st-film",
    title: "Smile Train India — Hope Heals Awareness Film",
    client: "Smile Train",
    categories: ["Video Production", "Digital & Creative"],
    thumbnail: "/projects/project-thumbnail/Smile train India.png",
    link: "/projects/smile-train/video-production",
    year: "2024",
  },
  {
    id: "vm-legacy",
    title: "53-Year Milling Legacy & Pan-India Corporate Campaign",
    client: "Vikram Mills",
    categories: ["Branding", "FMCG", "Digital & Creative"],
    thumbnail: "/projects/vikram-mills/Vikram-mills-celeb.png",
    link: "/projects/vikram-mills",
    year: "2024",
  },
  {
    id: "bfm-lucky",
    title: "RJ Lucky — Primetime Drive Radio Show & Jingles",
    client: "Big FM",
    categories: ["Radio", "Celebrity Management"],
    thumbnail: "/projects/project-thumbnail/RJ LUCKY.png",
    link: "/projects/big-fm/celebrity-managements",
    year: "2024",
  },
  {
    id: "cd-retail",
    title: "Clear Dekho — Youth Eyewear Omnichannel Commercial",
    client: "Clear Dekho",
    categories: ["Video Production", "Digital & Creative"],
    thumbnail: "/projects/project-thumbnail/Clear Dekho.png",
    link: "/projects/clear-dekho",
    year: "2024",
  },
  {
    id: "rg-seher",
    title: "Seher Bamba Luxury Polki & Kundan Editorial",
    client: "Right Gold",
    categories: ["High Jewellery", "Celebrity Management", "Digital & Creative"],
    thumbnail: "/projects/right-gold/gallery/2.jpg",
    link: "/projects/right-gold",
    year: "2024",
  },
  {
    id: "rg-solitaire",
    title: "Royal Solitaire & Festive Fine Gold Visual Suite",
    client: "Right Gold",
    categories: ["High Jewellery", "Branding", "Digital & Creative"],
    thumbnail: "/projects/right-gold/banner11.png",
    link: "/projects/right-gold",
    year: "2024",
  },
  {
    id: "ig-basmati",
    title: "India Gate — Heritage Basmati Rice Commercial",
    client: "India Gate",
    categories: ["Video Production", "FMCG", "Branding"],
    thumbnail: "/projects/project-thumbnail/INDIA GATE.png",
    link: "/projects/india_gate/creatives",
    year: "2024",
  },
  {
    id: "bfm-rahul",
    title: "RJ Rahul Makin — Late Night Relationship Show",
    client: "Big FM",
    categories: ["Radio", "Celebrity Management"],
    thumbnail: "/projects/project-thumbnail/RJ RAHUL Makin.png",
    link: "/projects/big-fm/celebrity-managements",
    year: "2024",
  },
  {
    id: "st-radio",
    title: "Smile Train — Pan-India Awareness Audio Jingles",
    client: "Smile Train",
    categories: ["Radio", "Digital & Creative"],
    thumbnail: "/projects/smile_train/smile train.png",
    link: "/projects/smile-train/radio-jingles",
    year: "2024",
  },
  {
    id: "vm-creatives",
    title: "Pure Wholesome Nutrition & Farm Fresh Goodness",
    client: "Vikram Mills",
    categories: ["FMCG", "Digital & Creative"],
    thumbnail: "/projects/vikram-mills/creatives/1.jpg",
    link: "/projects/vikram-mills",
    year: "2024",
  },
  {
    id: "vm-sooji",
    title: "Fine Sooji & Kitchen Staples Packaging Suite",
    client: "Vikram Mills",
    categories: ["Branding", "FMCG"],
    thumbnail: "/projects/vikram-mills/creatives/3.jpg",
    link: "/projects/vikram-mills",
    year: "2024",
  },
  {
    id: "elmas-web",
    title: "Elmas Group — Enterprise Corporate Website & Brand",
    client: "Elmas Group",
    categories: ["Website Development", "Branding", "Digital & Creative"],
    thumbnail: "/projects/website/elmas-group.png",
    link: "/projects/elmas-group",
    year: "2024",
  },
  {
    id: "adore-web",
    title: "Adore Realtech — High-Conversion Real Estate Portal",
    client: "Adore Realtech",
    categories: ["Website Development", "Branding", "Digital & Creative"],
    thumbnail: "/projects/website/adore.png",
    link: "/projects/adore/website",
    year: "2024",
  },
  {
    id: "spring-web",
    title: "Spring Elmas — Luxury Architectural Web Experience",
    client: "Spring Elmas",
    categories: ["Website Development", "Digital & Creative"],
    thumbnail: "/projects/website/springelmas.png",
    link: "/projects/spring-elmas/website",
    year: "2024",
  },
  {
    id: "vm-web",
    title: "Vikram Mills — Interactive Consumer & Corporate Hub",
    client: "Vikram Mills",
    categories: ["Website Development", "FMCG", "Digital & Creative"],
    thumbnail: "/projects/website/vikram-mills.png",
    link: "/projects/vikram-mills/website",
    year: "2024",
  },
  {
    id: "aggarwal-web",
    title: "Aggarwal Heritage — E-Commerce & Retail Portal",
    client: "Aggarwal Heritage",
    categories: ["Website Development", "FMCG", "Digital & Creative"],
    thumbnail: "/projects/website/aggar.png",
    link: "/projects/aggarwal/website",
    year: "2024",
  },
  {
    id: "bfm-tripti",
    title: "RJ Tripti — Morning Fresh Commuter Hour",
    client: "Big FM",
    categories: ["Celebrity Management", "Radio"],
    thumbnail: "/projects/project-thumbnail/RJ TRIPTI.png",
    link: "/projects/big-fm/celebrity-managements",
    year: "2024",
  },
  {
    id: "spring-film",
    title: "Spring Elmas — Ultra Luxury Real Estate Film",
    client: "Spring Elmas",
    categories: ["Video Production", "Branding"],
    thumbnail: "/projects/project-thumbnail/SPRING ELMAS.png",
    link: "/projects/spring-elmas/website",
    year: "2024",
  },
  {
    id: "inf-millind",
    title: "Millind Gaba — Youth Pop Star Brand Campaign",
    client: "Celebrity Partnership",
    categories: ["Celebrity Management", "Influencer", "Video Production"],
    thumbnail: "/projects/project-thumbnail/MILLIAND GABA.png",
    link: "/projects",
    year: "2024",
  },
  {
    id: "inf-bassi",
    title: "Anubhav Singh Bassi — Humour Driven Commercial Video",
    client: "Celebrity Partnership",
    categories: ["Influencer", "Celebrity Management", "Video Production"],
    thumbnail: "/projects/project-thumbnail/BASSI.png",
    link: "/projects",
    year: "2024",
  },
  {
    id: "inf-huma",
    title: "Huma Qureshi — Luxury Fashion & Glamour Campaign",
    client: "Celebrity Partnership",
    categories: ["Celebrity Management", "Influencer", "Branding"],
    thumbnail: "/projects/project-thumbnail/HUMA QURESHI.png",
    link: "/projects",
    year: "2024",
  },
  {
    id: "inf-adah",
    title: "Adah Sharma — High Energy Social Brand Shoot",
    client: "Celebrity Partnership",
    categories: ["Celebrity Management", "Influencer", "Digital & Creative"],
    thumbnail: "/projects/project-thumbnail/ADAH SHARMA.png",
    link: "/projects",
    year: "2024",
  },
  {
    id: "inf-jassie",
    title: "Jassie Gill — Punjabi Music Icon Endorsement",
    client: "Celebrity Partnership",
    categories: ["Celebrity Management", "Influencer", "Video Production"],
    thumbnail: "/projects/project-thumbnail/JASSIE GILL.png",
    link: "/projects",
    year: "2024",
  },
  {
    id: "kayna-beauty",
    title: "Kayna — Youth Cosmetics & Skincare Commercial",
    client: "Kayna Beauty",
    categories: ["Video Production", "Digital & Creative", "Branding"],
    thumbnail: "/projects/project-thumbnail/KAYNA.png",
    link: "/projects",
    year: "2024",
  },
  {
    id: "agropure-ad",
    title: "Agropure — Agricultural Commodity National TVC",
    client: "Agropure",
    categories: ["FMCG", "Video Production", "Branding"],
    thumbnail: "/projects/project-thumbnail/AGROPURE.png",
    link: "/projects",
    year: "2024",
  },
  {
    id: "kb-westwalk",
    title: "KB West Walk — Commercial Mall Brand & Digital",
    client: "KB West Walk",
    categories: ["Branding", "Digital & Creative"],
    thumbnail: "/projects/kb/banner.png",
    link: "/projects/kb-westwalk",
    year: "2024",
  },
  {
    id: "ramji-sons",
    title: "Ramji Sons — Traditional Fabric Heritage Jingles",
    client: "Ramji Sons",
    categories: ["Radio", "Digital & Creative", "Branding"],
    thumbnail: "/projects/project-thumbnail/Ramjisons.png",
    link: "/projects/ramji-sons/radio-jingles",
    year: "2024",
  },
  {
    id: "vm-dalia",
    title: "Nutritious Roasted Dalia Modern Retail Family Pack",
    client: "Vikram Mills",
    categories: ["FMCG", "Branding"],
    thumbnail: "/projects/vikram-mills/creatives/4.jpg",
    link: "/projects/vikram-mills",
    year: "2024",
  },
  {
    id: "ace-spot",
    title: "Teaser Spot ACE — High Impact Suspense Commercial",
    client: "Teaser Spot ACE",
    categories: ["Video Production", "Digital & Creative"],
    thumbnail: "/projects/project-thumbnail/Teaser Spot-ACE.png",
    link: "/projects/ace/radio-jingles",
    year: "2024",
  },
  {
    id: "lead-kidsmate",
    title: "Kidsmate by Leader Cycles — 360° National Brand Launch",
    client: "Leader Cycles",
    categories: ["Branding", "Digital & Creative"],
    thumbnail: "/projects/1.png",
    link: "/projects",
    year: "2024",
  },
  {
    id: "ggit-film",
    title: "GGIT Technical Education — Institutional Film",
    client: "GGIT",
    categories: ["Video Production", "Digital & Creative"],
    thumbnail: "/projects/project-thumbnail/GGIT.png",
    link: "/projects/ggit/video-production",
    year: "2024",
  },
  {
    id: "india-result",
    title: "India Result — National Portal Digital Video Ad",
    client: "India Result",
    categories: ["Video Production", "Digital & Creative"],
    thumbnail: "/projects/project-thumbnail/INDIA RESULT.png",
    link: "/projects/india-result/video-production",
    year: "2024",
  },
];

export default function HomeV3WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Work");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Keep exact Home-v3 body scoped styling
    document.body.classList.add("home-v3-active");
    window.scrollTo({ top: 0, behavior: "instant" });

    return () => {
      document.body.classList.remove("home-v3-active");
    };
  }, []);

  // Filter projects by category and search
  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return PORTFOLIO_PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === "All Work" ||
        project.categories.includes(selectedCategory);

      const matchesSearch =
        query === "" ||
        project.title.toLowerCase().includes(query) ||
        project.client.toLowerCase().includes(query) ||
        project.categories.some((c) => c.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="home-v3-full-flow">
      {/* Navigation */}
      <HomeV3Navbar />

      {/* Main Work Portfolio Content */}
      <main className="v3-work-portfolio-page pt-5 mt-5">
        <div className="container-fluid v3-section-container px-3 px-md-5 px-xl-5 py-5">
          {/* Header */}
          <div className="row mb-5 align-items-end justify-content-between g-4">
            <div className="col-12 col-lg-8">
              <div className="d-flex align-items-center gap-3 mb-3">
                <Link
                  href="/home-v3"
                  className="v3-work-back-link"
                  aria-label="Back to Home V3"
                >
                  <ArrowLeft size={13} />
                  <span>BACK TO HOME</span>
                </Link>
                <span className="text-muted" style={{ opacity: 0.4 }}>•</span>
                <span
                  style={{
                    fontFamily: "Raleway",
                    fontSize: "11px",
                    fontWeight: "800",
                    letterSpacing: "0.24em",
                    color: "#1e498b",
                    textTransform: "uppercase",
                  }}
                >
                  DISCIPLINE ARCHIVE
                </span>
              </div>

              <h1 className="v3-craft-main-heading">
                WORK ARCHIVE
              </h1>

              <p
                className="v3-editorial-subtext mt-3"
                style={{
                  maxWidth: "760px",
                  fontSize: "clamp(15px, 1.2vw, 18px)",
                  lineHeight: "1.65",
                  color: "#4a4a4a",
                }}
              >
                A comprehensive archive of commercial campaigns, high-jewellery photography,
                national broadcast commercials, primetime radio shows, and bespoke digital platforms.
                Every piece engineered for unignorable brand recall.
              </p>
            </div>

            {/* Search Box & Project Count */}
            <div className="col-12 col-lg-4 d-flex flex-column align-items-lg-end gap-3">
              <div className="v3-work-count-pill">
                <Sparkles size={13} />
                <span>
                  SHOWING {filteredProjects.length} OF {PORTFOLIO_PROJECTS.length} WORKS
                </span>
              </div>

              <div className="v3-work-search-box">
                <Search size={15} className="search-icon" />
                <input
                  type="text"
                  className="v3-work-search-input"
                  placeholder="Search client, campaign, discipline..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search work archive"
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="v3-work-search-clear"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* 10 Disciplinary Category Filter Tabs */}
          <div className="v3-craft-filters-bar mb-5 pb-3">
            <div className="v3-craft-filters-track">
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                const count =
                  category === "All Work"
                    ? PORTFOLIO_PROJECTS.length
                    : PORTFOLIO_PROJECTS.filter((p) =>
                        p.categories.includes(category)
                      ).length;

                return (
                  <button
                    key={category}
                    type="button"
                    className={`v3-craft-filter-btn ${isActive ? "is-active" : ""}`}
                    onClick={() => setSelectedCategory(category)}
                    aria-pressed={isActive}
                  >
                    <span>{category}</span>
                    <span className="v3-craft-count-pill">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid of Projects — Ogilvy True 4-Column Continuous Flow Masonry */}
          {filteredProjects.length === 0 ? (
            <div className="v3-work-empty-state">
              <h3>No Works Found</h3>
              <p>
                No campaigns matched your current search <strong>"{searchQuery}"</strong> in the{" "}
                <strong>{selectedCategory}</strong> archive.
              </p>
              <button
                type="button"
                className="v3-craft-filter-btn is-active"
                onClick={() => {
                  setSelectedCategory("All Work");
                  setSearchQuery("");
                }}
              >
                <span>RESET ALL FILTERS</span>
              </button>
            </div>
          ) : (
            <ul className="work__grid js-work-grid">
              {filteredProjects.map((project) => (
                <li key={project.id} className="work__item js-work-item">
                  <Link
                    href={project.link}
                    aria-label={`${project.title} — ${project.client}`}
                  >
                    <div className="work__item-media">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        loading="lazy"
                      />

                      <h3 className="work__item-title">
                        <span>
                          <span className="work__item-headline">{project.title}</span>
                          <span className="work__item-client">{project.client}</span>
                        </span>
                      </h3>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* Bottom Call to Action */}
          <div className="row justify-content-center text-center mt-5 pt-5">
            <div className="col-12 col-md-8">
              <h3
                style={{
                  fontFamily: "Raleway, sans-serif",
                  fontSize: "clamp(24px, 2.5vw, 36px)",
                  fontWeight: "800",
                  letterSpacing: "-0.01em",
                  color: "#111111",
                  marginBottom: "16px",
                }}
              >
                HAVE A PROJECT IN MIND?
              </h3>
              <p
                style={{
                  fontFamily: "Raleway, sans-serif",
                  fontSize: "16px",
                  color: "#555555",
                  marginBottom: "28px",
                }}
              >
                Let us explore how unified strategic thinking and high-voltage creative production can elevate your brand.
              </p>
              <Link href="/home-v3/connect" className="v3-editorial-cta-link">
                <span className="v3-cta-dash" aria-hidden="true" />
                <span>START A CONVERSATION WITH ADCLAN</span>
                <span className="v3-cta-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <HomeV3Footer />
    </div>
  );
}
