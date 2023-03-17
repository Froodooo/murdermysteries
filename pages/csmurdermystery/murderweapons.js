import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from '@/styles/Styles.module.css'
import { Header } from '@/components/header.js'
import { Description } from '@/components/description.js'

const inter = Inter({ subsets: ['latin'] })

export default function MurderWeapons() {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        <Description/>

        <div>
          <h1>Mogelijke moordwapens</h1>
        </div>

        <div className={styles.grid}>
          <Link
            href="csmurdermystery/weapon1"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Wapen 1 <span>-&gt;</span>
            </h2>
          </Link>
          <Link
            href="csmurdermystery/weapon2"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Wapen 2 <span>-&gt;</span>
            </h2>
          </Link>
        </div>
      </main>
    </>
  )
}
