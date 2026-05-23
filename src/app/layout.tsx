import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { ThemeRegistry } from "@/components/theme-registry";
import { site } from "@/content/site";
import { absoluteUrl, seo } from "@/lib/seo";
import "./globals.css";

const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

const serif = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400"
});

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  applicationName: seo.siteName,
  title: {
    default: seo.defaultTitle,
    template: `%s | ${seo.siteName}`
  },
  description: seo.defaultDescription,
  keywords: [...seo.keywords],
  authors: [{ name: seo.siteName, url: seo.siteUrl }],
  creator: seo.siteName,
  publisher: seo.siteName,
  category: "technology",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    type: "website",
    url: seo.siteUrl,
    siteName: seo.siteName,
    locale: "en_US",
    images: [
      {
        url: absoluteUrl(site.ogImage),
        width: 1200,
        height: 630,
        alt: seo.siteName
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    images: [absoluteUrl(site.ogImage)]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: seo.siteUrl,
    logo: absoluteUrl("/images/logo/logo-v2.png"),
    email: site.emails.hello,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.emails.inquiry,
        availableLanguage: ["English"]
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: site.emails.support,
        availableLanguage: ["English"]
      }
    ],
    areaServed: ["US", "GB", "SA", "AE", "SG", "FR", "PT", "DE", "ID", "HU", "ZA", "OM", "QA"]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: seo.siteUrl,
    description: site.description
  };

  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <Script
          id="site-structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify([organizationSchema, websiteSchema])}
        </Script>
        {clarityProjectId ? (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${clarityProjectId}");`}
          </Script>
        ) : null}
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
