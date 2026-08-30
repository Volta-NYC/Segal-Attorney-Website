import Link from "next/link"
import HeroWebgl from "@/lib/components/hero-webgl"
import Reveal from "@/lib/components/reveal"
import { firm, practiceAreas } from "@/lib/site"

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <HeroWebgl />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Brooklyn, New York</p>
            <h1>Legal guidance that meets you where you are.</h1>
            <p className="hero-lede">{firm.attorney} offers clear, compassionate help with estate planning, elder law, and everyday legal matters.</p>
            <div className="button-row">
              <Link href="/pages/contact" className="button button-primary">Schedule a consultation</Link>
              <a href={firm.phoneHref} className="text-link">Call {firm.phone}</a>
            </div>
          </div>
          <div className="hero-aside" aria-label="Firm principles">
            <p>One attorney.<br />A steady hand.<br />A clear next step.</p>
            <span>Serving New York families</span>
          </div>
        </div>
      </section>

      <section className="intro-section section-space">
        <div className="shell intro-grid">
          <Reveal>
            <p className="eyebrow">The practice</p>
            <h2>Advice is more useful when you can understand it.</h2>
          </Reveal>
          <Reveal delay={110}>
            <div className="intro-copy">
              <p>Legal questions often arrive at an already difficult moment. Tatyana takes the time to explain your options, make the process manageable, and give you an honest view of what comes next.</p>
              <Link href="/pages/about" className="text-link">Meet Tatyana Segal <span aria-hidden="true">↗</span></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="practice-section section-space" aria-labelledby="practice-heading">
        <div className="shell">
          <Reveal className="section-heading">
            <p className="eyebrow">Focused counsel</p>
            <h2 id="practice-heading">What brings people here</h2>
          </Reveal>
          <div className="practice-grid">
            {practiceAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 75}>
                <Link href="/pages/practice" className="practice-card">
                  <span className="card-number">{area.number}</span>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <span className="card-arrow" aria-hidden="true">↗</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="confidence-section section-space">
        <div className="shell confidence-grid">
          <Reveal>
            <p className="eyebrow">A personal practice</p>
            <blockquote>“When you call, you speak with me directly. The goal is not to make the law sound complicated, but to make your options feel clear.”</blockquote>
          </Reveal>
          <Reveal delay={120} className="confidence-details">
            <div><strong>English, Russian & Ukrainian</strong><span>Communication without added barriers</span></div>
            <div><strong>Estate & elder law experience</strong><span>Planning with care for the long view</span></div>
            <div><strong>Brooklyn-based</strong><span>Serving clients across New York City</span></div>
          </Reveal>
        </div>
      </section>

      <section className="closing-cta">
        <div className="shell closing-content">
          <Reveal>
            <p className="eyebrow">Start with a conversation</p>
            <h2>You do not have to figure it out alone.</h2>
            <p>Tell us what is on your mind. We will find a time to talk through the next step.</p>
            <Link href="/pages/contact" className="button button-light">Contact the office</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
