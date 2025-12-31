"use client";

import Link from "next/link";
import { useState } from "react";
import "./navbar.css";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const nav = [
    { name: "Who we were?", href: "/about" },
    { name: "What we do?", href: "/services" },
    { name: "Work study?", href: "/projects" },
  ];

  const socials = [
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/adclanmedia/",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/adclanmedia/?hl=en",
    },
    {
      icon: <FaLinkedin />,
      link: "https://in.linkedin.com/company/adclan",
    },
  ];

  return (
    <header className="nav-header">
      <nav className="nav-container">
        <div className="nav-inner">
          {/* LOGO */}
          <div className="brand">
            <Link href="/" className="brand-name">
              <img src="/adclan-logo-1.png" alt="adclan" />
            </Link>
          </div>

          {/* DESKTOP LINKS */}
          <ul className="nav-links desktop">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="nav-link">
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="nav-link">
                Reach us
              </Link>
            </li>
          </ul>

          {/* DESKTOP SOCIALS */}
          <div className="nav-socials desktop">
            {socials.map((s, i) => (
              <span
                key={i}
                onClick={() => window.open(s.link, "_blank")}
              >
                {s.icon}
              </span>
            ))}
          </div>

          {/* HAMBURGER */}
          <button className="hamburger" onClick={() => setOpen(!open)}>
            <span className={open ? "line top open" : "line top"} />
            <span className={open ? "line middle open" : "line middle"} />
            <span className={open ? "line bottom open" : "line bottom"} />
          </button>
        </div>

        {/* OVERLAY */}
        {open && <div className="overlay" onClick={() => setOpen(false)} />}

        {/* MOBILE MENU */}
        <div className={open ? "mobile-menu open" : "mobile-menu"}>
          <ul className="mobile-links">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="nav-link"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="nav-link mobile"
                onClick={() => setOpen(false)}
              >
                Reach us
              </Link>
            </li>
          </ul>

          {/* MOBILE SOCIALS */}
          <div className="mobile-socials">
            {socials.map((s, i) => (
              <span
                key={i}
                onClick={() => window.open(s.link, "_blank")}
              >
                {s.icon}
              </span>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
