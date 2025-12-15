'use client'

import Link from 'next/link'
import { useState } from 'react'
import "./navbar.css"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const nav = [
    { name: 'What brings you here?', href: '/about' },
    { name: 'What would you like?', href: '/services' },
    { name: 'What’s going on here?', href: '/projects' },
  ]

  return (
    <header className="nav-header">
      <nav className="nav-container">
        <div className="nav-inner">
          
          <div className="brand">
            <Link href="/" className="brand-name">
              <img src="/adclan-logo-1.png" alt="adclan" height="30px" />
            </Link>
          </div>

          {/* Desktop Links */}
          <ul className="nav-links desktop">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="nav-link">{item.name}</Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>

          {/* Hamburger */}
          <button className="hamburger" onClick={() => setOpen(!open)}>
            <span className={open ? 'line top open' : 'line top'} />
            <span className={open ? 'line middle open' : 'line middle'} />
            <span className={open ? 'line bottom open' : 'line bottom'} />
          </button>
        </div>

        {/* 📌 OVERLAY */}
        {open && <div className="overlay" onClick={() => setOpen(false)}></div>}

        {/* 📌 MOBILE MENU */}
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

            {/* Contact as Button */}
            <li>
              <Link 
                href="/contact" 
                className="nav-link mobile"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>

      </nav>
    </header>
  )
}
