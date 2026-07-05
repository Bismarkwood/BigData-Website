import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import InsightsSection from '../../components/InsightsSection'
import JoinCta from '../../components/JoinCta'
import SEO from '../../components/SEO'
import insightHeroImg from '../../assets/Insight/Screenshot_2026-07-02_075619.jpg'
import './Insights.css'

const filters = ['All', 'Blog', 'Insights', 'Whitepapers']

function Insights() {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <main>
      <SEO
        title="Insights | BigData Ghana — Ghana Through A Data Lens"
        description="Insights on land, climate risk, urban growth, agriculture, infrastructure, AI, cloud and the decisions shaping Ghana's future. Research and analysis from BigData Ghana."
        path="/insights"
      />
      <Navbar light />
      <section className="insights-hero">
        <div className="insights-hero__top">
          <div className="insights-hero__left">
            <h1 className="insights-hero__title">
              <span>Ghana Through</span>
              <span>A Data Lens</span>
            </h1>
          </div>
          <div className="insights-hero__right">
            <p className="insights-hero__sub">
              Insights on land, climate risk, urban growth, agriculture, infrastructure, AI, cloud and the decisions shaping Ghana's future. Authority is built through what BDG publishes, not what BDG claims.
            </p>
          </div>
        </div>

        {/* Featured highlight card */}
        <div className="insights-hero__featured">
          <div className="insights-hero__featured-text">
            <span className="insights-hero__featured-badge">HIGHLIGHT</span>
            <span className="insights-hero__featured-date">JULY 2026</span>
            <h2 className="insights-hero__featured-title">
              Research: The hidden geography of Ghana's investment risk.
            </h2>
          </div>
          <div className="insights-hero__featured-image">
            <img src={insightHeroImg} alt="Featured insight" />
          </div>
        </div>
      </section>

      {/* Filter tags */}
      <div className="insights-hero__filters">
        <div className="insights-hero__search-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
          </svg>
        </div>
        {filters.map((filter) => (
          <button
            key={filter}
            className={`insights-hero__filter-btn ${activeFilter === filter ? 'insights-hero__filter-btn--active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <InsightsSection activeFilter={activeFilter} />
      <JoinCta />
      <Footer />
    </main>
  )
}

export default Insights
