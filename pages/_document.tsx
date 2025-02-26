import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  gtmTrackingIDParam = process.env.GTM_PREVIEW_TRACKING_ID
    ? process.env.GTM_PREVIEW_TRACKING_ID
    : process.env.GTM_TRACKING_ID;
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Cormorant:wght@700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
