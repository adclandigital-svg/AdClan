"use client";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";

const Hero = dynamic(() => import("@/components/home/Hero"), { ssr: false });
const HomeSecond = dynamic(() => import("@/components/home/HomeSecond"), { ssr: false });
const HomeThird = dynamic(() => import("@/components/home/HomeThird"), { ssr: false });
const HomeFourth = dynamic(() => import("@/components/home/HomeFourth"), { ssr: false });
const HomeSeven = dynamic(() => import("@/components/home/HomeSeven"), { ssr: false });

import LoadingScreen from "@/components/home/loading/LoadingScreen";
import HomeBlogSection from "@/components/home/HomeBlogSection";

export default function Home() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoaded");

    if (!hasLoaded) {
      setShowLoader(true);

      // Show loader for 2.5 sec (adjust timing)
      setTimeout(() => {
        sessionStorage.setItem("hasLoaded", "true");
      }, 2500);
    }
  }, []);

  return (
    <>
      {showLoader?  <LoadingScreen /> :""}

      <Suspense fallback={<div>Loading...</div>}>
        <div className="Home-page">
          <Hero />
          <HomeSecond />
          <HomeFourth />
          <HomeThird />
          <HomeSeven />
          <HomeBlogSection />
        </div>
      </Suspense>
    </>
  );
}