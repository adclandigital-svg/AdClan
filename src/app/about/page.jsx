"use client";

import dynamic from "next/dynamic";

const MagazineBook = dynamic(
  () => import("./components/MagazineBook"),
  { ssr: false }
);
import AboutHero from "./components/Hero";

export default function Page() {
  return (
    <div>
      {/* <AboutHero/> */}
      <MagazineBook />
    </div>
  );
}
