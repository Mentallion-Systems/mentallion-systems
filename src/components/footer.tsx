import Link from "next/link";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { site } from "@/content/site";

export function Footer() {
  const copyrightYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            p: { xs: 4, md: 5 },
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
              <Stack
                direction="row"
                spacing={1.2}
                alignItems="center"
                sx={{ mb: 1.6 }}
              >
                <Box
                  component="img"
                  src="/images/logo/logo-v2.png"
                  alt={`${site.name} logo`}
                  sx={{
                    width: 34,
                    height: 34,
                    objectFit: "contain",
                    flexShrink: 0
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    lineHeight: 1,
                    color: "#101413"
                  }}
                >
                  {site.name}
                </Typography>
              </Stack>
              <Typography variant="h3" sx={{ mb: 1.5, maxWidth: 520 }}>
                We build AI systems that replace manual work.
              </Typography>
              <Typography color="text.secondary" sx={{ maxWidth: 540 }}>
                Serving businesses globally across industries, including the US, UK, and Gulf.
              </Typography>
              <Typography
                component={Link}
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
              </Typography>
            </Box>
            <Button
              component={Link}
              href="/contact#contact-form"
              variant="contained"
              endIcon={<ArrowOutwardIcon fontSize="small" />}
              sx={{ alignSelf: { xs: "stretch", sm: "flex-start", md: "center" } }}
            >
              Tell us what you&apos;re building
            </Button>
          </Stack>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            spacing={2}
            sx={{ mt: 5, pt: 3, borderTop: "1px solid", borderColor: "divider" }}
          >
            <Typography color="text.secondary">
              © 2026 Mentallion Systems. All rights reserved.
            </Typography>
            <Stack direction="row" spacing={2.5} flexWrap="wrap" useFlexGap>
              {site.nav.map((item) => (
                <Typography
                  key={item.href}
                  component={Link}
                  href={item.href}
                  color="text.secondary"
                  sx={{
                    fontFamily: "var(--font-serif), serif",
                    fontSize: "1.02rem",
                    lineHeight: 1.1
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
