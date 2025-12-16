"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Hero = dynamic(() => import("@/components/home/Hero"), { ssr: false });
const Aboutus = dynamic(() => import("@/components/home/Aboutus"), {
  ssr: false,
});

const HomeSecond = dynamic(() => import("@/components/home/HomeSecond"), { ssr: false });
const HomeThird = dynamic(() => import("@/components/home/HomeThird"), { ssr: false });

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading Hero...</div>}>
        <Hero />
        <HomeSecond/>
        <HomeThird/>
        <Aboutus/>
        
      </Suspense>
    </>
  );
}
