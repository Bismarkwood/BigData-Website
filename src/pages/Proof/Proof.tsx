import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import StatsBar from '../../components/ProofStatsBar'
import ProofProjects from '../../components/ProofProjects'
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
        <div className="proof-hero__grid">
          <div className="proof-hero__track">
            <div className="proof-hero__card">
              <img src={card1Img} alt="" className="proof-hero__card-img" />
            </div>
            <div className="proof-hero__card">
              <img src={card2Img} alt="" className="proof-hero__card-img" />
            </div>
            <div className="proof-hero__card">
              <img src={card3Img} alt="" className="proof-hero__card-img" />
            </div>
            <div className="proof-hero__card">
              <img src={card4Img} alt="" className="proof-hero__card-img" />
            </div>
            <div className="proof-hero__card">
              <img src={card5Img} alt="" className="proof-hero__card-img" />
            </div>
            {/* Duplicated for seamless loop */}
            <div className="proof-hero__card">
              <img src={card1Img} alt="" className="proof-hero__card-img" />
            </div>
            <div className="proof-hero__card">
              <img src={card2Img} alt="" className="proof-hero__card-img" />
            </div>
            <div className="proof-hero__card">
              <img src={card3Img} alt="" className="proof-hero__card-img" />
            </div>
            <div className="proof-hero__card">
              <img src={card4Img} alt="" className="proof-hero__card-img" />
            </div>
            <div className="proof-hero__card">
              <img src={card5Img} alt="" className="proof-hero__card-img" />
            </div>
          </div>
        </div>

        {/* Dark overlay 80% */}
        <div className="proof-hero__overlay" />

        {/* Content */}
        <div className="proof-hero__content">
          <h1 className="proof-hero__title">Proof that intelligence<br />changes decisions.</h1>
          <p className="proof-hero__sub">
            Public infrastructure, climate, agriculture, logistics and data platforms.
          </p>
          <div className="proof-hero__cta-wrap">
            <HeroCTA text="View case studies" href="#projects" />
          </div>
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
      <JoinCta />
      <Footer />
    </main>
  )
}

export default Proof
