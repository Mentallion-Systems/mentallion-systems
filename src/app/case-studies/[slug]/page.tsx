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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { SiteShell } from "@/components/site-shell";
import { SectionReveal } from "@/components/section-reveal";
import {
  caseStudies,
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
    description: study.summary
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const relatedStudies = getRelatedCaseStudies(study.relatedSlugs);

  return (
    <SiteShell>
      <Box
        sx={{
          bgcolor: "#0B0F0E",
          color: "#FFFDF8"
        }}
      >
        <Box
          sx={{
            position: "relative",
            minHeight: { xs: 660, md: 760 },
            display: "flex",
            alignItems: "flex-end",
            overflow: "hidden"
          }}
        >
          <Box
            component="img"
            src={study.bannerImageUrl}
            alt={study.title}
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(8,12,11,0.94) 0%, rgba(8,12,11,0.7) 42%, rgba(8,12,11,0.22) 100%), linear-gradient(180deg, rgba(8,12,11,0.1) 0%, rgba(8,12,11,0.92) 100%)"
            }}
          />

          <Container
            maxWidth="xl"
            sx={{
              position: "relative",
              zIndex: 1,
              pb: { xs: 6, md: 9 }
            }}
          >
            <SectionReveal>
              <Box sx={{ maxWidth: 880 }}>
                <Button
                  component={Link}
                  href="/case-studies"
                  startIcon={<ArrowBackIcon />}
                  sx={{
                    color: "rgba(255,253,248,0.8)",
                    textTransform: "none",
                    px: 0,
                    mb: 3,
                    fontWeight: 700,
                    "&:hover": {
                      bgcolor: "transparent",
                      color: "#FFFDF8"
                    }
                  }}
                >
                  Back to case studies
                </Button>

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
                  component="h1"
                  sx={{
                    fontSize: { xs: "3rem", sm: "4.4rem", md: "6.3rem" },
                    lineHeight: 0.9,
                    letterSpacing: "-0.075em",
                    fontWeight: 850,
                    maxWidth: 940
                  }}
                >
                  {study.title}
                </Typography>

                <Typography
                  sx={{
                    mt: 3,
                    maxWidth: 720,
                    color: "rgba(255,253,248,0.78)",
                    fontSize: { xs: "1.05rem", md: "1.22rem" },
                    lineHeight: 1.7
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
                  component="h2"
                  sx={{
                    fontSize: { xs: "2rem", md: "2.8rem" },
                    lineHeight: 1,
                    letterSpacing: "-0.055em",
                    fontWeight: 850,
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
                    gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
                    gap: 1.4,
                    my: { xs: 4, md: 5 },
                    maxWidth: 780
                  }}
                >
                  {study.metrics.map((metric) => (
                    <Box
                      key={metric.label}
                      sx={{
                        border: "1px solid rgba(16,20,19,0.12)",
                        borderBottom: "4px solid #7FBF8E",
                        borderRadius: "18px",
                        p: { xs: 2, md: 2.4 },
                        bgcolor: "#FFFFFF"
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: "1.55rem", md: "1.9rem" },
                          fontWeight: 900,
                          letterSpacing: "-0.04em",
                          lineHeight: 1
                        }}
                      >
                        {metric.value}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 0.8,
                          color: "text.secondary",
                          fontSize: "0.9rem",
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
                <InfoBlock label="Timeline" value={study.timeline} />

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
          <Container maxWidth="xl" sx={{ py: { xs: 6, md: 9 } }}>
            <SectionReveal>
              <Stack
                direction={{ xs: "column", md: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", md: "flex-end" }}
                spacing={2}
                sx={{ mb: 3.5 }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "0.78rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "text.secondary",
                      fontWeight: 900,
                      mb: 1
                    }}
                  >
                    More work
                  </Typography>

                  <Typography
                    component="h2"
                    sx={{
                      fontSize: { xs: "2rem", md: "3rem" },
                      lineHeight: 1,
                      letterSpacing: "-0.055em",
                      fontWeight: 850
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
                    "&:hover": {
                      bgcolor: "transparent",
                      color: "#1C3A2F"
                    }
                  }}
                >
                  View all case studies
                </Button>
              </Stack>
            </SectionReveal>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "repeat(3, minmax(0, 1fr))"
                },
                gap: 2.4,
                alignItems: "stretch"
              }}
            >
              {relatedStudies.slice(0, 3).map((related) => (
                <SectionReveal key={related.slug}>
                  <Box
                    component={Link}
                    href={`/case-studies/${related.slug}`}
                    sx={{
                      height: 370,
                      minHeight: 370,
                      maxHeight: 370,
                      display: "flex",
                      flexDirection: "column",
                      textDecoration: "none",
                      color: "inherit",
                      bgcolor: "#FFFDF8",
                      borderRadius: "22px",
                      overflow: "hidden",
                      border: "1px solid rgba(16,20,19,0.08)",
                      transition: "transform .25s ease, box-shadow .25s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 24px 70px rgba(16,20,19,0.1)"
                      }
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: 185,
                        minHeight: 185,
                        maxHeight: 185,
                        flex: "0 0 185px",
                        overflow: "hidden",
                        bgcolor: "rgba(28,58,47,0.06)"
                      }}
                    >
                      <Box
                        component="img"
                        src={related.imageUrl}
                        alt={related.title}
                        loading="lazy"
                        sx={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                          display: "block"
                        }}
                      />

                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          pointerEvents: "none",
                          background:
                            "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.08) 45%, rgba(0,0,0,0.38) 100%)"
                        }}
                      />
                    </Box>

                    <Box
                      sx={{
                        p: 2.2,
                        height: 185,
                        minHeight: 185,
                        maxHeight: 185,
                        flex: "1 1 auto",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        overflow: "hidden"
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#1C3A2F",
                          fontSize: "0.72rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          fontWeight: 900,
                          mb: 0.75,
                          display: "-webkit-box",
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden"
                        }}
                      >
                        {related.domain}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "1.18rem",
                          lineHeight: 1.2,
                          letterSpacing: "-0.035em",
                          fontWeight: 850,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden"
                        }}
                      >
                        {related.title}
                      </Typography>

                      <Button
                        component="span"
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          mt: 1.1,
                          alignSelf: "flex-start",
                          px: 0,
                          minHeight: 0,
                          color: "#101413",
                          fontSize: "0.82rem",
                          fontWeight: 850,
                          textTransform: "none",
                          "& .MuiButton-endIcon": {
                            ml: 0.55
                          },
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
        component="h2"
        sx={{
          fontSize: { xs: "1.75rem", md: "2.25rem" },
          lineHeight: 1.08,
          letterSpacing: "-0.045em",
          fontWeight: 850,
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