import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
