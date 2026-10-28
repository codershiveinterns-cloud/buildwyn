import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "FAQ — Buildwyn",
  description: "Answers about cost, timelines, code ownership, communication and payment when working with Buildwyn.",
  url: "https://buildwyn.com/faq",
});

export default function FaqPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">FAQ</p>
          <h1>Frequently asked questions</h1>
          <p className="lead">Straight answers about cost, timelines, ownership and working with us.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="faq">
            <details>
              <summary>How much does a project cost?</summary>
              <div className="ans">
                <p>It depends on scope. After a free scoping call we send a written proposal with a fixed price or a monthly rate, so you know the cost before anything starts.</p>
              </div>
            </details>
            <details>
              <summary>How long does a typical project take?</summary>
              <div className="ans">
                <p>A focused automation can take one to two weeks. A custom web application or SaaS MVP usually takes four to twelve weeks. Your proposal includes a timeline with milestones.</p>
              </div>
            </details>
            <details>
              <summary>Who owns the code?</summary>
              <div className="ans">
                <p>
                  You do. Code is kept in your repository and services run in your accounts. On final payment, all rights in the deliverables are assigned to you, as set out in our{" "}
                  <Link href="/terms">Terms of Service</Link>
                  .
                </p>
              </div>
            </details>
            <details>
              <summary>Where is your team located?</summary>
              <div className="ans">
                <p>Buildwyn LLC is registered in Wyoming, USA. Development is done remotely from India, with hours that overlap the US business day for calls and replies.</p>
              </div>
            </details>
            <details>
              <summary>How do we communicate during a project?</summary>
              <div className="ans">
                <p>Through a channel you prefer (email, Slack or similar), with a weekly demo and a short written update. Decisions are always written down.</p>
              </div>
            </details>
            <details>
              <summary>Do you sign NDAs?</summary>
              <div className="ans">
                <p>Yes. We are happy to sign your non-disclosure agreement before you share confidential details.</p>
              </div>
            </details>
            <details>
              <summary>How does payment work?</summary>
              <div className="ans">
                <p>Fixed-scope projects are paid in milestones agreed in the proposal. Monthly retainers are billed at the start of each month. Invoices are issued by Buildwyn LLC in US dollars.</p>
              </div>
            </details>
            <details>
              <summary>Can you work on an existing codebase?</summary>
              <div className="ans">
                <p>Yes. We start with a short review of the code and infrastructure, then propose fixes or improvements with clear estimates.</p>
              </div>
            </details>
            <details>
              <summary>What happens after launch?</summary>
              <div className="ans">
                <p>You can take over fully with the documentation we provide, or choose a monthly maintenance plan for updates, fixes and small improvements.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section className="cta-band alt">
        <div className="wrap">
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <h2>Still have a question?</h2>
            <p className="muted">Ask us directly. We reply within one business day.</p>
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
