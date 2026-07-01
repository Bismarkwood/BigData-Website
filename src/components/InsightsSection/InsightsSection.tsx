import { useRef } from 'react'
import './InsightsSection.css'

const insights = [
  {
    tag: 'Geospatial · Real estate',
    title: 'The hidden geography of Ghana\'s investment risk',
    description: 'The land Ghana\'s private sector is betting on is not always the land it thinks it is buying. How spatial blind spots cost developers and investors across Accra\'s fastest-growing corridors.',
    image: '',
  },
  {
    tag: 'Banking · Climate risk',
    title: 'Your loan portfolio has a geography. Most banks do not know what it is.',
    description: 'The Bank of Ghana Climate Related Financial Risk Directive is active. The spatial data that satisfies it does not exist inside any bank\'s current risk system. This is the gap in numbers.',
    image: '',
  },
  {
    tag: 'Agriculture · Data',
    title: 'The yield gap: why Ghana\'s agricultural investments underperform',
    description: 'Most agricultural investment is made without a single spatial data point on the specific land. The gap between projected and actual yield is almost always an information gap.',
    image: '',
  },
  {
    tag: 'Urban growth · Logistics',
    title: 'Where Accra is growing next',
    description: 'Eight years of spatial data reveals the corridors where commercial density is accelerating fastest. The businesses that get there first are reading the geography, not guessing.',
    image: '',
  },
  {
    tag: 'AI · Competitive intelligence',
    title: 'The data-driven organisations quietly winning in Ghana',
    description: 'They are not doing anything complicated. They just know something their competitors do not, and the gap is widening.',
    image: '',
  },
]

function InsightsSection() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!trackRef.current) return
    const cardWidth = trackRef.current.querySelector('.insights__card')?.clientWidth || 280
    const scrollAmount = cardWidth + 24 // card width + gap
    trackRef.current.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="insights">
      {/* Header with arrows */}
      <div className="insights__header">
        <h2 className="insights__heading">Insights</h2>
        <div className="insights__nav">
          <button
            className="insights__nav-btn"
            onClick={() => scroll('left')}
            aria-label="Previous"
          >
            ←
          </button>
          <button
            className="insights__nav-btn"
            onClick={() => scroll('right')}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>

      {/* Scrollable cards track */}
      <div className="insights__track" ref={trackRef}>
        {insights.map((item, i) => (
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
            <a href="#" className="insights__card-cta">
              Read more <span className="insights__card-cta-arrow">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default InsightsSection
