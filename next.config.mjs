// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,
//   async headers() {
//     return [
//       {
//         // Cache static images for 1 year
//         source: '/:path*.(png|jpg|jpeg|gif|svg|webp|avif)',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=31536000, immutable',
//           },
//         ],
//       },
//     ];
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  // ✅ REDIRECTS (FIX 404 + OLD URLS)
  async redirects() {
    return [
      {
        source: "/careers",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/service",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/work",
        destination: "/projects",
        permanent: true,
      },

      // ✅ WordPress old tag URLs
      {
        source: "/tag/:slug*",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/category/:slug*",
        destination: "/blogs",
        permanent: true,
      },

      // ✅ Author pages (bots hit these a lot)
      {
        source: "/author/:slug*",
        destination: "/blogs",
        permanent: true,
      },

      // ✅ Wrong blog URL fix (/blog → /blogs)
      {
        source: "/blog",
        destination: "/blogs",
        permanent: true,
      },

      // ✅ Specific bad URL
      {
        source: "/test",
        destination: "/",
        permanent: true,
      },

      // ✅ Block WordPress attacks
      {
        source: "/wp-admin/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-login.php",
        destination: "/",
        permanent: true,
      },
    ];
  }, // ✅ <-- THIS COMMA WAS MISSING

  // ✅ HEADERS (CACHE OPTIMIZATION)
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
};

export default nextConfig;
