export const metadata = {
  title:
    "Right Gold Case Study | Jewellery Video Marketing Campaign by Adclan",

  description:
    "Explore how Adclan helped Right Gold increase trust, engagement, and sales through strategic jewellery video marketing and premium ad films.",

  keywords: [
    "jewellery marketing agency",
    "video marketing case study",
    "gold jewellery ads",
    "ad film production",
    "creative agency case study",
  ],

  alternates: {
    canonical:
      "https://yourwebsite.com/right-gold-jewellery-video-marketing-case-study",
  },

  openGraph: {
    title:
      "Right Gold Case Study | Jewellery Video Marketing Campaign by Adclan",

    description:
      "Explore how Adclan helped Right Gold increase trust, engagement, and sales through strategic jewellery video marketing and premium ad films.",

    url:
      "https://yourwebsite.com/right-gold-jewellery-video-marketing-case-study",

    siteName: "Adclan",

    images: [
      {
        url: "/projects/right-gold/right-gold-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Right Gold jewellery video marketing campaign by Adclan",
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