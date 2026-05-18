import Link from "next/link";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { site } from "@/content/site";

export function Footer() {
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
              <Typography variant="h3" sx={{ mb: 1.5, maxWidth: 520 }}>
                We build AI systems that replace manual work.
              </Typography>
              <Typography color="text.secondary" sx={{ maxWidth: 540 }}>
                Based in {site.location}. Working with clients across the US, UK, Gulf, and Pakistan.
              </Typography>
            </Box>
            <Button
              component={Link}
              href="/contact#contact-form"
              variant="contained"
              endIcon={<ArrowOutwardIcon fontSize="small" />}
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
              {site.availability}
            </Typography>
            <Stack direction="row" spacing={2.5} flexWrap="wrap">
              {site.nav.map((item) => (
                <Typography key={item.href} component={Link} href={item.href} color="text.secondary">
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
