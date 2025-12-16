import React from "react";
import "./Homesecond.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HomeSecond() {
  const sectionRef1 = useRef(null);
  const headingRef = useRef(null);
  const cards1 = useRef(null);
  const cards2 = useRef(null);
  const cards3 = useRef(null);
  const cards4 = useRef(null);
  const cards5 = useRef(null);
  const cards6 = useRef(null);
  useEffect(() => {
    if (
      !sectionRef1.current ||
      !headingRef.current ||
      !cards1.current ||
      !cards2.current ||
      !cards3.current ||
      !cards4.current ||
      !cards5.current ||
      !cards6.current
    )
      return;

    const cards = [
      cards1.current,
      cards2.current,
      cards3.current,
      cards4.current,
      cards5.current,
      cards6.current,
    ];

    const rotations = [-15, -8, -3, 3, 8, 15];

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef1.current,
          start: "top 10%",
          end: window.innerWidth < 768 ? "+=100%" : "+=140%",
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          markers:true
        },
      });

      /* Heading scale */
      tl.to(headingRef.current, {
        scale: 0.5,
        ease: "power3.out",
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
            ease: "power3.out",
          },
          "cardsMove"
        );
      });

      tl.add("cardsRotate");

      /* Rotate cards */
      cards.forEach((card, i) => {
        tl.to(
          card,
          {
            rotation: rotations[i],
            ease: "power3.out",
          },
          "cardsRotate"
        );
      });
    }, sectionRef1);

    // IMPORTANT for mobile
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="home-second-section-main" ref={sectionRef1}>
        <div className="home-second-section">
          <h1 className="home-second-section-heading" ref={headingRef}>
            Our <br />
            Clan
          </h1>
          <div className="home-second-cards home-second-cards1" ref={cards1}>
            <p>Radio</p>
          </div>
          <div className="home-second-cards home-second-cards2" ref={cards2}>
            <p>Print</p>
          </div>
          <div className="home-second-cards home-second-cards3" ref={cards3}>
            <p>Event</p>
          </div>
          <div className="home-second-cards home-second-cards4" ref={cards4}>
            <p>Creative</p>
          </div>
          <div className="home-second-cards home-second-cards5" ref={cards5}>
            <p>Digital</p>
          </div>
          <div className="home-second-cards home-second-cards6" ref={cards6}>
            <p>Celebrity</p>
          </div>
        </div>
      </div>
    </>
  );
}
