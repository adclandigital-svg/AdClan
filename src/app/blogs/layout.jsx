export const metadata = {
  title: "Blog | Adclan Media",
  description:
    "Read marketing insights, branding tips, and creative strategies from Adclan Media.",
  metadataBase: new URL("https://adclan.in"),
  openGraph: {
    title: "Blog | Adclan Media",
    description:
      "Marketing insights and creative strategies from Adclan Media.",
    url: "https://adclan.in/blogs",
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