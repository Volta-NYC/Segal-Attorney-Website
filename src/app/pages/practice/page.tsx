import type { Metadata } from "next"
import Link from "next/link"
import Reveal from "@/lib/components/reveal"
import { practiceAreas } from "@/lib/site"

export const metadata: Metadata = {
  title: "Practice Areas",
  description: "Estate planning, elder law, powers of attorney, housing, and consumer matters at Segal Law Group, P.C.",
}

const details = [
  ["Estate planning", "Wills, trusts, health care proxies, and other planning documents should reflect the life you have built and the people you care about. We will talk through the decisions in clear, manageable terms."],
  ["Elder law & benefits", "Guidance for families navigating long-term care, Medicaid and Medicare questions, guardianship, and the legal tools that can help protect a loved one’s independence."],
  ["Everyday legal matters", "Support for landlord-tenant concerns and consumer protection issues, with a practical focus on understanding your position and the steps available to you."],
]

export default function PracticePage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div>
            <p className="eyebrow">Practice areas</p>
            <h1>Clear counsel for the things that matter most.</h1>
          </div>
          <p>Whether you are planning ahead or facing an immediate concern, the first task is to understand what is happening and what options you have.</p>
        </div>
      </section>

      <section className="section-space practice-page-section">
        <div className="shell practice-grid">
          {practiceAreas.map((area, index) => (
            <Reveal key={area.title} delay={index * 70}>
              <article className="practice-card static-card">
                <span className="card-number">{area.number}</span>
                <h2>{area.title}</h2>
                <p>{area.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="matter-list-section section-space">
        <div className="shell matter-list-grid">
          <Reveal>
            <p className="eyebrow">A considered approach</p>
            <h2>Start with the facts. Then make a plan.</h2>
          </Reveal>
          <div className="matter-list">
            {details.map(([title, copy], index) => (
              <Reveal key={title} delay={index * 90}>
                <article>
                  <span>0{index + 1}</span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-cta">
        <div className="shell closing-content">
          <Reveal>
            <p className="eyebrow">Not sure where to begin?</p>
            <h2>A conversation can make the path forward clearer.</h2>
            <Link href="/pages/contact" className="button button-light">Contact the office</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
