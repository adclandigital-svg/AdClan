"use client";
import "./blog.css";

export default function BlogContent() {
  return (
    <section className="blog-wrapper">
      <div className="blog-layout">

        {/* TABLE OF CONTENT */}

        <aside className="blog-toc">
          <h4>Table of Contents</h4>

          <ul>
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#communication">Adclan Media : Redefining Corporate Communication</a></li>
            <li><a href="#realestate">Adclan Media Approach to Real Estate Media Engagement</a></li>
            <li><a href="#interview">Elevating Brand Presence through High-Profile Interviews</a></li>
            <li><a href="#solutions">Pioneering Media Solutions for the Real Estate Sector</a></li>
            <li><a href="#future">Future of Media and Real Estate Partnerships</a></li>
            <li><a href="#conclusion">Conclusion</a></li>
          </ul>
        </aside>

        {/* BLOG CONTENT */}

        <article className="blog-content">

          <h1>
            Adclan Media Organizes Galaxy Group Interview
          </h1>

          <p id="introduction">
            In this most recent call on 4 October 2024 Adclan Media Services Private Limited,
            famous for its original media strategies and successful advertising campaigns,
            arranged an exclusive scoop for Galaxy Group / Sawasdee Group.
          </p>

          <p>
            The energetic RJ Saatvik Arora entirely hosted the event together with the
            Galaxy Group upper management including Mr. Sheetal Kumar Agrawalla,
            Managing Director of Galaxy Group / Sawasdee Group.
          </p>

          <img
            src="https://adclan.in/wp-content/uploads/2024/10/sdfaa.jpg"
            alt="Adclan Media owner Sandeep Dubey with Sheetal Kumar Agrawalla"
            className="blog-image"
          />

          {/* SECTION */}

          <h2 id="communication">
            Adclan Media : Redefining Corporate Communication
          </h2>

          <p>
            One prominent reason why this interview was successful can be attributed to
            Adclan Media’s content creation capabilities. As one of the top-notch media
            services providers, Adclan specializes in various industries like real estate,
            reaching out to multiple audiences with the right message.
          </p>

          <p>
            Such competencies allow them to combine the art of storytelling and addressing
            business aspects, which is why they conducted this interview with Galaxy Group.
          </p>

          {/* SECTION */}

          <h2 id="realestate">
            Adclan Media Approach to Real Estate Media Engagement
          </h2>

          <p>
            One distinguishing feature of Adclan Media is the industry expertise in the
            sectors it operates, notably the real estate sector.
          </p>

          <p>
            In the case of the Galaxy Group, Adclan created an interview scenario where
            Sawasdee Group projects were highlighted while also providing insights about
            real estate trends in Delhi NCR.
          </p>

          <img
            src="https://adclan.in/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-07-at-10.20.01-AM-1.jpeg"
            alt="Sheetal Kumar Agrawalla with RJ Saatvik Arora"
            className="blog-image"
          />

          {/* SECTION */}

          <h2 id="interview">
            Elevating Brand Presence through High-Profile Interviews
          </h2>

          <p>
            Adclan’s decision to let RJ Saatvik Arora host the interview demonstrates their
            approach to connecting brands with credible media personalities.
          </p>

          <p>
            His engaging questioning style made the discussion informative and interesting,
            helping audiences understand the vision of Galaxy Group and the evolving
            real estate market.
          </p>

          {/* SECTION */}

          <h2 id="solutions">
            Pioneering Media Solutions for the Real Estate Sector
          </h2>

          <p>
            One key reason why Adclan Media stands out is its ability to provide
            industry-specific media solutions.
          </p>

          <p>
            For the real estate sector, Adclan produces content that not only promotes
            projects but also educates investors and buyers about market opportunities.
          </p>

          {/* SECTION */}

          <h2 id="future">
            Future of Media and Real Estate Partnerships
          </h2>

          <p>
            As the real estate market in Delhi NCR continues to evolve, strategic media
            partnerships will play a crucial role.
          </p>

          <p>
            Adclan’s creative approach and market intelligence help brands connect with
            audiences through meaningful communication and storytelling.
          </p>

          {/* SECTION */}

          <h2 id="conclusion">Conclusion</h2>

          <p>
            Real estate companies in Delhi NCR are gaining momentum through strategic
            media collaborations with Adclan.
          </p>

          <p>
            This interview with Galaxy Group demonstrates how Adclan Media is transforming
            corporate communication and building stronger brand narratives in the
            Indian real estate industry.
          </p>

        </article>
      </div>
    </section>
  );
}