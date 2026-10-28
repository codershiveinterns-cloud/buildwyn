"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const LINKS = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/process", "How we work"],
  ["/products", "Products"],
  ["/about", "About"],
  ["/faq", "FAQ"],
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Mobile menu closes after navigating
  useEffect(() => setOpen(false), [pathname]);

  // Header tightens after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const current = (href) => (pathname === href ? "page" : undefined);

  return (
    <header className={scrolled ? "site-header scrolled" : "site-header"}>
      <div className="nav">
        <Link href="/" className="brand" aria-label="Buildwyn home"><Logo /></Link>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
        <nav className={open ? "menu open" : "menu"} id="menu" aria-label="Main">
          {LINKS.map(([href, label]) => (
            <Link key={href} href={href} aria-current={current(href)}>{label}</Link>
          ))}
          <Link href="/contact" className="btn btn-dark btn-sm" aria-current={current("/contact")}>Start a project</Link>
        </nav>
      </div>
    </header>
  );
}
