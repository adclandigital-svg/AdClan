"use client";

import React, { useRef } from "react";
import "./Homesecond.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HomeSecond() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const cards = [
    {
      text: "Radio",
      bg: "/home/radio.jpg",
    },
    {
      text: "Print",
      bg: "/home/print.jpg",
    },
    {
      text: "Event",
      bg: "/home/events.jpg",
    },
    {
      text: "Creative",
      bg: "/home/creative.jpg",
    },
    {
      text: "Digital",
      bg: "/home/digital.webp",
    },
    {
      text: "Celebrity",
      bg: "/home/celebrities.jpg",
    },
  ];

  useGSAP(
    () => {
      try {
        const cards = cardsRef.current;
        if (!cards || cards.length === 0) return;

        // Filter out null refs
        const validCards = cards.filter((card) => card !== null);
        if (validCards.length === 0) return;

        const rotations = [-15, -8, -3, 3, 8, 15];

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 5%",
            end: "+=140%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            // markers: true,
          },
        });

        /* Heading scale */
        if (headingRef.current) {
          tl.to(headingRef.current, {
            scale: 0.5,
            ease: "none",
          });
        }

        tl.add("cardsMove");

        /* Move cards to center */
        validCards.forEach((card) => {
          tl.to(
            card,
            {
              left: "50%",
              top: "50%",
              xPercent: -50,
              yPercent: -50,
              duration: 4,
              ease: "none",
            },
            "cardsMove",
          );
        });

        tl.add("cardsRotate");

        /* Rotate cards */
        validCards.forEach((card, i) => {
          tl.to(
            card,
            {
              rotation: rotations[i % rotations.length],
              ease: "none",
            },
            "cardsRotate",
          );
        });
      } catch (error) {
        console.error("HomeSecond animation error:", error);
      }
    },
    {
      scope: sectionRef, // ✅ this replaces gsap.context()
      revertOnUpdate: true,
    },
  );

  return (
    <div className="home-second-section-main" ref={sectionRef}>
      <div className="home-second-section">
        <h1 className="home-second-section-heading" ref={headingRef}>
          Our <br /> Clan
        </h1>

        {cards.map((card, i) => (
          <div
            key={i}
            className={`home-second-cards home-second-cards${i + 1}`}
            ref={(el) => (cardsRef.current[i] = el)}
            style={{
              backgroundImage: `url(${card.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

