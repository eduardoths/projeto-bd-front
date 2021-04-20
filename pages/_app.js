import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(Cookies.get('user'))
  return (
    <>
      <Head>
        <title>MyTrello - Grupo 4</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header user={user} setUser={setUser} />
      <Component {...pageProps} user={user} setUser={setUser}/>
      <Footer />
      <script></script>
    </>
  )
}

export default MyApp
