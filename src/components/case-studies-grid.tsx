"use client";

import * as React from "react";
import { Box, Chip, Stack, Typography } from "@mui/material";
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

export function CaseStudiesGrid() {
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
              onClick={() => {
                setActiveFilter(filter.key);
                setActiveSlug(null);
              }}
              sx={{
                px: 0.75,
                height: 32,
                borderRadius: 999,
                border: "1px solid",
                borderColor: isActive ? "text.primary" : "divider",
                bgcolor: isActive ? "text.primary" : "transparent",
                color: isActive ? "background.paper" : "text.secondary",
                fontWeight: 500,
                transition: "all .2s ease",
                "&:hover": {
                  bgcolor: isActive ? "text.primary" : "rgba(28,58,47,0.05)"
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
            lg: "repeat(2, minmax(0, 1fr))"
          },
          gap: 2.25,
          alignItems: "start"
        }}
      >
        {visibleItems.map((item) => {
          const expanded = activeSlug === item.slug;
          const badge = badgeStyles[item.category];
          const metrics = item.metrics ?? [{ value: item.metric, label: "Key outcome" }];

          return (
            <Box
              key={item.slug}
              component="article"
              onClick={() => setActiveSlug(expanded ? null : item.slug)}
              onMouseEnter={() => setActiveSlug(item.slug)}
              onMouseLeave={() => setActiveSlug((cur) => (cur === item.slug ? null : cur))}
              onFocus={() => setActiveSlug(item.slug)}
              onBlur={() => setActiveSlug((cur) => (cur === item.slug ? null : cur))}
              tabIndex={0}
              sx={{
                position: "relative",
                height: {
                  xs: 540,
                  sm: 470,
                  md: 430
                },
                borderRadius: 1.5,
                overflow: "hidden",
                cursor: "pointer",
                border: "1px solid",
                borderColor: expanded ? "rgba(28,58,47,0.36)" : "rgba(28,58,47,0.1)",
                bgcolor: "rgba(255,253,249,0.9)",
                boxShadow: expanded
                  ? "0 26px 70px rgba(26,26,26,0.18)"
                  : "0 10px 30px rgba(26,26,26,0.07)",
                transform: expanded ? "translateY(-4px)" : "translateY(0)",
                transition: "transform .25s ease, border-color .25s ease, box-shadow .25s ease",
                outline: "none",
                "&:focus-visible": {
                  borderColor: "rgba(28,58,47,0.5)",
                  boxShadow: "0 0 0 3px rgba(28,58,47,0.12), 0 26px 70px rgba(26,26,26,0.18)"
                }
              }}
            >
              {item.imageUrl ? (
                <Box
                  component="img"
                  src={item.imageUrl}
                  alt={item.title}
                  sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: expanded ? "scale(1.06)" : "scale(1.01)",
                    filter: expanded ? "saturate(1.04) contrast(1.04)" : "saturate(0.96) contrast(0.98)",
                    transition: "transform .7s ease, filter .7s ease"
                  }}
                />
              ) : (
                <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(28,58,47,0.06)" }} />
              )}

              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: expanded
                    ? {
                        xs: "linear-gradient(to top, rgba(0,0,0,0.54), rgba(0,0,0,0.1))",
                        md: "linear-gradient(to right, rgba(0,0,0,0.46) 0%, rgba(0,0,0,0.18) 42%, rgba(255,253,249,0.3) 70%, rgba(255,253,249,0.42) 100%)"
                      }
                    : {
                        xs: "linear-gradient(to top, rgba(0,0,0,0.48), rgba(0,0,0,0.06))",
                        md: "linear-gradient(to right, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.08) 45%, rgba(255,253,249,0.58) 72%, rgba(255,253,249,0.9) 100%)"
                      },
                  transition: "background .3s ease"
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 1,
                  pointerEvents: "none",
                  opacity: expanded ? 1 : 0,
                  transition: "opacity .25s ease",
                  background:
                    "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.14) 44%, transparent 70%)"
                }}
              />

              <Box
                sx={{
                  position: "relative",
                  zIndex: 2,
                  height: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "stretch"
                }}
              >
                {/* Default compact right panel */}
                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      md: "48%"
                    },
                    ml: {
                      xs: 0,
                      md: "auto"
                    },
                    p: {
                      xs: 2,
                      sm: 2.5,
                      md: 3
                    },
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    overflow: "hidden",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    bgcolor: "rgba(255,253,249,0.64)",
                    borderLeft: {
                      xs: "none",
                      md: "1px solid rgba(255,255,255,0.52)"
                    },
                    opacity: expanded ? 0 : 1,
                    transform: expanded ? "translateX(-8px)" : "translateX(0)",
                    transition: "opacity .2s ease, transform .26s ease"
                  }}
                >
                  <Box>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
                      <Chip
                        label={badge.label}
                        sx={{
                          height: 22,
                          borderRadius: 1,
                          bgcolor: badge.bg,
                          color: badge.fg,
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          letterSpacing: "0.04em",
                          textTransform: "uppercase"
                        }}
                      />

                      <Typography
                        sx={{
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          color: "text.secondary",
                          flexShrink: 0
                        }}
                      >
                        View case study →
                      </Typography>
                    </Stack>

                    <Typography
                      sx={{
                        fontSize: {
                          xs: "1.15rem",
                          md: "1.18rem"
                        },
                        fontWeight: 750,
                        lineHeight: 1.22,
                        mb: 0.75,
                        color: "text.primary",
                        letterSpacing: "-0.02em"
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.76rem",
                        color: "text.secondary",
                        mb: 1.6,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      }}
                    >
                      {item.client ?? item.summary}
                    </Typography>

                    <Box sx={{ borderTop: "1px solid rgba(28,58,47,0.13)", mb: 1.5 }} />

                    <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0.85 }}>
                      {metrics.slice(0, 2).map((m) => (
                        <MetricBox key={`${item.slug}-${m.label}`} value={m.value} label={m.label} />
                      ))}
                    </Box>
                  </Box>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={1}
                    flexWrap="wrap"
                    sx={{
                      mt: 1.6,
                      pt: 1.2,
                      borderTop: "1px solid rgba(28,58,47,0.1)"
                    }}
                  >
                    <Stack direction="row" spacing={0.5} useFlexGap flexWrap="wrap">
                      {(item.tags ?? [item.category]).slice(0, 2).map((tag) => (
                        <SmallTag key={`${item.slug}-${tag}`} label={tag} />
                      ))}
                    </Stack>

                    <Typography sx={{ fontSize: "0.7rem", color: "text.secondary" }}>
                      {item.timeline ?? "Production build"}
                    </Typography>
                  </Stack>
                </Box>

                {/* Hover drawer */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: {
                      xs: "100%",
                      md: "48%"
                    },
                    p: {
                      xs: 2,
                      sm: 2.5,
                      md: 3
                    },
                    display: "grid",
                    gridTemplateRows: "auto minmax(0, 1fr) auto",
                    overflow: "hidden",
                    pointerEvents: expanded ? "auto" : "none",
                    transform: expanded ? "translateX(0)" : "translateX(104%)",
                    transition: "transform .36s cubic-bezier(0.22, 1, 0.36, 1)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    bgcolor: "rgba(255,253,249,0.86)",
                    borderLeft: {
                      xs: "none",
                      md: "1px solid rgba(255,255,255,0.65)"
                    },
                    boxShadow: {
                      xs: "none",
                      md: "-18px 0 42px rgba(26,26,26,0.14)"
                    }
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      left: {
                        xs: "50%",
                        md: 0
                      },
                      top: {
                        xs: 10,
                        md: 0
                      },
                      transform: {
                        xs: "translateX(-50%)",
                        md: "none"
                      },
                      width: {
                        xs: 42,
                        md: 3
                      },
                      height: {
                        xs: 3,
                        md: "100%"
                      },
                      borderRadius: 999,
                      bgcolor: "rgba(28,58,47,0.22)"
                    }}
                  />

                  {/* Fixed drawer header */}
                  <Box sx={{ position: "relative", zIndex: 2, minWidth: 0 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1} sx={{ mb: 1.4 }}>
                      <Chip
                        label={badge.label}
                        sx={{
                          height: 22,
                          borderRadius: 1,
                          bgcolor: badge.bg,
                          color: badge.fg,
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          letterSpacing: "0.04em",
                          textTransform: "uppercase"
                        }}
                      />

                      <Typography
                        sx={{
                          fontSize: "0.72rem",
                          fontWeight: 750,
                          color: "text.primary",
                          flexShrink: 0
                        }}
                      >
                        Open case study ↗
                      </Typography>
                    </Stack>

                    <Typography
                      sx={{
                        fontSize: {
                          xs: "1.14rem",
                          md: "1.18rem"
                        },
                        fontWeight: 750,
                        lineHeight: 1.2,
                        mb: 0.85,
                        color: "text.primary",
                        letterSpacing: "-0.025em"
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.74rem",
                        color: "text.secondary",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      }}
                    >
                      {item.client ?? item.summary}
                    </Typography>
                  </Box>

                  {/* Scrollable drawer middle */}
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 2,
                      minHeight: 0,
                      overflowY: "auto",
                      pr: 0.75,
                      mt: 1.25,
                      pt: 1.25,
                      mb: 1.25,
                      borderTop: "1px solid rgba(28,58,47,0.13)",
                      borderBottom: "1px solid rgba(28,58,47,0.1)",

                      "&::-webkit-scrollbar": {
                        width: 4
                      },
                      "&::-webkit-scrollbar-track": {
                        background: "transparent"
                      },
                      "&::-webkit-scrollbar-thumb": {
                        background: "rgba(28,58,47,0.22)",
                        borderRadius: 999
                      },
                      "&::-webkit-scrollbar-thumb:hover": {
                        background: "rgba(28,58,47,0.34)"
                      },
                      scrollbarWidth: "thin",
                      scrollbarColor: "rgba(28,58,47,0.22) transparent"
                    }}
                  >
                    <DetailBlock label="The problem" body={item.problem ?? item.summary} />
                    <DetailBlock label="What we built" body={item.build ?? item.summary} />

                    {"solution" in item && typeof item.solution === "string" && item.solution ? (
                      <DetailBlock label="Solution" body={item.solution} />
                    ) : null}

                    {"result" in item && typeof item.result === "string" && item.result ? (
                      <DetailBlock label="Result" body={item.result} />
                    ) : null}

                    {"outcome" in item && typeof item.outcome === "string" && item.outcome ? (
                      <DetailBlock label="Outcome" body={item.outcome} />
                    ) : null}
                  </Box>

                  {/* Fixed drawer bottom */}
                  <Box sx={{ position: "relative", zIndex: 2, minWidth: 0 }}>
                    <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0.75, mb: 1.15 }}>
                      {metrics.slice(0, 2).map((m) => (
                        <MetricBox key={`drawer-${item.slug}-${m.label}`} value={m.value} label={m.label} compact />
                      ))}
                    </Box>

                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                      <Stack direction="row" spacing={0.5} useFlexGap flexWrap="wrap">
                        {(item.tags ?? [item.category]).slice(0, 2).map((tag) => (
                          <SmallTag key={`drawer-tag-${item.slug}-${tag}`} label={tag} />
                        ))}
                      </Stack>

                      <Typography sx={{ fontSize: "0.68rem", color: "text.secondary", flexShrink: 0 }}>
                        {item.timeline ?? "Build"}
                      </Typography>
                    </Stack>
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

function DetailBlock({ label, body }: { label: string; body: string }) {
  return (
    <Box sx={{ mb: 1.25 }}>
      <DetailLabel>{label}</DetailLabel>

      <Typography
        sx={{
          fontSize: "0.78rem",
          lineHeight: 1.58,
          color: "text.secondary"
        }}
      >
        {body}
      </Typography>
    </Box>
  );
}

function DetailLabel({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      sx={{
        mb: 0.42,
        fontSize: "0.62rem",
        fontWeight: 750,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "text.secondary"
      }}
    >
      {children}
    </Typography>
  );
}

function MetricBox({
  value,
  label,
  compact = false
}: {
  value: string;
  label: string;
  compact?: boolean;
}) {
  return (
    <Box
      sx={{
        bgcolor: compact ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.58)",
        border: "1px solid rgba(28,58,47,0.08)",
        borderRadius: 1.15,
        p: compact ? 0.85 : 1,
        textAlign: "center"
      }}
    >
      <Typography
        sx={{
          fontSize: compact ? "0.84rem" : "0.98rem",
          fontWeight: 750,
          lineHeight: 1.15
        }}
      >
        {value}
      </Typography>

      <Typography sx={{ fontSize: "0.58rem", color: "text.secondary", mt: 0.25 }}>
        {label}
      </Typography>
    </Box>
  );
}

function SmallTag({ label }: { label: string }) {
  return (
    <Chip
      label={label}
      variant="outlined"
      sx={{
        height: 20,
        borderRadius: 1,
        fontSize: "0.65rem",
        color: "text.secondary",
        bgcolor: "rgba(255,255,255,0.52)",
        borderColor: "rgba(28,58,47,0.16)"
      }}
    />
  );
}