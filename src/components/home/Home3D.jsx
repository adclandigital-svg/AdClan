"use client";

import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  ToneMapping,
} from "@react-three/postprocessing";
import "./home3d.css";
import gsap from "gsap";

function Cyl() {
  const cyl = useRef(null);
  const tex = useTexture("/strip.png"); // put image in /public

  useFrame((state, delta) => {
    if (cyl.current) {
      cyl.current.rotation.y += delta;
    }
  });

  return (
    <group rotation={[0, 1.4, 0.35]}>
      <mesh ref={cyl}>
        <cylinderGeometry args={[1, 1, 1.2, 60, 60, true]} />
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export default function Home3D() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const textRef = useRef(null);
  const textAnimationRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 720px)");

    const handleChange = (e) => setIsSmallScreen(e.matches);

    // Initial check
    setIsSmallScreen(mediaQuery.matches);

    // Listen for changes
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const textEl = textRef.current;
    if (!textEl) return;

    // Store original content if not already duplicated
    const originalContent = textEl.getAttribute("data-original");
    let textContent;

    if (!originalContent) {
      textContent = textEl.innerText;
      textEl.setAttribute("data-original", textContent);
    } else {
      textContent = originalContent;
    }

    // Duplicate text for seamless loop
    textEl.innerHTML = `${textContent} — ${textContent}`;

    const width = textEl.scrollWidth / 2; // width of one copy

    // Kill previous animation if exists
    if (textAnimationRef.current) {
      textAnimationRef.current.kill();
    }

    // Animate with GSAP
    textAnimationRef.current = gsap.fromTo(
      textEl,
      { x: 0 },
      {
        x: -width,
        duration: 50,  // adjust speed
        ease: "linear",
        repeat: -1,    // infinite
      }
    );

    // Cleanup
    return () => {
      if (textAnimationRef.current) {
        textAnimationRef.current.kill();
      }
    };
  }, []);
  return (
    <>
      <section className="Home3D-section">
        <Canvas flat camera={{ fov: isSmallScreen ? 30 : 25 }}>
          <ambientLight intensity={3} />
          <OrbitControls />
          <Cyl />
          {/* <EffectComposer>
            <Bloom
              mipmapBlur
              intensity={2.0}
              luminanceThreshold={0}
              luminanceSmoothing={0}
            />
            <ToneMapping adaptive />
          </EffectComposer> */}
        </Canvas>
      </section>
      <div className="home3d-text-container">
        <h1 ref={textRef} className="home3d-text-heading">
          At Adclan, we craft bold digital experiences that blend creativity
          with strategy. From stunning visuals to seamless motion, we elevate
          your brand presence and engage your audience like never before. Let’s
          turn your ideas into motion-driven masterpieces.
        </h1>
      </div>
    </>
  );
}


// "use client";

// import React, { useRef } from "react";
// import "./HomeFourth.css";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// export default function HomeFourth() {
//   const sectionRef = useRef(null);
//   const headingRef = useRef(null);
//   const image1Ref = useRef(null);
//   const image2Ref = useRef(null);
//   const image3Ref = useRef(null);
//   const image4Ref = useRef(null);
//   const image5Ref = useRef(null);
//   const image6Ref = useRef(null);
//   const mainRef = useRef(null);

//   useGSAP(
//     () => {
//       const mm = gsap.matchMedia();

//       mm.add("(min-width: 1024px)", () => {
//         // 🔹 Timeline (paused – controlled manually)
//         const tl = gsap.timeline({ paused: true });
//         // tl.from(mainRef.current, { autoAlpha: 0, duration: 0.2 }); // ✅ Correct

//         tl.to(image1Ref.current, { x: "-120%", duration: 1 }, "image")
//           .to(image2Ref.current, { x: "120%", duration: 1 }, "image")
//           .to(
//             headingRef.current,
//             { scale: 0.6, opacity: 1, duration: 1 },
//             "image"
//           )
//           .from(image3Ref.current, { x: 100, opacity: 0, duration: 1 }, "four")
//           .from(image4Ref.current, { x: 100, opacity: 0, duration: 1 }, "four")
//           .from(image5Ref.current, { x: -100, opacity: 0, duration: 1 }, "four")
//           .from(
//             image6Ref.current,
//             { x: -100, opacity: 0, duration: 1 },
//             "four"
//           );

//         // 🔹 ScrollTrigger controller
//         ScrollTrigger.create({
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=120%",
//           scrub: 1.5,
//           pin: true,
//           anticipatePin: 1,
//           invalidateOnRefresh: true,

//           onUpdate: (self) => {
//             const p = self.progress;

//             if (p <= 0.5) {
//               // ▶ forward (0 → 50%)
//               tl.progress(p * 2);
//             } else {
//               // ◀ reverse (50% → 100%)
//               tl.progress(1 - (p - 0.5) * 2);
//             }
//           },
//         });
//       });

//       return () => mm.revert();
//     },
//     { scope: sectionRef }
//   );

//   return (
//     <section className="home-fouth-section" ref={sectionRef}>
//       <div className="home-fouth-section-div" ref={mainRef}>
//         <h1 className="home-fouth-section-div-h1" ref={headingRef}>
//           Vikram Mills
//         </h1>

//         <div className="home-fouth-section-div-image1" ref={image1Ref}>
//           <img className="home-fouth-image" src="/v1.jpg" alt="1" />
//         </div>

//         <div className="home-fouth-section-div-image2" ref={image2Ref}>
//           <img className="home-fouth-image" src="/v2.jpg" alt="22" />
//         </div>
//         <div className="home-fouth-section-div-image3" ref={image3Ref}>
//           <img className="home-fouth-image" src="/v3.jpg" alt="22" />
//         </div>
//         <div className="home-fouth-section-div-image4" ref={image4Ref}>
//           <img className="home-fouth-image" src="/v4.jpg" alt="22" />
//         </div>
//         <div className="home-fouth-section-div-image5" ref={image5Ref}>
//           <img className="home-fouth-image" src="/v5.jpg" alt="22" />
//         </div>
//         <div className="home-fouth-section-div-image6" ref={image6Ref}>
//           <img className="home-fouth-image" src="/v6.jpg" alt="22" />
//         </div>
//       </div>
//     </section>
//   );
// }


/* .home-fouth-section{
    height: auto;
    width: 100%;
    background-color: white;
}
.home-fouth-section-div{
     height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

}
.home-fouth-section-div-h1{
    font-size: 70px;
    color: rgba(0, 0, 0, 0.308);
    font-weight: bold;
    opacity: 0;
}
.home-fouth-section-div-image1{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    height: 250px;
    width: 200px;
    background-color: rgb(83, 77, 77);
    border-radius: 15px;
    box-shadow: 0px 5px 5px  rgba(3, 3, 3, 0.3);
     overflow: hidden;
}
.home-fouth-section-div-image2{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    height: 250px;
    width: 200px;
    background-color: rgb(160, 122, 122);
    border-radius: 15px;
    box-shadow: 0px 5px 5px  rgba(3, 3, 3, 0.3);
    overflow: hidden;
}

.home-fouth-section-div-image3{
    position: absolute;
    top: 10%;
    left: 15%;
    height: 250px;
    width: 200px;
    background-color: rgb(160, 122, 122);
    border-radius: 15px;
    box-shadow: 0px 5px 5px  rgba(3, 3, 3, 0.3);
    overflow: hidden;
}
.home-fouth-section-div-image4{
    position: absolute;
    bottom: 10%;
    left: 15%;
    height: 250px;
    width: 200px;
    background-color: rgb(160, 122, 122);
    border-radius: 15px;
    box-shadow: 0px 5px 5px  rgba(3, 3, 3, 0.3);
    overflow: hidden;
}
.home-fouth-section-div-image5{
    position: absolute;
    top: 10%;
    right: 15%;
    height: 250px;
    width: 200px;
    background-color: rgb(160, 122, 122);
    border-radius: 15px;
    box-shadow: 0px 5px 5px  rgba(3, 3, 3, 0.3);
    overflow: hidden;
}
.home-fouth-section-div-image6{
    position: absolute;
    bottom: 10%;
    right: 15%;
    height: 250px;
    width: 200px;
    background-color: rgb(160, 122, 122);
    border-radius: 15px;
    box-shadow: 0px 5px 5px  rgba(3, 3, 3, 0.3);
    overflow: hidden;
}
.home-fouth-image{
    height: 100%;
    width: 100%;
    object-fit: contain;
}
 */