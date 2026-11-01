"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function HomeV3Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`v3-navbar ${isScrolled ? "is-sticky" : ""}`}>
      {/* 1. Left: Brand Logo Lockup (Monogram + AdClan text that collapses on scroll) */}
      <Link href="/" className="v3-brand-lockup" aria-label="AdClan Home">
        <svg
          className="v3-monogram-svg"
          viewBox="0 0 52 66"
          fill="currentColor"
          shapeRendering="geometricPrecision"
          aria-hidden="true"
        >
          <path d="M20,2h16v1h-16zM17,3h3v1h-3zM29,3h10v1h-10zM15,4h5v1h-5zM32,4h10v1h-10zM13,5h7v1h-7zM33,5h11v1h-11zM12,6h9v1h-9zM34,6h11v1h-11zM11,7h11v1h-11zM34,7h12v1h-12zM10,8h13v1h-13zM35,8h12v1h-12zM9,9h15v2h-15zM35,9h13v1h-13zM36,10h12v1h-12zM9,11h16v2h-16zM36,11h13v4h-13zM8,13h17v2h-17zM9,15h16v2h-16zM36,15h14v6h-14zM9,17h15v1h-15zM10,18h14v1h-14zM11,19h12v1h-12zM11,20h11v1h-11zM13,21h7v1h-7zM38,21h12v1h-12zM23,22h12v1h-12zM41,22h9v1h-9zM19,23h12v1h-12zM35,23h5v1h-5zM43,23h7v1h-7zM17,24h11v1h-11zM36,24h6v1h-6zM45,24h5v1h-5zM15,25h12v1h-12zM36,25h8v1h-8zM46,25h4v1h-4zM14,26h12v1h-12zM36,26h9v1h-9zM47,26h3v1h-3zM13,27h12v1h-12zM35,27h11v1h-11zM48,27h2v2h-2zM11,28h13v1h-13zM34,28h13v1h-13zM10,29h13v2h-13zM33,29h14v1h-14zM33,30h15v1h-15zM9,31h14v1h-14zM32,31h16v2h-16zM8,32h14v2h-14zM32,33h17v2h-17zM7,34h15v1h-15zM7,35h14v1h-14zM32,35h16v2h-16zM6,36h15v4h-15zM33,37h15v1h-15zM33,38h14v1h-14zM34,39h13v1h-13zM5,40h16v7h-16zM35,40h10v1h-10zM36,41h8v1h-8zM40,42h1v1h-1zM5,47h17v1h-17zM6,48h16v3h-16zM48,49h1v2h-1zM7,51h16v2h-16zM47,51h2v1h-2zM47,52h1v2h-1zM8,53h16v2h-16zM46,54h1v1h-1zM9,55h16v1h-16zM45,55h2v1h-2zM10,56h16v2h-16zM44,56h2v1h-2zM43,57h3v1h-3zM11,58h17v1h-17zM42,58h3v1h-3zM13,59h16v1h-16zM41,59h3v1h-3zM14,60h17v1h-17zM38,60h5v1h-5zM15,61h27v1h-27zM18,62h22v1h-22zM20,63h18v1h-18zM25,64h10v1h-10z" />
        </svg>
        <span className={`v3-brand-wordmark ${isScrolled ? "is-hidden" : ""}`}>
          ADCLAN
        </span>
      </Link>

      {/* 2. Middle: Navigation Links (OUR CRAFT, NARRATIVE, EXPERTISE, WORK, BRANDS) */}
      <nav className="v3-nav-desktop" aria-label="Main Navigation">
        <ul className="v3-nav-center">
          <li className="v3-nav-item">
            <a href="#craft" className="v3-nav-link">
              OUR CRAFT
            </a>
          </li>
          <li className="v3-nav-item">
            <a href="#narrative" className="v3-nav-link">
              NARRATIVE
            </a>
          </li>
          <li className="v3-nav-item">
            <a href="#expertise" className="v3-nav-link">
              EXPERTISE
            </a>
          </li>
          <li className="v3-nav-item">
            <a href="#work" className="v3-nav-link">
              WORK
            </a>
          </li>
          <li className="v3-nav-item">
            <a href="#brands" className="v3-nav-link">
              BRANDS
            </a>
          </li>
        </ul>
      </nav>

      {/* 3. Right: CTA ("— REACH US") */}
      <div className="v3-nav-right">
        <a href="#reach-us" className="v3-lets-talk-btn">
          <span className="v3-dash-line" aria-hidden="true" />
          <span>REACH US</span>
        </a>
      </div>

      {/* Mobile Drawer Toggle */}
      <button
        type="button"
        className="v3-mobile-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav Overlay Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            zIndex: 55,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <a
            href="#craft"
            className="v3-nav-link"
            style={{ fontSize: "16px" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            OUR CRAFT
          </a>
          <a
            href="#narrative"
            className="v3-nav-link"
            style={{ fontSize: "16px" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            NARRATIVE
          </a>
          <a
            href="#expertise"
            className="v3-nav-link"
            style={{ fontSize: "16px" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            EXPERTISE
          </a>
          <a
            href="#work"
            className="v3-nav-link"
            style={{ fontSize: "16px" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            WORK
          </a>
          <a
            href="#brands"
            className="v3-nav-link"
            style={{ fontSize: "16px" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            BRANDS
          </a>
          <a
            href="#reach-us"
            className="v3-lets-talk-btn"
            style={{ fontSize: "16px", marginTop: "16px" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="v3-dash-line" />
            REACH US
          </a>
        </div>
      )}
    </header>
  );
}
