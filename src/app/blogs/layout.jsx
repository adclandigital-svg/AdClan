export const metadata = {
  title: "Blog | Adclan Media",
  description:
    "Read marketing insights, branding tips, and creative strategies from Adclan Media.",
  metadataBase: new URL("https://ad-clan.vercel.app"),
  openGraph: {
    title: "Blog | Adclan Media",
    description:
      "Marketing insights and creative strategies from Adclan Media.",
    url: "https://ad-clan.vercel.app/blogs",
    images: [
      {
        url: "/adclan-logo-1.png",
      },
    ],
  },
};

export default function BlogsLayout({ children }) {
  return <>{children}</>;
}