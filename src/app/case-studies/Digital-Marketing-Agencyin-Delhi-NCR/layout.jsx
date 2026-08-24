export const metadata = {
  title: "Case Study Details | Adclan Media",
  description:
    "Read detailed insights, strategies, and creative stories from Adclan Media.",
  metadataBase: new URL("https://adclan.in"),

  openGraph: {
    title: "Blog | Adclan Media",
    description:
      "Creative marketing insights and strategies from Adclan Media.",
    url: "https://adclan.in/blogs",
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