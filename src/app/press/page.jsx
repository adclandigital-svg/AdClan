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
      "Astrosage AI highlighted as one of India’s fastest-growing AI startups.",
    news_paper_name: "Financial Express",
    objective: "Position Astrosage AI as a high-growth AI startup",
    duration: "15 Days PR Campaign",
    result_roi: "80M+ downloads highlighted, 250M+ queries showcased",
    learning: "Top-tier financial media builds strong startup authority",
  },
  {
    id: 2,
    title: "Astrosage AI in The Economic Times",
    date: "February 2026",
    image: "/press/Artboard 4.webp",
    short_description:
      "Featured in a leading business daily targeting investors and professionals.",
    news_paper_name: "The Economic Times",
    objective: "Target investor & business audience",
    duration: "20 Days PR Push",
    result_roi: "Strong credibility among business readers",
    learning: "Investor-focused media increases trust",
  },
  {
    id: 3,
    title: "Astrosage AI in The Indian Express",
    date: "February 2026",
    image: "/press/Artboard 5.webp",
    short_description: "Mass media coverage boosting national visibility.",
    news_paper_name: "The Indian Express",
    objective: "Drive mass awareness across India",
    duration: "30 Days Campaign",
    result_roi: "Pan-India reach and brand recall",
    learning: "Mass publications deliver scale",
  },
  {
    id: 4,
    title: "Vikram Mills Print Campaign (Times City)",
    date: "2026",
    image: "/press/Artboard 1.webp",
    short_description:
      "Premium FMCG print ad promoting quality flour products.",
    news_paper_name: "Times City / Lifestyle Section",
    objective: "Increase retail brand visibility",
    duration: "25 Days Campaign",
    result_roi: "Improved product awareness & trust",
    learning: "Visual-heavy creatives work best for FMCG",
  },
  {
    id: 5,
    title: "Astrosage AI Featured in Mint",
    date: "February 2026",
    image: "/press/Artboard 2.webp",
    short_description:
      "Premium business newspaper coverage for high-value audience.",
    news_paper_name: "Mint",
    objective: "Reach premium & corporate audience",
    duration: "15 Days PR Coverage",
    result_roi: "High-quality audience engagement",
    learning: "Premium publications attract quality leads",
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

                {/* SHORT DESCRIPTION */}
                {selectedItem.short_description && (
                  <p className="modal-short">
                    {selectedItem.short_description}
                  </p>
                )}

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
