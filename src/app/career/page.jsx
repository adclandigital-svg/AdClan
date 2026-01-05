"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./career.css";

export default function CareerPage() {
  const leftRef = useRef(null);
  const formRef = useRef(null);

  useGSAP(() => {
    // Left content animation
    gsap.from(leftRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Form fields animation
    gsap.from(formRef?.current?.children, {
      x: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.3,
    });
  }, []);

  return (
    <div className="career-page">
      <h1>Work With Adclan</h1>
      <div className="career-container">
        {/* Left Side - Career Info */}
        <div className="career-left" ref={leftRef}>
          <h1>We are actively hiring</h1>
          <p>
            Ready to join a dynamic team of creative thinkers and innovators? At
            Adclan, we’re always looking for passionate professionals who thrive
            on pushing boundaries and delivering bold ideas. Explore
            opportunities with us and be a part of a clan that’s shaping the
            future of branding and media.
          </p>

          <div className="career-contact">
            <p>
              Email: <a href="mailto:info@adclan.in">info@adclan.in</a>
            </p>
            <p>Phone: +91 9891505451</p>
          </div>
        </div>

        {/* Right Side - Application Form */}
        <form className="career-form" ref={formRef}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Phone Number" required />
          <textarea placeholder="Your Message" rows="4"></textarea>
          <input type="file" name="resume" accept=".pdf,.doc,.docx" />
          <button type="submit">
            <span>Submit Application</span>
          </button>
        </form>
      </div>
    </div>
  );
}
