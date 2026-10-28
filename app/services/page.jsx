import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Services — Buildwyn",
  description: "Custom web applications, workflow automation, AI-enabled tools, SaaS product development and maintenance, with fixed-scope or monthly engagements.",
  url: "https://buildwyn.com/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Services</p>
          <h1>Software that fits how your business works</h1>
          <p className="lead">From a single automation to a full SaaS product, every engagement starts with a written scope and ends with code and accounts you own.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <article className="service" id="web-applications" style={{ scrollMarginTop: "90px" }}>
            <div className="meta">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="4" width="18" height="16" />
                <path d="M3 9h18M8 14l2 2-2 2M12 18h4" />
              </svg>
              <h2 style={{ fontSize: "32px" }}>Custom web applications</h2>
              <p className="muted">Internal tools, client portals and dashboards built on modern, maintainable stacks, from first wireframe to production deploy.</p>
              <p>
                <Link href="/contact?service=web-applications" className="btn btn-sm">Discuss this service</Link>
              </p>
            </div>
            <div className="body">
              <div className="grid g2" style={{ gap: "28px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <h4>Typical projects</h4>
                  <ul className="checks">
                    <li>Client and customer portals</li>
                    <li>Internal admin tools and dashboards</li>
                    <li>Booking, ordering and request systems</li>
                    <li>Integrations with the APIs you already use</li>
                  </ul>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <h4>What you receive</h4>
                  <ul className="checks">
                    <li>Clickable prototype and agreed scope</li>
                    <li>Production application, deployed to your accounts</li>
                    <li>Source code in your repository</li>
                    <li>Setup and handover documentation</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
          <article className="service" id="automation" style={{ scrollMarginTop: "90px" }}>
            <div className="meta">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="6" cy="6" r="2.5" />
                <circle cx="18" cy="12" r="2.5" />
                <circle cx="6" cy="18" r="2.5" />
                <path d="M8.5 6h4l3 6M8.5 18h4l3-6" />
              </svg>
              <h2 style={{ fontSize: "32px" }}>Workflow automation</h2>
              <p className="muted">Connect the tools you already use, remove copy-paste work and replace fragile spreadsheets with reliable, logged processes.</p>
              <p>
                <Link href="/contact?service=automation" className="btn btn-sm">Discuss this service</Link>
              </p>
            </div>
            <div className="body">
              <div className="grid g2" style={{ gap: "28px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <h4>Typical projects</h4>
                  <ul className="checks">
                    <li>Form-to-CRM and form-to-sheet pipelines</li>
                    <li>Automated reports and email notifications</li>
                    <li>Data sync between business apps</li>
                    <li>Scheduled jobs with error alerts</li>
                  </ul>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <h4>What you receive</h4>
                  <ul className="checks">
                    <li>Map of the current and automated process</li>
                    <li>Working automations with logging</li>
                    <li>Run-book for what to do when something fails</li>
                    <li>Access and credentials kept in your accounts</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
          <article className="service" id="ai-tools" style={{ scrollMarginTop: "90px" }}>
            <div className="meta">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
                <rect x="7" y="7" width="10" height="10" />
                <path d="M10 12h4M12 10v4" />
              </svg>
              <h2 style={{ fontSize: "32px" }}>AI-enabled tools</h2>
              <p className="muted">Practical AI features with clear limits and human review built in: document processing, search over your data, drafting assistants.</p>
              <p><Link href="/contact?service=ai-tools" className="btn btn-sm">Discuss this service</Link></p>
            </div>
            <div className="body">
              <div className="grid g2" style={{ gap: "28px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <h4>Typical projects</h4>
                  <ul className="checks">
                    <li>Assistants that answer from your own documents</li>
                    <li>Extracting data from invoices, forms and PDFs</li>
                    <li>Drafting and summarising emails or reports</li>
                    <li>Classifying and routing incoming requests</li>
                  </ul>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <h4>What you receive</h4>
                  <ul className="checks">
                    <li>A defined use case with success criteria</li>
                    <li>Prototype tested on your real examples</li>
                    <li>Review steps where a person checks the output</li>
                    <li>Notes on cost, limits and data handling</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
          <article className="service" id="saas" style={{ scrollMarginTop: "90px" }}>
            <div className="meta">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 7l8-4 8 4-8 4-8-4z" />
                <path d="M4 12l8 4 8-4M4 17l8 4 8-4" />
              </svg>
              <h2 style={{ fontSize: "32px" }}>SaaS product development</h2>
              <p className="muted">MVPs for founders: user accounts, billing-ready architecture and an admin panel, scoped to launch fast and grow without a rewrite.</p>
              <p><Link href="/contact?service=saas" className="btn btn-sm">Discuss this service</Link></p>
            </div>
            <div className="body">
              <div className="grid g2" style={{ gap: "28px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <h4>Typical projects</h4>
                  <ul className="checks">
                    <li>User sign-up, login and roles</li>
                    <li>Subscription-ready billing integration</li>
                    <li>Admin panel and basic analytics</li>
                    <li>Landing page and onboarding flow</li>
                  </ul>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <h4>What you receive</h4>
                  <ul className="checks">
                    <li>A launch-ready MVP</li>
                    <li>Hosting and deployment pipeline</li>
                    <li>Roadmap for the next releases</li>
                    <li>Full ownership of code and accounts</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
          <article className="service" id="support" style={{ scrollMarginTop: "90px" }}>
            <div className="meta">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 13a8 8 0 0116 0" />
                <rect x="3" y="13" width="4" height="6" />
                <rect x="17" y="13" width="4" height="6" />
              </svg>
              <h2 style={{ fontSize: "32px" }}>{"Maintenance & support"}</h2>
              <p className="muted">Keep what we built (or what you already have) running: updates, fixes, monitoring and small improvements on a monthly plan.</p>
              <p><Link href="/contact?service=support" className="btn btn-sm">Discuss this service</Link></p>
            </div>
            <div className="body">
              <div className="grid g2" style={{ gap: "28px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <h4>Typical projects</h4>
                  <ul className="checks">
                    <li>Dependency and security updates</li>
                    <li>Bug fixes and small feature requests</li>
                    <li>Uptime and error monitoring</li>
                    <li>Monthly summary of work done</li>
                  </ul>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <h4>What you receive</h4>
                  <ul className="checks">
                    <li>Agreed monthly hours</li>
                    <li>Response times in writing</li>
                    <li>Shared task list you can see</li>
                    <li>Cancel any month</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Engagement models</p>
            <h2>Two simple ways to work together</h2>
          </div>
          <div className="grid g2">
            <div className="card">
              <span className="tag">Fixed scope</span>
              <h3>Project</h3>
              <p>A defined deliverable with milestones and a fixed price agreed in writing before work starts. Best for new applications, automations and MVPs.</p>
              <ul className="checks">
                <li>Written proposal and timeline</li>
                <li>Payment split across milestones</li>
                <li>Change requests quoted separately</li>
              </ul>
            </div>
            <div className="card">
              <span className="tag">Monthly</span>
              <h3>Retainer</h3>
              <p>A set number of hours each month for ongoing development, improvements and support. Best for evolving products and maintenance.</p>
              <ul className="checks">
                <li>Agreed monthly hours</li>
                <li>Shared priority list</li>
                <li>Cancel any month with notice</li>
              </ul>
            </div>
          </div>
          <p className="form-note" style={{ marginTop: "20px" }}>Pricing depends on scope and is confirmed in your written proposal after the free scoping call.</p>
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
