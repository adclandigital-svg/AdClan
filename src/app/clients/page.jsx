"use client";

import React from "react";
import "./clients.css";

const clientData = [
  {
    title: "INVESTMENT & VENTURE CAPITAL",
    logos: [
      "/client-logo/adclan-logo-1.png",
      "/clients/logo2.png",
      "/clients/logo3.png",
      "/clients/logo4.png",
      "/clients/logo5.png",
      "/clients/logo6.png",
    ],
  },
  {
    title: "BFSI (BANKING & FINANCE)",
    logos: [
      "/clients/logo7.png",
      "/clients/logo8.png",
      "/clients/logo9.png",
      "/clients/logo10.png",
      "/clients/logo11.png",
      "/clients/logo12.png",
    ],
  },
  {
    title: "TRAVEL & HOSPITALITY",
    logos: [
      "/clients/logo13.png",
      "/clients/logo14.png",
      "/clients/logo15.png",
      "/clients/logo16.png",
      "/clients/logo17.png",
      "/clients/logo18.png",
      "/clients/logo19.png",
      "/clients/logo20.png",
    ],
  },
  {
    title: "FASHION & ACCESSORIES",
    logos: [
      "/clients/logo21.png",
      "/clients/logo22.png",
      "/clients/logo23.png",
      "/clients/logo24.png",
      "/clients/logo25.png",
      "/clients/logo26.png",
    ],
  },
];

export default function ClientsPage() {
  return (
    <div className="clients-page">

      {/* HEADER */}
      <div className="clients-header">
        <h1>CLIENTS</h1>
        <p>Trusted by brands across industries</p>
      </div>

      {/* SECTIONS */}
      <div className="clients-container">

        {clientData.map((section, index) => (
          <div className="client-section" key={index}>

            <h2 className="client-title">{section.title}</h2>

            <div className="client-grid">
              {section.logos.map((logo, i) => (
                <div className="client-card" key={i}>
                  <img src={logo} alt="client logo" />
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}