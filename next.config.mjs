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
        destination: "/blog",
        permanent: true,
      },

      // ✅ Optional category fix
      {
        source: "/category/:slug*",
        destination: "/blog",
        permanent: true,
      },
    ];
  },

  // ✅ HEADERS (your existing code)
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