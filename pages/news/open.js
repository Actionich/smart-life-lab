import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function OpenNews() {
  return (
    <div>
      <Navbar />
      <div style={{
        padding: '2rem',
        fontSize: '2rem',
        textAlign: 'center'
      }}>
        <h1>홈페이지 오픈 공지 🎉</h1>
        <p style={{ marginTop: '1rem', fontSize: '1.5rem' }}>
          2025년 4월 26일, 나만의 홈페이지가 공식 오픈했습니다!
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
