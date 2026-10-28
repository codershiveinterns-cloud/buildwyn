import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Page not found — Buildwyn",
  description: "Page not found.",
  url: "https://buildwyn.com/404",
});

export default function NotFound() {
  return (
    <>
      <section className="page-hero" style={{ borderBottom: "none", minHeight: "50vh" }}>
        <div className="wrap">
          <p className="eyebrow">404</p>
          <h1>Page not found</h1>
          <p className="lead">The page you are looking for does not exist or has moved.</p>
          <div className="ctas">
            <Link href="/" className="btn btn-primary">Go to homepage</Link>
            <Link href="/contact" className="btn">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
