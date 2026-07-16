import locationImg from '../../assets/What we help/Location decisions.png'
import riskImg from '../../assets/What we help/Risk Descision.png'
import operationalImg from '../../assets/What we help/Operational decisions.png'
import investmentImg from '../../assets/What we help/Investment Decisions.jpg'
import './DiscoverSection.css'

const steps = [
  {
    tag: 'LOCATION DECISIONS',
    icon: '📍',
    title: 'Location decisions',
    description: 'Know where to build, invest, expand or operate.',
    image: locationImg,
    num: '001',
  },
  {
    tag: 'RISK DECISIONS',
    icon: '⚠️',
    title: 'Risk decisions',
    description: 'Identify climate, infrastructure, portfolio and operational risks before they become costly.',
    image: riskImg,
    num: '002',
  },
  {
    tag: 'OPERATIONAL DECISIONS',
    icon: '⚙️',
    title: 'Operational decisions',
    description: 'Use cloud, AI, data platforms and analytics to improve visibility, efficiency and performance.',
    image: operationalImg,
    num: '003',
  },
  {
    tag: 'INVESTMENT DECISIONS',
    icon: '📈',
    title: 'Investment decisions',
    description: 'Commit capital with greater confidence and less uncertainty.',
    image: investmentImg,
    num: '004',
  },
]

function DiscoverSection() {
  return (
    <section className="discover">
      {/* Header */}
      <div className="discover__header">
        <h2 className="discover__heading">What we help<br />you do</h2>
        <p className="discover__sub">
          Whether you are choosing where to build, assessing risk, improving operations or planning growth — BDG turns complex data into insight you can act on.
        </p>
      </div>

      {/* Bottom cards */}
      <div className="discover__cards">
        {steps.map((step, i) => (
          <div className="discover__card" key={i}>
            <img src={step.image} alt={step.title} className="discover__card-bg" />
            <div className="discover__card-overlay" />
            <div className="discover__card-content">
              <h3 className="discover__card-title">{step.title}</h3>
              <p className="discover__card-desc">{step.description}</p>
              <a href="/services" className="discover__card-btn-primary">Learn More →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DiscoverSection
