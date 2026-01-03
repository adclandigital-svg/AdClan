import "./AboutFounderSingle.css";

export default function AboutFounderSingle() {
  const founder = {
    name: "Sandeep Dubey",
    role: "Co-Founder & CEO",
    img: "https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?w=1480",
    description:
      "Visionary leader with expertise in brand strategy and digital innovation. With over 15 years of experience, John has helped brands find clarity, build strong identities, and scale with purpose. He believes creativity must be rooted in strategy, and leadership begins with listening, learning, and evolving constantly.",
  };

  return (
    <section className="about-founder">
      <div className="founder-wrap">
        <div className="founder-img">
          <img src={founder.img} alt={founder.name} />
        </div>

        <div className="founder-content">
          <span className="founder-role">{founder.role}</span>
          <h2 className="founder-name">{founder.name}</h2>
          <p className="founder-desc">{founder.description}</p>
        </div>
      </div>
    </section>
  );
}
