import Head from 'next/head'

export function Header() {
  return (
    <Head>
    <title>Murder Mysteries</title>
    <meta name="description" content="Murder Mysteries voor in de klas" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  );
}