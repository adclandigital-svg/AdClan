export const metadata = {
  title: "About Us | Adclan Media",
  description:
    "Learn more about Adclan Media, our vision, team, and creative marketing journey.",
  keywords:
    "about adclan, marketing agency delhi, branding agency, creative team",
  authors: [{ name: "Adclan Media" }],
  metadataBase: new URL("https://ad-clan.vercel.app"),
  openGraph: {
    title: "About Us | Adclan Media",
    description:
      "Meet the team behind Adclan Media and discover our creative journey.",
    url: "https://ad-clan.vercel.app/about",
    images: [
      {
        url: "/adclan-logo-1.png",
      },
    ],
  },
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}