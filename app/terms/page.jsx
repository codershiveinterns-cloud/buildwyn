import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Terms of Service — Buildwyn LLC",
  description: "Terms for using buildwyn.com and Buildwyn LLC services.",
  url: "https://buildwyn.com/terms",
});

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Legal</p>
          <h1>Terms of Service</h1>
          <p className="lead">Last updated: 28 October 2026</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="prose">
            <p>These Terms of Service ("Terms") apply to your use of buildwyn.com and to services provided by Buildwyn LLC ("Buildwyn", "we", "us"), a Wyoming limited liability company with its registered office at 30 N Gould St, Ste R, Sheridan, WY 82801, USA. A signed proposal or statement of work ("Proposal") for a specific project forms part of these Terms; if they conflict, the Proposal applies.</p>
            <h2>1. Website</h2>
            <p>The content on this website is provided for general information. We may change or remove it at any time. You may not misuse the website, attempt to gain unauthorised access, or copy its content for commercial purposes without permission.</p>
            <h2>2. Services</h2>
            <p>We provide software development, automation, AI-tool and related services as described in each Proposal. Work outside the agreed scope is quoted separately and starts only after written approval.</p>
            <h2>3. Fees and payment</h2>
            <ul>
              <li>Fees, milestones and payment terms are set out in the Proposal. Invoices are issued in US dollars.</li>
              <li>Unless the Proposal says otherwise, invoices are due within 14 days.</li>
              <li>We may pause work while an invoice is overdue.</li>
            </ul>
            <h2>4. Client responsibilities</h2>
            <p>You agree to provide timely feedback, information and access needed for the project, and you confirm that you have the right to share any material you give us.</p>
            <h2>5. Intellectual property</h2>
            <p>When you have paid all fees for a deliverable, we assign to you all rights in the custom code and materials we created specifically for you. We keep ownership of our pre-existing tools, know-how and general-purpose components, and grant you a perpetual, non-exclusive licence to use them as part of the deliverables. Third-party and open-source software remains subject to its own licences.</p>
            <h2>6. Confidentiality</h2>
            <p>Each party will keep the other's confidential information private and use it only for the project, except where disclosure is required by law. We will sign your non-disclosure agreement on request.</p>
            <h2>7. Warranty</h2>
            <p>We will perform services with reasonable skill and care. For 30 days after delivery of a milestone, we will fix defects in our work that cause it not to match the agreed scope, at no extra cost. Otherwise, services and the website are provided "as is", without other warranties, to the extent permitted by law.</p>
            <h2>8. Limitation of liability</h2>
            <p>To the extent permitted by law, neither party is liable for indirect, incidental or consequential losses, or for lost profits or data. Our total liability for any project is limited to the fees you paid for that project in the 12 months before the claim.</p>
            <h2>9. Termination</h2>
            <p>Either party may end a project with 14 days' written notice. You will pay for work completed up to the termination date, and we will deliver that work to you once paid.</p>
            <h2>10. Governing law</h2>
            <p>These Terms are governed by the laws of the State of Wyoming, USA, without regard to its conflict-of-law rules.</p>
            <h2>11. Contact</h2>
            <p>Questions about these Terms:{" "}<a href="mailto:hello@buildwyn.com">hello@buildwyn.com</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
