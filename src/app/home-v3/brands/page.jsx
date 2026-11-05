"use client";

import React, { useEffect } from "react";
import HomeV3Navbar from "@/components/home-v3/HomeV3Navbar";
import BrandsSectionV3 from "@/components/home-v3/BrandsSectionV3";
import HomeV3Footer from "@/components/home-v3/HomeV3Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/components/home-v3/homeV3.css";
import "@/components/home-v3/homeV3Sections.css";

export default function HomeV3BrandsPage() {
  useEffect(() => {
    document.body.classList.add("home-v3-active");
    window.scrollTo({ top: 0, behavior: "instant" });

    return () => {
      document.body.classList.remove("home-v3-active");
    };
  }, []);

  return (
    <div className="home-v3-full-flow">
      <HomeV3Navbar />
      <main className="v3-work-portfolio-page pt-5">
        <BrandsSectionV3 isStandalone={true} />
      </main>
      <HomeV3Footer />
    </div>
  );
}
