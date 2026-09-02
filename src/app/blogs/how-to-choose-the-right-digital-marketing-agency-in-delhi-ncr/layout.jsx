export const metadata = {
  title:
    "How to Choose the Right Digital Marketing Agency in Delhi NCR: A Strategic Guide",

  description:
    "How to Choose the Right Digital Marketing Agency in Delhi NCR: A Strategic Guide Selecting a digital marketing agency in Delhi NCR isn't just about comparing se",

  keywords: [
    "jewellery marketing agency",
    "video marketing case study",
    "gold jewellery ads",
    "ad film production",
    "creative agency case study",
  ],

  alternates: {
    canonical:
      "https://www.adclan.in/how-to-choose-the-right-digital-marketing-agency-in-delhi-ncr-a-strategic-guide",
  },

  openGraph: {
    title:
      "How to Choose the Right Digital Marketing Agency in Delhi NCR: A Strategic Guide",

    description:
      "How to Choose the Right Digital Marketing Agency in Delhi NCR: A Strategic Guide Selecting a digital marketing agency in Delhi NCR isn't just about comparing se",

    url:
      "https://www.adclan.in/how-to-choose-the-right-digital-marketing-agency-in-delhi-ncr-a-strategic-guide",

    siteName: "Adclan",

    images: [
      {
        url: "/projects/right-gold/right-gold-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Performance Marketing Agency in Delhi: The Catalyst for Business Growth in India’s Digital Landscape by Adclan",
      },
    ],

    locale: "en_US",
    type: "article",
  },
};

export default function CaseStudyLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Right Gold Jewellery Marketing Case Study",
    description:
      "How Adclan increased trust and engagement for Right Gold through strategic video marketing.",
    author: {
      "@type": "Organization",
      name: "Adclan",
    },
  };

  return (
    <div className="case-layout">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {children}
    </div>
  );
}