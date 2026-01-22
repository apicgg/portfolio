import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";

const mononokiLocal = localFont({
  src: [
    {
      path: "./fonts/mononoki-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/mononoki-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/mononoki-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/mononoki-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    default: "Anurag Pramanik - Frontend Web & Mobile Developer",
    template: "%s | Anurag Pramanik",
  },
  description:
    "Frontend Web and Mobile Developer and Frontend Architect with 7+ years of experience building web applications and cross-platform iOS and Android apps. Expert in React, Next.js, React Native, Expo, and TypeScript.",
  authors: { name: "Anurag Pramanik", url: "https://www.anuragp.com" },
  keywords: [
    "Anurag Pramanik",
    "portfolio",
    "frontend developer",
    "web developer",
    "React Native developer",
    "mobile app developer",
    "iOS developer",
    "Android developer",
    "React Native expert",
    "Expo developer",
    "cross-platform developer",
    "Next.js developer",
    "frontend architect",
    "software engineer",
    "react",
    "next.js",
    "typescript",
    "mobile development",
  ],
  twitter: {
    title: "Anurag Pramanik - Frontend Web & Mobile Developer",
    card: "summary_large_image",
    site: "@anuragp_dev",
    creator: "@anuragp_dev",
    description:
      "Frontend Web and Mobile Developer building amazing web and mobile experiences",
  },
  openGraph: {
    siteName: "Anurag Pramanik",
    title: "Anurag Pramanik - Frontend Web & Mobile Developer",
    type: "website",
    description:
      "Frontend Web and Mobile Developer and Frontend Architect with 7+ years of experience",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${mononokiLocal.className} break-words bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 leading-6 text-zinc-900 transition-colors duration-500 dark:from-zinc-800 dark:via-zinc-700/40 dark:to-zinc-800 dark:text-zinc-100`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
