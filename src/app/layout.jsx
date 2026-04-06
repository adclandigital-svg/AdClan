import { Raleway } from "next/font/google";
import "./globals.css";
import RootLayoutClient from "@/components/providers/RootLayoutClient";

const raleway = Raleway({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  manifest: "/manifest.json",
  title: "Adclan Media | Creative Marketing Agency",
  description:
    "Adclan Media is a creative marketing agency helping brands grow through branding and digital marketing.",
  keywords:
    "marketing agency, branding, digital marketing, creative agency, adclan",
  authors: [{ name: "Adclan Media" }],
  metadataBase: new URL("https://adclan.in"),
  openGraph: {
    title: "Adclan Media | Creative Marketing Agency",
    description:
      "Creative branding and marketing solutions for modern businesses.",
    url: "https://adclan.in",
    images: [
      {
        url: "/adclan-logo-1.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="llm" href="/llm.txt" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body suppressHydrationWarning className={raleway.className}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
