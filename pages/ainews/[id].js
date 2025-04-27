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
        <div style={{ padding: '2rem', textAlign: 'center' }}>로딩 중...</div>
      </Layout>
    );
  }

  const currentIndex = aiNewsList.findIndex(item => item.id === id);
  const news = aiNewsList[currentIndex];
  const nextNews = aiNewsList[currentIndex + 1];

  // ✅ 추천 뉴스 2개 뽑기 (현재 뉴스 제외)
  const recommendedNews = useMemo(() => {
    const others = aiNewsList.filter(item => item.id !== id);
    const shuffled = others.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  }, [id]);

  if (!news) {
    return (
      <Layout>
        <div style={{ padding: '2rem', textAlign: 'center' }}>뉴스를 찾을 수 없습니다.</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div style={{
        padding: '2rem',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{ marginBottom: '1rem', fontSize: '2rem', fontWeight: '700' }}>{news.title}</h1>
        
        <img 
          src={news.thumbnail || '/ai-news-default.jpg'}
          alt={news.title}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '10px',
            marginBottom: '2rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        />

        <p style={{
          fontSize: '1.2rem',
          color: '#555',
          marginBottom: '3rem',
          lineHeight: '1.6'
        }}>
          {news.fullDescription}
        </p>

        {/* ✅ 다음 뉴스 or 처음으로 돌아가기 */}
        <div style={{ marginTop: '2rem' }}>
          {nextNews ? (
            <Link href={`/ainews/${nextNews.id}`}>
              <button style={{
                padding: '1rem 2.5rem',
                fontSize: '1.125rem',
                backgroundColor: '#7b4cdb',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
              }}>
                ➡️ 다음 뉴스 보기
              </button>
            </Link>
          ) : (
            <Link href="/">
              <button style={{
                padding: '1rem 2.5rem',
                fontSize: '1.125rem',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
              }}>
                🏠 처음으로 돌아가기
              </button>
            </Link>
          )}
        </div>

        {/* ✅ 추천 뉴스 섹션 */}
        <div style={{ marginTop: '5rem' }}>
          <h2 style={{
            marginBottom: '2rem',
            fontSize: '1.6rem',
            fontWeight: '700',
            color: '#333'
          }}>
            🔥 추천 뉴스
          </h2>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            justifyContent: 'center'
          }}>
            {recommendedNews.map((item) => (
              <Link key={item.id} href={`/ainews/${item.id}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  width: '280px',
                  backgroundColor: '#f9f9f9',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}>
                  <img 
                    src={item.thumbnail || '/ai-news-default.jpg'}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '160px',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ padding: '1rem' }}>
                    <h3 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '0.5rem'
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: '0.95rem',
                      color: '#666',
                      lineHeight: '1.4'
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


