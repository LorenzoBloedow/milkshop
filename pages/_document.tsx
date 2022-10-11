import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300;400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Peralta&display=swap" rel="stylesheet" />
        <meta name='theme-color' content='#bf6947' />
      </Head>
      <body className='w-full h-full bg-background relative'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}