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
      "Crafted royal bridal campaign films and multi-city digital storytelling driving massive footfall and sales conversion.",
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
      "Targeted high-net-worth property buyers through cinematic architectural unveilings, interactive digital touchpoints, and premium experiential events.",
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
      "Re-engineered household staple packaging with modern nutritional clarity, accompanied by high-impact commercials establishing market leadership.",
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
      "Delivered an omnichannel marketing masterclass combining celebrity handling, CGI walkthroughs, and high-frequency targeted digital media.",
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
      "Onboarded celebrated actress Shweta Tiwari for an emotional prime-time TV commercial capturing commanding market share.",
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
      "Engineered high-recall signature radio jingles, prime-drive time sponsorships, and multi-station frequency planning driving instant inquiries.",
  },
];

// Helper to ensure strictly 15 words description
function get15Words(text) {
  if (!text) return "";
  const words = text.trim().split(/\s+/);
  return words.slice(0, 15).join(" ");
}

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
            - Front: Only image with minimal info (Client badge & Metric pill)
            - On Hover: Reveal overlay with Title, 15 words description & Button (like Our Craft)
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

                  {/* Front Minimal Info: Client Badge (Top-Left) */}
                  <div className="v3-cs-client-badge">
                    <Sparkles size={10} />
                    <span>{study.client}</span>
                  </div>

                  {/* Front Minimal Info: Metric Pill (Top-Right) */}
                  <div className="v3-cs-metric-pill">
                    <TrendingUp size={12} />
                    <span>{study.metric}</span>
                  </div>

                  {/* On Hover Reveal Overlay (Title + 15 Words Description + Bottom Button) */}
                  <div className="v3-cs-hover-overlay">
                    <h3 className="v3-cs-hover-title">{study.title}</h3>
                    <p className="v3-cs-hover-desc">
                      {get15Words(study.excerpt)}
                    </p>
                    <div className="v3-cs-hover-btn">
                      <span>READ CASE STUDY</span>
                      <span
                        className="v3-cs-hover-btn-arrow"
                        aria-hidden="true"
                      >
                        <ArrowUpRight size={13} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* =====================================================================
            4. SIGNATURE BOTTOM ACTION BAR
            ===================================================================== */}
        {/* <div className="v3-cs-bottom-cta">
          <Link href="/case-studies" className="v3-cs-signature-link">
            <span>EXPLORE COMPLETE ADCLAN CASE STUDY ARCHIVE</span>
            <ArrowRight size={15} />
          </Link>
        </div> */}
      </div>
    </section>
  );
}
