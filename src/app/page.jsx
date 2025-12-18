"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Hero = dynamic(() => import("@/components/home/Hero"), { ssr: false });
const LoadingScreen = dynamic(()=>import("@/components/home/loading/LoadingScreen"))

const HomeSecond = dynamic(() => import("@/components/home/HomeSecond"), { ssr: false });
const HomeThird = dynamic(() => import("@/components/home/HomeThird"), { ssr: false });

export default function Home() {
  return (
    <>
    <LoadingScreen/>
      <Suspense fallback={<div>Loading Hero...</div>}>
        <Hero />
        <HomeSecond/>
        <HomeThird/>
      </Suspense>
    </>
  );
}
