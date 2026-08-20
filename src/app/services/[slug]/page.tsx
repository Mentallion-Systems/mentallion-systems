import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
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
import { SectionReveal } from "@/components/section-reveal";
import { SiteShell } from "@/components/site-shell";
import { StructuredData } from "@/components/structured-data";
import {
  getCaseStudyBySlug,
  getCaseStudyVisual
} from "@/content/case-studies";
import {
  getServiceDetail,
  serviceDetails
} from "@/content/services";
import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return serviceDetails.map((service) => ({
    slug: service.slug
  }));
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetail(slug);

  if (!service) {
    return {
      title: "Service Not Found",
      robots: {
        index: false,
        follow: false
      }
    };
  }

  const pageUrl = absoluteUrl(`/services/${service.slug}`);
  const imageUrl = absoluteUrl(site.ogImage);
  const socialTitle = `${service.metaTitle} | ${site.name}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `/services/${service.slug}`
    },
    openGraph: {
      title: socialTitle,
      description: service.metaDescription,
      url: pageUrl,
      type: "website",
      images: [
        {
          url: imageUrl,
          alt: `${service.title} by ${site.name}`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: service.metaDescription,
      images: [imageUrl]
    }
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceDetail(slug);

  if (!service) {
    notFound();
  }

  const pageUrl = absoluteUrl(`/services/${service.slug}`);
  const relatedCaseStudies = service.relatedCaseStudySlugs
    .map((caseStudySlug) => getCaseStudyBySlug(caseStudySlug))
    .filter(Boolean);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: service.title,
      serviceType: service.title,
      url: pageUrl,
      description: service.metaDescription,
      provider: {
        "@id": `${site.url.replace(/\/+$/, "")}/#organization`
      },
      areaServed: [
        "United States",
        "United Kingdom",
        "Saudi Arabia",
        "United Arab Emirates",
        "Singapore",
        "France",
        "Portugal",
        "Germany",
        "Indonesia",
        "Hungary",
        "South Africa",
        "Oman",
        "Qatar"
      ],
      audience: service.audience.map((audienceType) => ({
        "@type": "Audience",
        audienceType
      })),
      serviceOutput: service.outcomes
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/")
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: absoluteUrl("/services")
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.shortTitle,
          item: pageUrl
        }
      ]
    }
  ];

  return (
    <SiteShell>
      <StructuredData
        id={`service-structured-data-${service.slug}`}
        data={structuredData}
      />

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          bgcolor: "#0B0F0E",
          color: "#FFFDF8",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 84% 14%, rgba(127,191,142,0.22), transparent 23%), radial-gradient(circle at 8% 90%, rgba(255,255,255,0.08), transparent 25%)"
          }
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            zIndex: 1,
            py: { xs: 7, md: 11 }
          }}
        >
          <Box
            component="nav"
            aria-label="Breadcrumb"
            sx={{ mb: { xs: 4, md: 6 } }}
          >
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              flexWrap="wrap"
              useFlexGap
            >
              <Link href="/">
                <Typography
                  component="span"
                  sx={{ color: "rgba(255,253,248,0.66)", fontSize: "0.9rem" }}
                >
                  Home
                </Typography>
              </Link>
              <Typography aria-hidden="true" sx={{ color: "rgba(255,253,248,0.38)" }}>
                /
              </Typography>
              <Link href="/services">
                <Typography
                  component="span"
                  sx={{ color: "rgba(255,253,248,0.66)", fontSize: "0.9rem" }}
                >
                  Services
                </Typography>
              </Link>
              <Typography aria-hidden="true" sx={{ color: "rgba(255,253,248,0.38)" }}>
                /
              </Typography>
              <Typography sx={{ color: "#FFFDF8", fontSize: "0.9rem" }}>
                {service.shortTitle}
              </Typography>
            </Stack>
          </Box>

          <Grid container spacing={{ xs: 5, lg: 9 }} alignItems="end">
            <Grid size={{ xs: 12, lg: 8 }}>
              <SectionReveal>
                <Box>
                  <Typography
                    sx={{
                      color: "rgba(255,253,248,0.66)",
                      fontSize: "0.8rem",
                      fontWeight: 800,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      mb: 2
                    }}
                  >
                    {service.eyebrow}
                  </Typography>
                  <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                      maxWidth: 980,
                      fontSize: { xs: "2.65rem", sm: "4rem", md: "6rem" },
                      lineHeight: 0.94,
                      letterSpacing: "-0.065em"
                    }}
                  >
                    {service.headline}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 3,
                      maxWidth: 850,
                      color: "rgba(255,253,248,0.76)",
                      fontSize: { xs: "1.05rem", md: "1.22rem" },
                      lineHeight: 1.75
                    }}
                  >
                    {service.answer}
                  </Typography>
                </Box>
              </SectionReveal>
            </Grid>

            <Grid size={{ xs: 12, lg: 4 }}>
              <SectionReveal>
                <Box
                  sx={{
                    p: { xs: 3, md: 3.5 },
                    borderRadius: "24px",
                    bgcolor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    backdropFilter: "blur(12px)"
                  }}
                >
                  <Typography variant="h5" sx={{ mb: 1 }}>
                    Have this problem now?
                  </Typography>
                  <Typography sx={{ color: "rgba(255,253,248,0.7)", lineHeight: 1.65 }}>
                    Share the workflow, product, or bottleneck. We will help
                    determine the most practical next step.
                  </Typography>
                  <Link
                    href={`/contact?service=${service.slug}#contact-form`}
                    style={{ display: "inline-flex", marginTop: 20 }}
                  >
                    <Button
                      component="span"
                      variant="contained"
                      color="secondary"
                      endIcon={<ArrowOutwardIcon fontSize="small" />}
                    >
                      Discuss your project
                    </Button>
                  </Link>
                </Box>
              </SectionReveal>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#FFFDF8" }}>
        <Container maxWidth="xl" sx={{ py: { xs: 7, md: 11 } }}>
          <SectionReveal>
            <Grid container spacing={{ xs: 5, md: 8 }}>
              <Grid size={{ xs: 12, md: 5 }}>
                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    mb: 1.5
                  }}
                >
                  The operating problem
                </Typography>
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    fontSize: { xs: "2.25rem", md: "3.7rem" },
                    lineHeight: 1,
                    letterSpacing: "-0.055em"
                  }}
                >
                  Start with the work, not the tool.
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "1rem", md: "1.12rem" },
                    lineHeight: 1.85
                  }}
                >
                  {service.problem}
                </Typography>
              </Grid>
            </Grid>
          </SectionReveal>

          <Grid container spacing={3} sx={{ mt: { xs: 6, md: 9 } }}>
            <Grid size={{ xs: 12, lg: 6 }}>
              <SectionReveal>
                <Card sx={{ height: "100%", borderRadius: "26px" }}>
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Typography variant="h3" component="h2" sx={{ fontSize: "2rem", mb: 2.5 }}>
                      Who this service is for
                    </Typography>
                    <Stack spacing={1.6}>
                      {service.audience.map((item) => (
                        <Stack key={item} direction="row" spacing={1.4} alignItems="flex-start">
                          <CheckCircleOutlineIcon
                            color="primary"
                            fontSize="small"
                            sx={{ mt: 0.35, flexShrink: 0 }}
                          />
                          <Typography color="text.secondary" sx={{ lineHeight: 1.65 }}>
                            {item}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </SectionReveal>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <SectionReveal>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: "26px",
                    bgcolor: "primary.main",
                    color: "primary.contrastText"
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Typography variant="h3" component="h2" sx={{ fontSize: "2rem", mb: 2.5 }}>
                      What a good outcome looks like
                    </Typography>
                    <Stack spacing={1.6}>
                      {service.outcomes.map((item) => (
                        <Stack key={item} direction="row" spacing={1.4} alignItems="flex-start">
                          <CheckCircleOutlineIcon
                            fontSize="small"
                            sx={{ mt: 0.35, flexShrink: 0, color: "secondary.main" }}
                          />
                          <Typography sx={{ color: "rgba(255,253,248,0.8)", lineHeight: 1.65 }}>
                            {item}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </SectionReveal>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#F3EFE7" }}>
        <Container maxWidth="xl" sx={{ py: { xs: 7, md: 11 } }}>
          <SectionReveal>
            <Box sx={{ maxWidth: 820, mb: { xs: 4, md: 6 } }}>
              <Typography sx={{ color: "primary.main", mb: 1.5 }}>
                Common applications
              </Typography>
              <Typography
                variant="h2"
                component="h2"
                sx={{ fontSize: { xs: "2.35rem", md: "3.8rem" }, lineHeight: 1 }}
              >
                Where {service.shortTitle.toLowerCase()} creates practical value.
              </Typography>
            </Box>
          </SectionReveal>

          <Grid container spacing={2.5}>
            {service.useCases.map((useCase, index) => (
              <Grid key={useCase.title} size={{ xs: 12, md: 6 }}>
                <SectionReveal>
                  <Box
                    component="article"
                    sx={{
                      height: "100%",
                      p: { xs: 3, md: 3.5 },
                      borderRadius: "24px",
                      bgcolor: "#FFFDF8",
                      border: "1px solid rgba(28,58,47,0.1)"
                    }}
                  >
                    <Typography
                      sx={{
                        color: "primary.main",
                        fontSize: "0.78rem",
                        fontWeight: 800,
                        letterSpacing: "0.12em",
                        mb: 1.5
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Typography>
                    <Typography variant="h4" component="h3" sx={{ mb: 1.25 }}>
                      {useCase.title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
                      {useCase.description}
                    </Typography>
                  </Box>
                </SectionReveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 7, md: 11 } }}>
        <SectionReveal>
          <Grid container spacing={{ xs: 5, lg: 9 }} alignItems="start">
            <Grid size={{ xs: 12, lg: 5 }}>
              <Typography sx={{ color: "primary.main", mb: 1.5 }}>
                What we deliver
              </Typography>
              <Typography
                variant="h2"
                component="h2"
                sx={{ fontSize: { xs: "2.35rem", md: "3.8rem" }, lineHeight: 1 }}
              >
                A working system and a clear path to operate it.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, lg: 7 }}>
              <Stack divider={<Divider flexItem />} spacing={0}>
                {service.deliverables.map((deliverable, index) => (
                  <Stack
                    key={deliverable}
                    direction="row"
                    spacing={2}
                    sx={{ py: 2.2 }}
                    alignItems="baseline"
                  >
                    <Typography
                      sx={{
                        color: "primary.main",
                        fontWeight: 800,
                        fontSize: "0.82rem",
                        minWidth: 30
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Typography>
                    <Typography sx={{ fontSize: "1.05rem", lineHeight: 1.6 }}>
                      {deliverable}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </SectionReveal>
      </Container>

      <Box sx={{ bgcolor: "#0B0F0E", color: "#FFFDF8" }}>
        <Container maxWidth="xl" sx={{ py: { xs: 7, md: 11 } }}>
          <SectionReveal>
            <Box sx={{ maxWidth: 780, mb: { xs: 5, md: 7 } }}>
              <Typography sx={{ color: "secondary.main", mb: 1.5 }}>
                Delivery process
              </Typography>
              <Typography
                variant="h2"
                component="h2"
                sx={{ fontSize: { xs: "2.35rem", md: "3.8rem" }, lineHeight: 1 }}
              >
                From a messy problem to a production system.
              </Typography>
            </Box>
          </SectionReveal>

          <Grid container spacing={2}>
            {service.process.map((step, index) => (
              <Grid key={step.title} size={{ xs: 12, sm: 6, lg: 3 }}>
                <SectionReveal>
                  <Box
                    sx={{
                      height: "100%",
                      p: 3,
                      borderRadius: "22px",
                      bgcolor: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.11)"
                    }}
                  >
                    <Chip
                      label={String(index + 1).padStart(2, "0")}
                      sx={{ mb: 2.5, bgcolor: "secondary.main", fontWeight: 800 }}
                    />
                    <Typography variant="h4" component="h3" sx={{ mb: 1.25 }}>
                      {step.title}
                    </Typography>
                    <Typography sx={{ color: "rgba(255,253,248,0.7)", lineHeight: 1.7 }}>
                      {step.description}
                    </Typography>
                  </Box>
                </SectionReveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#FFFDF8" }}>
        <Container maxWidth="xl" sx={{ py: { xs: 7, md: 11 } }}>
          <SectionReveal>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    height: "100%",
                    p: { xs: 3, md: 4 },
                    borderRadius: "24px",
                    bgcolor: "rgba(127,191,142,0.13)",
                    border: "1px solid rgba(28,58,47,0.12)"
                  }}
                >
                  <Typography variant="h4" component="h2" sx={{ mb: 1.5 }}>
                    Signs this is a good fit
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {service.goodFit}
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    height: "100%",
                    p: { xs: 3, md: 4 },
                    borderRadius: "24px",
                    bgcolor: "rgba(185,169,143,0.13)",
                    border: "1px solid rgba(93,75,53,0.15)"
                  }}
                >
                  <Typography variant="h4" component="h2" sx={{ mb: 1.5 }}>
                    When another approach is better
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {service.notFit}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </SectionReveal>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#F3EFE7" }}>
        <Container maxWidth="xl" sx={{ py: { xs: 7, md: 11 } }}>
          <SectionReveal>
            <Box sx={{ maxWidth: 820, mb: { xs: 4, md: 6 } }}>
              <Typography sx={{ color: "primary.main", mb: 1.5 }}>
                Related work
              </Typography>
              <Typography
                variant="h2"
                component="h2"
                sx={{ fontSize: { xs: "2.35rem", md: "3.8rem" }, lineHeight: 1 }}
              >
                See how similar systems worked in practice.
              </Typography>
            </Box>
          </SectionReveal>

          <Grid container spacing={2.5}>
            {relatedCaseStudies.map((study) => {
              if (!study) return null;

              const image = getCaseStudyVisual(study);

              return (
                <Grid key={study.slug} size={{ xs: 12, md: 4 }}>
                  <SectionReveal>
                    <Card sx={{ height: "100%", borderRadius: "24px", overflow: "hidden" }}>
                      <Box
                        sx={{
                          position: "relative",
                          width: "100%",
                          height: 210
                        }}
                      >
                        <Image
                        src={image.src}
                        alt={`${study.title} case study`}
                        fill
                        sizes="(max-width: 900px) 100vw, 33vw"
                        style={{
                          objectFit: "cover",
                          objectPosition: image.position
                        }}
                      />
                      </Box>
                      <CardContent sx={{ p: 3 }}>
                        <Typography
                          sx={{
                            color: "primary.main",
                            fontSize: "0.78rem",
                            fontWeight: 800,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            mb: 1
                          }}
                        >
                          {study.metric}
                        </Typography>
                        <Typography variant="h4" component="h3" sx={{ mb: 1.25 }}>
                          {study.title}
                        </Typography>
                        <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                          {study.summary}
                        </Typography>
                        <Link
                          href={`/case-studies/${study.slug}`}
                          style={{ display: "inline-flex", marginTop: 16 }}
                        >
                          <Button
                            component="span"
                            endIcon={<ArrowOutwardIcon fontSize="small" />}
                            sx={{ px: 0 }}
                          >
                            Read case study
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </SectionReveal>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 11 } }}>
        <SectionReveal>
          <Box sx={{ maxWidth: 900, mx: "auto" }}>
            <Typography sx={{ color: "primary.main", mb: 1.5 }}>
              Frequently asked questions
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: "2.35rem", md: "3.8rem" },
                lineHeight: 1,
                mb: { xs: 4, md: 6 }
              }}
            >
              Straight answers before you start.
            </Typography>

            <Stack spacing={2}>
              {service.faqs.map((faq) => (
                <Box
                  key={faq.question}
                  component="article"
                  sx={{
                    p: { xs: 3, md: 3.5 },
                    borderRadius: "22px",
                    bgcolor: "#FFFDF8",
                    border: "1px solid rgba(28,58,47,0.11)"
                  }}
                >
                  <Typography variant="h4" component="h3" sx={{ mb: 1.25 }}>
                    {faq.question}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {faq.answer}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </SectionReveal>

        <SectionReveal>
          <Box
            sx={{
              mt: { xs: 7, md: 10 },
              p: { xs: 4, md: 6 },
              borderRadius: "28px",
              bgcolor: "primary.main",
              color: "primary.contrastText",
              textAlign: "center"
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{ fontSize: { xs: "2.35rem", md: "4rem" }, lineHeight: 1 }}
            >
              Bring us the problem in its rough form.
            </Typography>
            <Typography
              sx={{
                mt: 2,
                mx: "auto",
                maxWidth: 680,
                color: "rgba(255,253,248,0.76)",
                lineHeight: 1.75
              }}
            >
              We will help turn it into a clear system scope and tell you
              honestly whether this service is the right fit.
            </Typography>
            <Link
              href={`/contact?service=${service.slug}#contact-form`}
              style={{ display: "inline-flex", marginTop: 24 }}
            >
              <Button
                component="span"
                variant="contained"
                color="secondary"
                endIcon={<ArrowOutwardIcon fontSize="small" />}
              >
                Start the conversation
              </Button>
            </Link>
          </Box>
        </SectionReveal>
      </Container>
    </SiteShell>
  );
}
