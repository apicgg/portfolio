import Head from 'next/head';
import Hero from 'components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="author" content="Anurag Pramanik" />
        <meta name="description" content="Anurag Pramanik - Portfolio" />
      </Head>
      <Hero />
    </>
  );
}
