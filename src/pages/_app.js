import { GlobalStyles } from '@demo-shop/styles/globals'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'react-credit-cards/es/styles-compiled.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
