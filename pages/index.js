import Link from 'next/link';
import Navbar from '../components/Navbar';
import newsList from '../data/news';
import aiNewsList from '../data/ainews';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
      <Navbar />

      {/* ✅ 메인 배너 */}
      <div className={styles.mainBanner} style={{ 
        position: 'relative', 
        minHeight: '200px',
        background: 'linear-gradient(135deg, #7b4cdb 0%, #a17fe0 100%)',
        margin: '2rem -1rem',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(123, 76, 219, 0.15)'
      }}>
        <div style={{ 
          padding: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <div className={styles.mainBannerTitle} style={{ 
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            lineHeight: '1.3',
            marginBottom: '0.8rem',
            wordBreak: 'keep-all',
            whiteSpace: 'pre-wrap',
            fontFamily: "'Pretendard', sans-serif",
            fontWeight: '800',
            color: 'white',
            textShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}>
            Smart Life Lab에 오신 것을 환영합니다! 🌟
          </div>
          <div className={styles.mainBannerSubtitle} style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            lineHeight: '1.6',
            wordBreak: 'keep-all',
            whiteSpace: 'pre-wrap',
            fontFamily: "'Pretendard', sans-serif",
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '800px'
          }}>
            하루 '하나씩 AI'로 스마트해지는 삶을 경험하세요!
          </div>
        </div>
        <div style={{
          position: 'absolute',
          bottom: '1.5rem',
          right: '1.5rem'
        }}>
          <Link href="/about">
            <button className={styles.buttonPrimary} style={{
              padding: '0.6rem 1.5rem',
              fontSize: '0.9rem',
              fontWeight: '600',
              borderRadius: '8px',
              background: 'white',
              color: '#7b4cdb',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              ':hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)'
              }
            }}>
              자세히보기
            </button>
          </Link>
        </div>
      </div>
      {/* 🤖 AI 뉴스 */}
      <section className={styles.aiNewsSection} style={{ 
        marginTop: '4rem',
        padding: '0 1rem'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: 'clamp(2rem, 4.5vw, 2.5rem)',
          fontWeight: '800',
          fontFamily: "'Pretendard', sans-serif",
          background: 'linear-gradient(135deg, #7b4cdb, #a17fe0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '3rem',
          textShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          🤖 AI 뉴스
        </h2>

        <div className={styles.aiNewsGrid} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          padding: '0 1rem'
        }}>
          {aiNewsList.slice(0, 6).map((news) => (
            <Link href={`/ainews/${news.id}`} key={news.id} style={{ textDecoration: 'none' }}>
              <div className={styles.newsCard} style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                height: '100%',
                ':hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.12)'
                }
              }}>
                <img 
                  src={news.thumbnail}
                  alt={news.title}
                  style={{ 
                    width: '100%', 
                    height: 'clamp(180px, 25vw, 220px)', 
                    objectFit: 'cover',
                    borderTopLeftRadius: '16px',
                    borderTopRightRadius: '16px'
                  }}
                />
                <div style={{ 
                  padding: '1.5rem',
                  background: 'linear-gradient(to bottom, #ffffff, #f8f9fa)'
                }}>
                  <h3 style={{ 
                    fontSize: 'clamp(1.2rem, 2.5vw, 1.4rem)', 
                    fontWeight: '700', 
                    color: '#2d3748', 
                    marginBottom: '0.8rem',
                    fontFamily: "'Pretendard', sans-serif",
                    lineHeight: '1.4'
                  }}>
                    {news.title}
                  </h3>
                  <p style={{ 
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)', 
                    color: '#4a5568', 
                    lineHeight: '1.6',
                    fontFamily: "'Pretendard', sans-serif"
                  }}>
                    {news.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 📢 최근 소식 */}
      <section className={styles.latestNewsSection} style={{ 
        marginTop: '4rem',
        padding: '0 1rem',
        marginBottom: '4rem'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: 'clamp(2rem, 4.5vw, 2.5rem)',
          fontWeight: '800',
          fontFamily: "'Pretendard', sans-serif",
          color: '#2d3748',
          marginBottom: '3rem',
          textShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          📢 최근 소식
        </h2>

        <div className={styles.latestNewsGrid} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          padding: '0 1rem'
        }}>
          {newsList.map((news) => (
            <Link href={`/news/${news.id}`} key={news.id} style={{ textDecoration: 'none' }}>
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                height: '100%',
                ':hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.12)'
                }
              }}>
                <img 
                  src={news.thumbnail}
                  alt={news.title}
                  style={{ 
                    width: '100%', 
                    height: 'clamp(180px, 25vw, 220px)', 
                    objectFit: 'cover',
                    borderTopLeftRadius: '16px',
                    borderTopRightRadius: '16px'
                  }}
                />
                <div style={{ 
                  padding: '1.5rem',
                  background: 'linear-gradient(to bottom, #ffffff, #f8f9fa)'
                }}>
                  <h3 style={{ 
                    fontSize: 'clamp(1.2rem, 2.5vw, 1.4rem)', 
                    fontWeight: '700', 
                    color: '#2d3748', 
                    marginBottom: '0.8rem',
                    fontFamily: "'Pretendard', sans-serif",
                    color: '#333', 
                    marginBottom: '0.5rem',
                    fontFamily: "'Pretendard', sans-serif"
                  }}>
                    {news.title}
                  </h3>
                  <p style={{ 
                    fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', 
                    color: '#666', 
                    lineHeight: '1.4',
                    fontFamily: "'Pretendard', sans-serif"
                  }}>
                    {news.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
