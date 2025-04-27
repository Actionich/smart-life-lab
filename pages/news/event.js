import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function EventNews() {
  return (
    <div>
      <Navbar />
      <div style={{
        padding: '2rem',
        fontSize: '2rem',
        textAlign: 'center'
      }}>
        <h1>첫 번째 이벤트 공지 🎊</h1>
        <p style={{ marginTop: '1rem', fontSize: '1.5rem' }}>
          2025년 5월 1일, 첫 번째 고객 감사 이벤트를 진행합니다!
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
