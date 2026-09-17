export const metadata = {
  title: "How to Generate Quality Leads Through Digital Marketing",
  description: "Discover proven strategies for lead generation through digital marketing that deliver real business results. Learn actionable techniques used by top agencies.",
  keywords: [
    "lead generation",
    "quality leads",
    "digital marketing",
    "B2B leads",
    "B2C leads",
  ],
  alternates: {
    canonical: "https://yourwebsite.com/blogs/how-to-generate-quality-leads-through-digital-marketing",
  },
  openGraph: {
    title: "How to Generate Quality Leads Through Digital Marketing",
    description: "Discover proven strategies for lead generation through digital marketing that deliver real business results. Learn actionable techniques used by top agencies.",
    url: "https://yourwebsite.com/blogs/how-to-generate-quality-leads-through-digital-marketing",
    siteName: "Adclan",
    images: [
      {
        url: "/blog/how-to-generate-quality-leads-through-digital-marketing.webp",
        width: 1200,
        height: 630,
        alt: "How to Generate Quality Leads Through Digital Marketing",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

export default function BlogLayout({ children }) {
  return (
    <div className="case-layout">
      {children}
    </div>
  );
}
