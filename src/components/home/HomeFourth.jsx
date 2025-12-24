// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import "./HomeFourth.css";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// export default function HomeFourth() {
//   const sectionRefFour = useRef(null);
//   const spansRef = useRef([]);
//   const textRef = useRef(null);
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

//   const addToRefs = (el) => {
//     if (el && !spansRef.current.includes(el)) spansRef.current.push(el);
//   };

//   useGSAP(
//     () => {
//       const mm = gsap.matchMedia();

//       /* ================= DESKTOP (≥1200px) ================= */
//       mm.add("(min-width: 1200px)", () => {
//         const tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: sectionRefFour.current,
//             start: "top 10%",
//             end: "+=100%",
//             scrub: 1,
//             pin: true,
//             // markers: true, // remove in production
//           },
//         });

//         tl.from(textRef.current, {
//           left: "50%",
//           right: "50%",
//           transform: "translate(-50%, -50%)",
//         })
//           .from(mediaRef1.current, { y: "-300%" }, "<")
//           .from(mediaRef2.current, { y: "300%" }, "<");

//         // cleanup ONLY this timeline
//         return () => tl.kill();
//       });

//       return () => mm.revert();
//     },
//     { scope: sectionRefFour }
//   );

//   const [index1, setIndex1] = useState(0);
//   const [index2, setIndex2] = useState(0);

//   const videoRef1 = useRef(null);
//   const videoRef2 = useRef(null);

//   // MEDIA 1 LOGIC
//   useEffect(() => {
//     const current = media1[index1];

//     if (current.type === "image") {
//       const timer = setTimeout(() => {
//         setIndex1((prev) => (prev + 1) % media1.length);
//       }, 2000);
//       return () => clearTimeout(timer);
//     }
//   }, [index1]);

//   // MEDIA 2 LOGIC
//   useEffect(() => {
//     const current = media2[index2];

//     if (current.type === "image") {
//       const timer = setTimeout(() => {
//         setIndex2((prev) => (prev + 1) % media2.length);
//       }, 2000);
//       return () => clearTimeout(timer);
//     }
//   }, [index2]);

//   return (
//     <div className="home-fouth-section-outer" ref={sectionRefFour}>
//       <section className="home-fouth-section">
//         <div className="home-fouth-section-div" ref={textRef}>
//           {["Works", "Who", "Describe", "Our Potential"].map((text, i) => (
//             <span key={i} ref={addToRefs}>
//               {text}
//             </span>
//           ))}
//         </div>
//         <div className="home-fouth-media1" ref={mediaRef1}>
//           {media1[index1].type === "image" ? (
//             <img src={media1[index1].src} alt="" />
//           ) : (
//             <video
//               ref={videoRef1}
//               src={media1[index1].src}
//               autoPlay
//               muted
//               playsInline
//               onEnded={() => setIndex1((prev) => (prev + 1) % media1.length)}
//             />
//           )}
//         </div>
//         <div className="home-fouth-media2" ref={mediaRef2}>
//           {media2[index2].type === "image" ? (
//             <img src={media2[index2].src} alt="" />
//           ) : (
//             <video
//               ref={videoRef2}
//               src={media2[index2].src}
//               autoPlay
//               muted
//               playsInline
//               onEnded={() => setIndex2((prev) => (prev + 1) % media2.length)}
//             />
//           )}
//         </div>
//       </section>
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
  // useGSAP(
  //   () => {
  //     const mm = gsap.matchMedia();

  //     mm.add("(min-width: 1200px)", () => {
  //       // GSAP OWNS transforms (no CSS translate)
  //       const tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: sectionRefFour.current,
  //           start: "top top",
  //           end: "+=200%",
  //           scrub: 1,
  //           pin: true,
  //           pinSpacing: true,
  //           anticipatePin: 1,
  //           invalidateOnRefresh: true,
  //           markers: true,
  //         },
  //       });

  //       tl.from(textReffour.current, {
  //         xPercent: -50,
  //         yPercent: -50,
  //         transform : "translate(-50%,-50%)",
  //       })
  //         .from(mediaRef1.current, { yPercent: -200 }, "<")
  //         .from(mediaRef2.current, { yPercent: 200 }, "<");

  //       return () => tl.kill();
  //     });

  //     return () => mm.revert();
  //   },
  //   { scope: sectionRefFour }
  // );

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
    <section className="home-fouth-section-outer" >
      <div className="home-fouth-section"ref={sectionRefFour}>
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
              onEnded={() =>
                setIndex1((i) => (i + 1) % media1.length)
              }
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
              onEnded={() =>
                setIndex2((i) => (i + 1) % media2.length)
              }
            />
          )}
        </div>
      </div>
    </section>
  );
}

