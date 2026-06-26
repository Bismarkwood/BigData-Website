import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import bdgWave from '../../assets/intro/bdg-wave.png'
import bdgCenter from '../../assets/intro/bdg-center-icon.png'
import bdgText from '../../assets/intro/bdg-text.png'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Insights', href: '#insights' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--menu-open' : ''}`}>
        <div className="navbar__inner">
          <Link to="/" className="navbar__logo">
            <div className="navbar__logo-icon">
              <img src={bdgWave} alt="" className="navbar__logo-wave" />
              <img src={bdgCenter} alt="" className="navbar__logo-center" />
            </div>
            <img src={bdgText} alt="BDG" className="navbar__logo-text" />
          </Link>

          <div className="navbar__right">
            <button
              className={`navbar__menu-btn ${menuOpen ? 'navbar__menu-btn--open' : ''}`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="navbar__menu-line" />
              <span className="navbar__menu-line" />
            </button>
            <a href="#contact" className="navbar__cta" aria-label="Contact us">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Full-page menu overlay */}
      <div className={`nav-menu ${menuOpen ? 'nav-menu--open' : ''}`}>
        <div className="nav-menu__content">
          {/* Left: Navigation links */}
          <div className="nav-menu__links">
            {navLinks.map((link, i) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="nav-menu__link"
                  style={{ transitionDelay: `${i * 0.05 + 0.1}s` }}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="nav-menu__link-text">{link.label}</span>
                  <span className="nav-menu__link-plus">+</span>
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-menu__link"
                  style={{ transitionDelay: `${i * 0.05 + 0.1}s` }}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="nav-menu__link-text">{link.label}</span>
                  <span className="nav-menu__link-plus">+</span>
                </a>
              )
            ))}
          </div>

          {/* Right: Contact info */}
          <div className="nav-menu__info">
            <div className="nav-menu__info-section">
              <h4 className="nav-menu__info-heading">GET IN TOUCH ↗</h4>
              <div className="nav-menu__info-item">
                <span className="nav-menu__info-label">CALL US</span>
                <span className="nav-menu__info-value">+233 (0) 302 123 456</span>
              </div>
              <div className="nav-menu__info-item">
                <span className="nav-menu__info-label">EMAIL US</span>
                <span className="nav-menu__info-value">info@bigdataghana.com</span>
              </div>
              <div className="nav-menu__info-item">
                <span className="nav-menu__info-label">FIND US</span>
                <span className="nav-menu__info-value">Accra, Ghana</span>
              </div>
            </div>

            <div className="nav-menu__info-section">
              <h4 className="nav-menu__info-heading">SOCIAL LINKS ↗</h4>
              <div className="nav-menu__socials">
                <a href="#" className="nav-menu__social">LinkedIn</a>
                <a href="#" className="nav-menu__social">Twitter</a>
                <a href="#" className="nav-menu__social">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
