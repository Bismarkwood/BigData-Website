import { useEffect, useRef } from 'react'
import HeroCTA from '../HeroCTA'
import whyBdgBg from '../../assets/Why Big Data Ghana.jpg'
import './CtaBanner.css'

function CtaBanner() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const bg = bgRef.current
    const content = contentRef.current
    if (!section || !bg || !content) return

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const windowH = window.innerHeight
      // How far through the viewport the section is (0 = just entering, 1 = fully passed)
      const progress = 1 - rect.top / windowH

      if (progress > 0 && progress < 2) {
        // Parallax: background moves slower than scroll
        const bgOffset = (progress - 0.5) * 80
        bg.style.transform = `translate3d(0, ${bgOffset}px, 0) scale(1.15)`

        // Content fades in and slides up
        const contentProgress = Math.min(Math.max((progress - 0.3) / 0.7, 0), 1)
        const ease = contentProgress * contentProgress * (3 - 2 * contentProgress) // smoothstep
        content.style.opacity = `${ease}`
        content.style.transform = `translate3d(0, ${(1 - ease) * 40}px, 0)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // initial position
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="cta-banner" ref={sectionRef}>
      {/* Background image with parallax */}
      <div
        className="cta-banner__bg"
        ref={bgRef}
        style={{ backgroundImage: `url(${whyBdgBg})` }}
      />
      <div className="cta-banner__overlay" />

      <div className="cta-banner__content" ref={contentRef}>
        <h2 className="cta-banner__heading">
          Why Big Data Ghana
        </h2>
        <p className="cta-banner__sub">
          Built for Ghana. Trusted by decision-makers.
        </p>
        <p className="cta-banner__desc">
          For over eight years BDG has turned geography, infrastructure, climate and operational data into decision-ready intelligence, from flood modelling and yield prediction to real-time logistics and national-scale spatial platforms. We help clients see what others miss.
        </p>
        <HeroCTA text="About Us" href="/about" />
      </div>
    </section>
  )
}

export default CtaBanner
