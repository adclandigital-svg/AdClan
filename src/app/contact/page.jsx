"use client";
import React, { useRef } from "react";
import "./contact.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const pageRef = useRef(null);

  const heroRef = useRef([]);
  const leftRef = useRef(null);
  const formRef = useRef(null);

  useGSAP(
    () => {
      /* HERO TEXT */
      gsap.from(heroRef.current, {
        y: 120,
        skewY: 6,
        opacity: 0,
        stagger: 0.12,
        duration: 1.2,
        ease: "power4.out",
      });

      /* LEFT INFO */
      gsap.from(leftRef.current.children, {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 75%",
        },
      });

      /* FORM */
      gsap.from(formRef.current.children, {
        y: 30,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: pageRef }
  );

  return (
    <main className="contact-page" ref={pageRef}>
      {/* HERO */}
      <section className="contact-hero">
        <h1 className="hero-title">
          <span ref={(el) => (heroRef.current[0] = el)}>Let’s</span>
          <span ref={(el) => (heroRef.current[1] = el)}>Create</span>
          <span ref={(el) => (heroRef.current[2] = el)}>Something</span>
          <span ref={(el) => (heroRef.current[3] = el)}>Remarkable</span>
        </h1>

        <p className="hero-sub">
          We partner with ambitious brands to build meaningful experiences
          through strategy, creativity, and digital innovation.
        </p>

        <div className="scroll-indicator">↓</div>
        <div className="contact-hero-video">
          <video
            src="/contact/phone.mp4" // change path if needed
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </section>

      {/* SPLIT SECTION */}
      <section className="contact-split">
        {/* LEFT */}
        <div className="contact-left" ref={leftRef}>
          <div className="contact-item">
            <span>Email</span>
            <p>info@adclan.in</p>
          </div>

          <div className="contact-item">
            <span>Phone</span>
            <p>
              +91-9891505451 <br />
              011-49573333
            </p>
          </div>

          <div className="contact-item">
            <span>Studio</span>
            <p>
              D-9, Second Floor, Pushpa Bhawan <br />
              Alaknanda Commercial Complex <br />
              New Delhi – 110019
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <form className="contact-form" ref={formRef}>
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Email address" required />
            <input type="text" placeholder="Company / Brand" />
            <textarea placeholder="Tell us about your project" required />
            <button type="submit">Start the conversation →</button>
          </form>
        </div>
      </section>

      {/* MAP */}
      <section className="contact-map">
        <iframe
          src="https://www.google.com/maps?q=Pushpa%20Bhawan%20Alaknanda%20New%20Delhi&output=embed"
          loading="lazy"
        />
      </section>
    </main>
  );
}
