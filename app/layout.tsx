import type { Metadata, Viewport } from "next";
import "@/styles/base.css";
import "@/styles/app.css";

/**
 * Absolute base for Open Graph/Twitter asset URLs.
 * Set NEXT_PUBLIC_SITE_URL for a custom domain; on Vercel the production
 * domain is used automatically.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://legal-stack-prompts.crypdoughboi.chatgpt.site");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "The Legal Stack Prompt Bank",
  description:
    "A practical AI prompt bank for corporate, finance, restructuring, real estate, and investment funds work.",
  openGraph: {
    title: "The Legal Stack Prompt Bank",
    description: "Practical transactional prompts for lawyers.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "The Legal Stack Transactional Prompt Bank",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Legal Stack Prompt Bank",
    description: "Practical transactional prompts for lawyers.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/legal-stack-logo.png",
    shortcut: "/legal-stack-logo.png",
    apple: "/legal-stack-logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
