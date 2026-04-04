// "use client";

// import LenisProvider from "@/components/providers/LenisProvider";
// // import LoadingScreen from "@/components/home/loading/LoadingScreen";
// import LeadChatbot from "@/components/layout/SmartChatbot";
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
// import GsapErrorHandler from "@/components/GsapErrorHandler";
// import LoadingScreen from "@/components/home/loading/LoadingScreen";
// import { useState, useEffect } from "react";

// export default function RootLayoutClient({ children }) {
//   const [showLoader, setShowLoader] = useState(false);
//   useEffect(() => {
//     const hasLoaded = sessionStorage.getItem("hasLoaded");

//     if (!hasLoaded) {
//       setShowLoader(true);

//       // Show loader for 2.5 sec (adjust timing)
//       setTimeout(() => {
//         sessionStorage.setItem("hasLoaded", "true");
//       }, 2500);
//     }
//   }, []);
//   return (
//     <>
//       {showLoader ? <LoadingScreen /> : ""}
//       <GsapErrorHandler />
//       <LenisProvider>
//         <LeadChatbot />
//         <Navbar />
//         {children}
//         <Footer />
//       </LenisProvider>
//     </>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import LenisProvider from "@/components/providers/LenisProvider";
import LeadChatbot from "@/components/layout/SmartChatbot";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GsapErrorHandler from "@/components/GsapErrorHandler";
import LoadingScreen from "@/components/home/loading/LoadingScreen";
import dynamic from "next/dynamic";
const GTM = dynamic(() => import("@/components/layout/GTM"), {
  ssr: false, // ✅ only load on client
});

export default function RootLayoutClient({ children }) {
  const [showLoader, setShowLoader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // ✅ Only run on homepage
    if (pathname != "/") {
      showLoader && setShowLoader(false);
      sessionStorage.setItem("hasLoaded", "true");
      return;
    }
    const hasLoaded = sessionStorage.getItem("hasLoaded");

    if (!hasLoaded) {
      setShowLoader(true);

      setTimeout(() => {
        sessionStorage.setItem("hasLoaded", "true");
      }, 2500);
    }
  }, [pathname]);

  return (
    <>
      {/* ✅ Show only on homepage */}
      {pathname === "/" && showLoader && <LoadingScreen />}

      <GsapErrorHandler />
      <LenisProvider>
        <LeadChatbot />
        <Navbar />
        {children}
        <Footer />
      </LenisProvider>
      <GTM/>
    </>
  );
}