import Link from "next/link";
import Image from "next/image";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { AnalyticsPreferencesButton } from "@/components/analytics-consent";
import { site } from "@/content/site";
import { serviceDetails } from "@/content/services";

export function Footer() {
  const copyrightYear = new Date().getFullYear();
  const analyticsEnabled = Boolean(
    process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID ||
      process.env.NEXT_PUBLIC_GA_ID
  );

  return (
    <Box component="footer" sx={{ pt: { xs: 4, md: 5 }, pb: { xs: 5, md: 6 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 1.5,
            border: "1px solid",
            borderColor: "divider",
            bgcolor: "rgba(255,253,249,0.8)"
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            spacing={3}
            alignItems={{ xs: "flex-start", md: "center" }}
          >
            <Box>
              <Box
                sx={{
                  position: "relative",
                  width: 64,
                  height: 64,
                  mb: 1.5
                }}
              >
                <Image
                  src="/images/logo/mentallion-mark.png"
                  alt={`${site.name} logo`}
                  fill
                  sizes="64px"
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Typography variant="h3" sx={{ mb: 1.25, maxWidth: 520 }}>
                We build AI systems that replace manual work.
              </Typography>
              <Typography color="text.secondary" sx={{ maxWidth: 540 }}>
                {site.trustStrip}
              </Typography>
              <Box
                component="a"
                href={`mailto:${site.emails.hello}`}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  mt: 1.4,
                  px: 1.35,
                  py: 0.75,
                  borderRadius: 999,
                  border: "1px solid rgba(28,58,47,0.12)",
                  bgcolor: "rgba(255,255,255,0.5)",
                  color: "text.secondary",
                  textDecoration: "none",
                  fontSize: "0.92rem",
                  lineHeight: 1,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: "primary.main",
                    borderColor: "rgba(28,58,47,0.22)",
                    bgcolor: "rgba(255,255,255,0.74)"
                  }
                }}
              >
                {site.emails.hello}
              </Box>
            </Box>
            <Link
              href="/contact#contact-form"
              style={{ display: "inline-flex" }}
            >
              <Button
                component="span"
                variant="contained"
                endIcon={<ArrowOutwardIcon fontSize="small" />}
                sx={{ width: { xs: "100%", sm: "auto" } }}
              >
                Tell us what you&apos;re building
              </Button>
            </Link>
          </Stack>
          <Box
            sx={{
              mt: 4,
              pt: 2.5,
              borderTop: "1px solid",
              borderColor: "divider"
            }}
          >
            <Typography
              sx={{
                mb: 1.5,
                color: "text.secondary",
                fontSize: "0.78rem",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase"
              }}
            >
              Services
            </Typography>
            <Stack direction="row" spacing={2.5} flexWrap="wrap" useFlexGap>
              {serviceDetails.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                >
                  <Typography
                    component="span"
                    color="text.secondary"
                    sx={{ fontSize: "0.94rem" }}
                  >
                    {service.shortTitle}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Box>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            spacing={2}
            sx={{ mt: 2.5, pt: 2.5, borderTop: "1px solid", borderColor: "divider" }}
          >
            <Typography color="text.secondary">
              © {copyrightYear} Mentallion Systems. All rights reserved.
            </Typography>
            <Stack direction="row" spacing={2.5} flexWrap="wrap" useFlexGap>
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                >
                  <Typography
                    component="span"
                    color="text.secondary"
                    sx={{
                      fontFamily: "var(--font-serif), serif",
                      fontSize: "1.02rem",
                      lineHeight: 1.1
                    }}
                  >
                    {item.label}
                  </Typography>
                </Link>
              ))}
              <Link href="/privacy">
                <Typography
                  component="span"
                  color="text.secondary"
                  sx={{
                    fontFamily: "var(--font-serif), serif",
                    fontSize: "1.02rem",
                    lineHeight: 1.1
                  }}
                >
                  Privacy
                </Typography>
              </Link>
              <Link href="/terms">
                <Typography
                  component="span"
                  color="text.secondary"
                  sx={{
                    fontFamily: "var(--font-serif), serif",
                    fontSize: "1.02rem",
                    lineHeight: 1.1
                  }}
                >
                  Terms
                </Typography>
              </Link>
              {analyticsEnabled ? <AnalyticsPreferencesButton /> : null}
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
