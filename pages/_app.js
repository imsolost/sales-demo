import React from "react";
import Head from "next/head";
import GlobalStyles from "./styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>locofy-example</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <style
          dangerouslySetInnerHTML={{
            __html: `@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700&display=swap');
@font-face {
        font-family: "Helvetica";
        src: url("/public/Helvetica.ttf");
        font-weight: 400;
      }
@font-face {
        font-family: "Helvetica";
        src: url("/public/Helvetica-Bold.ttf");
        font-weight: 700;
      }
`,
          }}
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
