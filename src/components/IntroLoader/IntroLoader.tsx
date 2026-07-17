import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import bdgWave from '../../assets/intro/bdg-wave.png'
import bdgCenterIcon from '../../assets/intro/bdg-center-icon.png'
import bdgText from '../../assets/intro/bdg-text.png'
import './IntroLoader.css'

// ──────────────────────────────────────────────
// CONFIGURATION
const FORCE_INTRO = true
const STORAGE_KEY = 'bdg_intro_seen'
// ──────────────────────────────────────────────

interface IntroLoaderProps {
  onComplete: () => void
}

function IntroLoader({ onComplete }: IntroLoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const waveRef = useRef<HTMLImageElement>(null)
  const centerIconRef = useRef<HTMLImageElement>(null)
  const textRef = useRef<HTMLImageElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const underlineRef = useRef<HTMLDivElement>(null)
  const logoWrapRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const panel1Ref = useRef<HTMLDivElement>(null)
  const panel2Ref = useRef<HTMLDivElement>(null)
  const panel3Ref = useRef<HTMLDivElement>(null)
  const panel4Ref = useRef<HTMLDivElement>(null)
  const [shouldShow, setShouldShow] = useState(true)

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (!FORCE_INTRO && localStorage.getItem(STORAGE_KEY) === 'true') {
      setShouldShow(false)
      onComplete()
      return
    }

    if (prefersReducedMotion) {
      const timer = setTimeout(() => {
        if (containerRef.current) containerRef.current.style.display = 'none'
        if (!FORCE_INTRO) localStorage.setItem(STORAGE_KEY, 'true')
        onComplete()
      }, 800)
      return () => clearTimeout(timer)
    }

    // Separate wave spin tween
    let waveSpin: gsap.core.Tween | null = null

    const tl = gsap.timeline({
      onComplete: () => {
        if (!FORCE_INTRO) localStorage.setItem(STORAGE_KEY, 'true')
        if (containerRef.current) containerRef.current.style.display = 'none'
        onComplete()
      },
    })

    // ─── INTRO ───

    // Glow
    tl.fromTo(
      glowRef.current,
      { opacity: 0, scale: 0.4 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' }
    )

    // Wave fade in
    tl.fromTo(
      waveRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    )

    // Start wave spin separately
    tl.add(() => {
      waveSpin = gsap.fromTo(
        waveRef.current,
        { rotate: -45, scale: 0.88 },
        { rotate: 330, scale: 1, duration: 4, ease: 'power1.inOut' }
      )
    })

    // Satellite fades in
    tl.fromTo(
      centerIconRef.current,
      { opacity: 0, scale: 0.6 },
      { opacity: 1, scale: 1, duration: 0.9, ease: 'power2.out' },
      '-=0.1'
    )

    // BDG text reveals
    tl.fromTo(
      textRef.current,
      { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
      { opacity: 1, clipPath: 'inset(0 0% 0 0)', duration: 1.2, ease: 'power3.inOut' },
      '-=0.4'
    )

    // Tagline — use set to make it visible first, then animate position
    tl.set(taglineRef.current, { opacity: 0, y: 18 })
    tl.to(
      taglineRef.current,
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '+=0.3'
    )

    // Underline
    tl.to(
      underlineRef.current,
      { scaleX: 1, opacity: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.4'
    )

    // Hold — let everything be visible
    tl.to({}, { duration: 1.0 })

    // ─── OUTRO ───

    // Kill wave spin and hide everything
    tl.add(() => {
      if (waveSpin) waveSpin.kill()
      // Force set wave opacity to current so it doesn't jump
      gsap.set(waveRef.current, { opacity: gsap.getProperty(waveRef.current, 'opacity') })
    })

    // Fade out entire content layer at once
    tl.to(
      contentRef.current,
      { opacity: 0, scale: 0.94, duration: 0.45, ease: 'power2.in' }
    )

    // Curtain panels
    const panelDuration = 1.25
    const panelEase = 'power4.inOut'

    tl.to(panel1Ref.current, { yPercent: -100, duration: panelDuration, ease: panelEase })
    tl.to(panel2Ref.current, { yPercent: 100, duration: panelDuration, ease: panelEase }, `-=${panelDuration - 0.1}`)
    tl.to(panel3Ref.current, { yPercent: -100, duration: panelDuration, ease: panelEase }, `-=${panelDuration - 0.1}`)
    tl.to(panel4Ref.current, { yPercent: 100, duration: panelDuration, ease: panelEase }, `-=${panelDuration - 0.1}`)

    return () => {
      tl.kill()
      if (waveSpin) waveSpin.kill()
    }
  }, [onComplete, prefersReducedMotion])

  if (!shouldShow) return null

  return (
    <div className="intro-loader" ref={containerRef} aria-live="polite" aria-label="Loading BDG website">
      {/* Curtain panels */}
      <div className="intro-loader__panels">
        <div className="intro-loader__panel" ref={panel1Ref} />
        <div className="intro-loader__panel" ref={panel2Ref} />
        <div className="intro-loader__panel" ref={panel3Ref} />
        <div className="intro-loader__panel" ref={panel4Ref} />
      </div>

      {/* Content layer — fades as one unit during outro */}
      <div className="intro-loader__content" ref={contentRef}>
        <div className="intro-loader__glow" ref={glowRef} />

        <div className="bdg-logo-intro" ref={logoWrapRef}>
          <div className="bdg-icon-wrap">
            <img ref={waveRef} src={bdgWave} alt="" className="bdg-wave" />
            <img ref={centerIconRef} src={bdgCenterIcon} alt="" className="bdg-satellite" />
          </div>
          <img ref={textRef} src={bdgText} alt="BDG" className="bdg-text" />
        </div>

        <p className="intro-loader__tagline" ref={taglineRef}>
          You Decide Better With Us
        </p>

        <div className="intro-loader__underline-track">
          <div className="intro-loader__underline" ref={underlineRef} />
        </div>
      </div>
    </div>
  )
}

export default IntroLoader
