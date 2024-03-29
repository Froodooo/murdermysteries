import { Inter } from 'next/font/google'
import styles from '@/styles/Styles.module.css'
import Link from 'next/link'
import { Header } from '@/components/header.js'
import { Description } from '@/components/description.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        <Description/>

        <div>
          <h1>Murder Mysteries</h1>
        </div>

        <div className={styles.grid}>
          <Link
            href="/csmurdermystery"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Computer Science Murder Mystery <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Solve this Computer Science-themed murder mystery!
            </p>
          </Link>
        </div>
      </main>
    </>
  )
}
