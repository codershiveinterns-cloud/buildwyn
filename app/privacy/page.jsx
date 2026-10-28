import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy — Buildwyn LLC",
  description: "How Buildwyn LLC collects and uses personal information.",
  url: "https://buildwyn.com/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p className="lead">Last updated: 28 October 2026</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="prose">
            <p>This Privacy Policy explains how Buildwyn LLC ("Buildwyn", "we", "us") collects and uses personal information when you visit buildwyn.com or contact us. Buildwyn LLC is a Wyoming limited liability company with its registered office at 30 N Gould St, Ste R, Sheridan, WY 82801, USA.</p>
            <h2>Information we collect</h2>
            <ul>
              <li>
                <strong>Information you send us:</strong>
                {" "}when you email us or use the contact form, we receive your name, email address, company name and the details you choose to share about your project.
              </li>
              <li>
                <strong>Client project information:</strong>
                {" "}if you become a client, we process the information needed to deliver the agreed services, under the terms of our agreement with you.
              </li>
              <li>
                <strong>Technical information:</strong>
                {" "}our hosting provider may process basic technical data, such as IP address and browser type, to deliver and secure the website. Fonts are loaded from Google Fonts, which receives your IP address when the page loads.
              </li>
            </ul>
            <p>We do not use advertising cookies or tracking pixels, and we do not sell personal information.</p>
            <h2>How we use information</h2>
            <ul>
              <li>To reply to your enquiry and discuss a potential project.</li>
              <li>To provide, invoice and support services we have agreed to deliver.</li>
              <li>To send product news, only if you asked to join our early-access list. You can unsubscribe at any time.</li>
              <li>To meet legal, tax and accounting obligations.</li>
            </ul>
            <h2>Sharing</h2>
            <p>We share information only with service providers that help us run our business (for example, email, hosting and accounting providers), when required by law, or with your consent. These providers may store data outside your country, including in the United States and India.</p>
            <h2>Retention</h2>
            <p>We keep enquiry emails for up to 24 months, and client and billing records for as long as required for legal and tax purposes. You can ask us to delete information we no longer need.</p>
            <h2>Your rights</h2>
            <p>
              You can ask us to access, correct or delete your personal information, or to stop sending you product news, by emailing{" "}
              <a href="mailto:hello@buildwyn.com">hello@buildwyn.com</a>
              . Depending on where you live, you may have additional rights under local law.
            </p>
            <h2>Security</h2>
            <p>We use reasonable technical and organisational measures to protect information, including access controls and encrypted connections. No method of transmission or storage is completely secure.</p>
            <h2>Children</h2>
            <p>Our services are intended for businesses and are not directed to children under 16.</p>
            <h2>Changes</h2>
            <p>We may update this policy. The "Last updated" date shows when it was last changed.</p>
            <h2>Contact</h2>
            <p>
              Buildwyn LLC · 30 N Gould St, Ste R, Sheridan, WY 82801, USA ·{" "}
              <a href="mailto:hello@buildwyn.com">hello@buildwyn.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
