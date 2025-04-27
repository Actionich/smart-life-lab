import Link from 'next/link';
import Navbar from '../components/Navbar'; // ✅ 추가

export default function About() {
  return (
    <div>
      <Navbar /> {/* ✅ 여기 추가 */}
      <div style={{
        padding: '2rem',
        fontSize: '2rem',
        textAlign: 'center'
      }}>
        <h1>소개 페이지입니다 👋</h1>
        <p style={{ marginTop: '1rem', fontSize: '1.5rem' }}>
          여기는 나만의 서비스 소개 페이지입니다!
        </p>

        <img 
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80" 
          alt="소개 이미지" 
          style={{ marginTop: '2rem', borderRadius: '10px', width: '300px', height: '200px', objectFit: 'cover' }}
        />

        <div style={{ marginTop: '3rem' }}>
          <Link href="/">
            <button
              style={{
                padding: '1rem 2rem',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
            >
              홈으로 돌아가기
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
