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
    name: "Huma Qureshi",
    year: "Recent Campaign",
    duration: "Brand Collaboration",
    desc: "We executed a premium branding and advertising campaign for Vikram Mills featuring Huma Qureshi, focusing on authentic storytelling and high-quality visuals that highlighted the brand’s range of rice, wheat, and FMCG food products. The campaign blended cinematic production, lifestyle-oriented creatives, and platform-specific content to create a strong emotional connection with consumers while emphasizing purity, trust, and product quality.",

    conclusion:
      "The campaign significantly enhanced Vikram Mills’ brand visibility and strengthened its positioning as a trusted household food brand. Through impactful visuals and celebrity-driven engagement, the campaign increased audience reach, improved digital engagement, and created a strong premium perception across social media and advertising platforms.",

    image: "/projects/vikram-mills/6.png",
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
