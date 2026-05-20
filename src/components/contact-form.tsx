"use client";

import * as React from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import {
  Alert,
  Box,
  Button,
  Grid,
  Snackbar,
  Stack,
  TextField,
  Typography,
  alpha
} from "@mui/material";

type FormState = {
  name: string;
  email: string;
  brief: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;
type ToastState = {
  type: "success" | "error";
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  brief: ""
};

export function ContactForm() {
  const [form, setForm] = React.useState<FormState>(initialForm);
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [toast, setToast] = React.useState<ToastState | null>(null);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const validateForm = React.useCallback((values: FormState) => {
    const nextErrors: FormErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!values.brief.trim()) {
      nextErrors.brief = "Please tell us a little about the project.";
    }

    return nextErrors;
  }, []);

  const handleFieldChange =
    (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const nextValue = event.target.value;

      setForm((current) => ({
        ...current,
        [field]: nextValue
      }));

      setErrors((current) => {
        if (!current[field]) {
          return current;
        }

        const nextErrors = validateForm({
          ...form,
          [field]: nextValue
        });

        return {
          ...current,
          [field]: nextErrors[field]
        };
      });
    };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateForm(form);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setToast({
        type: "error",
        message: "Please complete the required fields before sending."
      });
      setSnackbarOpen(true);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setForm(initialForm);
      setToast({
        type: "success",
        message: "Thanks, we'll get back to you shortly."
      });
      setSnackbarOpen(true);
    } catch (error) {
      setToast({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your message."
      });
      setSnackbarOpen(true);
    } finally {
      setIsSubmitting(false);
    }
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
      noValidate
      sx={{
        height: "100%",
        scrollMarginTop: { xs: "96px", md: "120px" }
      }}
    >
      <Stack spacing={3} sx={{ height: "100%" }}>
        <Box>
          <Typography
            variant="h4"
            sx={{
              mb: 1
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
                disabled={isSubmitting}
                value={form.name}
                onChange={handleFieldChange("name")}
                error={Boolean(errors.name)}
                helperText={errors.name}
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
                disabled={isSubmitting}
                value={form.email}
                onChange={handleFieldChange("email")}
                error={Boolean(errors.email)}
                helperText={errors.email}
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
                disabled={isSubmitting}
                value={form.brief}
                onChange={handleFieldChange("brief")}
                error={Boolean(errors.brief)}
                helperText={errors.brief}
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
            disabled={isSubmitting}
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
            {isSubmitting ? "Sending..." : "Send message"}
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

          <Grid container spacing={0.3}>
            {[
              "What the workflow or product is supposed to do",
              "What is blocked, manual, or unreliable right now",
              "Any timeline, budget range, or existing system context"
            ].map((item) => (
              <Grid key={item} size={{ xs: 12, sm: 4 }}>
                <Box
                  component="ul"
                  sx={{
                    m: 0,
                    pl: 2.1,
                    color: "primary.main"
                  }}
                >
                  <Box
                    component="li"
                    sx={{
                      pl: 0.1,
                      "&::marker": {
                        fontSize: "0.88rem"
                      }
                    }}
                  >
                    <Typography
                      component="span"
                      color="text.secondary"
                      sx={{ fontSize: "0.9rem", lineHeight: 1.55 }}
                    >
                      {item}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4500}
        onClose={(_, reason) => {
          if (reason === "clickaway") {
            return;
          }

          setSnackbarOpen(false);
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        ContentProps={{
          sx: {
            width: {
              xs: "calc(100vw - 32px)",
              sm: 420
            }
          }
        }}
        sx={{
          position: "fixed",
          top: {
            xs: "88px !important",
            md: "96px !important"
          },
          left: "50% !important",
          right: "auto !important",
          transform: "translateX(-50%)",
          zIndex: (theme) => theme.zIndex.snackbar
        }}
      >
        {toast ? (
          <Alert
            onClose={() => setSnackbarOpen(false)}
            severity={toast.type}
            variant="filled"
            sx={{
              width: "100%",
              borderRadius: 2,
              boxShadow: "0 18px 45px rgba(0,0,0,0.22)"
            }}
          >
            {toast.message}
          </Alert>
        ) : undefined}
      </Snackbar>
    </Box>
  );
}
