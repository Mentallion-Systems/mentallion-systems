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
import { CaseStudyMobileDetails } from "@/components/case-study-mobile-details";
import { StructuredData } from "@/components/structured-data";
import { SiteShell } from "@/components/site-shell";
import { SectionReveal } from "@/components/section-reveal";
import { caseStudies, getCaseStudyVisual } from "@/content/case-studies";
import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Case Studies | Mentallion Systems",
  description:
    "Explore Mentallion Systems case studies across AI agents, automation workflows, SaaS platforms, document intelligence, marketplaces, and custom software systems.",
  alternates: {
    canonical: "/case-studies"
  },
  openGraph: {
    title: "Case Studies | Mentallion Systems",
    description:
      "Explore real client work across AI systems, workflow automation, SaaS platforms, OCR systems, and production software delivery.",
    url: absoluteUrl("/case-studies"),
    type: "website",
    images: [absoluteUrl(site.ogImage)]
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Mentallion Systems",
    description:
      "Explore real client work across AI systems, workflow automation, SaaS platforms, OCR systems, and production software delivery.",
    images: [absoluteUrl(site.ogImage)]
  }
};

const CARD_IMAGE_HEIGHT = {
  xs: 190,
  sm: 205,
  md: 215
};

export default function CaseStudiesPage() {
  const pageCaseStudies = caseStudies;
  const caseStudiesPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Case Studies | Mentallion Systems",
    url: absoluteUrl("/case-studies"),
    description: metadata.description,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: pageCaseStudies.map((study, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/case-studies/${study.slug}`),
        name: study.title,
        description: study.summary
      }))
    }
  };

  return (
    <SiteShell>
      <StructuredData
        id="case-studies-page-schema"
        data={caseStudiesPageSchema}
      />
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
                  variant="h1"
                  component="h1"
                  sx={{
                    fontSize: { xs: "2.5rem", sm: "3.6rem", md: "5.8rem" },
                    lineHeight: 0.92,
                    letterSpacing: "-0.07em",
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
                  src="/images/case-studies-banner.webp"
                  alt="Mentallion Systems case studies banner"
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
                  variant="h4"
                  sx={{
                    fontSize: "1.55rem",
                    lineHeight: 1.14,
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
                  variant="h2"
                  component="h2"
                  sx={{
                    fontSize: { xs: "2.25rem", md: "3.6rem" },
                    lineHeight: 0.98,
                    letterSpacing: "-0.055em",
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
              gap: { xs: 2.4, md: 3 },
              alignItems: "stretch"
            }}
          >
            {pageCaseStudies.map((study, index) => {
              const image = getCaseStudyVisual(study);

              return (
                <SectionReveal key={study.slug}>
                  <Box
                    component="article"
                    data-case-study-card={study.slug}
                    sx={{
                      height: "100%",
                      minHeight: { xs: "auto", md: 590 },
                      scrollMarginTop: { xs: "92px", md: "110px" },
                      display: "flex",
                      flexDirection: "column",
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
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: CARD_IMAGE_HEIGHT,
                        minHeight: CARD_IMAGE_HEIGHT,
                        maxHeight: CARD_IMAGE_HEIGHT,
                        flex: "0 0 auto",
                        overflow: "hidden",
                        bgcolor: "rgba(28,58,47,0.06)",
                        isolation: "isolate"
                      }}
                    >
                      {image?.src ? (
                        <Box
                          component="img"
                          src={image.src}
                          alt={study.title}
                          loading="lazy"
                          sx={{
                            position: "absolute",
                            inset: 0,
                            zIndex: 1,
                            width: "100% !important",
                            height: "100% !important",
                            minWidth: "100%",
                            minHeight: "100%",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "cover",
                            objectPosition: image.position,
                            display: "block",
                            transform: "scale(1.01)"
                          }}
                        />
                      ) : null}

                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          zIndex: 2,
                          pointerEvents: "none",
                          background:
                            "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.08) 40%, rgba(0,0,0,0.56) 100%)"
                        }}
                      />

                      <Chip
                        label={study.domain}
                        sx={{
                          position: "absolute",
                          zIndex: 3,
                          left: 16,
                          bottom: 14,
                          maxWidth: "calc(100% - 32px)",
                          height: 28,
                          borderRadius: 999,
                          bgcolor: "rgba(255,253,248,0.94)",
                          color: "#101413",
                          fontSize: "0.66rem",
                          fontWeight: 850,
                          letterSpacing: "-0.01em",
                          boxShadow: "0 10px 24px rgba(0,0,0,0.16)",
                          "& .MuiChip-label": {
                            px: 1.1,
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                          }
                        }}
                      />
                    </Box>

                    <Box
                      sx={{
                        p: { xs: 2.4, md: 3 },
                        pb: { xs: 1.35, md: 3 },
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        minHeight: 0
                      }}
                    >
                      <Stack
                        direction="row"
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
                            fontWeight: 900,
                            display: "-webkit-box",
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden"
                          }}
                        >
                          {study.eyebrow}
                        </Typography>
                      </Stack>

                      <Typography
                        variant="h4"
                        component="h3"
                        sx={{
                          fontSize: { xs: "1.36rem", md: "1.48rem" },
                          lineHeight: 1.24,
                          letterSpacing: "-0.04em",
                          mb: 1.2,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden"
                        }}
                      >
                        {study.title}
                      </Typography>

                      <Typography
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.58,
                          fontSize: "0.9rem",
                          mb: { xs: 1.2, md: 1.8 },
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden"
                        }}
                      >
                        {study.summary}
                      </Typography>

                      <Box
                        sx={{
                          display: { xs: "none", md: "grid" },
                          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                          gap: 1,
                          mb: 2
                        }}
                      >
                        {study.metrics.slice(0, 2).map((metric) => (
                          <Box
                            key={`${study.slug}-${metric.label}`}
                            sx={{
                              border: "1px solid rgba(16,20,19,0.08)",
                              bgcolor: "rgba(28,58,47,0.035)",
                              borderRadius: "14px",
                              p: 1.3,
                              minHeight: 82,
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              textAlign: "center"
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "1.05rem",
                                fontWeight: 850,
                                lineHeight: 1.1,
                                textAlign: "center",
                                display: "-webkit-box",
                                WebkitLineClamp: 1,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden"
                              }}
                            >
                              {metric.value}
                            </Typography>

                            <Typography
                              sx={{
                                mt: 0.45,
                                color: "text.secondary",
                                fontSize: "0.7rem",
                                lineHeight: 1.28,
                                textAlign: "center",
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden"
                              }}
                            >
                              {metric.label}
                            </Typography>
                          </Box>
                        ))}
                      </Box>

                      <CaseStudyMobileDetails
                        slug={study.slug}
                        metrics={study.metrics}
                        mainPoints={study.mainPoints}
                      />

                      <Box
                        component="ul"
                        sx={{
                          display: { xs: "none", md: "grid" },
                          mb: 2.2,
                          pl: 2.1,
                          gap: 0.5,
                          color: "#1C3A2F"
                        }}
                      >
                        {study.mainPoints.slice(0, 3).map((point) => (
                          <Box
                            component="li"
                            key={point}
                            sx={{
                              pl: 0.2,
                              "&::marker": {
                                fontSize: "0.9rem"
                              }
                            }}
                          >
                            <Typography
                              component="span"
                              sx={{
                                color: "text.secondary",
                                lineHeight: 1.45,
                                fontSize: "0.82rem",
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                minWidth: 0
                              }}
                            >
                              {point}
                            </Typography>
                          </Box>
                        ))}
                      </Box>

                      <Button
                        component={Link}
                        href={`/case-studies/${study.slug}`}
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          display: { xs: "none", md: "inline-flex" },
                          mt: "auto",
                          alignSelf: "flex-start",
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
              );
            })}
          </Box>
        </Container>
      </Box>
    </SiteShell>
  );
}
