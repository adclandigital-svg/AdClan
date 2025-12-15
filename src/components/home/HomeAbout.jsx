"use client";
import React from "react";
import "./homeabout.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HomeAbout() {
  const circleRef = useRef(null);
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (circleRef.current && sectionRef.current && textRef.current) {
      // clear previous ScrollTriggers if any
      ScrollTrigger.getAll().forEach((t) => t.kill());
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 3%",
          end: "top -100%",
          scrub: 1,
          pin: true,
          // markers: true,
        },
      });

      // First half: animate circle expanding and cards sliding in
      // animate circle from scale 0 and hidden to full-screen and visible
      tl.fromTo(
        circleRef.current,
        { scale: 0 },
        { scale: 1, ease: "none" }
      );

      // fade out text slightly after circle begins expanding
      tl.to(
        textRef.current,
        { autoAlpha: 0, y: -20, duration: 0.4, ease: "none" },
        0.2
      );

      // animate cards inside the circle one-by-one (slide in)
      const cards = circleRef.current.querySelectorAll(
        ".homeabout-circle-container-text"
      );
      if (cards && cards.length) {
        tl.fromTo(
          cards,
          { y: 30, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            stagger: 0.12,
            duration: 0.6,
            ease: "power2.out",
          },
          ">+0.05"
        );
      }

      // Second half: reverse all animations (fade out cards, shrink circle, restore text)
      if (cards && cards.length) {
        tl.to(
          cards,
          { y: -30, autoAlpha: 0, stagger: 0.08, duration: 0.6, ease: "power2.in" },
          ">+0.1"
        );
      }

      // shrink circle and hide it
      tl.to(
        circleRef.current,
        { scale: 0, autoAlpha: 0, ease: "none" },
        "<"
      );

      // bring text back
      tl.to(
        textRef.current,
        { autoAlpha: 1, y: 0, duration: 0.4, ease: "none" },
        "<"
      );

      // cleanup on unmount
      return () => {
        if (tl) tl.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }
  }, []);

  return (
    <section className="homeabout-section">
      <div className="homeabout-container" ref={sectionRef}>
        <p className="homeabout-text" ref={textRef}>
          We’re a modern <br />
          creative agency
        </p>
        <div className="homeabout-circle-container" ref={circleRef}>
          <div className="homeabout-circle-container-text">
            <img
              src="https://adclan.in/wp-content/uploads/elementor/thumbs/strategy-qtlkzcfsxgf5at76pgcp6qehsvh3dqdy0vpkcs49y4.png"
              alt="1"
            />
            <p>Brand Strategty</p>
          </div>
          <div className="homeabout-circle-container-text">
            <img
              src="https://adclan.in/wp-content/uploads/elementor/thumbs/creativity-qtln06xil8552vdvbxxtfcmj5wf5x9l21fu9as3vq4.png"
              alt="2"
            />
            <p>CREATIVE STRATEGY</p>
          </div>
          <div className="homeabout-circle-container-text">
            <img
              src="https://adclan.in/wp-content/uploads/2024/09/icon-3.svg"
              alt="3"
            />
            <p>MEDIA BUYING</p>
          </div>
          <div className="homeabout-circle-container-text">
            <img
              src="https://adclan.in/wp-content/uploads/elementor/thumbs/bullhorn-qtnaedauz15923kavoj8taetenmaeszz0floh7t7q4.png"
              alt="4"
            />
            <p>Digital Marketing</p>
          </div>
          <div className="homeabout-circle-container-text">
            <img
              src="http://adclan.in/wp-content/uploads/elementor/thumbs/ott-1-qtun62msnbbv648dfb9gthw3s12cc479tzi6cx253w.png"
              alt="5"
            />
            <p>OTT Marketing</p>
          </div>
          <div className="homeabout-circle-container-text">
            <img
              src="https://adclan.in/wp-content/uploads/elementor/thumbs/videography-qtlnfzlvfzrm6yfu39r3tv4ek0k8a5anvmj0n6op5o.png"
              alt="6"
            />
            <p>Production</p>
          </div>
          <div className="homeabout-circle-container-text">
            <img
              src="https://adclan.in/wp-content/uploads/elementor/thumbs/lightbox-qtm29vxpcamspex8i1ug34xtex1od0u1a6blt72ixo.png"
              alt="7"
            />
            <p>BTL Activities</p>
          </div>
          <div className="homeabout-circle-container-text">
            <img
              src="https://adclan.in/wp-content/uploads/elementor/thumbs/adversting-qtln7g8nd62uqguay2w3oioob0n7d4efpd78ppcfoc.png"
              alt="8"
            />
            <p>MEDIA STRATEGY</p>
          </div>
        </div>
      </div>
    </section>
  );
}
