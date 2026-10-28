import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About — Buildwyn LLC",
  description: "Buildwyn LLC is a Wyoming software company founded by Devendra Singh Sankhla, building web applications, automation and AI tools.",
  url: "https://buildwyn.com/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">About</p>
          <h1>A small software studio that builds for the long run</h1>
          <p className="lead">Buildwyn helps growing businesses replace manual work with reliable software: web applications, automation and practical AI tools.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap grid g2" style={{ alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <h2 style={{ fontSize: "32px" }}>Who we are</h2>
            <p className="muted">
              Buildwyn LLC is a US software company registered in the State of Wyoming. It was founded in 2026 by{" "}
              <strong style={{ color: "var(--ink)" }}>Devendra Singh Sankhla</strong>
              , who leads every project personally.
            </p>
            <p className="muted">Our development work is done remotely from India, with working hours that overlap the US business day. That lets us offer senior attention, fast turnaround and fair pricing to clients in the US and worldwide.</p>
            <p className="muted">The name says what we do: we build the software, and your business wins.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <h2 style={{ fontSize: "32px" }}>Company details</h2>
            <dl className="details">
              <dt>Legal name</dt>
              <dd>Buildwyn LLC</dd>
              <dt>Entity type</dt>
              <dd>Limited liability company (LLC)</dd>
              <dt>Registered in</dt>
              <dd>State of Wyoming, USA</dd>
              <dt>Filing ID</dt>
              <dd>2026-002117187</dd>
              <dt>Formed</dt>
              <dd>October 2026</dd>
              <dt>Registered office</dt>
              <dd>30 N Gould St, Ste R, Sheridan, WY 82801, USA</dd>
              <dt>Founder</dt>
              <dd>Devendra Singh Sankhla</dd>
              <dt>Email</dt>
              <dd><a href="mailto:hello@buildwyn.com">hello@buildwyn.com</a></dd>
            </dl>
            <p className="form-note">
              Registration can be verified on the{" "}
              <a href="https://wyobiz.wyo.gov/Business/FilingSearch.aspx" rel="noopener" target="_blank">Wyoming Secretary of State business search</a>
              .
            </p>
          </div>
        </div>
      </section>
      <section className="section alt" id="founder">
        <div className="wrap founder">
          <div className="founder-mark" aria-hidden="true">
            <span className="blk" />
            <span className="initials">DS</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <p className="eyebrow">Founder</p>
            <h2 style={{ fontSize: "32px" }}>Devendra Singh Sankhla</h2>
            <p className="founder-role">Founder, Buildwyn LLC</p>
            <p className="muted">Devendra founded Buildwyn LLC in 2026 and leads every project personally. When you work with Buildwyn, you talk directly to the person responsible for your software, not an account manager.</p>
            <p className="muted">Every engagement follows the same commitments: a written scope before work starts, a working demo every week, and code and accounts that belong to you.</p>
            <div className="ctas">
              <Link href="/contact" className="btn btn-dark btn-sm">Talk to Devendra</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Our principles</p>
            <h2>How we treat every project</h2>
          </div>
          <div className="grid g4">
            <div className="card">
              <h3>Honest scope</h3>
              <p>We say what we will build, what we will not, and what it will cost before work starts.</p>
            </div>
            <div className="card">
              <h3>Your ownership</h3>
              <p>Your code, your accounts, your data. You can take the work anywhere.</p>
            </div>
            <div className="card">
              <h3>Simple over clever</h3>
              <p>We choose maintainable, well-known tools so others can work on your software later.</p>
            </div>
            <div className="card">
              <h3>Visible progress</h3>
              <p>Weekly demos and written updates replace guesswork and long silences.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-band alt">
        <div className="wrap">
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <h2>Have a project in mind?</h2>
            <p className="muted">Tell us what you need built. We reply within one business day.</p>
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
