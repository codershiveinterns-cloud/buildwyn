import Link from "next/link";
import Logo from "./Logo";
import Year from "./Year";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="foot">
        <div className="about">
          <Link href="/" className="brand" aria-label="Buildwyn home" style={{ color: "#fff" }}><Logo /></Link>
          <p>Custom web applications, workflow automation and AI-enabled tools for growing businesses.</p>
          <p><a href="mailto:hello@buildwyn.com">hello@buildwyn.com</a></p>
        </div>
        <div>
          <h3>Services</h3>
          <ul>
            <li><Link href="/services#web-applications">Web applications</Link></li>
            <li><Link href="/services#automation">Workflow automation</Link></li>
            <li><Link href="/services#ai-tools">AI-enabled tools</Link></li>
            <li><Link href="/services#saas">SaaS development</Link></li>
            <li><Link href="/services#support">{"Maintenance & support"}</Link></li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/process">How we work</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3>Legal</h3>
          <ul>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="legal">
        <span>©{" "}<Year />{" "}Buildwyn LLC. All rights reserved.</span>
        {" "}
        <span>Buildwyn LLC is a Wyoming limited liability company · 30 N Gould St, Ste R, Sheridan, WY 82801, USA</span>
      </div>
    </footer>
  );
}
