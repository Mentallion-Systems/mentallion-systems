"use client";

import * as React from "react";

type CaseStudyMobileHeroFocusProps = {
  targetId: string;
};

export function CaseStudyMobileHeroFocus({
  targetId
}: CaseStudyMobileHeroFocusProps) {
  React.useEffect(() => {
    if (window.innerWidth >= 900) {
      return;
    }

    const scrollToTarget = () => {
      const target = document.getElementById(targetId);

      if (!target) {
        return;
      }

      const rect = target.getBoundingClientRect();
      const headerOffset = 86;
      const centeredTop =
        window.scrollY + rect.top - (window.innerHeight - rect.height) / 2 - headerOffset / 2;

      window.scrollTo({
        top: Math.max(0, centeredTop),
        behavior: "instant"
      });
    };

    const frameA = window.requestAnimationFrame(() => {
      const frameB = window.requestAnimationFrame(scrollToTarget);

      return () => window.cancelAnimationFrame(frameB);
    });

    return () => window.cancelAnimationFrame(frameA);
  }, [targetId]);

  return null;
}
