import type { Metadata } from "next";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import NorthEastIcon from "@mui/icons-material/NorthEast";
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
import { StructuredData } from "@/components/structured-data";
import { SiteShell } from "@/components/site-shell";
import { SectionReveal } from "@/components/section-reveal";
import { HomeCaseStudiesSlider } from "@/components/home-case-studies-slider";
import { caseStudies, getCaseStudyVisual } from "@/content/case-studies";
import { site } from "@/content/site";
import { absoluteUrl, seo } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Mentallion Systems | AI systems that replace manual work",
    description: site.description,
    url: absoluteUrl("/"),
    type: "website",
    images: [absoluteUrl(site.ogImage)]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentallion Systems | AI systems that replace manual work",
    description: site.description,
    images: [absoluteUrl(site.ogImage)]
  }
};

export default function HomePage() {
  const selectedCaseStudies = caseStudies.slice(0, 6);
  type MarketCard = readonly [string, string];
  const marketRowLoopCount = 4;
  const globalMarketRows: readonly MarketCard[][] = [
    [
      ["us", "United States"],
      ["gb", "United Kingdom"],
      ["sa", "Saudi Arabia"],
      ["ae", "UAE"],
      ["sg", "Singapore"],
      ["fr", "France"],
      ["pt", "Portugal"]
    ],
    [
      ["de", "Germany"],
      ["id", "Indonesia"],
      ["hu", "Hungary"],
      ["za", "South Africa"],
      ["om", "Oman"],
      ["qa", "Qatar"]
    ]
  ];
  const desktopMarketRow = globalMarketRows.flat();
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: seo.defaultTitle,
    url: seo.siteUrl,
    description: site.description,
    about: site.services.map((service) => service.title),
    primaryImageOfPage: absoluteUrl(site.ogImage)
  };
  const selectedCaseStudySlides = selectedCaseStudies.map((item) => ({
    slug: item.slug,
    title: item.title,
    summary: item.summary,
    metric: item.metric,
    outcome: item.outcome,
    category: item.category,
    image: getCaseStudyVisual(item)
  }));

  return (
    <SiteShell>
      <StructuredData id="home-page-schema" data={homePageSchema} />
      <SectionReveal>
        <Box
          sx={{
            position: "relative",
            minHeight: {
              xs: "max(620px, calc(100vh - 74px))",
              md: "calc(100vh - 82px)"
            },
            display: "flex",
            alignItems: "stretch",
            overflow: "hidden"
          }}
        >
          <Box
            component="video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          >
            <source src="/videos/Gen AI Pg 5.mp4" type="video/mp4" />
          </Box>

          {/* <Box
            component="video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              mixBlendMode: "screen",
              opacity: 0.22
            }}
          >
            <source src="/videos/City Scape 5 sec.mp4" type="video/mp4" />
          </Box> */}

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(16,22,20,0.82) 0%, rgba(16,22,20,0.58) 38%, rgba(16,22,20,0.28) 100%)"
            }}
          />

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 78% 22%, rgba(247,245,242,0.18), transparent 18%), radial-gradient(circle at 82% 76%, rgba(28,58,47,0.25), transparent 24%)"
            }}
          />

          <Container
            maxWidth="lg"
            sx={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              py: { xs: 7, md: 10 }
            }}
          >
            <Grid container spacing={5} alignItems="end">
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography
                  sx={{
                    color: "rgba(247,245,242,0.78)",
                    mb: 2,
                    fontSize: { xs: "0.78rem", sm: "0.9rem" },
                    letterSpacing: "0.06em",
                    textTransform: "uppercase"
                  }}
                >
                  {site.availability}
                </Typography>

                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.6rem", sm: "3.6rem", md: "6.15rem" },
                    lineHeight: { xs: 0.98, md: 0.96 },
                    maxWidth: 860,
                    color: "primary.contrastText"
                  }}
                >
                  {site.hero.title}
                </Typography>

                <Typography
                  sx={{
                    mt: 3,
                    maxWidth: 720,
                    color: "rgba(247,245,242,0.82)"
                  }}
                >
                  {site.hero.body}
                </Typography>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ mt: 4 }}
                >
                  <Button
                    component={Link}
                    href="/contact#contact-form"
                    variant="contained"
                    endIcon={<ArrowOutwardIcon fontSize="small" />}
                    sx={{
                      bgcolor: "primary.main",
                      color: "#fff !important",
                      "&:hover": {
                        bgcolor: "primary.dark"
                      },
                      "& .MuiButton-startIcon, & .MuiButton-endIcon, & .MuiSvgIcon-root":
                        {
                          color: "#fff !important"
                        }
                    }}
                  >
                    Tell us what you&apos;re building
                  </Button>

                  <Typography
                    sx={{
                      alignSelf: "center",
                      color: "rgba(247,245,242,0.78)"
                    }}
                  >
                    Clear next steps, practical guidance, and a serious team to build with.
                  </Typography>
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 5 }}>
                <Stack spacing={2} alignItems="stretch">
                  <Card
                    sx={{
                      maxWidth: { xs: "100%", sm: 320, md: 280 },
                      borderRadius: 2,
                      bgcolor: "rgba(255,253,249,0.9)",
                      animation: "heroFloat 5.5s ease-in-out infinite",
                      alignSelf: { xs: "stretch", md: "flex-start" }
                    }}
                  >
                    <CardContent sx={{ p: 2.5 }}>
                      <Typography variant="h5" sx={{ mb: 1 }}>
                        {site.tagline}
                      </Typography>

                      <Typography
                        color="text.secondary"
                        sx={{ fontSize: "0.92rem" }}
                      >
                        Boutique consultancy feel. Engineering discipline.
                        Systems built for actual use.
                      </Typography>
                    </CardContent>
                  </Card>

                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                      gap: 1.25,
                      alignSelf: { xs: "stretch", md: "flex-end" },
                      width: { xs: "100%", md: 340 },
                      animation: "heroDrift 6.5s ease-in-out infinite"
                    }}
                  >
                    {[
                      [
                        "8 min",
                        "Weeks of manual review turned into one reliable flow"
                      ],
                      ["95%", "Routine grading and review work removed"],
                      [
                        "AI",
                        "Agents, automation, and data systems built for real use"
                      ],
                      [
                        "24h",
                        "Clear proposal after discovery and workflow study"
                      ]
                    ].map(([value, label], index) => (
                      <Box
                        key={value}
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          bgcolor:
                            index % 2 === 0
                              ? "rgba(28,58,47,0.92)"
                              : "rgba(255,253,249,0.92)",
                          color:
                            index % 2 === 0
                              ? "primary.contrastText"
                              : "text.primary",
                          backdropFilter: "blur(12px)"
                        }}
                      >
                        <Typography variant="h4" sx={{ mb: 0.45 }}>
                          {value}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: "0.82rem",
                            color:
                              index % 2 === 0
                                ? "rgba(247,245,242,0.82)"
                                : "text.secondary"
                          }}
                        >
                          {label}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </SectionReveal>

      <SectionReveal>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderTop: "1px solid rgba(28,58,47,0.08)",
            borderBottom: "1px solid rgba(28,58,47,0.08)",
            bgcolor: "rgba(127,191,142,0.12)",
            py: { xs: 2.5, md: 3.1 },
            "&::before, &::after": {
              content: '""',
              position: "absolute",
              top: 0,
              zIndex: 2,
              width: { xs: 26, md: 70 },
              height: "100%",
              pointerEvents: "none"
            },
            "&::before": {
              left: 0,
              background:
                "linear-gradient(90deg, rgba(236,246,238,1) 0%, rgba(236,246,238,0.96) 18%, rgba(236,246,238,0.72) 42%, rgba(236,246,238,0) 100%)"
            },
            "&::after": {
              right: 0,
              background:
                "linear-gradient(270deg, rgba(236,246,238,1) 0%, rgba(236,246,238,0.96) 18%, rgba(236,246,238,0.72) 42%, rgba(236,246,238,0) 100%)"
            },
            "@keyframes globalFlagsMarqueeA": {
              "0%": {
                transform: "translate3d(0, 0, 0)"
              },
              "100%": {
                transform: "translate3d(-50%, 0, 0)"
              }
            },
            "@keyframes globalFlagsMarqueeB": {
              "0%": {
                transform: "translate3d(-50%, 0, 0)"
              },
              "100%": {
                transform: "translate3d(0, 0, 0)"
              }
            }
          }}
        >
          <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>
            <Container maxWidth="lg">
              <Box sx={{ px: { xs: 0.5, md: 0.75 }, pb: { xs: 1.5, md: 1.8 } }}>
                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: { xs: "0.74rem", md: "0.79rem" },
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    fontWeight: 800,
                    mb: 0.65
                  }}
                >
                  Markets we&apos;ve worked across
                </Typography>

                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "0.92rem", md: "0.98rem" },
                    maxWidth: 620,
                    lineHeight: 1.6
                  }}
                >
                  Delivery experience across global markets, teams, and
                  operating environments.
                </Typography>
              </Box>
            </Container>

            <Container maxWidth="lg" sx={{ display: { xs: "block", md: "none" } }}>
              <Stack spacing={{ xs: 1.1, md: 1.3 }}>
                {globalMarketRows.map((row, rowIndex) => (
                  <Box
                    key={`market-row-${rowIndex}`}
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      width: "100%"
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "max-content",
                        gap: { xs: 0.9, md: 1.2 },
                        willChange: "transform",
                        transform: "translate3d(0, 0, 0)",
                        backfaceVisibility: "hidden",
                        opacity: rowIndex === 1 ? 1 : 0.94,
                        animation:
                          rowIndex === 0
                            ? "globalFlagsMarqueeA 34s linear infinite"
                            : "globalFlagsMarqueeB 30s linear infinite"
                      }}
                    >
                      {Array.from({ length: marketRowLoopCount })
                        .flatMap(() => row)
                        .map(([countryCode, label], index) => (
                          <Stack
                            key={`${label}-${index}`}
                            direction="row"
                            spacing={{ xs: 0.85, md: 0.95 }}
                            alignItems="center"
                            sx={{
                              flex: "0 0 auto",
                              px: { xs: 1.15, md: 1.45 },
                              py: { xs: 0.8, md: 0.92 },
                              borderRadius: 999,
                              bgcolor: "rgba(255,255,255,0.88)",
                              border: "1px solid rgba(28,58,47,0.07)",
                              boxShadow: "0 9px 22px rgba(16,20,19,0.045)",
                              backdropFilter: "blur(10px)"
                            }}
                          >
                            <Box
                              sx={{
                                width: { xs: 26, md: 30 },
                                height: { xs: 26, md: 30 },
                                flexShrink: 0,
                                overflow: "hidden",
                                borderRadius: "50%",
                                bgcolor: "#FFFFFF",
                                backgroundImage: `url(https://flagcdn.com/w40/${countryCode}.png)`,
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                boxShadow: "inset 0 0 0 1px rgba(16,20,19,0.08)",
                                clipPath: "circle(50%)"
                              }}
                              aria-label={`${label} flag`}
                              role="img"
                            />
                            <Typography
                              sx={{
                                fontSize: { xs: "0.82rem", md: "0.92rem" },
                                color: "text.primary",
                                fontWeight: 600,
                                whiteSpace: "nowrap"
                              }}
                            >
                              {label}
                            </Typography>
                          </Stack>
                        ))}
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Container>

            <Container maxWidth="lg" sx={{ display: { xs: "none", md: "block" } }}>
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  width: "100%"
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "max-content",
                    gap: 1.2,
                    willChange: "transform",
                    transform: "translate3d(0, 0, 0)",
                    backfaceVisibility: "hidden",
                    opacity: 0.96,
                    animation: "globalFlagsMarqueeA 38s linear infinite"
                  }}
                >
                  {Array.from({ length: marketRowLoopCount - 1 })
                    .flatMap(() => desktopMarketRow)
                    .map(([countryCode, label], index) => (
                      <Stack
                        key={`${label}-desktop-${index}`}
                        direction="row"
                        spacing={0.95}
                        alignItems="center"
                        sx={{
                          flex: "0 0 auto",
                          px: 1.45,
                          py: 0.92,
                          borderRadius: 999,
                          bgcolor: "rgba(255,255,255,0.88)",
                          border: "1px solid rgba(28,58,47,0.07)",
                          boxShadow: "0 9px 22px rgba(16,20,19,0.045)",
                          backdropFilter: "blur(10px)"
                        }}
                      >
                        <Box
                          sx={{
                            width: 30,
                            height: 30,
                            flexShrink: 0,
                            overflow: "hidden",
                            borderRadius: "50%",
                            bgcolor: "#FFFFFF",
                            backgroundImage: `url(https://flagcdn.com/w40/${countryCode}.png)`,
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            boxShadow: "inset 0 0 0 1px rgba(16,20,19,0.08)",
                            clipPath: "circle(50%)"
                          }}
                          aria-label={`${label} flag`}
                          role="img"
                        />
                        <Typography
                          sx={{
                            fontSize: "0.92rem",
                            color: "text.primary",
                            fontWeight: 600,
                            whiteSpace: "nowrap"
                          }}
                        >
                          {label}
                        </Typography>
                      </Stack>
                    ))}
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
      </SectionReveal>

      <Container maxWidth="lg" sx={{ pb: { xs: 7, md: 12 } }}>
        <SectionReveal>
          <Box
            sx={{
              mt: { xs: 6, md: 8 },
              p: { xs: 3, md: 3.5 },
              borderRadius: 1.5,
              border: "1px solid",
              borderColor: "divider",
              bgcolor: "rgba(255,253,249,0.72)"
            }}
          >
            <Typography sx={{ color: "text.secondary", mb: 3 }}>
              {site.trustStrip}
            </Typography>

            <Grid container spacing={2}>
              {site.stats.map((stat) => (
                <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
                  <Typography
                    variant="h3"
                    sx={{ color: "primary.main", mb: 0.5 }}
                  >
                    {stat.value}
                  </Typography>

                  <Typography color="text.secondary">{stat.label}</Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </SectionReveal>

        <SectionReveal>
          <Grid container spacing={4} sx={{ mt: { xs: 8, md: 12 } }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography sx={{ color: "primary.main", mb: 2 }}>
                Why businesses come to us
              </Typography>

              <Typography
                variant="h2"
                sx={{ fontSize: { xs: "2.4rem", md: "3.6rem" } }}
              >
                Most software projects solve the wrong problem.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <Typography paragraph color="text.secondary">
                Agencies take months to ship a demo that breaks when real users
                show up. Freelancers disappear halfway through. Off-the-shelf
                tools get you 60 percent of the way there and stop.
              </Typography>

              <Typography paragraph color="text.secondary">
                The result is expensive: lost time, half-finished code, and a
                business problem that still exists. We work differently. We
                study the workflow first, choose the right tools second, and
                ship software that runs in production.
              </Typography>

              <Typography color="text.secondary">
                If the problem does not need AI, we will tell you that too.
              </Typography>
            </Grid>
          </Grid>
        </SectionReveal>

        <SectionReveal>
          <Box sx={{ mt: { xs: 8, md: 12 } }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", sm: "center" }}
              spacing={2}
              sx={{ mb: 4 }}
            >
              <Box>
                <Typography sx={{ color: "primary.main", mb: 1.5 }}>
                  Selected case studies
                </Typography>

                <Typography
                  variant="h2"
                  sx={{ fontSize: { xs: "2.4rem", md: "3.6rem" } }}
                >
                  Problems solved. Not demos shipped.
                </Typography>
              </Box>

              <Button
                component={Link}
                href="/case-studies"
                endIcon={<NorthEastIcon fontSize="small" />}
                sx={{
                  alignSelf: { xs: "flex-end", sm: "center" },
                  ml: { sm: "auto" },
                  px: 1.6,
                  py: 0.8,
                  minWidth: "auto",
                  borderRadius: 1.5,
                  textTransform: "none",
                  "&:hover": {
                    borderRadius: 1.5
                  }
                }}
              >
                View all case studies
              </Button>
            </Stack>

            <HomeCaseStudiesSlider items={selectedCaseStudySlides} />
          </Box>
        </SectionReveal>

        <SectionReveal>
          <Box sx={{ mt: { xs: 8, md: 12 } }}>
            <Typography sx={{ color: "primary.main", mb: 1.5 }}>
              Process
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.4rem", md: "3.6rem" },
                mb: 4
              }}
            >
              Simple. Transparent. No surprises.
            </Typography>

            <Grid container spacing={2}>
              {[
                [
                  "01",
                  "Discovery call",
                  "A straight conversation about what you are building, what is broken, or what you want to automate."
                ],
                [
                  "02",
                  "We study your business",
                  "We map the workflows, bottlenecks, and data before anyone starts wiring up tools."
                ],
                [
                  "03",
                  "Proposal within 24 hours",
                  "A clear plan with scope, timing, and cost. No fog. No vague maybes."
                ],
                [
                  "04",
                  "We build it",
                  "Regular updates, working software, and progress you can actually see."
                ],
                [
                  "05",
                  "We stick around",
                  "Post-launch support is part of the job. Most good projects keep growing after version one."
                ]
              ].map(([step, title, copy]) => (
                <Grid key={step} size={{ xs: 12, md: 6, lg: 4 }}>
                  <Card sx={{ height: "100%", borderRadius: 1.5 }}>
                    <CardContent sx={{ p: 3.5 }}>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: "2.1rem",
                          color: "primary.main",
                          mb: 2
                        }}
                      >
                        {step}
                      </Typography>

                      <Typography variant="h5" sx={{ mb: 1.25 }}>
                        {title}
                      </Typography>

                      <Typography color="text.secondary">{copy}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </SectionReveal>

        <SectionReveal>
          <Box
            sx={{
              mt: { xs: 8, md: 12 },
              p: { xs: 4, md: 5 },
              borderRadius: 1.5,
              bgcolor: "primary.main",
              color: "primary.contrastText"
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.4rem", md: "3.6rem" },
                maxWidth: 720
              }}
            >
              You found the right team.
            </Typography>

            <Typography
              sx={{
                mt: 2,
                maxWidth: 650,
                color: "rgba(247,245,242,0.82)"
              }}
            >
              Not sure exactly what you need yet? That is normal. Most of our
              best projects started with a rough idea and a real problem.
            </Typography>

            <Divider sx={{ my: 4, borderColor: "rgba(247,245,242,0.18)" }} />

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              alignItems={{ xs: "flex-start", sm: "center" }}
            >
              <Button
                component={Link}
                href="/contact#contact-form"
                variant="contained"
                color="secondary"
                endIcon={<ArrowOutwardIcon fontSize="small" />}
              >
                Start the conversation
              </Button>

              <Typography sx={{ color: "rgba(247,245,242,0.72)" }}>
                We reply within a few hours. Usually faster.
              </Typography>
            </Stack>
          </Box>
        </SectionReveal>
      </Container>
    </SiteShell>
  );
}
