import { seo } from "@/lib/seo";

export async function GET() {
  const body = [
    `# ${seo.siteName}`,
    "",
    `> ${seo.defaultDescription}`,
    "",
    "## Primary pages",
    `- Home: ${seo.siteUrl}/`,
    `- Services: ${seo.siteUrl}/services`,
    `- Case Studies: ${seo.siteUrl}/case-studies`,
    `- About: ${seo.siteUrl}/about`,
    `- Contact: ${seo.siteUrl}/contact`,
    "",
    "## Summary",
    "- Mentallion Systems designs and builds AI systems, workflow automation, custom SaaS, and production-grade software.",
    "- The site includes service pages, company positioning, and real project case studies.",
    "",
    "## Contact",
    "- General: hello@mentallionsystems.com",
    "- Project inquiries: inquiry@mentallionsystems.com"
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
