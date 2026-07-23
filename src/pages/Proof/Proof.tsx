import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProofProjects from '../../components/ProofProjects'
import JoinCta from '../../components/JoinCta'
import SEO from '../../components/SEO'
import forestTraceImg from '../../assets/Proof/Forest Trace AI/Forest Trace cover page.png'
import trafficImg from '../../assets/Proof/Development of VEHICLE TRAFFIC ENFORCEMENT Application for Ghana Police Service MTTD/Traffic Tech.png'
import electionsImg from '../../assets/AI and Automation/GIS-RS Solution IN ELECTIONs.png'
import nfmsImg from '../../assets/AI and Automation/Development of National Forest Monitoring System.png'
import indomieImg from '../../assets/Our Projects/Indomie/Indomie.png'
import erpImg from '../../assets/Our Projects/Development of ERP/Development of ERP.png'
import mappingImg from '../../assets/Our Projects/Ghana Electronic Mapping and Monitoring System for Project M&E duties/Ghana Electronic Mapping and Monitoring System for Project M&E duties.png'
import constituencyImg from '../../assets/Our Projects/Production of Regional and Constituency Maps and other Data Services/Production of Regional and Constituency Maps and other Data Services.png'
import routeAdvisorImg from '../../assets/Our Projects/Route Advisor/Route Advisor.png'
import './Proof.css'

function Proof() {
  return (
    <main>
      <SEO
        title="Solutions | BigData Ghana — Proof That Intelligence Changes Decisions"
        description="National flood intelligence, forest monitoring, BigConnect AI, spatial data infrastructure, and data analytics projects. 5 flagship solutions across 4 sectors in Ghana."
        path="/proof"
      />
      <Navbar />
      <section className="proof-hero">
        {/* 3-row marquee background */}
        <div className="proof-hero__marquee-bg">
          {/* Row 1 - scrolls left */}
          <div className="proof-hero__row proof-hero__row--1">
            <div className="proof-hero__row-track">
              <img src={forestTraceImg} alt="" />
              <img src={trafficImg} alt="" />
              <img src={electionsImg} alt="" />
              <img src={nfmsImg} alt="" />
              <img src={indomieImg} alt="" />
              <img src={forestTraceImg} alt="" />
              <img src={trafficImg} alt="" />
              <img src={electionsImg} alt="" />
              <img src={nfmsImg} alt="" />
              <img src={indomieImg} alt="" />
            </div>
          </div>
          {/* Row 2 - scrolls right */}
          <div className="proof-hero__row proof-hero__row--2">
            <div className="proof-hero__row-track">
              <img src={erpImg} alt="" />
              <img src={mappingImg} alt="" />
              <img src={constituencyImg} alt="" />
              <img src={routeAdvisorImg} alt="" />
              <img src={forestTraceImg} alt="" />
              <img src={erpImg} alt="" />
              <img src={mappingImg} alt="" />
              <img src={constituencyImg} alt="" />
              <img src={routeAdvisorImg} alt="" />
              <img src={forestTraceImg} alt="" />
            </div>
          </div>
          {/* Row 3 - scrolls left */}
          <div className="proof-hero__row proof-hero__row--3">
            <div className="proof-hero__row-track">
              <img src={nfmsImg} alt="" />
              <img src={indomieImg} alt="" />
              <img src={trafficImg} alt="" />
              <img src={electionsImg} alt="" />
              <img src={erpImg} alt="" />
              <img src={nfmsImg} alt="" />
              <img src={indomieImg} alt="" />
              <img src={trafficImg} alt="" />
              <img src={electionsImg} alt="" />
              <img src={erpImg} alt="" />
            </div>
          </div>
        </div>

        {/* Dark overlay */}
        <div className="proof-hero__overlay" />

        {/* Content */}
        <div className="proof-hero__content">
          <h1 className="proof-hero__title">Intelligence that shapes<br />better decisions.</h1>
          <p className="proof-hero__sub">
            Solutions for infrastructure, climate, agriculture, logistics, and data platforms.
          </p>
          <div className="proof-hero__scroll">
            <div className="proof-hero__scroll-line">
              <div className="proof-hero__scroll-dot" />
            </div>
            <span className="proof-hero__scroll-text">Scroll</span>
          </div>
        </div>
      </section>
      <ProofProjects />

      {/* Impact in Numbers */}
      <section className="proof-impact">
        <div className="proof-impact__header">
          <div className="proof-impact__header-left">
            <h2 className="proof-impact__heading">Our Impact in Numbers:</h2>
            <p className="proof-impact__sub">Intelligence that changes decisions across Ghana.</p>
          </div>
          <a href="/about" className="proof-impact__link">Mission & Impact →</a>
        </div>
        <div className="proof-impact__cards">
          <div className="proof-impact__card proof-impact__card--green">
            <span className="proof-impact__card-num">10+</span>
            <p className="proof-impact__card-desc">National-scale projects delivered across government, agriculture and environment</p>
          </div>
          <div className="proof-impact__card proof-impact__card--dark">
            <span className="proof-impact__card-num">5+</span>
            <p className="proof-impact__card-desc">Sectors served including banking, agriculture, real estate, logistics and government</p>
          </div>
          <div className="proof-impact__card proof-impact__card--accent">
            <span className="proof-impact__card-num">8+</span>
            <p className="proof-impact__card-desc">Years of Ghana-specific geospatial data powering every decision we support</p>
          </div>
          <div className="proof-impact__card proof-impact__card--mint">
            <span className="proof-impact__card-num">100%</span>
            <p className="proof-impact__card-desc">AWS-certified infrastructure behind every platform we build and deploy</p>
          </div>
        </div>
      </section>

      <JoinCta />
      <Footer />
    </main>
  )
}

export default Proof
