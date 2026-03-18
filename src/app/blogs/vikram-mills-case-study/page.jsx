"use client";

import "./blog-detail.css";

export default function BlogPage() {
  return (
    <article className="blog-page">
      <div className="blog-container">

        {/* BLOG HEADER */}
        <header className="blog-header">
          <h1>
            Vikram Mills Case Study: How Adclan Built Brand Awareness Through Radio, Outdoor & Digital
          </h1>

          <div className="blog-meta">
            <span>Adclan Media</span>
            <span>March 2026</span>
            <span>6 min read</span>
          </div>
        </header>

        {/* INTRO */}
        <p>
          Vikram Mills partnered with Adclan to strengthen awareness of its flagship product Chakki Atta
          across key North Indian markets.
        </p>

        <p>
          The objective was simple but powerful — make Vikram Mills visible to everyday consumers where
          they spend the most time: on radio, on the road, and online.
        </p>

        {/* TABLE OF CONTENTS */}
        <div className="toc">
          <h3>Table of Contents</h3>

          <ul>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#client">Client Background</a></li>
            <li><a href="#objectives">Campaign Objectives</a></li>
            <li><a href="#strategy">Adclan Strategy</a></li>
            <li><a href="#radio">Radio Campaign</a></li>
            <li><a href="#outdoor">Outdoor Campaign</a></li>
            <li><a href="#digital">Digital Landing Page</a></li>
            <li><a href="#results">Results & Impact</a></li>
            <li><a href="#why-worked">Why This Campaign Worked</a></li>
            <li><a href="#faq">FAQs</a></li>
          </ul>
        </div>

        {/* OVERVIEW */}
        <h2 id="overview">Overview</h2>

        <p>
          Adclan designed a multi-channel marketing strategy combining radio advertising,
          outdoor media, and digital presence to maximize reach and recall.
        </p>

        {/* CLIENT BACKGROUND */}
        <h2 id="client">Client Background</h2>

        <p>
          Vikram Mills is a food products company offering a range of staples including:
        </p>

        <ul>
          <li>Chakki Atta</li>
          <li>Rice</li>
          <li>Sooji</li>
        </ul>

        <p>
          With growing competition in the FMCG segment, the brand aimed to increase visibility,
          strengthen recall, and reach consumers across multiple cities.
        </p>

        {/* OBJECTIVES */}
        <h2 id="objectives">Campaign Objectives</h2>

        <h3>Primary Objective</h3>
        <p>
          Increase brand awareness for Vikram Mills Chakki Atta across key markets.
        </p>

        <h3>Secondary Objectives</h3>
        <ul>
          <li>Build trust through repeated exposure</li>
          <li>Reach mass audiences via radio and outdoor</li>
          <li>Create a digital presence for product showcase</li>
        </ul>

        {/* STRATEGY */}
        <h2 id="strategy">Adclan Strategy</h2>

        <p>
          Adclan implemented a 360° awareness campaign combining traditional and digital marketing channels.
        </p>

        <ul>
          <li>Mass reach via radio</li>
          <li>High-visibility outdoor placements</li>
          <li>Dedicated digital landing page</li>
        </ul>

        {/* RADIO */}
        <h2 id="radio">Radio Advertising Campaign</h2>

        <p>
          To reach large urban audiences, Adclan launched campaigns across major FM stations.
        </p>

        <h3>Stations Used</h3>
        <ul>
          <li>Radio Mirchi 98.3 FM</li>
          <li>Big FM 92.7</li>
          <li>My FM</li>
        </ul>

        <h3>Cities Targeted</h3>
        <ul>
          <li>Delhi</li>
          <li>Kanpur</li>
          <li>Varanasi</li>
          <li>Jaipur</li>
          <li>Chandigarh</li>
          <li>Jalandhar</li>
          <li>Patiala</li>
        </ul>

        {/* OUTDOOR */}
        <h2 id="outdoor">Outdoor Advertising Campaign</h2>

        <table className="blog-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Details</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Duration</td>
              <td>3 Months</td>
            </tr>
            <tr>
              <td>Locations</td>
              <td>Delhi, Gurgaon</td>
            </tr>
            <tr>
              <td>Format</td>
              <td>Lift Branding</td>
            </tr>
            <tr>
              <td>Investment</td>
              <td>₹2,00,000 / month</td>
            </tr>
          </tbody>
        </table>

        <p>
          Lift branding ensured repeated exposure in residential and commercial spaces,
          increasing recall significantly.
        </p>

        {/* DIGITAL */}
        <h2 id="digital">Digital Landing Page</h2>

        <p>
          Adclan developed a dedicated landing page to showcase Vikram Mills’ products.
        </p>

        <ul>
          <li>Built with HTML, CSS, JavaScript</li>
          <li>Showcases Atta, Rice, Sooji</li>
          <li>Improves digital presence</li>
        </ul>

        {/* RESULTS */}
        <h2 id="results">Results & Campaign Impact</h2>

        <ul>
          <li>Reached audiences across 7 major cities</li>
          <li>Built strong brand awareness</li>
          <li>Improved offline + online visibility</li>
        </ul>

        {/* WHY WORKED */}
        <h2 id="why-worked">Why This Campaign Worked</h2>

        <p>
          The campaign succeeded due to strategic media planning and multi-channel exposure.
        </p>

        <ul>
          <li>High-frequency radio spots</li>
          <li>High-visibility outdoor placements</li>
          <li>Strong digital presence</li>
        </ul>

        {/* FAQ */}
        <h2 id="faq">FAQs</h2>

        <h4>Why was radio chosen for this campaign?</h4>
        <p>
          Radio provides high daily reach and strong local penetration, making it ideal for FMCG awareness.
        </p>

        <h4>What made outdoor advertising effective?</h4>
        <p>
          Lift branding ensures repeated exposure, leading to better recall among urban audiences.
        </p>

        {/* CONCLUSION */}
        <h2>The Road Ahead</h2>

        <p>
          Adclan continues to help brands like Vikram Mills grow through integrated marketing strategies
          that combine offline visibility with digital performance.
        </p>

      </div>
    </article>
  );
}