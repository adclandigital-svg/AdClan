// "use client";
// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// import "./homereels.css";

// const projects = [
//   {
//     id: 1,
//     title: "Ayesha Khan x Right Gold",
//     subtitle: "Influencer Collaboration & Social Commerce",
//     description:
//       "We partnered with a lifestyle influencer to create a high-converting reels campaign focused on storytelling and conversions.",

//     influencer: {
//       name: "Ayesha Khan",
//       username: "@ayeshakhan",
//       profileImg:
//         "https://img.freepik.com/free-photo/portrait-pretty-smiling-woman-posing-white-background_231208-1813.jpg",
//     },

//     video:
//       "https://videos.pexels.com/video-files/3191251/3191251-uhd_2560_1440_25fps.mp4",

//     platform: "Instagram",
//     followers: "2.4M+",
//     engagement: "8.7%",

//     duration: "45 Days",
//     client: "Right Gold",

//     services: [
//       "Influencer Strategy",
//       "Content Production",
//       "Reels",
//       "Performance Ads",
//     ],

//     result: "3.2M+ Views • 120K+ Engagement • 2.8X Sales Growth",
//   },

//   {
//     id: 2,
//     title: "Riya Sharma x Glow Skin",
//     subtitle: "Beauty Influencer Campaign",
//     description:
//       "A beauty-first influencer campaign designed for product trust, tutorials, and UGC-driven conversions.",

//     influencer: {
//       name: "Riya Sharma",
//       username: "@riyabeauty",
//       profileImg:
//         "https://img.freepik.com/free-photo/young-beautiful-woman-smiling_23-2148894004.jpg",
//     },

//     video:
//       "https://videos.pexels.com/video-files/855564/855564-hd_1920_1080_25fps.mp4",

//     platform: "Instagram, YouTube",
//     followers: "1.8M+",
//     engagement: "9.2%",

//     duration: "30 Days",
//     client: "Glow Skin",

//     services: [
//       "Influencer Marketing",
//       "UGC Content",
//       "Tutorial Videos",
//       "Paid Campaigns",
//     ],

//     result: "2.1M+ Views • 95K Saves • 2.3X Sales Growth",
//   },

//   {
//     id: 3,
//     title: "Arjun Mehta x FitFuel",
//     subtitle: "Fitness Influencer Campaign",
//     description:
//       "Performance-led fitness campaign combining reels, challenges, and audience engagement loops.",

//     influencer: {
//       name: "Arjun Mehta",
//       username: "@arjunfit",
//       profileImg:
//         "https://img.freepik.com/free-photo/handsome-man-gym_144627-19903.jpg",
//     },

//     video:
//       "https://videos.pexels.com/video-files/4145030/4145030-hd_1920_1080_25fps.mp4",

//     platform: "Instagram Reels",
//     followers: "3.1M+",
//     engagement: "7.5%",

//     duration: "60 Days",
//     client: "FitFuel",

//     services: [
//       "Campaign Strategy",
//       "Fitness Content",
//       "Challenges",
//       "Ad Scaling",
//     ],

//     result: "4.5M+ Views • 210K Engagement • 3.5X ROI",
//   },
// ];

// export default function Homereels() {
//   const videoRefs = useRef([]);
//   const swiperRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const activeProject = projects[activeIndex];

//   const handleSlideChange = (swiper) => {
//     setActiveIndex(swiper.realIndex);

//     videoRefs.current.forEach((video, index) => {
//       if (!video) return;

//       if (index === swiper.realIndex) {
//         video.currentTime = 0;
//         video.play().catch(() => {});
//       } else {
//         video.pause();
//       }
//     });
//   };

//   return (
//     <div className="reels-wrapper">
//       <Swiper
//         modules={[Pagination]}
//         slidesPerView={3}
//         centeredSlides={true}
//         loop={true}
//         spaceBetween={20}
//         onSwiper={(swiper) => {
//           swiperRef.current = swiper;
//           handleSlideChange(swiper);
//         }}
//         onSlideChange={handleSlideChange}
//         pagination={{ clickable: true }}
//         breakpoints={{
//           0: { slidesPerView: 1 },
//           576: { slidesPerView: 1.5 },
//           768: { slidesPerView: 3 },
//         }}
//         className="mySwiper"
//       >
//         {projects.map((item, index) => (
//           <SwiperSlide key={index} className="reel-slide">
//             <video
//               ref={(el) => (videoRefs.current[index] = el)}
//               src={item.video}
//               muted
//               loop={false} // ❗ IMPORTANT
//               playsInline
//               className="reel-video"
//               onEnded={() => {
//                 // 👉 slide to next ONLY when video ends
//                 swiperRef.current?.slideNext();
//               }}
//               onMouseEnter={(e) => e.target.pause()}
//               onMouseLeave={(e) => {
//                 const swiper = swiperRef.current;
//                 if (index === swiper.realIndex) {
//                   e.target.play();
//                 }
//               }}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div className="reels-right">
//         <div className="badge">🏗️ Featured Project</div>

//         <h2 className="project-title">{projects[activeIndex].name}</h2>

//         <div className="info-grid">
//           <div>
//             <span>📍</span> {projects[activeIndex].location}
//           </div>
//           <div>
//             <span>🏢</span> {projects[activeIndex].type}
//           </div>
//           <div>
//             <span>📐</span> {projects[activeIndex].area}
//           </div>
//           <div>
//             <span>🚧</span> {projects[activeIndex].status}
//           </div>
//         </div>

//         <p className="project-desc">{projects[activeIndex].desc}</p>

//         <button className="project-btn">View Full Project →</button>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./homereels.css";

const projects = [
  {
    id: 1,
    title: "Ayesha Khan x Right Gold",
    subtitle: "Influencer Collaboration & Social Commerce",
    description:
      "We partnered with a lifestyle influencer to create a high-converting reels campaign focused on storytelling and conversions.",

    influencer: {
      name: "Ayesha Khan",
      username: "@ayeshakhan",
      profileImg:
        "https://img.freepik.com/free-photo/portrait-pretty-smiling-woman-posing-white-background_231208-1813.jpg",
    },

    video:
      "https://videocdn.cdnpk.net/videos/f2dc8650-74a4-51dc-b90f-eda22ebf9ec5/vertical/previews/watermarked/large.mp4",

    platform: "Instagram",
    followers: "2.4M+",
    engagement: "8.7%",

    duration: "45 Days",
    client: "Right Gold",

    services: [
      "Influencer Strategy",
      "Content Production",
      "Reels",
      "Performance Ads",
    ],

    result: "3.2M+ Views • 120K+ Engagement • 2.8X Sales Growth",
  },

  {
    id: 2,
    title: "Riya Sharma x Glow Skin",
    subtitle: "Beauty Influencer Campaign",
    description:
      "A beauty-first influencer campaign designed for product trust, tutorials, and UGC-driven conversions.",

    influencer: {
      name: "Riya Sharma",
      username: "@riyabeauty",
      profileImg:
        "https://img.freepik.com/free-photo/young-beautiful-woman-smiling_23-2148894004.jpg",
    },

    video:
      "https://videocdn.cdnpk.net/videos/f2dc8650-74a4-51dc-b90f-eda22ebf9ec5/vertical/previews/watermarked/large.mp4",

    platform: "Instagram, YouTube",
    followers: "1.8M+",
    engagement: "9.2%",

    duration: "30 Days",
    client: "Glow Skin",

    services: [
      "Influencer Marketing",
      "UGC Content",
      "Tutorial Videos",
      "Paid Campaigns",
    ],

    result: "2.1M+ Views • 95K Saves • 2.3X Sales Growth",
  },

  {
    id: 3,
    title: "Arjun Mehta x FitFuel",
    subtitle: "Fitness Influencer Campaign",
    description:
      "Performance-led fitness campaign combining reels, challenges, and audience engagement loops.",

    influencer: {
      name: "Arjun Mehta",
      username: "@arjunfit",
      profileImg:
        "https://img.freepik.com/free-photo/handsome-man-gym_144627-19903.jpg",
    },

    video:
      "https://videocdn.cdnpk.net/videos/f2dc8650-74a4-51dc-b90f-eda22ebf9ec5/vertical/previews/watermarked/large.mp4",

    platform: "Instagram Reels",
    followers: "3.1M+",
    engagement: "7.5%",

    duration: "60 Days",
    client: "FitFuel",

    services: [
      "Campaign Strategy",
      "Fitness Content",
      "Challenges",
      "Ad Scaling",
    ],

    result: "4.5M+ Views • 210K Engagement • 3.5X ROI",
  },
  {
    id: 3,
    title: "Arjun Mehta x FitFuel",
    subtitle: "Fitness Influencer Campaign",
    description:
      "Performance-led fitness campaign combining reels, challenges, and audience engagement loops.",

    influencer: {
      name: "Arjun Mehta",
      username: "@arjunfit",
      profileImg:
        "https://img.freepik.com/free-photo/handsome-man-gym_144627-19903.jpg",
    },

    video:
      "https://videocdn.cdnpk.net/videos/f2dc8650-74a4-51dc-b90f-eda22ebf9ec5/vertical/previews/watermarked/large.mp4",

    platform: "Instagram Reels",
    followers: "3.1M+",
    engagement: "7.5%",

    duration: "60 Days",
    client: "FitFuel",

    services: [
      "Campaign Strategy",
      "Fitness Content",
      "Challenges",
      "Ad Scaling",
    ],

    result: "4.5M+ Views • 210K Engagement • 3.5X ROI",
  },
];

export default function Homereels() {
  const videoRefs = useRef([]);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  const handleSlideChange = (swiper) => {
    const realIndex = swiper.realIndex;
    setActiveIndex(realIndex);

    // Pause all videos, then play the active one
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === realIndex) {
        video.currentTime = 0;
        video.play().catch((e) => console.log("Play failed:", e));
      } else {
        video.pause();
      }
    });
  };

  return (
    <div className="reels-wrapper">
      <Swiper
        modules={[Pagination]}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        spaceBetween={20}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          handleSlideChange(swiper);
        }}
        onSlideChange={handleSlideChange}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 1.5 },
          768: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {projects.map((item, index) => (
          <SwiperSlide key={item.id} className="reel-slide">
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={item.video}
              muted
              loop={false}
              playsInline
              className="reel-video"
              onEnded={() => {
                // Move to next slide when video ends
                swiperRef.current?.slideNext();
              }}
              onMouseEnter={(e) => e.target.pause()}
              onMouseLeave={(e) => {
                const swiper = swiperRef.current;
                if (index === swiper?.realIndex) {
                  e.target.play().catch(() => {});
                }
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right panel - dynamic content based on active project */}
      <div className="reels-right">
        <div className="badge">🎬 Featured Campaign</div>

        <h2 className="project-title">{activeProject.title}</h2>
        <p className="project-subtitle">{activeProject.subtitle}</p>

        <div className="info-grid">
          <div>
            <span>📱</span> {activeProject.platform}
          </div>
          <div>
            <span>👥</span> {activeProject.followers} followers
          </div>
          <div>
            <span>📊</span> {activeProject.engagement} engagement
          </div>
          <div>
            <span>⏱️</span> {activeProject.duration}
          </div>
          <div>
            <span>🏢</span> {activeProject.client}
          </div>
        </div>

        <p className="project-desc">{activeProject.description}</p>

        <div className="services-list">
          {activeProject.services.map((service, i) => (
            <span key={i} className="service-tag">
              {service}
            </span>
          ))}
        </div>

        <div className="project-result">{activeProject.result}</div>

        <button className="project-btn">View Full Project →</button>
      </div>
    </div>
  );
}
