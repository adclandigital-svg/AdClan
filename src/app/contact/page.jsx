// gsap.registerPlugin(ScrollTrigger);

// export default function ContactPage() {
//   const pageRef = useRef(null);

//   const heroRef = useRef([]);
//   const leftRef = useRef(null);
//   const formRef = useRef(null);

//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState("");
//   const [errors, setErrors] = useState({});

//   useGSAP(
//     () => {
//       /* HERO TEXT */
//       gsap.from(heroRef.current, {
//         y: 120,
//         skewY: 6,
//         opacity: 0,
//         stagger: 0.12,
//         duration: 1.2,
//         ease: "power4.out",
//       });

//       /* LEFT INFO */
//       gsap.from(leftRef.current.children, {
//         y: 40,
//         opacity: 0,
//         stagger: 0.15,
//         scrollTrigger: {
//           trigger: leftRef.current,
//           start: "top 75%",
//         },
//       });

//       /* FORM */
//       gsap.from(formRef.current.children, {
//         y: 30,
//         opacity: 1,
//         stagger: 0.1,
//         scrollTrigger: {
//           trigger: formRef.current,
//           start: "top 75%",
//         },
//       });
//     },
//     { scope: pageRef },
//   );

//   /* ---------- SUBMIT ---------- */
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("");

//     const form = formRef.current;
//     const payload = {
//       name: form[0].value.trim(),
//       email: form[1].value.trim(),
//       company: form[2].value.trim(),
//       message: form[3].value.trim(),
//     };
//     console.log(payload);
//     setErrors({});
//     setLoading(true);

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();
//       setStatus(data.message);

//       if (data.success) form.reset();
//     } catch {
//       setStatus("Something went wrong. Please try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <main className="contact-page" ref={pageRef}>
//       {/* HERO */}
//       <section className="contact-hero">
//         <h1 className="hero-title">
//           <span ref={(el) => (heroRef.current[0] = el)}>Let’s</span>
//           <span ref={(el) => (heroRef.current[1] = el)}>Create</span>
//           <span ref={(el) => (heroRef.current[2] = el)}>Something</span>
//           <span ref={(el) => (heroRef.current[3] = el)}>Remarkable</span>
//         </h1>

//         {/* <p className="hero-sub">
//           We partner with ambitious brands to build meaningful experiences
//           through strategy, creativity, and digital innovation.
//         </p> */}

//         <div className="contact-hero-video">
//           <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
//             <input type="text" placeholder="Your name" required />

//             <input type="email" placeholder="Email address" required />

//             <input type="text" placeholder="Company / Brand" required />

//             <textarea placeholder="Tell us about your project" required />

//             <button type="submit" disabled={loading}>
//               {loading ? "Sending..." : "Start the conversation →"}
//             </button>

//             {status && <p className="form-status">{status}</p>}
//           </form>
//         </div>
//       </section>

//       {/* SPLIT SECTION */}

//       <section className="contact-split">
//           <div className="contact-card">
//             <span>Email</span>
//             <p>info@adclan.in</p>
//           </div>

//           <div className="contact-card">
//             <span>Phone</span>
//             <p>
//               +91-9891505451 <br />
//               011-49573333
//             </p>
//           </div>

//           <div className="contact-card">
//             <span>Studio</span>
//             <p>
//               D-9, Second Floor, Pushpa Bhawan <br />
//               Alaknanda Commercial Complex <br />
//               New Delhi – 110019
//             </p>
//           </div>
//       </section>

//       {/* MAP */}
//       <section className="contact-map">
//         <iframe
//           src="https://www.google.com/maps?q=Pushpa%20Bhawan%20Alaknanda%20New%20Delhi&output=embed"
//           loading="lazy"
//         />
//       </section>
//     </main>
//   );
// }

"use client";
import React, { useRef, useState } from "react";
import "./contact.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const pageRef = useRef(null);
  const heroRef = useRef([]);
  const cardsRef = useRef([]);
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useGSAP(
    () => {
      /* HERO TEXT */
      gsap.from(heroRef.current, {
        y: 120,
        skewY: 6,
        opacity: 0,
        stagger: 0.12,
        duration: 1.2,
        ease: "power4.out",
      });
    },
    { scope: pageRef },
  );

  /* ---------- SUBMIT ---------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    const form = formRef.current;
    const payload = {
      name: form[0].value.trim(),
      email: form[1].value.trim(),
      phone: form[2].value.trim(),
      company: form[3].value.trim(),
      message: form[4].value.trim(),
    };

    // ✅ VALIDATION
    if (!payload.name || payload.name.length < 2) {
      return setStatus("Please enter a valid name.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email)) {
      return setStatus("Please enter a valid email address.");
    }

    const phoneRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;

    if (!phoneRegex.test(payload.phone)) {
      return setStatus("Please enter a valid Indian phone number.");
    }

    if (payload.message.length < 10) {
      return setStatus("Message must be at least 10 characters.");
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to submit");
      }

      setStatus(data.message || "Thanks! We'll contact you soon.");

      if (data.success) {
        form.reset();
      }
    } catch (err) {
      setStatus(err.message || "Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <main className="contact-page" ref={pageRef}>
      {/* HERO */}
      <section className="contact-hero">
        <h1 className="hero-title">
          <span ref={(el) => (heroRef.current[0] = el)}>Let’s</span>
          <span ref={(el) => (heroRef.current[1] = el)}>Create</span>
          <span ref={(el) => (heroRef.current[2] = el)}>Something</span>
          <span ref={(el) => (heroRef.current[3] = el)}>Remarkable</span>
        </h1>

        <div className="contact-hero-form">
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Email address" required />
            <input
              type="number"
              placeholder="Phone number"
              min="0"
              required
              className="no-spinner"
            />
            <input type="text" placeholder="Company / Brand" required />
            <textarea placeholder="Tell us about your project" required />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Start the conversation →"}
            </button>

            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="contact-split">
        {[
          {
            title: "Contact",
            value: (
              <>
                info@adclan.in <br />
                +91-9891505451 <br />
                011-49573333
              </>
            ),
          },
          {
            title: "Delhi Office",
            value: (
              <>
                D-7 & 8, Second Floor, Pushpa Bhavan,
                <br />
                Commercial Complex, Alaknanda Market, <br />
                Alaknanda, New Delhi, Delhi 110019
              </>
            ),
          },
          {
            title: "Noida Office",
            value: (
              <>
                D-77, Sector 63 <br />
                Noida, Uttar Pradesh
              </>
            ),
          },
        ].map((item, i) => (
          <div
            key={i}
            className="contact-card"
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <span>{item.title}</span>
            <p>{item.value}</p>
          </div>
        ))}
      </section>

      {/* MAP */}
      <section className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.964105688411!2d77.2516698!3d28.5251386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce38dfcb0b2c9%3A0xd29f6ff4fd43fcf9!2sAdclan%20Media%20Services%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
}
