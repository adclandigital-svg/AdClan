import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./about.css";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Aboutus() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  // useGSAP(
  //   () => {
  //     const totalFrames = 90;
  //     const startFrame = 4;
  //     const container = containerRef.current;
  //     const image = imageRef.current;

  //     // Frame state object (GSAP animates this)
  //     const frame = { current: startFrame };

  //     // Preload first frame (important)
  //     const firstFrame = String(startFrame).padStart(3, "0");
  //     const firstImg = new Image();
  //     firstImg.src = `/logo/ezgif-frame-${firstFrame}.jpg`;

  //     // Lazy load remaining frames
  //     const lazyLoadFrames = () => {
  //       for (let i = startFrame; i <= totalFrames; i++) {
  //         const num = String(i).padStart(3, "0");
  //         const img = new Image();
  //         img.src = `/logo/ezgif-frame-${num}.jpg`;
  //       }
  //     };

  //     const lazyLoadTimer = setTimeout(lazyLoadFrames, 300);

  //     // 🔥 GSAP tween controls frame progression
  //     const tween = gsap.to(frame, {
  //       current: totalFrames,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: container,
  //         start: "top center",
  //         end: "bottom center",
  //         scrub: 1, // smooth scrub
  //         pinSpacing: true,
  //         // markers: true,
  //       },
  //       onUpdate: () => {
  //         const frameNumber = String(Math.round(frame.current)).padStart(
  //           3,
  //           "0"
  //         );

  //         image.style.backgroundImage = `url(/logo/ezgif-frame-${frameNumber}.jpg)`;
  //       },
  //     });

  //     return () => {
  //       clearTimeout(lazyLoadTimer);
  //       tween.kill();
  //     };
  //   },
  //   { scope: containerRef }
  // );

  const textRef = useRef(null);

  useGSAP(
    () => {
      const textEl = textRef.current;
      const words = textEl.innerText.split(" ");

      // Wrap words
      textEl.innerHTML = words
        .map((word) => `<span class="word">${word} </span>`)
        .join("");

      const wordSpans = gsap.utils.toArray(".word");

      // Timeline for sequential highlight
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom bottom",
          scrub: true,
          // markers: true,
        },
      });

      // Animate words ONE BY ONE
      wordSpans.forEach((word, i) => {
        tl.to(
          word,
          {
            color: "rgba(0, 0, 0,0.6)",
            duration: 1,
            ease: "none",
          },
          i * 0.2
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="home-aboutus-section" ref={containerRef}>
      <div className="home-aboutus-container-left">
        <video className="home-aboutus-container-left-video" autoPlay loop muted playsInline>
          <source src="https://cdn.sanity.io/files/8nn8fua5/production/e4a840ba8dfeded08ac4d0ba6e930be56fc68e3b.mp4" type="video/mp4" />
        </video>

        {/* <div
          className="frame-player"
          ref={imageRef}
          style={{
            width: "90%",
            height: "90%",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: "url(/logo/ezgif-frame-001.jpg)",
          }}
        /> */}
      </div>
      <div className="home-aboutus-container-right">
        <p ref={textRef}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          soluta laboriosam ducimus at sunt minus voluptatibus sit, eveniet
          fugit officiis sint eos nulla beatae aliquid dolorem nihil maxime modi
          recusandae. Explicabo ratione dolorum nesciunt voluptatum porro
          maiores quasi reprehenderit pariatur obcaecati ex nemo minima eum
          distinctio impedit ad et, rem deleniti. Architecto temporibus,
          quisquam eveniet accusamus vel commodi natus culpa obcaecati sit
          quibusdam, quo aliquid magni voluptatibus tenetur dolorum ea
          dignissimos maxime minus? Laborum maxime deserunt magni impedit,
          distinctio dolore libero fugit a fuga minus officiis delectus
          architecto quis cum culpa, iusto illo sequi natus quo porro? Vero,
          tempora architecto?
        </p>
      </div>
    </section>
  );
}
