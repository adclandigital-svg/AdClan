import Link from "next/link";
import "./terms.css";

export const metadata = {
  title: "Terms and Conditions | Adclan Digital",
  description: "Terms and Conditions of Adclan Digital – Digital Marketing Agency",
};

export default function TermsPage() {
  return (
    <div className="terms-page">
      <div className="terms-container">
        <h1>Terms and Conditions</h1>
        <p className="updated">Last updated: September 11, 2024</p>

        <p>Please read these terms and conditions carefully before using Our Service.</p>

        <h2>Interpretation and Definitions</h2>
        <h3>Interpretation</h3>
        <p>
          The words of which the initial letter is capitalized have meanings defined under the
          following conditions. The following definitions shall have the same meaning regardless
          of whether they appear in singular or plural.
        </p>

        <h3>Definitions</h3>
        <p>For the purposes of these Terms and Conditions:</p>
        <ul>
          <li>Affiliate: an entity that controls, is controlled by or is under common control with a party.</li>
          <li>Country: Delhi, India</li>
          <li>Company: Adclan Media, D 7 and 8 Second Floor</li>
          <li>Device: any device that can access the Service such as computer, phone, or tablet</li>
          <li>Service: refers to the Website</li>
          <li>Terms and Conditions: these Terms that form the agreement between You and the Company</li>
          <li>Third-party Social Media Service: services or content provided by third parties</li>
          <li>Website: Adclan, accessible at <Link href="https://adclan.in">https://adclan.in</Link></li>
          <li>You: the individual accessing or using the Service</li>
        </ul>

        <h2>Acknowledgment</h2>
        <p>
          By accessing or using the Service You agree to be bound by these Terms and Conditions.
          If You disagree with any part of these Terms, you may not access the Service. You must be
          over 18 years old. Use of the Service is also conditioned on acceptance of Our Privacy
          Policy.
        </p>

        <h2>Links to Other Websites</h2>
        <p>
          Our Service may contain links to third-party websites or services. We have no control
          over and assume no responsibility for the content, privacy policies, or practices of any
          third-party websites. We strongly advise You to read the terms and privacy policies of any
          third-party sites You visit.
        </p>

        <h2>Termination</h2>
        <p>
          We may terminate or suspend Your access immediately, without prior notice or liability,
          for any reason, including if You breach these Terms. Upon termination, Your right to use
          the Service will cease immediately.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          The Company and suppliers’ liability is limited to the amount paid by You or $100 USD if
          You haven’t purchased anything. The Company is not liable for special, incidental,
          indirect, or consequential damages, including loss of profits, data, or business
          interruption.
        </p>

        <h2>"AS IS" and "AS AVAILABLE" Disclaimer</h2>
        <p>
          The Service is provided "AS IS" and "AS AVAILABLE" without warranty of any kind. We do not
          guarantee the Service will meet Your requirements or be error-free. Viruses or harmful
          components are not guaranteed to be absent. Some jurisdictions may limit these exclusions.
        </p>

        <h2>Governing Law</h2>
        <p>
          The laws of the Country, excluding conflict-of-law rules, govern these Terms and Your use
          of the Service. Local, state, national, or international laws may also apply.
        </p>

        <h2>Disputes Resolution</h2>
        <p>
          You agree to first try to resolve any dispute informally by contacting the Company.
          European Union users will benefit from mandatory provisions of local law. United States
          compliance restrictions apply.
        </p>

        <h2>Severability and Waiver</h2>
        <p>
          If any provision of these Terms is unenforceable, the remaining provisions remain in full
          force. Waiver of a breach does not constitute waiver of subsequent breaches.
        </p>

        <h2>Translation Interpretation</h2>
        <p>
          In case of translation, the original English text shall prevail in disputes.
        </p>

        <h2>Changes to These Terms and Conditions</h2>
        <p>
          We may modify or replace these Terms at any time. Material changes will be notified 30
          days in advance. Continued use after revisions signifies acceptance.
        </p>

        <h2>Contact Us</h2>
        <p>
          Email: <Link href="mailto:info@adclan.in">info@adclan.in</Link>
          <br />
          Contact Page: <Link href="https://adclan.in/contact/">https://adclan.in/contact/</Link>
        </p>
      </div>
    </div>
  );
}
