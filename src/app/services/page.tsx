import type { Metadata } from "next";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography
} from "@mui/material";
import { SiteShell } from "@/components/site-shell";
import { SectionReveal } from "@/components/section-reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Business process automation, AI agent systems, custom SaaS, and AI integration. Built for production, not proof of concept."
};

const servicesBannerImage = "/images/service-banner.webp";

const serviceHighlights = [
  ["Automation", "Workflows, OCR, approvals, and operational pipelines"],
  ["AI Systems", "Agents, retrieval, evaluation, and model orchestration"],
  ["SaaS", "Full products, dashboards, admin tooling, and secure platforms"]
] as const;

const trustStats = [
  { value: "4", label: "Core service lines" },
  { value: "Production", label: "Build standard from day one" },
  { value: "End-to-end", label: "Strategy, design, engineering, launch" }
] as const;

const deliveryPrinciples = [
  "Workflow mapping before implementation",
  "Production-minded architecture from day one",
  "AI only where it actually improves the system"
] as const;

const engagementSteps = [
  {
    number: "01",
    title: "Diagnose the bottleneck",
    body:
      "We start with the operational mess, not the tool list, so the scope is tied to the real constraint."
  },
  {
    number: "02",
    title: "Design the right system shape",
    body:
      "Automation, AI layer, agent workflow, or a full product build. The structure follows the problem."
  },
  {
    number: "03",
    title: "Ship for actual usage",
    body:
      "We build with data quality, failure modes, review steps, and long-term maintainability in mind."
  }
] as const;

const serviceCardAccents = [
  {
    border: "rgba(28,58,47,0.18)",
    glow: "radial-gradient(circle at 0% 0%, rgba(127,191,142,0.2), transparent 48%)",
    chipBg: "rgba(28,58,47,0.1)",
    chipColor: "#1C3A2F"
  },
  {
    border: "rgba(185,169,143,0.26)",
    glow: "radial-gradient(circle at 100% 0%, rgba(185,169,143,0.24), transparent 48%)",
    chipBg: "rgba(185,169,143,0.18)",
    chipColor: "#5D4B35"
  },
  {
    border: "rgba(85,112,101,0.2)",
    glow: "radial-gradient(circle at 0% 100%, rgba(53,88,76,0.18), transparent 48%)",
    chipBg: "rgba(53,88,76,0.1)",
    chipColor: "#27473D"
  },
  {
    border: "rgba(16,20,19,0.12)",
    glow: "radial-gradient(circle at 100% 100%, rgba(16,20,19,0.12), transparent 42%)",
    chipBg: "rgba(16,20,19,0.06)",
    chipColor: "#101413"
  }
] as const;

export default function ServicesPage() {
  return (
    <SiteShell>
      <SectionReveal>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            bgcolor: "#F3EFE7"
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 12% 18%, rgba(127,191,142,0.2), transparent 16%), radial-gradient(circle at 84% 24%, rgba(28,58,47,0.08), transparent 18%), linear-gradient(180deg, rgba(255,255,255,0.38) 0%, rgba(243,239,231,0.94) 100%)"
            }}
          />

          <Box
            sx={{
              position: "absolute",
              insetInline: 0,
              top: 90,
              height: 1,
              bgcolor: "rgba(28,58,47,0.08)"
            }}
          />

          <Container
            maxWidth="xl"
            sx={{
              position: "relative",
              zIndex: 1,
              py: { xs: 7, md: 9 }
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  lg: "minmax(0, 0.92fr) minmax(440px, 1.08fr)"
                },
                gap: { xs: 4, lg: 6 },
                alignItems: "stretch"
              }}
            >
              <Box sx={{ maxWidth: 760 }}>
                <Box
                  sx={{
                    p: { xs: 3, md: 4.5 },
                    borderRadius: "32px",
                    bgcolor: "rgba(255,253,249,0.88)",
                    color: "text.primary",
                    backdropFilter: "blur(18px)",
                    boxShadow: "0 24px 70px rgba(25,30,28,0.08)",
                    border: "1px solid rgba(16,20,19,0.08)"
                  }}
                >
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    justifyContent="space-between"
                    spacing={2}
                    sx={{ mb: 2 }}
                  >
                    <Typography
                      sx={{
                        color: "primary.main",
                        fontSize: "0.82rem",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        fontWeight: 800
                      }}
                    >
                      What we do
                    </Typography>

                    <Chip
                      label="Built for real usage"
                      sx={{
                        alignSelf: { xs: "flex-start", sm: "center" },
                        bgcolor: "rgba(28,58,47,0.08)",
                        color: "#1C3A2F",
                        fontWeight: 800
                      }}
                    />
                  </Stack>

                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: "3.15rem", md: "5.25rem" },
                      lineHeight: 0.93,
                      letterSpacing: "-0.07em",
                      maxWidth: 720
                    }}
                  >
                    Production systems for teams that need the real thing.
                  </Typography>

                  <Typography
                    sx={{
                      mt: 3,
                      maxWidth: 650,
                      color: "text.secondary",
                      lineHeight: 1.78,
                      fontSize: { xs: "1rem", md: "1.08rem" }
                    }}
                  >
                    We build automation, AI systems, custom SaaS, and carefully
                    integrated AI layers for companies that need software to
                    survive real usage, real data, and real operational
                    pressure.
                  </Typography>

                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    sx={{ mt: 4 }}
                    alignItems={{ xs: "flex-start", sm: "center" }}
                  >
                    <Button
                      component={Link}
                      href="/contact#contact-form"
                      variant="contained"
                      endIcon={<ArrowForwardIcon fontSize="small" />}
                      sx={{
                        bgcolor: "primary.main",
                        color: "#fff !important",
                        "&:hover": {
                          bgcolor: "primary.dark"
                        },
                        "& .MuiButton-endIcon, & .MuiSvgIcon-root": {
                          color: "#fff !important"
                        }
                      }}
                    >
                      Talk through your project
                    </Button>

                    <Typography
                      sx={{
                        color: "text.secondary",
                        maxWidth: 320
                      }}
                    >
                      Clear scope, honest feedback, and a fast answer on fit.
                    </Typography>
                  </Stack>

                  <Divider sx={{ my: 3, borderColor: "rgba(28,58,47,0.1)" }} />

                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(3, minmax(0, 1fr))"
                      },
                      gap: 1.35
                    }}
                  >
                    {serviceHighlights.map(([title, copy]) => (
                      <Box
                        key={title}
                        sx={{
                          p: 1.6,
                          borderRadius: "18px",
                          bgcolor: "rgba(255,253,249,0.82)",
                          border: "1px solid rgba(16,20,19,0.08)"
                        }}
                      >
                        <Typography
                          sx={{ color: "#1C3A2F", fontWeight: 800, mb: 0.5 }}
                        >
                          {title}
                        </Typography>
                        <Typography
                          sx={{
                            color: "text.secondary",
                            fontSize: "0.82rem",
                            lineHeight: 1.45
                          }}
                        >
                          {copy}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                <Box
                  sx={{
                    mt: 2,
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      sm: "repeat(3, minmax(0, 1fr))"
                    },
                    gap: 1.2
                  }}
                >
                  {trustStats.map((item) => (
                    <Box
                      key={item.label}
                      sx={{
                        p: 2,
                        borderRadius: "20px",
                        bgcolor: "rgba(255,253,249,0.72)",
                        border: "1px solid rgba(16,20,19,0.06)"
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: "1.2rem", md: "1.38rem" },
                          lineHeight: 1.05,
                          fontWeight: 800,
                          color: "#101413",
                          mb: 0.6
                        }}
                      >
                        {item.value}
                      </Typography>
                      <Typography
                        sx={{
                          color: "text.secondary",
                          fontSize: "0.84rem",
                          lineHeight: 1.45
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box
                sx={{
                  position: "relative",
                  minHeight: { xs: 460, md: 620, lg: 650 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  px: { xs: 0, lg: 2 }
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: { xs: "14px 0 26px 0", lg: "26px 18px 34px 52px" },
                    borderRadius: "36px",
                    bgcolor: "rgba(255,255,255,0.35)",
                    border: "1px solid rgba(16,20,19,0.06)"
                  }}
                />

                <Box
                  component="img"
                  src={servicesBannerImage}
                  alt="Team collaborating around product and systems planning"
                  sx={{
                    position: "absolute",
                    top: { xs: 0, lg: 22 },
                    right: { xs: 0, lg: 22 },
                    width: { xs: "100%", lg: "78%" },
                    height: { xs: 280, sm: 350, md: 430, lg: 470 },
                    objectFit: "cover",
                    borderRadius: "34px",
                    boxShadow: "0 30px 90px rgba(16,20,19,0.14)"
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    left: { xs: 16, md: 0, lg: 10 },
                    right: { xs: 16, md: "auto" },
                    bottom: { xs: 0, md: 18, lg: 42 },
                    width: { xs: "auto", md: "52%" },
                    p: { xs: 2.4, md: 3.1 },
                    borderRadius: "26px",
                    bgcolor: "#1C3A2F",
                    color: "primary.contrastText",
                    boxShadow: "0 24px 60px rgba(16,20,19,0.14)"
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.76rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(247,245,242,0.68)",
                      mb: 1
                    }}
                  >
                    Delivery focus
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ mb: 1.6, lineHeight: 1.08, maxWidth: 360 }}
                  >
                    We design around the bottleneck first, then choose the
                    tech.
                  </Typography>
                  <Stack spacing={1}>
                    {deliveryPrinciples.map((item) => (
                      <Box
                        key={item}
                        sx={{
                          px: 1.4,
                          py: 1.1,
                          borderRadius: 1.5,
                          bgcolor: "rgba(247,245,242,0.08)",
                          border: "1px solid rgba(247,245,242,0.08)"
                        }}
                      >
                        <Typography sx={{ color: "rgba(247,245,242,0.84)" }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    top: { xs: 18, md: 24, lg: 54 },
                    left: { xs: 18, lg: 0 },
                    px: 1.7,
                    py: 1.3,
                    borderRadius: "18px",
                    bgcolor: "rgba(255,253,249,0.92)",
                    border: "1px solid rgba(16,20,19,0.08)",
                    boxShadow: "0 12px 36px rgba(16,20,19,0.08)"
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.72rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: "text.secondary",
                      fontWeight: 800
                    }}
                  >
                    Scope before stack
                  </Typography>
                  <Typography sx={{ mt: 0.6, fontWeight: 700, color: "#101413" }}>
                    Reliable systems over trend-driven builds
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </SectionReveal>

      <Box sx={{ bgcolor: "#F6F4EF" }}>
        <Container maxWidth="xl" sx={{ py: { xs: 7, md: 11 } }}>
          <SectionReveal>
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                mb: { xs: 4, md: 7 },
                borderRadius: "28px",
                bgcolor: "#FFFDF8",
                border: "1px solid rgba(16,20,19,0.08)",
                boxShadow: "0 16px 50px rgba(16,20,19,0.05)"
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "0.82fr 1.18fr" },
                  gap: { xs: 3, md: 5.5 },
                  alignItems: "start"
                }}
              >
                <Box sx={{ maxWidth: 470 }}>
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
                    Engagement shape
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "2.25rem", md: "3.5rem" },
                      lineHeight: 0.98,
                      letterSpacing: "-0.055em"
                    }}
                  >
                    Good delivery starts with a clean read on the problem.
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "1rem", md: "1.06rem" },
                    lineHeight: 1.75,
                    maxWidth: 760
                  }}
                >
                  These are not rigid packages. They are the most common system
                  shapes we design when a team needs manual work removed,
                  decisions accelerated, or a product built properly from the
                  ground up.
                </Typography>
              </Box>

              <Grid container spacing={2} sx={{ mt: { xs: 3, md: 4 } }}>
                {engagementSteps.map((step) => (
                  <Grid key={step.number} size={{ xs: 12, md: 4 }}>
                    <Box
                      sx={{
                        height: "100%",
                        p: 2.4,
                        borderRadius: "22px",
                        bgcolor: "rgba(28,58,47,0.03)",
                        border: "1px solid rgba(28,58,47,0.08)"
                      }}
                    >
                      <Typography
                        sx={{
                          color: "primary.main",
                          fontSize: "0.78rem",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          fontWeight: 800,
                          mb: 1.25
                        }}
                      >
                        {step.number}
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{ mb: 1, lineHeight: 1.12, maxWidth: 260 }}
                      >
                        {step.title}
                      </Typography>
                      <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                        {step.body}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </SectionReveal>

          <SectionReveal>
            <Grid container spacing={3}>
              {site.services.map((service, index) => {
                const accent = serviceCardAccents[index % serviceCardAccents.length];

                return (
                  <Grid key={service.title} size={{ xs: 12, md: 6 }}>
                    <Card
                      sx={{
                        position: "relative",
                        height: "100%",
                        overflow: "hidden",
                        borderRadius: "28px",
                        border: `1px solid ${accent.border}`,
                        boxShadow:
                          index === 0
                            ? "0 24px 72px rgba(16,20,19,0.08)"
                            : "0 16px 46px rgba(16,20,19,0.045)",
                        bgcolor: "#FFFDF8"
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          background: accent.glow,
                          pointerEvents: "none"
                        }}
                      />

                      <CardContent
                        sx={{
                          position: "relative",
                          zIndex: 1,
                          p: { xs: 3, md: 3.8 }
                        }}
                      >
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="flex-start"
                          spacing={2}
                          sx={{ mb: 2.4 }}
                        >
                          <Chip
                            label={index === 0 ? "Most requested" : "Service"}
                            sx={{
                              bgcolor: accent.chipBg,
                              color: accent.chipColor,
                              fontWeight: 800
                            }}
                          />

                          <Box
                            sx={{
                              width: 44,
                              height: 44,
                              borderRadius: "14px",
                              border: "1px solid rgba(16,20,19,0.08)",
                              bgcolor: "rgba(255,255,255,0.72)",
                              display: "grid",
                              placeItems: "center",
                              flexShrink: 0
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "0.82rem",
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: "text.secondary",
                                fontWeight: 800
                              }}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </Typography>
                          </Box>
                        </Stack>

                        <Typography
                          variant="h4"
                          sx={{
                            mb: 2.1,
                            fontSize: { xs: "1.65rem", md: "1.95rem" },
                            lineHeight: 1.03,
                            letterSpacing: "-0.045em",
                            maxWidth: 520
                          }}
                        >
                          {service.title}
                        </Typography>

                        <Box
                          sx={{
                            display: "grid",
                            gap: 1.15,
                            mb: 2.5
                          }}
                        >
                          <Typography
                            sx={{
                              color: "text.secondary",
                              lineHeight: 1.68
                            }}
                          >
                            <Box
                              component="span"
                              sx={{
                                color: "text.primary",
                                fontWeight: 700
                              }}
                            >
                              Who this is for:
                            </Box>{" "}
                            {service.audience}
                          </Typography>
                          <Typography
                            sx={{
                              color: "text.secondary",
                              lineHeight: 1.68
                            }}
                          >
                            <Box
                              component="span"
                              sx={{
                                color: "text.primary",
                                fontWeight: 700
                              }}
                            >
                              What we build:
                            </Box>{" "}
                            {service.build}
                          </Typography>
                          <Typography
                            sx={{
                              color: "text.secondary",
                              lineHeight: 1.68
                            }}
                          >
                            <Box
                              component="span"
                              sx={{
                                color: "text.primary",
                                fontWeight: 700
                              }}
                            >
                              The outcome:
                            </Box>{" "}
                            {service.outcome}
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            p: 2.1,
                            borderRadius: "20px",
                            bgcolor: "rgba(255,255,255,0.72)",
                            border: "1px solid rgba(28,58,47,0.08)",
                            mb: 2.4
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "0.76rem",
                              letterSpacing: "0.14em",
                              textTransform: "uppercase",
                              color: "text.secondary",
                              fontWeight: 800,
                              mb: 1.2
                            }}
                          >
                            Typical delivery focus
                          </Typography>

                          <Stack spacing={1.15}>
                            {service.bullets.map((bullet) => (
                              <Stack
                                key={bullet}
                                direction="row"
                                spacing={1.05}
                                alignItems="center"
                              >
                                <Box
                                  sx={{
                                    width: 7,
                                    height: 7,
                                    borderRadius: "50%",
                                    bgcolor: accent.chipColor,
                                    flexShrink: 0,
                                    alignSelf: "flex-start",
                                    mt: "0.42rem"
                                  }}
                                />
                                <Typography
                                  color="text.secondary"
                                  sx={{ lineHeight: 1.58 }}
                                >
                                  {bullet}
                                </Typography>
                              </Stack>
                            ))}
                          </Stack>
                        </Box>

                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                          {service.tags.map((tag) => (
                            <Chip
                              key={tag}
                              label={tag}
                              variant="outlined"
                              sx={{
                                bgcolor: "rgba(255,255,255,0.56)",
                                borderColor: "rgba(28,58,47,0.12)"
                              }}
                            />
                          ))}
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </SectionReveal>

          <SectionReveal>
            <Box
              sx={{
                mt: { xs: 7, md: 10 },
                display: "grid",
                gridTemplateColumns: { xs: "1fr", lg: "0.95fr 1.05fr" },
                gap: { xs: 3, md: 4 }
              }}
            >
              <Box
                sx={{
                  p: { xs: 3.5, md: 4.5 },
                  borderRadius: "30px",
                  bgcolor: "#1C3A2F",
                  color: "primary.contrastText",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(circle at 82% 18%, rgba(247,245,242,0.08), transparent 18%), radial-gradient(circle at 12% 82%, rgba(127,191,142,0.18), transparent 24%)"
                  }}
                />
                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Typography sx={{ color: "rgba(247,245,242,0.72)", mb: 1.2 }}>
                    How we work
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      mb: 2,
                      fontSize: { xs: "2rem", md: "2.9rem" },
                      letterSpacing: "-0.05em",
                      lineHeight: 0.98,
                      maxWidth: 520
                    }}
                  >
                    Technical depth without unnecessary complexity.
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(247,245,242,0.82)",
                      lineHeight: 1.78,
                      maxWidth: 560,
                      mb: 2.4
                    }}
                  >
                    We do not throw tools at a problem because they are
                    fashionable. We look at the workflow, map the failure
                    points, decide what actually needs software, and then build
                    the most reliable version of that system.
                  </Typography>

                  <Stack spacing={1}>
                    {[
                      "Software decisions tied to workflow reality",
                      "Measured AI usage instead of novelty for its own sake",
                      "Delivery shaped around long-term maintainability"
                    ].map((item) => (
                      <Box
                        key={item}
                        sx={{
                          px: 1.5,
                          py: 1.15,
                          borderRadius: 1.5,
                          bgcolor: "rgba(247,245,242,0.08)",
                          border: "1px solid rgba(247,245,242,0.08)"
                        }}
                      >
                        <Typography sx={{ color: "rgba(247,245,242,0.86)" }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Box>

              <Box
                sx={{
                  p: { xs: 3.5, md: 4.5 },
                  borderRadius: "30px",
                  bgcolor: "rgba(255,253,249,0.84)",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: "0 16px 50px rgba(16,20,19,0.05)"
                }}
              >
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
                  Fit check
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    mb: 2,
                    fontSize: { xs: "2rem", md: "2.9rem" },
                    letterSpacing: "-0.05em",
                    lineHeight: 0.98
                  }}
                >
                  We&apos;re not the right fit for everyone. That&apos;s fine.
                </Typography>
                <Typography paragraph color="text.secondary">
                  We do not take projects just to take them. If your problem
                  does not need AI, we will tell you that and point you toward
                  a simpler answer.
                </Typography>
                <Typography paragraph color="text.secondary">
                  We are also not the team for clients who want a full custom
                  system for the price of a single workflow, or who need so many
                  approvals that nothing ships.
                </Typography>
                <Typography color="text.secondary">
                  If you want something built properly and you understand what
                  that takes, let&apos;s talk.
                </Typography>
              </Box>
            </Box>
          </SectionReveal>

          <SectionReveal>
            <Box
              sx={{
                mt: { xs: 7, md: 10 },
                p: { xs: 4, md: 5 },
                borderRadius: "30px",
                bgcolor: "#0F1413",
                color: "primary.contrastText",
                overflow: "hidden",
                position: "relative"
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at 82% 20%, rgba(127,191,142,0.18), transparent 16%), radial-gradient(circle at 18% 78%, rgba(247,245,242,0.08), transparent 18%)"
                }}
              />

              <Stack
                direction={{ xs: "column", md: "row" }}
                justifyContent="space-between"
                spacing={3}
                alignItems={{ xs: "flex-start", md: "flex-end" }}
                sx={{ position: "relative", zIndex: 1 }}
              >
                <Box sx={{ maxWidth: 760 }}>
                  <Typography sx={{ color: "rgba(247,245,242,0.7)", mb: 1.2 }}>
                    Next step
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "2.25rem", md: "3.85rem" },
                      lineHeight: 0.97,
                      letterSpacing: "-0.055em",
                      mb: 2
                    }}
                  >
                    Bring us the workflow, the mess, or the half-built system.
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(247,245,242,0.8)",
                      lineHeight: 1.75,
                      maxWidth: 620,
                      mb: 2.4
                    }}
                  >
                    We&apos;ll tell you what should be automated, what should
                    stay human, and whether we are the right team to build it.
                  </Typography>

                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {[
                      "Automation opportunities",
                      "AI fit assessment",
                      "Scope clarity before build"
                    ].map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        sx={{
                          bgcolor: "rgba(247,245,242,0.08)",
                          color: "rgba(247,245,242,0.9)",
                          border: "1px solid rgba(247,245,242,0.12)"
                        }}
                      />
                    ))}
                  </Stack>
                </Box>

                <Button
                  component={Link}
                  href="/contact#contact-form"
                  variant="contained"
                  endIcon={<ArrowForwardIcon fontSize="small" />}
                  sx={{
                    bgcolor: "primary.main",
                    color: "#fff !important",
                    minWidth: 220,
                    "&:hover": {
                      bgcolor: "primary.dark"
                    },
                    "& .MuiButton-endIcon, & .MuiSvgIcon-root": {
                      color: "#fff !important"
                    }
                  }}
                >
                  Start the conversation
                </Button>
              </Stack>
            </Box>
          </SectionReveal>
        </Container>
      </Box>
    </SiteShell>
  );
}
