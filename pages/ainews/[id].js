import { useRouter } from 'next/router';
import aiNewsList from '../../data/ainews';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { useMemo } from 'react';

export default function AiNewsDetail() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return (
      <Layout>
        <div style={{ 
          padding: '2rem', 
          textAlign: 'center',
          fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
          color: '#666',
          fontFamily: "'Pretendard', sans-serif"
        }}>
          로딩 중...
        </div>
      </Layout>
    );
  }

  const currentIndex = aiNewsList.findIndex(item => item.id === id);
  const news = aiNewsList[currentIndex];
  const nextNews = aiNewsList[currentIndex + 1];

  const recommendedNews = useMemo(() => {
    const others = aiNewsList.filter(item => item.id !== id);
    const shuffled = others.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  }, [id]);

  if (!news) {
    return (
      <Layout>
        <div style={{ 
          padding: '2rem', 
          textAlign: 'center',
          fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
          color: '#666',
          fontFamily: "'Pretendard', sans-serif"
        }}>
          뉴스를 찾을 수 없습니다.
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div style={{
        padding: 'clamp(1rem, 5vw, 2rem)',
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'center',
        fontFamily: "'Pretendard', sans-serif"
      }}>
        <h1 style={{ 
          marginBottom: 'clamp(1rem, 3vw, 2rem)', 
          fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', 
          fontWeight: '800',
          lineHeight: '1.4',
          color: '#2d3748',
          textShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          {news.title}
        </h1>
        
        <div style={{
          position: 'relative',
          width: '100%',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
          marginBottom: 'clamp(2rem, 5vw, 3rem)'
        }}>
          <img 
            src={news.thumbnail || '/ai-news-default.jpg'}
            alt={news.title}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              transition: 'transform 0.3s ease'
            }}
          />
        </div>

        <p style={{
          fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
          color: '#4a5568',
          marginBottom: 'clamp(2rem, 5vw, 3rem)',
          lineHeight: '1.8',
          textAlign: 'left',
          padding: '0 clamp(1rem, 3vw, 2rem)'
        }}>
          {news.fullDescription}
        </p>

        <div style={{ 
          marginTop: 'clamp(2rem, 5vw, 3rem)',
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          {nextNews ? (
            <Link href={`/ainews/${nextNews.id}`}>
              <button style={{
                padding: 'clamp(0.8rem, 2vw, 1.2rem) clamp(1.5rem, 3vw, 2.5rem)',
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                backgroundColor: '#7b4cdb',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(123, 76, 219, 0.2)',
                ':hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(123, 76, 219, 0.3)'
                }
              }}>
                ➡️ 다음 뉴스 보기
              </button>
            </Link>
          ) : (
            <Link href="/">
              <button style={{
                padding: 'clamp(0.8rem, 2vw, 1.2rem) clamp(1.5rem, 3vw, 2.5rem)',
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(76, 175, 80, 0.2)',
                ':hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(76, 175, 80, 0.3)'
                }
              }}>
                🏠 처음으로 돌아가기
              </button>
            </Link>
          )}
        </div>

        <div style={{ 
          marginTop: 'clamp(4rem, 8vw, 6rem)',
          padding: 'clamp(2rem, 5vw, 3rem)',
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          borderRadius: '24px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          <h2 style={{
            marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontSize: 'clamp(1.4rem, 4vw, 1.8rem)',
            fontWeight: '800',
            color: '#2d3748',
            background: 'linear-gradient(135deg, #7b4cdb, #a17fe0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            🔥 추천 뉴스
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(1rem, 3vw, 2rem)',
            justifyContent: 'center'
          }}>
            {recommendedNews.map((item) => (
              <Link key={item.id} href={`/ainews/${item.id}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  ':hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                  }
                }}>
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '56.25%'
                  }}>
                    <img 
                      src={item.thumbnail || '/ai-news-default.jpg'}
                      alt={item.title}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div style={{ 
                    padding: 'clamp(1rem, 3vw, 1.5rem)'
                  }}>
                    <h3 style={{
                      fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
                      fontWeight: '700',
                      color: '#2d3748',
                      marginBottom: '0.8rem',
                      lineHeight: '1.4'
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                      color: '#4a5568',
                      lineHeight: '1.6'
                    }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}


