"use client";
import React, { useEffect, useRef, useState } from "react";
import "./HomeThird.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HomeThird() {
  const images = [
    "/client-logo/adclan-logo-1.png",
    "/client-logo/adclan-logo-2.png",
    "/client-logo/adclan-logo-3.png",
    "/client-logo/adclan-logo-4.png",
    // "/client-logo/adclan-logo-5.png",
    "/client-logo/adclan-logo-6.png",
    "/client-logo/adclan-logo-7.png",
    "/client-logo/adclan-logo-8.png",
    "/client-logo/adclan-logo-9.png",
    "/client-logo/adclan-logo-10.png",
    "/client-logo/adclan-logo-11.png",
    "/client-logo/adclan-logo-12.png",
    "/client-logo/adclan-logo-13.png",
    // "/client-logo/adclan-logo-14.png",
    "/client-logo/adclan-logo-15.png",
    "/client-logo/adclan-logo-16.png",
    "/client-logo/adclan-logo-17.png",
    "/client-logo/adclan-logo-18.png",
    "/client-logo/adclan-logo-19.png",
    "/client-logo/adclan-logo-20.png",
    "/client-logo/adclan-logo-21.png",
    "/client-logo/adclan-logo-22.png",
    "/client-logo/adclan-logo-23.png",
    "/client-logo/adclan-logo-24.png",
    "/client-logo/adclan-logo-25.png",
    "/client-logo/adclan-logo-26.png",
    "/client-logo/adclan-logo-27.png",
    "/client-logo/adclan-logo-28.png",
  ];

  const [index, setIndex] = useState(0);
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  /* 🔄 Logo focus animation (unchanged) */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);

  /* 🎯 GSAP text animation on intersect */
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const trigger = ScrollTrigger.create({
  //       trigger: sectionRef.current,
  //       start: "top 70%",
  //       onEnter: () => {
  //         // Reset elements to initial state before animating
  //         gsap.set(textRef.current.children, { y: 50, opacity: 0 });

  //         gsap.to(textRef.current.children, {
  //           y: 0,
  //           opacity: 1,
  //           duration: 0.8,
  //           ease: "power3.out",
  //           stagger: 0.2,
  //         });
  //       },
  //       onLeaveBack: () => {
  //         // Optional: reset when scrolling back up
  //         gsap.set(textRef.current.children, { y: 50, opacity: 0 });
  //       },
  //     });
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);

  useGSAP(() => {
    const q = gsap.utils.selector(textRef);

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 70%",
      onEnter: () => {
        // Animate in
        gsap.fromTo(
          q("span, h1"),
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.2 }
        );
      },
      onLeaveBack: () => {
        // Reset on scroll back
        gsap.set(q("span, h1"), { y: 50, opacity: 0 });
      },
    });
  }, []);
  return (
    <section className="home-third-section" ref={sectionRef}>
      <div className="home-third-content">
        <div className="home-third-content-left" ref={textRef}>
          <span>Name's</span>
          <span>Who</span>
          <span>Describe</span>
          <span>Our Potential</span>
          <h1>Name's Who Describe Our Potential</h1>
        </div>

        <div className="home-third-content-right">
          <div className="image-focus-wrapper">
            <img
              key={index}
              src={images[index]}
              alt="focus animation"
              className="focus-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
