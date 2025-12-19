// "use client";
// import React from "react";
// import "./homesix.css";

// export default function HomeSix() {
//   return (
//     <>
//       <h2 className="home-six-section-h2">Knowledge Center</h2>
//       <section className="home-six-section">
//         <div className="home-six-first-container">
//           <div className="home-six-first-container1">
//             <p>
//               Adclan Media – The Marketing Agency <br /> You Were Looking For in Delhi
//               NCR
//             </p>
//             <img src="/v1.jpg" />
//           </div>
//           <div className="home-six-first-container2">
//             <div className="home-six-first-container21">
//               <p>
//                 Adclan Onboard Shweta Tiwari as Brand Ambassador for Kidsmate
//               </p>
//               <img src="https://adclan.in/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-23-at-4.20.17-PM-600x600.jpeg" />
//             </div>
//             <div className="home-six-first-container22">
//               <p>
//                 Adclan Media’s Triumph with Ace Hanei:Masterclass in Campaign
//               </p>
//               <img src="https://adclan.in/wp-content/uploads/2024/10/Untitled-2-600x600.png" />
//             </div>
//           </div>
//         </div>
//         <div className="home-six-second-container">
//           <div className="home-six-second-container1">
//             <p>
//                 Adclan Media Organizes Galaxy Group Interview
//               </p>
//             <img src="https://adclan.in/wp-content/uploads/2024/10/sdfaa-600x600.jpg" />
//           </div>
//           <div className="home-six-second-container1">
//             <p>
//                 Adclan Media – The Marketing Agency You Were Looking For in
//                 Delhi NCR
//               </p>
//             <img src="https://adclan.in/wp-content/uploads/2025/04/square-banner.png" />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import React, { useRef } from "react";
import "./homesix.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HomeSix() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(sectionRef);

      gsap.fromTo(
        q("img"), // ✅ scoped selector
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <>
      <h2 className="home-six-section-h2">Knowledge Center</h2>

      <section className="home-six-section" ref={sectionRef}>
        <div className="home-six-first-container">
          <div className="home-six-first-container1">
            <p>
              Adclan Media – The Marketing Agency <br />
              You Were Looking For in Delhi NCR
            </p>
            <img src="/v1.jpg" alt="" />
          </div>

          <div className="home-six-first-container2">
            <div className="home-six-first-container21">
              <p>
                Adclan Onboard Shweta Tiwari as Brand Ambassador for Kidsmate
              </p>
              <img src="https://adclan.in/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-23-at-4.20.17-PM-600x600.jpeg" alt="" />
            </div>

            <div className="home-six-first-container22">
              <p>
                Adclan Media’s Triumph with Ace Hanei: Masterclass in Campaign
              </p>
              <img src="https://adclan.in/wp-content/uploads/2024/10/Untitled-2-600x600.png" alt="" />
            </div>
          </div>
        </div>

        <div className="home-six-second-container">
          <div className="home-six-second-container1">
            <p>Adclan Media Organizes <br /> Galaxy Group Interview</p>
            <img src="https://adclan.in/wp-content/uploads/2024/10/sdfaa-600x600.jpg" alt="" />
          </div>

          <div className="home-six-second-container1">
            <p>
              Adclan Media – The Marketing Agency You Were Looking For in Delhi
              NCR
            </p>
            <img src="https://adclan.in/wp-content/uploads/2025/04/square-banner.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
