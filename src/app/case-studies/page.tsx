import type { Metadata } from "next";
import Link from "next/link";
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Stack,
  Typography
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { SiteShell } from "@/components/site-shell";
import { SectionReveal } from "@/components/section-reveal";
import { caseStudies } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Case Studies | Mentallion Systems",
  description:
    "Explore Mentallion Systems case studies across AI agents, automation workflows, SaaS platforms, document intelligence, marketplaces, and custom software systems."
};

export default function CaseStudiesPage() {
  return (
    <SiteShell>
      <Box
        sx={{
          bgcolor: "#0B0F0E",
          color: "#FFFDF8",
          borderBottom: "1px solid rgba(255,255,255,0.08)"
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              minHeight: { xs: 520, md: 640 },
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "1.02fr 0.98fr" },
              gap: { xs: 5, lg: 8 },
              alignItems: "center",
              py: { xs: 8, md: 11 }
            }}
          >
            <SectionReveal>
              <Box sx={{ maxWidth: 760 }}>
                <Typography
                  sx={{
                    mb: 2,
                    color: "rgba(255,253,248,0.68)",
                    fontSize: "0.86rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase"
                  }}
                >
                  Case Studies
                </Typography>

                <Typography
                  component="h1"
                  sx={{
                    fontSize: { xs: "3rem", sm: "4.2rem", md: "5.8rem" },
                    lineHeight: 0.92,
                    letterSpacing: "-0.07em",
                    fontWeight: 800,
                    maxWidth: 820
                  }}
                >
                  Systems built around real business work.
                </Typography>

                <Typography
                  sx={{
                    mt: 3,
                    maxWidth: 650,
                    color: "rgba(255,253,248,0.72)",
                    fontSize: { xs: "1rem", md: "1.12rem" },
                    lineHeight: 1.75
                  }}
                >
                  A closer look at how we design AI agents, workflow automation,
                  SaaS platforms, OCR systems, and digital products that solve
                  practical operating problems — not just impressive demo screens.
                </Typography>

                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  flexWrap="wrap"
                  sx={{ mt: 4 }}
                >
                  {["AI Agents", "Automation", "SaaS", "OCR", "Marketplaces"].map(
                    (item) => (
                      <Chip
                        key={item}
                        label={item}
                        sx={{
                          height: 34,
                          borderRadius: 999,
                          bgcolor: "rgba(255,255,255,0.08)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          color: "rgba(255,253,248,0.84)",
                          fontWeight: 600
                        }}
                      />
                    )
                  )}
                </Stack>
              </Box>
            </SectionReveal>

            <SectionReveal>
              <Box
                sx={{
                  position: "relative",
                  display: { xs: "none", md: "block" },
                  minHeight: 520
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=90"
                  alt="Mentallion Systems team working on AI and software systems"
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "76%",
                    height: 390,
                    objectFit: "cover",
                    borderRadius: "28px",
                    boxShadow: "0 34px 90px rgba(0,0,0,0.42)"
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    bottom: 10,
                    width: "54%",
                    p: 3,
                    borderRadius: "24px",
                    bgcolor: "#FFFDF8",
                    color: "#101413",
                    boxShadow: "0 30px 70px rgba(0,0,0,0.34)"
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.78rem",
                      color: "text.secondary",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      fontWeight: 800,
                      mb: 1.5
                    }}
                  >
                    How we present work
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "1.55rem",
                      lineHeight: 1.14,
                      fontWeight: 800,
                      letterSpacing: "-0.04em"
                    }}
                  >
                    Problem, build, outcome — clearly shown.
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <Stack spacing={1.2}>
                    {[
                      "What the client needed",
                      "What system we designed",
                      "What changed after delivery"
                    ].map((item) => (
                      <Stack
                        key={item}
                        direction="row"
                        spacing={1.2}
                        alignItems="center"
                      >
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            bgcolor: "#1C3A2F"
                          }}
                        />
                        <Typography sx={{ color: "text.secondary" }}>
                          {item}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              </Box>
            </SectionReveal>
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#F6F4EF" }}>
        <Container maxWidth="xl" sx={{ py: { xs: 7, md: 11 } }}>
          <SectionReveal>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "0.75fr 1.25fr" },
                gap: { xs: 3, md: 7 },
                mb: { xs: 4, md: 7 },
                alignItems: "end"
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "0.78rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "text.secondary",
                    fontWeight: 800,
                    mb: 1.3
                  }}
                >
                  Selected Work
                </Typography>

                <Typography
                  component="h2"
                  sx={{
                    fontSize: { xs: "2.25rem", md: "3.6rem" },
                    lineHeight: 0.98,
                    letterSpacing: "-0.055em",
                    fontWeight: 800
                  }}
                >
                  Case studies with the real work visible.
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "1rem", md: "1.06rem" },
                  lineHeight: 1.75,
                  maxWidth: 720
                }}
              >
                Each case study is structured around the business problem, the
                system we built, the technical domain, measurable outcomes, and
                a deeper page for visitors who want to understand the work.
              </Typography>
            </Box>
          </SectionReveal>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, minmax(0, 1fr))",
                xl: "repeat(3, minmax(0, 1fr))"
              },
              gap: { xs: 2.4, md: 3 }
            }}
          >
            {caseStudies.map((study, index) => (
              <SectionReveal key={study.slug}>
                <Box
                  component="article"
                  sx={{
                    height: "100%",
                    bgcolor: "#FFFDF8",
                    border: "1px solid rgba(16,20,19,0.09)",
                    borderRadius: "26px",
                    overflow: "hidden",
                    boxShadow:
                      index === 0
                        ? "0 28px 80px rgba(16,20,19,0.11)"
                        : "0 18px 50px rgba(16,20,19,0.06)",
                    transition:
                      "transform .25s ease, box-shadow .25s ease, border-color .25s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      borderColor: "rgba(28,58,47,0.22)",
                      boxShadow: "0 34px 90px rgba(16,20,19,0.13)"
                    }
                  }}
                >
                  <Box sx={{ position: "relative", height: 255 }}>
                    <Box
                      component="img"
                      src={study.imageUrl}
                      alt={study.title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block"
                      }}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.46) 100%)"
                      }}
                    />

                    <Chip
                      label={study.domain}
                      sx={{
                        position: "absolute",
                        left: 18,
                        bottom: 18,
                        maxWidth: "calc(100% - 36px)",
                        height: 34,
                        borderRadius: 999,
                        bgcolor: "rgba(255,253,248,0.92)",
                        color: "#101413",
                        fontWeight: 800,
                        "& .MuiChip-label": {
                          px: 1.4,
                          overflow: "hidden",
                          textOverflow: "ellipsis"
                        }
                      }}
                    />
                  </Box>

                  <Box sx={{ p: { xs: 2.4, md: 3 } }}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={2}
                      sx={{ mb: 1.4 }}
                    >
                      <Typography
                        sx={{
                          color: "#1C3A2F",
                          fontSize: "0.76rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          fontWeight: 900
                        }}
                      >
                        {study.eyebrow}
                      </Typography>

                      <Typography
                        sx={{
                          color: "text.secondary",
                          fontSize: "0.8rem",
                          whiteSpace: "nowrap"
                        }}
                      >
                        {study.timeline}
                      </Typography>
                    </Stack>

                    <Typography
                      component="h3"
                      sx={{
                        fontSize: { xs: "1.45rem", md: "1.62rem" },
                        lineHeight: 1.12,
                        letterSpacing: "-0.04em",
                        fontWeight: 850,
                        mb: 1.5
                      }}
                    >
                      {study.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.7,
                        fontSize: "0.96rem",
                        mb: 2.2
                      }}
                    >
                      {study.summary}
                    </Typography>

                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                        gap: 1,
                        mb: 2.3
                      }}
                    >
                      {study.metrics.map((metric) => (
                        <Box
                          key={`${study.slug}-${metric.label}`}
                          sx={{
                            border: "1px solid rgba(16,20,19,0.08)",
                            bgcolor: "rgba(28,58,47,0.035)",
                            borderRadius: "16px",
                            p: 1.5
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "1.2rem",
                              fontWeight: 850,
                              lineHeight: 1.1
                            }}
                          >
                            {metric.value}
                          </Typography>
                          <Typography
                            sx={{
                              mt: 0.35,
                              color: "text.secondary",
                              fontSize: "0.78rem",
                              lineHeight: 1.35
                            }}
                          >
                            {metric.label}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    <Stack spacing={1.1} sx={{ mb: 2.6 }}>
                      {study.mainPoints.slice(0, 3).map((point) => (
                        <Stack
                          key={point}
                          direction="row"
                          spacing={1.2}
                          alignItems="flex-start"
                        >
                          <Box
                            sx={{
                              mt: "0.52rem",
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              bgcolor: "#1C3A2F",
                              flexShrink: 0
                            }}
                          />
                          <Typography
                            sx={{
                              color: "text.secondary",
                              lineHeight: 1.55,
                              fontSize: "0.92rem"
                            }}
                          >
                            {point}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>

                    <Button
                      component={Link}
                      href={`/case-studies/${study.slug}`}
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        px: 0,
                        color: "#101413",
                        fontWeight: 850,
                        textTransform: "none",
                        letterSpacing: "-0.01em",
                        "&:hover": {
                          bgcolor: "transparent",
                          color: "#1C3A2F"
                        }
                      }}
                    >
                      Read case study
                    </Button>
                  </Box>
                </Box>
              </SectionReveal>
            ))}
          </Box>
        </Container>
      </Box>
    </SiteShell>
  );
}