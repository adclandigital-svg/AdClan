"use client";

import React, { useRef, useEffect } from "react";
import "./homesix.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeSix() {
  const sixsectionRef = useRef(null);

  useEffect(() => {
    const section = sixsectionRef.current;
    let timeoutId = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Cancel removal if scrolling back quickly
          if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
          }

          section.classList.add("animate");
        } else {
          // Delay removal
          section.classList.remove("animate");
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <h2 className="home-six-section-h2">Knowledge Center</h2>

      <section className="home-six-section" ref={sixsectionRef}>
        <div className="home-six-first-container">
          <div className="home-six-first-container1">
            <p>
              Adclan Media – The Marketing Agency <br />
              You Were Looking For in Delhi NCR
            </p>
            <img src="/v1.jpg" alt="" />
          </div>

          <div className="home-six-first-container2">
            <div className="home-six-first-container21">
              <p>
                Adclan Onboard Shweta Tiwari as Brand Ambassador for Kidsmate
              </p>
              <img
                src="https://adclan.in/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-23-at-4.20.17-PM-600x600.jpeg"
                alt=""
              />
            </div>

            <div className="home-six-first-container22">
              <p>
                Adclan Media’s Triumph with Ace Hanei: Masterclass in Campaign
              </p>
              <img
                src="https://adclan.in/wp-content/uploads/2024/10/Untitled-2-600x600.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="home-six-second-container">
          <div className="home-six-second-container1">
            <p>
              Adclan Media Organizes <br /> Galaxy Group Interview
            </p>
            <img
              src="https://adclan.in/wp-content/uploads/2024/10/sdfaa-600x600.jpg"
              alt=""
            />
          </div>

          <div className="home-six-second-container1">
            <p>
              Adclan Media – The Marketing Agency You Were Looking For in Delhi
              NCR
            </p>
            <img
              src="https://adclan.in/wp-content/uploads/2025/04/square-banner.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
