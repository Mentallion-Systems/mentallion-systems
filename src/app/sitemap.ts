import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/case-studies";
import { serviceDetails } from "@/content/services";
import { absoluteUrl, seo } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const contentLastModified = new Date("2026-07-29T00:00:00.000Z");
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/contact",
    "/case-studies",
    "/privacy",
    "/terms"
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${seo.siteUrl}${route || "/"}`,
    lastModified: contentLastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
    images: route === "" ? [absoluteUrl("/opengraph-image")] : undefined
  })) as MetadataRoute.Sitemap;

  const serviceEntries = serviceDetails.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified: contentLastModified,
    changeFrequency: "monthly" as const,
    priority: 0.9,
    images: [absoluteUrl("/opengraph-image")]
  })) as MetadataRoute.Sitemap;

  const caseStudyEntries = caseStudies.map((study) => ({
    url: `${seo.siteUrl}/case-studies/${study.slug}`,
    lastModified: contentLastModified,
    changeFrequency: "monthly",
    priority: 0.7,
    images: [absoluteUrl(study.bannerImageUrl)]
  })) as MetadataRoute.Sitemap;

  return [...staticEntries, ...serviceEntries, ...caseStudyEntries];
}
