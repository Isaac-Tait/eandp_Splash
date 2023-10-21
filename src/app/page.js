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
          href='https://secure.everyaction.com/fQnpE4ChOU6m73Eh9FXXww2'
          target='_blank'
          rel='noopener noreferrer'
          prefetch={true}
          className={styles.button}
        >
          Tell the ATF to make America safe again
        </Link>
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

      {/* <div className={styles.grid}>
        <a
          href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>
            Learn about Next.js in an interactive course
            with&nbsp;quizzes!
          </p>
        </a>

        <a
          href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with
            Vercel.
          </p>
        </a>
      </div> */}
      <Footer />
    </main>
  );
}
