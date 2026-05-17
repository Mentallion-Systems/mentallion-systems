import type { Metadata } from "next";
import { Box, Card, CardContent, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import { SiteShell } from "@/components/site-shell";
import { SectionReveal } from "@/components/section-reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Business process automation, AI agent systems, custom SaaS, and AI integration. Built for production, not proof of concept."
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <SectionReveal>
          <Typography sx={{ color: "primary.main", mb: 1.5 }}>What we do</Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: "3.2rem", md: "5rem" }, maxWidth: 880 }}>
            We build systems that do the work your team should not have to.
          </Typography>
          <Typography sx={{ mt: 3, maxWidth: 720, color: "text.secondary" }}>
            We are engineers who think like business partners. That means we do not just write code. We understand what you are trying to achieve, then build the shortest reliable path to get there.
          </Typography>
        </SectionReveal>

        <SectionReveal>
          <Grid container spacing={3} sx={{ mt: 3 }}>
            {site.services.map((service) => (
              <Grid key={service.title} size={{ xs: 12, md: 6 }}>
                <Card sx={{ height: "100%" }}>
                  <CardContent sx={{ p: 3.5 }}>
                    <Typography variant="h4" sx={{ mb: 2 }}>
                      {service.title}
                    </Typography>
                    <Typography sx={{ mb: 1.25, color: "text.secondary" }}>
                      <Box component="span" sx={{ color: "text.primary", fontWeight: 600 }}>
                        Who this is for:
                      </Box>{" "}
                      {service.audience}
                    </Typography>
                    <Typography sx={{ mb: 1.25, color: "text.secondary" }}>
                      <Box component="span" sx={{ color: "text.primary", fontWeight: 600 }}>
                        What we build:
                      </Box>{" "}
                      {service.build}
                    </Typography>
                    <Typography sx={{ mb: 2.5, color: "text.secondary" }}>
                      <Box component="span" sx={{ color: "text.primary", fontWeight: 600 }}>
                        The outcome:
                      </Box>{" "}
                      {service.outcome}
                    </Typography>
                    <Stack component="ul" spacing={1.2} sx={{ pl: 2.5, mb: 3, m: 0 }}>
                      {service.bullets.map((bullet) => (
                        <Typography component="li" key={bullet} color="text.secondary">
                          {bullet}
                        </Typography>
                      ))}
                    </Stack>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {service.tags.map((tag) => (
                        <Chip key={tag} label={tag} variant="outlined" />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </SectionReveal>

        <SectionReveal>
          <Box
            sx={{
              mt: { xs: 7, md: 10 },
              p: { xs: 4, md: 5 },
              borderRadius: 6,
              bgcolor: "rgba(28,58,47,0.08)",
              border: "1px solid",
              borderColor: "divider"
            }}
          >
            <Typography variant="h2" sx={{ fontSize: { xs: "2.2rem", md: "3.4rem" }, mb: 2 }}>
              We&apos;re not the right fit for everyone. That&apos;s fine.
            </Typography>
            <Typography paragraph color="text.secondary">
              We do not take projects just to take them. If your problem does not need AI, we will tell you that and point you toward a simpler answer.
            </Typography>
            <Typography paragraph color="text.secondary">
              We are also not the team for clients who want a full custom system for the price of a single workflow, or who need so many approvals that nothing ships.
            </Typography>
            <Typography color="text.secondary">
              If you want something built properly and you understand what that takes, let&apos;s talk.
            </Typography>
          </Box>
        </SectionReveal>
      </Container>
    </SiteShell>
  );
}
