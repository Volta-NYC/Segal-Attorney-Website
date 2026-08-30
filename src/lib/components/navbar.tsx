"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { firm } from "@/lib/site"

const navigation = [
  { href: "/", label: "Home" },
  { href: "/pages/about", label: "About" },
  { href: "/pages/practice", label: "Practice areas" },
  { href: "/pages/contact", label: "Contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle("menu-open", open)
    return () => document.body.classList.remove("menu-open")
  }, [open])

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="shell nav-shell">
        <Link href="/" className="wordmark" onClick={() => setOpen(false)} aria-label={`${firm.name} home`}>
          <span className="wordmark-mark">S</span>
          <span>
            <strong>Segal</strong>
            <small>Law Group, P.C.</small>
          </span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>

        <nav id="site-navigation" className={open ? "is-open" : ""} aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/pages/contact" className="nav-action" onClick={() => setOpen(false)}>
            Schedule a consultation
          </Link>
        </nav>
      </div>
    </header>
  )
}
