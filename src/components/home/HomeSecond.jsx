"use client";

import React, { useRef, useEffect } from "react";
import "./Homesecond.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeSecond() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  // useEffect(() => {
  //   if (!sectionRef.current || !headingRef.current) return;

  //   const ctx = gsap.context(() => {
  //     const cards = cardsRef.current;
  //     const rotations = [-15, -8, -3, 3, 8, 15];

  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top top",
  //         end: "+=140%",
  //         scrub:true,
  //         pin: true,
  //         anticipatePin: 1,
  //         invalidateOnRefresh: true,
  //         // markers: true,
  //       },
  //     });

  //     /* Heading scale */
  //     tl.to(headingRef.current, {
  //       scale: 0.5,
  //     });

  //     tl.add("cardsMove");

  //     /* Move cards to center */
  //     cards.forEach((card) => {
  //       tl.to(
  //         card,
  //         {
  //           left: "50%",
  //           top: "50%",
  //           xPercent: -50,
  //           yPercent: -50,
  //           duration:4,
            
  //         },
  //         "cardsMove"
  //       );
  //     });

  //     tl.add("cardsRotate");

  //     /* Rotate cards */
  //     cards.forEach((card, i) => {
  //       tl.to(
  //         card,
  //         {
  //           rotation: rotations[i],
  //         },
  //         "cardsRotate"
  //       );
  //     });
  //   }, sectionRef);

  //   return () => {
  //     ctx.revert(); // ✅ SAFELY removes pin & animations
  //     // ScrollTrigger.getAll().forEach((st) => st.kill()); // 🔥 critical
  //   };
  // }, []);
useEffect(() => {
  if (!sectionRef.current || !headingRef.current) return;

  const cards = cardsRef.current;
  const rotations = [-15, -8, -3, 3, 8, 15];

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top top",
      end: "+=140%",
      scrub: true,
      pin: true,
      // markers: true,
    },
  });

  /* Heading scale */
  tl.to(headingRef.current, {
    scale: 0.5,
    ease: "none",
  });

  tl.add("cardsMove");

  /* Move cards to center */
  cards.forEach((card) => {
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
      "cardsMove"
    );
  });

  tl.add("cardsRotate");

  /* Rotate cards */
  cards.forEach((card, i) => {
    tl.to(
      card,
      {
        rotation: rotations[i],
        ease: "none",
      },
      "cardsRotate"
    );
  });

  return () => {
    // 🔥 IMPORTANT CLEANUP
    // tl.scrollTrigger?.kill(); // kill pin safely
    tl.kill();               // kill timeline
  };
}, []);

  return (
    <div className="home-second-section-main" ref={sectionRef}>
      <div className="home-second-section">
        <h1 className="home-second-section-heading" ref={headingRef}>
          Our <br /> Clan
        </h1>

        {[
          "Radio",
          "Print",
          "Event",
          "Creative",
          "Digital",
          "Celebrity",
        ].map((text, i) => (
          <div
            key={i}
            className={`home-second-cards home-second-cards${i + 1}`}
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

