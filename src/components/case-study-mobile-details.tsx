"use client";

import * as React from "react";
import Link from "next/link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Stack, Typography } from "@mui/material";
import type { CaseStudyMetric } from "@/content/case-studies";

type CaseStudyMobileDetailsProps = {
  slug: string;
  metrics: CaseStudyMetric[];
  mainPoints: string[];
};

export function CaseStudyMobileDetails({
  slug,
  metrics,
  mainPoints
}: CaseStudyMobileDetailsProps) {
  const [open, setOpen] = React.useState(false);
  const [skipCloseAnimation, setSkipCloseAnimation] = React.useState(false);
  const accordionEventName = "case-study-mobile-accordion-open";

  React.useEffect(() => {
    const handleAccordionOpen = (event: Event) => {
      const customEvent = event as CustomEvent<string>;

      if (customEvent.detail !== slug) {
        setSkipCloseAnimation(true);
        setOpen(false);
      }
    };

    window.addEventListener(accordionEventName, handleAccordionOpen);
    return () => window.removeEventListener(accordionEventName, handleAccordionOpen);
  }, [slug]);

  React.useEffect(() => {
    if (!skipCloseAnimation) {
      return;
    }

    const timer = window.setTimeout(() => {
      setSkipCloseAnimation(false);
    }, 30);

    return () => window.clearTimeout(timer);
  }, [skipCloseAnimation]);

  const handleOpen = React.useCallback(
    () => {
      window.dispatchEvent(new CustomEvent(accordionEventName, { detail: slug }));
      setOpen(true);

      window.requestAnimationFrame(() => {
        const card = document.querySelector<HTMLElement>(
          `[data-case-study-card="${slug}"]`
        );

        if (!card) {
          return;
        }

        card.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    },
    [accordionEventName, slug]
  );

  const handleClose = React.useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Box sx={{ display: { xs: "block", md: "none" }, mb: 2 }}>
      {!open ? (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={1.5}
        >
          <Button
            component={Link}
            href={`/case-studies/${slug}`}
            scroll={false}
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 0,
              minWidth: "auto",
              color: "#101413",
              fontWeight: 850,
              textTransform: "none",
              letterSpacing: "-0.01em",
              "&:hover": {
                bgcolor: "transparent",
                color: "#1C3A2F"
              }
            }}
          >
            Read case study
          </Button>

          <Box
            component="button"
            type="button"
            onClick={handleOpen}
            sx={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
              bgcolor: "rgba(28,58,47,0.08)",
              color: "primary.main",
              flexShrink: 0,
              cursor: "pointer",
              border: 0,
              p: 0
            }}
          >
            <ExpandMoreIcon fontSize="small" sx={{ color: "primary.main" }} />
          </Box>
        </Stack>
      ) : null}

      <Box
        sx={{
          overflow: "hidden",
          maxHeight: open ? 460 : 0,
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-8px)",
          transition: skipCloseAnimation
            ? "none"
            : "max-height 420ms cubic-bezier(0.22, 1, 0.36, 1), opacity 220ms ease, transform 320ms ease",
          pointerEvents: open ? "auto" : "none"
        }}
      >
        <Box sx={{ pt: 1.4 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 1,
              mb: 1.6
            }}
          >
            {metrics.slice(0, 2).map((metric) => (
              <Box
                key={`${slug}-${metric.label}`}
                sx={{
                  border: "1px solid rgba(16,20,19,0.08)",
                  bgcolor: "rgba(28,58,47,0.035)",
                  borderRadius: "14px",
                  p: 1.2,
                  minHeight: 78,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  textAlign: "left"
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 850,
                    lineHeight: 1.1,
                    textAlign: "left",
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}
                >
                  {metric.value}
                </Typography>

                <Typography
                  sx={{
                    mt: 0.4,
                    color: "text.secondary",
                    fontSize: "0.69rem",
                    lineHeight: 1.28,
                    textAlign: "left",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}
                >
                  {metric.label}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            component="ul"
            sx={{
              mb: 1.2,
              pl: 2.1,
              display: "grid",
              gap: 0.5,
              color: "#1C3A2F",
              textAlign: "left"
            }}
          >
            {mainPoints.slice(0, 3).map((point) => (
              <Box
                component="li"
                key={point}
                sx={{
                  pl: 0.2,
                  "&::marker": {
                    fontSize: "0.9rem"
                  }
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.45,
                    fontSize: "0.82rem",
                    textAlign: "left",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    minWidth: 0
                  }}
                >
                  {point}
                </Typography>
              </Box>
            ))}
          </Box>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={1.5}
          >
            <Button
              component={Link}
              href={`/case-studies/${slug}`}
              scroll={false}
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 0,
                minWidth: "auto",
                color: "#101413",
                fontWeight: 850,
                textTransform: "none",
                letterSpacing: "-0.01em",
                "&:hover": {
                  bgcolor: "transparent",
                  color: "#1C3A2F"
                }
              }}
            >
              Read case study
            </Button>

            <Box
              component="button"
              type="button"
              onClick={handleClose}
              sx={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                bgcolor: "rgba(28,58,47,0.08)",
                color: "primary.main",
                cursor: "pointer",
                border: 0,
                p: 0
              }}
            >
              <ExpandMoreIcon
                fontSize="small"
                sx={{ transform: "rotate(180deg)", color: "primary.main" }}
              />
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
