import React from "react";
import Head from "next/head";
import GlobalStyles from "./styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>sales-demo</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
