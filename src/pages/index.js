import Head from 'next/head'

import Checkout from '@demo-shop/containers/Checkout'
import Header from '@demo-shop/components/Header'

import { MainContainer } from '@demo-shop/styles/pages/Home'

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
