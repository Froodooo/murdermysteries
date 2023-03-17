import { Inter } from 'next/font/google'
import styles from '@/styles/Styles.module.css'
import Link from 'next/link'
import { Header } from '@/components/header.js'
import { Description } from '@/components/description.js'
import { getPeople } from '@/lib/csmurdermystery/people';

const inter = Inter({ subsets: ['latin'] })

const people = getPeople();

export async function getStaticProps() {
  return {
    props: {
      people,
    },
  };
}

export default function WitnessReports({ people }) {

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Description />

        <div>
          <h1>Klik op een persoon om hun statement te lezen</h1>
          <p>Maak aantekeningen. Als je klaar bent met je interview met een person, kun je niet meer terug om hun verklaring opnieuw te lezen.</p>
        </div>

        <div className={styles.grid}>
          {
            people.map(({ params }) => (
              <Link
                key={params.id}
                href={params.id}
                className={styles.card}
              >
                <h2 className={inter.className}>
                  {params.name} <span>-&gt;</span>
                </h2>
              </Link>
            ))
          }
        </div>
      </main>
    </>
  )
}
