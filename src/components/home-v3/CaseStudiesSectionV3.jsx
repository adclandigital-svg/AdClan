"use client";

import { ArrowRight, ArrowUpRight, Sparkles, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import "./caseStudiesV3.css";

// Curated Real Case Studies from AdClan Portfolio
const CASE_STUDIES = [
  {
    id: "cs-right-gold",
    title:
      "Right Gold — Turning Trust into Sales Through Strategic Video Marketing",
    client: "Right Gold Jewellers",
    category: "HIGH JEWELLERY",
    filterCat: "HIGH JEWELLERY",
    metric: "3.8x ROAS",
    tag: "National Video Campaign",
    image: "/case-studies/Right Gold.webp",
    link: "/case-studies/right-gold-case-study",
    excerpt:
      "Crafted royal bridal campaign films and multi-city digital storytelling that transformed jewellery heritage into unprecedented retail footfall and sales conversion.",
  },
  {
    id: "cs-galaxy",
    title:
      "Galaxy Sawasdee Heights — Real Estate Luxury Commercial & Experiential Launch",
    client: "Galaxy Group",
    category: "REAL ESTATE",
    filterCat: "REAL ESTATE",
    metric: "450K+ Footfall",
    tag: "Experiential & 3D Visuals",
    image: "/case-studies/galaxy-case-study.webp",
    link: "/case-studies/galaxy-sawasdee-heights-case-study",
    excerpt:
      "Targeted high-net-worth property buyers through cinematic architectural unveilings, interactive digital touchpoints, and premium on-ground experiential events.",
  },
  {
    id: "cs-vikram-mills",
    title:
      "Vikram Mills — FMCG Heritage Packaging, Rebranding & National Scale",
    client: "Vikram Mills",
    category: "FMCG PACKAGING",
    filterCat: "FMCG PACKAGING",
    metric: "32% Market Expansion",
    tag: "Packaging Architecture & TVC",
    image: "/case-studies/vikram-mills.webp",
    link: "/case-studies/vikram-mills-case-study",
    excerpt:
      "Re-engineered household staple packaging with modern nutritional clarity, accompanied by prime-time broadcast commercials establishing massive shelf presence.",
  },
  {
    id: "cs-ace-hanei",
    title:
      "Ace Hanei — Luxury Architectural Unveiling & Masterclass Campaign Launch",
    client: "Ace Group",
    category: "REAL ESTATE",
    filterCat: "REAL ESTATE",
    metric: "100% Sold Out",
    tag: "Integrated Launch Masterclass",
    image: "/case-studies/artboard-4.webp",
    link: "/case-studies/adclan-media-triumph-ace-hanei",
    excerpt:
      "Delivered an omnichannel marketing masterclass combining celebrity handling, CGI walkthroughs, and high-frequency digital media that fully subscribed the inventory.",
  },
  {
    id: "cs-kidsmate",
    title: "Kidsmate by Leader Cycles — Shweta Tiwari National TVC Campaign",
    client: "Kidsmate Cycles",
    category: "CELEBRITY PR",
    filterCat: "CELEBRITY PR",
    metric: "1 Lakh+ Customers",
    tag: "Celebrity Endorsement",
    image: "/case-studies/artboard-2.webp",
    link: "/case-studies/adclan-onboard-shweta-tiwari",
    excerpt:
      "Onboarded celebrated actress Shweta Tiwari for an emotional prime-time TV commercial highlighting quality and trust, capturing commanding market share.",
  },
  {
    id: "cs-radio",
    title:
      "5 Radio Advertising Strategies Engineered for Exponential Business Growth",
    client: "AdClan Audio Desk",
    category: "MEDIA BUYING",
    filterCat: "MEDIA BUYING",
    metric: "12M+ Broadcast Reach",
    tag: "Audio Jingles & Frequency",
    image: "/case-studies/artboard-5.webp",
    link: "/case-studies/5-radio-ads-strategies-for-buisness-growth",
    excerpt:
      "Engineered high-recall signature radio jingles, prime-drive time sponsorships, and multi-station frequency planning driving immediate in-store inquiries.",
  },
];

const FILTER_TABS = [
  { id: "ALL", label: "All Case Studies" },
  { id: "HIGH JEWELLERY", label: "High Jewellery" },
  { id: "REAL ESTATE", label: "Real Estate" },
  { id: "FMCG PACKAGING", label: "FMCG Packaging" },
  { id: "CELEBRITY PR", label: "Celebrity PR" },
];

export default function CaseStudiesSectionV3() {
  const [activeTab, setActiveTab] = useState("ALL");

  const filteredStudies = useMemo(() => {
    if (activeTab === "ALL") return CASE_STUDIES;
    return CASE_STUDIES.filter((item) => item.filterCat === activeTab);
  }, [activeTab]);

  return (
    <section className="v3-cs-section" id="case-studies">
      <div className="container-fluid v3-section-container px-3 px-md-5 px-xl-5">
        {/* =====================================================================
            1. SECTION HEADER
            ===================================================================== */}
        <div className="row mb-4 align-items-end justify-content-between g-4">
          <div className="col-12 col-lg-8">
            <div className="v3-cs-eyebrow-wrap">
              <span className="v3-cs-eyebrow-dash" />
              <span className="v3-cs-eyebrow">
                PROVEN IMPACT • BENCHMARK DEPLOYMENTS
              </span>
            </div>
            <h2 className="v3-cs-headline">
              Case <span>Studies.</span>
            </h2>
            <p className="v3-cs-subtext mb-0">
              In-depth dissections of how we engineer cultural dominance, brand
              authority, and commercially disruptive growth for India&apos;s
              market leaders.
            </p>
          </div>

          <div className="col-12 col-lg-4 text-lg-end">
            <Link href="/case-studies" className="v3-cs-top-btn">
              <span>VIEW ALL CASE STUDIES</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        {/* =====================================================================
            2. INTERACTIVE CATEGORY FILTER TABS
            ===================================================================== */}
        <div className="v3-cs-filters">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`v3-cs-filter-btn ${activeTab === tab.id ? "is-active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* =====================================================================
            3. CASE STUDIES GRID
            ===================================================================== */}
        <div className="row g-4 v3-cs-grid">
          {filteredStudies.map((study) => (
            <div key={study.id} className="col-12 col-md-6 col-lg-4 d-flex">
              <Link href={study.link} className="v3-cs-card w-100">
                {/* Media Image Frame */}
                <div className="v3-cs-media">
                  {/* biome-ignore lint/performance/noImgElement: static portfolio image asset */}
                  <img
                    src={study.image}
                    alt={study.title}
                    className="v3-cs-img"
                    loading="lazy"
                  />
                  <div className="v3-cs-media-shade" />

                  {/* Client Badge (Top-Left) */}
                  <div className="v3-cs-client-badge">
                    <Sparkles size={10} />
                    <span>{study.client}</span>
                  </div>

                  {/* Metric Pill (Top-Right) */}
                  <div className="v3-cs-metric-pill">
                    <TrendingUp size={12} />
                    <span>{study.metric}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="v3-cs-body">
                  <div className="v3-cs-category-row">
                    <span className="v3-cs-category">{study.category}</span>
                    <span className="v3-cs-tag">{study.tag}</span>
                  </div>

                  <h3 className="v3-cs-title">{study.title}</h3>
                  <p className="v3-cs-excerpt">{study.excerpt}</p>
                </div>

                {/* Card Footer CTA */}
                <div className="v3-cs-footer">
                  <div className="v3-cs-cta-link">
                    <span className="v3-cs-cta-dash" />
                    <span>READ FULL CASE STUDY</span>
                    <ArrowUpRight size={14} className="v3-cs-cta-arrow" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* =====================================================================
            4. SIGNATURE BOTTOM ACTION BAR
            ===================================================================== */}
        <div className="v3-cs-bottom-cta">
          <Link href="/case-studies" className="v3-cs-signature-link">
            <span>EXPLORE COMPLETE ADCLAN CASE STUDY ARCHIVE</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
