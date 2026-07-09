import { Link } from 'react-router-dom'
import card3Img from '../../assets/Our Solutions/BigConnectAI/BigConnect AI.png'
import sendlineImg from '../../assets/Our Solutions/Sendlinesms/SendlineSMS logo.png'
import maizeImg from '../../assets/Our Solutions/Maize Intelligence/maizeYield.png'
import './ProofProjects.css'

function ProofProjects() {
  const projects = [
    { title: 'Sendline SMS', tag: 'Product', image: sendlineImg, slug: 'sendline-sms' },
    { title: 'BigConnect AI', tag: 'Product', image: card3Img, slug: 'real-time-logistics-optimisation' },
    { title: 'Maize Intelligence', tag: 'Product', image: maizeImg, slug: 'maize-intelligence' },
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
