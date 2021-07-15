import type { AppProps } from 'next/app';
import Link from 'next/link';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <Link href="/">Home</Link> &nbsp;&nbsp;&nbsp;
        <Link href="/sobre">sobre</Link> &nbsp;&nbsp;&nbsp;
        <Link href="/produtos">produtos</Link> &nbsp;&nbsp;&nbsp;
      </header>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
