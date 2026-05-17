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
          <Typography sx={{ color: "primary.main", mb: 1.5 }}>Get in touch</Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: "3.2rem", md: "5rem" }, maxWidth: 740 }}>
            Tell us what you&apos;re working on.
          </Typography>
        </SectionReveal>

        <SectionReveal>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography paragraph color="text.secondary">
                You&apos;ve found the right team. Whether you have a fully scoped project or just a frustrating problem you have not solved yet, reach out.
              </Typography>
              <Typography paragraph color="text.secondary">
                We will read what you write, have an actual conversation about it, and tell you honestly what we think.
              </Typography>
              <Typography paragraph color="text.secondary">
                No sales process. No automated follow-up sequence. Just two engineers who will read your message and get back to you.
              </Typography>
              <Card sx={{ mt: 3, bgcolor: "rgba(255,253,249,0.8)" }}>
                <CardContent sx={{ p: 3.5 }}>
                  <Stack spacing={1.5}>
                    <Typography variant="h5">{site.availability}</Typography>
                    <Typography color="text.secondary">Email: {site.email}</Typography>
                    <Typography color="text.secondary">Location: {site.location} | UTC+5</Typography>
                    <Button
                      component={Link}
                      href={site.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      endIcon={<ArrowOutwardIcon fontSize="small" />}
                      sx={{ alignSelf: "flex-start", mt: 1 }}
                    >
                      WhatsApp is best for quick questions
                    </Button>
                    <Box sx={{ pt: 1.5 }}>
                      <Typography color="text.secondary">
                        Not ready to start a project yet? Send a WhatsApp message and ask the rough question first.
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Card>
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <ContactForm />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </SectionReveal>
      </Container>
    </SiteShell>
  );
}
