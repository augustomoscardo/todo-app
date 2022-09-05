import { ColorModeScript } from "@chakra-ui/react";
import Document, { Head, Html, Main, NextScript } from "next/document";

import { theme } from "../styles/theme";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&family=Poppins:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            href="/images/favicon-32x32.png"
            type="image/png"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        </body>
      </Html>
    );
  }
}
