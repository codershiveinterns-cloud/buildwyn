import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Buildwyn — Custom Software, Automation & AI Tools",
  description: "Buildwyn is a software studio building custom web applications, workflow automation and AI-powered tools for growing businesses. Clear scope, weekly delivery, code you own.",
  url: "https://buildwyn.com/",
});

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-in" style={{ "--i": "0" }}>Software studio for growing businesses</p>
            <h1 className="hero-in" style={{ "--i": "1" }}>
              We build the software.
              <br />
              Your business wins.
            </h1>
            <p className="lead hero-in" style={{ "--i": "2" }}>Buildwyn designs and builds web applications, workflow automation and AI-powered tools: scoped clearly, delivered in weekly milestones, and handed over with code you own.</p>
            <div className="ctas hero-in" style={{ "--i": "3" }}>
              <Link href="/contact" className="btn btn-primary">Book a free scoping call</Link>
              <Link href="/services" className="btn">See what we build</Link>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <svg viewBox="0 0 376 376" className="assemble">
              <rect className="frame" x="16" y="16" width="344" height="344" />
              <rect className="blk" x="44" y="44" width="80" height="80" style={{ "--dx": "-120px", "--dy": "-90px", "--r": "-24deg", "--i": "1", transformOrigin: "84px 84px" }} />
              <rect className="blk" x="140" y="44" width="80" height="80" style={{ "--dx": "10px", "--dy": "-150px", "--r": "18deg", "--i": "5", transformOrigin: "180px 84px" }} />
              <rect className="blk" x="236" y="44" width="80" height="80" style={{ "--dx": "130px", "--dy": "-80px", "--r": "30deg", "--i": "2", transformOrigin: "276px 84px" }} />
              <rect className="blk" x="44" y="140" width="80" height="80" style={{ "--dx": "-150px", "--dy": "20px", "--r": "-12deg", "--i": "6", transformOrigin: "84px 180px" }} />
              <rect className="blk core" x="140" y="140" width="80" height="80" style={{ "--dx": "0px", "--dy": "0px", "--r": "0deg", "--i": "0", transformOrigin: "180px 180px" }} />
              <rect className="blk" x="236" y="140" width="80" height="80" style={{ "--dx": "150px", "--dy": "10px", "--r": "16deg", "--i": "7", transformOrigin: "276px 180px" }} />
              <rect className="blk" x="44" y="236" width="80" height="80" style={{ "--dx": "-110px", "--dy": "120px", "--r": "22deg", "--i": "3", transformOrigin: "84px 276px" }} />
              <rect className="blk" x="140" y="236" width="80" height="80" style={{ "--dx": "20px", "--dy": "150px", "--r": "-20deg", "--i": "8", transformOrigin: "180px 276px" }} />
              <rect className="blk" x="236" y="236" width="80" height="80" style={{ "--dx": "120px", "--dy": "110px", "--r": "-28deg", "--i": "4", transformOrigin: "276px 276px" }} />
            </svg>
          </div>
        </div>
      </section>
      <section className="alt section-tight" aria-label="At a glance">
        <div className="wrap facts">
          <div className="fact">
            <span className="k">Engagement</span>
            <span className="v">Fixed-scope or monthly</span>
          </div>
          <div className="fact">
            <span className="k">Updates</span>
            <span className="v">Working demo every week</span>
          </div>
          <div className="fact">
            <span className="k">Ownership</span>
            <span className="v">{"You own the code & accounts"}</span>
          </div>
          <div className="fact">
            <span className="k">Time zones</span>
            <span className="v">US overlap hours available</span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Services</p>
            <h2>What we build</h2>
            <p className="lead">Four ways we help businesses replace manual work with software that fits how they actually operate.</p>
          </div>
          <div className="tiles">
            <div className="tile">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="4" width="18" height="16" />
                <path d="M3 9h18M8 14l2 2-2 2M12 18h4" />
              </svg>
              <h3>Custom web applications</h3>
              <p>Internal tools, client portals and dashboards built on modern, maintainable stacks, from first wireframe to production deploy.</p>
              <Link className="more" href="/services#web-applications">Learn more</Link>
            </div>
            <div className="tile">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="6" cy="6" r="2.5" />
                <circle cx="18" cy="12" r="2.5" />
                <circle cx="6" cy="18" r="2.5" />
                <path d="M8.5 6h4l3 6M8.5 18h4l3-6" />
              </svg>
              <h3>Workflow automation</h3>
              <p>Connect the tools you already use, remove copy-paste work and replace fragile spreadsheets with reliable, logged processes.</p>
              <Link className="more" href="/services#automation">Learn more</Link>
            </div>
            <div className="tile">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
                <rect x="7" y="7" width="10" height="10" />
                <path d="M10 12h4M12 10v4" />
              </svg>
              <h3>AI-enabled tools</h3>
              <p>Practical AI features with clear limits and human review built in: document processing, search over your data, drafting assistants.</p>
              <Link className="more" href="/services#ai-tools">Learn more</Link>
            </div>
            <div className="tile">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 7l8-4 8 4-8 4-8-4z" />
                <path d="M4 12l8 4 8-4M4 17l8 4 8-4" />
              </svg>
              <h3>SaaS product development</h3>
              <p>MVPs for founders: user accounts, billing-ready architecture and an admin panel, scoped to launch fast and grow without a rewrite.</p>
              <Link className="more" href="/services#saas">Learn more</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">How we work</p>
            <h2>Four steps, no surprises</h2>
          </div>
          <ol className="steps">
            <li className="step">
              <span className="k">Step 1</span>
              <h3>Scoping call</h3>
              <p>A free 30-minute call to understand the problem, users and constraints.</p>
            </li>
            <li className="step">
              <span className="k">Step 2</span>
              <h3>Written proposal</h3>
              <p>Scope, milestones, timeline and a fixed price or monthly rate, in plain language.</p>
            </li>
            <li className="step">
              <span className="k">Step 3</span>
              <h3>Weekly builds</h3>
              <p>A working demo every week so you can test, react and redirect early.</p>
            </li>
            <li className="step">
              <span className="k">Step 4</span>
              <h3>{"Handover & support"}</h3>
              <p>Code, documentation and accounts transferred to you, with optional maintenance.</p>
            </li>
          </ol>
          <p style={{ marginTop: "36px" }}>
            <Link href="/process" className="btn btn-light">See the full process</Link>
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Why Buildwyn</p>
            <h2>Built to be handed over, not to lock you in</h2>
          </div>
          <div className="grid g4">
            <div className="card">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="8" cy="15" r="4" />
                <path d="M11 12l9-9M17 6l3 3M15 8l2 2" />
              </svg>
              <h3>You own everything</h3>
              <p>Code lives in your repository and services run in your accounts from day one.</p>
            </div>
            <div className="card">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              <h3>Weekly progress</h3>
              <p>A working demo every week, so feedback happens early and nothing is a surprise.</p>
            </div>
            <div className="card">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 3h9l4 4v14H6z" />
                <path d="M15 3v4h4M9 12h7M9 16h7" />
              </svg>
              <h3>Clear, written scope</h3>
              <p>Every engagement starts with a written proposal: what is included, what is not, and the price.</p>
            </div>
            <div className="card">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <h3>Careful with data</h3>
              <p>Least-privilege access, credentials kept in your systems, and NDAs signed on request.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap grid g2" style={{ alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p className="eyebrow">Products</p>
            <h2>Our own software, in development</h2>
            <p className="lead">Alongside client work, Buildwyn is building small SaaS tools for teams that run on automation.</p>
            <p><Link href="/products" className="btn">About our products</Link></p>
          </div>
          <div className="card">
            <span className="tag">Coming soon</span>
            <h3>Automation tools for small teams</h3>
            <p>Simple, affordable software that takes repetitive admin work off your plate. Early access opens to our mailing list first.</p>
            <Link href="/contact?interest=products" style={{ fontWeight: "600" }}>Get notified</Link>
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
