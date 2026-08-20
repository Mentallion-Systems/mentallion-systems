"use client";

import * as React from "react";
import Script from "next/script";
import {
  Box,
  Button,
  ButtonBase,
  Paper,
  Stack,
  Typography
} from "@mui/material";

type Consent = "loading" | "pending" | "granted" | "denied";

type AnalyticsConsentProps = {
  clarityProjectId?: string;
  googleAnalyticsId?: string;
};

const consentCookieName = "mentallion_analytics_consent";
const openConsentEvent = "mentallion:open-analytics-preferences";
const consentChangedEvent = "mentallion:analytics-consent-changed";

export function AnalyticsConsent({
  clarityProjectId,
  googleAnalyticsId
}: AnalyticsConsentProps) {
  const measurementEnabled = Boolean(clarityProjectId || googleAnalyticsId);
  const consent = React.useSyncExternalStore(
    subscribeToConsent,
    readConsent,
    () => "loading"
  );

  if (!measurementEnabled) {
    return null;
  }

  const saveConsent = (nextConsent: "granted" | "denied") => {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${consentCookieName}=${nextConsent}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
    window.dispatchEvent(new Event(consentChangedEvent));
  };

  return (
    <>
      {consent === "granted" && clarityProjectId ? (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script",${JSON.stringify(
            clarityProjectId
          )});`}
        </Script>
      ) : null}

      {consent === "granted" && googleAnalyticsId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
              googleAnalyticsId
            )}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config",${JSON.stringify(
              googleAnalyticsId
            )},{anonymize_ip:true});`}
          </Script>
        </>
      ) : null}

      {consent === "pending" ? (
        <Paper
          role="dialog"
          aria-label="Analytics preferences"
          elevation={12}
          sx={{
            position: "fixed",
            zIndex: 1500,
            right: { xs: 16, md: 24 },
            bottom: { xs: 16, md: 24 },
            left: { xs: 16, md: "auto" },
            width: { md: 430 },
            maxWidth: "calc(100vw - 32px)",
            p: { xs: 2.25, md: 2.75 },
            borderRadius: 2,
            border: "1px solid",
            borderColor: "divider"
          }}
        >
          <Stack spacing={1.8}>
            <Box>
              <Typography variant="h5" sx={{ mb: 0.7 }}>
                Your privacy choices
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ fontSize: "0.92rem", lineHeight: 1.65 }}
              >
                We use optional analytics to understand which pages help visitors.
                Essential site functions and the contact form work without them.
              </Typography>
            </Box>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.2}>
              <Button
                variant="contained"
                onClick={() => saveConsent("granted")}
                sx={{ flex: 1 }}
              >
                Allow analytics
              </Button>
              <Button
                variant="outlined"
                onClick={() => saveConsent("denied")}
                sx={{ flex: 1 }}
              >
                Decline
              </Button>
            </Stack>
          </Stack>
        </Paper>
      ) : null}
    </>
  );
}

export function AnalyticsPreferencesButton() {
  return (
    <ButtonBase
      component="button"
      type="button"
      onClick={() => window.dispatchEvent(new Event(openConsentEvent))}
      sx={{
        color: "text.secondary",
        fontFamily: "var(--font-serif), serif",
        fontSize: "1.02rem",
        lineHeight: 1.1,
        textAlign: "left"
      }}
    >
      Analytics preferences
    </ButtonBase>
  );
}

function readConsent(): Consent {
  const cookie = document.cookie
    .split(";")
    .map((value) => value.trim())
    .find((value) => value.startsWith(`${consentCookieName}=`))
    ?.split("=")[1];

  return cookie === "granted" || cookie === "denied" ? cookie : "pending";
}

function subscribeToConsent(onStoreChange: () => void) {
  const openPreferences = () => {
    document.cookie = `${consentCookieName}=; Path=/; Max-Age=0; SameSite=Lax`;
    onStoreChange();
  };

  window.addEventListener(openConsentEvent, openPreferences);
  window.addEventListener(consentChangedEvent, onStoreChange);

  return () => {
    window.removeEventListener(openConsentEvent, openPreferences);
    window.removeEventListener(consentChangedEvent, onStoreChange);
  };
}
