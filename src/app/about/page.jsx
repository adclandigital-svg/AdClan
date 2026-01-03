"use client";

import dynamic from "next/dynamic";

const MagazineBook = dynamic(() => import("./components/MagazineBook"), {
  ssr: false,
});
import AboutHero from "./components/Hero";
import AboutDefinition from "./components/SecondAbout";
import AboutProcess from "./components/Text";
import AboutStairs from "./components/AboutStairs";
import AboutClients from "./components/AboutClients";
import AboutFounderSingle from "./components/AboutFounderSingle";

export default function Page() {
  return (
    <>
      <AboutHero />
      <AboutDefinition />
      <AboutProcess />
      <AboutStairs />
      <AboutFounderSingle />
      <MagazineBook />
      <AboutClients />
    </>
  );
}
