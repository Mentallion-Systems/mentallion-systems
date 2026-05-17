"use client";

import * as React from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Chip,
  Stack,
  Typography
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { site, type CaseStudy, type CaseStudyFilterTag } from "@/content/site";

const filters = [
  { key: "all", label: "All" },
  { key: "ai", label: "AI / Agentic" },
  { key: "saas", label: "SaaS" },
  { key: "local", label: "Local business" },
  { key: "enterprise", label: "Enterprise" }
] as const;

type FilterKey = (typeof filters)[number]["key"];

const badgeStyles: Record<
  CaseStudy["category"],
  { label: string; bg: string; fg: string }
> = {
  Automation: { label: "Automation", bg: "#F0EADF", fg: "#40372D" },
  "AI Agents": { label: "AI / Agentic", bg: "#E7F1FB", fg: "#0B4778" },
  SaaS: { label: "SaaS", bg: "#EFEEFF", fg: "#3C3489" },
  Healthcare: { label: "Healthcare", bg: "#FAECE7", fg: "#712B13" },
  Data: { label: "Data systems", bg: "#E3F5EE", fg: "#085041" }
};

export function CaseStudiesGrid() {
  const [activeFilter, setActiveFilter] = React.useState<FilterKey>("all");

  const visibleItems =
    activeFilter === "all"
      ? site.caseStudies
      : site.caseStudies.filter((item) =>
          item.filterTags?.some(
            (tag) => tag === (activeFilter as CaseStudyFilterTag)
          )
        );

  return (
    <Box>
      <Stack
        direction="row"
        spacing={1}
        flexWrap="wrap"
        useFlexGap
        sx={{ mb: { xs: 3, md: 4 } }}
      >
        {filters.map((filter) => {
          const isActive = activeFilter === filter.key;

          return (
            <Chip
              key={filter.key}
              label={filter.label}
              onClick={() => setActiveFilter(filter.key)}
              sx={{
                px: 0.75,
                height: 36,
                borderRadius: 999,
                border: "1px solid",
                borderColor: isActive ? "text.primary" : "divider",
                bgcolor: isActive ? "text.primary" : "transparent",
                color: isActive ? "background.paper" : "text.secondary",
                fontWeight: 650,
                transition: "all .2s ease",
                "&:hover": {
                  bgcolor: isActive ? "text.primary" : "rgba(28,58,47,0.06)"
                }
              }}
            />
          );
        })}
      </Stack>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, minmax(0, 1fr))",
            xl: "repeat(3, minmax(0, 1fr))"
          },
          gap: { xs: 2.4, md: 3 }
        }}
      >
        {visibleItems.map((item) => {
          const badge = badgeStyles[item.category];
          const metrics = item.metrics ?? [
            { value: item.metric, label: "Key outcome" }
          ];

          return (
            <Box
              key={item.slug}
              component="article"
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                bgcolor: "#FFFDF8",
                border: "1px solid rgba(20, 28, 25, 0.1)",
                borderRadius: "26px",
                overflow: "hidden",
                boxShadow: "0 18px 50px rgba(18, 24, 22, 0.07)",
                transition:
                  "transform .25s ease, box-shadow .25s ease, border-color .25s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  borderColor: "rgba(28,58,47,0.24)",
                  boxShadow: "0 30px 80px rgba(18, 24, 22, 0.12)"
                }
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: 250,
                  bgcolor: "rgba(28,58,47,0.06)"
                }}
              >
                {item.imageUrl ? (
                  <Box
                    component="img"
                    src={item.imageUrl}
                    alt={item.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block"
                    }}
                  />
                ) : null}

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.48) 100%)"
                  }}
                />

                <Chip
                  label={badge.label}
                  sx={{
                    position: "absolute",
                    left: 18,
                    bottom: 18,
                    height: 32,
                    borderRadius: 999,
                    bgcolor: badge.bg,
                    color: badge.fg,
                    fontWeight: 800
                  }}
                />
              </Box>

              <Box
                sx={{
                  p: { xs: 2.3, md: 2.7 },
                  display: "flex",
                  flexDirection: "column",
                  flex: 1
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  spacing={2}
                  sx={{ mb: 1.4 }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.76rem",
                      fontWeight: 850,
                      color: "#1C3A2F",
                      letterSpacing: "0.09em",
                      textTransform: "uppercase"
                    }}
                  >
                    {item.engagement}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      color: "text.secondary",
                      whiteSpace: "nowrap"
                    }}
                  >
                    {item.timeline ?? "Production build"}
                  </Typography>
                </Stack>

                <Typography
                  component="h3"
                  sx={{
                    fontSize: { xs: "1.35rem", md: "1.52rem" },
                    lineHeight: 1.12,
                    fontWeight: 850,
                    letterSpacing: "-0.04em",
                    mb: 1.2
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.95rem",
                    lineHeight: 1.68,
                    mb: 2
                  }}
                >
                  {item.summary}
                </Typography>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: 1,
                    mb: 2.2
                  }}
                >
                  {metrics.slice(0, 2).map((metric) => (
                    <Box
                      key={`${item.slug}-${metric.label}`}
                      sx={{
                        p: 1.35,
                        borderRadius: "16px",
                        border: "1px solid rgba(28,58,47,0.09)",
                        bgcolor: "rgba(28,58,47,0.035)"
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "1.05rem",
                          fontWeight: 850,
                          lineHeight: 1.15
                        }}
                      >
                        {metric.value}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 0.35,
                          fontSize: "0.74rem",
                          lineHeight: 1.35,
                          color: "text.secondary"
                        }}
                      >
                        {metric.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Stack spacing={1.1} sx={{ mb: 2.4 }}>
                  <Point label="Problem" value={item.problem ?? item.summary} />
                  <Point label="Built" value={item.build ?? item.summary} />
                </Stack>

                <Stack
                  direction="row"
                  spacing={0.7}
                  useFlexGap
                  flexWrap="wrap"
                  sx={{ mb: 2.4 }}
                >
                  {(item.tags ?? [item.category]).slice(0, 3).map((tag) => (
                    <Chip
                      key={`${item.slug}-${tag}`}
                      label={tag}
                      variant="outlined"
                      sx={{
                        height: 25,
                        borderRadius: 999,
                        fontSize: "0.72rem",
                        color: "text.secondary",
                        borderColor: "rgba(28,58,47,0.16)",
                        bgcolor: "rgba(255,255,255,0.54)"
                      }}
                    />
                  ))}
                </Stack>

                <Box sx={{ mt: "auto" }}>
                  <Button
                    component={Link}
                    href={`/case-studies/${item.slug}`}
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      px: 0,
                      color: "#101413",
                      fontWeight: 850,
                      textTransform: "none",
                      "&:hover": {
                        bgcolor: "transparent",
                        color: "#1C3A2F"
                      }
                    }}
                  >
                    Read case study
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

function Point({ label, value }: { label: string; value: string }) {
  return (
    <Box>
      <Typography
        sx={{
          mb: 0.35,
          fontSize: "0.68rem",
          fontWeight: 850,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "text.secondary"
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          fontSize: "0.86rem",
          lineHeight: 1.55,
          color: "text.secondary",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden"
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}