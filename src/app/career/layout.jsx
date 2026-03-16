export const metadata = {
  title: "Careers | Adclan Media",
  description:
    "Join Adclan Media and build creative marketing experiences with our team. Explore career opportunities and grow with us.",
  keywords:
    "careers, jobs, marketing agency jobs, creative agency careers, adclan",
  metadataBase: new URL("https://adclan.in"),

  openGraph: {
    title: "Careers | Adclan Media",
    description:
      "Explore career opportunities at Adclan Media and grow with a creative marketing team.",
    url: "https://adclan.in/career",
    images: [
      {
        url: "/adclan-logo-1.png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Careers | Adclan Media",
    description:
      "Join Adclan Media and build creative marketing experiences.",
    images: ["/adclan-logo-1.png"],
  },
};

export default function CareerLayout({ children }) {
  return <>{children}</>;
}