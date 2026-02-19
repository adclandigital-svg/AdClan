"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./services.css";

import {
  FaBriefcase,
  FaPaintBrush,
  FaBolt,
  FaHandsHelping,
  FaChartLine,
  FaLightbulb,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const route = useRouter();

  const heroRef = useRef(null);
  const rowsRef = useRef([]);
  const whyRef = useRef(null);

  useGSAP(
    () => {
      /* HERO FADE */
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
      });

      /* SERVICES ROWS */
      rowsRef.current.forEach((row, i) => {
        gsap.from(row, {
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 150,
          duration: 1,
          delay: i * 0.1,
          ease: "power3.out",
        });
      });

      /* WHY US CARDS */
      const whyCards = gsap.utils.toArray(".why-card");

      if (whyCards.length) {
        gsap.from(whyCards, {
          scrollTrigger: {
            trigger: whyRef.current,
            start: "top 75%",
          },
          opacity: 0,
          y: 120,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        });
      }
    },
    { scope: heroRef } // keeps animations scoped + clean
  );

  const services = [
    {
      id: "01",
      title: "Branding & Identity",
      desc: "We craft strong brand identities that connect culture and commerce through strategy, design, and storytelling.",
      src: "/service/branding.mp4",
      mediaType: "video",
    },
    {
      id: "02",
      title: "Creative & Marketing",
      desc: "Creative-led marketing campaigns designed to build awareness, engagement, and long-term brand value.",
      src: "/service/creative.mp4",
      mediaType: "video",
      reverse: true,
    },
    {
      id: "03",
      title: "Digital Marketing",
      desc: "Performance-driven digital marketing across social, search, and content to scale brands online.",
      src: "/service/digital marketing.mp4",
      mediaType: "video",
    },
    {
      id: "04",
      title: "BTL Activities",
      desc: "On-ground activations, events, and experiential marketing that create real-world brand impact and engagement.",
      src: "/service/btl.mp4",
      mediaType: "video",
      reverse: true,
    },
    {
      id: "05",
      title: "Production & Films",
      desc: "High-end film and content production that elevates brands through powerful visual storytelling.",
      src: "/service/video.mp4",
      mediaType: "video",
    },
    {
      id: "06",
      title: "Web Development",
      desc: "Modern, fast, and scalable websites built with performance, usability, and aesthetics in mind.",
      src: "/service/web.mp4",
      mediaType: "video",
      reverse: true,
    },
  ];

  return (
    <main className="services-page">
      {/* HERO */}
      <section className="services-hero" ref={heroRef}>
        <div className="services-hero-feather">
          <h2>What we do</h2>
        </div>

        <video
          className="services-hero-video"
          autoPlay
          muted
          loop
          playsInline
          src="/services/banner.mp4"
        />
      </section>

      {/* SERVICES */}
      <section className="services-list">
        {services.map((service, i) => (
          <article
            key={service.id}
            ref={(el) => (rowsRef.current[i] = el)}
            className={`service-row ${service.reverse ? "reverse" : ""}`}
          >
            <div className="service-image">
              {service.mediaType == "video" ? (
                <video src={service.src} autoPlay muted loop playsInline preload="none"/>
              ) : (
                <img src={service.src} alt={service.title} loading="lazy"/>
              )}
            </div>

            <div className="service-content">
              <span className="service-id">{service.id}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button onClick={() => route.push("/projects")}>
                VIEW PROJECTS →
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* WHY US */}
      <section className="why-us" ref={whyRef}>
        <h2>DESIGNED TO STAND OUT</h2>

        <div className="why-grid">
          <div className="why-card">
            <span className="why-icon">
              <FaBriefcase />
            </span>
            <h4>Professional Process</h4>
            <p>Structured workflows and reliable delivery.</p>
          </div>

          <div className="why-card">
            <span className="why-icon">
              <FaPaintBrush />
            </span>
            <h4>Creative Excellence</h4>
            <p>Design driven by strategy, not trends.</p>
          </div>

          <div className="why-card">
            <span className="why-icon">
              <FaBolt />
            </span>
            <h4>Fast Execution</h4>
            <p>Agile teams with quick turnaround.</p>
          </div>

          <div className="why-card">
            <span className="why-icon">
              <FaChartLine />
            </span>
            <h4>Results Driven</h4>
            <p>Focused on measurable business growth.</p>
          </div>

          <div className="why-card">
            <span className="why-icon">
              <FaLightbulb />
            </span>
            <h4>Strategic Thinking</h4>
            <p>Ideas backed by insight and data.</p>
          </div>

          <div className="why-card">
            <span className="why-icon">
              <FaHandsHelping />
            </span>
            <h4>Dedicated Partnership</h4>
            <p>We work as an extension of your team.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
