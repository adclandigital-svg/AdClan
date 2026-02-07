// import "./globals.css";
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
// import LenisProvider from "@/components/providers/LenisProvider";
// import LoadingScreen from "@/components/home/loading/LoadingScreen";

// export const metadata = {
//   title: "AdClan",
//   description: "Your application",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" >
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link
//           rel="preconnect"
//           href="https://fonts.gstatic.com"
//           crossOrigin="anonymous"
//         />
//       </head>
//       <body >
//         <LenisProvider>
//           <LoadingScreen />
//           <Navbar />
//           {children}
//           <Footer />
//         </LenisProvider>
//       </body>
//     </html>
//   );
// }
"use client"
import "./globals.css";
import dynamic from "next/dynamic";
import LenisProvider from "@/components/providers/LenisProvider";

const Navbar = dynamic(() => import("@/components/layout/Navbar"), {
  ssr: false,
  loading: () => null,
});

const Footer = dynamic(() => import("@/components/layout/Footer"), {
  ssr: false,
  loading: () => null,
});

const LoadingScreen = dynamic(
  () => import("@/components/home/loading/LoadingScreen"),
  { ssr: false }
);

// export const metadata = {
//   title: "AdClan",
//   description: "Your application",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <LenisProvider>
          <LoadingScreen />
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
