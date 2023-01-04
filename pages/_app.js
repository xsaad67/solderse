import { MoralisProvider } from "react-moralis";
// import { useEffect } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css"

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  /** Scroll animation */
  // useEffect(() => {
  //   Aos.init({
  //     easing: "ease-out-cubic",
  //     once: true,
  //     offset: 50,
  //   });
  // }, []);
  // useEffect(() => {
  //   Aos.refresh()
  // }, [])
  /** Scroll animation ends  */
  return (
    <MoralisProvider initializeOnMount={false}>
      <Component {...pageProps} />
    </MoralisProvider >
  )
}

export default MyApp
