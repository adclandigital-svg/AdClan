"use client";

import React, { useRef } from "react";
import "./homefifth.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HomeFifth() {
  const fifthSectionRef = useRef(null);
  const videoWrapperRef2 = useRef(null);
  const videoRef2 = useRef(null);

  useGSAP(
    () => {
      const video = videoRef2.current;

      // Timeline animation
      gsap.timeline({
        scrollTrigger: {
          trigger: fifthSectionRef.current,
          start: "top center",
          end: "top 10%",
          scrub: true,
          // markers: true,
        },
      }).to(videoWrapperRef2.current, {
        scale: 1,
        borderRadius: "0px",
        ease: "none",
      });

      // Video play / pause
      // ScrollTrigger.create({
      //   trigger: fifthSectionRef.current,
      //   start: "top center",
      //   end: "bottom center",
      //   onEnter: () => video.play(),
      //   onEnterBack: () => video.play(),
      //   onLeave: () => video.pause(),
      //   onLeaveBack: () => video.pause(),
      // });
    },
    { scope: fifthSectionRef } // 🔥 THIS IS THE KEY
  );

  return (
    <section className="home-fifth-section" ref={fifthSectionRef}>
      <div className="home-fifth-section-video" ref={videoWrapperRef2}>
        <video
          ref={videoRef2}
          src="https://coopbrand.co/wp-content/videos/alto-desktop.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>
    </section>
  );
}
