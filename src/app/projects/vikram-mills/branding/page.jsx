"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import your CSS file (update path if needed)
import "./branding.css";

export default function Page() {
  const sections = [
    {
      title: "Logo & Identity Design",
      desc: "We craft distinctive logos and cohesive brand identities that establish strong recognition, communicate brand values, and create lasting impressions.",
      slides: [
        {
          img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
          text: "Custom logo designs tailored to reflect your brand personality and create a strong visual identity.",
        },
        {
          img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1200&auto=format&fit=crop",
          text: "Complete brand identity systems including typography, color palettes, and visual guidelines.",
        },
        {
          img: "https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1200&auto=format&fit=crop",
          text: "Scalable branding assets designed to work seamlessly across digital and offline platforms.",
        },
      ],
    },

    {
      title: "Banner, Hoardings & Outdoor Design",
      desc: "We create bold and impactful outdoor branding solutions designed to grab attention instantly and communicate your message effectively at scale.",
      slides: [
        {
          img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
          text: "Large-format banner and hoarding designs optimized for high visibility in crowded environments.",
        },
        {
          img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop",
          text: "Outdoor creatives with bold typography and strong visuals for long-distance readability.",
        },
        {
          img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop",
          text: "Strategic layout design that ensures instant communication and maximum brand recall.",
        },
      ],
    },

    {
      title: "Brochure & Print Design",
      desc: "We design professional brochures and print materials that effectively communicate your brand story and leave a lasting impression.",
      slides: [
        {
          img: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=1200&auto=format&fit=crop",
          text: "Corporate brochures designed with clean layouts and impactful storytelling.",
        },
        {
          img: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1200&auto=format&fit=crop",
          text: "Product catalogs and print creatives that enhance brand presentation.",
        },
        {
          img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop",
          text: "Flyers, posters, and marketing materials designed for promotions and campaigns.",
        },
      ],
    },

    {
      title: "Hoarding & Outdoor Branding",
      desc: "We design high-impact hoardings and outdoor advertising creatives that capture attention instantly and communicate your brand message effectively at scale.",
      slides: [
        {
          img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
          text: "Large-format hoarding designs created for maximum visibility, ensuring your brand stands out in high-traffic locations.",
        },
        {
          img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop",
          text: "Bold and clear outdoor creatives optimized for readability from long distances.",
        },
        {
          img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop",
          text: "Strategic layout and visual hierarchy designed for instant attention and recall.",
        },
      ],
    },

    {
      title: "Digital Marketing",
      desc: "Performance-driven marketing strategies designed to increase visibility, engagement, and business growth.",
      slides: [
        {
          img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
          text: "Social media campaigns designed to boost engagement and reach.",
        },
        {
          img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop",
          text: "Data-driven advertising strategies for maximum ROI.",
        },
        {
          img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
          text: "SEO and analytics strategies for long-term growth.",
        },
      ],
    },
  ];

  return (
    <div className="multi-page">
      <h2 className="multi-page-headings">Vikram Mills Brandings</h2>
      {sections.map((section, index) => (
        <SectionBlock key={index} data={section} index={index} />
      ))}
    </div>
  );
}

function SectionBlock({ data, index }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={`section-block ${index % 2 === 1 ? "reverse" : ""}`}>
      {/* LEFT CONTENT */}
      <div className="left">
        <h2>{data.title}</h2>
        <p className="main-desc">{data.desc}</p>

        <div className="glass-card">
          <p className="slide-text" key={activeIndex}>
            {data.slides[activeIndex]?.text}
          </p>
        </div>
      </div>

      {/* RIGHT SWIPER */}
      <div className="right">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={800}
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          style={{ width: "100%", height: "auto" }}
        >
          {data.slides.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="slide-inner">
                <img src={item.img} alt={item.text} loading="lazy" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
