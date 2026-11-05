"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, Mail, Phone, MapPin, ArrowUpRight, Sparkles, Clock } from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function HomeV3FooterDark() {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const istTime = now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });
        setTimeStr(istTime);
      } catch (e) {
        setTimeStr("10:00 AM");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const tickerItems = [
    "NATIONAL TELEVISION COMMERCIALS",
    "HIGH JEWELLERY EDITORIALS",
    "CELEBRITY MANAGEMENT",
    "FMCG PACKAGING ARCHITECTURE",
    "OTT & CONNECTED TV DOMINANCE",
    "360° MASTERBRAND STRATEGY",
    "MEDIA PLANNING & BUYING",
  ];

  return (
    <footer className="v3-footer">
      <div className="container-fluid v3-footer-inner px-3 px-md-5 px-xl-5">
        {/* =====================================================================
            1. GRAND EYE-CATCHY HERO CTA BANNER
            ===================================================================== */}
        <div className="v3-footer-hero-cta mb-5">
          <div className="row align-items-center justify-content-between g-4">
            <div className="col-12 col-lg-8">
              <div className="v3-footer-cta-eyebrow">
                <span className="v3-badge-pulse" />
                <span>READY TO DEFINE AN ERA? // STUDIO DESK ACTIVE</span>
              </div>
              <h2 className="v3-footer-cta-heading">
                Have an iconic vision? <br className="d-none d-md-inline" />
                Let’s engineer your brand’s defining moment.
              </h2>
            </div>

            <div className="col-12 col-lg-4 text-lg-end">
              <div className="v3-footer-cta-actions">
                <Link href="/home-v3/connect" className="v3-footer-cta-btn-primary">
                  <span>START A BRIEFING</span>
                  <div className="v3-btn-arrow-wrap">
                    <ArrowUpRight size={17} />
                  </div>
                </Link>

                <a href="tel:+919891505451" className="v3-footer-cta-btn-secondary">
                  <Phone size={14} className="me-2" />
                  <span>DIRECT DESK</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            2. INFINITE KINETIC MARQUEE RIBBON
            ===================================================================== */}
        <div className="v3-footer-marquee-strip mb-5" aria-hidden="true">
          <div className="v3-footer-marquee-track">
            {[...tickerItems, ...tickerItems].map((item, idx) => (
              <span key={idx} className="v3-footer-marquee-item">
                <Sparkles size={11} className="v3-marquee-sparkle" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>

        {/* =====================================================================
            3. MAIN ARCHITECTURAL COLUMNS GRID
            ===================================================================== */}
        <div className="row g-4 g-lg-5 pb-5 v3-footer-columns-grid">
          {/* Column 1: Brand Authority */}
          <div className="col-12 col-lg-4 v3-footer-col v3-footer-col-brand">
            <Link href="/" className="v3-footer-logo-lockup" aria-label="AdClan Home">
              <svg
                className="v3-footer-monogram"
                viewBox="0 0 52 66"
                fill="currentColor"
                shapeRendering="geometricPrecision"
                aria-hidden="true"
              >
                <path d="M20,2h16v1h-16zM17,3h3v1h-3zM29,3h10v1h-10zM15,4h5v1h-5zM32,4h10v1h-10zM13,5h7v1h-7zM33,5h11v1h-11zM12,6h9v1h-9zM34,6h11v1h-11zM11,7h11v1h-11zM34,7h12v1h-12zM10,8h13v1h-13zM35,8h12v1h-12zM9,9h15v2h-15zM35,9h13v1h-13zM36,10h12v1h-12zM9,11h16v2h-16zM36,11h13v4h-13zM8,13h17v2h-17zM9,15h16v2h-16zM36,15h14v6h-14zM9,17h15v1h-15zM10,18h14v1h-14zM11,19h12v1h-12zM11,20h11v1h-11zM13,21h7v1h-7zM38,21h12v1h-12zM23,22h12v1h-12zM41,22h9v1h-9zM19,23h12v1h-12zM35,23h5v1h-5zM43,23h7v1h-7zM17,24h11v1h-11zM36,24h6v1h-6zM45,24h5v1h-5zM15,25h12v1h-12zM36,25h8v1h-8zM46,25h4v1h-4zM14,26h12v1h-12zM36,26h9v1h-9zM47,26h3v1h-3zM13,27h12v1h-12zM35,27h11v1h-11zM48,27h2v2h-2zM11,28h13v1h-13zM34,28h13v1h-13zM10,29h13v2h-13zM33,29h14v1h-14zM33,30h15v1h-15zM9,31h14v1h-14zM32,31h16v2h-16zM8,32h14v2h-14zM32,33h17v2h-17zM7,34h15v1h-15zM7,35h14v1h-14zM32,35h16v2h-16zM6,36h15v4h-15zM33,37h15v1h-15zM33,38h14v1h-14zM34,39h13v1h-13zM5,40h16v7h-16zM35,40h10v1h-10zM36,41h8v1h-8zM40,42h1v1h-1zM5,47h17v1h-17zM6,48h16v3h-16zM48,49h1v2h-1zM7,51h16v2h-16zM47,51h2v1h-2zM47,52h1v2h-1zM8,53h16v2h-16zM46,54h1v1h-1zM9,55h16v1h-16zM45,55h2v1h-2zM10,56h16v2h-16zM44,56h2v1h-2zM43,57h3v1h-3zM11,58h17v1h-17zM42,58h3v1h-3zM13,59h16v1h-16zM41,59h3v1h-3zM14,60h17v1h-17zM38,60h5v1h-5zM15,61h27v1h-27zM18,62h22v1h-22zM20,63h18v1h-18zM25,64h10v1h-10z" />
              </svg>
              <span className="v3-footer-brand-name">ADCLAN</span>
            </Link>
            <p className="v3-footer-tagline">
              Ideas. Media. Impact. A 360° creative marketing powerhouse engineering cultural
              authority and commercial scale for visionary brands across India.
            </p>

            <div className="v3-footer-meta-pills mt-4">
              <div className="v3-footer-badge">
                <span className="v3-badge-pulse" />
                <span>DELHI • MUMBAI • NATIONWIDE</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="col-6 col-md-4 col-lg-2 v3-footer-col">
            <h5 className="v3-col-title">NAVIGATION</h5>
            <ul className="v3-footer-link-list">
              <li>
                <a href="#craft">
                  <span className="v3-link-dash" />
                  <span>Our Craft</span>
                </a>
              </li>
              <li>
                <Link href="/home-v3/work">
                  <span className="v3-link-dash" />
                  <span>Work Portfolio</span>
                </Link>
              </li>
              <li>
                <Link href="/home-v3/narrative">
                  <span className="v3-link-dash" />
                  <span>Brand Narrative</span>
                </Link>
              </li>
              <li>
                <Link href="/home-v3/expertise">
                  <span className="v3-link-dash" />
                  <span>Expertise</span>
                </Link>
              </li>
              <li>
                <Link href="/home-v3/brands">
                  <span className="v3-link-dash" />
                  <span>Client Roster</span>
                </Link>
              </li>
              <li>
                <a href="#stories">
                  <span className="v3-link-dash" />
                  <span>Journal</span>
                </a>
              </li>
              <li>
                <Link href="/home-v3/connect">
                  <span className="v3-link-dash" />
                  <span>Reach Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div className="col-6 col-md-4 col-lg-3 v3-footer-col">
            <h5 className="v3-col-title">CAPABILITIES</h5>
            <ul className="v3-footer-link-list">
              <li>
                <Link href="/services">
                  <span className="v3-link-dash" />
                  <span>Broadcast TVCs & Films</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="v3-link-dash" />
                  <span>FMCG Packaging Design</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="v3-link-dash" />
                  <span>High Jewellery Campaigns</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="v3-link-dash" />
                  <span>Celebrity PR & Handling</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="v3-link-dash" />
                  <span>National Media Buying</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="v3-link-dash" />
                  <span>Performance Marketing</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="v3-link-dash" />
                  <span>BTL & Experiential Events</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Desk & Concierge */}
          <div className="col-12 col-md-4 col-lg-3 v3-footer-col v3-footer-col-desk">
            <h5 className="v3-col-title">DIRECT CONCIERGE</h5>

            <div className="v3-desk-cards-wrap">
              <a href="tel:+919891505451" className="v3-desk-contact-card">
                <div className="v3-desk-icon-box">
                  <Phone size={15} />
                </div>
                <div>
                  <div className="v3-desk-label">PRIORITY LINE</div>
                  <div className="v3-desk-val">+91 98915 05451</div>
                  <div className="v3-desk-sub">011-49573333</div>
                </div>
              </a>

              <a href="mailto:info@adclan.in" className="v3-desk-contact-card">
                <div className="v3-desk-icon-box">
                  <Mail size={15} />
                </div>
                <div>
                  <div className="v3-desk-label">VIP CORRESPONDENCE</div>
                  <div className="v3-desk-val">info@adclan.in</div>
                </div>
              </a>

              <div className="v3-desk-contact-card v3-desk-address-card">
                <div className="v3-desk-icon-box">
                  <MapPin size={15} />
                </div>
                <div>
                  <div className="v3-desk-label">FLAGSHIP STUDIO</div>
                  <div className="v3-desk-address">
                    Pushpa Bhavan, Alaknanda Commercial Complex, New Delhi 110019
                  </div>
                </div>
              </div>
            </div>

            <div className="v3-footer-social-row mt-4">
              <a
                href="https://www.instagram.com/adclanmedia/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="v3-f-social-btn"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://in.linkedin.com/company/adclan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="v3-f-social-btn"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="https://www.facebook.com/adclanmedia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="v3-f-social-btn"
              >
                <FaFacebookF size={15} />
              </a>
              <a
                href="https://www.youtube.com/@adclan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="v3-f-social-btn"
              >
                <FaYoutube size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================================
            4. MONUMENTAL ARCHITECTURAL GHOST WATERMARK
            ===================================================================== */}
        <div className="v3-footer-watermark-row" aria-hidden="true">
          <div className="v3-footer-watermark-text">ADCLAN</div>
        </div>

        {/* =====================================================================
            5. BOTTOM LEGAL, LIVE TIME & BACK TO TOP BAR
            ===================================================================== */}
        <div className="row align-items-center justify-content-between g-3 pt-4 v3-footer-bottom-bar">
          <div className="col-12 col-md-5">
            <p className="v3-copy-text mb-0">
              © {new Date().getFullYear()} AdClan Media Solution Pvt Ltd. Engineered with precision.
            </p>
          </div>

          <div className="col-12 col-md-3 text-md-center">
            {timeStr && (
              <div className="v3-footer-live-clock">
                <Clock size={12} className="v3-clock-icon" />
                <span>NEW DELHI: {timeStr} IST</span>
              </div>
            )}
          </div>

          <div className="col-12 col-md-4 text-md-end">
            <div className="v3-footer-bottom-actions">
              <div className="v3-legal-links">
                <Link href="/privacy-policy">Privacy</Link>
                <span className="v3-legal-dot">•</span>
                <Link href="/term-and-condition">Terms</Link>
              </div>

              <button
                type="button"
                className="v3-footer-top-btn"
                onClick={scrollToTop}
                aria-label="Back to top"
              >
                <span>TOP</span>
                <div className="v3-top-icon-circle">
                  <ArrowUp size={14} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
