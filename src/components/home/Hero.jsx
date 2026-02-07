// "use client";
// import "./hero.css";

// export default function HeroVideo() {
//   return (
//     <section className="hero-section">
//       <div className="hero-video-wrapper">
//         <video
//           className="hero-video"
//           autoPlay
//           loop
//           muted
//           playsInline
//         >
//           <source src="/Recording 2025-12-12 120853.mp4" type="video/mp4" />
//         </video>
//       </div>
//     </section>
//   );
// }


"use client";
import "./hero.css";

export default function HeroVideo() {
  return (
    <section className="hero-section">
      <div className="hero-video-wrapper">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"   // ✅ Only small initial chunk
        >
          <source src="/Recording 2025-12-12 120853.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
