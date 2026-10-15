"use client";

import React, { useRef, useEffect } from "react";
import {
  Rocket,
  Briefcase,
  Sparkles,
  Users,
  Award,
  Radio,
  Building,
  Layers,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS_DATA = [
  {
    num: 100,
    suffix: "+",
    label: "Campaigns Executed",
    desc: "Targeted full-funnel rollouts",
    icon: Rocket,
    color: "cyan",
  },
  {
    num: 100,
    suffix: "+",
    label: "Brands Managed",
    desc: "From seed-stage to enterprise",
    icon: Briefcase,
    color: "emerald",
  },
  {
    num: 5,
    suffix: "+",
    label: "Celebrity Endorsements",
    desc: "High-credibility star power",
    icon: Sparkles,
    color: "amber",
  },
  {
    num: 100,
    suffix: "K+",
    label: "Happy Users Reached",
    desc: "Pan-India engaged audiences",
    icon: Users,
    color: "cyan",
  },
  {
    num: 7,
    suffix: "+",
    label: "Years of Excellence",
    desc: "Industry-proven track record",
    icon: Award,
    color: "emerald",
  },
  {
    num: 5,
    suffix: "+",
    label: "Media Partners",
    desc: "OTT, Radio & Print networks",
    icon: Radio,
    color: "purple",
  },
  {
    num: 10,
    suffix: "+",
    label: "Enterprise Clients",
    desc: "Long-term strategic contracts",
    icon: Building,
    color: "cyan",
  },
  {
    num: 360,
    suffix: "°",
    label: "Execution Channels",
    desc: "Integrated omnipresence",
    icon: Layers,
    color: "emerald",
  },
];

export default function ImpactSectionV2() {
  const sectionRef = useRef(null);
  const numberRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      numberRefs.current.forEach((el, index) => {
        if (!el) return;
        const targetStat = STATS_DATA[index];
        const obj = { val: 0 };

        gsap.to(obj, {
          val: targetStat.num,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          },
          onUpdate: () => {
            if (el) {
              el.innerText = `${Math.floor(obj.val)}${targetStat.suffix}`;
            }
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="v2-impact-section" ref={sectionRef} id="v2-impact">
      <div className="v2-ambient-glow v2-ambient-glow-left" />

      <div className="v2-container">
        {/* Section Header */}
        <div className="v2-section-header">
          <div className="v2-badge">
            <Award size={14} className="v2-badge-icon" />
            <span>MEASURABLE EXCELLENCE & SCALE</span>
          </div>

          <h2 className="v2-section-title">
            Building Brands That Create <span className="v2-gradient-text">Unstoppable Impact</span>
          </h2>

          <p className="v2-section-desc">
            Adclan Media Solution Pvt Ltd empowers forward-thinking companies through high-ROI
            campaigns, reaching millions worldwide with integrated media solutions.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="v2-impact-bento-grid">
          {/* Left: Cinematic Agency Visual Card */}
          <div className="v2-impact-hero-card">
            <div className="v2-impact-image-wrapper">
              <img
                src="/home/home-image.jpeg"
                alt="AdClan Team & Collaborative Culture"
                className="v2-impact-img"
                loading="lazy"
              />
              <div className="v2-impact-image-overlay" />

              {/* Floating Glass Badges */}
              <div className="v2-floating-badge v2-fb-top">
                <span className="v2-pulse-dot" />
                <div>
                  <strong>99.4% Retention</strong>
                  <span>Trusted Agency Partner</span>
                </div>
              </div>

              <div className="v2-floating-badge v2-fb-bottom">
                <TrendingUp size={18} className="v2-fb-icon" />
                <div>
                  <strong>25+ Mega Campaigns</strong>
                  <span>Delivered on Target & Budget</span>
                </div>
              </div>
            </div>

            {/* Bottom Caption */}
            <div className="v2-impact-hero-text">
              <div className="v2-agency-pill">Full-Service Growth Partner</div>
              <h3>Integrated Execution Across Digital, Radio, Print & OTT</h3>
              <p>
                From brand strategy to aggressive performance scaling, our in-house strategists,
                creatives, and media buyers handle your complete marketing lifecycle.
              </p>
            </div>
          </div>

          {/* Right: 8 Bento Metric Cards */}
          <div className="v2-stats-grid">
            {STATS_DATA.map((item, idx) => {
              const IconComp = item.icon;

              return (
                <div key={idx} className={`v2-stat-bento-card v2-stat-${item.color}`}>
                  <div className="v2-stat-card-header">
                    <div className="v2-stat-icon-wrap">
                      <IconComp size={20} />
                    </div>
                  </div>

                  <div className="v2-stat-card-body">
                    <strong
                      ref={(el) => (numberRefs.current[idx] = el)}
                      className="v2-stat-number"
                    >
                      {item.num}
                      {item.suffix}
                    </strong>
                    <h4 className="v2-stat-label">{item.label}</h4>
                    <p className="v2-stat-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
