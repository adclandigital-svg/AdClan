"use client";

import Link from "next/link";
import "./footer.css";
import { FaFacebookF, FaMapMarkerAlt, FaEnvelope, FaPhone, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Column 1 */}
                <div className="footer-col">
                    <div className="footer-logo">
                        <h2 className="logo-text"><img src="/adclan-logo-1 white.png" alt="adclan" height="40px" /></h2>
                    </div>
                    <p className="footer-desc">
                        Adclan is a modern digital marketing agency delivering high-impact
                        branding, website development, and performance marketing solutions.
                        We help businesses grow with innovative strategies and visually
                        compelling digital experiences.
                    </p>
                </div>

                {/* Column 2 */}
                <div className="footer-col">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link href="/">Homepage</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/services">Our Services</Link></li>
                        <li><Link href="/projects">Projects Work</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div className="footer-col">
                    <h3 className="footer-title">Digital Marketing</h3>
                    <ul className="footer-links">
                        <li>Concepts Design</li>
                        <li>Growth Business</li>
                        <li>Strategy</li>
                        <li>Influence Marketing</li>
                        <li>Freelance Hire</li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div className="footer-col">
                    <h3 className="footer-title">Stay Tuned With Us</h3>
                    <ul className="footer-contact">
                         <li><FaPhone /> +91-9891505451, 011-49573333</li>
                        <li><FaEnvelope /> info@adclan.in</li>
                        <li>
                            <FaMapMarkerAlt />
                            D-9, Second Floor, Pushpa Bhawan, Alaknanda Commercial Complex, Alaknanda, New Delhi-110019
                        </li>

                    </ul>
                </div>

            </div>

            <hr className="footer-divider" />

            <div className="footer-bottom">
                <p>© Copyright 2026 Adclan, All Rights Reserved.</p>

                <div className="footer-socials">
                    <span onClick={() => window.open("https://www.facebook.com/adclanmedia/", "_blank")}><FaFacebookF /></span>
                    <span onClick={() => window.open("https://www.instagram.com/adclanmedia/?hl=en", "_blank")}><FaInstagram /></span>
                    <span onClick={() => window.open("https://in.linkedin.com/company/adclan", "_blank")}><FaLinkedin /></span>
                </div>
            </div>
        </footer>
    );
}
