"use client";

import React, { useRef } from "react";
import "./homesix.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HomeSix() {
  const sixsectionRef = useRef(null);

  useGSAP(
    () => {
      const images = sixsectionRef.current.querySelectorAll("img");

      let loadedCount = 0;

      const onImageLoad = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          ScrollTrigger.refresh();
        }
      };

      images.forEach((img) => {
        if (img.complete) {
          onImageLoad();
        } else {
          img.addEventListener("load", onImageLoad);
        }
      });

      gsap.from(images, {
        scale: 0.85,
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sixsectionRef.current,
          start: "top 75%",
          once: true, // ✅ prevents re-trigger chaos
        },
      });

      return () => {
        images.forEach((img) => {
          img.removeEventListener("load", onImageLoad);
        });
      };
    },
    { scope: sixsectionRef }
  );

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
