"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./text.css";

gsap.registerPlugin(ScrollTrigger);

export default function AboutProcess() {
  const wrapRef = useRef(null);

  useGSAP(
    () => {
      const slides = gsap.utils.toArray(
        wrapRef.current.querySelectorAll(".slide-wrap")
      );

      slides.forEach((slide) => {
        const moveY = slide.scrollHeight / 2;

        gsap.to(slide, {
          y: -moveY,
          ease: "none",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 60%",
            end: "bottom 30%",
            scrub: 1,
            // markers: true, // remove later
          },
        });
      });
    },
    { scope: wrapRef }
  );

  return (
    <section className="about-process">
      <div className="process-wrap" ref={wrapRef}>
        <div className="process-wrap-div1 process-item">
          <div className="slide-wrap">
            <span>Think</span>
            <span>Think</span>
            <span>Think</span>
            <span>Think</span>
          </div>
        </div>
        <div className="process-wrap-phus">+</div>

        <div className="process-wrap-div2 process-item">
          <div className="slide-wrap">
            <span>Create</span>
            <span>Create</span>
            <span>Create</span>
            <span>Create</span>
          </div>
        </div>
        <div className="process-wrap-phus">+</div>

        <div className="process-wrap-div3 process-item">
          <div className="slide-wrap">
            <span>Deliver</span>
            <span>Deliver</span>
            <span>Deliver</span>
            <span>Deliver</span>
          </div>
        </div>
      </div>
    </section>
  );
}
