# Search and AI visibility launch checklist

The on-site implementation is ready, but indexing, measurement, and off-site
authority require production accounts and verified business profiles.

## Production environment

Set these variables in the deployment environment:

```text
NEXT_PUBLIC_SITE_URL=https://mentallionsystems.com
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
NEXT_PUBLIC_BING_SITE_VERIFICATION=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_CLARITY_PROJECT_ID=
INDEXNOW_KEY=
RESEND_API_KEY=
CONTACT_INQUIRY_EMAIL=inquiry@mentallionsystems.com
CONTACT_FROM_EMAIL=Mentallion Systems <hello@mentallionsystems.com>
CONTACT_RATE_LIMIT_MAX=5
CONTACT_RATE_LIMIT_WINDOW_MS=900000
```

Use Node.js 20.9 or newer. Before deploying, run:

```bash
npm ci
npm run lint
npm run typecheck
npm run build
```

Verify the sending domain in Resend before enabling the contact form. The route
has same-origin validation, body limits, a honeypot, submission timing checks,
and a best-effort per-process rate limit. Also configure a platform/WAF rate
limit for `POST /api/contact` because serverless instances do not share memory.
Start with five requests per 15 minutes per IP and adjust only after reviewing
real traffic.

Google Analytics and Microsoft Clarity load only after the visitor allows
optional analytics. Test both Allow and Decline paths after setting either
measurement ID.

`INDEXNOW_KEY` is a public protocol key, not an application secret. After the
deployment is live and the key endpoint returns successfully, submit the
sitemap URLs with:

```bash
npm run seo:indexnow
```

## Search platform setup

1. Verify the canonical HTTPS property in Google Search Console.
2. Submit `https://mentallionsystems.com/sitemap.xml`.
3. Verify the site in Bing Webmaster Tools and submit the same sitemap.
4. Run URL inspection on the home page, the services hub, each of the four
   service pages, and two representative case studies.
5. Test the deployed structured data in Google's Rich Results Test and
   Schema.org Validator.
6. Confirm that CDN or firewall settings do not override `robots.txt` or block
   Googlebot, Bingbot, OAI-SearchBot, Claude-SearchBot, or PerplexityBot.
7. Confirm `http://mentallionsystems.com` and
   `https://www.mentallionsystems.com` redirect to the canonical
   `https://mentallionsystems.com` host.

## Production smoke test

After deployment, verify:

- `/`, `/services`, all four service pages, `/case-studies`, one case study,
  `/contact`, `/privacy`, and `/terms` return HTTP 200.
- `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/manifest.webmanifest`, the
  Open Graph image, logo, favicon, and Apple touch icon load successfully.
- A real contact form submission reaches the configured inbox and the browser
  reports an error when delivery is intentionally misconfigured.
- Repeated contact requests receive HTTP 429 and cross-origin POST requests
  receive HTTP 403.
- Production response headers include CSP, HSTS, nosniff, frame protection,
  referrer policy, and permissions policy.
- Mobile and reduced-motion visitors receive the static hero background instead
  of downloading the decorative 5.4 MB video.

## Entity and authority work

- Create or complete genuine company profiles on LinkedIn and relevant software
  directories. Add their final URLs to the Organization `sameAs` field only
  after the profiles are live and controlled by Mentallion Systems.
- Keep the company name, domain, description, logo, service categories, and
  contact details consistent across profiles.
- Ask clients for permission before naming them, publishing a testimonial, or
  exposing confidential project details.
- Pursue links and mentions from partners, client announcements, podcasts,
  industry publications, and technical communities. Do not purchase bulk links
  or create location pages for places where the company has no real presence.

## Content cadence

- Publish a case study when a project has a defensible problem, implementation,
  and outcome. First-hand project evidence is more valuable than generic
  high-volume articles.
- Update service FAQs when sales calls reveal a recurring decision question.
- Review claims, model names, screenshots, and case-study metrics every quarter.
- Update sitemap `lastModified` values only when page content changes
  significantly.

## Measurement

Review monthly:

- Qualified contact-form submissions by landing page and service
- Non-brand impressions, clicks, click-through rate, and average position
- Indexed versus submitted URLs and crawl errors
- ChatGPT, Perplexity, Gemini, Copilot, and other AI referral sessions
- Bing Webmaster Tools AI citations and cited-page coverage
- Service-page engagement and assisted conversions

Traffic is useful only when it improves qualified conversations. Use lead
quality and pipeline contribution as the primary success measures.
