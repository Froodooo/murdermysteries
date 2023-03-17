import styles from '@/styles/Styles.module.css'
import { Header } from '@/components/header.js'
import { Description } from '@/components/description.js'

export default function CaseNotes() {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        <Description/>

        <div>
          <h1>Case notes</h1>
          <ul>
            <li>Om 2:30am werd de politie naar het “Museum of Technology” gestuurd na een telefoontje van een burger over ongeregeldheden.</li>
            <li>Luke B. Hyndeyou werd dood aangetroffen. Hij droeg zijn personeelskaart van het museum.</li>
            <li>Om hem heen lag een plas bloed, afkomstig uit een diepe wond in zijn achterhoofd.</li>
            <li>Op de vloer, vlak bij het lichaam, liggen een hamer en een koevoet, maar op geen van beide zit bloed.</li>
          </ul>
        </div>
      </main>
    </>
  )
}
