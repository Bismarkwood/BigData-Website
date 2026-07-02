import HeroCTA from '../HeroCTA'
import ctaImg from '../../assets/CTA Banner/CTA.jpg'
import henryImg from '../../assets/CTA Banner/CTA Banner Mr. Henry.jpg'
import bdgWave from '../../assets/intro/bdg-wave.png'
import './JoinCta.css'

function JoinCta() {
  return (
    <section className="join-cta">
      <div className="join-cta__inner">
        {/* Text side */}
        <div className="join-cta__text">
          <span className="join-cta__label"></span>
          <h2 className="join-cta__heading">
            Ready to decide better?
          </h2>
          <p className="join-cta__sub">
            Tell us what you are working on. We will show you what the data says.
          </p>
          <HeroCTA text="Let's Work" href="/contact" />
        </div>

        {/* Person card */}
        <div className="join-cta__person">
          <img src={henryImg} alt="Mr. Henry Baffoe" className="join-cta__person-img" />
          <div className="join-cta__person-info">
            <span className="join-cta__person-name">Mr. Henry Baffoe</span>
            <span className="join-cta__person-role">Managing Director</span>
          </div>
        </div>

        {/* Branded image card */}
        <div className="join-cta__brand">
          <img src={ctaImg} alt="" className="join-cta__brand-bg" />
          <div className="join-cta__brand-overlay" />
          <div className="join-cta__brand-content">
            <img src={bdgWave} alt="" className="join-cta__brand-logo" />
            <h3 className="join-cta__brand-text">Decide<br />Better</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinCta
