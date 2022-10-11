import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import Navbar from '../components/navbar/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name='keywords' content='milk shop, portfolio, project' />
        <meta charSet='utf-8' />
        <meta name='application-name' content='MilkShop' />
      </Head>

      <noscript>
        <h1 style={{ textAlign: "center" }}>
          You must <a style={{ textDecorationLine: "underline" }} href="https://www.enable-javascript.com/">enable</a> JavaScript to continue.
        </h1>
      </noscript>

      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
