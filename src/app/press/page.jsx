"use client";

import "./press.css";
import React, { useState } from "react";

const pressReleases = [
  {
    id: 1,
    title: "Astrosage AI Featured in Financial Express",
    date: "February 2026",
    image: "/press/Artboard 3.webp",
    short_description:
      "Featured in Financial Express highlighting Astrosage AI’s rapid growth and credibility.",
    news_paper_name: "Financial Express",
    objective:
      "To enhance brand credibility and establish Astrosage AI as a leading AI-driven astrology platform by leveraging high-authority financial media exposure.",
    duration: "1 Day, Print Media Visibility Campaign",
    result_roi:
      "Achieved strong brand visibility through a reputed national financial publication. Reinforced trust among a premium and business-focused audience segment. Highlighted key milestones, including 80M+ downloads and 250M+ user queries. Improved brand positioning as a fast-growing AI startup in India.",
    learning:
      "Strategic placement in top-tier financial media significantly boosts brand authority, investor perception, and audience trust, especially for tech-driven startups.",
  },
  {
    id: 2,
    title: "Astrosage AI in The Economic Times",
    date: "February 2026",
    image: "/press/Artboard 4.webp",
    short_description:
      "Coverage in Economic Times targeting investors and business leaders.",
    news_paper_name: "The Economic Times",
    objective:
      "To strengthen Astrosage AI’s positioning as a scalable and tech-driven platform by gaining visibility among business leaders and investors.",
    duration: "1 Day, Print Media Visibility Campaign",
    result_roi:
      "Exposure in one of India’s most trusted business publications. Enhanced credibility among corporate and investor audiences. Strengthened perception as a high-growth AI startup. Increased brand recall in the financial and tech ecosystem.",
    learning:
      "Visibility in leading business media helps attract high-value audiences and builds long-term brand equity in competitive markets.",
  },
  {
    id: 3,
    title: "Astrosage AI in The Indian Express",
    date: "February 2026",
    image: "/press/Artboard 5.webp",
    short_description:
      "National media coverage driving large-scale awareness across India.",
    news_paper_name: "The Indian Express",
    objective:
      "To expand reach among a broader national audience and establish Astrosage AI as a trusted digital astrology platform.",
    duration: "1 Day, Print Media Coverage",
    result_roi:
      "Wide audience reach across multiple demographics. Increased brand awareness at a national level. Strengthened trust through mainstream media presence. Improved engagement from new user segments.",
    learning:
      "Mass media coverage plays a crucial role in scaling awareness and building trust across diverse audience groups.",
  },
  {
    id: 4,
    title: "Vikram Mills Print Campaign (Times City)",
    date: "2026",
    image: "/press/Artboard 1.webp",
    short_description:
      "Premium lifestyle print coverage boosting retail visibility and brand recall.",
    news_paper_name: "Times City / Lifestyle Section",
    objective:
      "To increase retail visibility and strengthen brand presence of Vikram Mills among lifestyle-focused consumers through a high-impact print campaign.",
    duration: "1 Day, Print Media Coverage",
    result_roi:
      "Achieved strong visibility in a premium lifestyle supplement with high readership. Enhanced product awareness across key consumer segments. Strengthened brand trust through consistent print presence. Improved in-store recall and purchase consideration.",
    learning:
      "High-quality, visually appealing creatives in lifestyle print media significantly improve brand recall and consumer trust for FMCG products.",
  },
  {
    id: 5,
    title: "Astrosage AI Featured in Mint",
    date: "February 2026",
    image: "/press/Artboard 2.webp",
    short_description:
      "Featured in Mint to reach a premium, knowledge-driven audience.",
    news_paper_name: "Mint",
    objective:
      "To position Astrosage AI as an innovative and data-driven startup within India’s digital and financial ecosystem.",
    duration: "1 Days, Print Media Visibility Campaign",
    result_roi:
      "Strong positioning in a premium, knowledge-driven publication. Improved credibility among informed and tech-savvy readers. Highlighted product innovation and growth metrics. Strengthened brand perception in the startup ecosystem.",
    learning:
      "Premium publications with an informed readership help reinforce brand authority and showcase innovation effectively.",
  },
];

export default function PressPage() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <div className="press-page">
        {/* HEADER */}
        <div className="press-header">
          <h1>Press Releases</h1>
          <p>Official announcements and company updates</p>
        </div>

        {/* GRID */}
        <div className="press-grid">
          {pressReleases.map((item) => (
            <div
              className="press-card"
              key={item.id}
              onClick={() => setSelectedItem(item)}
            >
              <div className="press-image">
                <img src={item.image} alt={item.title} />
                <span className="press-date">{item.date}</span>
              </div>

              <div className="press-content">
                <h3>{item.title}</h3>
                <p className="press-short">{item.short_description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-box lr" onClick={(e) => e.stopPropagation()}>
            {/* CLOSE */}
            <button
              className="modal-close"
              onClick={() => setSelectedItem(null)}
            >
              ✕
            </button>

            <div className="modal-flex">
              {/* LEFT IMAGE */}
              <div className="modal-left">
                <img src={selectedItem.image} alt={selectedItem.title} />
              </div>

              {/* RIGHT CONTENT */}
              <div className="modal-right">
                <h2>{selectedItem.title}</h2>
                <span className="modal-date">{selectedItem.date}</span>

                <div className="modal-details">
                  {selectedItem.news_paper_name && (
                    <div>
                      <strong>News Paper:</strong>{" "}
                      {selectedItem.news_paper_name}
                    </div>
                  )}

                  {selectedItem.objective && (
                    <div>
                      <strong>Objective:</strong> {selectedItem.objective}
                    </div>
                  )}

                  {selectedItem.duration && (
                    <div>
                      <strong>Duration:</strong> {selectedItem.duration}
                    </div>
                  )}

                  {selectedItem.result_roi && (
                    <div>
                      <strong>Result / ROI:</strong> {selectedItem.result_roi}
                    </div>
                  )}

                  {selectedItem.learning && (
                    <div>
                      <strong>Key Learning:</strong> {selectedItem.learning}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
