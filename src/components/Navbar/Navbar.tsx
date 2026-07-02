import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import bdgWave from '../../assets/intro/bdg-wave.png'
import bdgCenter from '../../assets/intro/bdg-center-icon.png'
import bdgText from '../../assets/intro/bdg-text.png'
import geospatialImg from '../../assets/hero/Geospatial.jpg'
import cloudImg from '../../assets/capabilities/big-data-data-cloud.webp'
import analyticsImg from '../../assets/capabilities/Data analytics and AI.png'
import biImg from '../../assets/capabilities/Business intelligence.jpg'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/proof' },
  { label: 'Industries', href: '#industries', hasDropdown: true },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
]

const industries = [
  { title: 'Agriculture', desc: 'Data-driven agriculture intelligence', image: geospatialImg },
  { title: 'Finance', desc: 'Transform financial services with spatial insights', image: cloudImg },
  { title: 'Real Estate', desc: 'Location intelligence for investment decisions', image: analyticsImg },
  { title: 'Government', desc: 'National-scale spatial platforms', image: biImg },
  { title: 'Logistics', desc: 'Route optimisation and fleet intelligence', image: geospatialImg },
  { title: 'Insurance', desc: 'Climate risk and asset exposure analytics', image: cloudImg },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${dropdownOpen ? 'navbar--dropdown-open' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-icon">
            <img src={bdgWave} alt="" className="navbar__logo-wave" />
            <img src={bdgCenter} alt="" className="navbar__logo-center" />
          </div>
          <img src={bdgText} alt="BDG" className="navbar__logo-text" />
        </Link>

        {/* Inline nav links */}
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
                  <div className="navbar__dropdown-grid">
                    {industries.map((industry) => (
                      <a href="#" key={industry.title} className="navbar__dropdown-card">
                        <div className="navbar__dropdown-card-img">
                          <img src={industry.image} alt={industry.title} />
                        </div>
                        <div className="navbar__dropdown-card-text">
                          <span className="navbar__dropdown-card-title">{industry.title}</span>
                          <span className="navbar__dropdown-card-desc">{industry.desc}</span>
                        </div>
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
          <a href="#contact" className="navbar__cta" aria-label="Contact us">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
