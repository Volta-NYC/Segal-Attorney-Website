import type { Metadata } from "next"
import Link from "next/link"
import Reveal from "@/lib/components/reveal"

export const metadata: Metadata = {
  title: "About Tatyana Segal",
  description: "Learn about Tatyana Segal, Esq. and the personal approach behind Segal Law Group, P.C.",
}

const credentials = [
  "Juris Doctor, CUNY School of Law",
  "Admitted to the New York State Bar in 2016",
  "Principal Attorney, Segal Law Group, P.C.",
  "English, Russian, and Ukrainian",
]

export default function AboutPage() {
  return (
    <>
      <section className="page-hero about-hero">
        <div className="shell page-hero-grid">
          <div>
            <p className="eyebrow">About the firm</p>
            <h1>An attorney who takes the time to listen.</h1>
          </div>
          <p>A small practice by design, so every client gets direct communication, thoughtful preparation, and a clear explanation of their choices.</p>
        </div>
      </section>

      <section className="section-space bio-section">
        <div className="shell bio-grid">
          <Reveal className="bio-stamp">
            <span>TS</span>
            <p>Tatyana Segal,<br />Attorney at Law</p>
          </Reveal>
          <div className="bio-copy">
            <Reveal>
              <p className="eyebrow">A personal approach</p>
              <h2>Practical advice. A real relationship.</h2>
            </Reveal>
            <Reveal delay={80}>
              <p>I founded Segal Law Group to give people the kind of legal help I would want for my own family: practical, honest, and free of the cold formality of a large firm. When you call, you reach me directly, and I explain your options in plain language before we ever talk about paperwork.</p>
              <p>I grew up in Ukraine before building my life and career here in New York. I understand firsthand how daunting legal and government systems can feel, especially in a second language. I make time for questions and work to ensure every client leaves an appointment understanding what is ahead.</p>
              <p>My practice remains deliberately small. It allows me to bring personal attention to each matter, from our first conversation through a resolution you can feel confident about.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="credentials-section section-space">
        <div className="shell credentials-grid">
          <Reveal><p className="eyebrow">Experience & service</p><h2>Rooted in public service and access to justice.</h2></Reveal>
          <Reveal delay={100}>
            <p className="credentials-copy">Tatyana’s experience includes work with New York City agencies, nonprofit legal organizations, and community groups. Her work reflects a longstanding commitment to serving older adults, New Yorkers facing housing questions, and families making important plans for the future.</p>
            <ul className="credential-list">
              {credentials.map((credential) => <li key={credential}>{credential}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="closing-cta">
        <div className="shell closing-content">
          <Reveal>
            <p className="eyebrow">Let’s talk</p>
            <h2>Bring your questions. We will take them one at a time.</h2>
            <Link href="/pages/contact" className="button button-light">Contact the office</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
