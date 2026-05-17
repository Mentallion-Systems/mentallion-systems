import type { Metadata } from "next";
import { Box, Container, Typography } from "@mui/material";
import { SiteShell } from "@/components/site-shell";
import { SectionReveal } from "@/components/section-reveal";
import { CaseStudiesGrid } from "@/components/case-studies-grid";

const caseStudiesBannerImage =
  "https://picsum.photos/id/180/1600/1000";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Case studies from Mentallion Systems: automation systems, AI pipelines, SaaS platforms, and software rescues that ran in production."
};

export default function CaseStudiesPage() {
  return (
    <SiteShell>
      <SectionReveal>
        <Box
          sx={{
            position: "relative",
            minHeight: { xs: "calc(100vh - 82px)", md: "calc(100vh - 82px)" },
            display: "flex",
            alignItems: "flex-end",
            overflow: "hidden",
            color: "primary.contrastText",
            backgroundImage: `linear-gradient(180deg, rgba(12,18,17,0.08) 0%, rgba(12,18,17,0.56) 40%, rgba(12,18,17,0.92) 100%), url(${caseStudiesBannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(9,14,13,0.84) 0%, rgba(9,14,13,0.54) 42%, rgba(9,14,13,0.18) 100%)"
            },
            "&::after": {
              content: '""',
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 82% 18%, rgba(247,245,242,0.12), transparent 16%), radial-gradient(circle at 78% 76%, rgba(34,71,58,0.28), transparent 22%)"
            }
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              position: "relative",
              zIndex: 1,
              py: { xs: 8, md: 10 }
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1.05fr) minmax(320px, 0.95fr)" },
                gap: { xs: 4, lg: 6 },
                alignItems: "end"
              }}
            >
              <Box sx={{ maxWidth: 760 }}>
                <Typography sx={{ color: "rgba(247,245,242,0.82)", mb: 1.5 }}>Case Studies</Typography>
                <Typography variant="h1" sx={{ fontSize: { xs: "3.2rem", md: "5rem" }, maxWidth: 820 }}>
                  Selected case studies
                </Typography>
                <Typography sx={{ mt: 3, maxWidth: 700, color: "rgba(247,245,242,0.8)" }}>
                  A look at real problems we&apos;ve solved, from early-stage startups to established businesses going digital.
                </Typography>
              </Box>

              <Box
                sx={{
                  display: { xs: "none", lg: "grid" },
                  gap: 2,
                  justifySelf: "end",
                  width: "100%",
                  maxWidth: 430
                }}
              >
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: 3,
                    bgcolor: "rgba(255,253,249,0.9)",
                    color: "text.primary",
                    backdropFilter: "blur(14px)",
                    boxShadow: "0 22px 60px rgba(0,0,0,0.18)"
                  }}
                >
                  <Typography sx={{ fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "text.secondary", mb: 1 }}>
                    Platform Snapshot
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 1.5 }}>
                    Production systems solving real workflows
                  </Typography>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                      gap: 1.2
                    }}
                  >
                    {[
                      ["19+", "Systems live"],
                      ["95%", "Manual work reduced"],
                      ["7+", "Industries served"]
                    ].map(([value, label]) => (
                      <Box
                        key={label}
                        sx={{
                          p: 1.25,
                          borderRadius: 2,
                          bgcolor: "rgba(28,58,47,0.06)"
                        }}
                      >
                        <Typography sx={{ fontSize: "1.2rem", fontWeight: 700, color: "primary.main" }}>{value}</Typography>
                        <Typography sx={{ fontSize: "0.72rem", color: "text.secondary", lineHeight: 1.35 }}>{label}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                <Box
                  sx={{
                    ml: 6,
                    p: 2.25,
                    borderRadius: 3,
                    bgcolor: "rgba(20,38,33,0.88)",
                    backdropFilter: "blur(14px)",
                    boxShadow: "0 20px 48px rgba(0,0,0,0.22)"
                  }}
                >
                  <Typography sx={{ fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(247,245,242,0.64)", mb: 1 }}>
                    Workflow Layers
                  </Typography>
                  <Box sx={{ display: "grid", gap: 1 }}>
                    {["Automation pipelines", "AI agents and review loops", "Dashboards that ship to production"].map((item) => (
                      <Box
                        key={item}
                        sx={{
                          px: 1.5,
                          py: 1.15,
                          borderRadius: 2,
                          bgcolor: "rgba(247,245,242,0.08)",
                          border: "1px solid rgba(247,245,242,0.08)"
                        }}
                      >
                        <Typography sx={{ color: "rgba(247,245,242,0.9)" }}>{item}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </SectionReveal>

      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <SectionReveal>
          <CaseStudiesGrid />
        </SectionReveal>
      </Container>
    </SiteShell>
  );
}
