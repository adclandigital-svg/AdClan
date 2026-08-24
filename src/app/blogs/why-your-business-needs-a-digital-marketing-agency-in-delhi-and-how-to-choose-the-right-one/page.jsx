"use client";

import { useRef } from "react";
import "../blogs.css";

export default function CaseStudyPage() {
  const sections = {
    overview: useRef(null),
    client: useRef(null),
    objectives: useRef(null),
    strategy: useRef(null),
    video: useRef(null),
    execution: useRef(null),
    results: useRef(null),
    about: useRef(null),
  };

  const scrollTo = (ref) => {
    if (!ref.current) return;

    const yOffset = -120;
    const y =
      ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <section className="cs">
      {/* HERO */}
      <div className="cs-hero">
        <img
          src="/blog/right-gold-strips.webp"
          alt="Right Gold Case Study"
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
          <p onClick={() => scrollTo(sections.video)}>Video</p>
          <p onClick={() => scrollTo(sections.execution)}>Execution</p>
          <p onClick={() => scrollTo(sections.results)}>Results</p>
          <p onClick={() => scrollTo(sections.about)}>Key Takeaway</p>
        </aside>

        {/* CONTENT */}
        <div className="cs-content">
          {/* OVERVIEW */}
          <section ref={sections.overview}>
            <h1>
              Case Study: Right Gold – Turning Trust into Sales Through
              Strategic Video Marketing
            </h1>
            <p className="cs-sub">
              Turning Trust into Sales Through Strategic Video Marketing
            </p>

            <p>
              Right Gold is a jewellery brand specializing in 99.9% purity gold
              coins and ornaments, offering flexible making charges across 24K,
              22K, 18K, and 14K gold.
            </p>

            <p>
              Adclan partnered with Right Gold to build a strong brand presence
              and drive conversions through a full-scale creative campaign.
            </p>
          </section>

          {/* CLIENT */}
          <section ref={sections.client}>
            <h2>Client Background</h2>

            <ul>
              <li>
                <strong>Client Name:</strong> Right Gold
              </li>
              <li>
                <strong>Industry:</strong> Jewellery
              </li>
              <li>
                <strong>Core Offering:</strong> Gold coins & jewellery
              </li>
              <li>
                <strong>USP:</strong> Making charges starting from 5%
              </li>
            </ul>

            <p>
              Right Gold aimed to position itself as a trustworthy, modern gold
              brand in a competitive and trust-driven market.
            </p>
          </section>

          {/* OBJECTIVES */}
          <section ref={sections.objectives}>
            <h2>Objectives</h2>

            <ul>
              <li>Increase brand awareness</li>
              <li>Build trust & credibility</li>
              <li>Drive product inquiries & sales</li>
              <li>Create premium brand perception</li>
            </ul>

            <h4>Challenges</h4>
            <ul>
              <li>Highly saturated and trust-sensitive market</li>
              <li>Low differentiation</li>
              <li>Lack of strong visual storytelling</li>
              <li>Difficulty communicating purity + affordability</li>
            </ul>
          </section>

          {/* STRATEGY */}
          <section ref={sections.strategy}>
            <h2>Adclan’s Approach</h2>

            <p>
              We executed an end-to-end creative campaign combining emotional
              storytelling with performance-driven content.
            </p>

            <h4>Concept Development</h4>
            <blockquote style={{ marginBottom: "20px" }}>
              Gold that represents trust, purity, and smart buying
            </blockquote>

            <h4>Script Strategy</h4>
            <ul>
              <li>Emotion + logic storytelling</li>
              <li>Highlight purity (99.9%)</li>
              <li>Communicate affordability</li>
              <li>Occasion-based buying triggers</li>
            </ul>
          </section>

          {/* VIDEO */}
          <section ref={sections.video}>
            <h2>Video Production Strategy</h2>

            <p>
              We produced 4 high-quality ad films structured across two
              strategic pillars:
            </p>

            <h4>Brand Awareness Films</h4>
            <ul>
              <li>Family-driven storytelling</li>
              <li>Emotional connection with gold</li>
              <li>Trust & cultural value</li>
              <li>Warm cinematic visuals</li>
            </ul>

            <h4>Sales-Focused Films</h4>
            <ul>
              <li>Making charges from 5%</li>
              <li>Multiple karat options</li>
              <li>Clear CTA for conversions</li>
              <li>Product-focused visuals</li>
            </ul>

            <p>
              This dual approach ensured both brand building and direct
              performance.
            </p>
          </section>

          {/* EXECUTION */}
          <section ref={sections.execution}>
            <h2>Execution & Production</h2>

            <h4>Execution Highlights</h4>
            <ul>
              <li>Premium cinematic visuals</li>
              <li>Close-up jewellery shots</li>
              <li>Luxury + relatability balance</li>
              <li>Consistent brand identity</li>
            </ul>

            <h4>Celebrity Management</h4>
            <p>
              Talent was selected based on brand alignment — elegant,
              trustworthy, and modern.
            </p>

            <h4>End-to-End Execution</h4>
            <ul>
              <li>Creative direction</li>
              <li>Production & shoot</li>
              <li>Styling</li>
              <li>Editing & delivery</li>
            </ul>
          </section>

          {/* RESULTS */}
          <section ref={sections.results}>
            <h2>Results & Impact</h2>

            <ul>
              <li>Strong brand recall improvement</li>
              <li>Higher engagement on video content</li>
              <li>Improved trust perception</li>
              <li>Increase in inquiries & interest</li>
            </ul>

            <h4>What Made This Campaign Successful</h4>
            <ul>
              <li>Clear positioning strategy</li>
              <li>Strong storytelling</li>
              <li>End-to-end creative control</li>
              <li>Trust + value communication</li>
            </ul>
          </section>

          {/* TAKEAWAY */}
          <section ref={sections.about}>
            <h2>Key Takeaway</h2>

            <p>
              In industries like jewellery, people don’t just buy products —
              they buy trust.
            </p>

            <p>
              Adclan helped Right Gold transform that trust into a compelling
              visual narrative that not only connects emotionally but drives
              real business results.
            </p>
          </section>
          {/* FAQ */}
          <section className="cs-faq">
            <h2>Frequently Asked Questions</h2>

            <h4>How can video marketing help jewellery brands?</h4>

            <p>
              Video marketing helps jewellery brands build trust, showcase
              craftsmanship, and improve customer engagement.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
