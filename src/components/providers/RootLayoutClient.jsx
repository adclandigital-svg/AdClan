"use client";

import LenisProvider from "@/components/providers/LenisProvider";
// import LoadingScreen from "@/components/home/loading/LoadingScreen";
import LeadChatbot from "@/components/layout/SmartChatbot";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GsapErrorHandler from "@/components/GsapErrorHandler";
import LoadingScreen from "@/components/home/loading/LoadingScreen";
import { useState, useEffect } from "react";

export default function RootLayoutClient({ children }) {
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
      <GsapErrorHandler />
      <LenisProvider>
        {showLoader ? <LoadingScreen /> : ""}
        <LeadChatbot />
        <Navbar />
        {children}
        <Footer />
      </LenisProvider>
    </>
  );
}
