"use client";

import "./homeBlog.css";
import Link from "next/link";

const blogs = [
  {
    id: 4,
    title: "Adclan Media Organizes Galaxy Group Interview",
    date: "October 2024",
    img: "https://adclan.in/wp-content/uploads/2024/10/sdfaa-600x600.jpg",
    link: "https://adclan.in/adclan-media-organizes-galaxy-group-interview/",
  },
  {
    id: 1,
    title:
      "Adclan Media – The Marketing Agency You Were Looking For in Delhi NCR",
    date: "April 2025",
    img: "https://adclan.in/wp-content/uploads/2025/04/square-banner.png",
    link: "https://adclan.in/digital-marketing-agency-in-delhi-ncr/",
  },
  {
    id: 2,
    title: "Adclan Onboard Shweta Tiwari as Brand Ambassador for Kidsmate",
    date: "January 2025",
    img: "https://adclan.in/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-23-at-4.20.17-PM-600x600.jpeg",
    link: "https://adclan.in/adclan-onboard-shweta-tiwari-as-brand-ambassador-for-kidsmate/",
  },
  {
    id: 3,
    title: "Adclan Media’s Triumph with Ace Hanei: Masterclass in Campaign",
    date: "October 2024",
    img: "https://adclan.in/wp-content/uploads/2024/10/Untitled-2-600x600.png",
    link: "https://adclan.in/adclan-media-triumph-with-ace-hanei/",
  },
];

export default function HomeBlogSection() {
  return (
    <section className="home-blog-section">
      <div className="blog-container">
        <div className="blog-heading-left">
          <h4>Stories</h4>
          <h2> Behind the Strategy</h2>
        </div>

        <div className="blog-layout">
          {/* Featured Blog */}
          <div className="featured-blog">
            <img src={blogs[0].img} alt="blog" />

            <div className="featured-content">
              <span className="date">{blogs[0].date}</span>
              <h3>{blogs[0].title}</h3>
              <p>{blogs[0].desc}</p>
              <Link href="#">Read Article →</Link>
            </div>
          </div>

          {/* Side Blogs */}
          <div className="side-blogs">
            {blogs.slice(1).map((blog) => (
              <div className="side-blog" key={blog.id}>
                <img src={blog.img} alt="blog" />

                <div className="side-content">
                  <span>{blog.date}</span>
                  <h4>{blog.title}</h4>
                  <Link href="#">Read →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
