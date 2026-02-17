export const metadata = {
  title: "Project Detail Page  | Adclan Media",
  description:
    "Explore creative branding, marketing campaigns, and digital projects delivered by Adclan Media.",
  metadataBase: new URL("https://ad-clan.vercel.app"),

  openGraph: {
    title: "Project Detail Page  | Adclan Media",
    description:
      "Discover portfolio projects and creative work by Adclan Media.",
    url: "https://ad-clan.vercel.app/projects",
    images: [
      {
        url: "/adclan-logo-1.png",
      },
    ],
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
