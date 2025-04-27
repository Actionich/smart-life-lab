import { useRouter } from 'next/router';

export default function NewsDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div style={{
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1>뉴스 상세 페이지</h1>
      <p>이 뉴스의 ID는: {id}</p>
    </div>
  );
}
