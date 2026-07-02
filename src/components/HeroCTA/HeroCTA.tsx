import { Link, useNavigate } from 'react-router-dom'
import './HeroCTA.css'

interface HeroCTAProps {
  text?: string
  href?: string
}

function HeroCTA({ text = 'Explore Our Work', href = '#work' }: HeroCTAProps) {
  const navigate = useNavigate()
  const isInternal = href.startsWith('/')

  const content = (
    <>
      <span className="hero-cta-text">{text}</span>
      <span className="hero-cta-circle">
        <span className="hero-cta-arrow">&#8599;</span>
      </span>
    </>
  )

  if (isInternal) {
    return (
      <button
        type="button"
        className="hero-cta"
        onClick={() => navigate(href)}
      >
        {content}
      </button>
    )
  }

  return (
    <a href={href} className="hero-cta">
      {content}
    </a>
  )
}

export default HeroCTA
