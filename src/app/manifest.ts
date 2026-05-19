import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mentallion Systems",
    short_name: "Mentallion",
    description:
      "AI systems, workflow automation, and production-grade software for businesses that want real results.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f5f2",
    theme_color: "#1c3a2f",
    icons: [
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}
