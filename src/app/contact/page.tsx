import type { Metadata } from "next";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
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
import { ContactForm } from "@/components/contact-form";
import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what you're working on. We'll read it, think about it, and get back to you honestly.",
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: "Contact Mentallion Systems",
    description:
      "Reach out about AI systems, workflow automation, SaaS builds, or custom software. Start the conversation with Mentallion Systems.",
    url: absoluteUrl("/contact"),
    type: "website",
    images: [absoluteUrl(site.ogImage)]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Mentallion Systems",
    description:
      "Reach out about AI systems, workflow automation, SaaS builds, or custom software. Start the conversation with Mentallion Systems.",
    images: [absoluteUrl(site.ogImage)]
  }
};

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Mentallion Systems",
    url: absoluteUrl("/contact"),
    description: metadata.description,
    mainEntity: {
      "@type": "Organization",
      name: site.name,
      email: site.emails.hello,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: site.emails.inquiry
        },
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: site.emails.support
        }
      ]
    }
  };

  return (
    <SiteShell>
      <StructuredData id="contact-page-schema" data={contactPageSchema} />
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          bgcolor: "background.default",
          "&:before": {
            content: '""',
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: "50%",
            top: -180,
            right: -160,
            background:
              "radial-gradient(circle, rgba(28, 58, 47, 0.18) 0%, transparent 68%)",
            pointerEvents: "none"
          },
          "&:after": {
            content: '""',
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            bottom: -180,
            left: -140,
            background:
              "radial-gradient(circle, rgba(28, 58, 47, 0.1) 0%, transparent 70%)",
            pointerEvents: "none"
          }
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 1,
            py: { xs: 7, md: 11 }
          }}
        >
          <SectionReveal>
            <Grid container spacing={{ xs: 4, md: 5 }} alignItems="stretch">
              <Grid size={{ xs: 12, md: 5.1 }}>
                <Stack
                  spacing={3}
                  sx={{
                    height: "100%",
                    justifyContent: "space-between"
                  }}
                >
                  <Box>
                    <Chip
                      label="Get in touch"
                      color="primary"
                      variant="outlined"
                      sx={{
                        mb: 2,
                        borderRadius: 999,
                        fontWeight: 700,
                        bgcolor: "rgba(255,255,255,0.65)",
                        backdropFilter: "blur(14px)"
                      }}
                    />

                    <Typography
                      variant="h1"
                      sx={{
                        fontSize: {
                          xs: "2.5rem",
                          sm: "3.4rem",
                          md: "5.2rem"
                        },
                        lineHeight: 0.95,
                        letterSpacing: "-0.07em",
                        maxWidth: 680
                      }}
                    >
                      Tell us what you&apos;re working on.
                    </Typography>

                    <Box sx={{ mt: 3, maxWidth: 570 }}>
                      <Typography
                        color="text.secondary"
                        sx={{
                          fontSize: { xs: "1.02rem", md: "1.08rem" },
                          lineHeight: 1.85
                        }}
                      >
                        Whether you have a fully scoped project or just a frustrating
                        problem you have not solved yet, reach out. We will read your
                        message carefully and tell you honestly what we think.
                      </Typography>
                    </Box>
                  </Box>

                  <Card
                    sx={{
                      borderRadius: 1.5,
                      border: "1px solid",
                      borderColor: "divider",
                      bgcolor: "rgba(255,255,255,0.72)",
                      backdropFilter: "blur(18px)",
                      boxShadow: "none"
                    }}
                  >
                    <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                      <Stack spacing={2.4}>
                        <Box>
                          <Typography
                            variant="h5"
                            sx={{
                              mb: 0.8,
                              letterSpacing: "-0.03em"
                            }}
                          >
                            Direct, engineer-led communication.
                          </Typography>

                          <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
                            No sales process. No automated follow-up sequence. Just a real
                            conversation about the problem, the constraints, and the best
                            way forward.
                          </Typography>
                        </Box>

                        <Divider />

                        <Stack spacing={1.5}>
                          <Stack direction="row" spacing={1.5} alignItems="flex-start">
                            <Box
                              sx={{
                                width: 22,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                minHeight: 28,
                                flexShrink: 0
                              }}
                            >
                              <EmailOutlinedIcon color="primary" fontSize="small" />
                            </Box>
                            <Box sx={{ pt: "0.02rem" }}>
                              <Typography sx={{ fontWeight: 700, lineHeight: 1.35 }}>
                                Project inquiries
                              </Typography>
                              <Typography color="text.secondary" sx={{ mt: 0.35 }}>
                                {site.emails.inquiry}
                              </Typography>
                            </Box>
                          </Stack>

                          <Stack direction="row" spacing={1.5} alignItems="flex-start">
                            <Box
                              sx={{
                                width: 22,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                minHeight: 28,
                                flexShrink: 0
                              }}
                            >
                              <PublicOutlinedIcon color="primary" fontSize="small" />
                            </Box>
                            <Box sx={{ pt: "0.02rem" }}>
                              <Typography sx={{ fontWeight: 700, lineHeight: 1.35 }}>
                                Coverage
                              </Typography>
                              <Typography color="text.secondary" sx={{ mt: 0.35 }}>
                                Serving businesses globally across industries,
                                including the US, UK, and Gulf.
                              </Typography>
                            </Box>
                          </Stack>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 6.9 }}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 1.5,
                    border: "1px solid",
                    borderColor: "divider",
                    bgcolor: "rgba(255,255,255,0.82)",
                    backdropFilter: "blur(22px)",
                    boxShadow: "0 28px 90px rgba(0, 0, 0, 0.08)"
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, sm: 4, md: 4.5 } }}>
                    <ContactForm />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </SectionReveal>

          <SectionReveal>
            <Card
              sx={{
                mt: { xs: 4, md: 5 },
                borderRadius: 1.5,
                overflow: "hidden",
                border: "1px solid",
                borderColor: "rgba(28,58,47,0.12)",
                bgcolor: "rgba(28,58,47,0.08)",
                boxShadow: "none"
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
                  <Grid size={{ xs: 12, md: 4.2 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        maxWidth: 360,
                        letterSpacing: "-0.04em",
                        lineHeight: 1.08,
                        color: "primary.main"
                      }}
                    >
                      {site.availability}
                    </Typography>
                  </Grid>

                  <Grid size={{ xs: 12, md: 4 }}>
                    <Stack spacing={1.15}>
                      <Typography color="text.secondary">
                        General:{" "}
                        <Box component="span" sx={{ color: "text.primary", wordBreak: "break-word" }}>
                          {site.emails.hello}
                        </Box>
                      </Typography>

                      <Typography color="text.secondary">
                        Project inquiries:{" "}
                        <Box component="span" sx={{ color: "text.primary", wordBreak: "break-word" }}>
                          {site.emails.inquiry}
                        </Box>
                      </Typography>

                      <Typography color="text.secondary">
                        Support:{" "}
                        <Box component="span" sx={{ color: "text.primary", wordBreak: "break-word" }}>
                          {site.emails.support}
                        </Box>
                      </Typography>
                    </Stack>
                  </Grid>

                  <Grid size={{ xs: 12, md: 3.8 }}>
                    <Stack
                      spacing={1.4}
                      sx={{
                        maxWidth: 380,
                        ml: { md: "auto" },
                        alignItems: { xs: "flex-start", md: "flex-end" },
                        textAlign: { xs: "left", md: "right" }
                      }}
                    >
                      <Button
                        component={Link}
                        href={site.whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        variant="outlined"
                        startIcon={<WhatsAppIcon fontSize="small" />}
                        endIcon={<ArrowOutwardIcon fontSize="small" />}
                        sx={{
                          borderRadius: 999,
                          px: 2.4,
                          py: 1.1,
                          fontWeight: 800,
                          color: "primary.main",
                          borderColor: "rgba(28,58,47,0.18)",
                          "& .MuiSvgIcon-root": {
                            color: "primary.main"
                          },
                          "&:hover": {
                            borderColor: "primary.main",
                            bgcolor: "rgba(28,58,47,0.08)"
                          }
                        }}
                      >
                        WhatsApp us
                      </Button>

                      <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
                        Not ready to start a project yet? Send a rough question first.
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </SectionReveal>
        </Container>
      </Box>
    </SiteShell>
  );
}
