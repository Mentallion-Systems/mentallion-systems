"use client";

import * as React from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { site } from "@/content/site";

export function ContactForm() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    brief: ""
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Project inquiry from ${form.name || "Website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nWhat we are trying to build or fix:\n${form.brief}`
    );

    window.location.href = `mailto:${site.emails.inquiries}?subject=${subject}&body=${body}`;
  };

  return (
    <Box component="form" id="contact-form" onSubmit={onSubmit}>
      <Stack spacing={2.5}>
        <TextField
          label="Your name"
          placeholder="Who should we be talking to?"
          required
          value={form.name}
          onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
        />
        <TextField
          label="Email"
          type="email"
          placeholder="Where can we reach you?"
          required
          value={form.email}
          onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
        />
        <TextField
          label="What are you trying to build or fix?"
          placeholder="A rough description is fine. We'll ask the right questions from there."
          required
          multiline
          minRows={6}
          value={form.brief}
          onChange={(event) => setForm((current) => ({ ...current, brief: event.target.value }))}
        />
        <Button type="submit" variant="contained" endIcon={<SendOutlinedIcon fontSize="small" />} sx={{ alignSelf: "flex-start" }}>
          Send it
        </Button>
        <Typography color="text.secondary">We reply within a few hours. Usually faster.</Typography>
      </Stack>
    </Box>
  );
}
