"use client";

import React, { useRef } from "react";
import { useParams, notFound } from "next/navigation";
import { PROJECTS } from "@/data/projectData";
import "./project-detail.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetailPage() {
  const pageRef = useRef(null);
  const { slug } = useParams();

  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return notFound();

  useGSAP(
    () => {
      // Hero title animation
      gsap.from(".project-hero-title span", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1.1,
        ease: "power3.out",
      });

      // Project block scroll animation
      gsap.utils.toArray(".project-block").forEach((block) => {
        gsap.from(block, {
          y: 60,
          opacity: 0,
          ease: "power2.out",
          duration: 1,
          scrollTrigger: {
            trigger: block,
            start: "top 80%",
          },
        });
      });
      gsap.utils.toArray(".gallery-slider").forEach((slider) => {
        const totalWidth = slider.scrollWidth;
        gsap.to(slider, {
          x: `-${totalWidth}px`,
          ease: "linear",
          duration: 30,
          repeat: -1,
        });
      });
    },
    { scope: pageRef }
  );

  return (
    <main className="project-detail-page" ref={pageRef}>
      {/* HERO SECTION */}
      <section className="project-hero">
         <h1 className="project-hero-title">
          {/* {project.title.split(" ").map((word, i) => (
            <span key={i}>{word}</span>
          ))} */}
          {project.title}
        </h1>
        <p className="project-intro">{project.intro}</p>
        <div className="project-meta-info">
          <span>{project.category}</span>
          <span>{project.year}</span>
          <span>{project.client}</span>
        </div>
        {project.sections
          .filter((s) => s.type === "hero")
          .map((hero, i) =>
            hero.mediaType === "image" ? (
              <div className="hero-media" key={i}>
                <img src={hero.src} alt={project.title} />
              </div>
            ) : (
              <div className="hero-media video" key={i}>
                <video src={hero.src} autoPlay muted loop playsInline />
              </div>
            )
          )}
       
      </section>

      {/* CONTENT SECTIONS */}
      <section className="project-content">
        {project.sections.map((sec, i) => {
          // Large text
          if (sec.type === "textLarge") {
            return (
              <div className="project-block text-large" key={i}>
                <p>{sec.content}</p>
              </div>
            );
          }

          // Normal text
          if (sec.type === "text") {
            return (
              <div className="project-block text-normal" key={i}>
                <p>{sec.content}</p>
              </div>
            );
          }

          // Media Row
          if (sec.type === "mediaRow") {
            return (
              <div className="project-block media-row" key={i}>
                {sec.items.map((item, j) => {
                  const hasCaption = !!item.caption;
                  const isEven = j % 2 === 0;
                  return (
                    <div
                      className={`media-row-item ${hasCaption ? "split" : "full"} ${
                        hasCaption && isEven ? "reverse" : ""
                      }`}
                      key={j}
                    >
                      {hasCaption && (
                        <div className="media-text">
                          <p>{item.caption}</p>
                        </div>
                      )}
                      <div className="project-media">
                        {item.mediaType === "video" ? (
                          <video src={item.src} muted loop autoPlay playsInline />
                        ) : (
                          <img src={item.src} alt="" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          }

          // Gallery
          if (sec.type === "gallery") {
            return (
              <div className="project-block gallery-block" key={i}>
                <div className="gallery-slider">
                  {sec.items.map((item, j) => (
                    <div className="project-media" key={j}>
                      {item.mediaType === "video" ? (
                        <video src={item.src} muted loop autoPlay playsInline />
                      ) : (
                        <img src={item.src} alt="" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          return null;
        })}
      </section>
    </main>
  );
}
