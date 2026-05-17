import Link from "next/link";
import { Box, Button, Container, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { SiteShell } from "@/components/site-shell";

export default function NotFound() {
  return (
    <SiteShell>
      <Container maxWidth="md" sx={{ py: { xs: 10, md: 16 } }}>
        <Box
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 6,
            border: "1px solid",
            borderColor: "divider",
            bgcolor: "rgba(255,253,249,0.82)"
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: "3rem", md: "4.4rem" }, mb: 2 }}>
            We can&apos;t find that page.
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 4, maxWidth: 560 }}>
            But if you&apos;re looking for a team that can find the right solution to your problem, you&apos;re in the right place.
          </Typography>
          <Button component={Link} href="/" variant="contained" startIcon={<ArrowBackIcon fontSize="small" />}>
            Back to home
          </Button>
        </Box>
      </Container>
    </SiteShell>
  );
}
