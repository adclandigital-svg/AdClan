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
    year: "2022",
    duration: "12 Months Campaign",
    desc: "We executed a premium fashion-led campaign for Vikram Mills, focusing on elegant storytelling and fabric-centric visuals. The strategy highlighted the versatility and quality of Vikram Mills textiles through curated photoshoots, styled content, and platform-specific creatives. By aligning the brand’s aesthetic with Adah Sharma’s graceful and expressive persona, we created visually engaging content that resonated with modern audiences.",

    conclusion:
      "The campaign successfully elevated Vikram Mills’ brand perception, strengthening its positioning as a premium and stylish textile choice. It drove higher engagement across digital platforms, increased product visibility, and built a strong aspirational connect with the target audience.",

    image: "/projects/vikram-mills/Vikram-mills-celeb.png",
  }
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
              <div
                className={styles.heroSlide}
                
              ><img src={item.image} alt="" /></div>
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
