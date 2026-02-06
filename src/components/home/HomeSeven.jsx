// "use client";

// import React, { useRef } from "react";
// import "./HomeSeven.css";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// export default function HomeSeven() {
//   const sectionRefseven = useRef(null);
//   const imageRef = useRef(null);
//   const rightRef = useRef(null);

//   useGSAP(
//     () => {
//       /* IMAGE FLOAT */
//       gsap.to(imageRef.current, {
//         y: -50,
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRefseven.current,
//           start: "top 10%",
//           end: "top -20%",
//           // markers:true,
//           scrub: 2,
//         },
//       });

//       /* RIGHT CONTENT */
//       gsap.from(
//         gsap.utils.toArray(
//           ".right-main-heading, .right-desc, .right-sub-heading, .stat-row"
//         ),
//         {
//           opacity: 0,
//           y: 40,
//           stagger: 0.12,
//           duration: 0.8,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: rightRef.current,
//             start: "top 75%",
//             // toggleActions: "play reverse play reverse",
//           },
//         }
//       );
//     },
//     {
//       scope: sectionRefseven, // 🔥 VERY IMPORTANT
//     }
//   );

//   return (
//     <section className="home-seven-outer">
//       <section className="home-seven" ref={sectionRefseven}>
//         <h2 className="home-seven-heading">
//           Building Brands <br /> That Create Impact
//         </h2>

//         <div className="home-seven-content">
//           <div className="home-seven-left">
//             <img
//               ref={imageRef}
//               src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
//               alt="Creative Team"
//             />
//           </div>

//           <div className="home-seven-right" ref={rightRef}>
//             <h4 className="right-sub-heading">Our Achievements</h4>

//             <div className="home-seven-stats">
//               <div className="stat-row">
//                 <span>150+</span>
//                 <p>Projects Delivered</p>
//               </div>
//               <div className="stat-row">
//                 <span>12+</span>
//                 <p>Active Clients</p>
//               </div>
//               <div className="stat-row">
//                 <span>10+</span>
//                 <p>Years of Experience</p>
//               </div>
//               <div className="stat-row">
//                 <span>15+</span>
//                 <p>Collaborations</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// }

"use client";

import React, { useRef, useEffect } from "react";
import "./HomeSeven.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeSeven() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const numbers = sectionRef.current.querySelectorAll(".hex-card strong");

    numbers.forEach((el) => {
      const raw = el.innerText;
      const endValue = parseFloat(raw.replace(/[^0-9.]/g, ""));
      const suffix = raw.replace(/[0-9.]/g, "");

      const obj = { val: 0 };

      gsap.to(obj, {
        val: endValue,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
        onUpdate: () => {
          el.innerText = Math.floor(obj.val) + suffix;
        },
      });
    });
  }, []);

  return (
    <section className="home-seven-outer">
      <section className="home-seven" ref={sectionRef}>
        <div className="home-seven-content">
          {/* LEFT IMAGE */}
          <div className="home-seven-left">
            <img
              className="impact-image"
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
              alt="Team Collaboration"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="home-seven-right">
            <h4 className="impact-sub-heading">Our Global Impact</h4>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              perspiciatis cum explicabo sit dignissimos sequi consectetur,
              voluptas in voluptate.
            </span>

            <div className="hex-grid">
              <div className="hex-card blue">
                <strong>500+</strong>
                <p>Digital Transformations</p>
              </div>
              <div className="hex-card green">
                <strong>100+</strong>
                <p>AI Solutions Deployed</p>
              </div>
              <div className="hex-card blue">
                <strong>12+</strong>
                <p>Active Clients</p>
              </div>
              <div className="hex-card orange">
                <strong>20+</strong>
                <p>Enterprise Partners</p>
              </div>
              <div className="hex-card blue">
                <strong>50M+</strong>
                <p>Users Engaged</p>
              </div>
              <div className="hex-card green">
                <strong>10+</strong>
                <p>Global Innovation Hubs</p>
              </div>
              <div className="hex-card orange">
                <strong>20+</strong>
                <p>Enterprise Clients</p>
              </div>
              <div className="hex-card blue">
                <strong>10+</strong>
                <p>Enterprise Regions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
