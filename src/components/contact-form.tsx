"use client";

import * as React from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Box, Button, Grid, Stack, TextField, Typography, alpha } from "@mui/material";
import { site } from "@/content/site";

export function ContactForm() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    brief: ""
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Project inquiry from ${form.name || "Website visitor"}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nWhat we are trying to build or fix:\n${form.brief}`
    );

    window.location.href = `mailto:${site.emails.inquiries}?subject=${subject}&body=${body}`;
  };

  const fieldSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 1,
      bgcolor: "rgba(255,255,255,0.86)",
      alignItems: "flex-start"
    },
    "& .MuiOutlinedInput-input": {
      py: 3
    },
    "& .MuiOutlinedInput-inputMultiline": {
      py: 0
    }
  };

  return (
    <Box
      component="form"
      id="contact-form"
      onSubmit={onSubmit}
      sx={{ height: "100%" }}
    >
      <Stack spacing={3} sx={{ height: "100%" }}>
        <Box>
          <Typography
            variant="h4"
            sx={{
              mb: 1,
              fontWeight: 800,
              letterSpacing: "-0.04em"
            }}
          >
            Start the conversation
          </Typography>

          <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
            Share the rough version. We will help shape it into a clear technical plan.
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={0.9}>
              <Typography
                component="label"
                htmlFor="contact-name"
                sx={{ fontWeight: 700, lineHeight: 1.2 }}
              >
                Your name *
              </Typography>

              <TextField
                id="contact-name"
                placeholder="Who should we be talking to?"
                required
                fullWidth
                value={form.name}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    name: event.target.value
                  }))
                }
                sx={fieldSx}
              />
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={0.9}>
              <Typography
                component="label"
                htmlFor="contact-email"
                sx={{ fontWeight: 700, lineHeight: 1.2 }}
              >
                Email *
              </Typography>

              <TextField
                id="contact-email"
                type="email"
                placeholder="Where can we reach you?"
                required
                fullWidth
                value={form.email}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    email: event.target.value
                  }))
                }
                sx={fieldSx}
              />
            </Stack>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Stack spacing={0.9}>
              <Typography
                component="label"
                htmlFor="contact-brief"
                sx={{ fontWeight: 700, lineHeight: 1.2 }}
              >
                What are you trying to build or fix? *
              </Typography>

              <TextField
                id="contact-brief"
                placeholder="A rough description is fine. Tell us the problem, goal, timeline, or any current blockers."
                required
                fullWidth
                multiline
                minRows={7}
                value={form.brief}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    brief: event.target.value
                  }))
                }
                sx={{
                  ...fieldSx,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 1,
                    bgcolor: "rgba(255,255,255,0.86)",
                    alignItems: "flex-start",
                    p: 1.6
                  }
                }}
              />
            </Stack>
          </Grid>
        </Grid>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          alignItems={{ xs: "stretch", sm: "center" }}
          justifyContent="space-between"
          sx={{ pt: 0.5 }}
        >
          <Button
            type="submit"
            variant="contained"
            size="large"
            endIcon={<SendOutlinedIcon fontSize="small" />}
            sx={{
              borderRadius: 999,
              px: 3,
              py: 1.35,
              fontWeight: 800,
              alignSelf: { xs: "stretch", sm: "flex-start" },
              boxShadow: (theme) =>
                `0 18px 45px ${alpha(theme.palette.primary.main, 0.28)}`
            }}
          >
            Send message
          </Button>

          <Typography
            color="text.secondary"
            sx={{
              fontSize: "0.95rem",
              lineHeight: 1.6,
              textAlign: { xs: "left", sm: "right" }
            }}
          >
            We reply within a few hours. Usually faster.
          </Typography>
        </Stack>

        <Box
          sx={{
            mt: "auto",
            p: { xs: 2, md: 2.4 },
            borderRadius: 1.5,
            border: "1px solid rgba(28,58,47,0.1)",
            bgcolor: "rgba(28,58,47,0.05)"
          }}
        >
          <Typography
            sx={{
              mb: 1.1,
              fontSize: "0.78rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "text.secondary",
              fontWeight: 800
            }}
          >
            Helpful to include
          </Typography>

          <Grid container spacing={1.1}>
            {[
              "What the workflow or product is supposed to do",
              "What is blocked, manual, or unreliable right now",
              "Any timeline, budget range, or existing system context"
            ].map((item) => (
              <Grid key={item} size={{ xs: 12, sm: 4 }}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "8px minmax(0, 1fr)",
                    columnGap: 0.75,
                    alignItems: "start"
                  }}
                >
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      bgcolor: "primary.main",
                      flexShrink: 0,
                      mt: "0.46rem"
                    }}
                  />
                  <Typography
                    color="text.secondary"
                    sx={{ fontSize: "0.9rem", lineHeight: 1.55 }}
                  >
                    {item}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
}
