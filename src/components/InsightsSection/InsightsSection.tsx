import { useRef } from 'react'
import insightCard1 from '../../assets/Insight/Screenshot_2026-07-02_075619.jpg'
import insightCard2 from '../../assets/Insight/Card 2.jpg'
import insightCard3 from '../../assets/Insight/Card 3.jpg'
import insightCard4 from '../../assets/Insight/Card 4.jpg'
import insightCard5 from '../../assets/Insight/Card 5.jpg'
import './InsightsSection.css'

const insights = [
  {
    tag: 'Geospatial · Real estate',
    category: 'Insights',
    title: 'The hidden geography of Ghana\'s investment risk',
    description: 'The land Ghana\'s private sector is betting on is not always the land it thinks it is buying. How spatial blind spots cost developers and investors across Accra\'s fastest-growing corridors.',
    image: insightCard1,
    slug: 'hidden-geography-ghana-investment-risk',
  },
  {
    tag: 'Banking · Climate risk',
    category: 'Whitepapers',
    title: 'Your loan portfolio has a geography. Most banks do not know what it is.',
    description: 'The Bank of Ghana Climate Related Financial Risk Directive is active. The spatial data that satisfies it does not exist inside any bank\'s current risk system. This is the gap in numbers.',
    image: insightCard2,
    slug: 'loan-portfolio-geography',
  },
  {
    tag: 'Agriculture · Data',
    category: 'Blog',
    title: 'The yield gap: why Ghana\'s agricultural investments underperform',
    description: 'Most agricultural investment is made without a single spatial data point on the specific land. The gap between projected and actual yield is almost always an information gap.',
    image: insightCard5,
    slug: 'yield-gap-agricultural-investments',
  },
  {
    tag: 'Urban growth · Logistics',
    category: 'Insights',
    title: 'Where Accra is growing next',
    description: 'Eight years of spatial data reveals the corridors where commercial density is accelerating fastest. The businesses that get there first are reading the geography, not guessing.',
    image: insightCard4,
    slug: 'where-accra-growing-next',
  },
  {
    tag: 'AI · Competitive intelligence',
    category: 'Blog',
    title: 'The data-driven organisations quietly winning in Ghana',
    description: 'They are not doing anything complicated. They just know something their competitors do not, and the gap is widening.',
    image: insightCard3,
    slug: 'data-driven-organisations-winning-ghana',
  },
]

interface InsightsSectionProps {
  activeFilter?: string
}

function InsightsSection({ activeFilter = 'All' }: InsightsSectionProps) {
  const trackRef = useRef<HTMLDivElement>(null)

  const filteredInsights = activeFilter === 'All'
    ? insights
    : insights.filter((item) => item.category === activeFilter)

  const scroll = (direction: 'left' | 'right') => {
    if (!trackRef.current) return
    const cardWidth = trackRef.current.querySelector('.insights__card')?.clientWidth || 280
    const scrollAmount = cardWidth + 24
    trackRef.current.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="insights">
      {/* Header */}
      <div className="insights__section-header">
        <h2 className="insights__section-title">Insights</h2>
        <p className="insights__section-sub">Perspectives on geospatial intelligence, data platforms, and the decisions shaping Ghana's future.</p>
      </div>

      {/* Scrollable cards track */}
      <div className="insights__track" ref={trackRef}>
        {filteredInsights.map((item, i) => (
          <div className="insights__card" key={i}>
            <div className="insights__card-img-wrap">
              {item.image ? (
                <img src={item.image} alt={item.title} className="insights__card-img" />
              ) : (
                <div className="insights__card-placeholder" />
              )}
            </div>
            {item.tag && <span className="insights__card-tag">{item.tag}</span>}
            {item.title && <h3 className="insights__card-title">{item.title}</h3>}
            {item.description && <p className="insights__card-desc">{item.description}</p>}
            <a href={`/insights/${item.slug}`} className="insights__card-cta">
              Read more <span className="insights__card-cta-arrow">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default InsightsSection
