import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/content/site";

export const runtime = "nodejs";

type ContactRequest = {
  name?: string;
  email?: string;
  brief?: string;
  website?: string;
  startedAt?: number;
  attribution?: {
    landingPage?: string;
    referrer?: string;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    requestedService?: string;
  };
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

declare global {
  // This provides a best-effort limit across requests handled by the same
  // process. The production platform should also enforce an edge/WAF limit.
  var mentallionContactRateLimits: Map<string, RateLimitEntry> | undefined;
}

const resendApiKey = process.env.RESEND_API_KEY;
const inquiryEmail = process.env.CONTACT_INQUIRY_EMAIL || site.emails.inquiry;
const fromEmail =
  process.env.CONTACT_FROM_EMAIL ||
  "Mentallion Systems <hello@mentallionsystems.com>";
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxRequestBytes = 20_000;
const rateLimitMax = readBoundedInteger(
  process.env.CONTACT_RATE_LIMIT_MAX,
  5,
  1,
  100
);
const rateLimitWindowMs = readBoundedInteger(
  process.env.CONTACT_RATE_LIMIT_WINDOW_MS,
  15 * 60 * 1000,
  60_000,
  24 * 60 * 60 * 1000
);
const rateLimits =
  globalThis.mentallionContactRateLimits ??
  (globalThis.mentallionContactRateLimits = new Map());

export async function POST(request: Request) {
  if (!isTrustedRequest(request)) {
    return jsonResponse(
      { error: "This request could not be verified." },
      { status: 403 }
    );
  }

  const contentType = request.headers.get("content-type")?.toLowerCase() || "";

  if (!contentType.startsWith("application/json")) {
    return jsonResponse(
      { error: "Content-Type must be application/json." },
      { status: 415 }
    );
  }

  const contentLength = Number(request.headers.get("content-length") || "0");

  if (
    !Number.isFinite(contentLength) ||
    contentLength < 0 ||
    contentLength > maxRequestBytes
  ) {
    return jsonResponse(
      { error: "The request is too large." },
      { status: 413 }
    );
  }

  const rateLimit = consumeRateLimit(getClientKey(request));

  if (!rateLimit.allowed) {
    return jsonResponse(
      { error: "Too many messages were sent. Please wait and try again." },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateLimit.retryAfterSeconds)
        }
      }
    );
  }

  let body: ContactRequest;

  try {
    const parsedBody: unknown = await request.json();

    if (!parsedBody || typeof parsedBody !== "object" || Array.isArray(parsedBody)) {
      throw new Error("Invalid request body");
    }

    body = parsedBody as ContactRequest;
  } catch {
    return jsonResponse(
      { error: "The request body is not valid JSON." },
      { status: 400 }
    );
  }

  if (body.website?.trim()) {
    return jsonResponse({ ok: true });
  }

  if (
    typeof body.startedAt !== "number" ||
    body.startedAt > Date.now() ||
    Date.now() - body.startedAt < 1_500
  ) {
    return jsonResponse({ ok: true });
  }

  const name = body.name?.trim() || "";
  const email = body.email?.trim().toLowerCase() || "";
  const brief = body.brief?.trim() || "";

  if (!name || !email || !brief) {
    return jsonResponse(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  if (!emailPattern.test(email)) {
    return jsonResponse(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (
    name.length < 2 ||
    brief.length < 20 ||
    name.length > 120 ||
    email.length > 254 ||
    brief.length > 10_000
  ) {
    return jsonResponse(
      { error: "One or more fields have an invalid length." },
      { status: 400 }
    );
  }

  if (!resend) {
    return jsonResponse(
      {
        error:
          "The contact form is temporarily unavailable. Please email us directly."
      },
      { status: 503 }
    );
  }

  const attribution = {
    landingPage: cleanAttributionValue(body.attribution?.landingPage),
    referrer: cleanAttributionValue(body.attribution?.referrer),
    utmSource: cleanAttributionValue(body.attribution?.utmSource),
    utmMedium: cleanAttributionValue(body.attribution?.utmMedium),
    utmCampaign: cleanAttributionValue(body.attribution?.utmCampaign),
    requestedService: cleanAttributionValue(
      body.attribution?.requestedService
    )
  };
  const attributionLines = [
    ["Landing page", attribution.landingPage],
    ["Referrer", attribution.referrer],
    ["UTM source", attribution.utmSource],
    ["UTM medium", attribution.utmMedium],
    ["UTM campaign", attribution.utmCampaign],
    ["Requested service", attribution.requestedService]
  ].filter(([, value]) => value);

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: inquiryEmail,
      replyTo: email,
      subject: `New Contact Form Inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        brief,
        ...(attributionLines.length
          ? [
              "",
              "Attribution:",
              ...attributionLines.map(([label, value]) => `${label}: ${value}`)
            ]
          : [])
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2 style="margin: 0 0 16px;">New Contact Form Inquiry</h2>
          <p style="margin: 0 0 8px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin: 0 0 16px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p style="margin: 0 0 8px;"><strong>Message:</strong></p>
          <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(brief)}</p>
          ${
            attributionLines.length
              ? `
                <hr style="margin: 24px 0; border: 0; border-top: 1px solid #e5e7eb;" />
                <p style="margin: 0 0 8px;"><strong>Attribution</strong></p>
                ${attributionLines
                  .map(
                    ([label, value]) =>
                      `<p style="margin: 0 0 6px;"><strong>${escapeHtml(
                        label
                      )}:</strong> ${escapeHtml(value)}</p>`
                  )
                  .join("")}
              `
              : ""
          }
        </div>
      `
    });

    if (error || !data?.id) {
      console.error("Contact email delivery failed", {
        name: error?.name || "missing_response",
        statusCode: error?.statusCode ?? null
      });

      return jsonResponse(
        {
          error:
            "We could not send your message. Please email us directly and try again later."
        },
        { status: 502 }
      );
    }

    return jsonResponse({ ok: true });
  } catch (error) {
    console.error("Contact email delivery threw an exception", {
      name: error instanceof Error ? error.name : "unknown_error"
    });

    return jsonResponse(
      {
        error:
          "We could not send your message. Please email us directly and try again later."
      },
      { status: 502 }
    );
  }
}

function jsonResponse(
  body: { ok?: boolean; error?: string },
  init: { status?: number; headers?: Record<string, string> } = {}
) {
  return NextResponse.json(body, {
    status: init.status ?? 200,
    headers: {
      "Cache-Control": "no-store",
      ...init.headers
    }
  });
}

function isTrustedRequest(request: Request) {
  const origin = request.headers.get("origin");

  if (!origin) {
    return false;
  }

  const fetchSite = request.headers.get("sec-fetch-site");

  if (fetchSite && fetchSite !== "same-origin" && fetchSite !== "same-site") {
    return false;
  }

  try {
    const allowedOrigins = new Set([
      new URL(site.url).origin,
      new URL(request.url).origin
    ]);

    return allowedOrigins.has(new URL(origin).origin);
  } catch {
    return false;
  }
}

function getClientKey(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0];

  return (
    request.headers.get("cf-connecting-ip")?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    forwardedFor?.trim() ||
    "unknown"
  );
}

function consumeRateLimit(clientKey: string) {
  const now = Date.now();

  if (rateLimits.size > 1_000) {
    for (const [key, entry] of rateLimits) {
      if (entry.resetAt <= now) {
        rateLimits.delete(key);
      }
    }
  }

  const current = rateLimits.get(clientKey);

  if (!current || current.resetAt <= now) {
    rateLimits.set(clientKey, {
      count: 1,
      resetAt: now + rateLimitWindowMs
    });

    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (current.count >= rateLimitMax) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt - now) / 1_000))
    };
  }

  current.count += 1;
  rateLimits.set(clientKey, current);

  return { allowed: true, retryAfterSeconds: 0 };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function cleanAttributionValue(value?: string) {
  return value?.trim().slice(0, 500) || "";
}

function readBoundedInteger(
  value: string | undefined,
  fallback: number,
  minimum: number,
  maximum: number
) {
  const parsedValue = Number(value);

  if (!Number.isInteger(parsedValue)) {
    return fallback;
  }

  return Math.min(maximum, Math.max(minimum, parsedValue));
}
