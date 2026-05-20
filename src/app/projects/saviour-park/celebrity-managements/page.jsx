"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import styles from "./celebrity.module.css";

const celebrities = [
  {
    name: "JASSIE GILL",
    year: "2024",
    duration: "Celebrity Management",
    desc: "Adclan executed a strategic celebrity management and promotional campaign for Jassie Gill, focusing on talent visibility, digital promotions, and high-impact brand collaborations. The campaign combined premium visual production, audience-focused storytelling, and cross-platform marketing strategies to strengthen Jassie Gill’s digital presence and audience engagement across entertainment and social media platforms.",

    conclusion:
      "The campaign successfully enhanced Jassie Gill’s brand visibility, audience engagement, and digital reach through impactful promotional strategies, celebrity branding, and visually engaging content tailored for modern entertainment and social media audiences.",

    image: "/projects/savier-park/banner.png",
  },
];

export default function CelebrityPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeData = celebrities[activeIndex];

  return (
    <div className={styles.celebrityPage}>
      {/* HERO */}
      <section className={styles.celebrityHero}>
        <Swiper
          className={styles.celebritySwiper}
          modules={[EffectFade, Pagination]}
          effect="fade"
          loop={true}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `
                <span class="${className} ${styles.celebrityBullet}">
                  <img src="${celebrities[index].image}" />
                </span>
              `;
            },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {celebrities.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.heroSlide}>
                <img src={item.image} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* DETAILS */}
      <section className={styles.celebrityDetails}>
        <div className={styles.detailsCard}>
          <h2>{activeData.name}</h2>

          <div className={styles.meta}>
            <span>📅 {activeData.year}</span>
            <span>⏳ {activeData.duration}</span>
          </div>

          <div className={styles.conclusion}>
            <div className={styles.conclusionInner}>
              <h4>Description</h4>
              <p>{activeData.desc}</p>
            </div>

            <div className={styles.conclusionInner}>
              <h4>Conclusion</h4>
              <p>{activeData.conclusion}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
