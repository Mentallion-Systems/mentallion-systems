import type { Metadata } from "next";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import { SiteShell } from "@/components/site-shell";
import { SectionReveal } from "@/components/section-reveal";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us what you're working on. We'll read it, think about it, and get back to you honestly."
};

export default function ContactPage() {
  return (
    <SiteShell>
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <SectionReveal>
          <Grid container spacing={{ xs: 4, md: 5 }} alignItems="start">
            <Grid size={{ xs: 12, md: 5.2 }}>
              <Typography sx={{ color: "primary.main", mb: 1.5 }}>Get in touch</Typography>
              <Typography variant="h1" sx={{ fontSize: { xs: "3.2rem", md: "5rem" }, maxWidth: 640 }}>
                Tell us what you&apos;re working on.
              </Typography>
              <Box sx={{ mt: 3, maxWidth: 560 }}>
                <Typography paragraph color="text.secondary">
                  You&apos;ve found the right team. Whether you have a fully scoped project or just a frustrating problem you have not solved yet, reach out.
                </Typography>
                <Typography paragraph color="text.secondary">
                  We will read what you write, have an actual conversation about it, and tell you honestly what we think.
                </Typography>
                <Typography color="text.secondary">
                  No sales process. No automated follow-up sequence. Just two engineers who will read your message and get back to you.
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6.8 }}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <ContactForm />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </SectionReveal>

        <SectionReveal>
          <Card sx={{ mt: { xs: 4, md: 5 }, bgcolor: "rgba(255,253,249,0.8)", borderRadius: 3 }}>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Grid container spacing={{ xs: 2.5, md: 3 }} alignItems="center">
                <Grid size={{ xs: 12, md: 4.2 }}>
                  <Typography variant="h4" sx={{ maxWidth: 320 }}>
                    {site.availability}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 3.8 }}>
                  <Stack spacing={0.75}>
                    <Typography color="text.secondary">General: {site.emails.hello}</Typography>
                    <Typography color="text.secondary">Project inquiries: {site.emails.inquiries}</Typography>
                    <Typography color="text.secondary">Support: {site.emails.support}</Typography>
                    <Typography color="text.secondary">Location: {site.location} | UTC+5</Typography>
                  </Stack>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Stack spacing={1.2} sx={{ maxWidth: 360, ml: { md: "auto" } }}>
                    <Button
                      component={Link}
                      href={site.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      endIcon={<ArrowOutwardIcon fontSize="small" />}
                      sx={{ alignSelf: "flex-start" }}
                    >
                      WhatsApp is best for quick questions
                    </Button>
                    <Typography color="text.secondary">
                      Not ready to start a project yet? Send a WhatsApp message and ask the rough question first.
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </SectionReveal>
      </Container>
    </SiteShell>
  );
}
