import type { Metadata } from "next";
import Link from "next/link";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography
} from "@mui/material";
import { AnalyticsPreferencesButton } from "@/components/analytics-consent";
import { SiteShell } from "@/components/site-shell";
import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Mentallion Systems collects, uses, protects, and shares information submitted through this website.",
  alternates: {
    canonical: "/privacy"
  },
  openGraph: {
    title: "Privacy Policy | Mentallion Systems",
    description:
      "How Mentallion Systems handles website, analytics, and contact inquiry information.",
    url: absoluteUrl("/privacy"),
    type: "website",
    images: [absoluteUrl(site.ogImage)]
  }
};

const sections = [
  {
    title: "Information we collect",
    paragraphs: [
      "When you contact us, we collect the information you choose to provide, such as your name, email address, project description, and any other details included in your message.",
      "To understand how an inquiry reached us, the contact form may also include the landing page, referring page, campaign parameters, and the service you selected. Our hosting and security systems may process technical request information such as an IP address, browser details, and timestamps."
    ]
  },
  {
    title: "How we use information",
    paragraphs: [
      "We use inquiry information to respond, understand your requirements, prepare a proposal, prevent abuse, maintain website security, and improve our services. We do not sell personal information."
    ]
  },
  {
    title: "Analytics choices",
    paragraphs: [
      "If analytics are enabled, we ask for your choice before loading optional Google Analytics or Microsoft Clarity measurement tools. You can decline without losing access to the website or contact form.",
      "You can reopen your analytics choice below. Your preference is stored in a first-party cookie for up to one year."
    ],
    preferences: true
  },
  {
    title: "Service providers and transfers",
    paragraphs: [
      "We use service providers to host the website, deliver contact emails, protect the service, and—only when you allow it—measure site usage. These providers process information on our behalf under their own security and privacy commitments and may operate in different countries."
    ]
  },
  {
    title: "Retention and security",
    paragraphs: [
      "We keep inquiry information only as long as reasonably needed to respond, manage a potential or active business relationship, satisfy legal obligations, and protect our systems. We use reasonable technical and organizational safeguards, but no internet service can guarantee absolute security."
    ]
  },
  {
    title: "Your choices",
    paragraphs: [
      "You may ask us to access, correct, or delete information you submitted, subject to any legal or contractual retention requirements. You may also withdraw from future communications at any time."
    ]
  },
  {
    title: "Contact and updates",
    paragraphs: [
      `For privacy questions or requests, email ${site.emails.hello}. We may update this policy when our website, providers, or legal obligations change. The current version will always be published on this page.`
    ]
  }
];

export default function PrivacyPage() {
  const analyticsEnabled = Boolean(
    process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID ||
      process.env.NEXT_PUBLIC_GA_ID
  );

  return (
    <SiteShell>
      <Container maxWidth="md" sx={{ py: { xs: 7, md: 11 } }}>
        <Stack spacing={4}>
          <Box>
            <Typography
              sx={{
                mb: 1.5,
                color: "primary.main",
                fontSize: "0.8rem",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase"
              }}
            >
              Effective July 29, 2026
            </Typography>
            <Typography variant="h1" sx={{ mb: 2 }}>
              Privacy Policy
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ maxWidth: 720, fontSize: "1.05rem", lineHeight: 1.8 }}
            >
              This policy explains how Mentallion Systems handles information when
              you visit this website or contact us about a project.
            </Typography>
          </Box>

          <Divider />

          {sections.map((section) => (
            <Box key={section.title}>
              <Typography variant="h3" sx={{ mb: 1.5 }}>
                {section.title}
              </Typography>
              <Stack spacing={1.4}>
                {section.paragraphs.map((paragraph) => (
                  <Typography
                    key={paragraph}
                    color="text.secondary"
                    sx={{ lineHeight: 1.85 }}
                  >
                    {paragraph}
                  </Typography>
                ))}
                {section.preferences && analyticsEnabled ? (
                  <Box sx={{ pt: 0.5 }}>
                    <AnalyticsPreferencesButton />
                  </Box>
                ) : section.preferences ? (
                  <Typography color="text.secondary" sx={{ fontStyle: "italic" }}>
                    Optional analytics are not currently enabled on this deployment.
                  </Typography>
                ) : null}
              </Stack>
            </Box>
          ))}

          <Divider />

          <Typography color="text.secondary">
            Read our{" "}
            <Link
              href="/terms"
              style={{ color: "#1c3a2f", fontWeight: 700 }}
            >
              Terms of Use
            </Link>
            .
          </Typography>
        </Stack>
      </Container>
    </SiteShell>
  );
}
