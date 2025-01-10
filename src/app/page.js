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
        <div
          style={{
            display: 'flexRow',
            marginTop: '2rem',
          }}
        >
          <Link
            href='https://www.tiktok.com/@exploring_and_pondering'
            target='_blank'
            rel='noopener noreferrer'
            prefetch={true}
            className={styles.button}
            style={{ marginRight: '2rem' }}
          >
            TikTok{' '}
          </Link>
          <Link
            href='https://www.instagram.com/exploring_and_pondering/'
            target='_blank'
            rel='noopener noreferrer'
            prefetch={true}
            className={styles.button}
            style={{ marginRight: '2rem' }}
          >
            Instagram{' '}
          </Link>
          <Link
            href='https://www.threads.net/@exploring_and_pondering'
            target='_blank'
            rel='noopener noreferrer'
            prefetch={true}
            className={styles.button}
          >
            Threads{' '}
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
