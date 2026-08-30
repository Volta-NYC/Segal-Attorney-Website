import "./globals.css"
import type { Metadata } from "next"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"

export const metadata: Metadata = {
  metadataBase: new URL("https://segallawgroup.com"),
  title: {
    default: "Segal Law Group, P.C. | Brooklyn Attorney",
    template: "%s | Segal Law Group, P.C.",
  },
  description: "Clear, caring legal guidance for New York families from Tatyana Segal, Esq.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  applicationName: "Segal Law Group, P.C.",
  formatDetection: {
    telephone: true,
    email: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
