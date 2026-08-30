import Link from "next/link"
import { firm } from "@/lib/site"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-kicker">Segal Law Group, P.C.</p>
          <p className="footer-intro">Personal legal guidance for New York families, in plain language and at a human pace.</p>
        </div>
        <div className="footer-column">
          <p className="footer-label">Get in touch</p>
          <a href={firm.phoneHref}>{firm.phone}</a>
          <a href={firm.emailHref}>{firm.email}</a>
          <span>{firm.location}</span>
        </div>
        <div className="footer-column">
          <p className="footer-label">Explore</p>
          <Link href="/pages/about">About Tatyana</Link>
          <Link href="/pages/practice">Practice areas</Link>
          <Link href="/pages/contact">Contact the office</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} {firm.name}. Attorney Advertising.</span>
        <a href="https://novusnyc.org" target="_blank" rel="noreferrer">Made by Novus</a>
      </div>
      <div className="shell footer-note">
        This website provides general information only. It is not legal advice and does not create an attorney-client relationship.
      </div>
    </footer>
  )
}
