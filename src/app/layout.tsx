import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="en">
      <body
        className={`${open_sans.className} break-words bg-orange-50 leading-6 text-zinc-900 transition-colors duration-500 dark:bg-zinc-900 dark:text-zinc-300`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
