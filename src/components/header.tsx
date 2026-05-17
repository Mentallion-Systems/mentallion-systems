"use client";

import * as React from "react";
import Link from "next/link";
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
  const lastY = React.useRef(0);

  React.useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const goingUp = currentY < lastY.current;

      setSolid(currentY > 12 && goingUp);
      if (currentY === 0) {
        setSolid(false);
      }

      lastY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: solid ? "rgba(255,253,249,0.95)" : "transparent",
          backdropFilter: solid ? "blur(12px)" : "none",
          borderBottom: solid ? "1px solid rgba(28,58,47,0.1)" : "1px solid transparent",
          color: "text.primary",
          transition: "all 0.25s ease"
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 82 }}>
            <Typography
              component={Link}
              href="/"
              variant="h4"
              sx={{ color: "inherit", flexGrow: 1 }}
            >
              {site.name}
            </Typography>
            <Stack direction="row" spacing={3} alignItems="center" sx={{ display: { xs: "none", md: "flex" } }}>
              {site.nav.map((item) => (
                <Typography
                  key={item.href}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: "text.primary",
                    fontWeight: 500,
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
                href="/contact#contact-form"
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
      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box sx={{ width: 300, p: 3 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 5 }}>
            <Typography variant="h5">{site.name}</Typography>
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
              >
                {item.label}
              </Typography>
            ))}
            <Button
              component={Link}
              href="/contact#contact-form"
              variant="contained"
              endIcon={<ArrowOutwardIcon fontSize="small" />}
              onClick={() => setMobileOpen(false)}
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
