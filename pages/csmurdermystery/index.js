import { Inter } from 'next/font/google'
import styles from '@/styles/Styles.module.css'
import Link from 'next/link'
import { Header } from '@/components/header.js'
import { Description } from '@/components/description.js'

const inter = Inter({ subsets: ['latin'] })

export default function CSMurderMystery() {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        <Description/>

        <div>
          <h1>Er is een moord gepleegd...</h1>
          <ul>
            <li>Je werkt met je team samen om een gruwelijke moord op te lossen.</li>
            <li>Lees de case notes, interview verdachten en getuigen en bekijk de mogelijke moordwapens.</li>
            <li>Je hebt waarschijnlijk niet genoeg tijd om iedereen te interviewen, dus kies verstandig.</li>
            <li>Als je denkt te weten wie de moordenaar is EN wat het gebruikte wapen is, vertel dit dan aan je leraar om erachter te komen of je gelijk hebt.</li>
            <li>Elke keer dat je verkeerd gokt kost je 5 punten.</li>
            <li>Je kunt extra vragen kopen, maar deze kosten 2 punten per stuk.</li>
            <li>Als je echt vastzit, kunt je een hint van de leraar krijgen. Er zijn in totaal 5 hints, ze kosten 20 punten per stuk.</li>
            <li>Het team dat het juiste antwoord heeft en het LAAGST aantal punten aan het eind van de les wint!</li>
          </ul>
        </div>

        <div className={styles.grid}>
          <Link
            href="csmurdermystery/casenotes"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Lees de case notes <span>-&gt;</span>
            </h2>
          </Link>
          <Link
            href="csmurdermystery/witnessreports"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Lees verklaringen van getuigen en verdachten<span>-&gt;</span>
            </h2>
          </Link>
          <Link
            href="csmurdermystery/murderweapons"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Bekijk de mogelijke moordwapens<span>-&gt;</span>
            </h2>
          </Link>
        </div>
      </main>
    </>
  )
}
