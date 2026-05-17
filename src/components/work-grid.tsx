"use client";

import * as React from "react";
import {
  Box,
  Chip,
  Stack,
  Typography
} from "@mui/material";
import { site, type CaseStudy, type CaseStudyFilterTag } from "@/content/site";

const filters = [
  { key: "all", label: "All" },
  { key: "ai", label: "AI / Agentic" },
  { key: "saas", label: "SaaS" },
  { key: "local", label: "Local business" },
  { key: "enterprise", label: "Enterprise" }
] as const;

type FilterKey = (typeof filters)[number]["key"];

const badgeStyles: Record<CaseStudy["category"], { label: string; bg: string; fg: string }> = {
  Automation: { label: "Automation", bg: "#ece7dc", fg: "#444441" },
  "AI Agents": { label: "AI / Agentic", bg: "#e6f1fb", fg: "#0c447c" },
  SaaS: { label: "SaaS", bg: "#eeedfe", fg: "#3c3489" },
  Healthcare: { label: "Healthcare", bg: "#faece7", fg: "#712b13" },
  Data: { label: "Data systems", bg: "#e1f5ee", fg: "#085041" }
};

export function WorkGrid() {
  const [activeFilter, setActiveFilter] = React.useState<FilterKey>("all");
  const [activeSlug, setActiveSlug] = React.useState<string | null>(null);

  const visibleItems =
    activeFilter === "all"
      ? site.caseStudies
      : site.caseStudies.filter((item) =>
          item.filterTags?.some((tag) => tag === (activeFilter as CaseStudyFilterTag))
        );

  React.useEffect(() => {
    if (activeSlug && !visibleItems.some((item) => item.slug === activeSlug)) {
      setActiveSlug(null);
    }
  }, [activeSlug, visibleItems]);

  return (
    <>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 5, mb: 3.5 }}>
        {filters.map((filter) => {
          const isActive = activeFilter === filter.key;

          return (
            <Chip
              key={filter.key}
              label={filter.label}
              onClick={() => setActiveFilter(filter.key)}
              sx={{
                px: 0.75,
                height: 34,
                borderRadius: 999,
                border: "1px solid",
                borderColor: isActive ? "text.primary" : "divider",
                bgcolor: isActive ? "text.primary" : "transparent",
                color: isActive ? "background.paper" : "text.secondary",
                fontWeight: 500
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
          gap: 2,
          alignItems: "start"
        }}
      >
        {visibleItems.map((item) => {
          const expanded = activeSlug === item.slug;
          const badge = badgeStyles[item.category];

          return (
            <Box
              key={item.slug}
              sx={{
                position: "relative",
                zIndex: expanded ? 20 : 1
              }}
            >
              <Box
                component="article"
                onMouseEnter={() => setActiveSlug(item.slug)}
                onMouseLeave={() => setActiveSlug((current) => (current === item.slug ? null : current))}
                onFocus={() => setActiveSlug(item.slug)}
                onBlur={() => setActiveSlug((current) => (current === item.slug ? null : current))}
                onClick={() => setActiveSlug(expanded ? null : item.slug)}
                tabIndex={0}
                sx={{
                  position: "relative",
                  width: "100%",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 2,
                  overflow: "hidden",
                  border: "1px solid",
                  borderColor: expanded ? "rgba(28,58,47,0.22)" : "divider",
                  bgcolor: "rgba(255,253,249,0.9)",
                  height: 470,
                  cursor: "pointer",
                  transition: "transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    borderColor: "rgba(28,58,47,0.22)",
                    boxShadow: "0 14px 30px rgba(26,26,26,0.06)"
                  }
                }}
              >
                <Box
                  sx={{
                    pt: 3,
                    px: 3,
                    pb: 2.1,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  {item.imageUrl ? (
                    <Box
                      component="img"
                      src={item.imageUrl}
                      alt={item.title}
                      sx={{
                        width: "100%",
                        height: 132,
                        objectFit: "cover",
                        display: "block",
                        borderRadius: 1.5,
                        mb: 2
                      }}
                    />
                  ) : null}
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
                    <Chip
                      label={badge.label}
                      sx={{
                        height: 28,
                        borderRadius: 1.5,
                        bgcolor: badge.bg,
                        color: badge.fg,
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase"
                      }}
                    />
                    <Typography sx={{ fontSize: "0.74rem", color: "text.secondary", flexShrink: 0 }}>
                      More details
                    </Typography>
                  </Stack>

                  <Box sx={{ mt: 2 }}>
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        lineHeight: 1.45,
                        minHeight: 24,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 0.5,
                        fontSize: "0.76rem",
                        color: "text.secondary",
                        minHeight: 20,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      }}
                    >
                      {item.client ?? item.summary}
                    </Typography>
                  </Box>

                  <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    flexWrap="wrap"
                    sx={{ mt: 2, minHeight: 26, alignItems: "flex-start" }}
                  >
                    <Chip
                      label={item.engagement}
                      variant="outlined"
                      sx={{
                        height: 26,
                        borderRadius: 1.5,
                        fontSize: "0.72rem",
                        color: "text.secondary",
                        bgcolor: "rgba(28,58,47,0.04)"
                      }}
                    />
                  </Stack>

                  <Box sx={{ my: 2.25, borderTop: "1px solid", borderColor: "divider" }} />

                  <Box>
                    <Typography
                      sx={{
                        mb: 0.45,
                        fontSize: "0.68rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "text.secondary"
                      }}
                    >
                      The problem
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        lineHeight: 1.55,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                      }}
                    >
                      {item.problem ?? item.summary}
                    </Typography>
                  </Box>

                  {!expanded && (
                    <Box
                      sx={{
                        mt: 2,
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(2, minmax(0, 1fr))" },
                        gap: 3,
                        maxWidth: 300,
                        minHeight: 60,
                        mx: "auto"
                      }}
                    >
                      {(item.metrics ?? [{ value: item.metric, label: "Key outcome" }]).slice(0, 2).map((metric) => (
                        <Box
                          key={`${item.slug}-${metric.label}`}
                          sx={{
                            p: 0.875,
                            minHeight: 60,
                            borderRadius: 1,
                            bgcolor: "rgba(28,58,47,0.045)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center"
                          }}
                        >
                          <Typography sx={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.15 }}>
                            {metric.value}
                          </Typography>
                          <Typography sx={{ mt: 0.2, fontSize: "0.62rem", color: "text.secondary", lineHeight: 1.25 }}>
                            {metric.label}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )}

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                    sx={{ mt: 2.5, pt: 2, borderTop: "1px solid", borderColor: "divider", flexWrap: "wrap" }}
                  >
                    <Stack direction="row" spacing={0.75} useFlexGap flexWrap="wrap">
                      {(item.tags ?? [item.category, item.engagement]).map((tag) => (
                        <Chip
                          key={`${item.slug}-${tag}`}
                          label={tag}
                          variant="outlined"
                          sx={{
                            height: 24,
                            borderRadius: 1.5,
                            fontSize: "0.7rem",
                            color: "text.secondary",
                            bgcolor: "rgba(28,58,47,0.035)"
                          }}
                        />
                      ))}
                    </Stack>
                    <Typography sx={{ fontSize: "0.8rem", color: "text.secondary" }}>
                      {item.timeline ?? "Production build"}
                    </Typography>
                  </Stack>
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    insetInline: 0,
                    bottom: 0,
                    top: 118,
                    p: 2.5,
                    borderTop: "1px solid",
                    borderColor: "rgba(28,58,47,0.12)",
                    bgcolor: "rgba(255,253,249,0.98)",
                    boxShadow: "0 -14px 28px rgba(26,26,26,0.06)",
                    transform: expanded ? "translateY(0%)" : "translateY(104%)",
                    opacity: expanded ? 1 : 0,
                    transition: "transform 0.34s ease, opacity 0.22s ease",
                    pointerEvents: expanded ? "auto" : "none",
                    borderTopLeftRadius: 2,
                    borderTopRightRadius: 2,
                    overflowY: "auto"
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 4,
                      borderRadius: 999,
                      bgcolor: "primary.main",
                      mx: "auto",
                      mb: 2
                    }}
                  />
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      gap: 2
                    }}
                  >
                    <DetailColumn title="Problem" body={item.problem ?? item.summary} />
                    <DetailColumn title="What we built" body={item.build ?? item.summary} />
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
}

function DetailColumn({ title, body }: { title: string; body: string }) {
  return (
    <Box>
      <DetailLabel>{title}</DetailLabel>
      <Typography sx={{ fontSize: "0.88rem", lineHeight: 1.7 }}>{body}</Typography>
    </Box>
  );
}

function DetailLabel({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      sx={{
        mb: 0.75,
        fontSize: "0.68rem",
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "text.secondary"
      }}
    >
      {children}
    </Typography>
  );
}
