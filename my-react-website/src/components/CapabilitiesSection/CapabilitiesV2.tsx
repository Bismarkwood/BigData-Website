import { Link } from 'react-router-dom'
import './CapabilitiesV2.css'

// Card images — save images to src/assets/capabilities/
import geospatialImg from '../../assets/hero/Geospatial.jpg'
import cloudImg from '../../assets/capabilities/big-data-data-cloud.webp'
import analyticsImg from '../../assets/capabilities/Data analytics and AI.png'
import biImg from '../../assets/capabilities/Business intelligence.jpg'
import dataAnalyticsImg from '../../assets/capabilities/Data analytics and AI.png'

interface CardData {
  title: string
  description: string
  image: string
  link?: string
}

const defaultCards: CardData[] = [
  {
    title: 'Geospatial intelligence',
    description: 'See further. Move faster. Invest smarter. BDG turns Ghana\'s geography into competitive intelligence.',
    image: geospatialImg,
    link: '/geospatial',
  },
  {
    title: 'Cloud and data platforms',
    description: 'Scale on infrastructure built for growth. We design, build and manage cloud and data platforms.',
    image: cloudImg,
    link: '/cloud-platforms',
  },
  {
    title: 'Data analytics and AI',
    description: 'Unlock the growth sitting in your data. BDG turns raw data into competitive decisions.',
    image: analyticsImg,
  },
  {
    title: 'Business intelligence',
    description: 'See everything. Act on what drives growth. Real-time visibility and faster decisions.',
    image: biImg,
  },
]

function CapabilitiesV2({ hideHeader = false, customCards }: { hideHeader?: boolean; customCards?: CardData[] }) {
  const cards = customCards || defaultCards
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

      <div className="capv2__grid">
        {cards.map((card, i) => (
          <div className="capv2__card" key={i}>
            {card.image ? (
              <img src={card.image} alt={card.title} className="capv2__card-img" />
            ) : (
              <div className="capv2__card-placeholder" />
            )}
            <div className="capv2__card-overlay" />
            <div className="capv2__card-content">
              <h3 className="capv2__card-title">{card.title}</h3>
              <p className="capv2__card-desc">{card.description}</p>
              {card.link ? (
                <Link to={card.link} className="capv2__card-link">
                  Explore {card.title} <span className="capv2__card-arrow">→</span>
                </Link>
              ) : (
                <a href="#" className="capv2__card-link">
                  Explore {card.title} <span className="capv2__card-arrow">→</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CapabilitiesV2
