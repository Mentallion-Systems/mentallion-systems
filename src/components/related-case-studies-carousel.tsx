"use client";

import * as React from "react";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Button,
  IconButton,
  Typography
} from "@mui/material";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
  const [swiper, setSwiper] = React.useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(items.length <= 1);

  const handleSlideState = React.useCallback((instance: SwiperType) => {
    setIsBeginning(instance.isBeginning);
    setIsEnd(instance.isEnd);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        py: 1,
        "& .swiper": {
          overflow: "visible"
        },
        "& .swiper-slide": {
          height: "auto"
        }
      }}
    >
      <IconButton
        aria-label="Previous related case studies"
        onClick={() => swiper?.slidePrev()}
        disabled={isBeginning}
        sx={{
          ...sideControlSx,
          left: { xs: -8, sm: 10, md: -18, lg: -26 }
        }}
      >
        <ArrowBackIcon fontSize="small" />
      </IconButton>

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={(instance) => {
          setSwiper(instance);
          handleSlideState(instance);
        }}
        onSlideChange={handleSlideState}
        onResize={handleSlideState}
        breakpoints={{
          600: {
            slidesPerView: 1.05,
            spaceBetween: 18
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 24
          }
        }}
        style={{ padding: "4px 2px 16px" }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.slug}>
            <Box
              component={Link}
              href={`/case-studies/${item.slug}`}
              sx={{
                width: "100%",
                minHeight: 370,
                display: "flex",
                flexDirection: "column",
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
                    alignSelf: "flex-end",
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
          </SwiperSlide>
        ))}
      </Swiper>

      <IconButton
        aria-label="Next related case studies"
        onClick={() => swiper?.slideNext()}
        disabled={isEnd}
        sx={{
          ...sideControlSx,
          right: { xs: -8, sm: 10, md: -18, lg: -26 }
        }}
      >
        <ArrowForwardIcon fontSize="small" />
      </IconButton>
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
