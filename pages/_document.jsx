// Default core packages
import { Html, Head, Main, NextScript } from "next/document";

/**
 * Load custom scripts in <Head>
 *
 * @returns <Html>
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/pfLogo.png"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
