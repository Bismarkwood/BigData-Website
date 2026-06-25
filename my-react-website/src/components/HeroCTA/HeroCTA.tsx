import './HeroCTA.css'

interface HeroCTAProps {
  text?: string
  href?: string
}

function HeroCTA({ text = 'Explore Our Work', href = '#work' }: HeroCTAProps) {
  return (
    <a href={href} className="hero-cta">
      <span className="hero-cta-text">{text}</span>
      <span className="hero-cta-circle">
        <span className="hero-cta-arrow">&#8599;</span>
      </span>
    </a>
  )
}

export default HeroCTA
