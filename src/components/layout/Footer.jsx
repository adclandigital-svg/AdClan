"use client";

import Link from "next/link";
import "./footer.css";
import {
  FaFacebookF,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* Column 1 */}
          <div className="footer-col">
            <div className="footer-logo">
              <h2 className="logo-text">
                <img
                  src="/adclan-logo-1 white.png"
                  alt="adclan"
                  height="40px"
                />
              </h2>
            </div>
            <p className="footer-desc">
              Adclan is a modern digital marketing agency delivering high-impact
              branding, website development, and performance marketing
              solutions. We help businesses grow with innovative strategies and
              visually compelling digital experiences.
            </p>
          </div>

          {/* Column 2 */}
          {/* Column 2 */}
          <div className="footer-col">
            <h3 className="footer-title">Explore Adclan</h3>
            <ul className="footer-links">
              <li>
                <Link href="/about">Who we are?</Link>
              </li>
              <li>
                <Link href="/services">What we do?</Link>
              </li>
              <li>
                <Link href="/projects">Work study</Link>
              </li>
              <li>
                <Link href="/clients">Our clients</Link>
              </li>
              <li>
                <Link href="/blogs">Read our stories</Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (window.innerWidth < 768) {
                      e.preventDefault(); // stop default link
                      window.open("/adclan-portfolio-compressed.pdf", "_blank"); // open PDF on mobile
                    }
                  }}
                >
                  Our Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h3 className="footer-title">Connect & Policies</h3>
            <ul className="footer-links">
              <li>
                <Link href="/career">Work With Adclan</Link>
              </li>
              <li>
                <Link href="/contact">Reach us</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/term-and-condition">Terms of Condition</Link>
              </li>
              <li>
                <Link href="/cookie-policy">Cookie Policy</Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-col">
            <h3 className="footer-title">Stay Tuned With Us</h3>
            <ul className="footer-contact">
              <li>
                <FaPhone /> <Link href="tel:+919891505451">+91-9891505451</Link>
                ,<Link href="tel:01149573333">011-49573333</Link>
              </li>
              <li>
                <FaEnvelope />{" "}
                <Link href="mailto:info@adclan.in">info@adclan.in</Link>
              </li>
              <li>
                <FaMapMarkerAlt />
                D-7 & 8, Second Floor, Pushpa Bhavan, Commercial Complex,
                Alaknanda Market, Alaknanda, New Delhi, Delhi 110019
              </li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>© Copyright 2026 Adclan, All Rights Reserved.</p>

          <div className="footer-socials">
            <span
              onClick={() =>
                window.open("https://www.facebook.com/adclanmedia/", "_blank")
              }
            >
              <FaFacebookF />
            </span>
            <span
              onClick={() =>
                window.open(
                  "https://www.instagram.com/adclanmedia/?hl=en",
                  "_blank",
                )
              }
            >
              <FaInstagram />
            </span>
            <span
              onClick={() =>
                window.open("https://in.linkedin.com/company/adclan", "_blank")
              }
            >
              <FaLinkedin />
            </span>
            {/* <span
              onClick={() =>
                window.open("https://twitter.com/adclanmedia", "_blank")
              }
            >
              <FaXTwitter />
            </span> */}
          </div>
        </div>
      </footer>
      {/* <a
        href="https://wa.me/919891505451"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp />
      </a> */}
    </>
  );
}
