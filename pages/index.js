import Link from 'next/link';
import Navbar from '../components/Navbar';
import newsList from '../data/news';
import aiNewsList from '../data/ainews';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

function Layout({ children }) {
  const router = useRouter();
  const isMainPage = router.pathname === '/';

  return (
    <div style={{ fontFamily: "'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif" }}>
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: isMainPage ? 'white' : '#7b4cdb',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 2rem'
      }}>
        <div style={{ letterSpacing: '-0.05em', flex: 1 }}>
          <Navbar isMainPage={isMainPage} />
        </div>
      </div>
      {children}
    </div>
  )
}

export default function Home() {
  const displayedAiNews = aiNewsList.slice(0, 8); // Changed to show 8 AI news items
  const hasMoreAiNews = aiNewsList.length > 8;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <Layout>
      {/* ✅ 메인 배너 */}
      <div style={{
        width: '100%',
        minHeight: '400px',
        padding: '3rem 1rem',
        backgroundImage: 'linear-gradient(135deg, #a17fe0, #7b4cdb)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 'clamp(2rem, 5.5vw, 3.2rem)',
        fontWeight: '700',
        letterSpacing: '-0.03em',
        gap: '1.5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}/>
        Smart Life Lab에 오신 것을 환영합니다! 🌟
        <div style={{
          fontSize: 'clamp(1.2rem, 3.2vw, 1.5rem)',
          fontWeight: '500',
          marginBottom: '1.5rem',
          lineHeight: '1.7',
          maxWidth: '800px',
          opacity: '0.95',
          letterSpacing: '-0.02em'
        }}>
          하루 '하나씩 AI'로 스마트해지는 삶을 경험하세요!
        </div>
        <Link href="/about">
          <button style={{
            padding: '1.1rem 2.8rem',
            fontSize: 'clamp(1.1rem, 2.6vw, 1.3rem)',
            backgroundColor: 'white',
            color: '#7b4cdb',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            fontWeight: '600',
            letterSpacing: '-0.02em',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            ':hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
            }
          }}>
            자세히보기
          </button>
        </Link>
      </div>

      {/* 🤖 AI 뉴스 */}
      <div style={{
        backgroundColor: '#f8f9ff',
        width: '100%',
        padding: '4rem 1rem'
      }}>
        <h2 style={{ 
          marginBottom: '3.5rem', 
          textAlign: 'center', 
          fontSize: 'clamp(2rem, 4.2vw, 2.5rem)',
          fontWeight: '700',
          letterSpacing: '-0.03em',
          background: 'linear-gradient(135deg, #7b4cdb, #a17fe0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>🤖 AI 뉴스</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.8rem',
          padding: '0 1rem',
          maxWidth: '1400px',
          margin: '0 auto',
          '@media (max-width: 1200px)': {
            gridTemplateColumns: 'repeat(2, 1fr)'
          },
          '@media (max-width: 768px)': {
            gridTemplateColumns: '1fr'
          }
        }}>
          {displayedAiNews.map((news, index) => (
            <Link href={index === displayedAiNews.length - 1 ? `/ainews/${displayedAiNews[0].id}` : `/ainews/${news.id}`} key={news.id} style={{ textDecoration: 'none' }}>
              <div style={{
                backgroundColor: 'white',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                height: '100%',
                borderRadius: '20px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                ':hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
                }
              }}>
                <div style={{ 
                  width: '100%', 
                  height: '220px', 
                  position: 'relative',
                  backgroundColor: '#f0f0f0'
                }}>
                  <img
                    src={news.thumbnail || '/ai-news-default.jpg'}
                    alt={news.title}
                    width="300"
                    height="200"
                    style={{ 
                      objectFit: 'cover', 
                      width: '100%', 
                      height: '100%',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    backgroundColor: 'rgba(123, 76, 219, 0.9)',
                    padding: '8px 15px',
                    borderRadius: '20px',
                    color: 'white',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    letterSpacing: '-0.01em',
                    backdropFilter: 'blur(5px)'
                  }}>
                    {index === displayedAiNews.length - 1 ? '처음으로' : 'AI News'}
                  </div>
                </div>
                <div style={{ padding: '1.8rem' }}>
                  <h3 style={{ 
                    marginBottom: '1rem', 
                    fontSize: 'clamp(1.2rem, 2.6vw, 1.4rem)', 
                    color: '#2d3748',
                    fontWeight: '700',
                    lineHeight: '1.4',
                    letterSpacing: '-0.02em'
                  }}>
                    {news.title}
                  </h3>
                  <p style={{ 
                    fontSize: 'clamp(1rem, 2.2vw, 1.1rem)', 
                    color: '#4a5568',
                    lineHeight: '1.7',
                    opacity: '0.9',
                    letterSpacing: '-0.01em'
                  }}>
                    {news.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {hasMoreAiNews && (
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/ainews">
              <button style={{
                padding: '1.1rem 2.8rem',
                fontSize: '1.15rem',
                backgroundColor: '#7b4cdb',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                fontWeight: '600',
                letterSpacing: '-0.02em',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(123, 76, 219, 0.3)',
                ':hover': {
                  transform: 'translateY(-2px)',
                  backgroundColor: '#6b3ccb',
                  boxShadow: '0 6px 20px rgba(123, 76, 219, 0.4)'
                }
              }}>
                더보기
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* 📢 최근 소식 */}
      <div style={{
        margin: '5rem auto',
        padding: '2.5rem',
        backgroundColor: 'white',
        borderRadius: '24px',
        boxShadow: '0 4px 30px rgba(0,0,0,0.06)',
        maxWidth: '1200px',
        width: '95%'
      }}>
        <h2 style={{ 
          marginBottom: '3.5rem', 
          textAlign: 'center', 
          fontSize: 'clamp(2rem, 4.2vw, 2.5rem)',
          fontWeight: '700',
          letterSpacing: '-0.03em',
          color: '#2d3748'
        }}>📢 최근 소식</h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.8rem'
        }}>
          {newsList.map((news, index) => (
            <Link href={index === newsList.length - 1 ? `/news/${newsList[0].id}` : `/news/${news.id}`} key={news.id} style={{ textDecoration: 'none' }}>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '1.8rem',
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: isMobile ? 'flex-start' : 'center',
                gap: '1.8rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 15px rgba(0,0,0,0.05)',
                ':hover': {
                  transform: 'translateX(5px)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }
              }}>
                <div style={{ 
                  width: isMobile ? '100%' : '200px',
                  height: isMobile ? '240px' : '140px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  position: 'relative'
                }}>
                  <img
                    src={news.thumbnail}
                    alt={news.title}
                    width="300"
                    height="200"
                    style={{ 
                      objectFit: 'cover', 
                      width: '100%', 
                      height: '100%',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </div>
                <div>
                  <h3 style={{ 
                    fontSize: 'clamp(1.3rem, 3.2vw, 1.5rem)',
                    color: '#2d3748',
                    marginBottom: '1rem',
                    fontWeight: '700',
                    lineHeight: '1.4',
                    letterSpacing: '-0.02em'
                  }}>
                    {news.title}
                  </h3>
                  <p style={{ 
                    fontSize: 'clamp(1.1rem, 2.6vw, 1.2rem)',
                    color: '#4a5568',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    lineHeight: '1.7',
                    opacity: '0.9',
                    letterSpacing: '-0.01em'
                  }}>
                    {news.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}
