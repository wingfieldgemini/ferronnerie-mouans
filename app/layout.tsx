import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { siteConfig } from "@/lib/siteConfig";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.shortDescription,
  applicationName: siteConfig.name,
  keywords: [
    "ferronnerie",
    "fer forgé",
    "Mouans-Sartoux",
    "Côte d'Azur",
    "portail",
    "garde-corps",
    "escalier métallique",
    "artisan ferronnier",
    "Alpes-Maritimes",
  ],
  authors: [{ name: siteConfig.legalName }],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.shortDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/assets/og-image.jpeg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.shortDescription,
  },
  alternates: { canonical: siteConfig.url },
  icons: { icon: "/assets/logo.png", apple: "/assets/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
      <body>
        <JsonLd />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
