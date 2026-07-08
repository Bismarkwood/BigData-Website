import { useState } from 'react'
import { Link } from 'react-router-dom'
import card1Img from '../../assets/Proof/card-1.jpg'
import card2Img from '../../assets/Proof/card-2.jpg'
import card3Img from '../../assets/Proof/Card-3.png'
import card5Img from '../../assets/Proof/card-5.jpg'
import mlnrImg from '../../assets/Proof/Forest Trace AI/MLNR Spatial Platform.png'
import sendlineImg from '../../assets/Our Solutions/Sendlinesms/SendlineSMS logo.png'
import './ProofProjects.css'

const tabs = ['All', 'Our Products', 'Project']

function ProofProjects() {
  const [activeTab, setActiveTab] = useState('All')

  const projects = [
    { title: 'Sendline SMS', tag: 'Product', image: sendlineImg, slug: 'sendline-sms' },
    { title: 'BigConnect AI', tag: 'Product', image: card3Img, slug: 'real-time-logistics-optimisation' },
    { title: 'Spatial Data Infrastructure for MLNR', tag: 'Project', image: mlnrImg, slug: 'spatial-data-infrastructure-for-mlnr' },
  ]

  return (
    <section className="proof-projects">
      {/* Header row */}
      <div className="proof-projects__header">
        <h2 className="proof-projects__title">Our Products</h2>
      </div>

      {/* Content area - project cards */}
      <div className="proof-projects__content">
        <div className="proof-projects__grid">
          {projects
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
