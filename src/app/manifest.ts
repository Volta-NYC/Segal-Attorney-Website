import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Segal Law Group, P.C.",
    short_name: "Segal Law",
    description: "Clear, caring legal guidance for New York families.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f2e9",
    theme_color: "#23342d",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  }
}
