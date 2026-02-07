// "use client";

// import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import "./career.css";

// export default function CareerPage() {
//   const leftRef = useRef(null);
//   const formRef = useRef(null);

//   useGSAP(() => {
//     // Left content animation
//     gsap.from(leftRef.current, {
//       x: -50,
//       opacity: 0,
//       duration: 1,
//       ease: "power3.out",
//     });

//     // Form fields animation
//     gsap.from(formRef?.current?.children, {
//       x: 50,
//       opacity: 0,
//       duration: 0.6,
//       stagger: 0.15,
//       ease: "power3.out",
//       delay: 0.3,
//     });
//   }, []);

//   return (
//     <div className="career-page">
//       <h1>Work With Adclan</h1>
//       <div className="career-container">
//         {/* Left Side - Career Info */}
//         <div className="career-left" ref={leftRef}>
//           <h1>We are actively hiring</h1>
//           <p>
//             Ready to join a dynamic team of creative thinkers and innovators? At
//             Adclan, we’re always looking for passionate professionals who thrive
//             on pushing boundaries and delivering bold ideas. Explore
//             opportunities with us and be a part of a clan that’s shaping the
//             future of branding and media.
//           </p>

//           <div className="career-contact">
//             <p>
//               Email: <a href="mailto:info@adclan.in">info@adclan.in</a>
//             </p>
//             <p>Phone: +91 9891505451</p>
//           </div>
//         </div>

//         {/* Right Side - Application Form */}
//         <form className="career-form" ref={formRef}>
//           <input type="text" placeholder="Full Name" required />
//           <input type="email" placeholder="Email Address" required />
//           <input type="text" placeholder="Phone Number" required />
//           <textarea placeholder="Your Message" rows="4"></textarea>
//           <input type="file" name="resume" accept=".pdf,.doc,.docx" />
//           <button type="submit">
//             <span>Submit Application</span>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./career.css";
import Link from "next/link";

export default function CareerPage() {
  const leftRef = useRef(null);
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  useGSAP(() => {
    gsap.from(leftRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(formRef?.current?.children, {
      x: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.3,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const formData = new FormData(e.target);

    const file = formData.get("resume");

    // ❗ Check file exists and size < 1 MB
    if (!file || file.size > 1024 * 1024) {
      setMsg("File size must be less than 1 MB ❌");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/career", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setMsg("Application sent successfully ✅");
        e.target.reset();
      } else {
        setMsg("Sending failed ❌");
      }
    } catch (error) {
      setMsg("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="career-page">
      <h1>Work With Adclan</h1>

      <div className="career-container">
        {/* LEFT CONTENT */}
        <div className="career-left" ref={leftRef}>
          <h1>We are actively hiring</h1>
          <p>
            Join a dynamic team of creative thinkers. Explore opportunities with
            us and be part of a clan shaping the future of branding & media.
          </p>

          <div className="career-contact">
            <p>
              Email: <Link href="mailto:info@adclan.in">info@adclan.in</Link>
            </p>
            <p>Phone: +91 9891505451</p>
          </div>
        </div>

        {/* FORM */}
        <form className="career-form" ref={formRef} onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Full Name" required />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
          />
          <input name="phone" type="text" placeholder="Phone Number" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
          ></textarea>

          <input type="file" name="resume" accept=".pdf,.doc,.docx" required />

          <button type="submit" disabled={loading}>
            <span>{loading ? "Sending..." : "Submit Application"}</span>
          </button>

          {msg && <p className="career-message">{msg}</p>}
        </form>
      </div>
    </div>
  );
}
