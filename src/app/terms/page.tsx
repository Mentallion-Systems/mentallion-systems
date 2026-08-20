import type { Metadata } from "next";
import Link from "next/link";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography
} from "@mui/material";
import { SiteShell } from "@/components/site-shell";
import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing the use of the Mentallion Systems website and its informational content.",
  alternates: {
    canonical: "/terms"
  },
  openGraph: {
    title: "Terms of Use | Mentallion Systems",
    description:
      "Terms governing use of the Mentallion Systems website.",
    url: absoluteUrl("/terms"),
    type: "website",
    images: [absoluteUrl(site.ogImage)]
  }
};

const sections = [
  {
    title: "Website purpose",
    body:
      "This website provides general information about Mentallion Systems, our capabilities, and representative project experience. It is not professional, legal, financial, or technical advice for your particular circumstances."
  },
  {
    title: "No project agreement",
    body:
      "Submitting a contact form, receiving a reply, or discussing an idea does not create a client relationship or require either party to proceed. Any paid work, confidentiality obligations, deliverables, warranties, ownership terms, and fees will be governed by a separate written agreement."
  },
  {
    title: "Accuracy and availability",
    body:
      "We work to keep the website useful and accurate, but information may become outdated and the site may occasionally be unavailable. Case-study results describe specific engagements and do not guarantee identical outcomes for another project."
  },
  {
    title: "Intellectual property",
    body:
      "Unless otherwise stated, the website design, copy, brand elements, and original materials belong to Mentallion Systems or are used with permission. You may not reproduce or commercially reuse them without written permission."
  },
  {
    title: "Acceptable use",
    body:
      "Do not misuse the website, interfere with its operation, attempt unauthorized access, submit malicious content, overload public endpoints, or use automated systems in a way that harms the service or other visitors."
  },
  {
    title: "Third-party services",
    body:
      "The website may reference or connect to third-party platforms. We are not responsible for their availability, content, security, or privacy practices."
  },
  {
    title: "Liability",
    body:
      "To the extent permitted by applicable law, the website is provided as available without implied guarantees, and Mentallion Systems is not liable for indirect or consequential loss resulting solely from use of this informational website."
  },
  {
    title: "Changes and contact",
    body:
      `We may update these terms as the website evolves. Continued use after an update means the current terms apply. Questions can be sent to ${site.emails.hello}.`
  }
];

export default function TermsPage() {
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
              Terms of Use
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ maxWidth: 720, fontSize: "1.05rem", lineHeight: 1.8 }}
            >
              These terms apply when you browse or interact with the Mentallion
              Systems website.
            </Typography>
          </Box>

          <Divider />

          {sections.map((section) => (
            <Box key={section.title}>
              <Typography variant="h3" sx={{ mb: 1.5 }}>
                {section.title}
              </Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.85 }}>
                {section.body}
              </Typography>
            </Box>
          ))}

          <Divider />

          <Typography color="text.secondary">
            See also our{" "}
            <Link
              href="/privacy"
              style={{ color: "#1c3a2f", fontWeight: 700 }}
            >
              Privacy Policy
            </Link>
            .
          </Typography>
        </Stack>
      </Container>
    </SiteShell>
  );
}
