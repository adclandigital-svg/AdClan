"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Hero = dynamic(() => import("@/components/home/Hero"), { ssr: false });
const HomeAbout = dynamic(() => import("@/components/home/HomeAbout"), {
  ssr: false,
});
const Aboutus = dynamic(() => import("@/components/home/Aboutus"), { ssr: false });

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading Hero...</div>}>
        <Hero />
        <HomeAbout />
        <Aboutus/>
      </Suspense>
    </>
  );
}

