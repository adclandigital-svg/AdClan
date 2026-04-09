"use client";

import React, { useRef } from "react";
import { useParams, notFound } from "next/navigation";
import { PROJECTS } from "@/data/projectData";
import "./project-detail.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetailPage() {
  const pageRef = useRef(null);
  const { slug } = useParams();
  const overlayRef = useRef(null);

  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return notFound();

  const handleMouseMove = (e) => {
    const el = overlayRef.current;
    if (!el) return;

    // 🚫 Skip if hovering overlay
    if (el.matches(":hover")) return;

    el.style.animation = "none";
    el.offsetHeight;

    el.style.animation = "invisiblityAnimation 0.8s ease forwards 5s";
  };
  const handleMouseEnter = () => {
    const el = overlayRef.current;
    if (!el) return;

    el.style.animationPlayState = "paused";
  };

  const handleMouseLeave = () => {
    const el = overlayRef.current;
    if (!el) return;

    el.style.animationPlayState = "running";
  };

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
        const items = Array.from(slider.children);
        if (!items.length) return;

        // duplicate items
        items.forEach((item) => {
          const clone = item.cloneNode(true);
          slider.appendChild(clone);
        });

        // constant speed
        const pixelsPerSecond = 150;

        const totalWidth = slider.scrollWidth / 2;
        const duration = totalWidth / pixelsPerSecond;

        gsap.to(slider, {
          x: -totalWidth,
          ease: "none",
          duration: duration,
          repeat: -1,
          yoyo: true,
        });
      });
    },
    { scope: pageRef },
  );

  return (
    <main className="project-detail-page" ref={pageRef}>
      {/* HERO SECTION with overlay */}
      <section className="project-hero" onMouseMove={handleMouseMove}>
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
            ),
          )}

        {/* Overlay text */}
        <div
          className={project?.black?"hero-overlay1": "hero-overlay"}
          ref={overlayRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <p className="hero-text-breadcrums">
            [ <span>Home</span> &gt; <span>Work Study</span> &gt;{" "}
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
                    const orientation = item?.orientation ?? "landscape";
                    // determine type based on explicit mediaType or file extension of the item's src
                    const srcValue = item?.src ?? "";
                    const mediaType =
                      item?.mediaType ??
                      (/\.(mp4|webm|ogg)$/i.test(srcValue)
                        ? "video"
                        : /\.(mp3|wav|m4a|ogg)$/i.test(srcValue)
                          ? "audio"
                          : "image");

                    return (
                      <div
                        key={j}
                        className={`mixed-media-item ${orientation}`}
                      >
                        {mediaType === "image" && srcValue && (
                          <img src={srcValue} alt={item?.alt ?? ""} />
                        )}

                        {mediaType === "video" && srcValue && (
                          <video
                            src={srcValue}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                          />
                        )}

                        {mediaType === "audio" && srcValue && (
                          <div className="audio-card">
                            <p>{item?.title ?? "Audio Experience"}</p>
                            <audio controls src={srcValue} />
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
                <Swiper
                  modules={[Autoplay]}
                  slidesPerView="auto"
                  spaceBetween={20}
                  loop={true}
                  speed={5000} // controls movement speed
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                  }}
                  allowTouchMove={false}
                >
                  {sec.items.map((item, j) => (
                    <SwiperSlide key={j} style={{ width: "420px" }}>
                      <div className="project-media">
                        {item.mediaType === "video" ? (
                          <video
                            src={item.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                          />
                        ) : (
                          <img src={item.src} alt="" />
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            );
          }
          return null;
        })}
      </section>
    </main>
  );
}
