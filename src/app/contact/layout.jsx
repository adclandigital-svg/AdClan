export const metadata = {
  title: "Contact Us | Adclan Media",
  description:
    "Get in touch with Adclan Media for branding, digital marketing, and creative strategy services. Let’s build something amazing together.",
  keywords:
    "contact adclan, marketing agency contact, branding agency delhi, digital marketing agency",
  metadataBase: new URL("https://adclan.in"),

  openGraph: {
    title: "Contact Us | Adclan Media",
    description:
      "Connect with Adclan Media to discuss your next creative marketing project.",
    url: "https://adclan.in/contact",
    images: [
      {
        url: "/adclan-logo-1.png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Adclan Media",
    description:
      "Let’s connect and create impactful marketing experiences together.",
    images: ["/adclan-logo-1.png"],
  },
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}