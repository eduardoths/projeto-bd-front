import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MyTrello - Grupo 4</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <script></script>
    </>
  )
}

export default MyApp
