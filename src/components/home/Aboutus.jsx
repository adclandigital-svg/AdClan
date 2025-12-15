import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./about.css";

gsap.registerPlugin(ScrollTrigger);

export default function Aboutus() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const mainContaionerref = useRef(null);

  useEffect(() => {
    const totalFrames = 90;
    const startFrame = 4; // Start from frame 004
    const container = containerRef.current;
    const image = imageRef.current;

    // Eager load first frame (frame 004)
    const firstFrameNumber = String(startFrame).padStart(3, "0");
    const firstImg = new Image();
    firstImg.src = `/logo/ezgif-frame-${firstFrameNumber}.jpg`;

    // Lazy load all other frames
    const lazyLoadFrames = () => {
      for (let i = startFrame; i <= totalFrames; i++) {
        const frameNumber = String(i).padStart(3, "0");
        const img = new Image();
        img.src = `/logo/ezgif-frame-${frameNumber}.jpg`;
      }
    };

    // Lazy load after a short delay (after first paint)
    const lazyLoadTimer = setTimeout(lazyLoadFrames, 500);

    // Create scroll trigger animation with pin on section
    const scrollTrigger = ScrollTrigger.create({
      trigger: container,
      start: "top center",
      end: "bottom center",
      //   pin: true,
      pinSpacing: true,
      scrub: 1, // Disable scrub for smooth frame updates
      onUpdate: (self) => {
        // Calculate current frame based on scroll progress (0 to 1)
        const currentFrame = Math.round(
          self.progress * (totalFrames - startFrame)
        );
        const frameNumber = String(currentFrame + startFrame).padStart(3, "0");

        // Update the image source
        gsap.to(image, {
          backgroundImage: `url(/logo/ezgif-frame-${frameNumber}.jpg)`,
          duration: 0, // Instant change
          overwrite: "auto",
        });
      },
    });

    return () => {
      // Cleanup
      clearTimeout(lazyLoadTimer);
      if (scrollTrigger) {
        scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <section className="home-aboutus-section">
      <div className="home-aboutus-container-left" ref={containerRef}>
        <div
          className="frame-player"
          ref={imageRef}
          style={{
            width: "90%",
            height: "90%",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: "url(/logo/ezgif-frame-001.jpg)",
          }}
        />
      </div>
      <div className="home-aboutus-container-right">
          <p>
            ADCLAN is a modern creative agency focused on shaping meaningful
            brand experiences. We combine design, strategy, technology, and
            storytelling to help brands grow with clarity and confidence. <br />Our
            team bridges creativity with performance, ensuring every project is
            rooted in purpose and built for impact. Whether it’s branding,
            digital marketing, content, production, or media strategy, we craft
            solutions that connect with audiences and convert into results.
          </p>
      </div>
    </section>
  );
}
