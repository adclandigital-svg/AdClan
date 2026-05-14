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
    name: "Seher Bamba",

    year: "2026 Campaign",

    duration: "End-to-End Celebrity Campaign Management",

    desc: "Adclan executed a complete end-to-end advertising campaign for Right Gold featuring actress Seher Bamba. From campaign strategy, script writing, celebrity coordination, production planning, shoot management, creative direction, and on-set execution to post-production and final delivery, every stage was managed by our team. We also handled the creation of all campaign assets including ad films, promotional creatives, social media content, branding visuals, and digital marketing materials designed to build a strong luxury jewellery brand presence. The campaign focused on cinematic storytelling, premium fashion aesthetics, and high-impact visual communication to strengthen audience engagement and brand positioning.",

    conclusion:
      "The Right Gold campaign successfully elevated the brand’s luxury identity through celebrity-led storytelling, premium ad film production, and professionally managed campaign execution. Featuring Seher Bamba helped increase audience attention, strengthen digital engagement, and create a powerful premium perception across advertising, social media, and promotional platforms.",

    image: "/projects/right-gold/banner1.png",
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
