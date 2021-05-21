import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gyaku-Hyotei</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2 className={styles.border}>教養科目 </h2>
            <p className={styles.back}>文系教養科目</p>
            <p className={styles.back}>英語科目</p>
            <p className={styles.back}>第二外国語科目</p>
          </div>

          <div className={styles.card}>
            <h2 className={styles.border}>初年次専門科目 </h2>
            <p className={styles.back}>理学院</p>
            <p className={styles.back}>工学院</p>
            <p className={styles.back}>物質理工学院</p>
          </div>

          <div className={styles.card}>
            <h2 className={styles.border}>理学院 </h2>
            <p className={styles.back}>数学系</p>
            <p className={styles.back}>物理学系</p>
            <p className={styles.back}>化学系</p>
          </div>

          <div className={styles.card}>
            <h2 className={styles.border}>工学院 </h2>
            <p></p>
          </div>

          <div className={styles.card}>
            <h2 className={styles.border}>物質理工学院 </h2>
            <p></p>
          </div>

          <div className={styles.card}>
            <h2 className={styles.border}>情報理工学院 </h2>
            <p></p>
          </div>

          <div className={styles.card}>
            <h2 className={styles.border}>環境社会理工学院 </h2>
            <p></p>
          </div>

          <div className={styles.card}>
            <h2 className={styles.border}>生命理工学院 </h2>
            <p></p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
