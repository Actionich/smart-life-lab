import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { useMemo } from 'react';
import newsList from '../../data/news';

export default function NewsDetail() {
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

  const currentIndex = newsList.findIndex(item => item.id === id);
  const news = newsList[currentIndex];
  const nextNews = newsList[currentIndex + 1];

  const recommendedNews = useMemo(() => {
    const others = newsList.filter(item => item.id !== id);
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
          height: 'clamp(200px, 40vw, 400px)',
          marginBottom: '2rem',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
        }}>
          <img 
            src={news.image} 
            alt={news.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>

        <div style={{
          fontSize: 'clamp(1rem, 3vw, 1.2rem)',
          lineHeight: '1.8',
          color: '#4a5568',
          marginBottom: '3rem',
          textAlign: 'left',
          padding: '0 1rem'
        }}>
          {news.content}
        </div>

        {nextNews && (
          <Link href={`/news/${nextNews.id}`}>
            <button style={{
              padding: '1rem 2rem',
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              fontWeight: '600',
              backgroundColor: '#7b4cdb',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(123, 76, 219, 0.2)',
              marginBottom: '3rem'
            }}>
              다음 뉴스 보기
            </button>
          </Link>
        )}

        <div style={{
          marginTop: '4rem',
          padding: '2rem',
          backgroundColor: '#f8f9fa',
          borderRadius: '16px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.4rem, 4vw, 1.8rem)',
            fontWeight: '700',
            color: '#2d3748',
            marginBottom: '2rem'
          }}>
            추천 뉴스
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            padding: '0 1rem'
          }}>
            {recommendedNews.map(item => (
              <Link key={item.id} href={`/news/${item.id}`}>
                <div style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                  ':hover': {
                    transform: 'translateY(-5px)'
                  }
                }}>
                  <div style={{
                    height: '200px',
                    position: 'relative'
                  }}>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div style={{
                    padding: '1.5rem'
                  }}>
                    <h3 style={{
                      fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
                      fontWeight: '600',
                      color: '#2d3748',
                      marginBottom: '0.5rem'
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                      color: '#718096',
                      lineHeight: '1.6'
                    }}>
                      {item.summary}
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
