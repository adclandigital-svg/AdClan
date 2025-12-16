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
  const textEl = textRef.current;

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

    // Duplicate text for seamless loop
    const textContent = textEl.innerText;
    textEl.innerHTML = `${textContent} — ${textContent}`;

    const width = textEl.scrollWidth / 2; // width of one copy

    // Animate with GSAP
    gsap.fromTo(
      textEl,
      { x: 0 },
      {
        x: -width,
        duration: 50,  // adjust speed
        ease: "linear",
        repeat: -1,    // infinite
        // yoyo:true
      }
    );
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
