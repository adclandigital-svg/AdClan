import Link from "next/link";
import "./terms.css";

export const metadata = {
  title: "Terms and Conditions | Adclan Digital",
  description:
    "Terms and Conditions of Adclan Digital – Digital Marketing Agency.",
  keywords:
    "terms and conditions, adclan digital, website terms, user agreement",
  authors: [{ name: "Adclan Digital" }],

  openGraph: {
    title: "Terms and Conditions | Adclan Digital",
    description: "Read the Terms and Conditions of Adclan Digital.",
    url: "https://adclan.in/terms-and-conditions",
    images: [
      {
        url: "/adclan-logo-1.png",
      },
    ],
  },
};

export default function TermsPage() {
  return (
    <div className="terms-page">
      <div className="terms-container">
        <h2>Interpretation and Definitions</h2>

        <h3>Interpretation</h3>
        <p>
          Interpretation The words for which the initial letter is capitalized
          have meanings defined under the following conditions. These
          definitions shall have the same meaning regardless of whether they
          appear in singular or plural form.
        </p>

        <h3>Definitions</h3>
        <p>Definitions For the purposes of these Terms and Conditions:</p>

        <ul>
          <li>
            Affiliate: An entity that controls, is controlled by, or is under
            common control with a party.
          </li>
          <li>Country: Delhi, India.</li>
          <li>Company: Adclan Media, D-7 and 8, Second Floor.</li>
          <li>
            Device: Any device that can access the Service, such as a computer,
            phone, or tablet.
          </li>
          <li>Service: Refers to the Website.</li>
          <li>
            Terms and Conditions: These Terms that form the agreement between
            You and the Company.
          </li>
          <li>
            Third-Party Social Media Service: Services or content provided by
            third parties.
          </li>
          <li>
            Website: Adclan, accessible at{" "}
            <Link href="https://adclan.in">https://adclan.in</Link>.
          </li>
          <li>You: The individual accessing or using the Service.</li>
        </ul>

        <h2>Acknowledgment</h2>
        <p>
          Acknowledgment By accessing or using the Service, You agree to be
          bound by these Terms and Conditions. If You disagree with any part of
          these Terms, You may not access the Service. You must be at least 18
          years old to use the Service. Your use of the Service is also
          conditioned upon Your acceptance of and compliance with our Privacy
          Policy.
        </p>

        <h2>Links to Other Websites</h2>
        <p>
          Links to Other Websites Our Service may contain links to third-party
          websites or services that are not owned or controlled by the Company.
          The Company has no control over, and assumes no responsibility for,
          the content, privacy policies, or practices of any third-party
          websites or services. We strongly advise You to read the terms and
          privacy policies of any third-party websites or services that You
          visit.
        </p>

        <h2>Termination</h2>
        <p>
          Termination We may terminate or suspend Your access immediately,
          without prior notice or liability, for any reason whatsoever,
          including, without limitation, if You breach these Terms. Upon
          termination, Your right to use the Service will cease immediately.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          Limitation of Liability The Company’s total liability, and that of its
          suppliers, shall be limited to the amount actually paid by You through
          the Service, or 100 USD if You have not made any purchases. The
          Company shall not be liable for any special, incidental, indirect, or
          consequential damages whatsoever, including, without limitation, loss
          of profits, data, or business interruption.
        </p>

        <h2>"AS IS" and "AS AVAILABLE" Disclaimer</h2>
        <p>
          "AS IS" and "AS AVAILABLE" Disclaimer The Service is provided to You
          "AS IS" and "AS AVAILABLE" and with all faults and defects without
          warranty of any kind. The Company makes no warranties, whether express
          or implied, regarding the Service, including, but not limited to,
          implied warranties of merchantability, fitness for a particular
          purpose, or non-infringement. The Company does not guarantee that the
          Service will meet Your requirements, be uninterrupted, secure, or
          error-free, or that the Service is free of viruses or other harmful
          components. Some jurisdictions do not allow the exclusion of certain
          warranties or limitations, so some of the above limitations may not
          apply to You.
        </p>

        <h2>Governing Law</h2>
        <p>
          Governing Law The laws of the Country, excluding its conflict-of-law
          rules, shall govern these Terms and Your use of the Service. Your use
          of the Service may also be subject to other local, state, national, or
          international laws.
        </p>

        <h2>Disputes Resolution</h2>
        <p>
          Disputes Resolution If You have any concerns or disputes about the
          Service, You agree to first attempt to resolve the dispute informally
          by contacting the Company. If You are a European Union consumer, You
          will benefit from any mandatory provisions of the law of the country
          in which You reside. United States legal compliance requirements may
          also apply.
        </p>

        <h2>Severability and Waiver</h2>
        <p>
          Severability and Waiver If any provision of these Terms is held to be
          unenforceable or invalid, such provision shall be changed and
          interpreted to accomplish the objectives of such provision to the
          greatest extent possible under applicable law, and the remaining
          provisions shall continue in full force and effect. The failure to
          exercise a right or to require performance of an obligation under
          these Terms shall not affect a party’s ability to exercise such right
          or require such performance at any time thereafter, nor shall a waiver
          of a breach constitute a waiver of any subsequent breach.
        </p>

        <h2>Translation Interpretation</h2>
        <p>
          Translation Interpretation These Terms and Conditions may have been
          translated. In the event of a dispute, the original English text shall
          prevail.
        </p>

        <h2>Changes to These Terms and Conditions</h2>
        <p>
          Changes to These Terms and Conditions We reserve the right, at our
          sole discretion, to modify or replace these Terms at any time. If a
          revision is material, we will provide at least 30 days’ notice prior
          to any new terms taking effect. By continuing to access or use our
          Service after those revisions become effective, You agree to be bound
          by the revised terms.
        </p>

        <h2>Contact Us</h2>
        <p>
          Contact Us Email:{" "}
          <Link href="mailto:info@adclan.in">info@adclan.in</Link>
          <br />
          Contact Page:{" "}
          <Link href="https://adclan.in/contact/">
            https://adclan.in/contact/
          </Link>
        </p>
      </div>
    </div>
  );
}
