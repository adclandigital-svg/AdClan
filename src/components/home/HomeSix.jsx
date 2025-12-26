"use client";

import React, { useRef, useEffect, useMemo } from "react";
import "./homesix.css";

export default function HomeSix() {
  const sixsectionRef = useRef(null);

  // 🎥 Pool of videos
  const videoPool = useMemo(
    () => [
      "/11.mp4",
      "/22.mp4",
      "/v1.mp4",
      "/Recording 2025-12-12 120853.mp4",
      "/9559153-sd_960_506_25fps.mp4",
      "/11.mp4",
    ],
    []
  );

  // 🎲 Pick random videos (stable per render)
  const getRandomVideo = () =>
    videoPool[Math.floor(Math.random() * videoPool.length)];

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
          <div className="home-six-first-container1">
            <p>
              Adclan Media – The Marketing Agency <br />
              You Were Looking For in Delhi NCR
            </p>
            <video
              src="/11.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="none" // 🔑 prevents loading until needed
              loading="lazy"
            />
          </div>

          <div className="home-six-first-container2">
            <div className="home-six-first-container21">
              <p>
                Adclan Onboard Shweta Tiwari as <br />
                Brand Ambassador for Kidsmate
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

            <div className="home-six-first-container22">
              <p>
                Adclan Media’s Triumph with Ace <br /> Hanei: Masterclass in
                Campaign
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
          <div className="home-six-second-container1">
            <p>
              Adclan Media Organizes <br /> Galaxy Group Interview
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

          <div className="home-six-second-container1">
            <p>
              Adclan Media – The Marketing Agency You Were Looking For in Delhi
              NCR
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
        <a href="/case-studies" className="home-six-read-more">
          Read More →
        </a>
      </section>
    </>
  );
}
