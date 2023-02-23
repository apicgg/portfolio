import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
// import Header from 'components/Header'
// import Footer from 'components/Footer'
import { Analytics } from '@vercel/analytics/react';
import Layout from 'components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Anurag Pramanik - Homepage</title>
        <link rel="favicon icon" href="/my-logo.svg" />
      </Head>
      <Layout>
        {/* TODO: refactor the layout */}
        {/* <Header /> */}
        <Component {...pageProps} />
        <Analytics />
        {/* <Footer /> */}
      </Layout>
    </>
  );
}
