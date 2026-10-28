import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Products — Buildwyn",
  description: "Buildwyn is building small SaaS automation tools for teams. Join the early-access list.",
  url: "https://buildwyn.com/products",
});

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Products</p>
          <h1>Our own software, in development</h1>
          <p className="lead">Client work shows us the same problems again and again. We are turning the most common ones into small, affordable SaaS tools.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap grid g2" style={{ alignItems: "start" }}>
          <div className="card">
            <span className="tag">Coming soon</span>
            <h3>Automation tools for small teams</h3>
            <p>Simple software that takes repetitive admin work off small teams: collecting information, moving it between apps and keeping everyone informed.</p>
            <ul className="checks">
              <li>Built for teams without a developer</li>
              <li>Works with the tools you already use</li>
              <li>Simple monthly pricing</li>
            </ul>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <h2 style={{ fontSize: "32px" }}>Get early access</h2>
            <p className="muted">Join the list and we will email you when the first product opens for early access. No spam: only product news.</p>
            <p>
              <Link href="/contact?interest=products" className="btn btn-primary">Join the early-access list</Link>
            </p>
            <p className="form-note">Have a problem you would like a product to solve? Tell us; it may become the next one.</p>
          </div>
        </div>
      </section>
      <section className="cta-band alt">
        <div className="wrap">
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <h2>Need something built now?</h2>
            <p className="muted">Our team takes on custom projects while our products are in development.</p>
          </div>
          <div className="ctas">
            <Link href="/contact" className="btn btn-primary">Book a free scoping call</Link>
            <a href="mailto:hello@buildwyn.com" className="btn">Email us</a>
          </div>
        </div>
      </section>
    </>
  );
}
