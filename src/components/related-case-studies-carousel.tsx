"use client";

import * as React from "react";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";

type RelatedStudyItem = {
  slug: string;
  title: string;
  domain: string;
  image: {
    src: string;
    position?: string;
  };
};

type RelatedCaseStudiesCarouselProps = {
  items: RelatedStudyItem[];
};

export function RelatedCaseStudiesCarousel({
  items
}: RelatedCaseStudiesCarouselProps) {
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(items.length > 1);
  const [hasOverflow, setHasOverflow] = React.useState(items.length > 1);

  const updateScrollState = React.useCallback(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    setHasOverflow(maxScrollLeft > 8);
    setCanScrollLeft(track.scrollLeft > 8);
    setCanScrollRight(track.scrollLeft < maxScrollLeft - 8);
  }, []);

  React.useEffect(() => {
    updateScrollState();

    const track = trackRef.current;

    if (!track) {
      return;
    }

    const handleResize = () => updateScrollState();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [updateScrollState]);

  const scrollByAmount = React.useCallback((direction: 1 | -1) => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const amount = Math.max(track.clientWidth * 0.82, 280) * direction;

    track.scrollBy({
      left: amount,
      behavior: "smooth"
    });
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ position: "relative" }}>
        <IconButton
          aria-label="Scroll related case studies left"
          onClick={() => scrollByAmount(-1)}
          disabled={!hasOverflow || !canScrollLeft}
          sx={{
            ...sideControlSx,
            left: { xs: 6, sm: 10, md: -18, lg: -26 }
          }}
        >
          <ArrowBackIcon fontSize="small" />
        </IconButton>

        <Box
          ref={trackRef}
          onScroll={updateScrollState}
          onWheel={(event) => {
            const track = trackRef.current;

            if (!track) {
              return;
            }

            if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
              event.preventDefault();
              track.scrollBy({
                left: event.deltaY,
                behavior: "auto"
              });
            }
          }}
          sx={{
            display: "flex",
            gap: 2.4,
            overflowX: "auto",
            overflowY: "hidden",
            justifyContent: {
              xs: "flex-start",
              md: hasOverflow ? "flex-start" : "center"
            },
            scrollSnapType: "x proximity",
            scrollBehavior: "smooth",
            pb: 1,
            px: { xs: 6.5, sm: 7.5, md: hasOverflow ? 0.5 : 0 },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none"
            }
          }}
        >
          {items.map((item) => (
            <Box
              key={item.slug}
              component={Link}
              href={`/case-studies/${item.slug}`}
              sx={{
                width: { xs: "84vw", sm: 340, md: 360 },
                minWidth: { xs: "84vw", sm: 340, md: 360 },
                maxWidth: { xs: "84vw", sm: 340, md: 360 },
                minHeight: 370,
                display: "flex",
                flexDirection: "column",
                scrollSnapAlign: "start",
                textDecoration: "none",
                color: "inherit",
                bgcolor: "#FFFDF8",
                borderRadius: "22px",
                overflow: "hidden",
                border: "1px solid rgba(16,20,19,0.08)",
                boxShadow: "0 16px 48px rgba(16,20,19,0.06)",
                transition: "transform .25s ease, box-shadow .25s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 24px 70px rgba(16,20,19,0.1)"
                }
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 210, md: 185 },
                  minHeight: { xs: 210, md: 185 },
                  maxHeight: { xs: 210, md: 185 },
                  flex: { xs: "0 0 210px", md: "0 0 185px" },
                  overflow: "hidden",
                  bgcolor: "rgba(28,58,47,0.06)"
                }}
              >
                <Box
                  component="img"
                  src={item.image.src}
                  alt={item.title}
                  loading="lazy"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: item.image.position,
                    display: "block"
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.08) 45%, rgba(0,0,0,0.38) 100%)"
                  }}
                />
              </Box>

              <Box
                sx={{
                  p: 2.2,
                  flex: "1 1 auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  overflow: "hidden"
                }}
              >
                <Typography
                  sx={{
                    color: "#1C3A2F",
                    fontSize: "0.72rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 900,
                    mb: 0.75,
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}
                >
                  {item.domain}
                </Typography>

                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "1.18rem",
                    lineHeight: 1.2,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}
                >
                  {item.title}
                </Typography>

                <Button
                  component="span"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    mt: 1.1,
                    alignSelf: "flex-start",
                    px: 0,
                    minHeight: 0,
                    color: "#101413",
                    fontSize: "0.82rem",
                    fontWeight: 850,
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
          ))}
        </Box>

        <IconButton
          aria-label="Scroll related case studies right"
          onClick={() => scrollByAmount(1)}
          disabled={!hasOverflow || !canScrollRight}
          sx={{
            ...sideControlSx,
            right: { xs: 6, sm: 10, md: -18, lg: -26 }
          }}
        >
          <ArrowForwardIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}

const sideControlSx = {
  position: "absolute",
  top: "50%",
  zIndex: 2,
  transform: "translateY(-50%)",
  width: { xs: 42, md: 48 },
  height: { xs: 42, md: 48 },
  border: "1px solid rgba(16,20,19,0.1)",
  bgcolor: "rgba(255,253,248,0.92)",
  color: "#101413",
  boxShadow: "0 14px 40px rgba(16,20,19,0.12)",
  "&:hover": {
    bgcolor: "#FFFDF8"
  },
  "&.Mui-disabled": {
    opacity: 0.45
  }
} as const;
