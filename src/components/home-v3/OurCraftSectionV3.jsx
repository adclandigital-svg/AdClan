"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const CRAFT_PROJECTS = [
  // =========================================================================
  // 30 TOTAL PROJECTS (EXACTLY 10 VIKRAM MILLS, 10 RIGHT GOLD, 10 BIG FM)
  // Perfectly balanced across 3 slides of 10 cards each
  // Row 1: Span 2 + Span 1 + Span 1 = 4 columns
  // Row 2: Span 1 + Span 1 + Span 2 = 4 columns
  // Row 3: Span 1 + Span 1 + Span 1 + Span 1 = 4 columns
  // =========================================================================

  // --- SLIDE 1 MIX (Cards 1-10) ---
  // 1. Vikram Mills — WIDE BANNER (Index 0: Span 2)
  {
    id: "vm-1",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "FMCG Branding & Packaging",
    title: "Chakki Fresh Atta Heritage Packaging & Rebrand",
    excerpt: "Modern consumer packaging architecture and brand identity celebrating Indian kitchen purity.",
    image: "/projects/vikram-mills/pr-banner1.png",
    clientLogo: "/projects/vikram-mills/logo1.jpg",
    link: "/projects/vikram-mills",
    tags: ["Packaging Design", "FMCG Brand", "Heritage"],
  },
  // 2. Right Gold (Index 1: Span 1)
  {
    id: "rg-2",
    client: "Right Gold",
    clientId: "right-gold",
    category: "High Jewellery",
    title: "22K Royal Gold Bridal Choker & Necklace Suite",
    excerpt: "Editorial jewellery photography capturing opulent bridal choker craftsmanship.",
    image: "/projects/right-gold/1.jpg",
    clientLogo: "/projects/right-gold/logo.png",
    link: "/projects/right-gold",
    tags: ["Bridal Gold", "Handcrafted", "Choker"],
  },
  // 3. Big FM (Index 2: Span 1)
  {
    id: "bfm-2",
    client: "Big FM",
    clientId: "big-fm",
    category: "Celebrity Management",
    title: "RJ Naved — The Voice of Delhi-NCR Primetime Campaign",
    excerpt: "Massive citywide celebrity endorsement and experiential radio campaign.",
    image: "/projects/project-thumbnail/RJ NAVED.png",
    clientLogo: "/projects/big-fm/logo.png",
    link: "/projects/big-fm/celebrity-managements",
    tags: ["RJ Naved", "Radio Star", "Celebrity Campaign"],
  },
  // 4. Vikram Mills (Index 3: Span 1)
  {
    id: "vm-2",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "Social & Digital Creatives",
    title: "Pure Wholesome Nutrition & Farm Fresh Goodness",
    excerpt: "Engaging social media campaigns highlighting pure wheat sourcing and farm-to-table freshness.",
    image: "/projects/vikram-mills/creatives/1.jpg",
    clientLogo: "/projects/vikram-mills/logo1.jpg",
    link: "/projects/vikram-mills",
    tags: ["Social Creatives", "Nutrition", "Farm Fresh"],
  },
  // 5. Right Gold (Index 4: Span 1)
  {
    id: "rg-3",
    client: "Right Gold",
    clientId: "right-gold",
    category: "Celebrity Editorial",
    title: "Seher Bamba Luxury Polki & Kundan Editorial",
    excerpt: "Celebrity shoot featuring actress Seher Bamba adorned in handcrafted heritage polki.",
    image: "/projects/right-gold/gallery/2.jpg",
    clientLogo: "/projects/right-gold/logo.png",
    link: "/projects/right-gold",
    tags: ["Celebrity Shoot", "Polki", "Luxury Editorial"],
  },
  // 6. Vikram Mills — WIDE BANNER (Index 5: Span 2)
  {
    id: "vm-6",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "Masterbrand Strategy",
    title: "53-Year Milling Legacy & Pan-India Corporate Campaign",
    excerpt: "Large-scale masterbrand corporate campaign marking half a century of milling leadership.",
    image: "/projects/vikram-mills/Vikram-mills-celeb.png",
    clientLogo: "/projects/vikram-mills/logo1.jpg",
    link: "/projects/vikram-mills",
    tags: ["Brand Strategy", "Corporate Identity", "Leadership"],
  },
  // 7. Big FM (Index 6: Span 1)
  {
    id: "bfm-3",
    client: "Big FM",
    clientId: "big-fm",
    category: "Radio Shows & Jingles",
    title: "RJ Lucky — Primetime Morning Drive Radio Show",
    excerpt: "High-octane morning rush show branding connecting commuters across Delhi-NCR.",
    image: "/projects/project-thumbnail/RJ LUCKY.png",
    clientLogo: "/projects/big-fm/logo.png",
    link: "/projects/big-fm/celebrity-managements",
    tags: ["RJ Lucky", "Morning Drive", "Radio Show"],
  },
  // 8. Vikram Mills (Index 7: Span 1)
  {
    id: "vm-4",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "Retail Packaging",
    title: "Chakki Fresh Atta 5KG & 10KG Consumer Retail Packs",
    excerpt: "High-barrier consumer retail pouch design reflecting culinary perfection and freshness.",
    image: "/projects/vikram-mills/pkg/1.png",
    clientLogo: "/projects/vikram-mills/logo1.jpg",
    link: "/projects/vikram-mills",
    tags: ["Retail Packaging", "Shelf Visibility", "FMCG"],
  },
  // 9. Right Gold (Index 8: Span 1)
  {
    id: "rg-4",
    client: "Right Gold",
    clientId: "right-gold",
    category: "Haute Joaillerie",
    title: "Diamond Kundan Polki Artisanal Neckpiece",
    excerpt: "Macro photography of certified diamond and jadau jewellery showing intricate gemstone setting.",
    image: "/projects/right-gold/1.png",
    clientLogo: "/projects/right-gold/logo.png",
    link: "/projects/right-gold",
    tags: ["Diamond Polki", "Artisanal", "Fine Jewels"],
  },
  // 10. Big FM (Index 9: Span 1)
  {
    id: "bfm-4",
    client: "Big FM",
    clientId: "big-fm",
    category: "Late Night Radio",
    title: "RJ Rahul Makin — Flagship Late Night Conversations",
    excerpt: "Late-night flagship radio show amplification, digital podcasts, and brand integrations.",
    image: "/projects/project-thumbnail/RJ RAHUL Makin.png",
    clientLogo: "/projects/big-fm/logo.png",
    link: "/projects/big-fm/celebrity-managements",
    tags: ["RJ Rahul Makin", "Late Night", "Brand Integrations"],
  },

  // --- SLIDE 2 MIX (Cards 11-20) ---
  // 11. Right Gold — WIDE BANNER (Index 10: Span 2)
  {
    id: "rg-1",
    client: "Right Gold",
    clientId: "right-gold",
    category: "High Jewellery & TVC",
    title: "Imperial Bridal Jewellery Commercial Shoot",
    excerpt: "Cinematic broadcast film and high-concept campaign for Right Gold luxury bridal collection.",
    image: "/projects/right-gold/banner2.png",
    clientLogo: "/projects/right-gold/logo.png",
    link: "/projects/right-gold",
    tags: ["Commercial Shoot", "High Jewellery", "TVC Film"],
  },
  // 12. Big FM (Index 11: Span 1)
  {
    id: "bfm-5",
    client: "Big FM",
    clientId: "big-fm",
    category: "Morning Drive & Vibe",
    title: "RJ Tripti — Breakfast Morning City Show",
    excerpt: "Vibrant city radio show connecting local advertisers with urban commuters.",
    image: "/projects/project-thumbnail/RJ TRIPTI.png",
    clientLogo: "/projects/big-fm/logo.png",
    link: "/projects/big-fm/celebrity-managements",
    tags: ["RJ Tripti", "Morning Show", "City Radio"],
  },
  // 13. Vikram Mills (Index 12: Span 1)
  {
    id: "vm-3",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "Heritage Brand Film",
    title: "Traditional Stone Ground Purity Campaign",
    excerpt: "Multi-channel advertising celebrating 5 decades of slow-milled stone ground nutrition.",
    image: "/projects/vikram-mills/creatives/2.jpg",
    clientLogo: "/projects/vikram-mills/logo1.jpg",
    link: "/projects/vikram-mills",
    tags: ["Stone Ground", "Purity", "Heritage Campaign"],
  },
  // 14. Right Gold (Index 13: Span 1)
  {
    id: "rg-5",
    client: "Right Gold",
    clientId: "right-gold",
    category: "Antique Heritage",
    title: "Royal Antique Gold & Heirloom Jewellery Lookbook",
    excerpt: "Timeless antique gold jewellery campaign paying homage to royal Indian craftsmanship.",
    image: "/projects/right-gold/gallery/4.jpg",
    clientLogo: "/projects/right-gold/logo.png",
    link: "/projects/right-gold",
    tags: ["Antique Gold", "Heirloom", "Lookbook"],
  },
  // 15. Vikram Mills (Index 14: Span 1)
  {
    id: "vm-5",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "FMCG Packaging",
    title: "Vikram MP Sharbati Gold Atta Packaging",
    excerpt: "Gold standard wheat packaging design commanding premium shelf space in retail outlets.",
    image: "/projects/vikram-mills/pkg/2.png",
    clientLogo: "/projects/vikram-mills/logo1.jpg",
    link: "/projects/vikram-mills",
    tags: ["Sharbati Gold", "Premium Atta", "Retail Pouch"],
  },
  // 16. Big FM — WIDE BANNER (Index 15: Span 2)
  {
    id: "bfm-1",
    client: "Big FM",
    clientId: "big-fm",
    category: "Grand Awards & Media",
    title: "BIG Impact Awards Nationwide Gala & Media Activation",
    excerpt: "Pan-India award property honoring visionary entrepreneurs, celebrities, and changemakers.",
    image: "/projects/big-fm/banner.png",
    clientLogo: "/projects/big-fm/logo.png",
    link: "/projects/big-fm/celebrity-managements",
    tags: ["Impact Awards", "Gala Event", "National PR"],
  },
  // 17. Big FM (Index 16: Span 1)
  {
    id: "bfm-7",
    client: "Big FM",
    clientId: "big-fm",
    category: "Music & Celebrity",
    title: "Millind Gaba — Exclusive Musical Tour & Radio Premiere",
    excerpt: "High-energy youth radio concerts, studio acoustic sessions, and multi-city tour coverage.",
    image: "/projects/project-thumbnail/MILLIAND GABA.png",
    clientLogo: "/projects/big-fm/logo.png",
    link: "/projects/big-fm/celebrity-managements",
    tags: ["Millind Gaba", "Music Tour", "Celebrity Feature"],
  },
  // 18. Right Gold (Index 17: Span 1)
  {
    id: "rg-7",
    client: "Right Gold",
    clientId: "right-gold",
    category: "Temple Heritage",
    title: "Temple Jewellery Grand Legacy Collection",
    excerpt: "Sacred South Indian temple motifs reinterpreted with modern goldsmith artistry.",
    image: "/projects/right-gold/gallery/5.jpg",
    clientLogo: "/projects/right-gold/logo.png",
    link: "/projects/right-gold",
    tags: ["Temple Gold", "Heritage Art", "Legacy"],
  },
  // 19. Vikram Mills (Index 18: Span 1)
  {
    id: "vm-7",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "Digital Advertising",
    title: "Premium Quality Flour for Everyday Healthy Living",
    excerpt: "Digital campaign highlighting family wellness and essential nutrients in daily diet.",
    image: "/projects/vikram-mills/creatives/3.jpg",
    clientLogo: "/projects/vikram-mills/logo1.jpg",
    link: "/projects/vikram-mills",
    tags: ["Digital Ads", "Healthy Living", "Family Nutrition"],
  },
  // 20. Big FM (Index 19: Span 1)
  {
    id: "bfm-8",
    client: "Big FM",
    clientId: "big-fm",
    category: "Celebrity Endorsement",
    title: "Huma Qureshi — Bollywood Star Radio Special",
    excerpt: "A-list Bollywood star handling, brand sponsorship integration, and multi-city digital buzz.",
    image: "/projects/project-thumbnail/HUMA QURESHI.png",
    clientLogo: "/projects/big-fm/logo.png",
    link: "/projects/big-fm/celebrity-managements",
    tags: ["Huma Qureshi", "Bollywood", "VIP Handling"],
  },

  // --- SLIDE 3 MIX (Cards 21-30) ---
  // 21. Vikram Mills — WIDE BANNER (Index 20: Span 2)
  {
    id: "vm-10",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "National Masterbrand",
    title: "Golden Harvest Grain Purity & National FMCG Rebrand",
    excerpt: "End-to-end masterbrand transformation across national retail distribution networks.",
    image: "/projects/vikram-mills/cb-banner.png",
    clientLogo: "/projects/vikram-mills/logo1.jpg",
    link: "/projects/vikram-mills",
    tags: ["Brand Strategy", "National Retail", "Masterbrand"],
  },
  // 22. Right Gold (Index 21: Span 1)
  {
    id: "rg-8",
    client: "Right Gold",
    clientId: "right-gold",
    category: "Precious Gemstones",
    title: "Emerald & Ruby Royal Bridal Jewellery Set",
    excerpt: "Exquisite hand-set natural emeralds and unheated rubies encased in 22K hallmarked gold.",
    image: "/projects/right-gold/gallery/6.jpg",
    clientLogo: "/projects/right-gold/logo.png",
    link: "/projects/right-gold",
    tags: ["Emeralds", "Rubies", "Bridal Set"],
  },
  // 23. Big FM (Index 22: Span 1)
  {
    id: "bfm-9",
    client: "Big FM",
    clientId: "big-fm",
    category: "Experiential Comedy",
    title: "Anubhav Singh Bassi — Live Arena Tour & Radio Blitz",
    excerpt: "Massive auditorium comedy tour partnership, on-air promotions, and viral social clips.",
    image: "/projects/project-thumbnail/BASSI.png",
    clientLogo: "/projects/big-fm/logo.png",
    link: "/projects/big-fm/celebrity-managements",
    tags: ["Bassi", "Standup Comedy", "Arena Tour"],
  },
  // 24. Vikram Mills (Index 23: Span 1)
  {
    id: "vm-8",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "Consumer Awareness",
    title: "Right Flour for Good Health — Integrated Campaign",
    excerpt: "Consumer awareness initiative educating households on grain purity and digestive health.",
    image: "/projects/vikram-mills/creatives/4.jpg",
    clientLogo: "/projects/vikram-mills/logo1.jpg",
    link: "/projects/vikram-mills",
    tags: ["Good Health", "Consumer Education", "Nutrition"],
  },
  // 25. Vikram Mills (Index 24: Span 1)
  {
    id: "vm-9",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "Specialty Packaging",
    title: "Vikram Premium Besan & Specialty Flour Pouch Architecture",
    excerpt: "Moisture-lock packaging design preserving flavor and aroma of pure gram flour.",
    image: "/projects/vikram-mills/pkg/3.png",
    clientLogo: "/projects/vikram-mills/logo1.jpg",
    link: "/projects/vikram-mills",
    tags: ["Besan Pack", "Shelf Impact", "Specialty Flour"],
  },
  // 26. Right Gold — WIDE BANNER (Index 25: Span 2)
  {
    id: "rg-6",
    client: "Right Gold",
    clientId: "right-gold",
    category: "Haute Joaillerie",
    title: "Royal Kundan & Polki Heirloom Jewellery Suite",
    excerpt: "Editorial campaign capturing handcrafted heritage heirloom jewels with modern luxury poise.",
    image: "/projects/right-gold/banner11.png",
    clientLogo: "/projects/right-gold/logo.png",
    link: "/projects/right-gold",
    tags: ["Heirloom Jewels", "Kundan Art", "Editorial Luxury"],
  },
  // 27. Big FM (Index 26: Span 1)
  {
    id: "bfm-10",
    client: "Big FM",
    clientId: "big-fm",
    category: "Celebrity Radio Special",
    title: "Adah Sharma — Bollywood Blockbuster Radio Special",
    excerpt: "Nationwide on-air movie promotion, live studio interaction, and digital audio campaign.",
    image: "/projects/project-thumbnail/ADAH SHARMA.png",
    clientLogo: "/projects/big-fm/logo.png",
    link: "/projects/big-fm/celebrity-managements",
    tags: ["Adah Sharma", "Bollywood Radio", "Star Special"],
  },
  // 28. Right Gold (Index 27: Span 1)
  {
    id: "rg-9",
    client: "Right Gold",
    clientId: "right-gold",
    category: "Diamond Solitaires",
    title: "Eternity Diamond Solitaire & Engagement Collection",
    excerpt: "Ultra-high-definition macro jewellery imagery highlighting certified solitaire diamonds.",
    image: "/projects/right-gold/gallery/7.jpg",
    clientLogo: "/projects/right-gold/logo.png",
    link: "/projects/right-gold",
    tags: ["Solitaire Diamonds", "Engagement", "Luxury Gold"],
  },
  // 29. Big FM (Index 28: Span 1)
  {
    id: "bfm-11",
    client: "Big FM",
    clientId: "big-fm",
    category: "Live Musical Tour",
    title: "Jassie Gill — Live Musical Radio Showcase & Concert",
    excerpt: "Star music concert series, acoustic radio room sessions, and youth festival activations.",
    image: "/projects/project-thumbnail/JASSIE GILL.png",
    clientLogo: "/projects/big-fm/logo.png",
    link: "/projects/big-fm/celebrity-managements",
    tags: ["Jassie Gill", "Live Music", "Youth Concert"],
  },
  // 30. Right Gold (Index 29: Span 1)
  {
    id: "rg-10",
    client: "Right Gold",
    clientId: "right-gold",
    category: "Bridal Couture",
    title: "Regal Bride in Crimson & Gold — Grand Campaign",
    excerpt: "Grand bridal couture lookbook celebrating royal wedding ornaments and bridal elegance.",
    image: "/projects/right-gold/gallery/10.jpg",
    clientLogo: "/projects/right-gold/logo.png",
    link: "/projects/right-gold",
    tags: ["Regal Bride", "Bridal Couture", "Grand Campaign"],
  },
];

const FILTERS = [
  { id: "all", label: "All Work" },
  { id: "vikram-mills", label: "Vikram Mills" },
  { id: "right-gold", label: "Right Gold" },
  { id: "big-fm", label: "Big FM" },
];

const CARDS_PER_SLIDE = 10;

export default function OurCraftSectionV3() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Filter projects according to client tab with curated row placement (index 0 & 5 span 2)
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return CRAFT_PROJECTS;
    }
    const clientItems = CRAFT_PROJECTS.filter((p) => p.clientId === activeFilter);
    if (activeFilter === "vikram-mills") {
      const order = ["vm-1", "vm-2", "vm-3", "vm-4", "vm-5", "vm-6", "vm-7", "vm-8", "vm-9", "vm-10"];
      return order.map((id) => clientItems.find((p) => p.id === id)).filter(Boolean);
    }
    if (activeFilter === "right-gold") {
      const order = ["rg-1", "rg-2", "rg-3", "rg-4", "rg-5", "rg-6", "rg-7", "rg-8", "rg-9", "rg-10"];
      return order.map((id) => clientItems.find((p) => p.id === id)).filter(Boolean);
    }
    if (activeFilter === "big-fm") {
      const order = ["bfm-1", "bfm-2", "bfm-3", "bfm-4", "bfm-5", "bfm-6", "bfm-7", "bfm-8", "bfm-9", "bfm-10"];
      return order.map((id) => clientItems.find((p) => p.id === id)).filter(Boolean);
    }
    return clientItems;
  }, [activeFilter]);

  // Total slides for current filter (10 cards per slide)
  const totalSlides = Math.max(1, Math.ceil(filteredProjects.length / CARDS_PER_SLIDE));

  // Reset to first slide whenever tab changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeFilter]);

  const safeSlideIndex = Math.min(currentSlide, totalSlides - 1);

  // Current 10-card slide
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
            SECTION HEADER
            Heading: exactly "OUR CRAFT"
            ===================================================================== */}
        <div className="row mb-4 align-items-end justify-content-between g-4">
          <div className="col-12 col-lg-8">
            <h2 className="v3-craft-main-heading">OUR CRAFT</h2>
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

          {/* Carousel Slide Indicators and Controls */}
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
                  aria-label="Previous Slide of 10 Cards"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="v3-craft-nav-arrow"
                  aria-label="Next Slide of 10 Cards"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* =====================================================================
            OGILVY-STYLE WORK GRID (4 COLUMNS, BALANCED SYMMETRICAL ROWS)
            - Images fill the entire card border-to-border with ZERO black letterboxing
            - Row 1: Span 2 + Span 1 + Span 1 = 4 cols
            - Row 2: Span 1 + Span 1 + Span 2 = 4 cols
            - Row 3: Span 1 + Span 1 + Span 1 + Span 1 = 4 cols
            - Hover: Smooth Royal Sapphire #1e498b overlay with Title & Client Pill
            ===================================================================== */}
        <div className="v3-craft-carousel-viewport">
          <ul className="work__grid js-work-grid">
            {currentSlideCards.map((project, idx) => {
              const isLarge = idx % 10 === 0 || idx % 10 === 5;
              return (
                <li
                  key={project.id}
                  className={`work__item js-work-item ${
                    isLarge ? "work__item--large" : "work__item--standard"
                  }`}
                >
                  <Link
                    href={project.link}
                    aria-label={`${project.title} — ${project.client}`}
                  >
                    <div className="work__item-media">
                      <img
                        src={project.image}
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
              );
            })}
          </ul>
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
