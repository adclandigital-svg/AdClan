// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactCompiler: true,

//   // ✅ REDIRECTS (FIX 404 + OLD URLS)
//   async redirects() {
//     return [
//       {
//         source: "/careers",
//         destination: "/contact",
//         permanent: true,
//       },
//       {
//         source: "/service",
//         destination: "/services",
//         permanent: true,
//       },
//       {
//         source: "/work",
//         destination: "/projects",
//         permanent: true,
//       },

//       // ✅ WordPress old tag URLs
//       {
//         source: "/tag/:slug*",
//         destination: "/blogs",
//         permanent: true,
//       },
//       {
//         source: "/category/:slug*",
//         destination: "/blogs",
//         permanent: true,
//       },

//       // ✅ Author pages (bots hit these a lot)
//       {
//         source: "/author/:slug*",
//         destination: "/blogs",
//         permanent: true,
//       },

//       // ✅ Wrong blog URL fix (/blog → /blogs)
//       {
//         source: "/blog",
//         destination: "/blogs",
//         permanent: true,
//       },

//       // ✅ Specific bad URL
//       {
//         source: "/test",
//         destination: "/",
//         permanent: true,
//       },

//       // ✅ Block WordPress attacks
//       {
//         source: "/wp-admin/:path*",
//         destination: "/",
//         permanent: true,
//       },
//       {
//         source: "/wp-login.php",
//         destination: "/",
//         permanent: true,
//       },
//     ];
//   }, // ✅ <-- THIS COMMA WAS MISSING

//   // ✅ HEADERS (CACHE OPTIMIZATION)
//   async headers() {
//     return [
//       {
//         source: "/:path*.(png|jpg|jpeg|gif|svg|webp|avif)",
//         headers: [
//           {
//             key: "Cache-Control",
//             value: "public, max-age=31536000, immutable",
//           },
//         ],
//       },
//     ];
//   },
// };

// export default nextConfig;

// next.config.js
import withPWAInit from "next-pwa";

/** ✅ PWA CONFIGURATION */
const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

/** ✅ NEXT CONFIG */
const nextConfig = {
  reactCompiler: true, // keep React compiler enabled

  /** REDIRECTS */
  async redirects() {
    return [
      { source: "/careers", destination: "/contact", permanent: true },
      { source: "/service", destination: "/services", permanent: true },
      { source: "/work", destination: "/projects", permanent: true },
      { source: "/tag/:slug*", destination: "/blogs", permanent: true },
      { source: "/category/:slug*", destination: "/blogs", permanent: true },
      { source: "/author/:slug*", destination: "/blogs", permanent: true },
      { source: "/blog", destination: "/blogs", permanent: true },
      { source: "/test", destination: "/", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      {
        source: "/blogs/top-branding-agency-in-delhi-ncr",
        destination:
          "/blogs/top-branding-agency-in-delhi-ncr-for-business-growth",
        permanent: true,
      },
      {
        source: "/blogs/branding-agency-in-delhi-ncr",
        destination:
          "/blogs/top-branding-agency-in-delhi-ncr-for-business-growth",
        permanent: true,
      },
      {
        source:
          "/blogs/branding-agency-in-delhi-ncr-your-partner-for-market-leadership",
        destination:
          "/blogs/top-branding-agency-in-delhi-ncr-for-business-growth",
        permanent: true,
      },
      {
        source: "/blogs/galaxy-sawasdee-heights-case-study",
        destination: "/case-studies/galaxy-sawasdee-heights-case-study",
        permanent: true,
      },
      {
        source: "/blogs/right-gold-case-study",
        destination: "/case-studies/right-gold-case-study",
        permanent: true,
      },
      {
        source: "/blogs/vikram-mills-case-study",
        destination: "/case-studies/vikram-mills-case-study",
        permanent: true,
      },
      {
        source: "/blogs/top-advertising-agencies-in-delhi",
        destination:
          "/blogs/top-advertising-agencies-in-delhi-find-your-growth-partner",
        permanent: true,
      },
      {
        source: "/blogs/advertising-agency-in-delhi",
        destination:
          "/blogs/top-advertising-agencies-in-delhi-find-your-growth-partner",
        permanent: true,
      },
      {
        source:
          "/blogs/advertising-agency-in-delhi-navigating-indias-marketing-powerhouse",
        destination:
          "/blogs/top-advertising-agencies-in-delhi-find-your-growth-partner",
        permanent: true,
      },
      {
        source: "/blogs/5-radio-ads-strategies-for-buisness_growth",
        destination: "/case-studies/5-radio-ads-strategies-for-buisness-growth",
        permanent: true,
      },
      {
        source: "/blogs/5-radio-ads-strategies-for-buisness-growth",
        destination: "/case-studies/5-radio-ads-strategies-for-buisness-growth",
        permanent: true,
      },
      {
        source: "/blogs/creative-advertising-agency-in-delhi",
        destination: "/blogs/top-creative-advertising-agency-in-delhi",
        permanent: true,
      },
      {
        source:
          "/blogs/creative-advertising-agency-in-delhi-what-makes-the-best-stand-out",
        destination: "/blogs/top-creative-advertising-agency-in-delhi",
        permanent: true,
      },
    ];
  },

  /** HEADERS */
  async headers() {
    return [
      {
        source: "/:path*.(png|jpg|jpeg|gif|svg|webp|avif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  /** ⚡ Optional: silence Turbopack warning (empty config) */
  turbopack: {},
};

/** ✅ EXPORT WITH PWA */
export default withPWA(nextConfig);
