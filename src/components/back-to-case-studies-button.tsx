"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";

export function BackToCaseStudiesButton() {
  const router = useRouter();

  const handleClick = React.useCallback(() => {
    const cameFromCaseStudies = document.referrer.includes("/case-studies");

    if (cameFromCaseStudies && window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/case-studies");
  }, [router]);

  return (
    <Button
      onClick={handleClick}
      startIcon={<ArrowBackIcon />}
      sx={{
        color: "rgba(255,253,248,0.8)",
        textTransform: "none",
        px: 0,
        mb: 3,
        fontWeight: 700,
        "&:hover": {
          bgcolor: "transparent",
          color: "#FFFDF8"
        }
      }}
    >
      Back to case studies
    </Button>
  );
}
