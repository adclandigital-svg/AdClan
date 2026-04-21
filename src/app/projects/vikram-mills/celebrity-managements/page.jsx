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
    name: "Ranveer Singh",
    year: "2023",
    duration: "6 Months Campaign",
    desc: "We executed a high-energy, multi-platform digital campaign focused on bold storytelling and culturally relevant content. The strategy combined short-form videos, influencer collaborations, and viral challenges to maximize reach and engagement across social media platforms. By aligning the brand voice with Ranveer Singh’s dynamic personality, we created a strong emotional connection with the audience.",
    conclusion:
      "The campaign delivered outstanding performance, increasing brand recall by 3X and boosting overall engagement by over 250%. It successfully positioned the brand as youthful, bold, and culturally relevant in a highly competitive market.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Deepika Padukone",
    year: "2022",
    duration: "3 Months Campaign",
    desc: "This campaign focused on premium brand positioning through elegant storytelling and curated influencer partnerships. We crafted a visually refined content strategy that highlighted luxury aesthetics, lifestyle alignment, and aspirational messaging. The campaign was executed across Instagram, YouTube, and digital publications to target high-value audiences.",
    conclusion:
      "The campaign successfully elevated brand perception, creating a strong connection with premium audiences. It significantly improved brand trust, engagement quality, and positioned the brand as a leader in the luxury segment.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Virat Kohli",
    year: "2024",
    duration: "1 Year Partnership",
    desc: "We developed a long-term sports marketing strategy centered around authenticity, performance, and youth engagement. The campaign leveraged Virat Kohli’s credibility and influence to create powerful storytelling across fitness, lifestyle, and motivation-driven content. Multi-channel distribution ensured consistent visibility across digital and offline touchpoints.",
    conclusion:
      "This partnership delivered massive reach and credibility, significantly boosting brand awareness among younger demographics. The campaign strengthened trust, increased conversions, and established the brand as a performance-driven market leader.",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1600&auto=format&fit=crop",
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
              <div
                className={styles.heroSlide}
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
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