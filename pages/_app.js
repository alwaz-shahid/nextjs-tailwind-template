import { DefaultSeo } from 'next-seo';
import '../src/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import SEO from '../next-seo.config';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
