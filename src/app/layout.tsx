import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import { AnalyticsConsent } from "@/components/analytics-consent";
import { StructuredData } from "@/components/structured-data";
import { ThemeRegistry } from "@/components/theme-registry";
import { site } from "@/content/site";
import { absoluteUrl, seo } from "@/lib/seo";
import "./globals.css";

const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID;

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
  manifest: "/manifest.webmanifest",
  formatDetection: {
    telephone: false,
    address: false,
    email: false
  },
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? {
          other: {
            "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
          }
        }
      : {})
  },
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
      sizes: "512x512"
    },
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
    "@id": `${seo.siteUrl}/#organization`,
    name: site.name,
    url: seo.siteUrl,
    description: site.description,
    slogan: site.tagline,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/images/logo/mentallion-mark.png"),
      width: 1024,
      height: 1024
    },
    email: site.emails.hello,
    knowsAbout: [
      "Business process automation",
      "AI agent development",
      "Custom SaaS development",
      "AI integration",
      "Document intelligence",
      "Knowledge retrieval systems",
      "Retrieval augmented generation",
      "AI-powered search",
      "AI-powered chatbots",
      "AI-powered virtual assistants",
      "AI Voice assistants",
      "AI-powered customer support",
      "AI-powered content generation",
      "AI Automation",
      "AI-powered business process automation",
      "AI-powered workflow automation",
    ],
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
    "@id": `${seo.siteUrl}/#website`,
    name: site.name,
    url: seo.siteUrl,
    description: site.description,
    inLanguage: "en",
    publisher: {
      "@id": `${seo.siteUrl}/#organization`
    }
  };

  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <StructuredData
          id="site-structured-data"
          data={[organizationSchema, websiteSchema]}
        />
        <ThemeRegistry>
          {children}
          <AnalyticsConsent
            clarityProjectId={clarityProjectId}
            googleAnalyticsId={googleAnalyticsId}
          />
        </ThemeRegistry>
      </body>
    </html>
  );
}
