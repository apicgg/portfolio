import Head from 'next/head'
import Hero from 'components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <meta name='author' content='Anurag Pramanik' />
        <meta
          name='description'
          content='This is a portfolio website of Anurag'
        />
        <link rel='favicon icon' href='/my-logo.svg' />
      </Head>
      <Hero />
    </>
  )
}
