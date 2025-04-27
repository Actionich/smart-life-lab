import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: 'white',
      color: '#7b4cdb',
      fontSize: '1.5rem'
    }}>
      <Link href="/" style={{ color: '#7b4cdb', textDecoration: 'none', fontWeight: 'bold' }}>
        Smart Life Lab
      </Link>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link href="/about" style={{ color: '#7b4cdb', textDecoration: 'none' }}>
          About
        </Link>
        {/* ✅ Contact link */}
        <Link href="/contact" style={{ color: '#7b4cdb', textDecoration: 'none' }}>
          Contact
        </Link>
      </div>
    </nav>
  )
}
