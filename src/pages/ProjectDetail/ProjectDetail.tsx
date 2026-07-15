import { useParams, Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import card1Img from '../../assets/Proof/card-1.jpg'
import card2Img from '../../assets/Proof/card-2.jpg'
import card3Img from '../../assets/Proof/Card-3.png'
import card4Img from '../../assets/Proof/Card-4.jpg'
import card5Img from '../../assets/Proof/card-5.jpg'
import bigconnectImg from '../../assets/Proof/Bigconnect AI image card/BigConnectAI-1.png'
import mlnrImg from '../../assets/Proof/Forest Trace AI/MLNR Spatial Platform.png'
import './ProjectDetail.css'
import '../../components/ProofProjects/ProofProjects.css';
import SolutionsSlider from '../../components/SolutionsSlider';
import geospatialImg from '../../assets/hero/Geospatial.jpg';
import cloudImg from '../../assets/capabilities/big-data-data-cloud.webp';
import analyticsImg from '../../assets/capabilities/Data analytics and AI.png';
import biImg from '../../assets/capabilities/Business intelligence.jpg';

const projectsData: Record<string, {
  name: string
  subtitle: string
  description: string
  year: string
  services: string
  image: string
  externalUrl?: string
  challenge?: string
  intelligence?: string
  whyItMatters?: string
}> = {
  'national-flood-intelligence-platform': {
    name: 'BDG Flood Platform',
    subtitle: 'National Flood Intelligence System',
    description: 'A real-time flood monitoring and early warning system built for Ghana\'s National Disaster Management Organisation. Combines satellite data, rainfall intelligence, and spatial modelling to predict and communicate flood risk across all 16 regions.',
    year: '2023',
    services: 'Geospatial Intelligence, Data Platform, AI',
    image: card1Img,
  },
  'agricultural-yield-prediction-system': {
    name: 'NFMS',
    subtitle: 'Development of National Forest Monitoring System',
    description: 'Ghana needed a reliable and scalable system to monitor forest cover, track land use changes, and support climate reporting. Traditional forest monitoring processes were often slow, fragmented, and limited in their ability to provide near real-time insights for decision-making across priority forest areas.',
    year: '2023',
    services: 'Geospatial Intelligence, Cloud Platform, AI',
    image: card2Img,
    challenge: 'Ghana needed a reliable and scalable system to monitor forest cover, track land use changes, and support climate reporting. Traditional forest monitoring processes were often slow, fragmented, and limited in their ability to provide near real-time insights for decision-making across priority forest areas.',
    intelligence: 'The National Forest Monitoring System was co-developed, trained, and deployed in partnership with the Forestry Commission and key stakeholders in Ghana\'s forestry and climate change sector. Built on Amazon Web Services (AWS), the platform provides cloud-based geospatial processing capabilities for real-time remote sensing analysis. It uses near real-time Sentinel satellite data to support land use and land cover mapping, forest loss and gain tracking, greenhouse gas emissions estimation, and analysis across any selected Area of Interest.',
    whyItMatters: 'The NFMS strengthens Ghana\'s ability to protect forests, support REDD+ reporting, estimate climate-related emissions, and guide sustainable land management decisions. It contributes directly to national climate mitigation goals by helping government agencies and stakeholders detect forest changes early, monitor priority areas, and make data-driven environmental decisions.',
  },
  'real-time-logistics-optimisation': {
    name: 'BigConnect AI',
    subtitle: 'AI-Powered Virtual Receptionist',
    description: 'Businesses lose valuable customers when calls go unanswered after working hours, during busy periods, or when staff are unavailable. In sectors like banking, healthcare, government, and SMEs, every missed call can mean a lost lead, delayed support request, or poor customer experience.',
    year: '2025',
    services: 'AI, Cloud Platform, Voice Intelligence',
    image: bigconnectImg,
    externalUrl: 'https://bigconnectai.bigdataghana.com/',
    challenge: 'Businesses lose valuable customers when calls go unanswered after working hours, during busy periods, or when staff are unavailable. In sectors like banking, healthcare, government, and SMEs, every missed call can mean a lost lead, delayed support request, or poor customer experience.',
    intelligence: 'BigConnect AI acts as an intelligent virtual receptionist that answers calls 24/7. Built on secure AWS infrastructure, it holds natural bilingual conversations in English and French, collects caller details, provides relevant business information, and understands the caller\'s intent. Powered by Amazon Bedrock Nova Pro, BigConnect AI maintains conversation context throughout the call and automatically generates clear, actionable summaries for follow-up.',
    whyItMatters: 'BigConnect AI helps organizations deliver enterprise-level customer service at a much lower cost than traditional call center operations. Purpose-built for West African markets, it supports businesses that need reliable, bilingual, always-available communication. It is ideal for banking, healthcare, government services, insurance, hospitality, education, and SMEs that want to improve response time, capture more leads, and reduce customer service pressure.',
  },
  'spatial-data-infrastructure-for-mlnr': {
    name: 'MLNR Spatial Platform',
    subtitle: 'Spatial Data Infrastructure',
    description: 'A national-scale spatial data infrastructure built for the Ministry of Lands and Natural Resources. Digitises land records, maps boundaries, and provides geospatial decision support for land administration.',
    year: '2022',
    services: 'Geospatial Intelligence, Cloud Platform',
    image: mlnrImg,
  },
  'climate-risk-assessment-tool': {
    name: 'Data Analysis',
    subtitle: 'Data Analysis for Indomie',
    description: 'Indomie needed a clearer understanding of how customer demand and promotion engagement varied across different regions of Ghana. Without proper analysis, it would be difficult to know which areas had strong participation, where demand was growing, and which regions required more marketing or distribution attention.',
    year: '2024',
    services: 'Data Analytics, Business Intelligence',
    image: card5Img,
    challenge: 'Indomie needed a clearer understanding of how customer demand and promotion engagement varied across different regions of Ghana. Without proper analysis, it would be difficult to know which areas had strong participation, where demand was growing, and which regions required more marketing or distribution attention.',
    intelligence: 'The project analyzed scratch card promotion data to identify customer participation patterns, regional demand trends, and areas with high product engagement. The data was organized and studied to reveal where Indomie was receiving the strongest response across Ghana. This helped turn raw promotional entries into meaningful business insights for marketing, sales, and distribution planning.',
    whyItMatters: 'The project helped Indomie understand customer interest by location, improve regional marketing decisions, and identify opportunities for stronger market penetration. These insights can support better campaign planning, product distribution, sales forecasting, and customer engagement strategies across Ghana.',
  },
  'sendline-sms': {
    name: 'SendLine SMS',
    subtitle: 'Bulk SMS and Communication Platform',
    description: 'Businesses need to reach customers quickly, but communication is often scattered, slow, or unreliable. Sending alerts, promotions, reminders, and verification codes manually can lead to delays, missed messages, poor tracking, and weak customer engagement.',
    year: '2025',
    services: 'Cloud Platform, API, Communication',
    image: card3Img,
    externalUrl: 'https://sendlinesms.com/',
    challenge: 'Businesses need to reach customers quickly, but communication is often scattered, slow, or unreliable. Sending alerts, promotions, reminders, and verification codes manually can lead to delays, missed messages, poor tracking, and weak customer engagement.',
    intelligence: 'SendLineSMS provides a powerful and user-friendly messaging platform for fast, secure, and scalable SMS communication. Businesses can send bulk messages, schedule campaigns, create reusable message templates, and track delivery in real time. The platform also supports OTP integration for secure user authentication and offers a robust REST API that connects easily with websites, mobile apps, CRMs, ERPs, and other business systems.',
    whyItMatters: 'SendLineSMS helps businesses communicate faster, improve customer engagement, and support secure digital transactions. With high uptime reliability, local pricing support, delivery tracking, and easy integration, it gives organizations a dependable communication channel at scale. It is ideal for SMEs, banks, schools, churches, hospitals, fintechs, e-commerce platforms, government agencies, NGOs, and service-based businesses that need instant and reliable SMS communication.',
  },
}

function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? projectsData[slug] : null
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const main = mainRef.current
    if (!main) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('project-detail--visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = main.querySelectorAll('.project-detail__section, .project-detail__image, .project-detail__image-split, .project-detail__related')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [project])

  if (!project) {
    return (
      <main>
        <Navbar />
        <div style={{ padding: '200px 48px 100px', textAlign: 'center' }}>
          <h1>Project not found</h1>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="project-detail" ref={mainRef}>
      <Navbar light />

      {/* Hero */}
      <section className="project-detail__hero">
        <div className="project-detail__title-wrap">
          <h1 className="project-detail__name">{project.name}</h1>
          <h2 className="project-detail__subtitle">{project.subtitle}</h2>
        </div>
        <p className="project-detail__desc">{project.description}</p>
      </section>

      {/* Meta row */}
      <div className="project-detail__meta">
        <div className="project-detail__meta-item">
          <span className="project-detail__meta-label">Year</span>
          <span className="project-detail__meta-value">{project.year}</span>
        </div>
        <div className="project-detail__meta-item">
          <span className="project-detail__meta-label">Services</span>
          <span className="project-detail__meta-value">{project.services}</span>
        </div>
        {project.externalUrl && (
          <div className="project-detail__meta-item">
            <span className="project-detail__meta-label">Website</span>
            <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" className="project-detail__meta-link">
              Visit {project.name} ↗
            </a>
          </div>
        )}
      </div>

      {/* Full width image */}
      <section className="project-detail__image">
        <img src={project.image} alt={project.subtitle} />
      </section>

      {/* Challenge section */}
      <section className="project-detail__section">
        <span className="project-detail__section-num">(01)</span>
        <h3 className="project-detail__section-label">CHALLENGE</h3>
        <p className="project-detail__section-text">
          {project.challenge || project.description}
        </p>
      </section>

      {/* Second full width image */}
      <section className="project-detail__image">
        <img src={project.image} alt={project.subtitle} />
      </section>

      {/* Intelligence applied section */}
      <section className="project-detail__section">
        <span className="project-detail__section-num">(02)</span>
        <h3 className="project-detail__section-label">Intelligence applied</h3>
        <p className="project-detail__section-text">
          {project.intelligence || 'Spatial flood modelling over the specific development corridor.'}
        </p>
      </section>

      {/* Split image section */}
      <section className="project-detail__image-split">
        <div className="project-detail__image-half">
          <img src={project.image} alt="" />
        </div>
        <div className="project-detail__image-half">
          <img src={project.image} alt="" />
        </div>
      </section>

      {/* Why it matters section */}
      <section className="project-detail__section">
        <span className="project-detail__section-num">(03)</span>
        <h3 className="project-detail__section-label">Why it matters</h3>
        <p className="project-detail__section-text">
          {project.whyItMatters || 'Site and development risk can be priced out before a decision is finalised.'}
        </p>
      </section>

      {/* Related projects */}
      <section className="project-detail__related">
        <div className="project-detail__related-header">
          <h3 className="project-detail__related-title">Related projects</h3>
          <Link to="/proof" className="project-detail__related-link">All Projects and Products →</Link>
        </div>
        <div className="proof-projects__grid">
          <Link to="/proof/agricultural-yield-prediction-system" className="proof-projects__card">
            <div className="proof-projects__card-img">
              <img src={card2Img} alt="Agricultural Yield Prediction" className="proof-projects__card-image" />
              <div className="proof-projects__card-overlay" />
            </div>
            <div className="proof-projects__card-info">
              <span className="proof-projects__card-tag">Agricultural Yield Prediction System</span>
            </div>
          </Link>
          <Link to="/proof/climate-risk-assessment-tool" className="proof-projects__card">
            <div className="proof-projects__card-img">
              <img src={card5Img} alt="Climate Risk Assessment" className="proof-projects__card-image" />
              <div className="proof-projects__card-overlay" />
            </div>
            <div className="proof-projects__card-info">
              <span className="proof-projects__card-tag">Climate Risk Assessment Tool</span>
            </div>
          </Link>
          <Link to="/proof/real-time-logistics-optimisation" className="proof-projects__card">
            <div className="proof-projects__card-img">
              <img src={bigconnectImg} alt="BigConnect AI" className="proof-projects__card-image" />
              <div className="proof-projects__card-overlay" />
            </div>
            <div className="proof-projects__card-info">
              <span className="proof-projects__card-tag">BigConnect AI — Virtual Receptionist</span>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default ProjectDetail
