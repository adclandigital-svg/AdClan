"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";
import "./ourCraftMarquee.css";

// 36 Curated Real Projects from Adclan Portfolio across all 4 rows
const MARQUEE_PROJECTS = [
  // --- ROW 1 ITEMS (Index 0 - 8) ---
  {
    id: "vm-1",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "FMCG Branding & Packaging",
    title: "Chakki Fresh Atta Heritage Packaging & Rebrand",
    image: "/projects/vikram-mills/pr-banner1.png",
    link: "/projects/vikram-mills",
    row: 1,
  },
  {
    id: "rg-2",
    client: "Right Gold",
    clientId: "right-gold",
    category: "High Jewellery",
    title: "22K Royal Gold Bridal Choker & Necklace Suite",
    image: "/projects/right-gold/1.jpg",
    link: "/projects/right-gold",
    row: 1,
  },
  {
    id: "bfm-2",
    client: "Big FM",
    clientId: "big-fm",
    category: "Celebrity Management",
    title: "RJ Naved — The Voice of Delhi Primetime Campaign",
    image: "/projects/project-thumbnail/RJ NAVED.png",
    link: "/projects/big-fm/celebrity-managements",
    row: 1,
  },
  {
    id: "vm-2",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "Social & Digital Creatives",
    title: "Pure Wholesome Nutrition & Farm Fresh Goodness",
    image: "/projects/vikram-mills/creatives/1.jpg",
    link: "/projects/vikram-mills",
    row: 1,
  },
  {
    id: "rg-3",
    client: "Right Gold",
    clientId: "right-gold",
    category: "Celebrity Editorial",
    title: "Seher Bamba Luxury Polki & Kundan Editorial",
    image: "/projects/right-gold/gallery/2.jpg",
    link: "/projects/right-gold",
    row: 1,
  },
  {
    id: "bfm-3",
    client: "Big FM",
    clientId: "big-fm",
    category: "Radio Shows & Jingles",
    title: "RJ Lucky — Primetime Morning Drive Radio Show",
    image: "/projects/project-thumbnail/RJ LUCKY.png",
    link: "/projects/big-fm/celebrity-managements",
    row: 1,
  },
  {
    id: "ag-1",
    client: "Aggarwal Sweets",
    clientId: "aggarwal",
    category: "Brand Campaign",
    title: "Traditional Heritage Confectionery Campaign",
    image: "/projects/aggarwal/creative/1.jpg",
    link: "/projects/aggarwal",
    row: 1,
  },
  {
    id: "vm-4",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "Retail Packaging",
    title: "Chakki Fresh Atta 5KG & 10KG Retail Packs",
    image: "/projects/vikram-mills/pkg/1.png",
    link: "/projects/vikram-mills",
    row: 1,
  },
  {
    id: "el-1",
    client: "Elmas Group",
    clientId: "elmas-group",
    category: "Luxury Real Estate",
    title: "Architectural Grandeur & Lifestyle Living",
    image: "/projects/elmasGroup/creatives/t11.png",
    link: "/projects/elmas-group",
    row: 1,
  },

  // --- ROW 2 ITEMS (Index 9 - 17) ---
  {
    id: "rg-1",
    client: "Right Gold",
    clientId: "right-gold",
    category: "High Jewellery & TVC",
    title: "Imperial Bridal Jewellery Commercial Shoot",
    image: "/projects/right-gold/banner2.png",
    link: "/projects/right-gold",
    row: 2,
  },
  {
    id: "bfm-4",
    client: "Big FM",
    clientId: "big-fm",
    category: "Late Night Radio",
    title: "RJ Rahul Makin — Flagship Late Night Conversations",
    image: "/projects/project-thumbnail/RJ RAHUL Makin.png",
    link: "/projects/big-fm/celebrity-managements",
    row: 2,
  },
  {
    id: "vm-6",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "Masterbrand Strategy",
    title: "53-Year Milling Legacy Pan-India Campaign",
    image: "/projects/vikram-mills/Vikram-mills-celeb.png",
    link: "/projects/vikram-mills",
    row: 2,
  },
  {
    id: "rg-4",
    client: "Right Gold",
    clientId: "right-gold",
    category: "Haute Joaillerie",
    title: "Diamond Kundan Polki Artisanal Neckpiece",
    image: "/projects/right-gold/1.png",
    link: "/projects/right-gold",
    row: 2,
  },
  {
    id: "bfm-5",
    client: "Big FM",
    clientId: "big-fm",
    category: "Morning City Show",
    title: "RJ Tripti — Breakfast Morning City Show",
    image: "/projects/project-thumbnail/RJ TRIPTI.png",
    link: "/projects/big-fm/celebrity-managements",
    row: 2,
  },
  {
    id: "vm-3",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "Heritage Brand Film",
    title: "Traditional Stone Ground Purity Campaign",
    image: "/projects/vikram-mills/creatives/2.jpg",
    link: "/projects/vikram-mills",
    row: 2,
  },
  {
    id: "ag-2",
    client: "Aggarwal Sweets",
    clientId: "aggarwal",
    category: "Social Creatives",
    title: "Pure Desi Ghee Culinary Delights",
    image: "/projects/aggarwal/creative/2.jpg",
    link: "/projects/aggarwal",
    row: 2,
  },
  {
    id: "rg-5",
    client: "Right Gold",
    clientId: "right-gold",
    category: "Antique Heritage",
    title: "Royal Antique Gold & Heirloom Lookbook",
    image: "/projects/right-gold/gallery/4.jpg",
    link: "/projects/right-gold",
    row: 2,
  },
  {
    id: "el-2",
    client: "Elmas Group",
    clientId: "elmas-group",
    category: "Modern Living",
    title: "Signature Ultra-Modern Residences",
    image: "/projects/elmasGroup/creatives/t12.png",
    link: "/projects/elmas-group",
    row: 2,
  },

  // --- ROW 3 ITEMS (Index 18 - 26) ---
  {
    id: "bfm-1",
    client: "Big FM",
    clientId: "big-fm",
    category: "Grand Awards & Media",
    title: "BIG Impact Awards Nationwide Gala Activation",
    image: "/projects/big-fm/banner.png",
    link: "/projects/big-fm/celebrity-managements",
    row: 3,
  },
  {
    id: "vm-5",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "FMCG Packaging",
    title: "Vikram MP Sharbati Gold Atta Packaging",
    image: "/projects/vikram-mills/pkg/2.png",
    link: "/projects/vikram-mills",
    row: 3,
  },
  {
    id: "rg-7",
    client: "Right Gold",
    clientId: "right-gold",
    category: "Temple Heritage",
    title: "Temple Jewellery Grand Legacy Collection",
    image: "/projects/right-gold/gallery/5.jpg",
    link: "/projects/right-gold",
    row: 3,
  },
  {
    id: "bfm-7",
    client: "Big FM",
    clientId: "big-fm",
    category: "Music & Celebrity",
    title: "Millind Gaba — Exclusive Musical Tour Showcase",
    image: "/projects/project-thumbnail/MILLIAND GABA.png",
    link: "/projects/big-fm/celebrity-managements",
    row: 3,
  },
  {
    id: "vm-7",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "Digital Advertising",
    title: "Premium Quality Flour Everyday Living",
    image: "/projects/vikram-mills/creatives/3.jpg",
    link: "/projects/vikram-mills",
    row: 3,
  },
  {
    id: "rg-8",
    client: "Right Gold",
    clientId: "right-gold",
    category: "Precious Gemstones",
    title: "Emerald & Ruby Royal Bridal Jewellery Set",
    image: "/projects/right-gold/gallery/6.jpg",
    link: "/projects/right-gold",
    row: 3,
  },
  {
    id: "bfm-8",
    client: "Big FM",
    clientId: "big-fm",
    category: "Celebrity Endorsement",
    title: "Huma Qureshi — Bollywood Star Radio Special",
    image: "/projects/project-thumbnail/HUMA QURESHI.png",
    link: "/projects/big-fm/celebrity-managements",
    row: 3,
  },
  {
    id: "ag-3",
    client: "Aggarwal Sweets",
    clientId: "aggarwal",
    category: "Festival Campaigns",
    title: "Authentic Festivities & Royal Gifting Sets",
    image: "/projects/aggarwal/creative/3.jpg",
    link: "/projects/aggarwal",
    row: 3,
  },
  {
    id: "vm-10",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "National Masterbrand",
    title: "Golden Harvest Grain Purity National Rebrand",
    image: "/projects/vikram-mills/cb-banner.png",
    link: "/projects/vikram-mills",
    row: 3,
  },

  // --- ROW 4 ITEMS (Index 27 - 35) ---
  {
    id: "bfm-9",
    client: "Big FM",
    clientId: "big-fm",
    category: "Experiential Comedy",
    title: "Anubhav Singh Bassi — Live Arena Tour & Blitz",
    image: "/projects/project-thumbnail/BASSI.png",
    link: "/projects/big-fm/celebrity-managements",
    row: 4,
  },
  {
    id: "rg-6",
    client: "Right Gold",
    clientId: "right-gold",
    category: "Haute Joaillerie",
    title: "Royal Kundan & Polki Heirloom Suite",
    image: "/projects/right-gold/banner11.png",
    link: "/projects/right-gold",
    row: 4,
  },
  {
    id: "vm-8",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "Consumer Awareness",
    title: "Right Flour for Good Health Campaign",
    image: "/projects/vikram-mills/creatives/4.jpg",
    link: "/projects/vikram-mills",
    row: 4,
  },
  {
    id: "bfm-10",
    client: "Big FM",
    clientId: "big-fm",
    category: "Celebrity Radio",
    title: "Adah Sharma — Bollywood Blockbuster Special",
    image: "/projects/project-thumbnail/ADAH SHARMA.png",
    link: "/projects/big-fm/celebrity-managements",
    row: 4,
  },
  {
    id: "vm-9",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "Specialty Packaging",
    title: "Vikram Premium Besan Flour Packaging",
    image: "/projects/vikram-mills/pkg/3.png",
    link: "/projects/vikram-mills",
    row: 4,
  },
  {
    id: "rg-9",
    client: "Right Gold",
    clientId: "right-gold",
    category: "Diamond Solitaires",
    title: "Eternity Diamond Solitaire Collection",
    image: "/projects/right-gold/gallery/7.jpg",
    link: "/projects/right-gold",
    row: 4,
  },
  {
    id: "bfm-11",
    client: "Big FM",
    clientId: "big-fm",
    category: "Live Musical Tour",
    title: "Jassie Gill — Live Musical Radio Showcase",
    image: "/projects/project-thumbnail/JASSIE GILL.png",
    link: "/projects/big-fm/celebrity-managements",
    row: 4,
  },
  {
    id: "rg-10",
    client: "Right Gold",
    clientId: "right-gold",
    category: "Bridal Couture",
    title: "Regal Bride in Crimson & Gold Grand Lookbook",
    image: "/projects/right-gold/gallery/10.jpg",
    link: "/projects/right-gold",
    row: 4,
  },
  {
    id: "el-3",
    client: "Elmas Group",
    clientId: "elmas-group",
    category: "Urban Architecture",
    title: "Commercial Hubs & Skyline Landmarks",
    image: "/projects/elmasGroup/creatives/t21.png",
    link: "/projects/elmas-group",
    row: 4,
  },
];

const FILTERS = [
  { id: "all", label: "All Campaigns" },
  { id: "vikram-mills", label: "Vikram Mills" },
  { id: "right-gold", label: "Right Gold" },
  { id: "big-fm", label: "Big FM" },
  { id: "elmas-group", label: "Elmas Group" },
  { id: "aggarwal", label: "Aggarwal" },
];

export default function OurCraftMarqueeSectionV3() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Partition projects into 4 rows according to filter
  const { row1, row2, row3, row4 } = useMemo(() => {
    let pool = MARQUEE_PROJECTS;
    if (activeFilter !== "all") {
      pool = MARQUEE_PROJECTS.filter((p) => p.clientId === activeFilter);
      // If filtered brand has fewer items, repeat them gracefully across rows
      if (pool.length < 16) {
        pool = [...pool, ...pool, ...pool];
      }
    }

    const r1 = [];
    const r2 = [];
    const r3 = [];
    const r4 = [];

    pool.forEach((item, index) => {
      const target = index % 4;
      if (target === 0) r1.push(item);
      else if (target === 1) r2.push(item);
      else if (target === 2) r3.push(item);
      else r4.push(item);
    });

    return { row1: r1, row2: r2, row3: r3, row4: r4 };
  }, [activeFilter]);

  // Render a marquee card with name revealed on hover
  const renderCard = (project, uniqueKey) => (
    <Link
      key={uniqueKey}
      href={project.link}
      className="v3-craft-marquee-card"
      aria-label={`${project.title} — ${project.client}`}
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="v3-craft-marquee-img"
      />

      {/* Hover Reveal Overlay with Project Name */}
      <div className="v3-craft-card-overlay">
        <span className="v3-craft-card-client-badge">
          <Sparkles size={11} />
          <span>{project.client}</span>
        </span>

        <h4 className="v3-craft-card-title">{project.title}</h4>

        <div className="v3-craft-card-footer">
          <span className="v3-craft-card-category">{project.category}</span>
          <span className="v3-craft-card-arrow" aria-hidden="true">
            <ArrowUpRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  );

  return (
    <section className="v3-craft-marquee-section" id="craft" data-anchor="work">
      {/* Top Editorial Header */}
      <div className="container-fluid v3-section-container px-3 px-md-5 px-xl-5">
        <div className="v3-craft-marquee-header">
          <div className="row align-items-end justify-content-between g-4 mb-4">
            <div className="col-12 col-lg-8">
              <div className="v3-craft-marquee-eyebrow-wrap">
                <span className="v3-craft-marquee-dash" />
                <span className="v3-craft-marquee-eyebrow">02 / OUR CRAFT</span>
              </div>

              <h2 className="v3-craft-marquee-title">
                Work Engineered for <span>Unignorable Scale.</span>
              </h2>

              <p className="v3-craft-marquee-subtext">
                A continuous panorama of transformative brand architecture, cinematic campaigns, 
                and high-impact cultural moments. Hover to pause and inspect any campaign.
              </p>
            </div>

            <div className="col-12 col-lg-4 text-lg-end">
              <Link href="/home-v3/work" className="v3-craft-marquee-cta-link">
                <span>EXPLORE FULL ARCHIVE</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Client Filter Tabs */}
          <div className="v3-craft-marquee-filters">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter.id;
              const count =
                filter.id === "all"
                  ? MARQUEE_PROJECTS.length
                  : MARQUEE_PROJECTS.filter((p) => p.clientId === filter.id).length;

              return (
                <button
                  key={filter.id}
                  type="button"
                  className={`v3-craft-marquee-filter-btn ${isActive ? "is-active" : ""}`}
                  onClick={() => setActiveFilter(filter.id)}
                  aria-pressed={isActive}
                >
                  <span>{filter.label}</span>
                  <span className="v3-craft-marquee-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* =====================================================================
          4-ROW CONTINUOUS MARQUEE WALL (Exact Reference Screenshot Layout)
          - All 4 rows scroll smoothly from Right to Left
          - On hover over any card or row, the ticker pauses automatically
          - On hovering a particular card, its name and client details reveal
          ===================================================================== */}
      <div className="v3-craft-marquee-wall">
        {/* ROW 1: Right-to-Left */}
        <div className="v3-craft-marquee-row">
          <div className="v3-craft-marquee-track v3-craft-marquee-track--row-1">
            {row1.map((p, idx) => renderCard(p, `r1-a-${p.id}-${idx}`))}
            {row1.map((p, idx) => renderCard(p, `r1-b-${p.id}-${idx}`))}
          </div>
        </div>

        {/* ROW 2: Right-to-Left */}
        <div className="v3-craft-marquee-row">
          <div className="v3-craft-marquee-track v3-craft-marquee-track--row-2">
            {row2.map((p, idx) => renderCard(p, `r2-a-${p.id}-${idx}`))}
            {row2.map((p, idx) => renderCard(p, `r2-b-${p.id}-${idx}`))}
          </div>
        </div>

        {/* ROW 3: Right-to-Left */}
        <div className="v3-craft-marquee-row">
          <div className="v3-craft-marquee-track v3-craft-marquee-track--row-3">
            {row3.map((p, idx) => renderCard(p, `r3-a-${p.id}-${idx}`))}
            {row3.map((p, idx) => renderCard(p, `r3-b-${p.id}-${idx}`))}
          </div>
        </div>

        {/* ROW 4: Right-to-Left */}
        <div className="v3-craft-marquee-row">
          <div className="v3-craft-marquee-track v3-craft-marquee-track--row-4">
            {row4.map((p, idx) => renderCard(p, `r4-a-${p.id}-${idx}`))}
            {row4.map((p, idx) => renderCard(p, `r4-b-${p.id}-${idx}`))}
          </div>
        </div>
      </div>

      {/* Bottom Action Link */}
      <div className="container-fluid v3-section-container px-3 px-md-5 px-xl-5">
        <div className="v3-craft-marquee-bottom">
          <Link href="/home-v3/work" className="v3-craft-marquee-bottom-link">
            <span>EXPLORE ALL CASE STUDIES</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
