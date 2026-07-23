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
    { title: 'ForestTrace AI Ghana', image: forestTraceImg },
    { title: 'Vehicle Traffic Enforcement Application for Ghana Police Service MTTD', image: trafficImg },
    { title: 'GIS/RS Solution in Elections', image: electionsImg },
    { title: 'Development of ERP for Petroleum Downstream', image: erpImg },
    { title: 'Data Analysis for Indomie', image: indomieImg },
    { title: 'National Forest Monitoring System', image: nfmsImg },
    { title: 'Ghana Electronic Mapping and Monitoring System for Project M&E', image: mappingImg },
    { title: 'Production of Regional and Constituency Maps and other Data Services', image: constituencyImg },
    { title: 'Standardizing City-Level Data-Gathering (SCiLeD)', image: sciledImg },
    { title: 'Customization of Mobile and Web-based GIS App for ESICOME', image: esicomeImg },
    { title: 'Digital Mapping Verification for Gushiegu District', image: gushieguImg },
    { title: 'Route Advisor', image: routeAdvisorImg },
  ]

  return (
    <section className="proof-projects">
      <div className="proof-projects__header">
        <h2 className="proof-projects__title">Our Projects</h2>
      </div>
      <div className="proof-projects__content">
        <div className="proof-projects__grid">
          {projects.map((item, i) => (
            <div className="proof-projects__card" key={i}>
              <div className="proof-projects__card-img">
                <img src={item.image} alt={item.title} className="proof-projects__card-image" />
              </div>
              <div className="proof-projects__card-info">
                <span className="proof-projects__card-tag">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProofProjects
