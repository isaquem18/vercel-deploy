import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MyApp | Home</title>
      </Head>
      <h1>ola mundo</h1>
    </div>
  )
}


