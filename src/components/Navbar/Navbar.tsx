import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import bdgWave from '../../assets/intro/bdg-wave.png'
import bdgCenter from '../../assets/intro/bdg-center-icon.png'
import bdgText from '../../assets/intro/bdg-text.png'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/proof' },
  { label: 'Industries', href: '#industries', hasDropdown: true },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

const industries = [
  { title: 'Agriculture' },
  { title: 'Finance' },
  { title: 'Real Estate' },
  { title: 'Government' },
  { title: 'Logistics' },
  { title: 'Insurance' },
]

function Navbar({ light = false }: { light?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${dropdownOpen ? 'navbar--dropdown-open' : ''} ${light ? 'navbar--light' : ''} ${mobileOpen ? 'navbar--mobile-open' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-icon">
            <img src={bdgWave} alt="" className="navbar__logo-wave" />
            <img src={bdgCenter} alt="" className="navbar__logo-center" />
          </div>
          <img src={bdgText} alt="BDG" className="navbar__logo-text" />
        </Link>

        {/* Inline nav links (desktop) */}
        <div className="navbar__links">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.label}
                className="navbar__link-dropdown-wrap"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <span className="navbar__link navbar__link--has-dropdown">
                  {link.label} <span className="navbar__link-chevron">▾</span>
                </span>
                {/* Dropdown */}
                <div className={`navbar__dropdown ${dropdownOpen ? 'navbar__dropdown--open' : ''}`}>
                  <div className="navbar__dropdown-list">
                    {industries.map((industry) => (
                      <a href="#" key={industry.title} className="navbar__dropdown-item">
                        {industry.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : link.href.startsWith('/') ? (
              <Link key={link.label} to={link.href} className="navbar__link">
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className="navbar__link">
                {link.label}
              </a>
            )
          )}
        </div>

        <div className="navbar__right">
          {/* Hamburger button (mobile) */}
          <button
            className="navbar__hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="navbar__hamburger-line" />
            <span className="navbar__hamburger-line" />
            <span className="navbar__hamburger-line" />
          </button>
          <a href="/contact" className="navbar__cta" aria-label="Contact us">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="navbar__mobile-menu">
          {navLinks.filter(l => !l.hasDropdown).map((link) =>
            link.href.startsWith('/') ? (
              <Link key={link.label} to={link.href} className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>
                {link.label}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar
