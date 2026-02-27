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
      // Hero title animation (now inside overlay)
      gsap.from(".project-hero-title span", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1.1,
        ease: "power3.out",
      });

      // Fade in breadcrumbs and meta
      gsap.from(".hero-text-breadcrums, .project-meta-info", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.5,
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

      // Gallery slider infinite scroll
      gsap.utils.toArray(".gallery-slider").forEach((slider) => {
        if (!slider || !slider.children || slider.children.length === 0) return;

        const items = slider.children;
        const originalItemCount = items.length;

        // Clone items
        const clonedItems = [];
        Array.from(items).forEach((item) => {
          clonedItems.push(item.cloneNode(true));
        });
        clonedItems.forEach((clone) => slider.appendChild(clone));

        const totalWidth = slider.scrollWidth / 2;

        gsap.set(slider, { x: 0 });

        // Auto speed calculation
        const pixelsPerSecond = 100; // adjust speed
        const duration = totalWidth / pixelsPerSecond;

        gsap.to(slider, {
          x: -totalWidth,
          duration: duration,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: (x) => `${parseFloat(x) % totalWidth}px`,
          },
        });
      });
    },
    { scope: pageRef }
  );

  return (
    <main className="project-detail-page" ref={pageRef}>
      {/* HERO SECTION with overlay */}
      <section className="project-hero">
        {project.sections
          ?.filter((s) => s.type === "hero")
          ?.map((hero, i) =>
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

        {/* Overlay text */}
        <div className="hero-overlay">
          <p className="hero-text-breadcrums">
            [ <span>Home</span> &gt; <span>Projects</span> &gt;{" "}
            <span>{project.title}</span> ]
          </p>
          <h1 className="project-hero-title">
            {/* Split title into spans if needed, but for now just display */}
            {project.title.split("  ").map((word, idx) => (
              <span key={idx}>{word} </span>
            ))}
          </h1>
          <p className="project-intro">{project.intro}</p>
          <div className="project-meta-info">
            <span>[ {project.category} ]</span>
            <span>[ {project.year} ]</span>
            <span>[ {project.client} ]</span>
          </div>
        </div>
      </section>
      {/* mediaGallery block moved into the project-content map below */}
      
      

      {/* CONTENT SECTIONS (unchanged) */}
      <section className="project-content">
        {project.sections.map((sec, i) => {
          if (sec.type === "textLarge") {
            return (
              <div className="project-block text-large" key={i}>
                <p>{sec.content}</p>
              </div>
            );
          }
          if (sec.type === "text") {
            return (
              <div className="project-block text-normal" key={i}>
                <p>{sec.content}</p>
              </div>
            );
          }
          if (sec.type === "mediaGallery") {
            const items = sec.items ?? [];
            if (!items.length) return null;

            return (
              <div className="project-block mixed-gallery-block" key={i}>
                <div className="mixed-gallery-grid">
                  {items.map((item, j) => {
                    const src = item?.src ?? item?.url ?? "";
                    const orientation = item?.orientation ?? "landscape";
                    const mediaType =
                      item?.mediaType ?? (/\.(mp4|webm|ogg)$/i.test(src) ? "video" : /\.(mp3|wav|m4a|ogg)$/i.test(src) ? "audio" : "image");

                    return (
                      <div key={j} className={`mixed-media-item ${orientation}`}>
                        {mediaType === "image" && src && (
                          <img src={src} alt={item?.alt ?? ""} />
                        )}

                        {mediaType === "video" && src && (
                          <video src={src} autoPlay loop muted playsInline preload="metadata" />
                        )}

                        {mediaType === "audio" && src && (
                          <div className="audio-card">
                            <p>{item?.title ?? "Audio Experience"}</p>
                            <audio controls src={src} />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
          if (sec.type === "slider") {
            return (
              <div className="project-block gallery-block" key={i}>
                <div className="gallery-slider">
                  {sec.items.map((item, j) => (
                    <div className="project-media" key={j}>
                      {item.mediaType === "video" ? (
                        <video
                          src={item.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          onLoadedMetadata={(e) => {
                            e.currentTarget.volume = 0;
                          }}
                        />
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