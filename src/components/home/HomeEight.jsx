"use client";
import React from "react";
import "./HeroEight.css";

export default function HomeEight() {
  return (
    <section className="hero-eight">
      <div className="hero-eight-header">
        <h2>
          What Our <span>Clients Say</span>
        </h2>
        <p>
          Trusted by brands across industries, we deliver creativity that
          drives real impact.
        </p>
      </div>

      <div className="hero-eight-testimonials">
        {/* Testimonial 1 */}
        <div className="testimonial-card">
          <p className="testimonial-text">
            “Adclan Media Solutions transformed our brand presence.
            Their strategic approach and creative execution delivered
            outstanding results beyond our expectations.”
          </p>

          <div className="testimonial-user">
            <img
              src="https://i.pravatar.cc/100?img=32"
              alt="Client"
              loading="lazy"
            />
            <div>
              <h4>Rohit Sharma</h4>
              <span>Marketing Head, Galaxy Group</span>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial-card ">
          <p className="testimonial-text">
            “From campaign ideation to execution, Adclan’s team showed
            remarkable professionalism and creativity. A truly reliable
            marketing partner.”
          </p>

          <div className="testimonial-user">
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="Client"
              loading="lazy"
            />
            <div>
              <h4>Neha Verma</h4>
              <span>Brand Manager, Kidsmate</span>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="testimonial-card">
          <p className="testimonial-text">
            “Their ability to understand our brand and deliver measurable
            results through creative storytelling sets Adclan apart
            from other agencies.”
          </p>

          <div className="testimonial-user">
            <img
              src="https://i.pravatar.cc/100?img=45"
              alt="Client"
              loading="lazy"
            />
            <div>
              <h4>Amit Kapoor</h4>
              <span>Founder, Ace Hanei</span>
            </div>
          </div>
        </div>
        
        <div className="testimonial-card">
          <p className="testimonial-text">
            “Adclan Media Solutions transformed our brand presence.
            Their strategic approach and creative execution delivered
            outstanding results beyond our expectations.”
          </p>

          <div className="testimonial-user">
            <img
              src="https://i.pravatar.cc/100?img=32"
              alt="Client"
              loading="lazy"
            />
            <div>
              <h4>Rohit Sharma</h4>
              <span>Marketing Head, Galaxy Group</span>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial-card ">
          <p className="testimonial-text">
            “From campaign ideation to execution, Adclan’s team showed
            remarkable professionalism and creativity. A truly reliable
            marketing partner.”
          </p>

          <div className="testimonial-user">
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="Client"
              loading="lazy"
            />
            <div>
              <h4>Neha Verma</h4>
              <span>Brand Manager, Kidsmate</span>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="testimonial-card">
          <p className="testimonial-text">
            “Their ability to understand our brand and deliver measurable
            results through creative storytelling sets Adclan apart
            from other agencies.”
          </p>

          <div className="testimonial-user">
            <img
              src="https://i.pravatar.cc/100?img=45"
              alt="Client"
              loading="lazy"
            />
            <div>
              <h4>Amit Kapoor</h4>
              <span>Founder, Ace Hanei</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
