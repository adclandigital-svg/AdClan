"use client";
import React, { useRef, useEffect, useState } from "react";
import "./HomeFourth.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HomeFourth() {
  const sectionRef = useRef(null);
  const spansRef = useRef([]);
  const textRef = useRef(null);
  const mediaRef1 = useRef(null);
  const mediaRef2 = useRef(null);
  const media1 = [
    { type: "image", src: "/v1.jpg" },
    { type: "video", src: "/v1.mp4" },
    { type: "image", src: "/v2.jpg" },
    { type: "video", src: "/v2.mp4" },
    { type: "image", src: "/v3.jpg" },
    { type: "image", src: "/v4.jpg" },
    { type: "video", src: "/v3.mp4" },
    { type: "image", src: "/v5.jpg" },
  ];

  const media2 = [
    { type: "image", src: "/v6.jpg" },
    { type: "video", src: "/v4.mp4" },
    { type: "image", src: "/v7.jpg" },
    { type: "video", src: "/v10.mp4" },
    { type: "image", src: "/v8.jpg" },
    { type: "image", src: "/v9.jpg" },
  ];

  const addToRefs = (el) => {
    if (el && !spansRef.current.includes(el)) spansRef.current.push(el);
  };

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      /* ================= DESKTOP (≥1200px) ================= */
      mm.add("(min-width: 1200px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 10%",
            end: "+=100%",
            scrub: 1,
            pin: true,
            // markers: true, // remove in production
          },
        });

        tl.from(textRef.current, {
          left: "50%",
          right: "50%",
          transform: "translate(-50%, -50%)",
        })
          .from(mediaRef1.current, { y: "-300%" }, "<")
          .from(mediaRef2.current, { y: "300%" }, "<");

        // cleanup ONLY this timeline
        return () => tl.kill();
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  // MEDIA 1 LOGIC
  useEffect(() => {
    const current = media1[index1];

    if (current.type === "image") {
      const timer = setTimeout(() => {
        setIndex1((prev) => (prev + 1) % media1.length);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [index1]);

  // MEDIA 2 LOGIC
  useEffect(() => {
    const current = media2[index2];

    if (current.type === "image") {
      const timer = setTimeout(() => {
        setIndex2((prev) => (prev + 1) % media2.length);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [index2]);

  return (
    <div className="home-fouth-section-outer" ref={sectionRef}>
      <section className="home-fouth-section">
        <div className="home-fouth-section-div" ref={textRef}>
          {["Works", "Who", "Describe", "Our Potential"].map((text, i) => (
            <span key={i} ref={addToRefs}>
              {text}
            </span>
          ))}
        </div>
        <div className="home-fouth-media1" ref={mediaRef1}>
          {media1[index1].type === "image" ? (
            <img src={media1[index1].src} alt="" />
          ) : (
            <video
              ref={videoRef1}
              src={media1[index1].src}
              autoPlay
              muted
              playsInline
              onEnded={() => setIndex1((prev) => (prev + 1) % media1.length)}
            />
          )}
        </div>
        <div className="home-fouth-media2" ref={mediaRef2}>
          {media2[index2].type === "image" ? (
            <img src={media2[index2].src} alt="" />
          ) : (
            <video
              ref={videoRef2}
              src={media2[index2].src}
              autoPlay
              muted
              playsInline
              onEnded={() => setIndex2((prev) => (prev + 1) % media2.length)}
            />
          )}
        </div>
      </section>
    </div>
  );
}
