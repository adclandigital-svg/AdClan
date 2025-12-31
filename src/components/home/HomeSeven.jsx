"use client";

import React, { useRef } from "react";
import "./HomeSeven.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HomeSeven() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const rightRef = useRef(null);

  useGSAP(
    () => {
      /* IMAGE FLOAT */
      gsap.from(imageRef.current, {
        y: 50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%",
          end: "top 0%",
          scrub: 2,
        },
      });

      /* RIGHT CONTENT */
      gsap.from(
        gsap.utils.toArray(
          ".right-main-heading, .right-desc, .right-sub-heading, .stat-row"
        ),
        {
          opacity: 0,
          y: 40,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 75%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    },
    {
      scope: sectionRef, // 🔥 VERY IMPORTANT
    }
  );

  return (
    <section className="home-seven" ref={sectionRef}>
      <h2 className="home-seven-heading">
        Building Brands <br /> That Create Impact
      </h2>

      <div className="home-seven-content">
        <div className="home-seven-left">
          <img
            ref={imageRef}
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Creative Team"
          />
        </div>

        <div className="home-seven-right" ref={rightRef}>
          <h4 className="right-sub-heading">Our Achievements:</h4>

          <div className="home-seven-stats">
            <div className="stat-row">
              <span>150+</span>
              <p>Projects Delivered</p>
            </div>
            <div className="stat-row">
              <span>12+</span>
              <p>Active Clients</p>
            </div>
            <div className="stat-row">
              <span>10+</span>
              <p>Years of Experience</p>
            </div>
            <div className="stat-row">
              <span>15+</span>
              <p>Industry Collaborations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
