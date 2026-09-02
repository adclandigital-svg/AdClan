export const metadata = {
  title:
    "Performance Marketing Agency in Delhi: The Catalyst for Business Growth in India’s Digital Landscape",

  description:
    "Here’s the expanded 1000-word article with deeper explanations, practical examples, and actionable details while maintaining the original structure and tone",

  keywords: [
    "jewellery marketing agency",
    "video marketing case study",
    "gold jewellery ads",
    "ad film production",
    "creative agency case study",
  ],

  alternates: {
    canonical:
      "https://www.adclan.in/performance-marketing-agency-in-delhi-the-catalyst-for-business-growth-in-indias-digital-landscape",
  },

  openGraph: {
    title:
      "Performance Marketing Agency in Delhi: The Catalyst for Business Growth in India’s Digital Landscape",

    description:
      "Here’s the expanded 1000-word article with deeper explanations, practical examples, and actionable details while maintaining the original structure and tone",

    url:
      "https://www.adclan.in/performance-marketing-agency-in-delhi-the-catalyst-for-business-growth-in-indias-digital-landscape",

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