import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bibliothek Application</title>
      </Head>
      <main className={styles.main}>
        <h2 className={styles.welcomeTitle}>Welcome to the Bibliothek</h2>
        <h4>Options: </h4>
        <ul>
          <li>
            <Link href="/users">
              <a>Users</a>
            </Link>
          </li>
          <li>
            <Link href="/catalog">
              <a>Catalog</a>
            </Link>
          </li>
          <li>
            <Link href="/schools">
              <a>Schools</a>
            </Link>
          </li>
        </ul>
      </main>
      <footer>
        <Link href="/about">
          <a>About</a>
        </Link>
      </footer>
    </div>
  )
}
