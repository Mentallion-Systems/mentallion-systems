"use client";

import * as React from "react";
import { Box } from "@mui/material";

type SectionRevealProps = {
  children: React.ReactNode;
};

export function SectionReveal({ children }: SectionRevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <Box ref={ref} className={`section-reveal${visible ? " is-visible" : ""}`}>
      {children}
    </Box>
  );
}
