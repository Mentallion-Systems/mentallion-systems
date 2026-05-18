import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import SouthEastIcon from "@mui/icons-material/SouthEast";
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
import { caseStudies, getCaseStudyVisual } from "@/content/case-studies";
import { site } from "@/content/site";

export default function HomePage() {
  const selectedCaseStudies = caseStudies.slice(0, 6);

  return (
    <SiteShell>
      <SectionReveal>
        <Box
          sx={{
            position: "relative",
            minHeight: { xs: "calc(100vh - 82px)", md: "calc(100vh - 82px)" },
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
              objectFit: "cover",
              mixBlendMode: "screen",
              opacity: 0.22
            }}
          >
            <source src="/videos/City Scape 5 sec.mp4" type="video/mp4" />
          </Box>

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
              py: { xs: 8, md: 10 }
            }}
          >
            <Grid container spacing={5} alignItems="end">
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography
                  sx={{
                    color: "rgba(247,245,242,0.78)",
                    mb: 2,
                    fontSize: "0.9rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase"
                  }}
                >
                  {site.availability}
                </Typography>

                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "3.4rem", md: "6.15rem" },
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
                    No commitment. We&apos;ll tell you honestly if we&apos;re
                    the right fit.
                  </Typography>
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 5 }}>
                <Stack spacing={2} alignItems="stretch">
                  <Card
                    sx={{
                      maxWidth: 280,
                      borderRadius: 2,
                      bgcolor: "rgba(255,253,249,0.9)",
                      animation: "heroFloat 5.5s ease-in-out infinite"
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
                      alignSelf: "flex-end",
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
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
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
                endIcon={<SouthEastIcon fontSize="small" />}
              >
                View all case studies
              </Button>
            </Stack>

            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                mx: { xs: -2, md: -4 },
                px: { xs: 2, md: 4 },
                py: 1,
                "&::before, &::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  zIndex: 2,
                  width: { xs: 42, md: 110 },
                  height: "100%",
                  pointerEvents: "none"
                },
                "&::before": {
                  left: 0,
                  background:
                    "linear-gradient(90deg, #F7F5F2 0%, rgba(247,245,242,0) 100%)"
                },
                "&::after": {
                  right: 0,
                  background:
                    "linear-gradient(270deg, #F7F5F2 0%, rgba(247,245,242,0) 100%)"
                },
                "@keyframes caseStudyMarquee": {
                  "0%": {
                    transform: "translateX(0)"
                  },
                  "100%": {
                    transform: "translateX(-50%)"
                  }
                },
                "&:hover .case-study-track": {
                  animationPlayState: "paused"
                }
              }}
            >
              <Box
                className="case-study-track"
                sx={{
                  display: "flex",
                  alignItems: "stretch",
                  width: "max-content",
                  gap: { xs: 2, md: 2.5 },
                  animation: "caseStudyMarquee 42s linear infinite"
                }}
              >
                {[...selectedCaseStudies, ...selectedCaseStudies].map(
                  (item, index) => {
                    const image = getCaseStudyVisual(item);

                    return (
                      <Card
                        key={`${item.slug}-${index}`}
                        component={Link}
                        href={`/case-studies/${item.slug}`}
                        sx={{
                          width: { xs: 258, sm: 278, md: 300 },
                          minWidth: { xs: 258, sm: 278, md: 300 },
                          maxWidth: { xs: 258, sm: 278, md: 300 },
                          height: 420,
                          minHeight: 420,
                          maxHeight: 420,
                          flex: "0 0 auto",
                          display: "flex",
                          flexDirection: "column",
                          borderRadius: 1,
                          overflow: "hidden",
                          textDecoration: "none",
                          border: "1px solid rgba(20, 28, 25, 0.1)",
                          bgcolor: "#FFFDF8",
                          boxShadow: "0 16px 45px rgba(18, 24, 22, 0.08)",
                          transition:
                            "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                          "&:hover": {
                            transform: "translateY(-5px)",
                            borderColor: "primary.main",
                            boxShadow:
                              "0 24px 70px rgba(18, 24, 22, 0.14)"
                          }
                        }}
                      >
                        <Box
                          sx={{
                            position: "relative",
                            width: "100%",
                            height: 138,
                            minHeight: 138,
                            maxHeight: 138,
                            flex: "0 0 138px",
                            overflow: "hidden",
                            bgcolor: "rgba(28,58,47,0.06)"
                          }}
                        >
                          {image.src ? (
                            <Box
                              component="img"
                              src={image.src}
                              alt={item.title}
                              loading="lazy"
                              sx={{
                                position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                display: "block",
                                objectFit: "contain",
                                objectPosition: image.position
                              }}
                            />
                          ) : null}

                          <Box
                            sx={{
                              position: "absolute",
                              inset: 0,
                              background:
                                "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.12) 44%, rgba(0,0,0,0.56) 100%)"
                            }}
                          />

                          <Chip
                            label={item.category}
                            size="small"
                            sx={{
                              position: "absolute",
                              left: 12,
                              bottom: 12,
                              height: 24,
                              maxWidth: "calc(100% - 24px)",
                              borderRadius: 999,
                              bgcolor: "rgba(255,253,249,0.94)",
                              color: "#101413",
                              fontSize: "0.62rem",
                              fontWeight: 850,
                              "& .MuiChip-label": {
                                px: 1,
                                overflow: "hidden",
                                textOverflow: "ellipsis"
                              }
                            }}
                          />
                        </Box>

                        <CardContent
                          sx={{
                            p: 2.35,
                            height: 282,
                            minHeight: 282,
                            maxHeight: 282,
                            flex: "1 1 auto",
                            display: "flex",
                            flexDirection: "column",
                            overflow: "hidden"
                          }}
                        >
                          <Typography
                            variant="h4"
                            sx={{
                              mb: 1,
                              fontSize: { xs: "1.13rem", md: "1.22rem" },
                              lineHeight: 1.12,
                              letterSpacing: "-0.035em",
                              color: "#101413",
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden"
                            }}
                          >
                            {item.title}
                          </Typography>

                          <Typography
                            color="text.secondary"
                            sx={{
                              mb: 1.7,
                              fontSize: "0.81rem",
                              lineHeight: 1.5,
                              display: "-webkit-box",
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden"
                            }}
                          >
                            {item.summary}
                          </Typography>

                          <Box
                            sx={{
                              mt: "auto",
                              p: 1.35,
                              height: 96,
                              minHeight: 96,
                              maxHeight: 96,
                              borderRadius: 1,
                              bgcolor: "rgba(28,58,47,0.045)",
                              border: "1px solid rgba(28,58,47,0.1)",
                              overflow: "hidden"
                            }}
                          >
                            <Typography
                              variant="h3"
                              sx={{
                                fontSize: "1.48rem",
                                lineHeight: 1.05,
                                color: "primary.main",
                                mb: 0.4,
                                display: "-webkit-box",
                                WebkitLineClamp: 1,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden"
                              }}
                            >
                              {item.metric}
                            </Typography>

                            <Typography
                              color="text.secondary"
                              sx={{
                                fontSize: "0.75rem",
                                lineHeight: 1.35,
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden"
                              }}
                            >
                              {item.outcome}
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    );
                  }
                )}
              </Box>
            </Box>
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
