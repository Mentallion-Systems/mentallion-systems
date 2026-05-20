"use client";

import * as React from "react";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Card,
  CardContent,
  Chip,
  IconButton,
  Typography
} from "@mui/material";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type HomeCaseStudySlide = {
  slug: string;
  title: string;
  summary: string;
  metric: string;
  outcome: string;
  category: string;
  image: {
    src: string;
    position?: string;
  };
};

type HomeCaseStudiesSliderProps = {
  items: HomeCaseStudySlide[];
};

export function HomeCaseStudiesSlider({
  items
}: HomeCaseStudiesSliderProps) {
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
        aria-label="Previous case studies"
        onClick={() => swiper?.slidePrev()}
        disabled={isBeginning}
        sx={{
          ...navButtonSx,
          left: { xs: -8, sm: -18, md: -22 },
          opacity: isBeginning ? 0.42 : 1
        }}
      >
        <ArrowBackIcon fontSize="small" />
      </IconButton>

      <IconButton
        aria-label="Next case studies"
        onClick={() => swiper?.slideNext()}
        disabled={isEnd}
        sx={{
          ...navButtonSx,
          right: { xs: -8, sm: -18, md: -22 },
          opacity: isEnd ? 0.42 : 1
        }}
      >
        <ArrowForwardIcon fontSize="small" />
      </IconButton>

      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        onSwiper={(instance) => {
          setSwiper(instance);
          handleSlideState(instance);
        }}
        onSlideChange={handleSlideState}
        onResize={handleSlideState}
        breakpoints={{
          600: {
            slidesPerView: 1.15,
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
            <Card
              component={Link}
              href={`/case-studies/${item.slug}`}
              sx={{
                width: "100%",
                height: { xs: 396, md: 420 },
                minHeight: { xs: 396, md: 420 },
                maxHeight: { xs: 396, md: 420 },
                display: "flex",
                flexDirection: "column",
                borderRadius: 1,
                overflow: "hidden",
                textDecoration: "none",
                border: "1px solid rgba(20, 28, 25, 0.1)",
                bgcolor: "#FFFDF8",
                boxShadow: "0 16px 45px rgba(18, 24, 22, 0.08)",
                transition:
                  "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  borderColor: "primary.main",
                  boxShadow: "0 24px 70px rgba(18, 24, 22, 0.14)"
                }
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 124, md: 138 },
                  minHeight: { xs: 124, md: 138 },
                  maxHeight: { xs: 124, md: 138 },
                  flex: { xs: "0 0 124px", md: "0 0 138px" },
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
                    display: "block",
                    objectFit: "contain",
                    objectPosition: item.image.position
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.12) 44%, rgba(0,0,0,0.56) 100%)"
                  }}
                />

                <Chip
                  label={item.category}
                  size="small"
                  sx={{
                    position: "absolute",
                    left: 12,
                    bottom: 12,
                    height: 24,
                    maxWidth: "calc(100% - 24px)",
                    borderRadius: 999,
                    bgcolor: "rgba(255,253,249,0.94)",
                    color: "#101413",
                    fontSize: "0.62rem",
                    fontWeight: 850,
                    "& .MuiChip-label": {
                      px: 1,
                      overflow: "hidden",
                      textOverflow: "ellipsis"
                    }
                  }}
                />
              </Box>

              <CardContent
                sx={{
                  p: 2.35,
                  height: { xs: 272, md: 282 },
                  minHeight: { xs: 272, md: 282 },
                  maxHeight: { xs: 272, md: 282 },
                  flex: "1 1 auto",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden"
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: 1,
                    fontSize: { xs: "1.13rem", md: "1.22rem" },
                    lineHeight: 1.12,
                    letterSpacing: "-0.035em",
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
                  color="text.secondary"
                  sx={{
                    mb: 1.7,
                    fontSize: "0.81rem",
                    lineHeight: 1.5,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}
                >
                  {item.summary}
                </Typography>

                <Box
                  sx={{
                    mt: "auto",
                    p: 1.35,
                    height: { xs: 92, md: 96 },
                    minHeight: { xs: 92, md: 96 },
                    maxHeight: { xs: 92, md: 96 },
                    borderRadius: 1,
                    bgcolor: "rgba(28,58,47,0.045)",
                    border: "1px solid rgba(28,58,47,0.1)",
                    overflow: "hidden"
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "1.48rem",
                      lineHeight: 1.05,
                      color: "primary.main",
                      mb: 0.4,
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden"
                    }}
                  >
                    {item.metric}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{
                      fontSize: "0.75rem",
                      lineHeight: 1.35,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden"
                    }}
                  >
                    {item.outcome}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

const navButtonSx = {
  position: "absolute",
  top: "50%",
  zIndex: 3,
  transform: "translateY(-50%)",
  width: 42,
  height: 42,
  border: "1px solid rgba(16,20,19,0.1)",
  bgcolor: "rgba(255,253,248,0.94)",
  color: "#101413",
  boxShadow: "0 12px 32px rgba(16,20,19,0.08)",
  "&:hover": {
    bgcolor: "#FFFDF8"
  },
  "&.Mui-disabled": {
    opacity: 0.45
  }
} as const;
