import { Link } from 'react-router-dom'
import forestTraceImg from '../../assets/Proof/Forest Trace AI/Forest Trace cover page.png'
import trafficImg from '../../assets/Proof/Development of VEHICLE TRAFFIC ENFORCEMENT Application for Ghana Police Service MTTD/Traffic Tech.png'
import electionsImg from '../../assets/AI and Automation/GIS-RS Solution IN ELECTIONs.png'
import nfmsImg from '../../assets/AI and Automation/Development of National Forest Monitoring System.png'
import indomieImg from '../../assets/Our Projects/Indomie/Indomie.png'
import erpImg from '../../assets/Our Projects/Development of ERP/Development of ERP.png'
import mappingImg from '../../assets/Our Projects/Ghana Electronic Mapping and Monitoring System for Project M&E duties/Ghana Electronic Mapping and Monitoring System for Project M&E duties.png'
import constituencyImg from '../../assets/Our Projects/Production of Regional and Constituency Maps and other Data Services/Production of Regional and Constituency Maps and other Data Services.png'
import sciledImg from '../../assets/Our Projects/Standardizing City-Level Data-Gathering (SCiLeD)/Standardizing City-Level Data-Gathering (SCiLeD).png'
import esicomeImg from '../../assets/Our Projects/Customization of Mobile and Web-based GIS App for Expanded Sanitary Inspections, Compliance Management and Enforcement (ESICOME)/ESICOME.png'
import gushieguImg from '../../assets/Our Projects/Digital Mapping Verification for Gushiegu District of the Northern Region/Digital Mapping Verification for Gushiegu District of the Northern Region.png'
import routeAdvisorImg from '../../assets/Our Projects/Route Advisor/Route Advisor.png'
import './ProofProjects.css'

function ProofProjects() {
  const projects = [
    { title: 'ForestTrace AI Ghana', tag: 'Project', image: forestTraceImg, slug: 'foresttrace-ai-ghana', link: '/projects/foresttrace-ai' },
    { title: 'Vehicle Traffic Enforcement Application for Ghana Police Service MTTD', tag: 'Project', image: trafficImg, slug: 'vehicle-traffic-enforcement', link: '/projects/vehicle-traffic-enforcement' },
    { title: 'GIS/RS Solution in Elections', tag: 'Project', image: electionsImg, slug: 'gis-rs-solution-elections', link: '/projects/gis-rs-solution-elections' },
    { title: 'Development of ERP for Petroleum Downstream', tag: 'Project', image: erpImg, slug: 'development-of-erp' },
    { title: 'Data Analysis for Indomie', tag: 'Project', image: indomieImg, slug: 'climate-risk-assessment-tool', link: '/projects/climate-risk-assessment-tool' },
    { title: 'National Forest Monitoring System', tag: 'Project', image: nfmsImg, slug: 'agricultural-yield-prediction-system', link: '/projects/agricultural-yield-prediction-system' },
    { title: 'Ghana Electronic Mapping and Monitoring System for Project M&E', tag: 'Project', image: mappingImg, slug: 'electronic-mapping-monitoring' },
    { title: 'Production of Regional and Constituency Maps and other Data Services', tag: 'Project', image: constituencyImg, slug: 'constituency-maps' },
    { title: 'Standardizing City-Level Data-Gathering (SCiLeD)', tag: 'Project', image: sciledImg, slug: 'sciled' },
    { title: 'Customization of Mobile and Web-based GIS App for Expanded Sanitary Inspections, Compliance Management and Enforcement (ESICOME)', tag: 'Project', image: esicomeImg, slug: 'esicome' },
    { title: 'Digital Mapping Verification for Gushiegu District of the Northern Region', tag: 'Project', image: gushieguImg, slug: 'gushiegu-mapping' },
    { title: 'Route Advisor', tag: 'Project', image: routeAdvisorImg, slug: 'route-advisor', link: '/projects/route-advisor' },
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
          {projects.map((item, i) => {
            const card = (
              <>
                <div className="proof-projects__card-img">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="proof-projects__card-image" />
                  ) : (
                    <div className="proof-projects__card-placeholder" />
                  )}
                </div>
                <div className="proof-projects__card-info">
                  <span className="proof-projects__card-tag">{item.title}</span>
                </div>
              </>
            )

            if ('link' in item && item.link) {
              return (
                <Link to={item.link} className="proof-projects__card proof-projects__card--clickable" key={i}>
                  {card}
                </Link>
              )
            }

            return (
              <div className="proof-projects__card" key={i}>
                {card}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProofProjects
