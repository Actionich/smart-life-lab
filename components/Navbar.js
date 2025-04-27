import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.2rem 2rem',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 2px 15px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      fontFamily: "'Pretendard', sans-serif",
      margin: '0 -100vw',
      padding: '1.2rem 100vw'
    }}>
      <Link href="/" style={{ 
        color: '#7b4cdb', 
        textDecoration: 'none', 
        fontWeight: '800',
        fontSize: 'clamp(1.5rem, 4vw, 1.8rem)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <span style={{ 
          fontSize: 'clamp(1.8rem, 4.5vw, 2.2rem)',
          background: 'linear-gradient(135deg, #7b4cdb, #a17fe0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>🏠</span>
      </Link>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0.5rem',
          '@media (max-width: 768px)': {
            display: 'block'
          }
        }}
      >
        <span style={{ 
          fontSize: '1.8rem',
          color: '#7b4cdb'
        }}>☰</span>
      </button>

      {/* Navigation Links */}
      <div style={{ 
        display: 'flex', 
        gap: '2rem',
        '@media (max-width: 768px)': {
          display: isMenuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          padding: '1rem',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          alignItems: 'center'
        }
      }}>
        <Link href="/about" style={{ 
          color: '#7b4cdb', 
          textDecoration: 'none',
          fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
          fontWeight: '600',
          transition: 'all 0.3s ease',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          ':hover': {
            backgroundColor: 'rgba(123, 76, 219, 0.1)'
          }
        }}>
          About
        </Link>
        <Link href="/contact" style={{ 
          color: '#7b4cdb', 
          textDecoration: 'none',
          fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
          fontWeight: '600',
          transition: 'all 0.3s ease',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          ':hover': {
            backgroundColor: 'rgba(123, 76, 219, 0.1)'
          }
        }}>
          Contact
        </Link>
      </div>
    </nav>
  )
}
