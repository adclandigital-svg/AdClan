import { blogs } from "@/data/blogs";
import "./blog-detail.css";

export default async function BlogDetail({ params }) {
  const { slug } = await params; // ✅ unwrap params

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <p style={{ padding: "4rem" }}>Blog not found</p>;
  }

  return (
    <section className="blog-detail">
      <video
        src={blog.video}
        controls
        playsInline
        autoPlay
        loop
        className="blog-detail-video"
      />

      <div className="blog-detail-content">
        <span>{blog.date}</span>
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
      </div>
    </section>
  );
}
