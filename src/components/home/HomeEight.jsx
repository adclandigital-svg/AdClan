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
          Trusted by brands across industries, we deliver creativity that drives
          real impact.
        </p>
      </div>

      <div className="hero-eight-testimonials">
        {/* Testimonial 1 - Kidsmate (Leader Cycles) */}
        <div className="testimonial-card">
          <p className="testimonial-text">
            “Adclan’s 360° campaign helped us reach over 1 lakh happy users
            across India. Their creative storytelling and strategic media
            planning made Kidsmate a household name.”
          </p>
          <div className="testimonial-user">
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="Neha Verma"
              loading="lazy"
            />
            <div>
              <h4>Neha Verma</h4>
              <span>Brand Manager, Kidsmate (Leader Cycles)</span>
            </div>
          </div>
        </div>

        {/* Testimonial 2 - Ace Hanei */}
        <div className="testimonial-card">
          <p className="testimonial-text">
            “From concept to execution, Adclan delivered a power-packed campaign
            that cut through the noise. Their InShorts + radio integration was
            pure genius.”
          </p>
          <div className="testimonial-user">
            <img
              src="https://i.pravatar.cc/100?img=45"
              alt="Amit Kapoor"
              loading="lazy"
            />
            <div>
              <h4>Amit Kapoor</h4>
              <span>Founder, Ace Hanei</span>
            </div>
          </div>
        </div>

        {/* Testimonial 3 - Shweta Tiwari (Celebrity Endorsement) */}
        <div className="testimonial-card">
          <p className="testimonial-text">
            “Working with Adclan was seamless—they understood my brand persona
            and crafted campaigns that truly resonated with my audience. A team
            that values authenticity.”
          </p>
          <div className="testimonial-user">
            <img
              src="https://i.pravatar.cc/100?img=32"
              alt="Shweta Tiwari"
              loading="lazy"
            />
            <div>
              <h4>Shweta Tiwari</h4>
              <span>Brand Ambassador & Actress</span>
            </div>
          </div>
        </div>

        {/* Testimonial 4 - Media Partner (Radio Mirchi) */}
        <div className="testimonial-card">
          <p className="testimonial-text">
            “Adclan’s integrated approach to radio+digital is unmatched. They
            know exactly how to amplify a brand’s voice across multiple
            touchpoints.”
          </p>
          <div className="testimonial-user">
            <img
              src="https://i.pravatar.cc/100?img=27"
              alt="Rajiv Menon"
              loading="lazy"
            />
            <div>
              <h4>Rajiv Menon</h4>
              <span>Programming Head, Radio Mirchi</span>
            </div>
          </div>
        </div>

        {/* Testimonial 5 - Jindal Fine Industries (Enterprise Client) */}
        <div className="testimonial-card">
          <p className="testimonial-text">
            “Adclan elevated our B2B brand with a crisp digital presence and
            targeted campaigns. Their professionalism and ROI focus make them a
            trusted partner.”
          </p>
          <div className="testimonial-user">
            <img
              src="https://i.pravatar.cc/100?img=53"
              alt="Pooja Jindal"
              loading="lazy"
            />
            <div>
              <h4>Pooja Jindal</h4>
              <span>Director, Jindal Fine Industries</span>
            </div>
          </div>
        </div>

        {/* Testimonial 6 - Galaxy Group (General Client) */}
        <div className="testimonial-card">
          <p className="testimonial-text">
            “We’ve worked with many agencies, but Adclan’s creative energy and
            data-driven strategy set them apart. They don’t just execute—they
            innovate.”
          </p>
          <div className="testimonial-user">
            <img
              src="https://i.pravatar.cc/100?img=61"
              alt="Rohit Sharma"
              loading="lazy"
            />
            <div>
              <h4>Rohit Sharma</h4>
              <span>Marketing Head, Galaxy Group</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
