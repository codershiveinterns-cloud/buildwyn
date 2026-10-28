import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "How We Work — Buildwyn",
  description: "From a free scoping call to handover: a clear six-step process with weekly demos and written updates.",
  url: "https://buildwyn.com/process",
});

export default function ProcessPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">How we work</p>
          <h1>A clear process from first call to handover</h1>
          <p className="lead">You always know what is being built, when it will be ready and what it costs.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <ol className="timeline">
            <li>
              <span className="when">Step 01 · Day 1</span>
              <div className="what">
                <h3>Free scoping call</h3>
                <p className="muted">A 30-minute video call to understand your goals, users, current tools and constraints. We tell you honestly if software is the right answer.</p>
              </div>
            </li>
            <li>
              <span className="when">Step 02 · Days 2–4</span>
              <div className="what">
                <h3>Written proposal</h3>
                <p className="muted">A short document with the scope, what is excluded, milestones, timeline and either a fixed price or a monthly rate. Nothing starts until you approve it.</p>
              </div>
            </li>
            <li>
              <span className="when">Step 03 · Week 1</span>
              <div className="what">
                <h3>Kick-off and setup</h3>
                <p className="muted">We set up the repository and hosting in your accounts, agree on a communication channel and confirm the first milestone.</p>
              </div>
            </li>
            <li>
              <span className="when">Step 04 · Weekly</span>
              <div className="what">
                <h3>Build and demo</h3>
                <p className="muted">Every week you get a working demo and a short written update: what was done, what is next, and any decisions we need from you.</p>
              </div>
            </li>
            <li>
              <span className="when">Step 05 · Launch</span>
              <div className="what">
                <h3>Testing and launch</h3>
                <p className="muted">We test with your real data and users, fix what comes up, and launch together.</p>
              </div>
            </li>
            <li>
              <span className="when">Step 06 · Handover</span>
              <div className="what">
                <h3>Handover and support</h3>
                <p className="muted">Code, documentation and admin access are transferred to you. Optional monthly support keeps everything updated and running.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Working with an overseas team</p>
            <h2>Built for remote collaboration</h2>
          </div>
          <div className="grid g3">
            <div className="card">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              <h3>US overlap hours</h3>
              <p>Calls and replies scheduled within your business hours, with written updates so nothing depends on a meeting.</p>
            </div>
            <div className="card">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 3h9l4 4v14H6z" />
                <path d="M15 3v4h4M9 12h7M9 16h7" />
              </svg>
              <h3>Written by default</h3>
              <p>Proposals, decisions and weekly updates are written down and shared, so you have a record of everything agreed.</p>
            </div>
            <div className="card">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <h3>Confidentiality</h3>
              <p>We sign your NDA on request and only access the systems the project needs.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-band alt">
        <div className="wrap">
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <h2>Ready to start with a scoping call?</h2>
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
