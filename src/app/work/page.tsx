import type { Metadata } from "next";
import { Container, Typography } from "@mui/material";
import { SiteShell } from "@/components/site-shell";
import { SectionReveal } from "@/components/section-reveal";
import { WorkGrid } from "@/components/work-grid";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Case studies from Mentallion Systems: automation systems, AI pipelines, SaaS platforms, and software rescues that ran in production."
};

export default function WorkPage() {
  return (
    <SiteShell>
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <SectionReveal>
          <Typography sx={{ color: "primary.main", mb: 1.5 }}>Case Studies</Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: "3.2rem", md: "5rem" }, maxWidth: 820 }}>
            Selected case studies
          </Typography>
          <Typography sx={{ mt: 3, maxWidth: 700, color: "text.secondary" }}>
            A look at real problems we&apos;ve solved, from early-stage startups to established businesses going digital.
          </Typography>
        </SectionReveal>

        <SectionReveal>
          <WorkGrid />
        </SectionReveal>
      </Container>
    </SiteShell>
  );
}
