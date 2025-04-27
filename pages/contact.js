import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div style={{
        padding: '2rem',
        fontSize: '2rem',
        textAlign: 'center'
      }}>
        <h1>문의하기 📬</h1>
        <p style={{ marginTop: '1rem', fontSize: '1.5rem' }}>
          궁금한 점이 있으시면 이메일로 연락 주세요!<br />
          📧 contact@example.com
        </p>
      </div>
    </div>
  )
}
