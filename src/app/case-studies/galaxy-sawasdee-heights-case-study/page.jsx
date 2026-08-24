"use client";

import { useRef } from "react";
import "./caseStudy.css";

export default function CaseStudyPage() {
  const sections = {
    overview: useRef(null),
    client: useRef(null),
    objectives: useRef(null),
    strategy: useRef(null),
    radio: useRef(null),
    outdoor: useRef(null),
    results: useRef(null),
    about: useRef(null),
  };

  const scrollTo = (ref) => {
    if (!ref.current) return;

    const yOffset = -120; // 🔥 adjust based on your navbar height
    const y =
      ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };
  return (
    <section className="cs">
      {/* HERO IMAGE */}
      <div className="cs-hero">
        <img
          src="/blog/galaxy-strip.webp"
          alt="Galaxy Sawasdee Heights"
          className="cs-img"
        />
      </div>

      <div className="cs-container">
        {/* TOC */}
        <aside className="cs-toc">
          <p onClick={() => scrollTo(sections.overview)}>Overview</p>
          <p onClick={() => scrollTo(sections.client)}>Client</p>
          <p onClick={() => scrollTo(sections.objectives)}>Objectives</p>
          <p onClick={() => scrollTo(sections.strategy)}>Strategy</p>
          <p onClick={() => scrollTo(sections.radio)}>Radio</p>
          <p onClick={() => scrollTo(sections.outdoor)}>Outdoor</p>
          <p onClick={() => scrollTo(sections.results)}>Results</p>
          <p onClick={() => scrollTo(sections.about)}>About</p>
        </aside>

        {/* CONTENT */}
        <div className="cs-content">
          {/* OVERVIEW */}
          <section ref={sections.overview}>
            <h1>Galaxy Sawasdee Heights Case Study</h1>
            <p className="cs-sub">
              How Adclan Drove Awareness & Sales for a Premium Real Estate
              Project
            </p>

            <p>
              Galaxy Sawasdee Heights partnered with Adclan to increase brand
              awareness and generate quality leads for its premium residential
              offering.
            </p>
            <p>
              The goal was to position the project as a desirable living
              destination while driving real buyer interest for 3BHK and 4BHK
              apartments.
            </p>
            <p>
              Adclan executed a multi-channel campaign combining radio, outdoor
              advertising, and digital presence to maximize reach and
              conversions.
            </p>
          </section>

          {/* CLIENT */}
          <section ref={sections.client}>
            <h2>Client Background</h2>
            <p>
              Galaxy Sawasdee Heights is a premium residential development
              offering:
            </p>
            <ul>
              <li>Spacious 3BHK apartments</li>
              <li>Luxurious 4BHK apartments</li>
            </ul>
            <p>
              The project is designed for modern urban families seeking comfort,
              connectivity, and lifestyle amenities.
            </p>
          </section>

          {/* OBJECTIVES */}
          <section ref={sections.objectives}>
            <h2>Campaign Objectives</h2>

            <h4>Primary Objectives</h4>
            <ul>
              <li>Build strong brand awareness in the local market</li>
              <li>Generate qualified leads for property sales</li>
            </ul>

            <h4>Secondary Objectives</h4>
            <ul>
              <li>Position the project as a premium residential choice</li>
              <li>Increase walk-ins and inquiries</li>
              <li>Establish a strong digital presence</li>
            </ul>
          </section>

          {/* STRATEGY */}
          <section ref={sections.strategy}>
            <h2>Adclan Strategy</h2>
            <p>
              Adclan implemented a 360° real estate marketing strategy focused
              on:
            </p>
            <ul>
              <li>Mass awareness (Radio + Outdoor)</li>
              <li>High-impact visibility in key locations</li>
              <li>Digital presence for lead capture</li>
            </ul>

            <blockquote>
              Be visible where buyers listen, travel, and search
            </blockquote>
          </section>

          {/* RADIO */}
          <section ref={sections.radio}>
            <h2>Radio Advertising Campaign</h2>

            <p>
              To reach a wide and relevant audience, Adclan launched a radio
              campaign.
            </p>

            <p>
              <strong>Station Used:</strong> Radio City
            </p>

            <h4>Why Radio Worked</h4>
            <ul>
              <li>High engagement among daily commuters</li>
              <li>Strong local targeting</li>
              <li>Repetition builds trust in real estate decisions</li>
            </ul>

            <p>
              This helped the project stay top-of-mind for potential homebuyers.
            </p>
          </section>

          {/* OUTDOOR */}
          <section ref={sections.outdoor}>
            <h2>Outdoor Advertising Campaign</h2>

            <p>
              To reinforce visibility, Adclan executed outdoor hoarding
              campaigns in high-traffic areas.
            </p>

            <h4>Key Highlights</h4>
            <ul>
              <li>Strategic placement in prime locations</li>
              <li>High-frequency visibility for commuters</li>
              <li>Strong visual branding of the project</li>
            </ul>

            <h4>Impact</h4>
            <ul>
              <li>Continuous brand exposure</li>
              <li>Increased recall among local buyers</li>
              <li>Strong offline presence</li>
            </ul>
          </section>

          {/* RESULTS */}
          <section ref={sections.results}>
            <h2>Results & Impact</h2>

            <p>Through this integrated campaign, Adclan helped:</p>

            <ul>
              <li>Increase brand visibility across target locations</li>
              <li>Generate high-intent real estate inquiries</li>
              <li>Build a strong market presence for the project</li>
            </ul>

            <p>
              The combination of offline + digital strategy ensured consistent
              engagement with potential buyers.
            </p>

            <h4>Why This Campaign Worked</h4>
            <ul>
              <li>Multi-channel execution</li>
              <li>Strategic media placement</li>
              <li>Strong digital support system</li>
              <li>Clear focus on both awareness and sales</li>
            </ul>
          </section>

          {/* ABOUT */}
          <section ref={sections.about}>
            <h2>About Adclan</h2>
            <p>
              Adclan is a strategy-led marketing agency helping brands grow
              through:
            </p>

            <ul>
              <li>Media Planning</li>
              <li>Radio Advertising</li>
              <li>Outdoor Campaigns</li>
              <li>Real Estate Marketing</li>
              <li>Website & Landing Page Development</li>
            </ul>

            <p>We help brands move from visibility to conversion.</p>
          </section>
        </div>
      </div>
    </section>
  );
}
