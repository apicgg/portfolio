import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from 'components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Anurag Pramanik - Homepage</title>
      </Head>
      <main className='bg-backgroundColor text-fontColor'>
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  )
}
