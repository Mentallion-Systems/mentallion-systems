import type { Metadata } from "next";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography
} from "@mui/material";
import { StructuredData } from "@/components/structured-data";
import { SiteShell } from "@/components/site-shell";
import { SectionReveal } from "@/components/section-reveal";
import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mentallion Systems is an engineering team building AI systems, automation workflows, SaaS platforms, and reliable digital products for businesses that need software to work in the real world.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "About Mentallion Systems",
    description:
      "Meet the engineering team behind Mentallion Systems and how we think about AI systems, workflow automation, and production software.",
    url: absoluteUrl("/about"),
    type: "website",
    images: [absoluteUrl(site.ogImage)]
  },
  twitter: {
    card: "summary_large_image",
    title: "About Mentallion Systems",
    description:
      "Meet the engineering team behind Mentallion Systems and how we think about AI systems, workflow automation, and production software.",
    images: [absoluteUrl(site.ogImage)]
  }
};

const beliefs = [
  {
    title: "Business workflows should not depend on endless manual effort.",
    body: "Many teams still spend hours on repetitive tasks that software can handle automatically. We study the workflow first, then build systems that remove unnecessary operational friction."
  },
  {
    title: "The right architecture matters more than the trendiest tool.",
    body: "AI models, frameworks, and automation tools change quickly. We focus on choosing the right technical approach for the actual business problem, not just the newest option."
  },
  {
    title: "A demo is not a production system.",
    body: "We care about what happens after launch: edge cases, reliability, user experience, maintainability, and whether the system can survive real usage."
  },
  {
    title: "Clients should understand what they are paying for.",
    body: "We explain tradeoffs clearly, communicate honestly, and avoid hiding weak thinking behind technical jargon."
  }
];

const capabilities = [
  "Agentic AI systems",
  "Workflow automation",
  "RAG and knowledge systems",
  "SaaS platforms",
  "Web applications",
  "Mobile applications",
  "Internal tools",
  "AI-assisted operations"
];

const principles = [
  {
    label: "Intelligence",
    description:
      "We build systems that can reason over data, automate decisions, retrieve knowledge, and support real operational workflows."
  },
  {
    label: "Alliance",
    description:
      "We work as a technical partner, not just an external vendor. The goal is to understand the business deeply enough to build the right thing."
  },
  {
    label: "Systems",
    description:
      "We focus on reliable execution: clean architecture, scalable foundations, practical integrations, and software that remains useful after delivery."
  }
];

export default function AboutPage() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Mentallion Systems",
    url: absoluteUrl("/about"),
    description: metadata.description,
    mainEntity: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      description: site.description
    }
  };

  return (
    <SiteShell>
      <StructuredData id="about-page-schema" data={aboutPageSchema} />
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          bgcolor: "background.default",
          "&:before": {
            content: '""',
            position: "absolute",
            width: 560,
            height: 560,
            borderRadius: "50%",
            top: -220,
            right: -180,
            background:
              "radial-gradient(circle, rgba(28,58,47,0.16) 0%, transparent 68%)",
            pointerEvents: "none"
          },
          "&:after": {
            content: '""',
            position: "absolute",
            width: 440,
            height: 440,
            borderRadius: "50%",
            bottom: -180,
            left: -160,
            background:
              "radial-gradient(circle, rgba(28,58,47,0.1) 0%, transparent 70%)",
            pointerEvents: "none"
          }
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 1,
            py: { xs: 7, md: 11 }
          }}
        >
          <SectionReveal>
            <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
              <Grid size={{ xs: 12, md: 7.2 }}>
                <Chip
                  label="About Mentallion Systems"
                  color="primary"
                  variant="outlined"
                  sx={{
                    mb: 2,
                    borderRadius: 999,
                    fontWeight: 700,
                    bgcolor: "rgba(255,255,255,0.65)",
                    backdropFilter: "blur(14px)"
                  }}
                />

                <Typography
                  variant="h1"
                  sx={{
                    fontSize: {
                      xs: "3rem",
                      sm: "3.8rem",
                      md: "5.25rem"
                    },
                    lineHeight: 0.95,
                    letterSpacing: "-0.07em",
                    maxWidth: 900
                  }}
                >
                  We build intelligent systems for teams that need software to actually work.
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    mt: 3,
                    maxWidth: 700,
                    fontSize: { xs: "1.02rem", md: "1.1rem" },
                    lineHeight: 1.85
                  }}
                >
                  Mentallion Systems is an engineering team focused on AI systems,
                  workflow automation, SaaS products, and production-ready digital
                  platforms. We help businesses replace fragile manual processes with
                  dependable software that improves how work gets done.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4.8 }}>
                <Card
                  sx={{
                    borderRadius: 1.5,
                    border: "1px solid",
                    borderColor: "divider",
                    bgcolor: "rgba(255,255,255,0.76)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 24px 80px rgba(0,0,0,0.07)"
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Typography
                      variant="h4"
                      sx={{
                        mb: 2
                      }}
                    >
                      Built around engineering depth, not agency noise.
                    </Typography>

                    <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                      Our work is led by people who think through architecture,
                      workflows, constraints, edge cases, and long-term maintainability.
                      The goal is not only to launch something impressive. The goal is
                      to build something useful, stable, and worth keeping.
                    </Typography>

                    <Divider sx={{ my: 3 }} />

                    <Stack direction="row" flexWrap="wrap" gap={1}>
                      {capabilities.map((capability) => (
                        <Chip
                          key={capability}
                          label={capability}
                          size="small"
                          sx={{
                            borderRadius: 999,
                            fontWeight: 700,
                            bgcolor: "rgba(15,23,42,0.06)"
                          }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </SectionReveal>

          <SectionReveal>
            <Grid container spacing={4} sx={{ mt: { xs: 5, md: 8 } }}>
              <Grid size={{ xs: 12, md: 5 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "2.35rem", md: "3.25rem" },
                    lineHeight: 1,
                    letterSpacing: "-0.055em",
                    maxWidth: 480
                  }}
                >
                  Why we exist
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 7 }}>
                <Stack spacing={2.2}>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.85 }}>
                    Businesses rarely struggle because they lack ideas. They struggle
                    because the systems around those ideas are slow, disconnected, or
                    too dependent on manual work.
                  </Typography>

                  <Typography color="text.secondary" sx={{ lineHeight: 1.85 }}>
                    We created Mentallion Systems to solve that gap. Our work sits
                    between business operations and software engineering: understanding
                    how work currently happens, identifying where intelligence and
                    automation can help, and then building the technical system behind it.
                  </Typography>

                  <Typography color="text.secondary" sx={{ lineHeight: 1.85 }}>
                    That can mean an AI agent that helps employees search company
                    knowledge, an automation that removes repetitive back-office work,
                    a SaaS platform for a new product, or a custom application that
                    finally replaces messy spreadsheets and disconnected tools.
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </SectionReveal>

          <SectionReveal>
            <Box
              sx={{
                mt: { xs: 5, md: 8 },
                p: { xs: 3, md: 4.5 },
                borderRadius: 1.5,
                border: "1px solid",
                borderColor: "primary.dark",
                bgcolor: "primary.main",
                color: "primary.contrastText",
                width: "100%",
                overflow: "hidden",
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  width: 360,
                  height: 360,
                  borderRadius: "50%",
                  right: -120,
                  top: -140,
                  background: "rgba(255,255,255,0.1)",
                  pointerEvents: "none"
                }
              }}
            >
              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Typography sx={{ color: "rgba(247,245,242,0.74)", mb: 1.25 }}>
                  Why the name fits
                </Typography>

                <Typography
                  variant="h3"
                  sx={{
                    mb: 2,
                    maxWidth: 780,
                    letterSpacing: "-0.045em",
                    lineHeight: 1.05
                  }}
                >
                  Mentallion Systems reflects the kind of partner we aim to be.
                </Typography>

                <Typography
                  sx={{
                    color: "rgba(247,245,242,0.82)",
                    maxWidth: 760,
                    lineHeight: 1.8,
                    mb: 4
                  }}
                >
                  The name brings together three ideas that guide our work:
                  intelligent thinking, collaborative partnership, and reliable
                  technical execution.
                </Typography>

                <Grid container spacing={2.5}>
                  {principles.map((principle) => (
                    <Grid key={principle.label} size={{ xs: 12, md: 4 }}>
                      <Box
                        sx={{
                          height: "100%",
                          p: 2.5,
                          borderRadius: 1.5,
                          border: "1px solid rgba(255,255,255,0.18)",
                          bgcolor: "rgba(255,255,255,0.08)",
                          backdropFilter: "blur(12px)"
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            mb: 1,
                            color: "primary.contrastText"
                          }}
                        >
                          {principle.label}
                        </Typography>

                        <Typography
                          sx={{
                            color: "rgba(247,245,242,0.78)",
                            lineHeight: 1.75
                          }}
                        >
                          {principle.description}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </SectionReveal>

          <SectionReveal>
            <Grid container spacing={3} sx={{ mt: { xs: 5, md: 8 } }}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "2.35rem", md: "3.1rem" },
                    lineHeight: 1,
                    letterSpacing: "-0.055em",
                    maxWidth: 360
                  }}
                >
                  What we believe
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    mt: 2,
                    lineHeight: 1.8,
                    maxWidth: 360
                  }}
                >
                  These beliefs shape how we design, build, communicate, and make
                  technical decisions with clients.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 8 }}>
                <Grid container spacing={2.5}>
                  {beliefs.map((belief) => (
                    <Grid key={belief.title} size={{ xs: 12, md: 6 }}>
                      <Card
                        sx={{
                          height: "100%",
                          borderRadius: 1.5,
                          border: "1px solid",
                          borderColor: "divider",
                          bgcolor: "rgba(255,255,255,0.72)",
                          backdropFilter: "blur(18px)",
                          boxShadow: "none"
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Typography
                            variant="h5"
                            sx={{
                              mb: 1.25,
                              letterSpacing: "-0.03em",
                              lineHeight: 1.15
                            }}
                          >
                            {belief.title}
                          </Typography>

                          <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
                            {belief.body}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </SectionReveal>

          <SectionReveal>
            <Card
              sx={{
                mt: { xs: 5, md: 8 },
                borderRadius: 1.5,
                border: "1px solid",
                borderColor: "divider",
                bgcolor: "rgba(255,253,249,0.86)",
                backdropFilter: "blur(20px)",
                boxShadow: "none"
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4.5 } }}>
                <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
                  <Grid size={{ xs: 12, md: 5 }}>
                    <Typography
                      variant="h3"
                      sx={{
                        letterSpacing: "-0.045em",
                        lineHeight: 1.05,
                        maxWidth: 460
                      }}
                    >
                      A small team with a serious engineering mindset.
                    </Typography>
                  </Grid>

                  <Grid size={{ xs: 12, md: 7 }}>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.85 }}>
                      Building practical AI systems for teams that need reliable
                      execution, not experiments. Our process is designed around
                      clear communication, fast feedback, and practical
                      delivery.
                    </Typography>

                    <Typography color="text.secondary" sx={{ mt: 2, lineHeight: 1.85 }}>
                      Clients usually come to us when they need a team that can think
                      beyond screens and features: a team that can understand the
                      workflow, design the system, build the product, and keep the
                      technical decisions grounded in the business goal.
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </SectionReveal>
        </Container>
      </Box>
    </SiteShell>
  );
}
