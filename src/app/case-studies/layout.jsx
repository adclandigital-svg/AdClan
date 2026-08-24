export const metadata = {
  title: "Case Studies | Adclan Media",
  description:
    "Read marketing insights, branding tips, and creative strategies from Adclan Media.",
  metadataBase: new URL("https://adclan.in"),
  openGraph: {
    title: "Case Studies | Adclan Media",
    description:
      "Marketing insights and creative strategies from Adclan Media.",
    url: "https://adclan.in/case-studies",
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