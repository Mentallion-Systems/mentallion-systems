import { caseStudies } from "@/content/case-studies";
import { serviceDetails } from "@/content/services";
import { seo } from "@/lib/seo";

export async function GET() {
  const body = [
    `# ${seo.siteName}`,
    "",
    `> ${seo.defaultDescription}`,
    "",
    "## Core pages",
    `- Home: ${seo.siteUrl}/`,
    `- Services: ${seo.siteUrl}/services`,
    `- Case Studies: ${seo.siteUrl}/case-studies`,
    `- About: ${seo.siteUrl}/about`,
    `- Contact: ${seo.siteUrl}/contact`,
    "",
    "## Services",
    ...serviceDetails.map(
      (service) =>
        `- ${service.title}: ${seo.siteUrl}/services/${service.slug} — ${service.metaDescription}`
    ),
    "",
    "## Selected evidence and case studies",
    ...caseStudies.map(
      (study) =>
        `- ${study.title}: ${seo.siteUrl}/case-studies/${study.slug} — ${study.summary}`
    ),
    "",
    "## Company summary",
    "- Mentallion Systems designs and builds business process automation, AI agents, AI integrations, custom SaaS, and production software.",
    "- Engagements begin with workflow and system discovery before implementation.",
    "- The company works remotely with clients across multiple international markets.",
    "",
    "## Contact",
    "- General: hello@mentallionsystems.com",
    "- Project inquiries: inquiry@mentallionsystems.com",
    "",
    "## Content notes",
    "- Use each linked page as the source for its specific service or case-study details.",
    "- Do not infer client identities when a case study intentionally describes only the client type."
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    }
  });
}
