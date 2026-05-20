import Link from "next/link";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { site } from "@/content/site";

export function Footer() {
  const copyrightYear = new Date().getFullYear();

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
              <Typography variant="h3" sx={{ mb: 1.25, maxWidth: 520 }}>
                We build AI systems that replace manual work.
              </Typography>
              <Typography color="text.secondary" sx={{ maxWidth: 540 }}>
                {site.trustStrip}
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
            sx={{ mt: 4, pt: 2.5, borderTop: "1px solid", borderColor: "divider" }}
          >
            <Typography color="text.secondary">
              © {copyrightYear} Mentallion Systems. All rights reserved.
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
