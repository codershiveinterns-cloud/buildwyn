import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact — Buildwyn",
  description: "Tell us about your project. Buildwyn replies within one business day.",
  url: "https://buildwyn.com/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Contact</p>
          <h1>Tell us what you need built</h1>
          <p className="lead">Share a few lines about your project. We reply within one business day with next steps or a time for a free scoping call.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap grid g2" style={{ alignItems: "start", gap: "56px" }}>
          <ContactForm />
          <aside style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div className="card">
              <h3>Email</h3>
              <p>
                <a href="mailto:hello@buildwyn.com" style={{ fontWeight: "600", fontSize: "18px" }}>hello@buildwyn.com</a>
              </p>
              <p>We reply within one business day.</p>
            </div>
            <div className="card">
              <h3>Hours</h3>
              <p>Monday to Friday, with calls available during US business hours by appointment.</p>
            </div>
            <div className="card">
              <h3>Registered office</h3>
              <p>Buildwyn LLC<br />30 N Gould St, Ste R<br />Sheridan, WY 82801<br />USA</p>
              <p className="form-note">For official and legal correspondence. We work remotely and do not receive visitors at this address.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
