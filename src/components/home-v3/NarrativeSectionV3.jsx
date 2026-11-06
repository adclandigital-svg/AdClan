"use client";

import { Plus, Quote, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const LEADERSHIP_TEAM = [
  {
    id: "sandeep-dubey",
    firstName: "Sandeep",
    lastName: "Dubey",
    role: "Founder & Chief Executive Officer",
    roleLines: ["Founder & Chief", "Executive Officer"],
    location: "New Delhi Headquarters",
    image: "/about/ceo2.png",
    bio: [
      "Sandeep Dubey is a recognized leader known for leveraging the transformative power of creativity, not just to solve complex challenges and drive significant business impact, but to actively shape the future of marketing for the world's most iconic and heartland brands. As Founder & CEO of AdClan, he leads one of India's fastest-growing creative networks, delivering seamless solutions at the intersection of its diverse marketing capabilities spanning broadcast advertising, PR, social & influence, customer engagement, consulting, and digital performance.",
      "Over the past 15 years, Sandeep has proven his exceptional ability to assemble world-class talent and deliver creative impact at an unprecedented scale. He masterfully integrates creative, media, influencer, commerce, PR, data and technology into a cohesive marketing ecosystem that is innovative at its core and tailored to support marketing transformations for iconic enterprises across FMCG, retail, broadcasting, and luxury sectors.",
      "Beyond his commercial achievements, Sandeep is deeply committed to strategic empathy. He believes true creative breakthroughs happen not in isolation, but by listening closely to real people, understanding market dynamics, and executing with obsessive attention to craft.",
    ],
    press: [
      {
        title: "Sandeep Dubey on Leading AdClan's FMCG & Media Transformations",
        url: "/home-v3/work",
      },
      {
        title: "Keynote: The Power of Heartland Brand Storytelling",
        url: "/home-v3/work",
      },
    ],
    contact: [
      { label: "LinkedIn", url: "https://www.linkedin.com" },
      { label: "Email", url: "mailto:sandeep@adclan.in" },
    ],
  },
  {
    id: "pooja-sharma",
    firstName: "Pooja",
    lastName: "Sharma",
    role: "Chief Creative Officer & Partner",
    roleLines: ["Chief Creative", "Officer & Partner"],
    location: "New Delhi Headquarters",
    image: "/about/leader-cco.jpg",
    bio: [
      "Pooja Sharma serves as Chief Creative Officer & Partner at AdClan, directing the agency’s multifaceted creative atelier across brand design, commercial film production, and high-fashion visual narratives. Her work seamlessly balances commercial precision with artistic audacity, driving unforgettable brand recall across consumer touchpoints.",
      "With over 12 years of experience leading creative teams at premier national agencies, Pooja has directed commercial shoots for high-jewellery collections, iconic bridal campaigns, and fast-moving consumer packaged goods. She champions visual authenticity and cinematic grandeur in every frame, ensuring each brand narrative commands emotional resonance.",
      "Pooja holds a master's degree in Communication Design and actively mentors emerging visual artists and creative strategists across the Indian creative landscape.",
    ],
    press: [
      {
        title: "Pooja Sharma Directs Imperial Jewellery TVC Broadcast Campaign",
        url: "/home-v3/work",
      },
      {
        title:
          "AdClan Atelier: The Intersection of Haute Joaillerie & High Art",
        url: "/home-v3/work",
      },
    ],
    contact: [
      { label: "LinkedIn", url: "https://www.linkedin.com" },
      { label: "Email", url: "mailto:pooja@adclan.in" },
    ],
  },
  {
    id: "rahul-verma",
    firstName: "Rahul",
    lastName: "Verma",
    role: "Chief Strategy Officer & Media Head",
    roleLines: ["Chief Strategy", "Officer & Media Head"],
    location: "New Delhi Headquarters",
    image: "/about/leader-cso.jpg",
    bio: [
      "Rahul Verma leads Strategy and Media Orchestration at AdClan, uniting deep consumer behavioral insights with surgical media buying across television, radio, digital channels, and experiential activations.",
      "Having architected multi-crore media strategies for major retail chains, FM radio flagship networks, and direct-to-consumer innovators, Rahul specializes in turning creative ambition into measurable commercial velocity through precision audience segmentation and attribution modeling.",
      "A data-driven strategist with a passion for emerging technologies, Rahul oversees AdClan's performance intelligence frameworks, ensuring clients achieve unparalleled reach, engagement, and sustainable market share.",
    ],
    press: [
      {
        title:
          "Rahul Verma on Omnichannel Media Synergy & Primetime Radio Reach",
        url: "/home-v3/work",
      },
      {
        title: "Performance Intelligence & Audience Modeling Frameworks",
        url: "/home-v3/work",
      },
    ],
    contact: [
      { label: "LinkedIn", url: "https://www.linkedin.com" },
      { label: "Email", url: "mailto:rahul@adclan.in" },
    ],
  },
];

export default function NarrativeSectionV3({ isStandalone = false }) {
  const [activeLeaderId, setActiveLeaderId] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const stageRef = useRef(null);

  const activeLeader = LEADERSHIP_TEAM.find((l) => l.id === activeLeaderId);

  const handleSelectLeader = (leaderId) => {
    if (isClosing) return;
    if (activeLeaderId === leaderId) {
      handleClose();
      return;
    }
    setIsClosing(false);
    setActiveLeaderId(leaderId);
  };

  const handleClose = () => {
    if (!activeLeaderId || isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      setActiveLeaderId(null);
      setIsClosing(false);
    }, 480);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && activeLeaderId && !isClosing) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLeaderId, isClosing]);

  return (
    <section
      className={`v3-narrative-section ${isStandalone ? "is-standalone" : ""}`}
      id="narrative"
    >
      <div
        className={`container-fluid v3-section-container px-3 px-md-5 px-xl-5 ${isStandalone ? "pt-4" : ""}`}
      >
        {/* =====================================================================
            1. EDITORIAL SPREAD: MANIFESTO & PHILOSOPHY
            ===================================================================== */}
        <div className="row mb-4">
          <div className="col-12 col-lg-10 col-xl-8">
            <h1 className="v3-editorial-headline">
              The Art of Listening. <br />
              <span>The Power of Impact.</span>
            </h1>
          </div>
        </div>

        {/* Editorial Two-Column Spread via Bootstrap Grid */}
        <div className="row g-4 g-xl-5 align-items-start mb-5 v3-narrative-intro-spread">
          {/* Left Column: Studio Photo + Micro Metrics Strip */}
          <div className="col-12 col-lg-6 v3-narrative-col-left">
            <div className="v3-narrative-image-wrapper">
              <img
                src="/home-v3/narrative_studio_adclan.jpg"
                alt="AdClan Atelier of Strategic Design"
                className="v3-narrative-studio-img"
                loading="lazy"
              />
              <div className="v3-image-corner-tag">
                <span>NEW DELHI ATELIER • EST. 2018</span>
              </div>
            </div>

            {/* Micro-metrics with clean Bootstrap col-4 distribution */}
            <div className="row g-2 text-center v3-narrative-metrics-strip mt-2">
              <div className="col-4 v3-narrative-metric-item">
                <span className="v3-metric-val">360°</span>
                <span className="v3-metric-name">Full-Stack Capability</span>
              </div>
              <div className="col-4 v3-narrative-metric-item">
                <span className="v3-metric-val">7+</span>
                <span className="v3-metric-name">Years of Excellence</span>
              </div>
              <div className="col-4 v3-narrative-metric-item">
                <span className="v3-metric-val">100+</span>
                <span className="v3-metric-name">Brands Empowered</span>
              </div>
            </div>
          </div>

          {/* Right Column: Pull Quote, Deep Philosophy & Signature CTA */}
          <div className="col-12 col-lg-6 v3-narrative-col-right d-flex flex-column justify-content-between">
            <div className="v3-editorial-quote-card">
              <Quote size={28} className="v3-quote-glyph" />
              <blockquote className="v3-manifesto-quote">
                “When the creator made us with two ears and one mouth, it was
                clear that we were meant to listen more and speak less.”
              </blockquote>
            </div>

            <div className="v3-manifesto-body">
              <p>
                At our core, Adclan operates on deep empathy and rigorous
                inquiry. Most agencies walk into the boardroom with a
                pre-packaged pitch deck; we walk in with open ears,
                uncompromising curiosity, and a relentless commitment to
                understanding your business fundamentals before sketching a
                single frame.
              </p>
              <p>
                Blending brand architecture, cinematic visual storytelling, and
                surgical media analytics across traditional television, digital
                networks, OTT platforms, and live arenas, we build comprehensive
                ecosystems that command attention and drive exponential
                commercial return.
              </p>
            </div>

            <div className="v3-narrative-cta-wrap">
              <Link href="/about" className="v3-editorial-cta-link">
                <span className="v3-cta-dash" aria-hidden="true" />
                <span>EXPLORE OUR PHILOSOPHY</span>
                <span className="v3-cta-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================================
            2. METHODOLOGY: THINK. CREATE. DELIVER. (ARCHITECTURAL STRIP)
            ===================================================================== */}
        <div className="v3-methodology-section mb-5 pb-3">
          <div className="row mb-4">
            <div className="col-12">
              <span className="v3-sub-eyebrow">OUR METHODOLOGY</span>
              <h3 className="v3-methodology-heading">
                The Three Pillars of Brand Evolution
              </h3>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="v3-pillar-card h-100">
                <div className="v3-pillar-top">
                  <span className="v3-pillar-num">01</span>
                  <span className="v3-pillar-phase">STRATEGY</span>
                </div>
                <h4 className="v3-pillar-title">Think.</h4>
                <p className="v3-pillar-desc">
                  We start with razor-sharp insight and market interrogation. We
                  analyze cultural undercurrents and audience psychology to
                  ensure every creative initiative has undeniable commercial
                  intent.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="v3-pillar-card h-100">
                <div className="v3-pillar-top">
                  <span className="v3-pillar-num">02</span>
                  <span className="v3-pillar-phase">CREATIVE</span>
                </div>
                <h4 className="v3-pillar-title">Create.</h4>
                <p className="v3-pillar-desc">
                  We design and build unforgettable brand universes. From
                  broadcast TVCs to digital growth systems, aesthetic excellence
                  meets modern technology to move audiences deeply.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="v3-pillar-card h-100">
                <div className="v3-pillar-top">
                  <span className="v3-pillar-num">03</span>
                  <span className="v3-pillar-phase">ORCHESTRATION</span>
                </div>
                <h4 className="v3-pillar-title">Deliver.</h4>
                <p className="v3-pillar-desc">
                  We execute with precision across media channels. Every project
                  is measured for performance, engagement, and exponential brand
                  recall that compounds for years.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            3. AGENCY LEADERSHIP (EXACT OGILVY TEAM ARCHITECTURE - IN-PLACE SLIDING STAGE)
            - 3-column portrait grid with solid #1e498b on hover
            - In-place sliding mechanism:
              * Card 1 stays in Column 1, Details in Columns 2 & 3
              * Card 2 (Center) photo slides left to Column 1, Details in Columns 2 & 3
              * Card 3 (Right) photo slides left to Column 1, Details in Columns 2 & 3
              * Close (✕) smoothly slides active photo back to its column
            ===================================================================== */}
        <div
          className="v3-team-section pt-4 mt-2"
          id="leadership"
          ref={stageRef}
        >
          <div className="v3-team-header-inner">
            <div className="row mb-4 align-items-end justify-content-between g-4">
              <div className="col-12 col-lg-8">
                <div className="v3-section-eyebrow-wrap">
                  <span className="v3-eyebrow-dash" />
                  <span className="v3-section-eyebrow">AGENCY LEADERSHIP</span>
                </div>

                <h2 className="v3-editorial-headline mb-0">Our Leadership.</h2>
              </div>

              <div className="col-12 col-lg-4 text-lg-end">
                <span
                  style={{
                    fontFamily: "Raleway",
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "0.16em",
                    color: "#1e498b",
                    textTransform: "uppercase",
                  }}
                >
                  EXECUTIVE PARTNERS • ADCLAN
                </span>
              </div>
            </div>
          </div>

          {/* In-Place 3-Column Sliding Stage */}
          <div
            className={`v3-team-stage ${activeLeader ? "is-expanded" : ""} ${
              isClosing ? "is-closing" : ""
            }`}
          >
            {LEADERSHIP_TEAM.map((leader, index) => {
              const isActive = activeLeader?.id === leader.id;
              const isOther = activeLeader && !isActive;

              return (
                <div
                  key={leader.id}
                  className={`v3-team-card-slot slot-${index} ${
                    isActive ? "is-active" : ""
                  } ${isOther ? "is-hidden" : ""}`}
                  onClick={() =>
                    isActive ? handleClose() : handleSelectLeader(leader.id)
                  }
                  role="button"
                  tabIndex={0}
                  aria-label={`${leader.firstName} ${leader.lastName} - ${leader.role}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      isActive ? handleClose() : handleSelectLeader(leader.id);
                    }
                  }}
                >
                  <div className="v3-team-card">
                    {/* Clean Studio Portrait */}
                    <img
                      src={leader.image}
                      alt={`${leader.firstName} ${leader.lastName}`}
                      className="v3-team-portrait"
                      loading="lazy"
                    />

                    {/* Solid #1e498b Card Hover Overlay */}
                    <div className="v3-team-hover-overlay">
                      <h3 className="v3-team-overlay-name">
                        {leader.firstName}
                        <span>{leader.lastName}</span>
                      </h3>

                      <p className="v3-team-overlay-title">
                        {leader.roleLines.map((line, i) => (
                          <span key={i}>{line}</span>
                        ))}
                      </p>

                      <div className="v3-team-overlay-plus" aria-hidden="true">
                        <Plus size={26} strokeWidth={1.4} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* In-Place Details Panel Spanning Columns 2 & 3 */}
            {activeLeader && (
              <div
                className={`v3-team-details-panel ${
                  isClosing ? "is-closing" : ""
                }`}
              >
                {/* Column 1: Identity */}
                <div className="v3-ogilvy-col-identity">
                  <h3 className="v3-ogilvy-drawer-name">
                    {activeLeader.firstName}
                    <span className="d-block">{activeLeader.lastName}</span>
                  </h3>
                  <p className="v3-ogilvy-drawer-title">
                    {activeLeader.roleLines.map((line, i) => (
                      <span key={i} className="d-block">
                        {line}
                      </span>
                    ))}
                  </p>
                  <span className="v3-team-location-badge">
                    {activeLeader.location}
                  </span>
                </div>

                {/* Column 2: Biographical Narrative */}
                <div
                  className="v3-ogilvy-drawer-bio"
                  data-lenis-prevent
                  onWheel={(e) => e.stopPropagation()}
                >
                  {activeLeader.bio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {/* Column 3: Recent Press & Contact */}
                <div className="v3-ogilvy-col-meta">
                  <div className="v3-ogilvy-drawer-meta-section">
                    <h5 className="v3-ogilvy-drawer-meta-title">
                      Recent Press
                    </h5>
                    <ul className="v3-ogilvy-drawer-meta-list">
                      {activeLeader.press.map((item, i) => (
                        <li key={i}>
                          <a
                            href={item.url}
                            className="v3-ogilvy-drawer-meta-link"
                          >
                            <span className="v3-ogilvy-drawer-arrow">→</span>
                            <span>{item.title}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="v3-ogilvy-drawer-meta-section">
                    <h5 className="v3-ogilvy-drawer-meta-title">Contact</h5>
                    <ul className="v3-ogilvy-drawer-meta-list">
                      {activeLeader.contact.map((c, i) => (
                        <li key={i}>
                          <a
                            href={c.url}
                            target={
                              c.url.startsWith("http") ? "_blank" : undefined
                            }
                            rel={
                              c.url.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="v3-ogilvy-drawer-meta-link"
                          >
                            <span className="v3-ogilvy-drawer-arrow">→</span>
                            <span>{c.label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Close Icon in Bottom Right */}
                <button
                  type="button"
                  className="v3-ogilvy-drawer-close"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClose();
                  }}
                  aria-label="Close biography drawer"
                >
                  <X size={22} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
