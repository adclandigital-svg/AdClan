"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Hero = dynamic(() => import("@/components/home/Hero"), { ssr: false });

const HomeSecond = dynamic(() => import("@/components/home/HomeSecond"), {
  ssr: false,
});
const HomeThird = dynamic(() => import("@/components/home/HomeThird"), {
  ssr: false,
});
const HomeFourth = dynamic(() => import("@/components/home/HomeFourth"), {
  ssr: false,
});
// const HomeFifth = dynamic(() => import("@/components/home/HomeFifth"), {
//   ssr: false,
// });
const HomeSix = dynamic(() => import("@/components/home/HomeSix"), {
  ssr: false,
});
const HomeSeven = dynamic(() => import("@/components/home/HomeSeven"), {
  ssr: false,
});
const HomeEight = dynamic(() => import("@/components/home/HomeEight"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading Hero...</div>}>
        <Hero />
        <HomeSecond />
        <HomeSeven />
        <HomeFourth />
        <HomeThird />
        {/* <HomeFifth /> */}
        <HomeSix />
        <HomeEight />
      </Suspense>
    </>


  );
}
