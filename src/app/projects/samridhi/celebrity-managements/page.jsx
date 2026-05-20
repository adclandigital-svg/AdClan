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
    name: "Millind Gaba",
    year: "Recent Campaign",
    duration: "Brand Collaboration",
    desc: "We executed a premium branding and advertising campaign for Vikram Mills featuring Millind Gaba, focusing on energetic storytelling and modern visual production that highlighted the brand’s FMCG food product range. The campaign combined celebrity engagement, music-driven content, and social media focused creatives to create strong audience engagement while promoting quality, trust, and brand recall across digital platforms.",

    conclusion:
      "The campaign significantly increased Vikram Mills’ digital visibility and audience engagement. Through celebrity-led promotions, high-quality visuals, and platform-specific marketing strategies, the campaign strengthened brand awareness and established a modern and premium image among consumers.",

    image: "/projects/samridhi/2.png",
  },
  {
    name: "Anubhav Singh Bassi",
    year: "Recent Campaign",
    duration: "Brand Collaboration",
    desc: "We developed a creative branding and advertising campaign for Vikram Mills featuring Anubhav Singh Bassi, blending humor-driven storytelling with engaging visual content to promote the brand’s food product range. The campaign focused on relatable audience communication, entertainment-based marketing, and impactful digital creatives to enhance customer connection and brand memorability.",

    conclusion:
      "The campaign successfully boosted audience interaction and improved Vikram Mills’ online brand presence. By combining entertainment-focused content with strategic marketing creatives, the campaign generated higher engagement, stronger consumer recall, and a more relatable brand identity across social media platforms.",

     image: "/projects/samridhi/4.png",
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
