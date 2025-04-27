import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function MobileNews() {
  return (
    <div>
      <Navbar />
      <div style={{
        padding: '2rem',
        fontSize: '2rem',
        textAlign: 'center'
      }}>
        <h1>모바일 버전 출시 예고 📱</h1>
        <p style={{ marginTop: '1rem', fontSize: '1.5rem' }}>
          2025년 5월 10일, 모바일 최적화 버전이 출시됩니다!
        </p>

        <div style={{ marginTop: '3rem' }}>
          <Link href="/">
            <button style={{
              padding: '1rem 2rem',
              fontSize: '1.5rem',
              cursor: 'pointer'
            }}>
              홈으로 돌아가기
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
