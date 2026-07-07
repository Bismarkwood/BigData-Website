/* eslint-disable react-hooks/purity, react-hooks/immutability, react-hooks/set-state-in-effect */
import { useEffect, useRef, useState, useCallback } from 'react'
import HeroCTA from '../HeroCTA'
import ParticleCircle from '../ParticleCircle'
import heroSlides from './heroSlides'
import ecursLogo from '../../assets/Aws Partner logo/ECURS.png'
import odooLogo from '../../assets/Aws Partner logo/odoo_ready_partners_rgb.png'
import awsLogo from '../../assets/Aws Partner logo/AWS-Partner-transparent.webp'
import usaidLogo from '../../assets/Client Logos/USAID Logo.png'
import parliamentLogo from '../../assets/Client Logos/Parliament of ghana.png'
import gizLogo from '../../assets/Client Logos/GIZ.png'
import deaLogo from '../../assets/Client Logos/Digital Earth Africa.png'
import acadamicCityLogo from '../../assets/Aws Partner logo/Acadamic City.png'
import apiTechLogo from '../../assets/Aws Partner logo/API technologies.png'
import agbedusLogo from '../../assets/Aws Partner logo/Agbedus Consult.png'
import './HeroScrollSection.css'

function HeroScrollSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const progressRef = useRef<SVGCircleElement>(null)
  const timerRef = useRef<number>(0)
  const startTimeRef = useRef<number>(0)

  const circleRadius = 52
  const circumference = 2 * Math.PI * circleRadius
  const slideDuration = 5000

  const animateProgress = useCallback((timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp
    const elapsed = timestamp - startTimeRef.current
    const progress = Math.min(elapsed / slideDuration, 1)

    if (progressRef.current) {
      const offset = circumference - (progress * circumference)
      progressRef.current.style.strokeDashoffset = `${offset}`
    }

    if (progress < 1) {
      timerRef.current = requestAnimationFrame(animateProgress)
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveIndex((prev) => (prev + 1) % heroSlides.length)
      startTimeRef.current = 0
      timerRef.current = requestAnimationFrame(animateProgress)
    }
  }, [circumference])

  useEffect(() => {
    startTimeRef.current = 0
    timerRef.current = requestAnimationFrame(animateProgress)
    return () => { cancelAnimationFrame(timerRef.current) }
  }, [animateProgress])

  return (
    <div className="hero-scroll">
      {/* Background images — auto cycle */}
      <div className="hero-scroll__bg-layers">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`hero-scroll__bg-layer ${i === activeIndex ? 'active' : ''}`}
          >
            <div
              className="hero-scroll__bg-img"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            />
          </div>
        ))}
        <div className="hero-scroll__overlay" />
      </div>

      {/* Center circle with progress ring */}
      <div className="hero-scroll__circle-wrap">
        <svg className="hero-scroll__progress-ring" viewBox="0 0 108 108">
          <circle
            cx="54"
            cy="54"
            r={circleRadius}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="0.4"
          />
          <circle
            ref={progressRef}
            cx="54"
            cy="54"
            r={circleRadius}
            fill="none"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            className="hero-scroll__progress-stroke"
          />
        </svg>
        <div className="hero-scroll__circle">
          {heroSlides.map((slide, i) => (
            <img
              key={i}
              src={slide.circleImage}
              alt=""
              className={`hero-scroll__circle-img ${i === activeIndex ? 'active' : ''}`}
            />
          ))}
          <ParticleCircle />
        </div>
      </div>

      {/* Content — stays the same */}
      <div className="hero-scroll__content">
        <div className="hero-scroll__left">
          <h1 className="hero-scroll__title">
            You Decide Better With Us
          </h1>
          <p className="hero-scroll__desc">
            Big Data Ghana is a technology company that leverages geospatial intelligence to help you plan, develop, invest and execute with confidence.
          </p>
          <div className="hero-scroll__cta-wrap">
            <HeroCTA />
          </div>
        </div>
      </div>

      {/* Floating Bar with Black Glass Transparent BG */}
      <div className="hero-scroll__floating-bar">
        <span className="hero-scroll__floating-title">Trusted by</span>
        <div className="hero-scroll__floating-divider" />
        <div className="hero-scroll__floating-logos">
          <img src={awsLogo} alt="AWS" />
          <img src={odooLogo} alt="Odoo" />
          <img src={ecursLogo} alt="ECURS" />
          <img src={acadamicCityLogo} alt="Academic City" />
          <img src={apiTechLogo} alt="API Technologies" />
          <img src={agbedusLogo} alt="Agbedus Consult" />
        </div>
      </div>
    </div>
  )
}

export default HeroScrollSection
