import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import locationImg from '../../assets/What we help/Location decisions.png'
import riskImg from '../../assets/What we help/Risk Descision.png'
import operationalImg from '../../assets/What we help/Operational decisions.png'
import './DiscoverSection.css'

gsap.registerPlugin(ScrollTrigger)

interface HelpCard {
  title: string
  description: string
  image: string
}

const helpCards: HelpCard[] = [
  {
    title: 'Location decisions',
    description: 'Know where to build, invest, expand or operate.',
    image: locationImg,
  },
  {
    title: 'Risk decisions',
    description: 'Identify climate, infrastructure, portfolio and operational risks before they become costly.',
    image: riskImg,
  },
  {
    title: 'Operational decisions',
    description: 'Use cloud, AI, data platforms and analytics to improve visibility, efficiency and performance.',
    image: operationalImg,
  },
  {
    title: 'Investment decisions',
    description: 'Commit capital with greater confidence and less uncertainty.',
    image: '',
  },
]

function DiscoverSection() {
  const cardsWrapRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<ScrollTrigger | null>(null)

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (prefersReducedMotion || !cardsWrapRef.current) return

    const cards = gsap.utils.toArray<HTMLElement>('.discover__card')
    if (cards.length < 2) return

    // Stack cards: first visible, rest below
    cards.forEach((card, i) => {
      gsap.set(card, { zIndex: i + 1, yPercent: i === 0 ? 0 : 100 })
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardsWrapRef.current,
        start: 'top top',
        end: `+=${(cards.length - 1) * 200}vh`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
      },
    })

    // Simple: each card slides up to cover the previous — no other effects
    cards.slice(1).forEach((card) => {
      tl.to(card, { yPercent: 0, duration: 1, ease: 'none' })
    })

    triggerRef.current = tl.scrollTrigger as ScrollTrigger

    return () => {
      if (triggerRef.current) triggerRef.current.kill()
      tl.kill()
    }
  }, [prefersReducedMotion])

  return (
    <>
      {/* Header — scrolls normally */}
      <section className="discover-header">
        <h2 className="discover-header__heading">
          What we help<br />you do
        </h2>
        <p className="discover-header__sub">
          Whether you are choosing where to build, assessing risk, improving operations or planning growth, BDG turns complex data into insight you can act on.
        </p>
      </section>

      {/* Cards — pins at top, simple overlay */}
      <div className="discover-cards" ref={cardsWrapRef}>
        {helpCards.map((card, i) => (
          <div className="discover__card" key={i}>
            <div className="discover__card-inner">
              <div className="discover__card-image-wrap">
                {card.image ? (
                  <img src={card.image} alt={card.title} className="discover__card-image" />
                ) : (
                  <div className="discover__card-image-placeholder" />
                )}
                <div className="discover__card-image-overlay" />
                <h3 className="discover__card-title">{card.title}</h3>
              </div>
              <div className="discover__card-content">
                <p className="discover__card-desc">{card.description}</p>
                <span className="discover__card-number">
                  {String(i + 1).padStart(2, '0')} / {String(helpCards.length).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default DiscoverSection
