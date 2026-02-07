import Link from "next/link";
import "./privacy.css";

export const metadata = {
  title: "Privacy Policy | Adclan Digital",
  description: "Privacy Policy of Adclan Digital – Digital Marketing Agency",
};

export default function PrivacyPage() {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p className="updated">Last updated: September 04, 2024</p>

        <p>
          This Privacy Policy describes Our policies and procedures on the collection, use and
          disclosure of Your information when You use the Service and tells You about Your privacy
          rights and how the law protects You.
        </p>

        <p>
          We use Your Personal data to provide and improve the Service. By using the Service, You
          agree to the collection and use of information in accordance with this Privacy Policy.
        </p>

        <h2>Interpretation and Definitions</h2>
        <h3>Interpretation</h3>
        <p>
          The words of which the initial letter is capitalized have meanings defined under the
          following conditions. The following definitions shall have the same meaning regardless
          of whether they appear in singular or in plural.
        </p>

        <h3>Definitions</h3>
        <p>For the purposes of this Privacy Policy:</p>
        <ul>
          <li>Account: a unique account created for You to access our Service or parts of our Service.</li>
          <li>Affiliate: an entity that controls, is controlled by or is under common control with a party.</li>
          <li>Company: Adclan Media, D 7 and 8 Second Floor.</li>
          <li>Cookies: small files placed on Your computer or device containing browsing information.</li>
          <li>Country: Delhi, India</li>
          <li>Device: any device that can access the Service such as computer, phone, tablet.</li>
          <li>Personal Data: any information that relates to an identified or identifiable individual.</li>
          <li>Service: refers to the Website.</li>
          <li>Service Provider: any natural or legal person who processes data on behalf of the Company.</li>
          <li>Usage Data: data collected automatically from use of the Service.</li>
          <li>Website: Adclan, accessible at <Link href="https://adclan.in">https://adclan.in</Link></li>
          <li>You: the individual accessing or using the Service.</li>
        </ul>

        <h2>Collecting and Using Your Personal Data</h2>
        <h3>Types of Data Collected</h3>
        <p>
          While using Our Service, We may ask You to provide certain personally identifiable
          information, such as:
        </p>
        <ul>
          <li>Email address</li>
          <li>First and last name</li>
          <li>Phone number</li>
          <li>Usage Data</li>
        </ul>

        <h3>Usage Data</h3>
        <p>
          Usage Data is collected automatically and may include IP address, browser type, pages
          visited, time spent, unique device identifiers, and diagnostic data.
        </p>

        <h3>Tracking Technologies and Cookies</h3>
        <p>
          We use Cookies, beacons, tags, and scripts to track activity and store information.
          Cookies may be Persistent or Session Cookies.
        </p>

        <ul>
          <li>
            <strong>Necessary / Essential Cookies:</strong> Session cookies for authentication and
            security.
          </li>
          <li>
            <strong>Cookies Policy / Notice Acceptance Cookies:</strong> Persistent cookies to
            remember consent.
          </li>
          <li>
            <strong>Functionality Cookies:</strong> Persistent cookies to remember choices like
            login and language preferences.
          </li>
        </ul>

        <h3>Use of Your Personal Data</h3>
        <p>The Company may use Personal Data for:</p>
        <ul>
          <li>Providing and maintaining the Service</li>
          <li>Managing Your Account</li>
          <li>Performance of a contract</li>
          <li>Contacting You</li>
          <li>Providing news, offers, updates</li>
          <li>Managing Your requests</li>
          <li>Business transfers</li>
          <li>Other purposes like analytics and marketing</li>
        </ul>

        <h3>Sharing Your Personal Data</h3>
        <ul>
          <li>With Service Providers</li>
          <li>During business transfers</li>
          <li>With Affiliates</li>
          <li>With business partners</li>
          <li>With other users if you interact publicly</li>
          <li>With Your consent</li>
        </ul>

        <h3>Retention of Your Personal Data</h3>
        <p>
          Personal Data is retained only as long as necessary for the purposes in this Privacy
          Policy and legal obligations.
        </p>

        <h3>Transfer of Your Personal Data</h3>
        <p>
          Your information may be processed outside of Your jurisdiction. Your submission of
          information constitutes consent to this transfer.
        </p>

        <h3>Delete Your Personal Data</h3>
        <p>
          You may delete or request deletion of your data via Your Account or by contacting Us. Some
          data may be retained for legal obligations.
        </p>

        <h3>Disclosure of Your Personal Data</h3>
        <p>
          The Company may disclose Personal Data in business transactions, law enforcement, or to
          comply with legal obligations.
        </p>

        <h3>Security of Your Personal Data</h3>
        <p>
          We strive to protect Your data, but no method of transmission over the Internet is 100%
          secure.
        </p>

        <h3>Children’s Privacy</h3>
        <p>
          We do not knowingly collect data from anyone under 13. Parental consent is required for
          minors where applicable.
        </p>

        <h3>Links to Other Websites</h3>
        <p>
          We are not responsible for the content or privacy practices of third-party websites.
        </p>

        <h3>Changes to this Privacy Policy</h3>
        <p>
          Changes will be posted on this page. The “Last updated” date will reflect updates.
        </p>

        <h3>Contact Us</h3>
        <p>
          Email: <Link href="mailto:info@adclan.in">info@adclan.in</Link>
          <br />
          Contact Page: <Link href="https://adclan.in/contact/">https://adclan.in/contact/</Link>
        </p>
      </div>
    </div>
  );
}
