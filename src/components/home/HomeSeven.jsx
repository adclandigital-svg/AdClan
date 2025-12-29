// "use client";

// import React, { useRef } from "react";
// import "./HomeSeven.css";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// export default function HomeSeven() {
//   const sectionRef = useRef(null);
//   const imageRef = useRef(null);
//   const rightRef = useRef(null);

//   useGSAP(() => {
//     /* IMAGE SCROLL FLOAT */
//     gsap.from(imageRef.current, {
//       y: 100,
//       ease: "none",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 30%",
//         end: "top 0%",
//         scrub: 2,
//       },
//     });

//     /* RIGHT CONTENT – VIEWPORT ANIMATION */
//     gsap.from(
//       rightRef.current.querySelectorAll(
//         ".right-main-heading, .right-desc, .right-sub-heading, .stat-row"
//       ),
//       {
//         opacity: 0,
//         y: 40,
//         stagger: 0.12,
//         duration: 0.8,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: rightRef.current,
//           start: "top 75%",
//           toggleActions: "play reverse play reverse", // ✅ runs every visit
//         },
//       }
//     );
//   }, []);

//   return (
//     <section className="home-seven" ref={sectionRef}>
//       {/* Left aligned heading */}
//       <h2 className="home-seven-heading">
//         Building Brands <br />
//         That Create Impact
//       </h2>

//       <div className="home-seven-content">
//         {/* Left Image */}
//         <div className="home-seven-left">
//           <img
//             ref={imageRef}
//             src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
//             alt="Creative Team"
//           />
//         </div>

//         {/* Right Content */}
//         <div className="home-seven-right" ref={rightRef}>
//           <h3 className="right-main-heading">
//             We craft meaningful brand experiences through design, storytelling,
//             and digital innovation that help businesses grow and connect with
//             their audience.
//           </h3>

//           <p className="right-desc">
//             Adclan Media Solutions is a full-service creative and media agency
//             helping brands build strong identities and meaningful connections
//             with their audiences across digital and offline platforms.
//           </p>

//           <p className="right-desc">
//             We specialize in integrated marketing solutions including branding,
//             advertising, digital campaigns, content creation, media planning,
//             and performance-driven strategies tailored to each client’s goals.
//           </p>

//           <p className="right-desc">
//             With a results-focused approach and a passion for creativity, Adclan
//             Media Solutions partners with businesses to drive visibility,
//             engagement, and sustainable growth in competitive markets.
//           </p>

//           <p className="right-desc">
//             Backed by a team of strategists, designers, and media experts, we
//             collaborate closely with our clients to deliver ideas that are not
//             only creative but also aligned with business objectives and
//             measurable outcomes.
//           </p>

//           <h4 className="right-sub-heading">Our Achievements</h4>

//           {/* Stats */}
//           <div className="home-seven-stats">
//             <div className="stat-row">
//               <span>150+</span>
//               <p>Projects Delivered</p>
//             </div>

//             <div className="stat-row">
//               <span>12+</span>
//               <p>Active Clients</p>
//             </div>

//             <div className="stat-row">
//               <span>10+</span>
//               <p>Years of Experience</p>
//             </div>

//             <div className="stat-row">
//               <span>15+</span>
//               <p>Industry Collaborations</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import React, { useRef } from "react";
import "./HomeSeven.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HomeSeven() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const rightRef = useRef(null);

  useGSAP(
    () => {
      /* IMAGE FLOAT */
      gsap.from(imageRef.current, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 30%",
          end: "top 0%",
          scrub: 2,
        },
      });

      /* RIGHT CONTENT */
      gsap.from(
        gsap.utils.toArray(
          ".right-main-heading, .right-desc, .right-sub-heading, .stat-row"
        ),
        {
          opacity: 0,
          y: 40,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 75%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    },
    {
      scope: sectionRef, // 🔥 VERY IMPORTANT
    }
  );

  return (
    <section className="home-seven" ref={sectionRef}>
      <h2 className="home-seven-heading">
        Building Brands <br /> That Create Impact
      </h2>

      <div className="home-seven-content">
        <div className="home-seven-left">
          <img
            ref={imageRef}
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Creative Team"
          />
        </div>

        <div className="home-seven-right" ref={rightRef}>
          <h3 className="right-main-heading">
            We craft meaningful brand experiences through design, storytelling,
            and digital innovation.
          </h3>

          <p className="right-desc">
            Adclan Media Solutions is a full-service creative agency.
          </p>

          <p className="right-desc">
            We specialize in branding, advertising, and digital campaigns.
          </p>

          <p className="right-desc">
            Results-focused, creativity-driven growth strategies.
          </p>

          <h4 className="right-sub-heading">Our Achievements</h4>

          <div className="home-seven-stats">
            <div className="stat-row">
              <span>150+</span>
              <p>Projects Delivered</p>
            </div>
            <div className="stat-row">
              <span>12+</span>
              <p>Active Clients</p>
            </div>
            <div className="stat-row">
              <span>10+</span>
              <p>Years of Experience</p>
            </div>
            <div className="stat-row">
              <span>15+</span>
              <p>Industry Collaborations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
