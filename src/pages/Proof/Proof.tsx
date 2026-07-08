import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import StatsBar from '../../components/ProofStatsBar'
import ProofProjects from '../../components/ProofProjects'
import ClientLogos from '../../components/ClientLogos'
import JoinCta from '../../components/JoinCta'
import SEO from '../../components/SEO'
import HeroCTA from '../../components/HeroCTA'
import card1Img from '../../assets/Proof/card-1.jpg'
import card2Img from '../../assets/Proof/card-2.jpg'
import card3Img from '../../assets/Proof/Card-3.png'
import card4Img from '../../assets/Proof/Card-4.jpg'
import card5Img from '../../assets/Proof/card-5.jpg'
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
              <img src={card1Img} alt="" />
              <img src={card2Img} alt="" />
              <img src={card3Img} alt="" />
              <img src={card4Img} alt="" />
              <img src={card5Img} alt="" />
              <img src={card1Img} alt="" />
              <img src={card2Img} alt="" />
              <img src={card3Img} alt="" />
              <img src={card4Img} alt="" />
              <img src={card5Img} alt="" />
            </div>
          </div>
          {/* Row 2 - scrolls right */}
          <div className="proof-hero__row proof-hero__row--2">
            <div className="proof-hero__row-track">
              <img src={card3Img} alt="" />
              <img src={card5Img} alt="" />
              <img src={card1Img} alt="" />
              <img src={card4Img} alt="" />
              <img src={card2Img} alt="" />
              <img src={card3Img} alt="" />
              <img src={card5Img} alt="" />
              <img src={card1Img} alt="" />
              <img src={card4Img} alt="" />
              <img src={card2Img} alt="" />
            </div>
          </div>
          {/* Row 3 - scrolls left */}
          <div className="proof-hero__row proof-hero__row--3">
            <div className="proof-hero__row-track">
              <img src={card2Img} alt="" />
              <img src={card4Img} alt="" />
              <img src={card5Img} alt="" />
              <img src={card1Img} alt="" />
              <img src={card3Img} alt="" />
              <img src={card2Img} alt="" />
              <img src={card4Img} alt="" />
              <img src={card5Img} alt="" />
              <img src={card1Img} alt="" />
              <img src={card3Img} alt="" />
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
      <StatsBar />
      <ProofProjects />
      <ClientLogos />
      <JoinCta />
      <Footer />
    </main>
  )
}

export default Proof
