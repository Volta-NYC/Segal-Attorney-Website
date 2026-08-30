import type { Metadata } from "next"
import { firm } from "@/lib/site"
import Reveal from "@/lib/components/reveal"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Segal Law Group, P.C. to schedule a consultation with Tatyana Segal, Esq.",
}

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-hero">
        <div className="shell page-hero-grid">
          <div><p className="eyebrow">Contact</p><h1>Start with a straightforward conversation.</h1></div>
          <p>Reach out by phone or email to ask a question or schedule a consultation. Please do not send confidential details before we have agreed to work together.</p>
        </div>
      </section>

      <section className="section-space contact-section">
        <div className="shell contact-grid">
          <Reveal className="contact-details">
            <p className="eyebrow">The office</p>
            <h2>Get in touch.</h2>
            <div className="contact-rows">
              <a href={firm.phoneHref}><span>Phone</span><strong>{firm.phone}</strong></a>
              <a href={firm.emailHref}><span>Email</span><strong>{firm.email}</strong></a>
              <div><span>Location</span><strong>{firm.location}</strong></div>
              <div><span>Hours</span><strong>{firm.hours}<br />Evenings and weekends by appointment</strong></div>
            </div>
          </Reveal>
          <Reveal delay={110} className="contact-panel">
            <p className="eyebrow">Before we speak</p>
            <h3>A little preparation helps.</h3>
            <p>When you contact the office, a short description of the kind of help you are looking for is enough to get started. We will follow up to find an appropriate time to speak.</p>
            <a href={firm.emailHref} className="button button-primary">Email the office</a>
            <p className="fine-print">Contacting the office does not create an attorney-client relationship. Please do not include confidential or time-sensitive information in your initial message.</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
