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

    const revealIfInView = () => {
      const rect = node.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= viewportHeight * 0.92 && rect.bottom >= 0) {
        setVisible(true);
        return true;
      }

      return false;
    };

    if (revealIfInView()) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    observer.observe(node);

    const frame = window.requestAnimationFrame(() => {
      if (revealIfInView()) {
        observer.disconnect();
      }
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <Box ref={ref} className={`section-reveal${visible ? " is-visible" : ""}`}>
      {children}
    </Box>
  );
}
