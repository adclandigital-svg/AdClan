"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./loadingscreen.css";

export default function LoadingScreen({ onComplete }) {
  const containerRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const textRef = useRef(null);
  const exitTl = useRef(null);
  const contextRef = useRef(null);

  const [ready, setReady] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component only renders on client to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Initialize animations after component mounts
  useEffect(() => {
    if (!isMounted || typeof window === "undefined") return;
    if (!videoWrapperRef?.current) return;

    try {
      const video = videoWrapperRef?.current?.querySelector("video");
      if (!video) return;

      // Create GSAP context for proper cleanup
      const ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        const handleVideoEnd = () => {
          const textChildren = textRef?.current?.children;
          if (!textChildren) return;

          mm.add("(min-width: 1024px)", () => {
            const tl = gsap.timeline({
              defaults: { ease: "power3.out" },
              onComplete: () => setReady(true),
            });

            tl.to(videoWrapperRef?.current, {
              x: "-60%",
              duration: 1,
              ease: "power4.inOut",
            });

            tl.fromTo(
              textChildren,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.9,
                stagger: 0.25,
              },
              "-=0.3",
            );
          });

          mm.add("(max-width: 1023px)", () => {
            const tl = gsap.timeline({
              defaults: { ease: "power3.out" },
              onComplete: () => setReady(true),
            });

            tl.to(videoWrapperRef?.current, {
              y: "-40%",
              duration: 0.8,
              ease: "power4.inOut",
            });

            tl.fromTo(
              textChildren,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.2,
              },
              "-=0.3",
            );
          });
        };

        video.addEventListener("ended", handleVideoEnd);

        return () => {
          video.removeEventListener("ended", handleVideoEnd);
          mm.revert();
        };
      }, containerRef);

      contextRef.current = ctx;

      return () => {
        if (contextRef.current) {
          contextRef.current.revert();
        }
      };
    } catch (error) {
      console.error("LoadingScreen animation error:", error);
    }
  }, [isMounted]);

  // Exit animation handler
  const handleEnterClick = () => {
    if (!ready || exitTl.current) return;

  try {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      exitTl.current = gsap.timeline({
        defaults: { ease: "power4.inOut" },
        onComplete: () => {
          setIsVisible(false);
          onComplete?.();
          if (exitTl.current) {
            exitTl.current.kill();
            exitTl.current = null;
          }
        },
      });

      exitTl.current.to([videoWrapperRef.current, textRef.current], {
        x: (i) => (i === 0 ? "-500%" : "500%"),
        duration: 1,
      });

      exitTl.current.to(containerRef.current, {
        autoAlpha: 0,
        duration: 0.5,
      });
    });

    mm.add("(max-width: 1023px)", () => {
      exitTl.current = gsap.timeline({
        defaults: { ease: "power4.inOut" },
        onComplete: () => {
          setIsVisible(false);
          onComplete?.();
          if (exitTl.current) {
            exitTl.current.kill();
            exitTl.current = null;
          }
        },
      });

      exitTl.current.to([videoWrapperRef.current, textRef.current], {
        y: (i) => (i === 0 ? "-200%" : "200%"),
        duration: 0.8,
      });

      exitTl.current.to(containerRef.current, {
        autoAlpha: 0,
        duration: 0.4,
      });
    });
  } catch (error) {
    console.error("Exit animation error:", error);
  }
  };

  // Render hidden on server to avoid hydration mismatch
  if (!isMounted) {
    return (
      <section
        className="loader-container-section"
        style={{ visibility: "hidden" }}
      >
        <div className="loader-container">
          <div className="video-wrapper">
            <video src="/amiate logo 3.mp4" autoPlay muted playsInline />
          </div>
        </div>
        <div className="loader-text">
          <span>Step Into The Clan</span>
          <span>Of Communication Integrated</span>
          <span>Integrated Marketing Agency</span>
          <button className="loader-text-button">Enter</button>
        </div>
      </section>
    );
  }

  return (
    <section
      className="loader-container-section"
      ref={containerRef}
      style={{ display: isVisible ? "block" : "none" }}
    >
      <div className="loader-container">
        <div className="video-wrapper" ref={videoWrapperRef}>
          <video src="/amiate logo 3.mp4" autoPlay muted playsInline />
        </div>
      </div>

      <div className="loader-text" ref={textRef}>
        <span>Step Into The Clan</span>
        <span>Of Communication Integrated</span>
        <span>Integrated Marketing Agency</span>

        <button
          className={`loader-text-button ${ready ? "active" : ""}`}
          onClick={handleEnterClick}
          disabled={!ready}
        >
          Enter
        </button>
      </div>
    </section>
  );
}
