import Link from 'next/link'
import { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      {/* 로고 */}
      <Link href="/" legacyBehavior>
        <a className={styles.logo}>🏠</a>
      </Link>

      {/* 햄버거 버튼 (모바일 전용) */}
      <button
        className={styles.hamburger}
        aria-label="toggle menu"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* 메뉴 */}
      <ul className={`${styles.menu} ${open ? styles.show : ''}`}>
        <li>
          <Link href="/about" legacyBehavior>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact" legacyBehavior>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

