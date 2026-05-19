import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/case-studies";
import { seo } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/contact", "/case-studies"];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${seo.siteUrl}${route || "/"}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  })) as MetadataRoute.Sitemap;

  const caseStudyEntries = caseStudies.map((study) => ({
    url: `${seo.siteUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7
  })) as MetadataRoute.Sitemap;

  return [...staticEntries, ...caseStudyEntries];
}
