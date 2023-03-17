import styles from '@/styles/Styles.module.css'
import Link from 'next/link'
import Image from 'next/image'

export function Description() {
  return (
  <div className={styles.description}>
    <Link href="/"><code className={styles.code}>Murder Mysteries</code> voor in de klas</Link>
    <div>
      <a
        href="https://yordi.me/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Door{' '}
        <Image
          src="/avatar.png"
          alt="Avatar"
          className={styles.vercelLogo}
          width={32}
          height={32}
          priority
        />
      </a>
    </div>
  </div>
  );
}