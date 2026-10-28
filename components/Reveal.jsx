"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

const GROUPS = [".section-head", ".tiles", ".grid", ".steps", ".facts", ".timeline", ".faq", ".service", ".prose", ".details", ".founder", ".cta-band .wrap"];

// Reveal sections as they enter the viewport (siblings stagger slightly).
// Runs again after every client-side navigation, before the new page paints.
export default function Reveal() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const targets = [];
    GROUPS.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => {
        if (el.closest(".hero")) return;
        const kids = el.matches(".tiles, .grid, .steps, .facts, .timeline, .faq") ? el.children : [el];
        for (let i = 0; i < kids.length; i++) {
          const k = kids[i];
          if (k.classList.contains("reveal")) continue;
          k.classList.add("reveal");
          k.style.setProperty("--d", Math.min(i, 6));
          targets.push(k);
        }
      });
    });
    if (!("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
