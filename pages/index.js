import Link from 'next/link'
import Navbar from '../components/Navbar'
import newsList from '../data/news'
import aiNewsList from '../data/ainews'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />

      {/* 메인 배너 */}
      <section className={styles.mainBanner}>
        <h1>Smart Life Lab에 오신 것을 환영합니다! 🌟</h1>
        <p>하루 '하나씩 AI'로 스마트해지는 삶을 경험하세요!</p>
        <Link href="/about">
          <button>자세히보기</button>
        </Link>
      </section>

      {/* AI 뉴스 */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className={`${styles.sectionTitle} ${styles.aiTitle}`}>🤖 AI 뉴스</h2>

        <div className={styles.aiNewsGrid}>
          {aiNewsList.slice(0, 6).map((n) => (
            <Link key={n.id} href={`/ainews/${n.id}`} legacyBehavior>
              <a className={styles.card}>
                <img src={n.thumbnail} alt={n.title} />
                <div className={styles.cardBody}>
                  <h3>{n.title}</h3>
                  <p>{n.description}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </section>

      {/* 최근 소식 */}
      <section style={{ margin: '3rem 0 4rem' }}>
        <h2 className={`${styles.sectionTitle} ${styles.latestTitle}`}>📢 최근 소식</h2>

        <div className={styles.latestNewsGrid}>
          {newsList.map((n) => (
            <Link key={n.id} href={`/news/${n.id}`} legacyBehavior>
              <a className={styles.card}>
                <img src={n.thumbnail} alt={n.title} />
                <div className={styles.cardBody}>
                  <h3>{n.title}</h3>
                  <p>{n.description}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

