"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SERVICES = {
  "web-applications": "Custom web applications",
  automation: "Workflow automation",
  "ai-tools": "AI-enabled tools",
  saas: "SaaS product development",
  support: "Maintenance & support",
};

// Contact form: opens the visitor's email app with the message pre-filled
export default function ContactForm() {
  const serviceRef = useRef(null);
  const [sent, setSent] = useState(false);

  // Preselect the service from links like /contact?service=saas
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    if (SERVICES[p.get("service")]) serviceRef.current.value = SERVICES[p.get("service")];
    if (p.get("interest") === "products") serviceRef.current.value = "Products early access";
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const d = new FormData(form);
    const subject = "Project enquiry from " + d.get("name") + (d.get("company") ? " (" + d.get("company") + ")" : "");
    const body =
      "Name: " + d.get("name") + "\n" +
      "Email: " + d.get("email") + "\n" +
      "Company: " + (d.get("company") || "-") + "\n" +
      "Service: " + (d.get("service") || "-") + "\n" +
      "Budget: " + (d.get("budget") || "-") + "\n" +
      "Timeline: " + (d.get("timeline") || "-") + "\n\n" +
      d.get("message");
    window.location.href = "mailto:hello@buildwyn.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    setSent(true);
  }

  return (
    <form className="form" id="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="row2">
        <div className="field">
          <label htmlFor="c-name">Name</label>
          <input id="c-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="c-email">Work email</label>
          <input id="c-email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>
      <div className="row2">
        <div className="field">
          <label htmlFor="c-company">Company{" "}<span className="opt">(optional)</span></label>
          <input id="c-company" name="company" type="text" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="c-service">Service</label>
          <select id="c-service" name="service" ref={serviceRef}>
            <option value="">Select a service</option>
            <option value="Custom web applications">Custom web applications</option>
            <option value="Workflow automation">Workflow automation</option>
            <option value="AI-enabled tools">AI-enabled tools</option>
            <option value="SaaS product development">SaaS product development</option>
            <option value={"Maintenance & support"}>{"Maintenance & support"}</option>
            <option value="Products early access">Products early access</option>
            <option value="Something else">Something else</option>
          </select>
        </div>
      </div>
      <div className="row2">
        <div className="field">
          <label htmlFor="c-budget">Budget{" "}<span className="opt">(optional)</span></label>
          <select id="c-budget" name="budget">
            <option value="">Prefer not to say</option>
            <option>Under $2,000</option>
            <option>$2,000 – $5,000</option>
            <option>$5,000 – $15,000</option>
            <option>$15,000+</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="c-timeline">Timeline{" "}<span className="opt">(optional)</span></label>
          <select id="c-timeline" name="timeline">
            <option value="">Flexible</option>
            <option>As soon as possible</option>
            <option>Within 1 month</option>
            <option>1–3 months</option>
            <option>Just exploring</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="c-msg">About the project</label>
        <textarea id="c-msg" name="message" rows="6" required placeholder="What would you like to build or automate? Who will use it?" />
      </div>
      <button type="submit" className="btn btn-dark" style={{ alignSelf: "flex-start" }}>Send message</button>
      <p className={sent ? "status show" : "status"} id="form-status" role="status">
        Your email app should open with your message ready to send. If it didn't, email us directly at{" "}
        <a href="mailto:hello@buildwyn.com">hello@buildwyn.com</a>
        .
      </p>
      <p className="form-note">
        By sending a message you agree to our{" "}
        <Link href="/privacy">Privacy Policy</Link>
        . We use your details only to reply to you.
      </p>
    </form>
  );
}
