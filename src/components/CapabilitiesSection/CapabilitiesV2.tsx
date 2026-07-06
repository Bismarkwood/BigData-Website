import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import './CapabilitiesV2.css'

// Card images
import geospatialImg from '../../assets/hero/Geospatial.jpg'
import awsComputingImg from '../../assets/Service Page/New folder/AWS Computing.jpg'
import analyticsImg from '../../assets/capabilities/Data analytics and AI.png'
import biImg from '../../assets/capabilities/Business intelligence.jpg'

interface CardData {
  title: string
  description: string
  image: string
  link?: string
  tag?: string
}

const defaultCards: CardData[] = [
  {
    tag: 'Geospatial · Location',
    title: 'Geospatial intelligence',
    description: 'See further. Move faster. Invest smarter. BDG turns Ghana\'s geography into competitive intelligence.',
    image: geospatialImg,
    link: '/geospatial',
  },
  {
    tag: 'Cloud · AWS',
    title: 'Cloud and data platforms',
    description: 'Scale on infrastructure built for growth. We design, build and manage cloud and data platforms.',
    image: awsComputingImg,
    link: '/cloud-platforms',
  },
  {
    tag: 'AI · Automation',
    title: 'Data analytics and AI',
    description: 'Unlock the growth sitting in your data. BDG turns raw data into competitive decisions.',
    image: analyticsImg,
  },
  {
    tag: 'BI · Dashboards',
    title: 'Business intelligence',
    description: 'See everything. Act on what drives growth. Real-time visibility and faster decisions.',
    image: biImg,
  },
]

function CapabilitiesV2({ hideHeader = false, customCards }: { hideHeader?: boolean; customCards?: CardData[] }) {
  const cards = customCards || defaultCards
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('capv2__card--visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    grid.querySelectorAll('.capv2__card').forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [cards])

  return (
    <section className="capv2">
      {!hideHeader && (
        <div className="capv2__header">
          <h2 className="capv2__heading">
            How we help you decide better
          </h2>
          <p className="capv2__sub">
            Let's turn your most important decisions into your most confident ones. Concise on the homepage, the full operating narrative lives one click down.
          </p>
        </div>
      )}

      <div className="capv2__grid" ref={gridRef}>
        {cards.map((card, i) => (
          <div className="capv2__card" key={i}>
            <div className="capv2__card-img-wrap">
              {card.image ? (
                <img src={card.image} alt={card.title} className="capv2__card-img" />
              ) : (
                <div className="capv2__card-placeholder" />
              )}
            </div>
            {card.tag && <span className="capv2__card-tag">{card.tag}</span>}
            <h3 className="capv2__card-title">{card.title}</h3>
            <p className="capv2__card-desc">{card.description}</p>
            {card.link ? (
              <Link to={card.link} className="capv2__card-cta">
                Read more <span className="capv2__card-cta-arrow">→</span>
              </Link>
            ) : (
              <a href="#" className="capv2__card-cta">
                Read more <span className="capv2__card-cta-arrow">→</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default CapabilitiesV2
