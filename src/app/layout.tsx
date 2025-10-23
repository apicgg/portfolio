import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { NextThemesProviders } from "./themeProvider";

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
  authors: { name: "Anurag Pramanik", url: "https://www.anuragp.dev" },
  description: "Anurag's homepage",
  twitter: {
    title: "Anurag Pramanik",
    card: "summary_large_image",
    site: "@titas_p",
    creator: "@titas_p",
  },
  openGraph: {
    siteName: "Anurag Pramanik",
    title: "Anurag Pramanik",
    type: "website",
  },
  title: "Anurag Pramanik - Homepage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${mononokiLocal.className} break-words bg-orange-50 leading-6 text-zinc-900 transition-colors duration-500 dark:bg-zinc-900 dark:text-zinc-300`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
