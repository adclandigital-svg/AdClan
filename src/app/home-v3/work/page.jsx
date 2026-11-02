"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import HomeV3Navbar from "@/components/home-v3/HomeV3Navbar";
import HomeV3Footer from "@/components/home-v3/HomeV3Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/components/home-v3/homeV3.css";
import "@/components/home-v3/homeV3Sections.css";

const CATEGORIES = [
  "All Work",
  "Celebrity Management",
  "Video Production",
  "Branding",
  "FMCG",
  "Influencer",
  "Digital",
  "Creative",
  "Radio",
  "Website Development",
];

// Rich Portfolio of real projects mix-and-matched across clients and categories
const PORTFOLIO_PROJECTS = [
  {
    id: "vm-atta",
    title: "Chakki Fresh Atta Heritage Packaging & Rebrand",
    client: "Vikram Mills",
    categories: ["Branding", "FMCG", "Creative"],
    thumbnail: "/projects/vikram-mills/pr-banner.png",
    link: "/projects/vikram-mills",
    year: "2024",
    excerpt: "Complete consumer packaging architecture, grain purity positioning, and pan-India retail identity.",
  },
  {
    id: "rg-shoot",
    title: "Imperial Bridal Jewellery TV Commercial Shoot",
    client: "Riot Gold",
    categories: ["Video Production", "Celebrity Management", "Creative"],
    thumbnail: "/projects/right-gold/banner2.png",
    link: "/projects/right-gold",
    year: "2024",
    excerpt: "Cinematic broadcast production showcasing high-jewellery craftsmanship, bridal opulence, and star presence.",
  },
  {
    id: "bfm-naved",
    title: "RJ Naved — Voice of Delhi-NCR Primetime Campaign",
    client: "Big FM",
    categories: ["Celebrity Management", "Radio", "Creative"],
    thumbnail: "/projects/project-thumbnail/RJ NAVED.png",
    link: "/projects/big-fm/celebrity-managements",
    year: "2024",
    excerpt: "Citywide celebrity endorsement, on-air brand integrations, and viral social media engagement.",
  },
  {
    id: "st-film",
    title: "Smile Train India — Hope Heals Awareness Film",
    client: "Smile Train",
    categories: ["Video Production", "Creative"],
    thumbnail: "/projects/project-thumbnail/Smile train India.png",
    link: "/projects/smile-train/video-production",
    year: "2024",
    excerpt: "Emotionally evocative awareness documentary driving donor empathy and healthcare community recall.",
  },
  {
    id: "vm-tvc",
    title: "National Broadcast Television Commercial (TVC)",
    client: "Vikram Mills",
    categories: ["Video Production", "FMCG", "Creative"],
    thumbnail: "/projects/vikram-mills/cb-banner.png",
    link: "/projects/vikram-mills",
    year: "2024",
    excerpt: "Prime-time broadcast film capturing traditional milling heritage, familial warmth, and golden grain purity.",
  },
  {
    id: "bfm-lucky",
    title: "RJ Lucky — Primetime Drive Radio Show & Jingles",
    client: "Big FM",
    categories: ["Radio", "Celebrity Management"],
    thumbnail: "/projects/project-thumbnail/RJ LUCKY.png",
    link: "/projects/big-fm/celebrity-managements",
    year: "2024",
    excerpt: "High-voltage commuter radio show sponsorship, dynamic audio spots, and on-ground activations.",
  },
  {
    id: "cd-retail",
    title: "Clear Dekho — Youth Eyewear Omnichannel Commercial",
    client: "Clear Dekho",
    categories: ["Video Production", "Digital", "Creative"],
    thumbnail: "/projects/project-thumbnail/Clear Dekho.png",
    link: "/projects/clear-dekho",
    year: "2024",
    excerpt: "Fast-paced retail commercial engineered to drive in-store footfalls and digital ecommerce conversion.",
  },
  {
    id: "rg-solitaire",
    title: "Royal Solitaire & Festive Fine Gold Visual Suite",
    client: "Riot Gold",
    categories: ["Branding", "Creative"],
    thumbnail: "/projects/right-gold/banner11.png",
    link: "/projects/right-gold",
    year: "2024",
    excerpt: "Bespoke print catalog, luxury lookbook, and high-fashion digital art direction for festive collections.",
  },
  {
    id: "ig-basmati",
    title: "India Gate — Heritage Basmati Rice Commercial",
    client: "India Gate",
    categories: ["Video Production", "FMCG", "Branding"],
    thumbnail: "/projects/project-thumbnail/INDIA GATE.png",
    link: "/projects/india-gate",
    year: "2024",
    excerpt: "Mouthwatering food cinematography highlighting long-grain perfection and royal culinary hospitality.",
  },
  {
    id: "bfm-rahul",
    title: "RJ Rahul Makin — Late Night Relationship Show",
    client: "Big FM",
    categories: ["Radio", "Celebrity Management"],
    thumbnail: "/projects/project-thumbnail/RJ RAHUL Makin.png",
    link: "/projects/big-fm/celebrity-managements",
    year: "2024",
    excerpt: "Late-night conversational radio flagship amplified across digital podcasts and corporate brand segments.",
  },
  {
    id: "st-radio",
    title: "Smile Train — Pan-India Awareness Audio Jingles",
    client: "Smile Train",
    categories: ["Radio", "Creative"],
    thumbnail: "/projects/smile_train/smile train.png",
    link: "/projects/smile-train/radio-jingles",
    year: "2024",
    excerpt: "Heart-touching radio jingles recorded in regional languages to reach underserved families across India.",
  },
  {
    id: "vm-sooji",
    title: "Fine Sooji & Kitchen Staples Packaging Suite",
    client: "Vikram Mills",
    categories: ["Branding", "FMCG"],
    thumbnail: "/projects/vikram-mills/creatives/3.jpg",
    link: "/projects/vikram-mills",
    year: "2024",
    excerpt: "Cohesive packaging identity across daily pantry essentials ensuring clear shelf demarcation.",
  },
  {
    id: "elmas-web",
    title: "Elmas Group — Enterprise Corporate Website & Brand",
    client: "Elmas Group",
    categories: ["Website Development", "Branding", "Digital"],
    thumbnail: "/projects/website/elmas.png",
    link: "/projects/elmas-group",
    year: "2024",
    excerpt: "Responsive high-performance corporate web portal with interactive portfolio and investor dashboards.",
  },
  {
    id: "bfm-tripti",
    title: "RJ Tripti — Morning Fresh Commuter Hour",
    client: "Big FM",
    categories: ["Celebrity Management", "Radio"],
    thumbnail: "/projects/project-thumbnail/RJ TRIPTI.png",
    link: "/projects/big-fm/celebrity-managements",
    year: "2024",
    excerpt: "Engaging morning radio drive engaging listeners with lively brand segments and live contests.",
  },
  {
    id: "spring-film",
    title: "Spring Elmas — Ultra Luxury Real Estate Film",
    client: "Spring Elmas",
    categories: ["Video Production", "Branding"],
    thumbnail: "/projects/project-thumbnail/SPRING ELMAS.png",
    link: "/projects/spring-elmas",
    year: "2024",
    excerpt: "CGI-integrated architectural lifestyle film unveiling ultra-premium residential towers.",
  },
  {
    id: "inf-millind",
    title: "Millind Gaba — Youth Pop Star Brand Campaign",
    client: "Celebrity Partnership",
    categories: ["Celebrity Management", "Influencer", "Video Production"],
    thumbnail: "/projects/project-thumbnail/miliand.png",
    link: "/projects",
    year: "2024",
    excerpt: "Music star endorsement and influencer video series generating viral reach across Gen-Z audiences.",
  },
  {
    id: "inf-bassi",
    title: "Anubhav Singh Bassi — Humour Driven Commercial Video",
    client: "Celebrity Partnership",
    categories: ["Influencer", "Celebrity Management", "Video Production"],
    thumbnail: "/projects/project-thumbnail/bassi.png",
    link: "/projects",
    year: "2024",
    excerpt: "Relatable stand-up brand integration driving exponential organic sharing and recall on digital channels.",
  },
  {
    id: "inf-huma",
    title: "Huma Qureshi — Luxury Fashion & Glamour Campaign",
    client: "Celebrity Partnership",
    categories: ["Celebrity Management", "Influencer", "Branding"],
    thumbnail: "/projects/project-thumbnail/huma.png",
    link: "/projects",
    year: "2024",
    excerpt: "Bollywood star endorsement shoot establishing high-fashion credentials and premium brand authority.",
  },
  {
    id: "inf-adah",
    title: "Adah Sharma — High Energy Social Brand Shoot",
    client: "Celebrity Partnership",
    categories: ["Celebrity Management", "Influencer", "Digital"],
    thumbnail: "/projects/project-thumbnail/adah.png",
    link: "/projects",
    year: "2024",
    excerpt: "Multi-platform video activations delivering authentic influencer resonance and brand advocacy.",
  },
  {
    id: "agropure-ad",
    title: "Agropure — Agricultural Commodity National TVC",
    client: "Agropure",
    categories: ["FMCG", "Video Production", "Branding"],
    thumbnail: "/projects/project-thumbnail/AGROPURE.png",
    link: "/projects/agropure",
    year: "2024",
    excerpt: "Heartland television commercial celebrating agricultural purity, farmer commitment, and healthy families.",
  },
  {
    id: "kb-westwalk",
    title: "KB West Walk — Commercial Mall Brand & Digital",
    client: "KB West Walk",
    categories: ["Branding", "Digital", "Creative"],
    thumbnail: "/projects/project-thumbnail/kb.png",
    link: "/projects/kb-westwalk",
    year: "2024",
    excerpt: "Identity suite and digital marketing ecosystem driving retail tenant bookings and footfall.",
  },
  {
    id: "vm-dalia",
    title: "Nutritious Roasted Dalia Modern Retail Family Pack",
    client: "Vikram Mills",
    categories: ["FMCG", "Branding"],
    thumbnail: "/projects/vikram-mills/creatives/4.jpg",
    link: "/projects/vikram-mills",
    year: "2024",
    excerpt: "Modern health-forward packaging communicating high fiber, heart health, and traditional roasting.",
  },
  {
    id: "ace-spot",
    title: "Teaser Spot ACE — High Impact Suspense Commercial",
    client: "Teaser Spot ACE",
    categories: ["Video Production", "Creative"],
    thumbnail: "/projects/project-thumbnail/Teaser Spot-ACE.png",
    link: "/projects/teaser-spot-ace",
    year: "2024",
    excerpt: "Mysterious teaser spot broadcast on national channels building fever-pitch curiosity ahead of launch.",
  },
  {
    id: "lead-kidsmate",
    title: "Kidsmate by Leader Cycles — 360° National Brand Launch",
    client: "Leader Cycles",
    categories: ["Branding", "Digital", "Creative"],
    thumbnail: "/projects/1.png",
    link: "/projects",
    year: "2024",
    excerpt: "Comprehensive brand positioning, packaging, and digital launch capturing active young families.",
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
  const filteredProjects = PORTFOLIO_PROJECTS.filter((project) => {
    const matchesCategory =
      selectedCategory === "All Work" ||
      project.categories.includes(selectedCategory);

    const matchesSearch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.categories.some((c) =>
        c.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

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
                  className="d-inline-flex align-items-center gap-2 text-decoration-none text-muted"
                  style={{ fontFamily: "Raleway, sans-serif", fontSize: "12px", fontWeight: "700", letterSpacing: "0.14em" }}
                >
                  <ArrowLeft size={14} />
                  <span>BACK TO HOME-V3</span>
                </Link>
                <span className="text-muted">•</span>
                <span
                  style={{ fontFamily: "Raleway, sans-serif", fontSize: "12px", fontWeight: "700", letterSpacing: "0.18em", color: "#666666" }}
                >
                  CATEGORY ARCHIVE
                </span>
              </div>

              <h1 className="v3-craft-heading" style={{ fontSize: "clamp(40px, 4.5vw, 72px)" }}>
                WORK PORTFOLIO
              </h1>

              <p className="v3-editorial-subtext">
                Explore our complete archive of commercial campaigns, packaging systems, star endorsements,
                and digital platforms. Filtered strictly by creative disciplines and delivered with unignorable impact.
              </p>
            </div>

            <div className="col-12 col-lg-4 text-lg-end">
              <span
                style={{
                  fontFamily: "Raleway, sans-serif",
                  fontSize: "14px",
                  fontWeight: "700",
                  letterSpacing: "0.12em",
                  color: "#111111",
                }}
              >
                SHOWING {filteredProjects.length} OF {PORTFOLIO_PROJECTS.length} PROJECTS
              </span>
            </div>
          </div>

          {/* 10 Disciplinary Category Filter Tabs */}
          <div className="v3-craft-filters-bar mb-5 pb-2">
            <div className="v3-craft-filters-track flex-wrap gap-2" style={{ overflowX: "auto" }}>
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
                    style={{ whiteSpace: "nowrap" }}
                  >
                    <span>{category}</span>
                    <span className="v3-craft-count-pill">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid of Projects (Ogilvy Luxury Presentation) */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-5 my-5">
              <h3 style={{ fontFamily: "Raleway, sans-serif", fontWeight: "700" }}>
                No projects found in this category.
              </h3>
              <p className="text-muted">Try selecting "All Work" to view our complete archive.</p>
              <button
                type="button"
                className="v3-craft-filter-btn is-active mt-3"
                onClick={() => setSelectedCategory("All Work")}
              >
                <span>RESET TO ALL WORK</span>
              </button>
            </div>
          ) : (
            <div className="row g-4 v3-craft-grid">
              {filteredProjects.map((project) => (
                <div key={project.id} className="col-12 col-md-6 col-lg-4">
                  <Link
                    href={project.link}
                    className="v3-craft-card h-100 v3-card-logo-reveal"
                    aria-label={`${project.client} - ${project.title}`}
                  >
                    {/* Media Frame with Consistent Aspect Ratio */}
                    <div className="v3-craft-media-frame">
                      {/* Actual Project Thumbnail */}
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="v3-craft-creative-img"
                        loading="lazy"
                      />

                      {/* Corner Badge */}
                      <div className="v3-craft-corner-badge">
                        <span>{project.categories[0]}</span>
                      </div>

                      {/* Ogilvy Luxury Hover Effect */}
                      <div className="v3-craft-hover-overlay">
                        <div className="v3-craft-hover-content">
                          <div className="v3-craft-hover-meta">
                            <span className="v3-craft-client-eyebrow">
                              {project.client}
                            </span>
                            <span className="v3-craft-discipline-pill">
                              {project.year}
                            </span>
                          </div>

                          <h4 className="v3-craft-hover-title">{project.title}</h4>

                          <p
                            style={{
                              fontFamily: "Raleway, sans-serif",
                              fontSize: "13.5px",
                              lineHeight: "1.5",
                              color: "rgba(255, 255, 255, 0.85)",
                              margin: "8px 0 16px 0",
                            }}
                          >
                            {project.excerpt}
                          </p>

                          <div className="v3-craft-hover-cta">
                            <span>VIEW COMPLETE WORK</span>
                            <ArrowUpRight size={14} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Editorial Caption Strip Below Card */}
                    <div className="v3-craft-caption">
                      <div className="v3-craft-caption-top">
                        <span className="v3-craft-meta-category">
                          {project.categories.join(" • ")}
                        </span>
                        <span className="v3-craft-meta-client">
                          {project.client}
                        </span>
                      </div>

                      <h3 className="v3-craft-card-headline">{project.title}</h3>
                      <p className="v3-craft-card-excerpt">{project.excerpt}</p>

                      <div className="v3-craft-card-footer">
                        <div className="v3-craft-tags-row">
                          {project.categories.map((cat, idx) => (
                            <span key={idx} className="v3-craft-tag-pill">
                              {cat}
                            </span>
                          ))}
                        </div>

                        <div className="v3-craft-view-link">
                          <span>EXPLORE</span>
                          <ArrowUpRight size={13} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
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
