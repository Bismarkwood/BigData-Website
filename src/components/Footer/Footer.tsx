import { Link } from 'react-router-dom'
import footerBg from '../../assets/Footer/footer.jpg'
import bdgWave from '../../assets/intro/bdg-wave.png'
import bdgCenter from '../../assets/intro/bdg-center-icon.png'
import './Footer.css'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

function Footer() {
  return (
    <footer className="footer">
      {/* Background image */}
      <div className="footer__bg" style={{ backgroundImage: `url(${footerBg})` }} />
      <div className="footer__overlay" />
      {/* Top: Brand + Nav */}
      <div className="footer__top">
        <div className="footer__brand">
          <div className="footer__brand-logo">
            <div className="footer__brand-icon">
              <img src={bdgWave} alt="" className="footer__brand-wave" />
              <img src={bdgCenter} alt="" className="footer__brand-center" />
            </div>
            <h2 className="footer__brand-name">BigData Ghana</h2>
          </div>
          <p className="footer__brand-tagline">YOU DECIDE BETTER WITH US</p>
        </div>
        <nav className="footer__nav">
          {navLinks.map((link) => (
            link.href.startsWith('/') ? (
              <Link key={link.label} to={link.href} className="footer__nav-link">
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className="footer__nav-link">
                {link.label}
              </a>
            )
          ))}
        </nav>
      </div>

      {/* Middle: Address | Socials | Contact */}
      <div className="footer__middle">
        <div className="footer__address">
          Accra, Ghana<br />
          West Africa
        </div>

        <div className="footer__socials">
          <a href="#" className="footer__social" aria-label="Facebook">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" className="footer__social" aria-label="X">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768M13.232 10.232L20 4"/></svg>
          </a>
          <a href="https://www.instagram.com/bigdataghana" className="footer__social" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/bigdata-ghana-limited/" className="footer__social" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
          </a>
        </div>

        <div className="footer__contact">
          <span>+233 (0) 302 123 456</span>
          <span>info@bigdataghana.com</span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
