// "use client";

// import React, { useRef, useEffect } from "react";
// import "./Homesecond.css";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function HomeSecond() {
//   const sectionRef = useRef(null);
//   const headingRef = useRef(null);
//   const cardsRef = useRef([]);
// useEffect(() => {
//   if (!sectionRef.current || !headingRef.current) return;

//   const cards = cardsRef.current;
//   const rotations = [-15, -8, -3, 3, 8, 15];

//   const tl1 = gsap.timeline({
//     scrollTrigger: {
//       trigger: sectionRef.current,
//       start: "top top",
//       end: "+=140%",
//       scrub: true,
//       pin: true,
//       // markers: true,
//     },
//   });

//   /* Heading scale */
//   tl1.to(headingRef.current, {
//     scale: 0.5,
//     ease: "none",
//   });

//   tl1.add("cardsMove");

//   /* Move cards to center */
//   cards.forEach((card) => {
//     tl1.to(
//       card,
//       {
//         left: "50%",
//         top: "50%",
//         xPercent: -50,
//         yPercent: -50,
//         duration: 4,
//         ease: "none",
//       },
//       "cardsMove"
//     );
//   });

//   tl1.add("cardsRotate");

//   /* Rotate cards */
//   cards.forEach((card, i) => {
//     tl1.to(
//       card,
//       {
//         rotation: rotations[i],
//         ease: "none",
//       },
//       "cardsRotate"
//     );
//   });

//   return () => {
//     // 🔥 IMPORTANT CLEANUP
//     tl1.scrollTrigger?.kill(); // kill pin safely
//     // tl1.kill();               // kill timeline
//   };
// }, []);

//   return (
//     <div className="home-second-section-main" ref={sectionRef}>
//       <div className="home-second-section">
//         <h1 className="home-second-section-heading" ref={headingRef}>
//           Our <br /> Clan
//         </h1>

//         {[
//           "Radio",
//           "Print",
//           "Event",
//           "Creative",
//           "Digital",
//           "Celebrity",
//         ].map((text, i) => (
//           <div
//             key={i}
//             className={`home-second-cards home-second-cards${i + 1}`}
//             ref={(el) => (cardsRef.current[i] = el)}
//           >
//             <p>{text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useRef } from "react";
import "./Homesecond.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HomeSecond() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const cards = [
    {
      text: "Radio",
      bg: "https://spacial.com/wp-content/uploads/2019/05/online-radio-advertising.jpg",
    },
    {
      text: "Print",
      bg: "https://www.collateral.co.in/upload/blogimage2/202002061122244269.jpg",
    },
    {
      text: "Event",
      bg: "https://www.shutterstock.com/image-vector/events-colorful-typography-banner-260nw-1356206768.jpg",
    },
    {
      text: "Creative",
      bg: "https://img.freepik.com/premium-photo/handdrawn-creativity-concept-with-doodles-white-background-featuring-pencil-lightbulb-books-gear-paper-plane_670147-105933.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      text: "Digital",
      bg: "https://sagartech.co.in/blogs/wp-content/uploads/2024/10/Digital-Marketing-Strategy-Feature-image-min.webp",
    },
    {
      text: "Celebrity",
      bg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2LQU887JJHF70ktU4F95QY50145ii3j0jPw&s",
    },
  ];

  useGSAP(
    () => {
      const cards = cardsRef.current;
      const rotations = [-15, -8, -3, 3, 8, 15];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 5%",
          end: "+=140%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          // markers: true,
        },
      });

      /* Heading scale */
      tl.to(headingRef.current, {
        scale: 0.5,
        ease: "none",
      });

      tl.add("cardsMove");

      /* Move cards to center */
      cards.forEach((card) => {
        tl.to(
          card,
          {
            left: "50%",
            top: "50%",
            xPercent: -50,
            yPercent: -50,
            duration: 4,
            ease: "none",
          },
          "cardsMove",
        );
      });

      tl.add("cardsRotate");

      /* Rotate cards */
      cards.forEach((card, i) => {
        tl.to(
          card,
          {
            rotation: rotations[i],
            ease: "none",
          },
          "cardsRotate",
        );
      });
    },
    {
      scope: sectionRef, // ✅ this replaces gsap.context()
      revertOnUpdate: true,
    },
  );

  return (
    <div className="home-second-section-main" ref={sectionRef}>
      <div className="home-second-section">
        <h1 className="home-second-section-heading" ref={headingRef}>
          Our <br /> Clan
        </h1>

        {cards.map((card, i) => (
          <div
            key={i}
            className={`home-second-cards home-second-cards${i + 1}`}
            ref={(el) => (cardsRef.current[i] = el)}
            style={{
              backgroundImage: `url(${card.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
