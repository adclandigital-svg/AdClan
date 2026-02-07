// "use client";

// import React, { useRef, useEffect } from "react";
// import "./homesix.css";
// import { blogs } from "@/data/blogs";
// import { useRouter } from "next/navigation";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import Link from "next/link";

// export default function HomeSix() {
//   const sectionRef = useRef(null);
//   const router = useRouter();

//   useEffect(() => {
//     const section = sectionRef.current;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         const videos = section.querySelectorAll("video");
//         videos.forEach((video) =>
//           entry.isIntersecting ? video.play() : video.pause(),
//         );
//         section.classList.toggle("animate", entry.isIntersecting);
//       },
//       { threshold: 0.25 },
//     );

//     observer.observe(section);
//     return () => observer.disconnect();
//   }, []);

//   const VideoCard = ({ blog }) => (
//     <div
//       className="video-card"
//       onClick={() => router.push(`/blogs/${blog.slug}`)}
//     >
//       <p>{blog.title}</p>
//       <video
//         src={blog.video}
//         autoPlay
//         muted
//         loop
//         playsInline
//         preload="none"
//         loading="lazy"
//         onError={(e) => e.target.load()}
//       />
//     </div>
//   );

//   return (
//     <section className="home-six-section-outer">
//       <h2 className="home-six-section-h2">
//         <span>Stories</span> Behind the Strategy
//       </h2>

//       <section className="home-six-section" ref={sectionRef}>
//         <div className="home-six-first-container">
//           <div className="home-six-first-container1">
//             <VideoCard blog={blogs[0]} />
//           </div>
//           <div className="home-six-first-container2">
//             <div className="home-six-first-container21">
//               <VideoCard blog={blogs[1]} />
//             </div>
//             <div className="home-six-first-container22">
//               <VideoCard blog={blogs[2]} />
//             </div>
//           </div>
//         </div>

//         <div className="home-six-second-container">
//           <div className="home-six-second-container1">
//             <VideoCard blog={blogs[3]} />
//           </div>
//           <div className="home-six-second-container1">
//             <VideoCard blog={blogs[4]} />
//           </div>
//         </div>

//         <Link href="/blogs" className="home-six-read-more">
//           Read More →
//         </Link>
//       </section>
//       <div className="mobile-slider">
//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={14}
//           slidesPerView={1.1}
//           loop
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}
//           speed={700}
//           breakpoints={{
//             768: {
//               enabled: false, // disables swiper on tablet/desktop
//             },
//           }}
//         >
//           <SwiperSlide>
//             <div className="slide-card" onClick={() => router.push(`/blogs/${blogs?.[0]?.slug}`)}>
//               <video
//                 src={blogs?.[0]?.video}
//                 muted
//                 loop
//                 autoPlay
//                 playsInline
//                 preload="metadata"
//               />
//               <p>{blogs?.[0]?.title}</p>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide>
//             <div className="slide-card" onClick={() => router.push(`/blogs/${blogs?.[0]?.slug}`)}>
//               <video
//                 src={blogs?.[1]?.video}
//                 muted
//                 loop
//                 autoPlay
//                 playsInline
//                 preload="metadata"
//               />
//               <p>{blogs?.[1]?.title}</p>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide>
//             <div className="slide-card" onClick={() => router.push(`/blogs/${blogs?.[0]?.slug}`)}>
//               <video
//                 src={blogs?.[2]?.video}
//                 muted
//                 loop
//                 autoPlay
//                 playsInline
//                 preload="metadata"
//               />
//               <p>{blogs?.[2]?.title}</p>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide>
//             <div className="slide-card" onClick={() => router.push(`/blogs/${blogs?.[0]?.slug}`)}>
//               <video
//                 src={blogs?.[3]?.video}
//                 muted
//                 loop
//                 autoPlay
//                 playsInline
//                 preload="metadata"
//               />
//               <p>{blogs?.[3]?.title}</p>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide>
//             <div className="slide-card" onClick={() => router.push(`/blogs/${blogs?.[0]?.slug}`)}>
//               <video
//                 src={blogs?.[4]?.video}
//                 muted
//                 loop
//                 autoPlay
//                 playsInline
//                 preload="metadata"
//               />
//               <p>{blogs?.[4]?.title}</p>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </section>
//   );
// }


"use client";

import React, { useRef, useEffect, useState } from "react";
import "./homesix.css";
import { blogs } from "@/data/blogs";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

export default function HomeSix() {
  const sectionRef = useRef(null);
  const router = useRouter();

  /* ================= DESKTOP PLAY/PAUSE ON VIEW ================= */
  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const videos = section.querySelectorAll("video");
        videos.forEach((video) =>
          entry.isIntersecting ? video.play() : video.pause()
        );
        section.classList.toggle("animate", entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  /* ================= DESKTOP VIDEO CARD ================= */
  const VideoCard = ({ blog }) => {
    const ref = useRef(null);
    const [load, setLoad] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setLoad(true);
            observer.disconnect();
          }
        },
        { rootMargin: "200px" }
      );

      observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);

    return (
      <div
        ref={ref}
        className="video-card"
        onClick={() => router.push(`/blogs/${blog.slug}`)}
      >
        <p>{blog.title}</p>
        {load && (
          <video
            src={blog.video}
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
          />
        )}
      </div>
    );
  };

  return (
    <section className="home-six-section-outer">
      <h2 className="home-six-section-h2">
        <span>Stories</span> Behind the Strategy
      </h2>

      {/* ================= DESKTOP GRID ================= */}
      <section className="home-six-section" ref={sectionRef}>
        <div className="home-six-first-container">
          <div className="home-six-first-container1">
            <VideoCard blog={blogs[0]} />
          </div>
          <div className="home-six-first-container2">
            <div className="home-six-first-container21">
              <VideoCard blog={blogs[1]} />
            </div>
            <div className="home-six-first-container22">
              <VideoCard blog={blogs[2]} />
            </div>
          </div>
        </div>

        <div className="home-six-second-container">
          <div className="home-six-second-container1">
            <VideoCard blog={blogs[3]} />
          </div>
          <div className="home-six-second-container1">
            <VideoCard blog={blogs[4]} />
          </div>
        </div>

        <Link href="/blogs" className="home-six-read-more">
          Read More →
        </Link>
      </section>

      {/* ================= MOBILE SLIDER ================= */}
      <div className="mobile-slider">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={14}
          slidesPerView={1.1}
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={700}
          breakpoints={{
            768: { enabled: false },
          }}
          onSlideChange={(swiper) => {
            swiper.slides.forEach((slide, i) => {
              const video = slide.querySelector("video");
              if (!video) return;
              i === swiper.activeIndex ? video.play() : video.pause();
            });
          }}
        >
          {blogs.slice(0, 5).map((blog, i) => (
            <SwiperSlide key={i}>
              <MobileSlide blog={blog} router={router} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

/* ================= MOBILE SLIDE — TRUE LAZY VIDEO ================= */
function MobileSlide({ blog, router }) {
  const ref = useRef(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="slide-card"
      onClick={() => router.push(`/blogs/${blog.slug}`)}
    >
      {load && (
        <video
          src={blog.video}
          muted
          loop
          autoPlay
          playsInline
          preload="metadata"
        />
      )}
      <p>{blog.title}</p>
    </div>
  );
}
