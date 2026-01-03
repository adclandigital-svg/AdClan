"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutDefinition.css";

gsap.registerPlugin(ScrollTrigger);

export default function AboutDefinition() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          // markers:true
        },
      });

      gsap.from(imgRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 90%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section className="about-definition" ref={sectionRef}>
      <div className="definition-container">
        <div className="definition-image">
          <img
            ref={imgRef}
            src="https://plus.unsplash.com/premium_photo-1714674731657-05fcb6a0222a?q=80&w=1374&auto=format&fit=crop"
            alt="About company"
          />
        </div>

        <div className="definition-text" ref={textRef}>
          <p>
            Adclan Media Services Pvt. Ltd. is a creative brand consultancy and
            advertising agency headquartered in New Delhi, India. Founded in
            2018, Adclan specialises in delivering end-to-end marketing solutions
            tailored to help businesses build strong brand identities and
            achieve measurable growth.
          </p>

          <p>
            At its core, Adclan believes in listening deeply to client needs
            before crafting effective strategies. Their team of communication
            design and media professionals collaborate across branding, digital
            marketing, media buying, social media management, SEO, content
            creation, and advertising campaigns.
          </p>

          <p>
            Blending creativity, strategy, and analytics across traditional,
            digital, OTT, and performance marketing channels, Adclan delivers
            customised solutions that enhance visibility, engagement, and ROI
            for brands across India.
          </p>
        </div>
      </div>
    </section>
  );
}
