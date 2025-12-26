"use client";
import React, { useRef } from "react";
import "./contact.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const pageRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".contact-hero h1, .contact-hero p", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".contact-info div", {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".contact-info",
          start: "top 80%",
        },
      });

      gsap.from(
        ".contact-form input, .contact-form textarea, .contact-form button",
        {
          y: 30,
          opacity: 0,
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".contact-form-section",
            start: "top 80%",
          },
        }
      );

      gsap.from(".contact-images img", {
        scale: 0.9,
        opacity: 0,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".contact-images",
          start: "top 85%",
        },
      });
    },
    { scope: pageRef }
  );

  return (
    <main className="contact-page" ref={pageRef}>
      {/* HERO */}
      <section className="contact-hero">
        <h1>Let’s Build Brands That Create Impact</h1>
        <p>
          Adclan Media Solutions is a full-service creative & media agency helping
          brands grow through strategy, storytelling, and performance-driven
          marketing across digital and offline platforms.
        </p>
      </section>

      {/* INFO */}
      <section className="contact-info">
        <div>
          <h4>Email</h4>
          <p>info@adclan.in</p>
        </div>

        <div>
          <h4>Phone</h4>
          <p>+91-9891505451, 011-49573333</p>
        </div>

        <div>
          <h4>Office</h4>
          <p>
            D-9, Second Floor, Pushpa Bhawan,  
            Alaknanda Commercial Complex,  
            New Delhi – 110019
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="contact-form-section">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Company / Brand" />
          <textarea placeholder="Tell us about your project" required />
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* MAP */}
      <section className="contact-map">
        <iframe
          src="https://www.google.com/maps?q=Pushpa%20Bhawan%20Alaknanda%20New%20Delhi&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* BRAND / CREATIVE IMAGES (UNSPLASH DEMO) */}
      <section className="contact-images">
        <img
          src="https://spacial.com/wp-content/uploads/2019/05/online-radio-advertising.jpg"
          alt="Creative agency"
        />
        <img
          src="https://www.collateral.co.in/upload/blogimage2/202002061122244269.jpg"
          alt="Brand strategy"
        />
        <img
          src="https://sagartech.co.in/blogs/wp-content/uploads/2024/10/Digital-Marketing-Strategy-Feature-image-min.webp"
          alt="Creative team"
        />
      </section>
    </main>
  );
}
