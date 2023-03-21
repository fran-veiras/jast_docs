import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import { Lights } from '../Components/Styles/Lights'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Jast — Rust's minimalist framework</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
	  <Lights />
      <main className={styles.main}>
        <div className={styles.description}>
		  <a href='https://github.com/fran-veiras/Jast'>
          <p>
            Contribute&nbsp;
            <code className={styles.code}>→ Jast-lib ❤️🦀</code>
          </p>
		  </a>
          <div>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
			  Jast docs 0.1.1&nbsp;
              <Image
                src="logo.svg"
                alt="Jast Logo"
                className={styles.jastLogo}
                width={40}
                height={40}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.welcomeText}>
            <h1 className={`${inter.className} ${styles.title}`}>
              Rust's minimalist framework
            </h1>
			<h2 className={`${inter.className} ${styles.subtitle}`}>
				Jast is an open source minimalist Rust library for building high-performance web servers. Designed to be both easy to use and performant, Jast takes advantage of Rust's strengths in areas such as security and memory usage.
			</h2>
		</div>

        <div className={styles.grid}>
          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            	coming soon...
			</p>
          </a>

          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            	coming soon...
			</p>
          </a>
          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            	coming soon...
			</p>
          </a>
        </div>
      </main>
    </>
  )
}
