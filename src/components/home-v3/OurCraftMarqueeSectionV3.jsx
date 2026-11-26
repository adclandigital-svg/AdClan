"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";
import "./ourCraftMarquee.css";

// 34 Curated Real Projects from /projects/our-craft matching PDF details
const MARQUEE_PROJECTS = [
  {
    id: "vm-atta",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "Celeb, Packaging, Digital, Radio",
    title: "Chakki Fresh Atta Heritage Packaging",
    image: "/projects/our-craft/vikram-mills.webp",
    link: "/projects/vikram-mills",
  },
  {
    id: "ag-namkeen",
    client: "Aggarwal Namkeen",
    clientId: "aggarwal",
    category: "Website, Social Media",
    title: "Othiga Chips & Namkeen Digital Campaign",
    image: "/projects/our-craft/aggarwal-namkeen.webp",
    link: "/projects/aggarwal",
  },
  {
    id: "astrosage",
    client: "Astrosage",
    clientId: "astrosage",
    category: "Newspaper, Magazine",
    title: "Astrosage AI Feature & Print Media",
    image: "/projects/our-craft/astrosage.webp",
    link: "/projects/astrosage",
  },
  {
    id: "dayal-opticals",
    client: "Dayal Opticals",
    clientId: "dayal-opticals",
    category: "Radio",
    title: "In-Store Experience & Radio Campaign",
    image: "/projects/our-craft/dayal-opticals.webp",
    link: "/projects/dayal-opticals",
  },
  {
    id: "kbm-foods",
    client: "KBM Foods",
    clientId: "kbm-foods",
    category: "Social Media",
    title: "The Classic Indian Sip Jal Jeera",
    image: "/projects/our-craft/kbm-foods.webp",
    link: "/projects/kbm-foods",
  },
  {
    id: "india-gate",
    client: "India Gate",
    clientId: "india-gate",
    category: "Social Media",
    title: "Chakki Atta Spotlight Campaign",
    image: "/projects/our-craft/india-gate.webp",
    link: "/projects/india_gate",
  },
  {
    id: "fw-group",
    client: "FW Group",
    clientId: "fw-group",
    category: "Design, OOH",
    title: "Future Estate Luxury Residences",
    image: "/projects/our-craft/fm-group.webp",
    link: "/projects/fw-group",
  },
  {
    id: "elmas-group",
    client: "ELMAS Group",
    clientId: "elmas-group",
    category: "Radio, Design, Social Media",
    title: "Super Luxury Project Campaign",
    image: "/projects/our-craft/elmas-group.webp",
    link: "/projects/elmas-group",
  },
  {
    id: "kb-group",
    client: "KB Group",
    clientId: "kb-group",
    category: "Design, Social Media",
    title: "KB West Walk Modern Living OOH",
    image: "/projects/our-craft/kb-group.webp",
    link: "/projects/kb-westwalk",
  },
  {
    id: "rba-group",
    client: "RBA Group",
    clientId: "rba-group",
    category: "Design, Social Media",
    title: "RBA Home Town Dream Living Billboard",
    image: "/projects/our-craft/rba-group.webp",
    link: "/projects/rba-group",
  },
  {
    id: "rudra-group",
    client: "RUDRA Group",
    clientId: "rudra-group",
    category: "Design, Social Media",
    title: "Palace Heights Integrated Campaign",
    image: "/projects/our-craft/rudra-group.webp",
    link: "/projects/rudra-group",
  },
  {
    id: "revfin",
    client: "Revfin",
    clientId: "revfin",
    category: "Design, OOH",
    title: "E-Rickshaw Loan Financial Empowerment",
    image: "/projects/our-craft/revfin.webp",
    link: "/projects/revfin",
  },
  {
    id: "tirupati-pipes",
    client: "Tirupati Pipes",
    clientId: "tirupati-pipes",
    category: "Design",
    title: "Piping Systems Brand Campaign",
    image: "/projects/our-craft/tirupati-pipes.webp",
    link: "/projects/tirupati-pipes",
  },
  {
    id: "ramji-sons",
    client: "Ramji Sons",
    clientId: "ramji-sons",
    category: "Design, Social Media",
    title: "Artisanal Wedding Couture Collection",
    image: "/projects/our-craft/ramji-sons.webp",
    link: "/projects/ramji-sons",
  },
  {
    id: "ace-group",
    client: "ACE Group",
    clientId: "ace-group",
    category: "Radio, App Advertising",
    title: "ACE Han'ei Palatial Residences",
    image: "/projects/our-craft/ace-group.webp",
    link: "/projects/ace",
  },
  {
    id: "jaipur-jewellers",
    client: "Jaipur Jewellers",
    clientId: "jaipur-jewellers",
    category: "Social Media",
    title: "Royal Gold Bangles & Bridal Elegance",
    image: "/projects/our-craft/jaipur-jewellers.webp",
    link: "/projects/jaipur-jewellers",
  },
  {
    id: "omaxe",
    client: "OMAXE",
    clientId: "omaxe",
    category: "Radio",
    title: "Omaxe Chowk Iconic Commercial Landmark",
    image: "/projects/our-craft/omaxe.webp",
    link: "/projects/omaxe",
  },
  {
    id: "classic-fitness",
    client: "Classic Fitness Academy",
    clientId: "classic-fitness",
    category: "Radio, OOH",
    title: "Fitness Academy & Education Campaign",
    image: "/projects/our-craft/classic-fitness-academy.webp",
    link: "/projects/classic-fitness",
  },
  {
    id: "kayna",
    client: "Kayna Health Care",
    clientId: "kayna",
    category: "Design",
    title: "Hydrating Skin Lotion Product Design",
    image: "/projects/our-craft/kayna-health-care.webp",
    link: "/projects/kayna-health-care",
  },
  {
    id: "gha-food",
    client: "GHA Food",
    clientId: "gha-food",
    category: "Website Development, Social Media",
    title: "Mayur Premium Cookies Launch",
    image: "/projects/our-craft/gha-food.webp",
    link: "/projects/gha-food",
  },
  {
    id: "zipper-minds",
    client: "Zipper Minds",
    clientId: "zipper-minds",
    category: "Social Media",
    title: "Study Abroad Education Campaign",
    image: "/projects/our-craft/zipper-minds.webp",
    link: "/projects/zipper-mind",
  },
  {
    id: "ggi",
    client: "Gulzar Group of Institutes",
    clientId: "ggit",
    category: "Ad Film",
    title: "Campus Academic Excellence Ad Film",
    image: "/projects/our-craft/gulzar-group-of-institutes.webp",
    link: "/projects/ggit",
  },
  {
    id: "sugandh-tea",
    client: "SUGANDH Tea",
    clientId: "sugandh-tea",
    category: "Social Media",
    title: "Har Sip Mein Elaichi Ki Khushboo",
    image: "/projects/our-craft/sugandh-tea.webp",
    link: "/projects/sugandh-tea",
  },
  {
    id: "samridhi-millind",
    client: "SAMRIDHI",
    clientId: "samridhi",
    category: "Live Performance",
    title: "Millind Gaba Live Musical Concert",
    image: "/projects/our-craft/samridhi.webp",
    link: "/projects/samridhi",
  },
  {
    id: "samridhi-bassi",
    client: "SAMRIDHI",
    clientId: "samridhi",
    category: "Live Performance",
    title: "Anubhav Singh Bassi Live Arena Show",
    image: "/projects/our-craft/samridhi-1.webp",
    link: "/projects/samridhi",
  },
  {
    id: "saviour-park",
    client: "Saviour Park Elite",
    clientId: "saviour-park",
    category: "Live Performance",
    title: "Jassie Gill Live Musical Performance",
    image: "/projects/our-craft/saviour-park-elite.webp",
    link: "/projects/saviour-park",
  },
  {
    id: "vm-huma",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "Brand Ambassador",
    title: "Huma Qureshi — Brand Ambassador",
    image: "/projects/our-craft/vikram-mills-hq.webp",
    link: "/projects/vikram-mills",
  },
  {
    id: "big-fm-adah",
    client: "BIG FM",
    clientId: "big-fm",
    category: "Event Appearance",
    title: "Adah Sharma — BIG Impact Awards 2024",
    image: "/projects/our-craft/big-fm.webp",
    link: "/projects/big-fm",
  },
  {
    id: "smile-train",
    client: "Smile Train",
    clientId: "smile-train",
    category: "Radio, OOH, Digital, Print",
    title: "You Can Make a Difference Campaign",
    image: "/projects/our-craft/smile-train.webp",
    link: "/projects/smile-train",
  },
  {
    id: "civitech",
    client: "CIVITECH",
    clientId: "civitech",
    category: "Design",
    title: "Turn the Key to a New World",
    image: "/projects/our-craft/civitech.webp",
    link: "/projects/civitech",
  },
  {
    id: "galaxy",
    client: "GALAXY",
    clientId: "galaxy",
    category: "Radio, OOH, Print",
    title: "Sawasdee Heights Premium Residences",
    image: "/projects/our-craft/galaxy.webp",
    link: "/projects/galaxy",
  },
  {
    id: "agropure",
    client: "AgroPure",
    clientId: "agropure",
    category: "Design",
    title: "Five Decades of Trust & Quality",
    image: "/projects/our-craft/agropure.webp",
    link: "/projects/agropure",
  },
  {
    id: "kidsmate",
    client: "KIDSMATE",
    clientId: "kidsmate",
    category: "Brand Ambassador",
    title: "Shweta Tiwari — Brand Ambassador",
    image: "/projects/our-craft/kidsmate.webp",
    link: "/projects/kidsmate",
  },
  {
    id: "kiloi",
    client: "KILOI",
    clientId: "kiloi",
    category: "Brand Ambassador",
    title: "Huma Qureshi — Brand Ambassador",
    image: "/projects/our-craft/kiloi.webp",
    link: "/projects/kiloi-food",
  },
];

export default function OurCraftMarqueeSectionV3() {
  // Partition all 34 projects evenly across 4 rows
  const { row1, row2, row3, row4 } = useMemo(() => {
    const r1 = [];
    const r2 = [];
    const r3 = [];
    const r4 = [];

    MARQUEE_PROJECTS.forEach((item, index) => {
      const target = index % 4;
      if (target === 0) r1.push(item);
      else if (target === 1) r2.push(item);
      else if (target === 2) r3.push(item);
      else r4.push(item);
    });

    return { row1: r1, row2: r2, row3: r3, row4: r4 };
  }, []);

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
          <Sparkles size={10} />
          <span>{project.client}</span>
        </span>

        <h4 className="v3-craft-card-title">{project.title}</h4>

        <div className="v3-craft-card-footer">
          <span className="v3-craft-card-category">{project.category}</span>
          <span className="v3-craft-card-arrow" aria-hidden="true">
            <ArrowUpRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  );

  return (
    <section className="v3-craft-marquee-section" id="craft" data-anchor="work">
      {/* Top Editorial Header: ONLY "OUR CRAFT" as heading */}
      <div className="container-fluid v3-section-container px-3 px-md-5 px-xl-5">
        <div className="row mb-4 align-items-end justify-content-between g-4">
          <div className="col-12 col-lg-12">
            <div className="v3-cs-eyebrow-wrap">
              <span className="v3-cs-eyebrow-dash" />
              <span className="v3-cs-eyebrow">
                Lorem Ipsum
              </span>
            </div>
            <h2 className="v3-cs-headline">
              Our <span>Craft</span>
            </h2>
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
            <span>EXPLORE ALL CRAFTS</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
