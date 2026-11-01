"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, Star } from "lucide-react";

const CRAFT_PROJECTS = [
  // =========================================================================
  // 1. VIKRAM MILLS — FMCG, Packaging & TVC (9 CARDS)
  // =========================================================================
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
    effectType: "logo-reveal",
    badgeText: "HERITAGE FMCG",
  },
  {
    id: "vm-2",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "Commercial Advertising",
    title: "National Television Commercial & Digital TVC",
    excerpt: "Broadcast TVC capturing warm family moments, heritage milling purity, and pan-India trust.",
    image: "/projects/vikram-mills/cb-banner.png",
    clientLogo: "/projects/vikram-mills/logo1.jpg",
    logoAlt: "Vikram Mills Logo",
    link: "/projects/vikram-mills",
    tags: ["TV Commercial", "Broadcast Media", "FMCG"],
    effectType: "logo-reveal",
    badgeText: "TVC CAMPAIGN",
  },
  {
    id: "vm-3",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "Retail Packaging Design",
    title: "Maida & Fine Flour Retail Packaging Architecture",
    excerpt: "Vibrant shelf packaging series designed for maximum shelf presence in modern retail aisles.",
    image: "/projects/vikram-mills/creatives/1.jpg",
    clientLogo: "/projects/vikram-mills/logo1.jpg",
    logoAlt: "Vikram Mills Logo",
    link: "/projects/vikram-mills",
    tags: ["Retail Packaging", "FMCG Essentials", "Shelf Appeal"],
    effectType: "logo-reveal",
    badgeText: "RETAIL PACKAGING",
  },
  {
    id: "vm-4",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "Packaging Architecture",
    title: "Chakki Atta Premium Golden Harvest 5KG Pack",
    excerpt: "High-contrast packaging design communicating 100% whole wheat grain nutrition and freshness.",
    image: "/projects/vikram-mills/creatives/2.jpg",
    clientLogo: "/projects/vikram-mills/logo1.jpg",
    logoAlt: "Vikram Mills Logo",
    link: "/projects/vikram-mills",
    tags: ["Whole Wheat", "Consumer Pack", "FMCG"],
    effectType: "logo-reveal",
    badgeText: "PACKAGING SUITE",
  },
  {
    id: "vm-5",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "FMCG Brand Extension",
    title: "Fine Sooji & Kitchen Staples Design Series",
    excerpt: "Complete packaging suite for staple culinary grains maintaining brand visual coherence.",
    image: "/projects/vikram-mills/creatives/3.jpg",
    clientLogo: "/projects/vikram-mills/logo1.jpg",
    logoAlt: "Vikram Mills Logo",
    link: "/projects/vikram-mills",
    tags: ["Culinary Staples", "Product Line", "Brand System"],
    effectType: "logo-reveal",
    badgeText: "PRODUCT LAUNCH",
  },
  {
    id: "vm-6",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "Healthy Living Packaging",
    title: "Nutritious Roasted Dalia Family Pack",
    excerpt: "Packaging refresh targeting health-conscious modern families and fitness-oriented kitchens.",
    image: "/projects/vikram-mills/creatives/4.jpg",
    clientLogo: "/projects/vikram-mills/logo1.jpg",
    logoAlt: "Vikram Mills Logo",
    link: "/projects/vikram-mills",
    tags: ["Health & Nutrition", "Dalia Pack", "Modern Consumer"],
    effectType: "logo-reveal",
    badgeText: "HEALTH & WELLNESS",
  },
  {
    id: "vm-7",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "Heritage FMCG Series",
    title: "Pure Gram Flour (Besan) Visual Identity",
    excerpt: "Heritage-inspired golden yellow packaging for festive and daily Indian culinary preparation.",
    image: "/projects/vikram-mills/creatives/5.jpg",
    clientLogo: "/projects/vikram-mills/logo1.jpg",
    logoAlt: "Vikram Mills Logo",
    link: "/projects/vikram-mills",
    tags: ["Festive Staples", "Besan Pack", "FMCG"],
    effectType: "logo-reveal",
    badgeText: "FMCG ESSENTIALS",
  },
  {
    id: "vm-8",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "Bulk & Retail Packaging",
    title: "Modern Retail Shelf 10KG Master Pack",
    excerpt: "Durable multilayer consumer packaging engineered for high-volume modern trade environments.",
    image: "/projects/vikram-mills/pkg/1.png",
    clientLogo: "/projects/vikram-mills/logo1.jpg",
    logoAlt: "Vikram Mills Logo",
    link: "/projects/vikram-mills",
    tags: ["Multilayer Pack", "Modern Trade", "Master Pack"],
    effectType: "logo-reveal",
    badgeText: "SHELF PRESENCE",
  },
  {
    id: "vm-9",
    client: "Vikram Mills",
    clientId: "vikram-mills",
    category: "OOH & Outdoor Print",
    title: "National Print & Hoarding Campaign",
    excerpt: "Impactful outdoor billboard advertising establishing Vikram Mills as North India's trusted choice.",
    image: "/projects/vikram-mills/pkg/2.png",
    clientLogo: "/projects/vikram-mills/logo1.jpg",
    logoAlt: "Vikram Mills Logo",
    link: "/projects/vikram-mills",
    tags: ["Outdoor Hoardings", "Print Campaign", "OOH"],
    effectType: "logo-reveal",
    badgeText: "OUTDOOR CAMPAIGN",
  },

  // =========================================================================
  // 2. RIOT GOLD — Fine Jewellery & TVC Shoot (9 CARDS)
  // =========================================================================
  {
    id: "rg-1",
    client: "Riot Gold",
    clientId: "riot-gold",
    category: "High Jewellery & TVC",
    title: "Imperial Bridal Jewellery Commercial Shoot",
    excerpt: "Cinematic broadcast film and high-concept campaign for Riot Gold luxury bridal collection.",
    image: "/projects/right-gold/banner2.png",
    clientLogo: "/projects/right-gold/logo.png",
    logoAlt: "Riot Gold Logo",
    link: "/projects/right-gold",
    tags: ["Commercial Shoot", "High Jewellery", "TVC Film"],
    effectType: "logo-reveal",
    badgeText: "LUXURY JEWELLERY",
  },
  {
    id: "rg-2",
    client: "Riot Gold",
    clientId: "riot-gold",
    category: "Creative Direction & Print",
    title: "Royal Solitaire & Festive Gold Visual Suite",
    excerpt: "Comprehensive editorial visual identity, print catalog, and luxury digital media assets.",
    image: "/projects/right-gold/banner11.png",
    clientLogo: "/projects/right-gold/logo.png",
    logoAlt: "Riot Gold Logo",
    link: "/projects/right-gold",
    tags: ["Print Suite", "Art Direction", "Fine Gold"],
    effectType: "logo-reveal",
    badgeText: "FINE JEWELLERY",
  },
  {
    id: "rg-3",
    client: "Riot Gold",
    clientId: "riot-gold",
    category: "Video & Photography",
    title: "Atelier Craftsmanship Stills & Digital Campaign",
    excerpt: "High-definition macro photography capturing the precision and opulence of gold craftsmanship.",
    image: "/projects/right-gold/gallery/1.jpg",
    clientLogo: "/projects/right-gold/logo.png",
    logoAlt: "Riot Gold Logo",
    link: "/projects/right-gold",
    tags: ["Macro Photography", "Digital Campaign", "Craftsmanship"],
    effectType: "logo-reveal",
    badgeText: "ATELIER SERIES",
  },
  {
    id: "rg-4",
    client: "Riot Gold",
    clientId: "riot-gold",
    category: "Bridal Jewellery Campaign",
    title: "Kundan Polki Heritage Bridal Choker",
    excerpt: "Regal bridal adornment editorial captured with cinematic lighting and timeless royal styling.",
    image: "/projects/right-gold/gallery/2.jpg",
    clientLogo: "/projects/right-gold/logo.png",
    logoAlt: "Riot Gold Logo",
    link: "/projects/right-gold",
    tags: ["Kundan Polki", "Bridal Choker", "Royal Heritage"],
    effectType: "logo-reveal",
    badgeText: "HERITAGE BRIDAL",
  },
  {
    id: "rg-5",
    client: "Riot Gold",
    clientId: "riot-gold",
    category: "High Jewellery Collection",
    title: "Imperial Emerald & Gold Statement Suite",
    excerpt: "Signature jewelry campaign showcasing exquisite Colombian emeralds set in hand-carved gold.",
    image: "/projects/right-gold/gallery/3.jpg",
    clientLogo: "/projects/right-gold/logo.png",
    logoAlt: "Riot Gold Logo",
    link: "/projects/right-gold",
    tags: ["Emerald Suite", "Statement Piece", "High Jewellery"],
    effectType: "logo-reveal",
    badgeText: "SIGNATURE PIECE",
  },
  {
    id: "rg-6",
    client: "Riot Gold",
    clientId: "riot-gold",
    category: "Fine Diamond Collection",
    title: "Diamond Solitaire Contemporary Elegance",
    excerpt: "Sleek, modern fine jewelry storytelling designed for contemporary luxury connoisseurs.",
    image: "/projects/right-gold/gallery/4.jpg",
    clientLogo: "/projects/right-gold/logo.png",
    logoAlt: "Riot Gold Logo",
    link: "/projects/right-gold",
    tags: ["Solitaire Ring", "Fine Diamonds", "Modern Luxury"],
    effectType: "logo-reveal",
    badgeText: "SOLITAIRE ATELIER",
  },
  {
    id: "rg-7",
    client: "Riot Gold",
    clientId: "riot-gold",
    category: "Traditional Craftsmanship",
    title: "Handcrafted Temple Gold Jhumkas & Maang Tikka",
    excerpt: "Intricate antique gold finish campaign honoring South and North Indian temple artisan roots.",
    image: "/projects/right-gold/gallery/5.jpg",
    clientLogo: "/projects/right-gold/logo.png",
    logoAlt: "Riot Gold Logo",
    link: "/projects/right-gold",
    tags: ["Temple Jewellery", "Antique Gold", "Artisan Stills"],
    effectType: "logo-reveal",
    badgeText: "TEMPLE JEWELLERY",
  },
  {
    id: "rg-8",
    client: "Riot Gold",
    clientId: "riot-gold",
    category: "Occasion & Wedding",
    title: "Royal Rajputana Hathphool & Bangles",
    excerpt: "Grand destination wedding visual assets highlighting opulent Rajasthani bridal jewelry.",
    image: "/projects/right-gold/gallery/6.jpg",
    clientLogo: "/projects/right-gold/logo.png",
    logoAlt: "Riot Gold Logo",
    link: "/projects/right-gold",
    tags: ["Destination Wedding", "Hathphool", "Bridal Luxury"],
    effectType: "logo-reveal",
    badgeText: "OCCASION WEAR",
  },
  {
    id: "rg-9",
    client: "Riot Gold",
    clientId: "riot-gold",
    category: "Prêt Luxury Series",
    title: "Modern Minimalist 22K Everyday Luxury",
    excerpt: "Lightweight architectural gold collection created for the new generation of luxury buyers.",
    image: "/projects/right-gold/gallery/7.jpg",
    clientLogo: "/projects/right-gold/logo.png",
    logoAlt: "Riot Gold Logo",
    link: "/projects/right-gold",
    tags: ["Prêt Gold", "Everyday Luxury", "Minimalist"],
    effectType: "logo-reveal",
    badgeText: "EVERYDAY LUXURY",
  },

  // =========================================================================
  // 3. BIG FM — Celebrity Appearances & Stars (9 CARDS)
  // =========================================================================
  {
    id: "bfm-1",
    client: "Big FM",
    clientId: "big-fm",
    category: "Celebrity Management",
    title: "Adah Sharma — BIG FM Big Impact Awards 2024",
    excerpt: "Special appearance management, VIP coordination, and multi-channel media coverage.",
    image: "/projects/project-thumbnail/ADAH SHARMA.png",
    clientLogo: "/projects/big-fm/logo.png",
    logoAlt: "BIG FM Logo",
    link: "/projects/big-fm/celebrity-managements",
    tags: ["Big Impact Awards", "Adah Sharma", "Celebrity PR"],
    effectType: "celebrity-snapshot",
    badgeText: "CELEBRITY APPEARANCE",
    celebrityName: "Adah Sharma",
  },
  {
    id: "bfm-2",
    client: "Big FM",
    clientId: "big-fm",
    category: "Celebrity Management",
    title: "Anubhav Singh Bassi — Live Celebrity Feature",
    excerpt: "Mass-audience engagement, media coordination, and on-ground talent handling with Big FM.",
    image: "/projects/project-thumbnail/BASSI.png",
    clientLogo: "/projects/big-fm/logo.png",
    logoAlt: "BIG FM Logo",
    link: "/projects/big-fm/celebrity-managements",
    tags: ["Anubhav Singh Bassi", "Live Event", "Radio PR"],
    effectType: "celebrity-snapshot",
    badgeText: "CELEBRITY APPEARANCE",
    celebrityName: "Anubhav Singh Bassi",
  },
  {
    id: "bfm-3",
    client: "Big FM",
    clientId: "big-fm",
    category: "Celebrity Management",
    title: "Jassie Gill — Star Feature & Musical Night",
    excerpt: "Star talent integration, on-air promotional bursts, and entertainment PR management.",
    image: "/projects/project-thumbnail/JASSIE GILL.png",
    clientLogo: "/projects/big-fm/logo.png",
    logoAlt: "BIG FM Logo",
    link: "/projects/big-fm/celebrity-managements",
    tags: ["Jassie Gill", "Star Feature", "Music & Radio"],
    effectType: "celebrity-snapshot",
    badgeText: "CELEBRITY APPEARANCE",
    celebrityName: "Jassie Gill",
  },
  {
    id: "bfm-4",
    client: "Big FM",
    clientId: "big-fm",
    category: "Celebrity Management",
    title: "Millind Gaba — Youth Pop Icon Radio Concert",
    excerpt: "High-octane concert coordination, digital amplification, and celebrity media relations.",
    image: "/projects/project-thumbnail/MILLIAND GABA.png",
    clientLogo: "/projects/big-fm/logo.png",
    logoAlt: "BIG FM Logo",
    link: "/projects/big-fm/celebrity-managements",
    tags: ["Millind Gaba", "Pop Icon", "Radio Integration"],
    effectType: "celebrity-snapshot",
    badgeText: "CELEBRITY APPEARANCE",
    celebrityName: "Millind Gaba",
  },
  {
    id: "bfm-5",
    client: "Big FM",
    clientId: "big-fm",
    category: "Celebrity Management",
    title: "Huma Qureshi — Cinema & Brand Spotlight",
    excerpt: "Exclusive movie promotional interview, studio media handling, and cross-platform PR.",
    image: "/projects/project-thumbnail/HUMA QURESHI.png",
    clientLogo: "/projects/big-fm/logo.png",
    logoAlt: "BIG FM Logo",
    link: "/projects/big-fm/celebrity-managements",
    tags: ["Huma Qureshi", "Bollywood Cinema", "Media Handling"],
    effectType: "celebrity-snapshot",
    badgeText: "CELEBRITY APPEARANCE",
    celebrityName: "Huma Qureshi",
  },
  {
    id: "bfm-6",
    client: "Big FM",
    clientId: "big-fm",
    category: "Celebrity & Radio Management",
    title: "RJ Naved — Delhi-NCR Iconic Radio Campaign",
    excerpt: "Strategic radio campaign and viral storytelling reaching millions across North India.",
    image: "/projects/project-thumbnail/RJ NAVED.png",
    clientLogo: "/projects/big-fm/logo.png",
    logoAlt: "BIG FM Logo",
    link: "/projects/big-fm/celebrity-managements",
    tags: ["RJ Naved", "Radio Icon", "92.7 BIG FM"],
    effectType: "celebrity-snapshot",
    badgeText: "RADIO STAR CAMPAIGN",
    celebrityName: "RJ Naved",
  },
  {
    id: "bfm-7",
    client: "Big FM",
    clientId: "big-fm",
    category: "Celebrity & Radio Management",
    title: "RJ Lucky — Primetime Drive Radio Show",
    excerpt: "Dynamic radio show branding, on-air client sponsorship integrations, and live digital activations.",
    image: "/projects/project-thumbnail/RJ LUCKY.png",
    clientLogo: "/projects/big-fm/logo.png",
    logoAlt: "BIG FM Logo",
    link: "/projects/big-fm/celebrity-managements",
    tags: ["RJ Lucky", "Drive Show", "Radio Sponsorship"],
    effectType: "celebrity-snapshot",
    badgeText: "RADIO SHOW INTEGRATION",
    celebrityName: "RJ Lucky",
  },
  {
    id: "bfm-8",
    client: "Big FM",
    clientId: "big-fm",
    category: "Celebrity & Radio Management",
    title: "RJ Rahul Makin — Late Night Relationship Show",
    excerpt: "Late-night flagship radio show amplification, digital podcasts, and brand association campaigns.",
    image: "/projects/project-thumbnail/RJ RAHUL Makin.png",
    clientLogo: "/projects/big-fm/logo.png",
    logoAlt: "BIG FM Logo",
    link: "/projects/big-fm/celebrity-managements",
    tags: ["RJ Rahul Makin", "Midnight Talk", "Brand Integration"],
    effectType: "celebrity-snapshot",
    badgeText: "TALK RADIO SERIES",
    celebrityName: "RJ Rahul Makin",
  },
  {
    id: "bfm-9",
    client: "Big FM",
    clientId: "big-fm",
    category: "Celebrity & Radio Management",
    title: "RJ Tripti — Morning Fresh Radio Hour",
    excerpt: "High-energy morning radio show campaign engaging city commuters with engaging daily brand segments.",
    image: "/projects/project-thumbnail/RJ TRIPTI.png",
    clientLogo: "/projects/big-fm/logo.png",
    logoAlt: "BIG FM Logo",
    link: "/projects/big-fm/celebrity-managements",
    tags: ["RJ Tripti", "Morning Drive", "City Commute"],
    effectType: "celebrity-snapshot",
    badgeText: "MORNING FLAGSHIP",
    celebrityName: "RJ Tripti",
  },

  // =========================================================================
  // 4. COMMERCIALS & TVCs (9 CARDS)
  // =========================================================================
  {
    id: "comm-1",
    client: "Vikram Mills",
    clientId: "commercials",
    category: "Commercial Advertising",
    title: "Vikram Mills — National TVC Broadcast Film",
    excerpt: "Prime-time national television commercial capturing pure wholesome grain milling heritage.",
    image: "/projects/vikram-mills/cb-banner.png",
    clientLogo: "/projects/vikram-mills/logo1.jpg",
    logoAlt: "Vikram Mills Logo",
    link: "/projects/vikram-mills",
    tags: ["National TVC", "Broadcast Film", "FMCG"],
    effectType: "logo-reveal",
    badgeText: "BROADCAST TVC",
  },
  {
    id: "comm-2",
    client: "Riot Gold",
    clientId: "commercials",
    category: "Commercial Advertising",
    title: "Riot Gold — Imperial Jewellery TV Commercial",
    excerpt: "Broadcast fashion film celebrating bridal glamour with multi-camera cinematic lighting.",
    image: "/projects/right-gold/banner2.png",
    clientLogo: "/projects/right-gold/logo.png",
    logoAlt: "Riot Gold Logo",
    link: "/projects/right-gold",
    tags: ["Luxury TVC", "High Jewellery", "Fashion Film"],
    effectType: "logo-reveal",
    badgeText: "LUXURY TVC",
  },
  {
    id: "comm-3",
    client: "Clear Dekho",
    clientId: "commercials",
    category: "Commercial Advertising",
    title: "Clear Dekho — Eyewear Retail Commercial",
    excerpt: "High-energy youth commercial campaign driving omnichannel optical retail footfalls.",
    image: "/projects/project-thumbnail/Clear Dekho.png",
    clientLogo: "/projects/clear_dekho/logo.png",
    logoAlt: "Clear Dekho Logo",
    link: "/projects/clear-dekho",
    tags: ["Commercial Ad", "Eyewear Retail", "Omnichannel"],
    effectType: "logo-reveal",
    badgeText: "COMMERCIAL AD",
  },
  {
    id: "comm-4",
    client: "India Gate",
    clientId: "commercials",
    category: "Commercial Advertising",
    title: "India Gate — Heritage Basmati Commercial",
    excerpt: "Premium food commercial highlighting long-grain aromatic perfection and royal hospitality.",
    image: "/projects/project-thumbnail/INDIA GATE.png",
    clientLogo: "/projects/india_gate/logo1.png",
    logoAlt: "India Gate Logo",
    link: "/projects/india-gate",
    tags: ["National TVC", "Basmati Rice", "Heritage"],
    effectType: "logo-reveal",
    badgeText: "NATIONAL TVC",
  },
  {
    id: "comm-5",
    client: "Spring Elmas",
    clientId: "commercials",
    category: "Commercial Advertising",
    title: "Spring Elmas — Ultra Luxury Real Estate Film",
    excerpt: "Architectural lifestyle commercial bringing to life prime luxury residential living.",
    image: "/projects/project-thumbnail/SPRING ELMAS.png",
    clientLogo: "/projects/spring_elmas/logo.png",
    logoAlt: "Spring Elmas Logo",
    link: "/projects/spring-elmas",
    tags: ["Realty Film", "Luxury Estate", "Architecture"],
    effectType: "logo-reveal",
    badgeText: "REALTY FILM",
  },
  {
    id: "comm-6",
    client: "Teaser Spot ACE",
    clientId: "commercials",
    category: "Commercial Advertising",
    title: "Teaser Spot ACE — High Impact Teaser TVC",
    excerpt: "Mysterious teaser spot campaign creating unmatched suspense before national product unveil.",
    image: "/projects/project-thumbnail/Teaser Spot-ACE.png",
    clientLogo: "/projects/teaser_spot-ace/logo.jpeg",
    logoAlt: "Teaser Spot ACE Logo",
    link: "/projects/teaser-spot-ace",
    tags: ["Teaser Campaign", "Broadcast Spot", "Automotive"],
    effectType: "logo-reveal",
    badgeText: "TEASER CAMPAIGN",
  },
  {
    id: "comm-7",
    client: "Tirupati Group",
    clientId: "commercials",
    category: "Commercial Advertising",
    title: "Tirupati Group — Corporate Identity Commercial",
    excerpt: "Panoramic corporate commercial capturing industrial scale, engineering, and trust.",
    image: "/projects/project-thumbnail/TIRUPATI.png",
    clientLogo: "/projects/tirupati/logo.jpeg",
    logoAlt: "Tirupati Logo",
    link: "/projects/tirupati",
    tags: ["Corporate TVC", "Engineering", "Industrial"],
    effectType: "logo-reveal",
    badgeText: "CORPORATE TVC",
  },
  {
    id: "comm-8",
    client: "Smile Train India",
    clientId: "commercials",
    category: "Commercial Advertising",
    title: "Smile Train India — Cause Marketing Film",
    excerpt: "Emotionally evocative documentary commercial creating widespread awareness and donor engagement.",
    image: "/projects/project-thumbnail/Smile train India.png",
    clientLogo: "/projects/smile_train_india/logo.png",
    logoAlt: "Smile Train Logo",
    link: "/projects/smile-train",
    tags: ["Cause Marketing", "Emotional TVC", "Documentary"],
    effectType: "logo-reveal",
    badgeText: "CAUSE MARKETING",
  },
  {
    id: "comm-9",
    client: "Agropure",
    clientId: "commercials",
    category: "Commercial Advertising",
    title: "Agropure — Agricultural Commodity TVC",
    excerpt: "Television commercial celebrating farming dedication and farm-to-table consumer reliability.",
    image: "/projects/project-thumbnail/AGROPURE.png",
    clientLogo: "/projects/agropure/logo.jpeg",
    logoAlt: "Agropure Logo",
    link: "/projects/agropure",
    tags: ["Agriculture AD", "Farm-to-Table", "Commodity TVC"],
    effectType: "logo-reveal",
    badgeText: "AGRICULTURE AD",
  },
];

const FILTERS = [
  { id: "all", label: "All Work" },
  { id: "vikram-mills", label: "Vikram Mills" },
  { id: "riot-gold", label: "Riot Gold" },
  { id: "big-fm", label: "Big FM Celebrities" },
  { id: "commercials", label: "Commercials & TVCs" },
];

const CARDS_PER_SLIDE = 9; // 3x3 Grid per slide on home page only

export default function OurCraftSectionV3() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Filter projects according to tab
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
            SECTION HEADER (EDITORIAL OGILVY AESTHETIC — PURE WHITE THEME)
            ===================================================================== */}
        <div className="row mb-4 align-items-end justify-content-between g-4">
          <div className="col-12 col-lg-8">
            <div className="v3-section-eyebrow-wrap">
              <span className="v3-eyebrow-dash" />
              <span className="v3-section-eyebrow">01 / OUR CRAFT</span>
            </div>

            <h2 className="v3-editorial-headline">
              Our Craft. <br />
              <span>Where Vision Meets Cultural Resonance.</span>
            </h2>

            <p className="v3-editorial-subtext">
              We engineer iconic brand worlds across television, retail shelves, and digital arenas.
              From national broadcast commercials to FMCG packaging and star celebrity handling,
              explore our complete portfolio of client transformations.
            </p>
          </div>

          <div className="col-12 col-lg-4 text-lg-end">
            <Link href="/projects" className="v3-craft-all-link">
              <span>EXPLORE FULL ARCHIVE</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* =====================================================================
            CLIENT & DISCIPLINARY FILTER TABS + CAROUSEL CONTROLS
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
            - Respects client filter: Vikram Mills (9), Riot Gold (9), Big FM (9), Commercials (9)
            - If client has fewer cards, cleanly renders without breaking the grid
            - Retains thumbnail-to-client-logo reveal & celebrity snapshots
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
                      <p className="v3-craft-card-desc">{project.excerpt}</p>

                      <div className="v3-craft-tags-strip">
                        {project.tags.map((tag) => (
                          <span key={tag} className="v3-craft-micro-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination Dots at Bottom */}
        {totalSlides > 1 && (
          <div className="v3-craft-dots-wrap mt-4 d-flex justify-content-center align-items-center gap-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`v3-craft-dot ${idx === safeSlideIndex ? "is-active" : ""}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* =====================================================================
            BOTTOM SIGNATURE ACTION BAR
            ===================================================================== */}
        <div className="row justify-content-center text-center mt-5 pt-2">
          <div className="col-auto">
            <Link href="/projects" className="v3-editorial-cta-link">
              <span className="v3-cta-dash" aria-hidden="true" />
              <span>EXPLORE ALL ADCLAN PORTFOLIO & REELS</span>
              <span className="v3-cta-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
