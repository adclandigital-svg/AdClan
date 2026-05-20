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
    name: "Adah Sharma",
    year: "2024",
    duration: "Special Appearance Management",

    desc: "Adclan managed the special appearance and celebrity coordination for Adah Sharma at the BIG FM Big Impact Awards 2024. The campaign focused on event management, celebrity handling, media visibility, and premium brand presentation while ensuring seamless coordination throughout the event experience. The collaboration highlighted elegance, professionalism, and strong audience engagement through high-visibility event coverage and promotional branding.",

    conclusion:
      "The event successfully enhanced brand visibility and audience engagement through Adah Sharma’s appearance at the BIG Impact Awards 2024. With strategic celebrity management, smooth event coordination, and premium presentation, Adclan delivered a strong entertainment and media impact across digital and on-ground platforms.",

    image: "/projects/big-fm/banner.png",
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
