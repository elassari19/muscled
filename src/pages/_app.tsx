import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Footer, Header } from "components";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      {/* <Header /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
