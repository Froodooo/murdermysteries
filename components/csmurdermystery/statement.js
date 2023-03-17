import { Inter } from 'next/font/google'
import styles from '@/styles/Styles.module.css'
import Link from 'next/link'
import { useState } from 'react';
import { FollowUp } from '@/components/csmurdermystery/follow_up.js';

const inter = Inter({ subsets: ['latin'] })

export function Statement({correct, person}) {
  const [hasCosenQuestion, setHasChosenQuestion] = useState(false);
  const [chosenQuestion, setChosenQuestion] = useState(undefined);
  const [chosenAnswer, setChosenAnswer] = useState(undefined);

  return correct 
  ? (
    <>
        <div>
          <h1>Statement</h1>
          <p>{person.statement}</p>
        </div>
        <div className={styles.grid}>
        {
            !chosenQuestion &&
            person.followup.map(({ question, answer }) => (
              <Link
                key={question}
                href='#'
                onClick={() => {
                  setHasChosenQuestion(true)
                  setChosenQuestion(question)
                  setChosenAnswer(answer)
                }}
                className={styles.card}
              >
                <h2 className={inter.className}>
                  {question} <span>-&gt;</span>
                </h2>
              </Link>
            ))
          }
        </div>
        <div>
          {hasCosenQuestion && <FollowUp question={chosenQuestion} answer={chosenAnswer} />}
        </div>
    </>
  )
  : (
    <>
      <div>
        <h1>Fout!</h1>
      </div>
    </>
  )
}
