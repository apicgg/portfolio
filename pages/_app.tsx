import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import Layout from "components/Layout";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Anurag Pramanik - Homepage</title>
        <link rel="favicon icon" href="/my-logo.svg" />
      </Head>
      <main className={inter.className}>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </main>
    </>
  );
}
