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

const servicesBannerImage =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=90";

const serviceHighlights = [
  ["Automation", "Workflows, OCR, approvals, and operational pipelines"],
  ["AI Systems", "Agents, retrieval, evaluation, and model orchestration"],
  ["SaaS", "Full products, dashboards, admin tooling, and secure platforms"]
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <SectionReveal>
        <Box
          sx={{
            position: "relative",
            minHeight: { xs: "calc(100vh - 82px)", md: "calc(100vh - 82px)" },
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            bgcolor: "#F3EFE7"
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 14% 18%, rgba(127,191,142,0.18), transparent 18%), radial-gradient(circle at 86% 22%, rgba(28,58,47,0.08), transparent 18%), linear-gradient(180deg, rgba(255,255,255,0.42) 0%, rgba(243,239,231,0.94) 100%)"
            }}
          />

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, transparent 100%)"
            }}
          />

          <Container
            maxWidth="xl"
            sx={{
              position: "relative",
              zIndex: 1,
              py: { xs: 8, md: 10 }
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 0.95fr) minmax(420px, 1.05fr)" },
                gap: { xs: 4, lg: 6 },
                alignItems: "center"
              }}
            >
              <Box
                sx={{
                  p: { xs: 0, lg: 0.5 },
                  width: "100%",
                  maxWidth: 760
                }}
              >
                <Box
                  sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: "30px",
                    bgcolor: "rgba(255,253,249,0.92)",
                    color: "text.primary",
                    backdropFilter: "blur(14px)",
                    boxShadow: "0 24px 70px rgba(25,30,28,0.08)",
                    border: "1px solid rgba(16,20,19,0.08)"
                  }}
                >
                  <Typography sx={{ color: "primary.main", mb: 1.5 }}>What we do</Typography>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: "3.2rem", md: "5rem" },
                      lineHeight: 0.94,
                      letterSpacing: "-0.065em",
                      maxWidth: 720
                    }}
                  >
                    Production systems for teams that need the real thing.
                  </Typography>
                  <Typography sx={{ mt: 3, maxWidth: 640, color: "text.secondary", lineHeight: 1.75 }}>
                    We build automation, AI systems, custom SaaS, and carefully integrated AI layers for companies that need software to survive real usage, real data, and real operational pressure.
                  </Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 4 }}>
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
                    <Typography sx={{ alignSelf: "center", color: "text.secondary" }}>
                      Clear scope, honest feedback, and a fast answer on fit.
                    </Typography>
                  </Stack>
                </Box>

                <Box
                  sx={{
                    mt: 2,
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "repeat(3, minmax(0, 1fr))" },
                    gap: 1.2
                  }}
                >
                  {serviceHighlights.map(([title, copy]) => (
                    <Box
                      key={title}
                      sx={{
                        p: 1.5,
                        borderRadius: "18px",
                        bgcolor: "rgba(255,253,249,0.82)",
                        border: "1px solid rgba(16,20,19,0.08)"
                      }}
                    >
                      <Typography sx={{ color: "#1C3A2F", fontWeight: 800, mb: 0.45 }}>
                        {title}
                      </Typography>
                      <Typography sx={{ color: "text.secondary", fontSize: "0.82rem", lineHeight: 1.45 }}>
                        {copy}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box
                sx={{
                  position: "relative",
                  minHeight: { xs: 360, md: 560 },
                  display: { xs: "none", lg: "block" }
                }}
              >
                <Box
                  component="img"
                  src={servicesBannerImage}
                  alt="Team collaborating around product and systems planning"
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "82%",
                    height: 430,
                    objectFit: "cover",
                    borderRadius: "32px",
                    boxShadow: "0 28px 90px rgba(16,20,19,0.16)"
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "52%",
                    p: 3,
                    borderRadius: "24px",
                    bgcolor: "#1C3A2F",
                    color: "primary.contrastText",
                    boxShadow: "0 24px 60px rgba(16,20,19,0.14)"
                  }}
                >
                  <Typography sx={{ fontSize: "0.76rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(247,245,242,0.68)", mb: 1 }}>
                    Delivery focus
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 1.5, lineHeight: 1.1 }}>
                    We design around the bottleneck first, then choose the tech.
                  </Typography>
                  <Stack spacing={1}>
                    {["Workflow mapping before implementation", "Production-minded architecture from day one", "AI only where it actually improves the system"].map((item) => (
                      <Box
                        key={item}
                        sx={{
                          px: 1.4,
                          py: 1.1,
                          borderRadius: 2,
                          bgcolor: "rgba(247,245,242,0.08)",
                          border: "1px solid rgba(247,245,242,0.08)"
                        }}
                      >
                        <Typography sx={{ color: "rgba(247,245,242,0.84)" }}>{item}</Typography>
                      </Box>
                    ))}
                  </Stack>
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
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "0.78fr 1.22fr" },
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
                  Service Lines
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "2.25rem", md: "3.7rem" },
                    lineHeight: 0.98,
                    letterSpacing: "-0.055em",
                    fontWeight: 800
                  }}
                >
                  Four ways we usually solve the problem.
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
                These are not rigid packages. They are the most common system shapes we design when a team needs manual work removed, decisions accelerated, or a product built properly from the ground up.
              </Typography>
            </Box>
          </SectionReveal>

          <SectionReveal>
            <Grid container spacing={3}>
              {site.services.map((service, index) => (
                <Grid key={service.title} size={{ xs: 12, md: 6 }}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: "26px",
                      border: "1px solid rgba(16,20,19,0.08)",
                      boxShadow:
                        index === 0
                          ? "0 22px 70px rgba(16,20,19,0.09)"
                          : "0 14px 44px rgba(16,20,19,0.05)",
                      bgcolor: "#FFFDF8"
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 3.6 } }}>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                        sx={{ mb: 2 }}
                      >
                        <Chip
                          label={index === 0 ? "Most requested" : "Service"}
                          sx={{
                            bgcolor: index === 0 ? "rgba(28,58,47,0.1)" : "rgba(16,20,19,0.06)",
                            color: index === 0 ? "#1C3A2F" : "#101413",
                            fontWeight: 800
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: "0.76rem",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "text.secondary",
                            fontWeight: 800
                          }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </Typography>
                      </Stack>

                      <Typography
                        variant="h4"
                        sx={{
                          mb: 2,
                          fontSize: { xs: "1.55rem", md: "1.85rem" },
                          lineHeight: 1.05,
                          letterSpacing: "-0.04em"
                        }}
                      >
                        {service.title}
                      </Typography>

                      <Typography sx={{ mb: 1.1, color: "text.secondary", lineHeight: 1.65 }}>
                        <Box component="span" sx={{ color: "text.primary", fontWeight: 700 }}>
                          Who this is for:
                        </Box>{" "}
                        {service.audience}
                      </Typography>
                      <Typography sx={{ mb: 1.1, color: "text.secondary", lineHeight: 1.65 }}>
                        <Box component="span" sx={{ color: "text.primary", fontWeight: 700 }}>
                          What we build:
                        </Box>{" "}
                        {service.build}
                      </Typography>
                      <Typography sx={{ mb: 2.4, color: "text.secondary", lineHeight: 1.65 }}>
                        <Box component="span" sx={{ color: "text.primary", fontWeight: 700 }}>
                          The outcome:
                        </Box>{" "}
                        {service.outcome}
                      </Typography>

                      <Box
                        sx={{
                          p: 2,
                          borderRadius: "18px",
                          bgcolor: "rgba(28,58,47,0.04)",
                          border: "1px solid rgba(28,58,47,0.08)",
                          mb: 2.4
                        }}
                      >
                        <Stack component="ul" spacing={1.1} sx={{ pl: 2.2, m: 0 }}>
                          {service.bullets.map((bullet) => (
                            <Typography component="li" key={bullet} color="text.secondary" sx={{ lineHeight: 1.55 }}>
                              {bullet}
                            </Typography>
                          ))}
                        </Stack>
                      </Box>

                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {service.tags.map((tag) => (
                          <Chip key={tag} label={tag} variant="outlined" />
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </SectionReveal>

          <SectionReveal>
            <Box
              sx={{
                mt: { xs: 7, md: 10 },
                display: "grid",
                gridTemplateColumns: { xs: "1fr", lg: "0.9fr 1.1fr" },
                gap: { xs: 3, md: 4 }
              }}
            >
              <Box
                sx={{
                  p: { xs: 3.5, md: 4.5 },
                  borderRadius: "28px",
                  bgcolor: "#1C3A2F",
                  color: "primary.contrastText"
                }}
              >
                <Typography sx={{ color: "rgba(247,245,242,0.72)", mb: 1.2 }}>How we work</Typography>
                <Typography variant="h3" sx={{ mb: 2, fontSize: { xs: "2rem", md: "2.8rem" }, letterSpacing: "-0.05em", lineHeight: 1 }}>
                  Technical depth without unnecessary complexity.
                </Typography>
                <Typography sx={{ color: "rgba(247,245,242,0.82)", lineHeight: 1.75, maxWidth: 560 }}>
                  We do not throw tools at a problem because they are fashionable. We look at the workflow, map the failure points, decide what actually needs software, and then build the most reliable version of that system.
                </Typography>
              </Box>

              <Box
                sx={{
                  p: { xs: 3.5, md: 4.5 },
                  borderRadius: "28px",
                  bgcolor: "rgba(28,58,47,0.08)",
                  border: "1px solid",
                  borderColor: "divider"
                }}
              >
                <Typography variant="h3" sx={{ mb: 2, fontSize: { xs: "2rem", md: "2.8rem" }, letterSpacing: "-0.05em", lineHeight: 1 }}>
                  We&apos;re not the right fit for everyone. That&apos;s fine.
                </Typography>
                <Typography paragraph color="text.secondary">
                  We do not take projects just to take them. If your problem does not need AI, we will tell you that and point you toward a simpler answer.
                </Typography>
                <Typography paragraph color="text.secondary">
                  We are also not the team for clients who want a full custom system for the price of a single workflow, or who need so many approvals that nothing ships.
                </Typography>
                <Typography color="text.secondary">
                  If you want something built properly and you understand what that takes, let&apos;s talk.
                </Typography>
              </Box>
            </Box>
          </SectionReveal>

          <SectionReveal>
            <Box
              sx={{
                mt: { xs: 7, md: 10 },
                p: { xs: 4, md: 5 },
                borderRadius: "28px",
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
                  <Typography sx={{ color: "rgba(247,245,242,0.7)", mb: 1.2 }}>Next step</Typography>
                  <Typography variant="h2" sx={{ fontSize: { xs: "2.25rem", md: "3.7rem" }, lineHeight: 0.98, letterSpacing: "-0.055em", mb: 2 }}>
                    Bring us the workflow, the mess, or the half-built system.
                  </Typography>
                  <Typography sx={{ color: "rgba(247,245,242,0.8)", lineHeight: 1.75, maxWidth: 620 }}>
                    We&apos;ll tell you what should be automated, what should stay human, and whether we are the right team to build it.
                  </Typography>
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
