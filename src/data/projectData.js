// export const PROJECTS = [
//   {
//     slug: "luxury-brand-identity",
//     title: "Luxury Brand Identity",
//     category: "Branding",
//     year: "2024",
//     client: "Premium Realty",
//     src: "/projects/1.png",
//     intro:
//       "A complete brand identity system designed for a luxury real estate brand with a global outlook.",
//     sections: [
//       {
//         type: "hero",
//         mediaType: "video",
//         src: "https://pub-a23acf44682e42368d7e030f3e6be365.r2.dev/1762764457905-1.mp4",
//       },
//       {
//         type: "mediaRow",
//         items: [
//           {
//             mediaType: "image",
//             src: "/projects/1.png",
//             caption: "Primary brand visuals & identity system",
//           },
//           {
//             mediaType: "video",
//             src: "/banner.mp4",
//              caption: "Primary brand visuals & identity system",
//           },
//            {
//             mediaType: "image",
//             src: "/projects/2.png",
//           },
//           {
//             mediaType: "image",
//             src: "/projects/3.png",
//              caption: "Primary brand visuals & identity system",
//           },
//            {
//             mediaType: "video",
//             src: "https://videocdn.cdnpk.net/videos/7bfd4b46-38e1-5a7a-99ef-1d72a6ac2eec/horizontal/previews/watermarked/large.mp4",
//           },
//         ],
//       },
//       {
//         type: "gallery",
//         items: [
//           {
//             mediaType: "image",
//             src: "https://picsum.photos/1800/1000?random=43",
//           },
//           {
//             mediaType: "image",
//             src: "https://picsum.photos/1800/1000?random=44",
//           },
//           {
//             mediaType: "video",
//             src: "https://www.w3schools.com/html/movie.mp4",
//           },
//            {
//             mediaType: "image",
//             src: "https://picsum.photos/1800/1000?random=43",
//           },
//         ],
//       },
//     ],
//   },
// ];



export const PROJECTS = [
  // =========================
  // 1️⃣ MAIN / FEATURED PROJECT
  // =========================
  {
    slug: "luxury-brand-identity",
    title: "Luxury Brand Identity",
    category: "Branding",
    year: "2024",
    client: "Premium Realty",
    src: "/projects/1.png",
    intro:
      "A complete brand identity system designed for a luxury real estate brand with a global outlook.",
    sections: [
      {
        type: "hero",
        mediaType: "video",
        src: "https://pub-a23acf44682e42368d7e030f3e6be365.r2.dev/1762764457905-1.mp4",
      },
      {
        type: "mediaRow",
        items: [
          {
            mediaType: "image",
            src: "/projects/1.png",
            caption: "Primary brand visuals & identity system",
          },
          {
            mediaType: "video",
            src: "/banner.mp4",
            caption: "Motion language & brand film",
          },
          {
            mediaType: "image",
            src: "/projects/2.png",
          },
          {
            mediaType: "image",
            src: "/projects/3.png",
            caption: "Luxury print & outdoor applications",
          },
          {
            mediaType: "video",
            src: "https://videocdn.cdnpk.net/videos/7bfd4b46-38e1-5a7a-99ef-1d72a6ac2eec/horizontal/previews/watermarked/large.mp4",
          },
        ],
      },
      {
        type: "gallery",
        items: [
          { mediaType: "image", src: "https://picsum.photos/2000/1200?random=101" },
          { mediaType: "image", src: "https://picsum.photos/2000/1200?random=102" },
          { mediaType: "video", src: "https://www.w3schools.com/html/movie.mp4" },
          { mediaType: "image", src: "https://picsum.photos/2000/1200?random=103" },
        ],
      },
    ],
  },

  // =========================
  // 2️⃣–🔟 RANDOM PROJECTS
  // =========================

  ...Array.from({ length: 9 }).map((_, i) => ({
    slug: `creative-project-${i + 2}`,
    title: `Creative Campaign ${i + 2}`,
    category: ["Branding", "Digital", "Campaign", "Film"][i % 4],
    year: "2023",
    client: ["Nike", "Adidas", "Zara", "Google", "Apple"][i % 5],
    src: `https://picsum.photos/800/600?random=${i + 10}`,
    intro:
      "A bold creative project blending storytelling, visuals, and motion to deliver strong brand impact.",
    sections: [
      {
        type: "hero",
        mediaType: i % 2 === 0 ? "video" : "image",
        src:
          i % 2 === 0
            ? "https://www.w3schools.com/html/mov_bbb.mp4"
            : `https://picsum.photos/2000/1100?random=${i + 200}`,
      },
      {
        type: "mediaRow",
        items: [
          {
            mediaType: "image",
            src: `https://picsum.photos/1600/1000?random=${i + 300}`,
            caption: "Hero campaign visual",
          },
          {
            mediaType: "video",
            src: "https://www.w3schools.com/html/movie.mp4",
            caption: "Launch film & motion assets",
          },
          {
            mediaType: "image",
            src: `https://picsum.photos/1600/1000?random=${i + 400}`,
          },
        ],
      },
      {
        type: "gallery",
        items: [
          { mediaType: "image", src: `https://picsum.photos/1800/1000?random=${i + 500}` },
          { mediaType: "image", src: `https://picsum.photos/1800/1000?random=${i + 600}` },
          { mediaType: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
          { mediaType: "image", src: `https://picsum.photos/1800/1000?random=${i + 700}` },
        ],
      },
    ],
  })),
];
