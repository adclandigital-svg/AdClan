export const metadata = {
  title: "Blog Details | Adclan Media",
  description:
    "Read detailed insights, strategies, and creative stories from Adclan Media.",
  metadataBase: new URL("https://ad-clan.vercel.app"),

  openGraph: {
    title: "Blog | Adclan Media",
    description:
      "Creative marketing insights and strategies from Adclan Media.",
    url: "https://ad-clan.vercel.app/blogs",
    images: [
      {
        url: "/adclan-logo-1.png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Blog | Adclan Media",
    description:
      "Creative marketing insights and strategies from Adclan Media.",
    images: ["/adclan-logo-1.png"],
  },
};

export default function BlogSlugLayout({ children }) {
  return <>{children}</>;
}