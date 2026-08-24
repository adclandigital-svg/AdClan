import "./blog.css"

export default function BlogContent() {
  return (
    <section className="blog-wrapper">
      <div className="blog-container1">

        {/* TABLE OF CONTENT + BLOG */}
        <div className="blog-layout">

          {/* Table of Content */}
          <aside className="toc1">
            <h3>Table of Contents</h3>
            <ul>
              <li><a href="#intro">Introduction</a></li>
              <li><a href="#campaign">Campaign Blueprint</a></li>
              <li><a href="#inshorts">Inshorts Digital Campaign</a></li>
              <li><a href="#radio">Radio Excellence</a></li>
              <li><a href="#architecture">Architectural Brilliance</a></li>
              <li><a href="#mastery">Adclan Mastery</a></li>
            </ul>
          </aside>

          {/* BLOG CONTENT */}
          <article className="blog-content">

            <h1 className="blog-title">
              Adclan Media’s Triumph with Ace Hanei: Masterclass in Campaign
            </h1>

            <p id="intro">
              <strong>Ace Hanei :</strong> At Adclan Media we aim at nothing less than
              perfect, delivering campaigns that do not just market but mesmerize
              and help close a sale. This can further be illustrated with our new
              project with the Ace Group the Ace Hanei. Situated in the prime
              Sector 12 Greater Noida, Ace Hanei consists of lavish 3 and 4 BHK
              apartments designed for style and elegance.
            </p>

            <img
              src="/blog/Radio-Advert.webp"
              alt="Ace Hanei Project"
              className="blog-image"
            />

            <h2 id="campaign">Adclan Media's Triumph with Ace Hanei</h2>

            <h3>The Campaign Blueprint</h3>

            <p>
              To do justice to the size of the Ace Hanei, Adclan developed a
              well-planned and executed integrated marketing campaign that combines
              the speed and flexibility of the internet with the mass appeal of
              conventional media.
            </p>

            <p>
              Controlled but directed to give and drive the following: Here is how
              we set about doing it :
            </p>

            <h3 id="inshorts">1. Inshorts Digital Campaign</h3>

            <p>
              We utilized Inshorts’ ROS (Run of Site) and interstitial banners to
              keep project in the open eyes of an active and savvy audience around
              the launch.
            </p>

            <h3 id="radio">2. Radio Excellence</h3>

            <p>
              At the same time, we deployed a wide radio advertisement with the
              leading international Players, Radio Mirchi and Radio City.
            </p>

            <h2 id="architecture">
              Ace Hanei Architectural Brilliance and Modern Conveniences
            </h2>

            <p>
              It is not just a housing project, it is equally an architectural
              innovation that integrates both exquisite aesthetics with utility.
            </p>

            <h2 id="mastery">Adclan Mastery with Ace Hanei</h2>

            <p>
              The success of this campaign is largely due to Adclan’s proficiency in
              developing custom plans that highlight a project’s strongest points.
            </p>

            <p>
              Ace Hanei was able to outperform the competition because of our
              team’s meticulous approach from conception to implementation.
            </p>

          </article>

        </div>
      </div>
    </section>
  );
}