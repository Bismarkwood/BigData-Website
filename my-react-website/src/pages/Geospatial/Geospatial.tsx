import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CtaBanner from '../../components/CtaBanner'
import GeoHeroSection from '../../components/GeoHero'
import customerProblemImg from '../../assets/Geo intelligence Page/The customer problem.png'
import './Geospatial.css'

function Geospatial() {
  return (
    <main>
      <Navbar />
      {/* WebGL Globe Hero */}
      <GeoHeroSection />

      {/* Overview Section */}
      <section className="geo-overview">
        <div className="geo-overview__header">
          <h2 className="geo-overview__heading">Land analytics that protect your investment</h2>
          <p className="geo-overview__sub">
            Every location decision carries spatial risk that traditional due diligence misses. We map what others cannot see — flood zones, encroachment patterns, land disputes, infrastructure gaps — so you invest with confidence.
          </p>
        </div>

        <div className="geo-overview__grid">
          <div className="geo-overview__card">
            <div className="geo-overview__card-img">
              <img src={customerProblemImg} alt="The customer problem" className="geo-overview__card-image" />
            </div>
            <div className="geo-overview__card-tags">
              <span className="geo-overview__card-tag">01</span>
              <span className="geo-overview__card-tag">Problem</span>
            </div>
            <h3 className="geo-overview__card-title">The customer problem</h3>
            <p className="geo-overview__card-desc">
              Your most consequential decisions depend on geography: where to invest, where to build, where risk is concentrated. Most organisations enter these decisions without spatial intelligence, relying on instinct, surface surveys and second-hand reports. The result is capital allocated to underperforming locations and risk that was visible in the data but never surfaced.
            </p>
          </div>

          <div className="geo-overview__card">
            <div className="geo-overview__card-img">
              <div className="geo-overview__card-img-placeholder" />
            </div>
            <div className="geo-overview__card-tags">
              <span className="geo-overview__card-tag">02</span>
              <span className="geo-overview__card-tag">Decision</span>
            </div>
            <h3 className="geo-overview__card-title">The better decision</h3>
            <p className="geo-overview__card-desc">
              Before you commit capital to any location in Ghana, you should have a clear, data-grounded answer to what that location says about your decision, and what your competitors do not yet know about it. Not an estimate. Not a map. Spatial intelligence that changes how you act.
            </p>
          </div>

          <div className="geo-overview__card">
            <div className="geo-overview__card-img">
              <div className="geo-overview__card-img-placeholder" />
            </div>
            <div className="geo-overview__card-tags">
              <span className="geo-overview__card-tag">03</span>
              <span className="geo-overview__card-tag">Service</span>
            </div>
            <h3 className="geo-overview__card-title">The BDG service</h3>
            <p className="geo-overview__card-desc">
              BDG applies eight years of Ghana-specific geospatial data to your location question. We run spatial analysis, overlay risk and opportunity layers, and return intelligence faster than any field survey, at a depth no generalist can reach. AWS-certified infrastructure processes at speed. Our analysts interpret at depth.
            </p>
          </div>

          <div className="geo-overview__card">
            <div className="geo-overview__card-img">
              <div className="geo-overview__card-img-placeholder" />
            </div>
            <div className="geo-overview__card-tags">
              <span className="geo-overview__card-tag">04</span>
              <span className="geo-overview__card-tag">Outcome</span>
            </div>
            <h3 className="geo-overview__card-title">The business outcome</h3>
            <p className="geo-overview__card-desc">
              Smarter site selection. Higher-confidence investment decisions. Spatial risk eliminated before capital is committed. Competitive advantage built on intelligence others do not have, and eight years of Ghana-specific data no competitor holds.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  )
}

export default Geospatial
