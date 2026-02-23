"use client";

import LenisProvider from "@/components/providers/LenisProvider";
import LoadingScreen from "@/components/home/loading/LoadingScreen";
import LeadChatbot from "@/components/layout/SmartChatbot";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GsapErrorHandler from "@/components/GsapErrorHandler";

export default function RootLayoutClient({ children }) {
  return (
    <>
      <GsapErrorHandler />
      <LenisProvider>
        <LoadingScreen />
        <LeadChatbot />
        <Navbar />
        {children}
        <Footer />
      </LenisProvider>
    </>
  );
}
