// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import "./loadingscreen.css";

// export default function LoadingScreen({ onComplete }) {
//   const videoWrapperRef = useRef(null);
//   const textRef = useRef(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (!videoWrapperRef.current) return;

//     const video = videoWrapperRef.current.querySelector("video");
//     if (!video) return;

//     const ctx = gsap.context(() => {
//       const mm = gsap.matchMedia();

//       const handleVideoEnd = () => {
//         // 🖥 DESKTOP
//         mm.add("(min-width: 1024px)", () => {
//           const tl = gsap.timeline({
//             defaults: { ease: "power3.out" },
//             onComplete: () => onComplete?.(),
//           });

//           tl.to(videoWrapperRef.current, {
//             x: "-60%",
//             duration: 1,
//             ease: "power4.inOut",
//           });

//           tl.fromTo(
//             textRef.current.children,
//             { opacity: 0, y: 30 },
//             {
//               opacity: 1,
//               y: 0,
//               duration: 0.9,
//               stagger: 0.25,
//             },
//             "-=0.3"
//           );

//           tl.to(
//             [videoWrapperRef.current, textRef.current],
//             {
//               x: (i) => (i === 0 ? "-500%" : "500%"),
//               duration: 1,
//               ease: "power4.inOut",
//             },
//             "slide"
//           );

//           tl.to(containerRef.current, {
//             autoAlpha: 0, // ✅ SAFE
//             duration: 0.5,
//           });
//         });

//         // 📱 MOBILE
//         mm.add("(max-width: 767px)", () => {
//           const tl = gsap.timeline({
//             defaults: { ease: "power3.out" },
//             onComplete: () => onComplete?.(),
//           });

//           tl.to(videoWrapperRef.current, {
//             y: "-50%",
//             duration: 0.8,
//             ease: "power4.inOut",
//           });

//           tl.fromTo(
//             textRef.current.children,
//             { opacity: 0, y: 30 },
//             {
//               opacity: 1,
//               y: 0,
//               duration: 0.7,
//               stagger: 0.2,
//             },
//             "-=0.3"
//           );

//           tl.to(
//             [videoWrapperRef.current, textRef.current],
//             {
//               y: (i) => (i === 0 ? "-200%" : "200%"),
//               duration: 0.8,
//               ease: "power4.inOut",
//             },
//             "slide"
//           );

//           tl.to(containerRef.current, {
//             autoAlpha: 0, // ✅ SAFE
//             duration: 0.5,
//           });
//         });
//       };

//       video.addEventListener("ended", handleVideoEnd);

//       return () => {
//         video.removeEventListener("ended", handleVideoEnd);
//         mm.revert();
//       };
//     }, containerRef);

//     return () => ctx.revert();
//   }, [onComplete]);

//   return (
//     <section className="loader-container-section" ref={containerRef}>
//       <div className="loader-container">
//         <div className="video-wrapper" ref={videoWrapperRef}>
//           <video src="/amiate logo 3.mp4" autoPlay muted playsInline />
//         </div>
//       </div>

//       <div className="loader-text" ref={textRef}>
//         <span>Step Into The Clan</span>
//         <span>Of Communication Integrated</span>
//         <span>Integrated Marketing Agency</span>
//         <button className="loader-text-button" onClick={handleEnterClick}>Enter</button>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./loadingscreen.css";

export default function LoadingScreen({ onComplete }) {
  const containerRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const textRef = useRef(null);
  const exitTl = useRef(null);

  const [ready, setReady] = useState(false); // enable Enter after intro

  useEffect(() => {
    if (!videoWrapperRef.current) return;

    const video = videoWrapperRef.current.querySelector("video");
    if (!video) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      const handleVideoEnd = () => {
        // 🖥 DESKTOP
        mm.add("(min-width: 1024px)", () => {
          const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            onComplete: () => setReady(true),
          });

          tl.to(videoWrapperRef.current, {
            x: "-60%",
            duration: 1,
            ease: "power4.inOut",
          });

          tl.fromTo(
            textRef.current.children,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.25,
            },
            "-=0.3"
          );
        });

        // 📱 MOBILE
        mm.add("(max-width: 1023px)", () => {
          const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            onComplete: () => setReady(true),
          });

          tl.to(videoWrapperRef.current, {
            y: "-40%",
            duration: 0.8,
            ease: "power4.inOut",
          });

          tl.fromTo(
            textRef.current.children,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.2,
            },
            "-=0.3"
          );
        });
      };

      video.addEventListener("ended", handleVideoEnd);

      return () => {
        video.removeEventListener("ended", handleVideoEnd);
        mm.revert();
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 👉 EXIT ANIMATION (ON BUTTON CLICK)
  const handleEnterClick = () => {
    if (!ready || exitTl.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      exitTl.current = gsap.timeline({
        defaults: { ease: "power4.inOut" },
        onComplete: () => onComplete?.(),
      });

      exitTl.current.to(
        [videoWrapperRef.current, textRef.current],
        {
          x: (i) => (i === 0 ? "-500%" : "500%"),
          duration: 1,
        }
      );

      exitTl.current.to(containerRef.current, {
        autoAlpha: 0,
        duration: 0.5,
      });
    });

    mm.add("(max-width: 1023px)", () => {
      exitTl.current = gsap.timeline({
        defaults: { ease: "power4.inOut" },
        onComplete: () => onComplete?.(),
      });

      exitTl.current.to(
        [videoWrapperRef.current, textRef.current],
        {
          y: (i) => (i === 0 ? "-200%" : "200%"),
          duration: 0.8,
        }
      );

      exitTl.current.to(containerRef.current, {
        autoAlpha: 0,
        duration: 0.4,
      });
    });
  };

  return (
    <section className="loader-container-section" ref={containerRef}>
      <div className="loader-container">
        <div className="video-wrapper" ref={videoWrapperRef}>
          <video
            src="/amiate logo 3.mp4"
            autoPlay
            muted
            playsInline
          />
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

