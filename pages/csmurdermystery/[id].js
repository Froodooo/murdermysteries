import { Inter } from 'next/font/google'
import styles from '@/styles/Styles.module.css'
import { Header } from '@/components/header.js'
import { Description } from '@/components/description.js'
import { getPeople, getPersonData } from '@/lib/csmurdermystery/people';
import { useState } from 'react';
import { Statement } from '@/components/csmurdermystery/statement.js';
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps({ params }) {
  const personData = getPersonData(params.id);
  return {
    props: {
      personData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getPeople();
  return {
    paths,
    fallback: false,
  };
}

export default function Person({personData}) {
  const [answer, setAnswer] = useState(false);
  const [gaveAnswer, setGaveAnswer] = useState(false);

  return (
    <>
      <Header/>
      <main className={styles.main}>
        <Description/>

        <div>
          <h1>{personData.params.name}</h1>
          <p>{!gaveAnswer && personData.params.question}</p>
        </div>

        <div className={styles.grid}>
        {
            !gaveAnswer &&
            personData.params.answers.map(({ text, correct }) => (
              <Link
                key={text}
                href='#'
                onClick={() => {
                  setGaveAnswer(true)
                  setAnswer(correct)
                }}
                className={styles.card}
              >
                <h2 className={inter.className}>
                  {text} <span>-&gt;</span>
                </h2>
              </Link>
            ))
          }
        </div>

        <div>
          {gaveAnswer && <Statement correct={answer} person={personData.params}/>}
        </div>
      </main>
    </>
  )
}