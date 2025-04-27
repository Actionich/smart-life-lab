export default function App({ Component, pageProps }) {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      color: '#333', // 기본 글자색
      margin: 0,
      padding: 0
    }}>
      <Component {...pageProps} />
    </div>
  )
}
