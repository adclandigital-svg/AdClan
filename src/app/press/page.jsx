"use client";

import React from "react";
import "./press.css";

const pressReleases = [
  {
    id: 1,
    title: "Vikram Mills Launches Radio Jingle Campaign",
    date: "March 2026",
    image:
      "https://static.toiimg.com/thumb/msid-70687338,imgsize-1352342,width-400,resizemode-4/70687338.jpg",
    summary:
      "Vikram Mills partnered with Adclan Digital to launch a high-impact radio jingle campaign aimed at strengthening brand recall across key markets.",
  },
  {
    id: 2,
    title: "Adclan Digital Expands Creative Capabilities",
    date: "February 2026",
    image:
      "https://static.toiimg.com/thumb/msid-70687338,imgsize-1352342,width-400,resizemode-4/70687338.jpg",
    summary:
      "Adclan Digital announces expansion into audio production, influencer marketing, and performance-driven creative solutions.",
  },
  {
    id: 3,
    title: "Multi-City Campaign Achieves 10M+ Reach",
    date: "January 2026",
    image:
      "https://static.toiimg.com/thumb/msid-70687338,imgsize-1352342,width-400,resizemode-4/70687338.jpg",
    summary:
      "A strategic campaign delivered exceptional reach and engagement through integrated radio and digital execution.",
  },
  {
    id: 4,
    title: "Multi-City Campaign Achieves 10M+ Reach",
    date: "January 2026",
    image:
      "https://static.toiimg.com/thumb/msid-70687338,imgsize-1352342,width-400,resizemode-4/70687338.jpg",
    summary:
      "A strategic campaign delivered exceptional reach and engagement through integrated radio and digital execution.",
  },
  {
    id: 1,
    title: "Vikram Mills Launches Radio Jingle Campaign",
    date: "March 2026",
    image:
      "https://static.toiimg.com/thumb/msid-70687338,imgsize-1352342,width-400,resizemode-4/70687338.jpg",
    summary:
      "Vikram Mills partnered with Adclan Digital to launch a high-impact radio jingle campaign aimed at strengthening brand recall across key markets.",
  },
  {
    id: 2,
    title: "Adclan Digital Expands Creative Capabilities",
    date: "February 2026",
    image:
      "https://static.toiimg.com/thumb/msid-70687338,imgsize-1352342,width-400,resizemode-4/70687338.jpg",
    summary:
      "Adclan Digital announces expansion into audio production, influencer marketing, and performance-driven creative solutions.",
  },
  {
    id: 3,
    title: "Multi-City Campaign Achieves 10M+ Reach",
    date: "January 2026",
    image:
      "https://static.toiimg.com/thumb/msid-70687338,imgsize-1352342,width-400,resizemode-4/70687338.jpg",
    summary:
      "A strategic campaign delivered exceptional reach and engagement through integrated radio and digital execution.",
  },
  {
    id: 4,
    title: "Multi-City Campaign Achieves 10M+ Reach",
    date: "January 2026",
    image:
      "https://static.toiimg.com/thumb/msid-70687338,imgsize-1352342,width-400,resizemode-4/70687338.jpg",
    summary:
      "A strategic campaign delivered exceptional reach and engagement through integrated radio and digital execution.",
  },
];

export default function PressPage() {
  return (
    <div className="press-page">
      {/* HEADER */}
      <div className="press-header">
        <h1>Press Releases</h1>
        <p>Official announcements and company updates</p>
      </div>

      {/* GRID */}
      <div className="press-grid">
        {pressReleases.map((item) => (
          <div className="press-card" key={item.id}>
            {/* IMAGE */}
            <div className="press-image">
              <img src={item.image} alt={item.title} />
              <span className="press-date">{item.date}</span>
            </div>

            {/* CONTENT */}
            <div className="press-content">
              <h3>{item.title}</h3>
              <p>{item.summary}</p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
