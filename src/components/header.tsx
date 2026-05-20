"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CloseIcon from "@mui/icons-material/Close";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography
} from "@mui/material";
import { site } from "@/content/site";

export function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [solid, setSolid] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();

  React.useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setSolid(currentY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigateToContactSection = React.useCallback(() => {
    const scrollToContactSection = () => {
      const element = document.getElementById("contact-page-top");

      if (!element) {
        return;
      }

      const headerOffset = window.innerWidth < 900 ? 96 : 120;
      const y = element.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({
        top: Math.max(0, y),
        behavior: "smooth"
      });
    };

    setMobileOpen(false);

    window.setTimeout(() => {
      if (pathname === "/contact") {
        window.history.replaceState(null, "", "/contact#contact-page-top");
        scrollToContactSection();
        return;
      }

      router.push("/contact#contact-page-top");
    }, 180);
  }, [pathname, router]);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: solid ? "rgba(255,253,249,0.96)" : "rgba(255,253,249,0.72)",
          backdropFilter: "blur(14px)",
          borderBottom: solid
            ? "1px solid rgba(28,58,47,0.1)"
            : "1px solid rgba(28,58,47,0.06)",
          color: "text.primary",
          transition: "all 0.25s ease"
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 74, md: 82 } }}>
            <Stack
              component={Link}
              href="/"
              direction="row"
              spacing={1.4}
              alignItems="center"
              sx={{
                color: "inherit",
                flexGrow: 1,
                textDecoration: "none",
                minWidth: 0
              }}
            >
              <Box
                component="img"
                src="/images/logo/logo-v2.png"
                alt={`${site.name} logo`}
                sx={{
                  width: { xs: 42, md: 46 },
                  height: { xs: 42, md: 46 },
                  objectFit: "contain",
                  flexShrink: 0
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  color: "inherit",
                  lineHeight: 0.98,
                  whiteSpace: { xs: "normal", sm: "nowrap" },
                  fontSize: { xs: "1.15rem", sm: "1.4rem", md: "1.65rem" }
                }}
              >
                {site.name}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={3} alignItems="center" sx={{ display: { xs: "none", md: "flex" } }}>
              {site.nav.map((item) => (
                <Typography
                  key={item.href}
                  component={Link}
                  href={item.href}
                  sx={{
                    fontFamily: "var(--font-serif), serif",
                    color: "text.primary",
                    fontWeight: 400,
                    fontSize: "1.02rem",
                    letterSpacing: "-0.02em",
                    position: "relative",
                    pb: 0.5,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      height: 2,
                      borderRadius: 999,
                      bgcolor: "primary.main",
                      opacity: 0,
                      transform: "scaleX(0.5)",
                      transformOrigin: "center",
                      transition: "opacity 0.18s ease, transform 0.18s ease"
                    },
                    "&:hover::after": {
                      opacity: 1,
                      transform: "scaleX(1)"
                    }
                  }}
                >
                  {item.label}
                </Typography>
              ))}
              <Button
                component={Link}
                href="/contact#contact-page-top"
                variant="contained"
                endIcon={<ArrowOutwardIcon fontSize="small" />}
                sx={{
                  bgcolor: "primary.main",
                  color: "#fff !important",
                  "&:hover": {
                    bgcolor: "primary.dark"
                  },
                  "& .MuiButton-startIcon, & .MuiButton-endIcon, & .MuiSvgIcon-root": {
                    color: "#fff !important"
                  }
                }}
              >
                Start a project
              </Button>
            </Stack>
            <IconButton
              aria-label="Open navigation"
              onClick={() => setMobileOpen(true)}
              sx={{ display: { xs: "inline-flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{
          keepMounted: true,
          disableScrollLock: true,
          disableRestoreFocus: true
        }}
      >
        <Box sx={{ width: { xs: "min(86vw, 320px)", sm: 320 }, p: { xs: 2.5, sm: 3 } }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4.5, gap: 1.5 }}>
            <Stack
              component={Link}
              href="/"
              direction="row"
              spacing={1.2}
              alignItems="center"
              sx={{ color: "inherit", textDecoration: "none", minWidth: 0, flex: 1 }}
            >
              <Box
                component="img"
                src="/images/logo/logo-v2.png"
                alt={`${site.name} logo`}
                sx={{
                  width: 38,
                  height: 38,
                  objectFit: "contain",
                  flexShrink: 0
                }}
              />
              <Typography
                variant="h5"
                sx={{ fontSize: { xs: "1.15rem", sm: "1.35rem" }, lineHeight: 1 }}
              >
                {site.name}
              </Typography>
            </Stack>
            <IconButton aria-label="Close navigation" onClick={() => setMobileOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack spacing={2.5}>
            {site.nav.map((item) => (
              <Typography
                key={item.href}
                component={Link}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                variant="h6"
                sx={{ fontSize: "1.22rem" }}
              >
                {item.label}
              </Typography>
            ))}
            <Button
              type="button"
              variant="contained"
              endIcon={<ArrowOutwardIcon fontSize="small" />}
              onClick={navigateToContactSection}
              sx={{
                mt: 1,
                bgcolor: "primary.main",
                color: "#fff !important",
                "&:hover": {
                  bgcolor: "primary.dark"
                },
                "& .MuiButton-startIcon, & .MuiButton-endIcon, & .MuiSvgIcon-root": {
                  color: "#fff !important"
                }
              }}
            >
              Start a project
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
