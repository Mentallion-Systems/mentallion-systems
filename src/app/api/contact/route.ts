import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/content/site";

const resendApiKey = process.env.RESEND_API_KEY;
const inquiryEmail = process.env.CONTACT_INQUIRY_EMAIL || site.emails.inquiry;
const fromEmail =
  process.env.CONTACT_FROM_EMAIL || "Mentallion Systems <hello@mentallionsystems.com>";

const resend = resendApiKey ? new Resend(resendApiKey) : null;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  if (!resend) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      brief?: string;
    };

    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const brief = body.brief?.trim() || "";

    if (!name || !email || !brief) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: fromEmail,
      to: inquiryEmail,
      replyTo: email,
      subject: `New Contact Form Inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        brief
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2 style="margin: 0 0 16px;">New Contact Form Inquiry</h2>
          <p style="margin: 0 0 8px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin: 0 0 16px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p style="margin: 0 0 8px;"><strong>Message:</strong></p>
          <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(brief)}</p>
        </div>
      `
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong while sending your message." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
