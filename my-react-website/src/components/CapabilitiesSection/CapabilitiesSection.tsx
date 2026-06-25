import GeoVisual from './GeoVisual'
import CloudVisual from './CloudVisual'
import AnalyticsVisual from './AnalyticsVisual'
import BIVisual from './BIVisual'
import './CapabilitiesSection.css'

interface CardData {
  title: string
  description: string
  image: string
  visual?: string
}

const cards: CardData[] = [
  {
    title: 'Geospatial intelligence',
    description: 'See further. Move faster. Invest smarter. BDG turns Ghana\'s geography into competitive intelligence. Land, location, risk and opportunity, all visible before you commit.',
    image: '',
    visual: 'geo',
  },
  {
    title: 'Cloud and data platforms',
    description: 'Scale on infrastructure built for growth. BDG is an AWS Certified Partner. We design, build and manage cloud and data platforms for organisations that need to move fast, scale further and process more intelligence than their current systems allow.',
    image: '',
    visual: 'cloud',
  },
  {
    title: 'Data analytics and AI',
    description: 'Unlock the growth sitting in your data. Most organisations generate more intelligence than they use. BDG turns raw data into competitive decisions and manual workflows into automated systems that accelerate your team.',
    image: '',
    visual: 'analytics',
  },
  {
    title: 'Business intelligence',
    description: 'See everything. Act on what drives growth. BDG builds the business intelligence systems that give leadership real-time visibility, faster decisions and a clear view of where the next growth opportunity lives.',
    image: '',
    visual: 'bi',
  },
]

function CapabilitiesSection() {
  return (
    <section className="capabilities">
      <div className="capabilities__header">
        <h2 className="capabilities__heading">
          How we help you decide better
        </h2>
        <p className="capabilities__sub">
          Let's turn your most important decisions into your most confident ones. Concise on the homepage, the full operating narrative lives one click down.
        </p>
      </div>

      <div className="capabilities__grid">
        {cards.map((card, i) => (
          <div className="capabilities__card" key={i}>
            <div className="capabilities__card-visual">
              {card.visual === 'geo' ? (
                <GeoVisual />
              ) : card.visual === 'cloud' ? (
                <CloudVisual />
              ) : card.visual === 'analytics' ? (
                <AnalyticsVisual />
              ) : card.visual === 'bi' ? (
                <BIVisual />
              ) : (
                <div className="capabilities__card-placeholder">
                  <div className="capabilities__card-placeholder-inner" />
                </div>
              )}
            </div>
            <div className="capabilities__card-content">
              <h3 className="capabilities__card-title">{card.title}</h3>
              <p className="capabilities__card-desc">{card.description}</p>
              <a href="#" className="capabilities__card-cta">
                Explore {card.title} <span className="capabilities__card-cta-arrow">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CapabilitiesSection
