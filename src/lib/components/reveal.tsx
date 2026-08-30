"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const element = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = element.current
    if (!node) return

    setReady(true)
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reducedMotion.matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setVisible(true)
        observer.unobserve(entry.target)
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={element}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      data-ready={ready}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
