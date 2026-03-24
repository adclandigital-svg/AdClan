"use client";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";

const Hero = dynamic(() => import("@/components/home/Hero"), { ssr: false });
const HomeSecond = dynamic(() => import("@/components/home/HomeSecond"), { ssr: false });
const HomeThird = dynamic(() => import("@/components/home/HomeThird"), { ssr: false });
const HomeFourth = dynamic(() => import("@/components/home/HomeFourth"), { ssr: false });
const HomeSeven = dynamic(() => import("@/components/home/HomeSeven"), { ssr: false });


import HomeBlogSection from "@/components/home/HomeBlogSection";

export default function Home() {

  return (
    <>


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