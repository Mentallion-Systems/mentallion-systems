import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
import { BackToCaseStudiesButton } from "@/components/back-to-case-studies-button";
import { CaseStudyMobileHeroFocus } from "@/components/case-study-mobile-hero-focus";
import { RelatedCaseStudiesCarousel } from "@/components/related-case-studies-carousel";
import { StructuredData } from "@/components/structured-data";
import { SiteShell } from "@/components/site-shell";
import { SectionReveal } from "@/components/section-reveal";
import { absoluteUrl } from "@/lib/seo";
import {
  caseStudies,
  getCaseStudyVisual,
  getCaseStudyBySlug,
  getRelatedCaseStudies
} from "@/content/site";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: "Case Study | Mentallion Systems"
    };
  }

  return {
    title: `${study.title} | Mentallion Systems`,
    description: study.summary,
    alternates: {
      canonical: `/case-studies/${study.slug}`
    },
    openGraph: {
      title: `${study.title} | Mentallion Systems`,
      description: study.summary,
      url: absoluteUrl(`/case-studies/${study.slug}`),
      type: "article",
      images: [absoluteUrl(study.bannerImageUrl)]
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} | Mentallion Systems`,
      description: study.summary,
      images: [absoluteUrl(study.bannerImageUrl)]
    }
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const relatedStudies = getRelatedCaseStudies(study.relatedSlugs);
  const relatedStudyCards = relatedStudies.slice(0, 6).map((related) => {
    const image = getCaseStudyVisual(related);

    return {
      slug: related.slug,
      title: related.title,
      domain: related.domain,
      image: {
        src: image.src,
        position: image.position
      }
    };
  });
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.summary,
    url: absoluteUrl(`/case-studies/${study.slug}`),
    image: absoluteUrl(study.bannerImageUrl),
    author: {
      "@type": "Organization",
      name: "Mentallion Systems"
    },
    publisher: {
      "@type": "Organization",
      name: "Mentallion Systems",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/logo/logo-v2.png")
      }
    },
    about: [study.industry, study.domain, ...study.services],
    articleSection: "Case Studies"
  };

  return (
    <SiteShell>
      <StructuredData id={`case-study-schema-${study.slug}`} data={caseStudySchema} />
      <CaseStudyMobileHeroFocus targetId="case-study-hero-content" />
      <Box
        sx={{
          bgcolor: "#0B0F0E",
          color: "#FFFDF8"
        }}
      >
        <Box
          sx={{
            position: "relative",
            minHeight: { xs: 420, sm: 500, md: 760 },
            display: "flex",
            alignItems: { xs: "flex-start", md: "flex-end" },
            overflow: "hidden",
            bgcolor: "#0F1413"
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", lg: "flex-end" },
              px: { xs: 0, md: 4, lg: 6 },
              py: { xs: 0, md: 5 },
              overflow: "hidden"
            }}
          >
            <Box
              component="img"
              src={study.bannerImageUrl}
              alt=""
              aria-hidden="true"
              sx={{
                display: { xs: "block", md: "none" },
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center center",
                transform: "scale(1.08)",
                filter: "blur(14px)",
                opacity: 0.48
              }}
            />

            <Box
              component="img"
              src={study.bannerImageUrl}
              alt={study.title}
              sx={{
                width: "100%",
                maxWidth: { xs: "none", md: 760, lg: 880 },
                height: { xs: "100%", md: "78%" },
                minHeight: { xs: "100%", md: "auto" },
                objectFit: { xs: "contain", md: "contain" },
                objectPosition: { xs: "center center", md: study.imagePosition || "center center" },
                display: "block",
                ml: { lg: "auto" },
                px: { xs: 1.5, sm: 2, md: 0 },
                py: { xs: 1.5, sm: 2, md: 0 },
                opacity: { xs: 0.82, md: 0.94 },
                filter: {
                  xs: "none",
                  md: "drop-shadow(0 18px 48px rgba(0,0,0,0.2))"
                }
              }}
            />
          </Box>

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                {
                  xs: "linear-gradient(180deg, rgba(8,12,11,0.34) 0%, rgba(8,12,11,0.52) 38%, rgba(8,12,11,0.88) 100%), linear-gradient(90deg, rgba(8,12,11,0.82) 0%, rgba(8,12,11,0.46) 42%, rgba(8,12,11,0.16) 100%)",
                  md: "linear-gradient(90deg, rgba(8,12,11,0.84) 0%, rgba(8,12,11,0.6) 34%, rgba(8,12,11,0.22) 62%, rgba(8,12,11,0.06) 100%), linear-gradient(180deg, rgba(8,12,11,0.1) 0%, rgba(8,12,11,0.34) 58%, rgba(8,12,11,0.68) 100%)"
                }
            }}
          />

          <Container
            maxWidth="xl"
            sx={{
              position: "relative",
              zIndex: 1,
              py: { xs: 0, md: 0 },
              pt: { xs: 6.75, sm: 7.5, md: 0 },
              pb: { xs: 3.5, md: 9 }
            }}
          >
            <SectionReveal>
              <Box
                id="case-study-hero-content"
                sx={{
                  maxWidth: 880,
                  pt: { xs: 0, md: 8 },
                  pr: { xs: 1.5, sm: 0, md: 0 },
                  pb: { xs: 1, md: 0 }
                }}
              >
                <BackToCaseStudiesButton />

                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  flexWrap="wrap"
                  sx={{ mb: 2.5 }}
                >
                  <Chip
                    label="Case Study"
                    sx={{
                      bgcolor: "#FFFDF8",
                      color: "#101413",
                      fontWeight: 800
                    }}
                  />

                  <Chip
                    label={study.domain}
                    sx={{
                      bgcolor: "rgba(255,255,255,0.12)",
                      color: "#FFFDF8",
                      border: "1px solid rgba(255,255,255,0.18)",
                      fontWeight: 700
                    }}
                  />
                </Stack>

                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontSize: { xs: "2.05rem", sm: "3.8rem", md: "6.3rem" },
                    lineHeight: 0.9,
                    letterSpacing: "-0.075em",
                    maxWidth: 940
                  }}
                >
                  {study.title}
                </Typography>

                <Typography
                  sx={{
                    mt: 1.8,
                    maxWidth: 720,
                    color: "rgba(255,253,248,0.78)",
                    fontSize: { xs: "1rem", md: "1.22rem" },
                    lineHeight: { xs: 1.6, md: 1.7 }
                  }}
                >
                  {study.summary}
                </Typography>
              </Box>
            </SectionReveal>
          </Container>
        </Box>
      </Box>

      <Box sx={{ bgcolor: "#FFFDF8" }}>
        <Container maxWidth="xl" sx={{ py: { xs: 6, md: 9 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1fr) 360px" },
              gap: { xs: 5, lg: 8 },
              alignItems: "start"
            }}
          >
            <SectionReveal>
              <Box>
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    fontSize: { xs: "2rem", md: "2.8rem" },
                    lineHeight: 1,
                    letterSpacing: "-0.055em",
                    mb: 2
                  }}
                >
                  Overview
                </Typography>

                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "1.04rem",
                    lineHeight: 1.85,
                    maxWidth: 830
                  }}
                >
                  {study.overview}
                </Typography>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: { xs: 1, md: 1.4 },
                    my: { xs: 4, md: 5 },
                    maxWidth: 780
                  }}
                >
                  {study.metrics.map((metric) => (
                    <Box
                      key={metric.label}
                      sx={{
                        border: "1px solid rgba(16,20,19,0.12)",
                        borderBottom: "4px solid",
                        borderBottomColor: "secondary.main",
                        borderRadius: "18px",
                        p: { xs: 1.5, md: 2.4 },
                        bgcolor: "#FFFFFF"
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: "1.35rem", md: "1.9rem" },
                          fontWeight: 900,
                          letterSpacing: "-0.04em",
                          lineHeight: 1
                        }}
                      >
                        {metric.value}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 0.6,
                          color: "text.secondary",
                          fontSize: { xs: "0.82rem", md: "0.9rem" },
                          lineHeight: 1.45
                        }}
                      >
                        {metric.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <CaseStudyTextSection
                  title="Challenge"
                  body={study.challenge}
                />

                <CaseStudyTextSection
                  title="Solution"
                  body={study.solution}
                />

                <CaseStudyTextSection title="Result" body={study.result} />

                {study.quote ? (
                  <Box
                    sx={{
                      mt: { xs: 5, md: 7 },
                      p: { xs: 3, md: 4 },
                      bgcolor: "#F6F4EF",
                      borderRadius: "28px",
                      border: "1px solid rgba(16,20,19,0.08)"
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "1.35rem", md: "1.8rem" },
                        lineHeight: 1.35,
                        letterSpacing: "-0.035em",
                        fontWeight: 750
                      }}
                    >
                      “{study.quote}”
                    </Typography>

                    {study.quoteBy ? (
                      <Typography
                        sx={{
                          mt: 2,
                          color: "text.secondary",
                          fontWeight: 700
                        }}
                      >
                        {study.quoteBy}
                      </Typography>
                    ) : null}
                  </Box>
                ) : null}
              </Box>
            </SectionReveal>

            <SectionReveal>
              <Box
                sx={{
                  position: { lg: "sticky" },
                  top: { lg: 110 },
                  border: "1px solid rgba(16,20,19,0.1)",
                  borderRadius: "28px",
                  p: { xs: 2.6, md: 3 },
                  bgcolor: "#F6F4EF"
                }}
              >
                <InfoBlock label="Client type" value={study.clientType} />
                <InfoBlock label="Industry" value={study.industry} />
                <Divider sx={{ my: 2.4 }} />

                <Typography
                  sx={{
                    fontSize: "0.76rem",
                    color: "text.secondary",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontWeight: 900,
                    mb: 1.2
                  }}
                >
                  Services
                </Typography>

                <Stack spacing={0.8} sx={{ mb: 2.6 }}>
                  {study.services.map((service) => (
                    <Typography
                      key={service}
                      sx={{
                        color: "#101413",
                        fontWeight: 650,
                        lineHeight: 1.45
                      }}
                    >
                      {service}
                    </Typography>
                  ))}
                </Stack>

                <Typography
                  sx={{
                    fontSize: "0.76rem",
                    color: "text.secondary",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontWeight: 900,
                    mb: 1.2
                  }}
                >
                  Tech stack
                </Typography>

                <Stack direction="row" spacing={0.8} useFlexGap flexWrap="wrap">
                  {study.techStack.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      sx={{
                        bgcolor: "#FFFDF8",
                        border: "1px solid rgba(16,20,19,0.08)",
                        fontWeight: 700
                      }}
                    />
                  ))}
                </Stack>

                <Button
                  component={Link}
                  href="/contact"
                  fullWidth
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    mt: 3,
                    height: 48,
                    borderRadius: 999,
                    bgcolor: "primary.main",
                    color: "#fff !important",
                    textTransform: "none",
                    fontWeight: 850,
                    "& .MuiButton-endIcon, & .MuiSvgIcon-root": {
                      color: "#fff !important"
                    },
                    "&:hover": {
                      bgcolor: "primary.dark",
                      color: "#fff !important"
                    }
                  }}
                >
                  Discuss a similar project
                </Button>
              </Box>
            </SectionReveal>
          </Box>
        </Container>
      </Box>

      {relatedStudies.length > 0 ? (
        <Box sx={{ bgcolor: "#F6F4EF" }}>
          <Container maxWidth="xl" sx={{ py: { xs: 4.5, md: 9 } }}>
            <SectionReveal>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-end"
                spacing={2}
                sx={{ mb: { xs: 2.1, md: 3.5 }, gap: 1.5 }}
              >
                <Box sx={{ minWidth: 0, flex: 1 }}>
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                      fontSize: { xs: "1.65rem", sm: "2rem", md: "3rem" },
                      lineHeight: 1,
                      letterSpacing: "-0.055em",
                      whiteSpace: "nowrap"
                    }}
                  >
                    Related case studies
                  </Typography>
                </Box>

                <Button
                  component={Link}
                  href="/case-studies"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    color: "#101413",
                    textTransform: "none",
                    fontWeight: 850,
                    px: 0,
                    minWidth: "auto",
                    flexShrink: 0,
                    fontSize: { xs: "0.92rem", md: "1rem" },
                    whiteSpace: "nowrap",
                    "&:hover": {
                      bgcolor: "transparent",
                      color: "#1C3A2F"
                    }
                  }}
                >
                  All case studies
                </Button>
              </Stack>
            </SectionReveal>

            <SectionReveal>
              <RelatedCaseStudiesCarousel items={relatedStudyCards} />
            </SectionReveal>
          </Container>
        </Box>
      ) : null}
    </SiteShell>
  );
}

function CaseStudyTextSection({
  title,
  body
}: {
  title: string;
  body: string;
}) {
  return (
    <Box sx={{ mt: { xs: 4, md: 5 }, maxWidth: 850 }}>
      <Typography
        variant="h3"
        component="h2"
        sx={{
          fontSize: { xs: "1.75rem", md: "2.25rem" },
          lineHeight: 1.08,
          letterSpacing: "-0.045em",
          mb: 1.5
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          color: "text.secondary",
          fontSize: "1.02rem",
          lineHeight: 1.85
        }}
      >
        {body}
      </Typography>
    </Box>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <Box sx={{ mb: 2.2 }}>
      <Typography
        sx={{
          fontSize: "0.74rem",
          color: "text.secondary",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          fontWeight: 900,
          mb: 0.65
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          color: "#101413",
          fontWeight: 700,
          lineHeight: 1.5
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}
