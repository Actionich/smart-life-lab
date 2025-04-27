import Navbar from '../components/Navbar';

export default function Contact() {
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
          문의하기 📬
        </h1>
        
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '16px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
            lineHeight: '1.6',
            color: '#4a5568',
            marginBottom: '1.5rem',
            fontFamily: "'Pretendard', sans-serif"
          }}>
            궁금한 점이 있으시면 이메일로 연락 주세요!
          </p>
          
          <a href="mailto:actionich@example.com" style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            backgroundColor: '#7b4cdb',
            color: 'white',
            borderRadius: '12px',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(123, 76, 219, 0.2)',
            ':hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(123, 76, 219, 0.3)'
            }
          }}>
            📧 actionich@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}
