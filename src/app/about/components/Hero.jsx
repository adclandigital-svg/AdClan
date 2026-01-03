"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./AboutHero.css";

export default function AboutHero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const text = textRef.current;
    const container = containerRef.current;

    if (!text || !container) return;

    // Clone text for seamless loop
    const clone = text.cloneNode(true);
    container.appendChild(clone);

    const width = text.offsetWidth;

    gsap.set(container, { x: 0 });

    gsap.to(container, {
      x: -width,
      duration: 80,      // speed (lower = faster)
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <section className="about-hero">
      <div className="hero-mask">
        <div className="hero-scroll" ref={containerRef}>
          <p ref={textRef} className="hero-text">
            We are a team of passionate creatives, designers, and innovators,
            dedicated to crafting unique experiences that inspire and leave a
            lasting impact. Our mission is to blend creativity with purpose,
            turning ideas into memorable solutions. Excellence, innovation, and
            passion drive everything we do.
          </p>
        </div>
      </div>
    </section>
  );
}
