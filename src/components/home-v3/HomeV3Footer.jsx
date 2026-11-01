"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa";

export default function HomeV3Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="v3-footer">
      <div className="container-fluid v3-footer-inner px-3 px-md-5 px-xl-5">
        {/* Top Grand Brand Bar with Bootstrap row & col */}
        <div className="row align-items-start align-items-md-center justify-content-between g-4 pb-5 mb-5 v3-footer-brand-bar">
          <div className="col-12 col-md-8 col-lg-7 v3-footer-brand-left">
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
              <span className="v3-footer-brand-name">AdClan</span>
            </Link>
            <p className="v3-footer-tagline">
              Ideas. Media. Impact. A 360° creative marketing agency engineering cultural
              relevance and commercial authority for visionary brands across India.
            </p>
          </div>

          <div className="col-12 col-md-4 col-lg-3 text-md-end">
            <button
              type="button"
              className="v3-footer-top-btn"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <span>BACK TO TOP</span>
              <div className="v3-top-icon-circle">
                <ArrowUp size={16} />
              </div>
            </button>
          </div>
        </div>

        {/* Structured Columns via Bootstrap row & col-md / col-lg */}
        <div className="row g-4 g-lg-5 pb-5 mb-4 v3-footer-columns-grid">
          {/* Column 1: Navigation */}
          <div className="col-6 col-md-3 col-lg-2 v3-footer-col">
            <h5 className="v3-col-title">NAVIGATION</h5>
            <ul className="v3-footer-link-list">
              <li>
                <a href="#craft">Our Craft</a>
              </li>
              <li>
                <a href="#narrative">Narrative</a>
              </li>
              <li>
                <a href="#expertise">Expertise</a>
              </li>
              <li>
                <a href="#brands">Brands</a>
              </li>
              <li>
                <a href="#stories">Perspectives</a>
              </li>
              <li>
                <a href="#reach-us">Reach Us</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Capabilities */}
          <div className="col-6 col-md-4 col-lg-4 v3-footer-col">
            <h5 className="v3-col-title">EXPERTISE</h5>
            <ul className="v3-footer-link-list">
              <li>
                <Link href="/services">Brand Strategy & Identity</Link>
              </li>
              <li>
                <Link href="/services">Broadcast TVCs & Films</Link>
              </li>
              <li>
                <Link href="/services">Media Planning & Buying</Link>
              </li>
              <li>
                <Link href="/services">Digital & Performance Media</Link>
              </li>
              <li>
                <Link href="/services">OTT & Connected TV</Link>
              </li>
              <li>
                <Link href="/services">Celebrity & PR Endorsements</Link>
              </li>
              <li>
                <Link href="/services">BTL Experiential Activations</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Direct Desk */}
          <div className="col-12 col-md-5 col-lg-3 v3-footer-col">
            <h5 className="v3-col-title">DIRECT DESK</h5>
            <ul className="v3-footer-contact-list">
              <li>
                <Phone size={15} className="v3-f-icon" />
                <div>
                  <a href="tel:+919891505451">+91-9891505451</a>
                  <span className="v3-f-sep"> / </span>
                  <a href="tel:01149573333">011-49573333</a>
                </div>
              </li>
              <li>
                <Mail size={15} className="v3-f-icon" />
                <a href="mailto:info@adclan.in">info@adclan.in</a>
              </li>
              <li>
                <MapPin size={15} className="v3-f-icon" />
                <span>
                  D-7 & 8, 2nd Floor, Pushpa Bhavan, Alaknanda Commercial Complex, New Delhi 110019
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter / Social Connect */}
          <div className="col-12 col-md-6 col-lg-3 v3-footer-col">
            <h5 className="v3-col-title">CONNECT</h5>
            <p className="v3-connect-note">
              Follow our latest brand transformations, TVC releases, and industry perspectives.
            </p>

            <div className="v3-footer-social-row">
              <a
                href="https://www.instagram.com/adclanmedia/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="v3-f-social-btn"
              >
                <FaInstagram size={17} />
              </a>
              <a
                href="https://in.linkedin.com/company/adclan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="v3-f-social-btn"
              >
                <FaLinkedin size={17} />
              </a>
              <a
                href="https://www.facebook.com/adclanmedia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="v3-f-social-btn"
              >
                <FaFacebookF size={17} />
              </a>
            </div>

            <div className="v3-footer-badge">
              <span className="v3-badge-pulse" />
              <span>DELHI • MUMBAI • NATIONWIDE</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright Bar with Bootstrap row & col */}
        <div className="row align-items-center justify-content-between g-3 pt-3 v3-footer-bottom-bar">
          <div className="col-12 col-md-6">
            <p className="v3-copy-text mb-0">
              © {new Date().getFullYear()} AdClan Media Solution Pvt Ltd. All Rights Reserved.
            </p>
          </div>

          <div className="col-12 col-md-6 text-md-end">
            <div className="v3-legal-links">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <span className="v3-legal-dot">•</span>
              <Link href="/term-and-condition">Terms of Service</Link>
              <span className="v3-legal-dot">•</span>
              <Link href="/cookie-policy">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
