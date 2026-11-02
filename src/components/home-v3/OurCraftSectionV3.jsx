"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, Star } from "lucide-react";

const CRAFT_PROJECTS = [
  // =========================================================================
  // 27 TOTAL PROJECTS (EXACTLY 9 VIKRAM MILLS, 9 RIGHT GOLD, 9 BIG FM)
  // Perfectly interleaved across 3 slides of 9 cards each for "All Work"
  // =========================================================================

  // --- SLIDE 1 MIX (Cards 1-9) ---
  // 1. Vikram Mills (1/9)
  {
    id: "vm-1",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "FMCG Branding & Packaging",
    title: "Chakki Fresh Atta Heritage Packaging & Rebrand",
    excerpt: "Modern consumer packaging architecture and brand identity celebrating Indian kitchen purity.",
    image: "/projects/vikram-mills/pr-banner.png",
    clientLogo: "/projects/vikram-mills/logo1.jpg",
    logoAlt: "Vikram Mills Logo",
    link: "/projects/vikram-mills",
    tags: ["Packaging Design", "FMCG Brand", "Heritage"],
    badgeText: "HERITAGE FMCG",
  },
  // 2. Right Gold (1/9)
  {
    id: "rg-1",
    client: "Right Gold",
    clientId: "right-gold",
    category: "High Jewellery & TVC",
    title: "Imperial Bridal Jewellery Commercial Shoot",
    excerpt: "Cinematic broadcast film and high-concept campaign for Right Gold luxury bridal collection.",
    image: "/projects/right-gold/banner2.png",
    clientLogo: "/projects/right-gold/logo.png",
    logoAlt: "Right Gold Logo",
    link: "/projects/right-gold",
    tags: ["Commercial Shoot", "High Jewellery", "TVC Film"],
    badgeText: "LUXURY TVC",
  },
  // 3. Big FM (1/9)
  {
    id: "bfm-1",
    client: "Big FM",
    clientId: "big-fm",
    category: "Celebrity & Radio Management",
    title: "RJ Naved — The Voice of Delhi-NCR Primetime Campaign",
    excerpt: "Massive citywide celebrity endorsement and experiential radio campaign driving millions of listeners.",
    image: "/projects/project-thumbnail/RJ NAVED.png",
    clientLogo: "/projects/big-fm/logo.png",
    logoAlt: "BIG FM Logo",
    link: "/projects/big-fm/celebrity-managements",
    tags: ["RJ Naved", "Radio Star", "Celebrity Campaign"],
    badgeText: "CELEBRITY STAR",
    celebrityName: "RJ Naved",
  },

  // 4. Vikram Mills (2/9)
  {
    id: "vm-2",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "Commercial Advertising",
    title: "National Television Commercial & Digital TVC",
    excerpt: "Broadcast TVC capturing warm family moments, heritage milling purity, and pan-India trust.",
    image: "/projects/vikram-mills/creatives/2.jpg",
    clientLogo: "/projects/vikram-mills/logo1.jpg",
    logoAlt: "Vikram Mills Logo",
    link: "/projects/vikram-mills",
    tags: ["TV Commercial", "Broadcast Media", "FMCG"],
    badgeText: "TVC CAMPAIGN",
  },
  // 5. Right Gold (2/9)
  {
    id: "rg-2",
    client: "Right Gold",
    clientId: "right-gold",
    category: "Luxury Brand Identity",
    title: "Royal Solitaire & Festive Gold Visual Suite",
    excerpt: "Comprehensive editorial visual identity, print catalog, and luxury digital media assets.",
    image: "/projects/right-gold/banner11.png",
    clientLogo: "/projects/right-gold/logo.png",
    logoAlt: "Right Gold Logo",
    link: "/projects/right-gold",
    tags: ["Print Suite", "Art Direction", "Fine Gold"],
    badgeText: "FINE JEWELLERY",
  },
  // 6. Big FM (2/9)
  {
    id: "bfm-2",
    client: "Big FM",
    clientId: "big-fm",
    category: "Radio Jingles & Shows",
    title: "RJ Lucky — Primetime Drive Radio Show",
    excerpt: "Dynamic radio show branding, on-air client sponsorship integrations, and live digital activations.",
    image: "/projects/project-thumbnail/RJ LUCKY.png",
    clientLogo: "/projects/big-fm/logo.png",
    logoAlt: "BIG FM Logo",
    link: "/projects/big-fm/celebrity-managements",
    tags: ["RJ Lucky", "Drive Show", "Radio Sponsorship"],
    badgeText: "RADIO SHOW",
    celebrityName: "RJ Lucky",
  },

  // 7. Vikram Mills (3/9)
  {
    id: "vm-3",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "Masterbrand Strategy",
    title: "53-Year Milling Legacy & Pan-India Corporate Campaign",
    excerpt: "Large-scale masterbrand corporate campaign marking half a century of milling leadership.",
    image: "/projects/vikram-mills/Vikram mills Banner.png",
    clientLogo: "/projects/vikram-mills/logo1.jpg",
    logoAlt: "Vikram Mills Logo",
    link: "/projects/vikram-mills",
    tags: ["Brand Strategy", "Corporate Identity", "Leadership"],
    badgeText: "CORPORATE",
  },
  // 8. Right Gold (3/9)
  {
    id: "rg-3",
    client: "Right Gold",
    clientId: "right-gold",
    category: "Bridal Editorial",
    title: "Heritage Polki & Kundan Royal Bridal Lookbook",
    excerpt: "Opulent royal bridal visual campaign featuring handcrafted polki necklaces and heritage jadau craftsmanship.",
    image: "/projects/right-gold/1.jpg",
    clientLogo: "/projects/right-gold/logo.png",
    logoAlt: "Right Gold Logo",
    link: "/projects/right-gold",
    tags: ["Polki Heritage", "Bridal Lookbook", "Kundan"],
    badgeText: "ROYAL BRIDAL",
  },
  // 9. Big FM (3/9)
  {
    id: "bfm-3",
    client: "Big FM",
    clientId: "big-fm",
    category: "Radio Jingles & Shows",
    title: "RJ Rahul Makin — Late Night Relationship Show",
    excerpt: "Late-night flagship radio show amplification, digital podcasts, and emotional brand association campaigns.",
    image: "/projects/project-thumbnail/RJ RAHUL Makin.png",
    clientLogo: "/projects/big-fm/logo.png",
    logoAlt: "BIG FM Logo",
    link: "/projects/big-fm/celebrity-managements",
    tags: ["RJ Rahul Makin", "Midnight Talk", "Brand Integration"],
    badgeText: "RADIO SHOW",
    celebrityName: "RJ Rahul Makin",
  },

  // --- SLIDE 2 MIX (Cards 10-18) ---
  // 10. Vikram Mills (4/9)
  {
    id: "vm-4",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "Celebrity Endorsement",
    title: "Star Celebrity Campaign & Festive Brand Film",
    excerpt: "High-impact celebrity brand ambassador campaign driving consumer loyalty and premium recall.",
    image: "/projects/vikram-mills/Vikram-mills-celeb.png",
    clientLogo: "/projects/vikram-mills/logo1.jpg",
    logoAlt: "Vikram Mills Logo",
    link: "/projects/vikram-mills",
    tags: ["Celebrity Face", "Festive TVC", "Consumer Trust"],
    badgeText: "CELEBRITY TVC",
  },
  // 11. Right Gold (4/9)
  {
    id: "rg-4",
    client: "Right Gold",
    clientId: "right-gold",
    category: "Haute Joaillerie",
    title: "Festive Bridal Haute Joaillerie Visual Campaign",
    excerpt: "High-glamour festive couture jewellery photography showcasing intricate yellow gold and gemstone bridal sets.",
    image: "/projects/right-gold/a2.JPG",
    clientLogo: "/projects/right-gold/logo.png",
    logoAlt: "Right Gold Logo",
    link: "/projects/right-gold",
    tags: ["Haute Joaillerie", "Festive Sets", "Editorial"],
    badgeText: "GOLD SUITE",
  },
  // 12. Big FM (4/9)
  {
    id: "bfm-4",
    client: "Big FM",
    clientId: "big-fm",
    category: "Morning Drive & Vibe",
    title: "RJ Tripti — Breakfast Morning City Show",
    excerpt: "High-octane morning rush show branding connecting local advertisers with affluent commuter demographics.",
    image: "/projects/project-thumbnail/RJ TRIPTI.png",
    clientLogo: "/projects/big-fm/logo.png",
    logoAlt: "BIG FM Logo",
    link: "/projects/big-fm/celebrity-managements",
    tags: ["RJ Tripti", "Morning Show", "Commuter Audience"],
    badgeText: "MORNING SHOW",
    celebrityName: "RJ Tripti",
  },

  // 13. Vikram Mills (5/9)
  {
    id: "vm-5",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "FMCG Retail Packaging",
    title: "Premium Maida & Fine Flour Retail Consumer Pack",
    excerpt: "High-barrier consumer retail pouch design reflecting culinary perfection and pure wheat freshness.",
    image: "/projects/vikram-mills/1.png",
    clientLogo: "/projects/vikram-mills/logo1.jpg",
    logoAlt: "Vikram Mills Logo",
    link: "/projects/vikram-mills",
    tags: ["Retail Pack", "Fine Flour", "Shelf Visibility"],
    badgeText: "RETAIL PACKAGING",
  },
  // 14. Right Gold (5/9)
  {
    id: "rg-5",
    client: "Right Gold",
    clientId: "right-gold",
    category: "Contemporary Fine Gold",
    title: "Contemporary Lightweight Rose Gold Collection",
    excerpt: "Minimalist everyday luxury jewellery branding targeted at modern urban women and young professionals.",
    image: "/projects/right-gold/a3.JPG",
    clientLogo: "/projects/right-gold/logo.png",
    logoAlt: "Right Gold Logo",
    link: "/projects/right-gold",
    tags: ["Rose Gold", "Everyday Luxury", "Modern"],
    badgeText: "CONTEMPORARY",
  },
  // 15. Big FM (5/9)
  {
    id: "bfm-5",
    client: "Big FM",
    clientId: "big-fm",
    category: "Grand Awards & Media",
    title: "BIG Impact Awards Nationwide Gala & Media Activation",
    excerpt: "Pan-India award property honoring visionary entrepreneurs, celebrities, and industry changemakers.",
    image: "/projects/big-fm/banner.png",
    clientLogo: "/projects/big-fm/logo.png",
    logoAlt: "BIG FM Logo",
    link: "/projects/big-fm/celebrity-managements",
    tags: ["Impact Awards", "Gala Event", "National PR"],
    badgeText: "GALA AWARDS",
  },

  // 16. Vikram Mills (6/9)
  {
    id: "vm-6",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "Commercial Bulk Packaging",
    title: "Commercial Food Service 30KG Rice Pack Architecture",
    excerpt: "Industrial-grade packaging design for bulk food service supply chains and national distribution.",
    image: "/projects/vikram-mills/web banner 30 kg rice 2.png",
    clientLogo: "/projects/vikram-mills/logo1.jpg",
    logoAlt: "Vikram Mills Logo",
    link: "/projects/vikram-mills",
    tags: ["Bulk Packaging", "B2B Supply", "Distribution"],
    badgeText: "B2B PACKAGING",
  },
  // 17. Right Gold (6/9)
  {
    id: "rg-6",
    client: "Right Gold",
    clientId: "right-gold",
    category: "Temple Heritage",
    title: "Temple Jewellery Grand Legacy Collection",
    excerpt: "Sacred South Indian temple motifs reinterpreted with modern goldsmith artistry and divine aesthetics.",
    image: "/projects/right-gold/a4.JPG",
    clientLogo: "/projects/right-gold/logo.png",
    logoAlt: "Right Gold Logo",
    link: "/projects/right-gold",
    tags: ["Temple Gold", "Heritage Art", "Legacy"],
    badgeText: "TEMPLE GOLD",
  },
  // 18. Big FM (6/9)
  {
    id: "bfm-6",
    client: "Big FM",
    clientId: "big-fm",
    category: "Celebrity Management",
    title: "Adah Sharma — Big Impact Awards Star Coordination",
    excerpt: "Red carpet celebrity handling, stage appearance management, and nationwide entertainment PR.",
    image: "/projects/project-thumbnail/ADAH SHARMA.png",
    clientLogo: "/projects/big-fm/logo.png",
    logoAlt: "BIG FM Logo",
    link: "/projects/big-fm/celebrity-managements",
    tags: ["Adah Sharma", "Red Carpet", "Star Handling"],
    badgeText: "CELEBRITY STAR",
    celebrityName: "Adah Sharma",
  },

  // --- SLIDE 3 MIX (Cards 19-27) ---
  // 19. Vikram Mills (7/9)
  {
    id: "vm-7",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "FMCG Branding & Packaging",
    title: "Whole Wheat Suji & Sooji Visual Identity",
    excerpt: "Vibrant yellow kitchen staple packaging crafted to dominate modern trade and mom-and-pop stores.",
    image: "/projects/vikram-mills/2.png",
    clientLogo: "/projects/vikram-mills/logo1.jpg",
    logoAlt: "Vikram Mills Logo",
    link: "/projects/vikram-mills",
    tags: ["Suji Pack", "Modern Trade", "Shelf Impact"],
    badgeText: "FMCG PACK",
  },
  // 20. Right Gold (7/9)
  {
    id: "rg-7",
    client: "Right Gold",
    clientId: "right-gold",
    category: "Artisanal Film",
    title: "Master Goldsmith At Work — Brand Heritage Film",
    excerpt: "Behind-the-scenes documentary cinematography capturing the generational craftsmanship behind each ornament.",
    image: "/projects/right-gold/gallery/1.jpg",
    clientLogo: "/projects/right-gold/logo.png",
    logoAlt: "Right Gold Logo",
    link: "/projects/right-gold",
    tags: ["Craftsmanship", "Heritage Film", "Atelier"],
    badgeText: "BRAND FILM",
  },
  // 21. Big FM (7/9)
  {
    id: "bfm-7",
    client: "Big FM",
    clientId: "big-fm",
    category: "Celebrity Endorsement",
    title: "Huma Qureshi — Luxury Brand Feature & Media Event",
    excerpt: "A-list Bollywood star coordination, brand sponsorship integration, and multi-city digital buzz.",
    image: "/projects/project-thumbnail/HUMA QURESHI.png",
    clientLogo: "/projects/big-fm/logo.png",
    logoAlt: "BIG FM Logo",
    link: "/projects/big-fm/celebrity-managements",
    tags: ["Huma Qureshi", "Bollywood", "VIP Handling"],
    badgeText: "BOLLYWOOD STAR",
    celebrityName: "Huma Qureshi",
  },

  // 22. Vikram Mills (8/9)
  {
    id: "vm-8",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "Health & Nutrition Range",
    title: "Multigrain & Diabetic-Friendly Flour Architecture",
    excerpt: "Contemporary health-forward packaging communicating nutrition, dietary fiber, and pure wellness.",
    image: "/projects/vikram-mills/3.png",
    clientLogo: "/projects/vikram-mills/logo1.jpg",
    logoAlt: "Vikram Mills Logo",
    link: "/projects/vikram-mills",
    tags: ["Multigrain", "Health Range", "Wellness"],
    badgeText: "HEALTH FOOD",
  },
  // 23. Right Gold (8/9)
  {
    id: "rg-8",
    client: "Right Gold",
    clientId: "right-gold",
    category: "Precious Diamonds",
    title: "Eternity Diamond Solitaire & Engagement Campaign",
    excerpt: "Ultra-high-definition macro jewellery imagery highlighting certified solitaire diamonds and rare clarity.",
    image: "/projects/right-gold/gallery/2.jpg",
    clientLogo: "/projects/right-gold/logo.png",
    logoAlt: "Right Gold Logo",
    link: "/projects/right-gold",
    tags: ["Diamond Solitaire", "Engagement", "Macro Film"],
    badgeText: "DIAMOND SUITE",
  },
  // 24. Big FM (8/9)
  {
    id: "bfm-8",
    client: "Big FM",
    clientId: "big-fm",
    category: "Experiential Comedy Tour",
    title: "Anubhav Singh Bassi — Live Arena Tour & Radio Blitz",
    excerpt: "Massive auditorium comedy tour partnership, on-air ticket drops, and viral social clips.",
    image: "/projects/project-thumbnail/BASSI.png",
    clientLogo: "/projects/big-fm/logo.png",
    logoAlt: "BIG FM Logo",
    link: "/projects/big-fm/celebrity-managements",
    tags: ["Bassi", "Standup Comedy", "Arena Tour"],
    badgeText: "COMEDY STAR",
    celebrityName: "Anubhav Singh Bassi",
  },

  // 25. Vikram Mills (9/9)
  {
    id: "vm-9",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "National Brand Campaign",
    title: "Purity from the Ground Up — Integrated Media Suite",
    excerpt: "Omnichannel brand rollout across print advertising, outdoor hoardings, and digital display assets.",
    image: "/projects/project-thumbnail/VIKRAM MILLS.png",
    clientLogo: "/projects/vikram-mills/logo1.jpg",
    logoAlt: "Vikram Mills Logo",
    link: "/projects/vikram-mills",
    tags: ["Omnichannel", "Print Suite", "Brand Presence"],
    badgeText: "INTEGRATED",
  },
  // 26. Right Gold (9/9)
  {
    id: "rg-9",
    client: "Right Gold",
    clientId: "right-gold",
    category: "Retail Experience",
    title: "Flagship Luxury Jewellery In-Store Showroom Experience",
    excerpt: "Ambient retail visual merchandising, premium vitrine displays, and bespoke customer consultation suite.",
    image: "/projects/right-gold/gallery/3.jpg",
    clientLogo: "/projects/right-gold/logo.png",
    logoAlt: "Right Gold Logo",
    link: "/projects/right-gold",
    tags: ["Retail Branding", "Showroom", "Luxury VM"],
    badgeText: "RETAIL ARCHITECTURE",
  },
  // 27. Big FM (9/9)
  {
    id: "bfm-9",
    client: "Big FM",
    clientId: "big-fm",
    category: "Musical Radio Tour",
    title: "Jassie Gill — Live Musical Radio Showcase & Concert",
    excerpt: "Star music concert series, acoustic radio room sessions, and Youth Festival activations across North India.",
    image: "/projects/project-thumbnail/JASSIE GILL.png",
    clientLogo: "/projects/big-fm/logo.png",
    logoAlt: "BIG FM Logo",
    link: "/projects/big-fm/celebrity-managements",
    tags: ["Jassie Gill", "Live Music", "Youth Concert"],
    badgeText: "MUSIC STAR",
    celebrityName: "Jassie Gill",
  },
];

const FILTERS = [
  { id: "all", label: "All Work" },
  { id: "vikram-mills", label: "Vikram Mills" },
  { id: "right-gold", label: "Right Gold" },
  { id: "big-fm", label: "Big FM" },
];

const CARDS_PER_SLIDE = 9; // 3x3 Grid per slide on home page

export default function OurCraftSectionV3() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Filter projects according to client tab
  const filteredProjects =
    activeFilter === "all"
      ? CRAFT_PROJECTS
      : CRAFT_PROJECTS.filter((p) => p.clientId === activeFilter);

  // Total slides for current filter (9 cards per slide)
  const totalSlides = Math.max(1, Math.ceil(filteredProjects.length / CARDS_PER_SLIDE));

  // Reset to first slide whenever tab changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeFilter]);

  // Ensure currentSlide is within valid range
  const safeSlideIndex = Math.min(currentSlide, totalSlides - 1);

  // Current 9-card window
  const currentSlideCards = filteredProjects.slice(
    safeSlideIndex * CARDS_PER_SLIDE,
    (safeSlideIndex + 1) * CARDS_PER_SLIDE
  );

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  return (
    <section className="v3-craft-section" id="craft" data-anchor="work">
      <div className="container-fluid v3-section-container px-3 px-md-5 px-xl-5">
        {/* =====================================================================
            SECTION HEADER (CLEAN LIVE WEBSITE RALWAY TYPOGRAPHY — PURE WHITE THEME)
            Heading: exactly "OUR CRAFT", tagline removed as instructed
            ===================================================================== */}
        <div className="row mb-4 align-items-end justify-content-between g-4">
          <div className="col-12 col-lg-8">
            <div className="v3-section-eyebrow-wrap">
              <span className="v3-eyebrow-dash" />
              <span className="v3-section-eyebrow">WORK SHOWCASE</span>
            </div>

            <h2 className="v3-craft-heading">
              OUR CRAFT
            </h2>

            <p className="v3-editorial-subtext">
              We engineer iconic brand worlds across television, retail shelves, and digital arenas.
              From national broadcast commercials to FMCG packaging and star celebrity handling,
              explore our complete portfolio of client transformations.
            </p>
          </div>

          <div className="col-12 col-lg-4 text-lg-end">
            <Link href="/home-v3/work" className="v3-craft-all-link">
              <span>EXPLORE FULL ARCHIVE</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* =====================================================================
            CLIENT FILTER TABS (All Work, Vikram Mills, Right Gold, Big FM)
            ===================================================================== */}
        <div className="v3-craft-filters-bar mb-4">
          <div className="v3-craft-filters-track">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter.id;
              const count =
                filter.id === "all"
                  ? CRAFT_PROJECTS.length
                  : CRAFT_PROJECTS.filter((p) => p.clientId === filter.id).length;

              return (
                <button
                  key={filter.id}
                  type="button"
                  className={`v3-craft-filter-btn ${isActive ? "is-active" : ""}`}
                  onClick={() => setActiveFilter(filter.id)}
                  aria-pressed={isActive}
                >
                  <span>{filter.label}</span>
                  <span className="v3-craft-count-pill">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Carousel Slide Indicators and Controls (If multiple slides exist) */}
          {totalSlides > 1 && (
            <div className="v3-craft-carousel-nav">
              <div className="v3-craft-slide-counter">
                <b>{String(safeSlideIndex + 1).padStart(2, "0")}</b>
                <span className="v3-counter-slash">/</span>
                <span>{String(totalSlides).padStart(2, "0")}</span>
              </div>

              <div className="v3-craft-carousel-arrows">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="v3-craft-nav-arrow"
                  aria-label="Previous Slide of 9 Cards"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="v3-craft-nav-arrow"
                  aria-label="Next Slide of 9 Cards"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* =====================================================================
            3X3 GRID CAROUSEL STAGE (MAX 9 CARDS PER SLIDE ON HOME PAGE)
            - Category-based filtering with real creative thumbnails
            - Mix-and-match presentation in All Work
            - Ogilvy-inspired luxury hover effect & direct project link
            ===================================================================== */}
        <div className="v3-craft-carousel-viewport">
          <div className="row g-4 v3-craft-grid">
            {currentSlideCards.map((project) => {
              const isLogoReveal = project.effectType === "logo-reveal";
              const isCelebrity = project.effectType === "celebrity-snapshot";

              return (
                <div key={project.id} className="col-12 col-md-6 col-lg-4">
                  <Link
                    href={project.link}
                    className={`v3-craft-card h-100 ${
                      isLogoReveal ? "v3-card-logo-reveal" : ""
                    } ${isCelebrity ? "v3-card-celebrity" : ""}`}
                    aria-label={`${project.client} - ${project.title}`}
                  >
                    {/* Media Frame with Consistent 16:11 Aspect Ratio */}
                    <div className="v3-craft-media-frame">
                      {/* Default View: High-Resolution Real Campaign Creative / Snapshot */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="v3-craft-creative-img"
                        loading="lazy"
                      />

                      {/* Subtle Corner Badge for Category */}
                      <div className="v3-craft-corner-badge">
                        <span>{project.badgeText}</span>
                      </div>

                      {/* HOVER EFFECT LAYER: Smooth Thumbnail-to-Client-Logo & Details */}
                      <div className="v3-craft-hover-overlay">
                        <div className="v3-craft-hover-content">
                          {/* Client Official Logo Circle (Reveals on hover) */}
                          <div className="v3-craft-logo-circle">
                            <img
                              src={project.clientLogo}
                              alt={project.logoAlt}
                              className="v3-craft-client-logo-img"
                              loading="lazy"
                            />
                          </div>

                          {/* Client Name & Category Indicator */}
                          <div className="v3-craft-hover-meta">
                            <span className="v3-craft-client-eyebrow">
                              {project.client}
                            </span>
                            <span className="v3-craft-discipline-pill">
                              {project.category}
                            </span>
                          </div>

                          {/* Project Title on Hover */}
                          <h4 className="v3-craft-hover-title">{project.title}</h4>

                          {/* Celebrity tag if applicable */}
                          {project.celebrityName && (
                            <div className="v3-craft-celeb-tag">
                              <Star size={13} fill="#d4af37" stroke="#d4af37" />
                              <span>{project.celebrityName}</span>
                            </div>
                          )}

                          {/* Action CTA */}
                          <div className="v3-craft-hover-cta">
                            <span>EXPLORE CASE STUDY</span>
                            <ArrowUpRight size={14} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Editorial Caption Strip Below Card (Ogilvy Typography) */}
                    <div className="v3-craft-caption">
                      <div className="v3-craft-caption-top">
                        <span className="v3-craft-meta-category">
                          {project.category}
                        </span>
                        <span className="v3-craft-meta-client">
                          {project.client}
                        </span>
                      </div>

                      <h3 className="v3-craft-card-headline">{project.title}</h3>
                      <p className="v3-craft-card-excerpt">{project.excerpt}</p>

                      <div className="v3-craft-card-footer">
                        <div className="v3-craft-tags-row">
                          {project.tags.map((tag, tIdx) => (
                            <span key={`tag-${tIdx}`} className="v3-craft-tag-pill">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="v3-craft-view-link">
                          <span>VIEW</span>
                          <ArrowUpRight size={13} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================================
            BOTTOM VIEW ALL LINK TO SEPARATE WORK PAGE
            ===================================================================== */}
        <div className="row justify-content-center text-center mt-5 pt-3">
          <div className="col-auto">
            <Link href="/home-v3/work" className="v3-editorial-cta-link">
              <span className="v3-cta-dash" aria-hidden="true" />
              <span>EXPLORE COMPLETE WORK PORTFOLIO</span>
              <span className="v3-cta-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
