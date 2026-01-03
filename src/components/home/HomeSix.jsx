"use client";

import React, { useRef, useEffect, useMemo } from "react";
import "./homesix.css";
import { blogs } from "@/data/blogs";
import { useRouter } from "next/navigation";


export default function HomeSix() {
  const sixsectionRef = useRef(null);
  const router=useRouter()

  useEffect(() => {
    const section = sixsectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const videos = section.querySelectorAll("video");

        if (entry.isIntersecting) {
          section.classList.add("animate");
          videos.forEach((v) => v.play());
        } else {
          section.classList.remove("animate");
          videos.forEach((v) => v.pause());
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <h2 className="home-six-section-h2">
        <span>Stories</span> Behind the Strategy
      </h2>

      <section className="home-six-section" ref={sixsectionRef}>
        <div className="home-six-first-container">
          <div className="home-six-first-container1" onClick={()=>router.push(`/blogs/${blogs?.[0]?.slug}`)}>
            <p>
              {blogs?.[0]?.title}
            </p>
            <video
              src={blogs?.[0].video}
              autoPlay
              muted
              loop
              playsInline
              preload="none" // 🔑 prevents loading until needed
              loading="lazy"
            />
          </div>

          <div className="home-six-first-container2" >
            <div className="home-six-first-container21" onClick={()=>router.push(`/blogs/${blogs?.[1]?.slug}`)}>
              <p>
                {blogs?.[1]?.title}
              </p>
              <video
                src="/22.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="none" // 🔑 prevents loading until needed
                loading="lazy"
              />
            </div>

            <div className="home-six-first-container22" onClick={()=>router.push(`/blogs/${blogs?.[2]?.slug}`)}>
              <p>
                 {blogs?.[2]?.title}
              </p>
              <video
                src="/Recording 2025-12-12 120853.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="none" // 🔑 prevents loading until needed
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="home-six-second-container">
          <div className="home-six-second-container1" onClick={()=>router.push(`/blogs/${blogs?.[3]?.slug}`)}>
            <p>
               {blogs?.[3]?.title}
            </p>
            <video
              src="/v10.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="none" // 🔑 prevents loading until needed
              loading="lazy"
            />
          </div>

          <div className="home-six-second-container1" onClick={()=>router.push(`/blogs/${blogs?.[4]?.slug}`)}>
            <p>
               {blogs?.[4]?.title}
            </p>
            <video
              src="/9559153-sd_960_506_25fps.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="none" // 🔑 prevents loading until needed
              loading="lazy"
            />
          </div>
        </div>
        <a href="/blogs" className="home-six-read-more">
          Read More →
        </a>
      </section>
    </>
  );
}
