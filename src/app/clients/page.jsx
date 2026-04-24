"use client";

import React from "react";
import "./clients.css";

// const clientData = [
//   {
//     title: "Real Estate",
//     logos: [
//       "/client-logo/adclan-logo-9.png",
//       "/client-logo/adclan-logo-10.png",
//       "/client-logo/adclan-logo-11.png",
//       "/client-logo/adclan-logo-15.png",
//       "/client-logo/adclan-logo-17.png",
//       "/client-logo/adclan-logo-18.png",
//       "/client-logo/adclan-logo-19.png",
//       "/client-logo/adclan-logo-20.png",
//       "/client-logo/adclan-logo-22.png",
//       "/client-logo/adclan-logo-24.png",
//       "/client-logo/adclan-logo-28.png",
//       "/client-logo/adclan-logo-30.png",
//       "/client-logo/adclan-logo-32.png",
//       "/client-logo/adclan-logo-25.png",
//     ],
//   },
//   {
//     title: "Fast-Moving Consumer Goods",
//     logos: ["/client-logo/adclan-logo-3.png", "/client-logo/adclan-logo-4.png"],
//   },
//   {
//     title: "Ornaments & Jewellery",
//     logos: [
//       "/client-logo/adclan-logo-13.png",
//       "/client-logo/adclan-logo-27.png",
//       "/client-logo/adclan-logo-29.png",
//     ],
//   },
//   {
//     title: "Healthcare",
//     logos: [
//       "/client-logo/adclan-logo-2.png",
//       "/client-logo/adclan-logo-5.png",
//       "/client-logo/adclan-logo-23.png",
//     ],
//   },
//   {
//     title: "manufacturing",
//     logos: [
//       "/client-logo/adclan-logo-16.png",
//       "/client-logo/adclan-logo-26.png",
//     ],
//   },

//   {
//     title: "Social & Welfare",
//     logos: ["/client-logo/adclan-logo-1.png"],
//   },

//   {
//     title: "Astrology",
//     logos: ["/client-logo/adclan-logo-6.png"],
//   },
//   {
//     title: "Key Eyewear",
//     logos: ["/client-logo/adclan-logo-8.png"],
//   },
//   {
//     title: "Advisory & Consulting",
//     logos: ["/client-logo/adclan-logo-12.png"],
//   },
//   {
//     title: "ethnic wear fashion",
//     logos: ["/client-logo/adclan-logo-14.png"],
//   },

//   {
//     title: "Electronics",
//     logos: ["/client-logo/adclan-logo-21.png"],
//   },
//   {
//     title: "Investment & Banking",
//     logos: ["/client-logo/adclan-logo-31.svg"],
//   },
// ];
const clientData = [
  {
    title: "Real Estate & Infrastructure",
    logos: [
      "/client-logo/adclan-logo-9.png",
      "/client-logo/adclan-logo-10.png",
      "/client-logo/adclan-logo-11.png",
      "/client-logo/adclan-logo-15.png",
      "/client-logo/adclan-logo-17.png",
      "/client-logo/adclan-logo-18.png",
      "/client-logo/adclan-logo-19.png",
      "/client-logo/adclan-logo-20.png",
      "/client-logo/adclan-logo-22.png",
      "/client-logo/adclan-logo-24.png",
      "/client-logo/adclan-logo-28.png",
      "/client-logo/adclan-logo-30.png",
      "/client-logo/adclan-logo-32.png",
      "/client-logo/adclan-logo-25.png",
    ],
  },
  {
    title: "FMCG & Retail",
    logos: [
      "/client-logo/adclan-logo-3.png",
      "/client-logo/adclan-logo-4.png",
      "/client-logo/adclan-logo-8.png", // eyewear moved here
    ],
  },
  {
    title: "Jewellery & Fashion",
    logos: [
      "/client-logo/adclan-logo-13.png",
      "/client-logo/adclan-logo-27.png",
      "/client-logo/adclan-logo-29.png",
      "/client-logo/adclan-logo-14.png", // ethnic wear merged
    ],
  },
  {
    title: "Healthcare & Wellness",
    logos: [
      "/client-logo/adclan-logo-2.png",
      "/client-logo/adclan-logo-5.png",
      "/client-logo/adclan-logo-23.png",
    ],
  },
  {
    title: "Manufacturing & Industrial",
    logos: [
      "/client-logo/adclan-logo-16.png",
      "/client-logo/adclan-logo-26.png",
    ],
  },
  {
    title: "Technology & Electronics",
    logos: ["/client-logo/adclan-logo-21.png","/client-logo/adclan-logo-31.svg"],
  },
  {
    title: "Consulting & Services",
    logos: [
      "/client-logo/adclan-logo-12.png", // advisory
      "/client-logo/adclan-logo-1.png", // welfare
      "/client-logo/adclan-logo-6.png", // astrology
      
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
