import { Link } from 'react-router-dom'
import './ProofProjects.css'

function ProofProjects() {
  const projects = [
    { title: 'ForestTrace AI Ghana', tag: 'Project', image: '', slug: 'foresttrace-ai-ghana' },
    { title: 'Vehicle Traffic Enforcement Application for Ghana Police Service MTTD', tag: 'Project', image: '', slug: 'vehicle-traffic-enforcement' },
    { title: 'GIS/RS Solution in Elections', tag: 'Project', image: '', slug: 'gis-rs-solution-elections' },
    { title: 'Development of ERP', tag: 'Project', image: '', slug: 'development-of-erp' },
    { title: 'Data Analysis for Indomie', tag: 'Project', image: '', slug: 'climate-risk-assessment-tool' },
    { title: 'National Forest Monitoring System', tag: 'Project', image: '', slug: 'agricultural-yield-prediction-system' },
    { title: 'Remote Sensing Based Ghana Agriculture Information Management System (GAIMS)', tag: 'Project', image: '', slug: 'gaims' },
    { title: 'Ghana Electronic Mapping and Monitoring System for Project M&E', tag: 'Project', image: '', slug: 'electronic-mapping-monitoring' },
    { title: 'Route Advisor', tag: 'Project', image: '', slug: 'route-advisor' },
  ]

  return (
    <section className="proof-projects">
      {/* Header row */}
      <div className="proof-projects__header">
        <h2 className="proof-projects__title">Our Projects</h2>
      </div>

      {/* Content area - project cards */}
      <div className="proof-projects__content">
        <div className="proof-projects__grid">
          {projects.map((item, i) => (
            <Link to={`/proof/${item.slug}`} className="proof-projects__card" key={i}>
              <div className="proof-projects__card-img">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="proof-projects__card-image" />
                ) : (
                  <div className="proof-projects__card-placeholder" />
                )}
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
