import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProofProjects from '../../components/ProofProjects'
import JoinCta from '../../components/JoinCta'
import SEO from '../../components/SEO'
import card1Img from '../../assets/Proof/card-1.jpg'
import card2Img from '../../assets/Proof/card-2.jpg'
import card3Img from '../../assets/Proof/Card-3.png'
import card4Img from '../../assets/Proof/Card-4.jpg'
import card5Img from '../../assets/Proof/card-5.jpg'
import '../Proof/Proof.css'

function Solutions() {
  return (
    <main>
      <SEO
        title="Our Solutions | BigData Ghana — Products That Drive Decisions"
        description="SendLine SMS, BigConnect AI, and Maize Intelligence. Products built for Ghana's private sector to communicate, automate, and grow with intelligence."
        path="/solutions"
      />
      <Navbar />
      <section className="proof-hero">
        {/* 3-row marquee background */}
        <div className="proof-hero__marquee-bg">
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

        <div className="proof-hero__overlay" />

        <div className="proof-hero__content">
          <h1 className="proof-hero__title">Our Solutions</h1>
          <p className="proof-hero__sub">
            Products built for Ghana's private sector to communicate, automate, and grow with intelligence.
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
      <JoinCta />
      <Footer />
    </main>
  )
}

export default Solutions
