import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeRegistry } from "@/components/theme-registry";
import "./globals.css";

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
  metadataBase: new URL("https://mentallionsystems.com"),
  title: {
    default: "Mentallion Systems | AI systems that replace manual work",
    template: "%s | Mentallion Systems"
  },
  description:
    "Mentallion Systems builds AI automation systems and production-grade software for businesses that want real results, not demos.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    title: "Mentallion Systems",
    description:
      "Production-grade AI systems and software for teams that want less manual work and better outcomes.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
