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
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Case Studies | Mentallion Systems",
  description:
    "Explore Mentallion Systems case studies across AI agents, automation workflows, SaaS platforms, document intelligence, marketplaces, and custom software systems."
};

type PageCaseStudy = (typeof site.caseStudies)[number] & {
  thumbnailUrl?: string;
  thumbnailPosition?: string;
  imagePosition?: string;
};

type ResolvedImage = {
  src: string;
  position: string;
};

const CARD_IMAGE_HEIGHT = {
  xs: 190,
  sm: 205,
  md: 215
};

/**
 * Unique image map by slug.
 * Keep every src different.
 */
const caseStudyCardImages: Record<string, ResolvedImage> = {
  "estate-sale-marketplace-automation": {
    src: "/images/case-studies/estate-sale-marketplace.webp",
    position: "center"
  },
  "used-item-price-identification": {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  },
  "marketplace-listing-rpa": {
    src: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  },
  "subscription-management-app": {
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  },
  "ai-persona-system": {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  },
  "document-management-directory-platform": {
    src: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  },
  "ai-powered-quran-chatbot": {
    src: "https://images.unsplash.com/photo-1584286595398-a59f21d61b56?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  },
  "legaltech-research-pipeline": {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  },
  "retail-paper-record-digitization": {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  },
  "edtech-grading-dashboard": {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  },
  "healthcare-document-intelligence": {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  },
  "hotel-booking-optimization-layer": {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  },
  "saas-platform-development": {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  },
  "ocr-invoice-extraction": {
    src: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  },
  "business-directory-platform": {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  }
};

/**
 * Fallback unique image pool.
 * This guarantees uniqueness even when:
 * - slug does not match
 * - multiple case studies have the same domain
 * - multiple title rules match the same image
 * - original imageUrl is repeated in case-studies.ts
 */
const uniqueFallbackImages: ResolvedImage[] = [
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    position: "center top"
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  },
  {
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  },
  {
    src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  },
  {
    src: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  },
  {
    src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  },
  {
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  },
  {
    src: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  },
  {
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  },
  {
    src: "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=1000&q=80",
    position: "center"
  }
];

function getPreferredImage(study: PageCaseStudy): ResolvedImage | null {
  if (study.thumbnailUrl) {
    return {
      src: study.thumbnailUrl,
      position: study.thumbnailPosition ?? study.imagePosition ?? "center"
    };
  }

  if (caseStudyCardImages[study.slug]) {
    return caseStudyCardImages[study.slug];
  }

  if (study.imageUrl) {
    return {
      src: study.imageUrl,
      position: study.imagePosition ?? "center"
    };
  }

  return null;
}

function resolveUniqueImages(studies: PageCaseStudy[]) {
  const usedImages = new Set<string>();
  const resolved = new Map<string, ResolvedImage>();

  studies.forEach((study, index) => {
    const preferred = getPreferredImage(study);

    if (preferred && !usedImages.has(preferred.src)) {
      usedImages.add(preferred.src);
      resolved.set(study.slug, preferred);
      return;
    }

    const fallback =
      uniqueFallbackImages.find((image) => !usedImages.has(image.src)) ??
      uniqueFallbackImages[index % uniqueFallbackImages.length];

    usedImages.add(fallback.src);
    resolved.set(study.slug, fallback);
  });

  return resolved;
}

export default function CaseStudiesPage() {
  const pageCaseStudies = site.caseStudies as PageCaseStudy[];
  const resolvedImages = resolveUniqueImages(pageCaseStudies);

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
              gap: { xs: 2.4, md: 3 },
              alignItems: "stretch"
            }}
          >
            {pageCaseStudies.map((study, index) => {
              const image = resolvedImages.get(study.slug);

              return (
                <SectionReveal key={study.slug}>
                  <Box
                    component="article"
                    sx={{
                      height: "100%",
                      minHeight: { xs: 560, md: 590 },
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
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        minHeight: 0
                      }}
                    >
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
                            fontWeight: 900,
                            display: "-webkit-box",
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden"
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
                          fontSize: { xs: "1.36rem", md: "1.48rem" },
                          lineHeight: 1.12,
                          letterSpacing: "-0.04em",
                          fontWeight: 850,
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
                          mb: 1.8,
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
                          display: "grid",
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

                      <Stack spacing={1} sx={{ mb: 2.2 }}>
                        {study.mainPoints.slice(0, 3).map((point) => (
                          <Stack
                            key={point}
                            direction="row"
                            spacing={1}
                            alignItems="flex-start"
                          >
                            <Box
                              sx={{
                                mt: "0.52rem",
                                width: 5,
                                height: 5,
                                borderRadius: "50%",
                                bgcolor: "#1C3A2F",
                                flexShrink: 0
                              }}
                            />

                            <Typography
                              sx={{
                                color: "text.secondary",
                                lineHeight: 1.45,
                                fontSize: "0.82rem",
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden"
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
