"use client";

import * as React from "react";
import { Box } from "@mui/material";

type NavigatorWithConnection = Navigator & {
  connection?: {
    saveData?: boolean;
  };
};

export function HeroVideo() {
  const [shouldLoad, setShouldLoad] = React.useState(false);

  React.useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const desktopViewport = window.matchMedia("(min-width: 768px)").matches;
    const saveData = (navigator as NavigatorWithConnection).connection?.saveData;

    if (reducedMotion || !desktopViewport || saveData) {
      return;
    }

    const timer = window.setTimeout(() => setShouldLoad(true), 600);
    return () => window.clearTimeout(timer);
  }, []);

  if (!shouldLoad) {
    return null;
  }

  return (
    <Box
      component="video"
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      disablePictureInPicture
      aria-hidden="true"
      tabIndex={-1}
      sx={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }}
    >
      <source src="/videos/Gen AI Pg 5.mp4" type="video/mp4" />
    </Box>
  );
}
