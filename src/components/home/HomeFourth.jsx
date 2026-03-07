// "use client";

// import React, { useRef, useEffect, useState } from "react";
// import "./HomeFourth.css";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// export default function HomeFourth() {
//   const sectionRefFour = useRef(null);
//   const textReffour = useRef(null);
//   const mediaRef1 = useRef(null);
//   const mediaRef2 = useRef(null);

//   const media1 = [
//     { type: "image", src: "/v1.jpg" },
//     { type: "video", src: "/v1.mp4" },
//     { type: "image", src: "/v2.jpg" },
//     { type: "video", src: "/v2.mp4" },
//     { type: "image", src: "/v3.jpg" },
//     { type: "image", src: "/v4.jpg" },
//     { type: "video", src: "/v3.mp4" },
//     { type: "image", src: "/v5.jpg" },
//   ];

//   const media2 = [
//     { type: "image", src: "/v6.jpg" },
//     { type: "video", src: "/v4.mp4" },
//     { type: "image", src: "/v7.jpg" },
//     { type: "video", src: "/v10.mp4" },
//     { type: "image", src: "/v8.jpg" },
//     { type: "image", src: "/v9.jpg" },
//   ];

//   const [index1, setIndex1] = useState(0);
//   const [index2, setIndex2] = useState(0);

//   /* ================= GSAP ================= */
//   useGSAP(
//     () => {
//       const mm = gsap.matchMedia();

//       mm.add("(min-width: 1200px)", () => {
//         // GSAP OWNS transforms (no CSS translate)
//         const tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: sectionRefFour.current,
//             start: "top 10%",
//             end: "bottom -80%",
//             scrub: 1,
//             pin: true,
//             // markers: true,
//           },
//         });

//         tl.from(textReffour.current, {
//           xPercent: -100,
//           yPercent: -50,
//         });
//         tl.from(mediaRef1.current, { opacity: 0, yPercent: -200 }, "<");
//         tl.from(mediaRef2.current, { opacity: 0, yPercent: 200 }, "<");

//         return () => tl.kill();
//       });

//       return () => mm.revert();
//     },
//     { scope: sectionRefFour }
//   );

//   /* ================= MEDIA ROTATION ================= */
//   useEffect(() => {
//     if (media1[index1].type === "image") {
//       const t = setTimeout(
//         () => setIndex1((i) => (i + 1) % media1.length),
//         2000
//       );
//       return () => clearTimeout(t);
//     }
//   }, [index1]);

//   useEffect(() => {
//     if (media2[index2].type === "image") {
//       const t = setTimeout(
//         () => setIndex2((i) => (i + 1) % media2.length),
//         2000
//       );
//       return () => clearTimeout(t);
//     }
//   }, [index2]);

//   return (
//     <div className="home-fouth-section-outer" ref={sectionRefFour}>
//       <div className="home-fouth-section"  >
//         <div className="home-fouth-section-div" ref={textReffour}>
//           {["Works", "Who", "Describe", "Our Potential"].map((t, i) => (
//             <span key={i}>{t}</span>
//           ))}
//         </div>

//         <div className="home-fouth-media1" ref={mediaRef1}>
//           {media1[index1].type === "image" ? (
//             <img src={media1[index1].src} alt="" />
//           ) : (
//             <video
//               src={media1[index1].src}
//               autoPlay
//               muted
//               playsInline
//               onEnded={() => setIndex1((i) => (i + 1) % media1.length)}
//             />
//           )}
//         </div>

//         <div className="home-fouth-media2" ref={mediaRef2}>
//           {media2[index2].type === "image" ? (
//             <img src={media2[index2].src} alt="" />
//           ) : (
//             <video
//               src={media2[index2].src}
//               autoPlay
//               muted
//               playsInline
//               onEnded={() => setIndex2((i) => (i + 1) % media2.length)}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

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
  //  { type: "image", src: "/home/creatives/1.webp" },
  //  { type: "image", src: "/home/creatives/2.webp" },
  //  { type: "image", src: "/home/creatives/3.webp" },
  //  { type: "image", src: "/home/creatives/4.webp" },
  //  { type: "video", src: "/home/creatives/5.mp4" },
  //  { type: "image", src: "/home/creatives/6.jpg" },
  //  { type: "image", src: "/home/creatives/7.jpg" },
  //  { type: "image", src: "/home/creatives/8.jpeg" },
  //  { type: "image", src: "/home/creatives/10.jpg" },
    { type: "video", src: "/home/22.mp4" },
    { type: "video", src: "/home/23.mp4" },
    { type: "video", src: "/home/24.mp4" },
  ];

  const media2 = [
    // { type: "image", src: "/home/creatives/11.webp" },
    // { type: "image", src: "/home/creatives/12.jpg" },
    // { type: "image", src: "/home/creatives/13.jpg" },
  
    { type: "video", src: "/home/25.mp4" },
    { type: "video", src: "/home/26.mp4" },
    { type: "video", src: "/home/27.mp4" },
    // { type: "image", src: "/home/creatives/15.jpg" },
    // { type: "image", src: "/home/creatives/16.jpeg" },
    // { type: "image", src: "/home/creatives/17.jpeg" },
    // { type: "image", src: "/home/creatives/18.webp" },
    // { type: "image", src: "/home/creatives/19.webp" },
    // { type: "image", src: "/home/creatives/20.webp" },
    // { type: "image", src: "/home/creatives/21.webp" },
  ];

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [visible, setVisible] = useState(false);

  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);

  /* ================= PRELOAD IMAGES ================= */
  useEffect(() => {
    [...media1, ...media2]
      .filter((m) => m.type === "image")
      .forEach((m) => {
        const img = new Image();
        img.src = m.src;
      });
  }, []);

  /* ================= GSAP ================= */
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1200px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRefFour.current,
            start: "top 10%",
            end: "bottom -80%",
            scrub: 1,
            pin: true,
          },
        });

        tl.from(textReffour.current, { xPercent: -100, yPercent: -50 });
        tl.from(mediaRef1.current, { opacity: 0, yPercent: -200 }, "<");
        tl.from(mediaRef2.current, { opacity: 0, yPercent: 200 }, "<");

        return () => tl.kill();
      });

      return () => mm.revert();
    },
    { scope: sectionRefFour },
  );

  /* ================= VISIBILITY ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.35 },
    );

    observer.observe(sectionRefFour.current);
    return () => observer.disconnect();
  }, []);

  /* ================= IMAGE FADE HELPERS ================= */
  const fadeSwap = (imgEl, newSrc) => {
    if (!imgEl) return;
    gsap.to(imgEl, {
      opacity: 0,
      duration: 0.25,
      onComplete: () => {
        imgEl.src = newSrc;
        gsap.to(imgEl, { opacity: 1, duration: 0.35 });
      },
    });
  };

  /* ================= MEDIA ROTATION ================= */
  useEffect(() => {
    if (!visible) return;
    const current = media1[index1];

    if (current.type === "image") {
      const t = setTimeout(() => {
        const next = (index1 + 1) % media1.length;
        fadeSwap(imgRef1.current, media1[next].src);
        setIndex1(next);
      }, 2200);
      return () => clearTimeout(t);
    }
  }, [index1, visible]);

  useEffect(() => {
    if (!visible) return;
    const current = media2[index2];

    if (current.type === "image") {
      const t = setTimeout(() => {
        const next = (index2 + 1) % media2.length;
        fadeSwap(imgRef2.current, media2[next].src);
        setIndex2(next);
      }, 2200);
      return () => clearTimeout(t);
    }
  }, [index2, visible]);

  return (
    <div className="home-fouth-section-outer" ref={sectionRefFour}>
      <div className="home-fouth-section">
        <div className="home-fouth-section-div" ref={textReffour}>
          {["Works", "Who", "Describe", "Our Potential"].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>

        <div className="home-fouth-media1" ref={mediaRef1}>
          {media1[index1].type === "image" ? (
            <img ref={imgRef1} src={media1[index1].src} alt=""/>
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
            <img ref={imgRef2} src={media2[index2].src} alt=""  />
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
