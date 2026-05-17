import type { Metadata } from "next";
import { Avatar, Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import { SiteShell } from "@/components/site-shell";
import { SectionReveal } from "@/components/section-reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Two engineers who spent years building real software before starting Mentallion Systems. We automate work, build AI systems, and rescue projects left unfinished."
};

const beliefs = [
  {
    title: "Most businesses are still doing manually what software could handle automatically.",
    body: "The technology exists. What is usually missing is the patience to understand the workflow before a team starts building."
  },
  {
    title: "The right model for the job matters more than the most popular one.",
    body: "Trend-driven choices create expensive rewrites. We research before we recommend."
  },
  {
    title: "Demos are not products.",
    body: "A prototype with five happy test users is not the same thing as a system that can survive real traffic and real edge cases."
  },
  {
    title: "You should understand what you are paying for.",
    body: "We explain the tradeoffs clearly. No jargon for its own sake. No technical fog."
  }
];

export default function AboutPage() {
  return (
    <SiteShell>
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <SectionReveal>
          <Typography sx={{ color: "primary.main", mb: 1.5 }}>Who we are</Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: "3.2rem", md: "5rem" }, maxWidth: 860 }}>
            Two engineers who got tired of watching good ideas get built badly.
          </Typography>
        </SectionReveal>

        <SectionReveal>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography paragraph color="text.secondary">
                Jahanzaib and Ahsan met in university in Islamabad while studying computer science. They were the people who kept building beyond the coursework. Products for local problems. Tools for their own workflows. Systems that needed to work, not just look good in a presentation.
              </Typography>
              <Typography paragraph color="text.secondary">
                After graduation, both spent years building production software for real businesses: AI platforms, SaaS products, healthcare systems, and high-traffic applications. That work made one thing clear. Too many agencies manage a process instead of solving the problem.
              </Typography>
              <Typography paragraph color="text.secondary">
                Mentallion Systems exists to close that gap. We wanted to be the team we wished more businesses had access to: technically sharp, honest about tradeoffs, and invested in whether the system still works after launch.
              </Typography>
              <Typography color="text.secondary">
                Today we focus on automation and AI engineering for teams that want less manual work, fewer fragile workarounds, and software that earns its place in the business.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  height: "100%",
                  minHeight: 360,
                  borderRadius: 6,
                  border: "1px dashed",
                  borderColor: "divider",
                  bgcolor: "rgba(255,253,249,0.8)",
                  p: 4,
                  display: "flex",
                  alignItems: "flex-end"
                }}
              >
                <Box>
                  <Typography variant="h4" sx={{ mb: 1.5 }}>
                    Replace this with a real photo of Jahanzaib and Ahsan.
                  </Typography>
                  <Typography color="text.secondary">
                    The brief is right about this. A real photo will do more for trust than any stock visual or AI art.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </SectionReveal>

        <SectionReveal>
          <Grid container spacing={3} sx={{ mt: { xs: 5, md: 7 } }}>
            {beliefs.map((belief) => (
              <Grid key={belief.title} size={{ xs: 12, md: 6 }}>
                <Card sx={{ height: "100%" }}>
                  <CardContent sx={{ p: 3.5 }}>
                    <Typography variant="h5" sx={{ mb: 1.25 }}>
                      {belief.title}
                    </Typography>
                    <Typography color="text.secondary">{belief.body}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </SectionReveal>

        <SectionReveal>
          <Grid container spacing={3} sx={{ mt: { xs: 5, md: 7 } }}>
            {[
              {
                name: "Jahanzaib",
                role: "Co-founder | AI & Full Stack Engineer",
                bio: "Three years of production experience building AI systems, HIPAA-conscious platforms, and agentic automation workflows. He tends to push back when the technical answer does not actually solve the business problem."
              },
              {
                name: "Ahsan",
                role: "Co-founder | AI & Full Stack Engineer",
                bio: "Focused on systems architecture, automation pipelines, and finding the simplest reliable solution to a messy problem. He co-founded Mentallion Systems to stop watching businesses lose time and money to teams that never ship the real thing."
              }
            ].map((person) => (
              <Grid key={person.name} size={{ xs: 12, md: 6 }}>
                <Card sx={{ height: "100%" }}>
                  <CardContent sx={{ p: 3.5 }}>
                    <Stack direction="row" spacing={2.5} alignItems="center" sx={{ mb: 2.5 }}>
                      <Avatar
                        sx={{
                          width: 68,
                          height: 68,
                          bgcolor: "primary.main",
                          color: "primary.contrastText",
                          fontSize: "1.4rem"
                        }}
                      >
                        {person.name.slice(0, 1)}
                      </Avatar>
                      <Box>
                        <Typography variant="h5">{person.name}</Typography>
                        <Typography color="text.secondary">{person.role}</Typography>
                      </Box>
                    </Stack>
                    <Typography color="text.secondary">{person.bio}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </SectionReveal>

        <SectionReveal>
          <Box sx={{ mt: { xs: 5, md: 7 }, maxWidth: 760 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              A note on where we are
            </Typography>
            <Typography color="text.secondary">
              We&apos;re based in {site.location} and work comfortably with clients in the United States, the United Kingdom, and the Gulf. Timezone overlap has not been a real issue because we communicate clearly, respond quickly, and keep the work moving.
            </Typography>
          </Box>
        </SectionReveal>
      </Container>
    </SiteShell>
  );
}
