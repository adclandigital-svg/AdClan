"use client";

import { useRef } from "react";
import "./inner-case-study.css";

export default function CaseStudyPage() {
  const sections = {
    overview: useRef(null),
    client: useRef(null),
    objectives: useRef(null),
    strategy: useRef(null),
    radio: useRef(null),
    outdoor: useRef(null),
    digital: useRef(null),
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
          src="/case-studies/why-your-business-strip.webp"
          alt="Why Your Business"
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
          <p onClick={() => scrollTo(sections.digital)}>Digital</p>
          <p onClick={() => scrollTo(sections.results)}>Results</p>
          <p onClick={() => scrollTo(sections.about)}>About</p>
        </aside>

        {/* CONTENT */}
        <div className="cs-content">
          {/* OVERVIEW */}
          <section ref={sections.overview}>
            <h1>Vikram Mills Case Study</h1>
            <p className="cs-sub">
              How Adclan Built Brand Awareness Through Radio, Outdoor & Digital
            </p>

            <p>
              Vikram Mills partnered with Adclan to strengthen awareness of its
              flagship product Chakki Atta across key North Indian markets.
            </p>

            <p>
              The objective was simple but powerful:
              Make Vikram Mills visible to everyday consumers where they spend
              the most time — on radio, on the road, and online.
            </p>

            <p>
              Adclan designed a multi-channel marketing strategy combining radio
              advertising, outdoor media, and digital presence to maximize reach
              and recall.
            </p>
          </section>

          {/* CLIENT */}
          <section ref={sections.client}>
            <h2>Client Background</h2>

            <p>Vikram Mills is a food products company offering:</p>

            <ul>
              <li>Chakki Atta</li>
              <li>Rice</li>
              <li>Sooji</li>
            </ul>

            <p>
              Their focus is on quality wheat products and household staples for
              Indian consumers.
            </p>

            <p>
              With growing competition in the FMCG food segment, the brand
              wanted to:
            </p>

            <ul>
              <li>Increase visibility</li>
              <li>Strengthen brand recall</li>
              <li>Reach consumers in multiple cities</li>
            </ul>
          </section>

          {/* OBJECTIVES */}
          <section ref={sections.objectives}>
            <h2>Campaign Objectives</h2>

            <h4>Primary Objective</h4>
            <p>
              Increase brand awareness for Vikram Mills Chakki Atta across key
              markets.
            </p>

            <h4>Secondary Objectives</h4>
            <ul>
              <li>Build trust through repeated brand exposure</li>
              <li>Reach mass audiences through radio and outdoor media</li>
              <li>Create a digital platform to showcase products</li>
            </ul>
          </section>

          {/* STRATEGY */}
          <section ref={sections.strategy}>
            <h2>Adclan Strategy</h2>

            <p>
              Adclan implemented a 360° awareness campaign combining traditional
              and digital marketing channels.
            </p>

            <p>
              The campaign focused on high-frequency media placements in markets
              where FMCG consumption is strong.
            </p>

            <ul>
              <li>Mass reach via radio</li>
              <li>High-visibility outdoor placements</li>
              <li>Dedicated digital landing page</li>
            </ul>

            <p>
              This ensured the brand was visible across multiple consumer
              touchpoints.
            </p>
          </section>

          {/* RADIO */}
          <section ref={sections.radio}>
            <h2>Radio Advertising Campaign</h2>

            <p>
              Adclan launched a radio campaign across major FM stations.
            </p>

            <h4>Stations Used</h4>
            <ul>
              <li>Radio Mirchi 98.3 FM</li>
              <li>Big FM 92.7</li>
              <li>My FM</li>
            </ul>

            <h4>Cities Targeted</h4>
            <ul>
              <li>Delhi</li>
              <li>Kanpur</li>
              <li>Varanasi</li>
              <li>Jaipur</li>
              <li>Chandigarh</li>
              <li>Jalandhar</li>
              <li>Patiala</li>
            </ul>

            <h4>Why Radio?</h4>
            <ul>
              <li>High daily listenership</li>
              <li>Strong local penetration</li>
              <li>Frequent repetition improves recall</li>
            </ul>
          </section>

          {/* OUTDOOR */}
          <section ref={sections.outdoor}>
            <h2>Outdoor Advertising Campaign</h2>

            <h4>Campaign Duration</h4>
            <p>3 Months</p>

            <h4>Locations</h4>
            <ul>
              <li>Delhi</li>
              <li>Gurgaon</li>
            </ul>

            <h4>Format</h4>
            <p>Lift Branding</p>

            <p>
              Lift branding ensures repeated exposure as people use elevators in
              residential and commercial buildings.
            </p>

            <h4>Investment</h4>
            <p>Approx ₹2,00,000 per month</p>

            <h4>Impact</h4>
            <ul>
              <li>High visibility</li>
              <li>Repeated daily exposure</li>
              <li>Strong urban presence</li>
            </ul>
          </section>

          {/* DIGITAL */}
          <section ref={sections.digital}>
            <h2>Digital Landing Page Development</h2>

            <h4>Technologies Used</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>

            <h4>Purpose</h4>
            <ul>
              <li>Explore the brand online</li>
              <li>View product categories</li>
              <li>Learn more about offerings</li>
            </ul>

            <h4>Products Highlighted</h4>
            <ul>
              <li>Atta</li>
              <li>Rice</li>
              <li>Sooji</li>
            </ul>
          </section>

          {/* RESULTS */}
          <section ref={sections.results}>
            <h2>Results & Campaign Impact</h2>

            <ul>
              <li>Reached audiences across 7 major cities</li>
              <li>Built mass brand awareness</li>
              <li>Established strong offline & online presence</li>
            </ul>

            <h4>Why This Campaign Worked</h4>
            <ul>
              <li>High-frequency radio spots</li>
              <li>High-visibility outdoor placements</li>
              <li>Digital accessibility via landing page</li>
            </ul>
          </section>

          {/* ABOUT */}
          <section ref={sections.about}>
            <h2>About Adclan</h2>

            <p>
              Adclan is a strategy-led marketing and advertising agency helping
              brands grow through:
            </p>

            <ul>
              <li>Media Planning</li>
              <li>Radio Advertising</li>
              <li>Outdoor Campaigns</li>
              <li>Digital Marketing</li>
              <li>Landing Page Development</li>
            </ul>

            <p>
              We work with businesses to turn marketing ideas into measurable
              brand impact.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}