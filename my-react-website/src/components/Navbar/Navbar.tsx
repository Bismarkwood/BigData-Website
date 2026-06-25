import { useState, useEffect } from 'react'
import bdgWave from '../../assets/intro/bdg-wave.png'
import bdgCenter from '../../assets/intro/bdg-center-icon.png'
import bdgText from '../../assets/intro/bdg-text.png'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <div className="navbar__logo">
          <div className="navbar__logo-icon">
            <img src={bdgWave} alt="" className="navbar__logo-wave" />
            <img src={bdgCenter} alt="" className="navbar__logo-center" />
          </div>
          <img src={bdgText} alt="BDG" className="navbar__logo-text" />
        </div>

        <div className="navbar__right">
          <button className="navbar__menu-btn" aria-label="Open menu">
            <span className="navbar__menu-line" />
            <span className="navbar__menu-line" />
          </button>
          <a href="#contact" className="navbar__cta" aria-label="Contact us">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
