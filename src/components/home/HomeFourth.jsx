"use client";

import React, { useRef, useEffect, useState } from "react";
import "./HomeFourth.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HomeFourth() {
  const sectionRefFour = useRef(null);
  const textReffour = useRef(null);
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

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);

  /* ================= GSAP ================= */
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1200px)", () => {
        // GSAP OWNS transforms (no CSS translate)
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRefFour.current,
            start: "top 0%",
            end: "+=200%",
            scrub: 1,
            pin: true,
            markers: true,
          },
        });

        tl.from(textReffour.current, {
          xPercent: -50,
          yPercent: -50,
        });
        tl.from(mediaRef1.current, { opacity: 0, yPercent: -200 }, "<");
        tl.from(mediaRef2.current, { opacity: 0, yPercent: 200 }, "<");

        return () => tl.kill();
      });

      return () => mm.revert();
    },
    { scope: sectionRefFour }
  );

  /* ================= MEDIA ROTATION ================= */
  useEffect(() => {
    if (media1[index1].type === "image") {
      const t = setTimeout(
        () => setIndex1((i) => (i + 1) % media1.length),
        2000
      );
      return () => clearTimeout(t);
    }
  }, [index1]);

  useEffect(() => {
    if (media2[index2].type === "image") {
      const t = setTimeout(
        () => setIndex2((i) => (i + 1) % media2.length),
        2000
      );
      return () => clearTimeout(t);
    }
  }, [index2]);

  return (
    <div className="home-fouth-section-outer" ref={sectionRefFour}>
      <div className="home-fouth-section" >
        <div className="home-fouth-section-div" ref={textReffour}>
          {["Works", "Who", "Describe", "Our Potential"].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>

        <div className="home-fouth-media1" ref={mediaRef1}>
          {media1[index1].type === "image" ? (
            <img src={media1[index1].src} alt="" />
          ) : (
            <video
              src={media1[index1].src}
              autoPlay
              muted
              playsInline
              onEnded={() => setIndex1((i) => (i + 1) % media1.length)}
            />
          )}
        </div>

        <div className="home-fouth-media2" ref={mediaRef2}>
          {media2[index2].type === "image" ? (
            <img src={media2[index2].src} alt="" />
          ) : (
            <video
              src={media2[index2].src}
              autoPlay
              muted
              playsInline
              onEnded={() => setIndex2((i) => (i + 1) % media2.length)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
