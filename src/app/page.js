import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

import Footer from './components/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <code className={styles.code}>Exploring and Pondering</code>
        </p>
      </div>

      <div className={styles.center}>
        <Image
          src='https://github.com/Isaac-Tait.png'
          width={200}
          height={200}
          alt='Picture of the author'
          style={{ borderRadius: '50%' }}
        />
        <Link
          href='https://docs.eandp.cc/'
          target='_blank'
          rel='noopener noreferrer'
          prefetch={true}
          className={styles.button}
        >
          Blog and Essays
        </Link>
        <Link
          href='https://wormwoodsaga.com'
          target='_blank'
          rel='noopener noreferrer'
          prefetch={true}
          className={styles.button}
        >
          Novel
        </Link>
        <Link
          href='https://iloveto.fish'
          target='_blank'
          rel='noopener noreferrer'
          prefetch={true}
          className={styles.button}
        >
          Hobbies{' '}
        </Link>
        <Link
          href='https://bsky.app/profile/enlightenednomad.bsky.social'
          target='_blank'
          rel='noopener noreferrer'
          prefetch={true}
          className={styles.button}
        >
          Blue Sky{' '}
        </Link>
      </div>
      <Footer />
    </main>
  );
}
