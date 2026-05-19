const fallbackSiteUrl = "https://mentallionsystems.com";

export const seo = {
  siteName: "Mentallion Systems",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || fallbackSiteUrl,
  defaultTitle: "Mentallion Systems | AI systems that replace manual work",
  defaultDescription:
    "Mentallion Systems builds AI automation systems, workflow software, and production-grade platforms for businesses that want real results, not demos.",
  defaultOgImage: "/opengraph-image",
  keywords: [
    "AI automation agency",
    "AI systems",
    "workflow automation",
    "custom SaaS development",
    "AI agents",
    "business process automation",
    "document intelligence",
    "production software development",
    "custom software systems",
    "Mentallion Systems"
  ]
} as const;

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${seo.siteUrl}${normalizedPath}`;
}
