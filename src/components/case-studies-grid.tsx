"use client";

import * as React from "react";
import Link from "next/link";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  site,
  type CaseStudy,
  type CaseStudyFilterTag
} from "@/content/site";

const filters = [
  { key: "all", label: "All" },
  { key: "ai", label: "AI / Agentic" },
  { key: "saas", label: "SaaS" },
  { key: "local", label: "Local business" },
  { key: "enterprise", label: "Enterprise" }
] as const;

type FilterKey = (typeof filters)[number]["key"];

type CaseStudyWithImageControls = CaseStudy & {
  thumbnailUrl?: string;
  thumbnailPosition?: string;
  imagePosition?: string;
};

/**
 * Fixed image section height for every card.
 * The image will always stay inside this exact gradient/badge area.
 */
const CARD_IMAGE_HEIGHT = {
  xs: 190,
  sm: 205,
  md: 215
};

const categoryStyles: Record<
  CaseStudy["category"],
  { label: string; bg: string; fg: string }
> = {
  Automation: {
    label: "Workflow Automation",
    bg: "#F0EADF",
    fg: "#40372D"
  },
  "AI Agents": {
    label: "AI Agents & Intelligent Automation",
    bg: "#E7F1FB",
    fg: "#0B4778"
  },
  SaaS: {
    label: "SaaS Platforms",
    bg: "#EFEEFF",
    fg: "#3C3489"
  },
  Healthcare: {
    label: "Healthcare Technology",
    bg: "#FAECE7",
    fg: "#712B13"
  },
  Data: {
    label: "Data & Knowledge Systems",
    bg: "#E3F5EE",
    fg: "#085041"
  }
};

/**
 * These are tighter, dashboard/workspace-style images.
 * They crop better inside the case-study card image area.
 */
const categoryCardImages: Record<CaseStudy["category"], string> = {
  "AI Agents":
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",
  Automation:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
  SaaS:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
  Healthcare:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
  Data:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
};

const categoryImagePositions: Record<CaseStudy["category"], string> = {
  "AI Agents": "center",
  Automation: "center",
  SaaS: "center top",
  Healthcare: "center",
  Data: "center"
};

function getCardImage(item: CaseStudyWithImageControls) {
  return item.thumbnailUrl ?? categoryCardImages[item.category] ?? item.imageUrl;
}

function getCardImagePosition(item: CaseStudyWithImageControls) {
  return (
    item.thumbnailPosition ??
    item.imagePosition ??
    categoryImagePositions[item.category] ??
    "center"
  );
}

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
          gap: { xs: 2.4, md: 3 },
          alignItems: "stretch"
        }}
      >
        {visibleItems.map((rawItem) => {
          const item = rawItem as CaseStudyWithImageControls;
          const badge = categoryStyles[item.category];

          const metrics =
            item.metrics && item.metrics.length > 0
              ? item.metrics
              : [{ value: item.metric, label: "Key outcome" }];

          const domainLabel = item.domain ?? badge.label;
          const imageSource = getCardImage(item);
          const imagePosition = getCardImagePosition(item);

          return (
            <Box
              key={item.slug}
              component="article"
              sx={{
                height: "100%",
                minHeight: { xs: 555, md: 585 },
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                borderRadius: "24px",
                border: "1px solid rgba(20, 28, 25, 0.1)",
                bgcolor: "#FFFDF8",
                boxShadow: "0 18px 50px rgba(18, 24, 22, 0.08)",
                transition:
                  "transform .25s ease, box-shadow .25s ease, border-color .25s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  borderColor: "rgba(28,58,47,0.22)",
                  boxShadow: "0 30px 80px rgba(18, 24, 22, 0.13)"
                }
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: CARD_IMAGE_HEIGHT,
                  minHeight: CARD_IMAGE_HEIGHT,
                  maxHeight: CARD_IMAGE_HEIGHT,
                  flex: "0 0 auto",
                  overflow: "hidden",
                  bgcolor: "rgba(28,58,47,0.06)",
                  borderTopLeftRadius: "24px",
                  borderTopRightRadius: "24px",
                  isolation: "isolate"
                }}
              >
                {imageSource ? (
                  <Box
                    component="img"
                    src={imageSource}
                    alt={item.title}
                    loading="lazy"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      zIndex: 1,
                      width: "100% !important",
                      height: "100% !important",
                      minWidth: "100%",
                      minHeight: "100%",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      display: "block",
                      objectFit: "cover",
                      objectPosition: imagePosition,
                      transform: "scale(1.01)"
                    }}
                  />
                ) : null}

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 2,
                    pointerEvents: "none",
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.08) 40%, rgba(0,0,0,0.55) 100%)"
                  }}
                />

                <Chip
                  label={domainLabel}
                  sx={{
                    position: "absolute",
                    zIndex: 3,
                    left: 16,
                    bottom: 14,
                    maxWidth: "calc(100% - 32px)",
                    height: 28,
                    borderRadius: 999,
                    bgcolor: "rgba(255,253,249,0.96)",
                    color: "#101413",
                    fontSize: "0.66rem",
                    fontWeight: 850,
                    letterSpacing: "-0.01em",
                    boxShadow: "0 10px 24px rgba(0,0,0,0.16)",
                    "& .MuiChip-label": {
                      px: 1.1,
                      overflow: "hidden",
                      textOverflow: "ellipsis"
                    }
                  }}
                />
              </Box>

              <Box
                sx={{
                  p: { xs: 2.1, sm: 2.3, md: 2.5 },
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  minHeight: 0
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontSize: { xs: "1.18rem", md: "1.28rem" },
                    lineHeight: 1.12,
                    fontWeight: 900,
                    letterSpacing: "-0.045em",
                    mb: 0.85,
                    color: "#101413",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.86rem",
                    lineHeight: 1.55,
                    mb: 1.65,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}
                >
                  {item.summary}
                </Typography>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: 1,
                    mb: 1.75
                  }}
                >
                  {metrics.slice(0, 2).map((metric) => (
                    <Box
                      key={`${item.slug}-${metric.label}`}
                      sx={{
                        p: 1.2,
                        borderRadius: "12px",
                        border: "1px solid rgba(28,58,47,0.1)",
                        bgcolor: "rgba(28,58,47,0.035)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center"
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.98rem",
                          fontWeight: 900,
                          lineHeight: 1.1,
                          color: "#101413"
                        }}
                      >
                        {metric.value}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 0.3,
                          fontSize: "0.66rem",
                          lineHeight: 1.25,
                          color: "text.secondary",
                          display: "-webkit-box",
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden"
                        }}
                      >
                        {metric.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Stack spacing={1} sx={{ mb: 1.85 }}>
                  <Point
                    value={item.challenge ?? item.problem ?? item.summary}
                  />
                  <Point value={item.solution ?? item.build ?? item.summary} />
                  <Point value={item.result ?? item.results ?? item.outcome} />
                </Stack>

                <Button
                  component={Link}
                  href={`/case-studies/${item.slug}`}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    mt: "auto",
                    alignSelf: "flex-start",
                    px: 0,
                    color: "#101413",
                    fontSize: "0.82rem",
                    fontWeight: 900,
                    textTransform: "none",
                    "& .MuiButton-endIcon": {
                      ml: 0.55
                    },
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
          );
        })}
      </Box>
    </Box>
  );
}

function Point({ value }: { value: string }) {
  return (
    <Stack direction="row" spacing={0.8} alignItems="flex-start">
      <Box
        sx={{
          width: 4,
          height: 4,
          mt: "0.48rem",
          borderRadius: "50%",
          bgcolor: "#1C3A2F",
          flexShrink: 0
        }}
      />

      <Typography
        sx={{
          fontSize: "0.76rem",
          lineHeight: 1.45,
          color: "text.secondary",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden"
        }}
      >
        {value}
      </Typography>
    </Stack>
  );
}
