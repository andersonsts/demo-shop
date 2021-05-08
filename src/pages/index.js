import Head from 'next/head'

import Checkout from '../containers/Checkout'
import Header from '../components/Header'

import { MainContainer } from '../styles/Home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Checkout | Demo Shop</title>
      </Head>

      <Header />

      <MainContainer>
        <Checkout />
      </MainContainer>
    </>
  )
}
