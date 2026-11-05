"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Navigation, ExternalLink } from "lucide-react";

export default function ReachUsSectionV3({ isStandalone = false }) {
  return (
    <section className={`v3-reach-section ${isStandalone ? "is-standalone" : ""}`} id="reach-us">
      <div className={`container-fluid v3-section-container px-3 px-md-5 px-xl-5 ${isStandalone ? "pt-4" : ""}`}>
        {/* Section Header with Bootstrap row & col (Consistent with /home-v3/work) */}
        <div className="row mb-4">
          <div className="col-12 col-lg-10 col-xl-8">
            <h1 className="v3-editorial-headline">
              Ready to Create, <br />
              <span>something unignorable.</span>
            </h1>
          </div>
        </div>

        {/* 2-Column Balanced Console via Bootstrap Grid */}
        <div className="row g-4 g-lg-5 align-items-stretch v3-reach-grid-spread">
          {/* Left Column (col-12 col-lg-6): Strategic Consultation Console */}
          <div className="col-12 col-lg-6">
            <div className="v3-reach-invite-card h-100 d-flex flex-column justify-content-between">
              <div>
                <span className="v3-invite-sub">DIRECT ADVISORY</span>
                <h3 className="v3-invite-card-title">Initiate a Strategic Dialogue</h3>
                <p className="v3-invite-card-desc">
                  Schedule a direct consultation with our principal brand architects. We evaluate
                  your competitive whitespace, interrogate market fundamentals, and outline high-conviction
                  creative vectors engineered for scale.
                </p>
              </div>

              <div>
                <div className="v3-reach-actions-block">
                  <Link href="/contact" className="v3-reach-signature-btn">
                    <span className="v3-cta-dash" aria-hidden="true" />
                    <span>SCHEDULE STRATEGIC CONSULTATION</span>
                    <span className="v3-cta-arrow" aria-hidden="true">→</span>
                  </Link>

                  <a
                    href="/adclan-portfolio-compressed.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="v3-reach-secondary-link"
                  >
                    <span>DOWNLOAD AGENCY PROFILE (PDF)</span>
                    <span className="v3-cta-arrow" aria-hidden="true">→</span>
                  </a>
                </div>

                <div className="v3-reach-guarantee-row">
                  <span className="v3-guarantee-bullet" />
                  <span className="v3-guarantee-text">Direct response guaranteed within 24 business hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (col-12 col-lg-6): Direct Contact Desk */}
          <div className="col-12 col-lg-6">
            <div className="v3-reach-desk-col d-flex flex-column justify-content-between gap-3 h-100">
              <div className="v3-desk-item">
                <div className="v3-desk-icon">
                  <Phone size={18} />
                </div>
                <div className="v3-desk-content">
                  <span className="v3-desk-label">DIRECT PHONE</span>
                  <div className="v3-desk-phone-row">
                    <a href="tel:+919891505451" className="v3-desk-val">
                      +91-9891505451
                    </a>
                    <span className="v3-desk-sep"> / </span>
                    <a href="tel:01149573333" className="v3-desk-val">
                      011-49573333
                    </a>
                  </div>
                  <span className="v3-desk-hint">Monday – Saturday, 10:00 AM – 7:00 PM IST</span>
                </div>
              </div>

              <div className="v3-desk-item">
                <div className="v3-desk-icon">
                  <Mail size={18} />
                </div>
                <div className="v3-desk-content">
                  <span className="v3-desk-label">ELECTRONIC MAIL</span>
                  <a href="mailto:info@adclan.in" className="v3-desk-val">
                    info@adclan.in
                  </a>
                  <span className="v3-desk-hint">Direct executive inbox for briefs and RFPs</span>
                </div>
              </div>

              <div className="v3-desk-item">
                <div className="v3-desk-icon">
                  <MapPin size={18} />
                </div>
                <div className="v3-desk-content">
                  <span className="v3-desk-label">HEADQUARTERS</span>
                  <p className="v3-desk-address">
                    D-7 & 8, Second Floor, Pushpa Bhavan, Commercial Complex, Alaknanda Market,
                    New Delhi 110019
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3rd Row: Interactive Map Console */}
        <div className="row mt-4 mt-lg-5" id="v3-map">
          <div className="col-12">
            <div className="v3-reach-map-card">
              <div className="v3-reach-map-header">
                <div className="v3-reach-map-header-left">
                  <span className="v3-map-pulse-dot" aria-hidden="true" />
                  <div>
                    <span className="v3-map-header-eyebrow">
                      OFFICE LOCATION & DIRECTIONS
                    </span>
                    <h4 className="v3-map-header-title">
                      Pushpa Bhavan, Alaknanda Commercial Complex, New Delhi
                    </h4>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Adclan+Media+Services+Pvt.+Ltd+Pushpa+Bhavan+Alaknanda+New+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v3-map-directions-btn"
                >
                  <Navigation size={14} />
                  <span>GET DIRECTIONS</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              <div className="v3-reach-map-iframe-wrap">
                <iframe
                  title="Adclan Media Services Headquarters Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.964105688411!2d77.2516698!3d28.5251386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce38dfcb0b2c9%3A0xd29f6ff4fd43fcf9!2sAdclan%20Media%20Services%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
