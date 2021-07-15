import type { AppProps } from 'next/app';
import Link from 'next/link';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
