import { useState } from 'react'
import { Link } from 'react-router-dom'
import card1Img from '../../assets/Proof/card-1.jpg'
import card2Img from '../../assets/Proof/card-2.jpg'
import card3Img from '../../assets/Proof/Card-3.png'
import card4Img from '../../assets/Proof/Card-4.jpg'
import card5Img from '../../assets/Proof/card-5.jpg'
import sendlineImg from '../../assets/Proof/SendilineSMS/sendlinesms product card.png'
import './ProofProjects.css'

const tabs = ['All', 'Our Products', 'Project']

function ProofProjects() {
  const [activeTab, setActiveTab] = useState('All')

  const projects = [
    { title: 'National Flood Intelligence Platform', tag: 'Product', image: card1Img, slug: 'national-flood-intelligence-platform' },
    { title: 'National Forest Monitoring System', tag: 'Product', image: card2Img, slug: 'agricultural-yield-prediction-system' },
    { title: 'BigConnect AI', tag: 'Project', image: card3Img, slug: 'real-time-logistics-optimisation' },
    { title: 'Spatial Data Infrastructure for MLNR', tag: 'Project', image: card4Img, slug: 'spatial-data-infrastructure-for-mlnr' },
    { title: 'Data Analysis for Indomie', tag: 'Product', image: card5Img, slug: 'climate-risk-assessment-tool' },
    { title: 'Geospatial Land Registry Platform', tag: 'Project', image: card1Img, slug: 'national-flood-intelligence-platform' },
    { title: 'Sendline SMS', tag: 'Product', image: sendlineImg, slug: 'sendline-sms' },
  ]

  return (
    <section className="proof-projects">
      {/* Header row */}
      <div className="proof-projects__header">
        <div className="proof-projects__toggle">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`proof-projects__tab ${activeTab === tab ? 'proof-projects__tab--active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <h2 className="proof-projects__title">Projects</h2>
        <div className="proof-projects__spacer" />
      </div>

      {/* Content area - project cards */}
      <div className="proof-projects__content">
        <div className="proof-projects__grid">
          {projects
            .filter((item) => activeTab === 'All' || (activeTab === 'Our Products' && item.tag === 'Product') || (activeTab === 'Project' && item.tag === 'Project'))
            .map((item, i) => (
              <Link to={`/proof/${item.slug}`} className="proof-projects__card" key={i}>
                <div className="proof-projects__card-img">
                  <img src={item.image} alt={item.title} className="proof-projects__card-image" />
                  <div className="proof-projects__card-overlay" />
                </div>
                <div className="proof-projects__card-info">
                  <span className="proof-projects__card-tag">{item.title}</span>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  )
}

export default ProofProjects
