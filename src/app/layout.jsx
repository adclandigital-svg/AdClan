import "./globals.css";
import RootLayoutClient from "@/components/providers/RootLayoutClient";

export const metadata = {
  title: "Adclan Media | Creative Marketing Agency",
  description:
    "Adclan Media is a creative marketing agency helping brands grow through branding and digital marketing.",
  keywords:
    "marketing agency, branding, digital marketing, creative agency, adclan",
  authors: [{ name: "Adclan Media" }],
  metadataBase: new URL("https://ad-clan.vercel.app"),
  openGraph: {
    title: "Adclan Media | Creative Marketing Agency",
    description:
      "Creative branding and marketing solutions for modern businesses.",
    url: "https://ad-clan.vercel.app",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning>
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}