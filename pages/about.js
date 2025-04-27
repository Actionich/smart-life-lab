import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
      <Navbar />
      
      <div style={{
        minHeight: 'calc(100vh - 200px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        borderRadius: '24px',
        margin: '2rem 0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 4.5vw, 3rem)',
          fontWeight: '800',
          fontFamily: "'Pretendard', sans-serif",
          background: 'linear-gradient(135deg, #7b4cdb, #a17fe0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '2rem',
          textShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          Smart Life Lab 소개 🚀
        </h1>
        
        <p style={{
          fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
          lineHeight: '1.6',
          color: '#4a5568',
          marginBottom: '2rem',
          fontFamily: "'Pretendard', sans-serif",
          maxWidth: '800px',
          textAlign: 'center'
        }}>
          AI 기술로 더 스마트한 삶을 만들어가는 Smart Life Lab입니다.
          하루 하나씩 AI를 배우며 AI 활용 능력을 극대화합니다.
        </p>

        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '800px',
          height: 'clamp(300px, 50vw, 500px)',
          marginBottom: '3rem',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
        }}>
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80" 
            alt="Smart Life Lab" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease'
            }}
          />
        </div>

        <Link href="/">
          <button style={{
            padding: '1rem 2.5rem',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
            fontWeight: '600',
            backgroundColor: '#7b4cdb',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(123, 76, 219, 0.2)',
            ':hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(123, 76, 219, 0.3)'
            }
          }}>
            홈으로 돌아가기
          </button>
        </Link>
      </div>
    </div>
  )
}
