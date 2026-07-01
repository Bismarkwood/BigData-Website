import HeroCTA from '../HeroCTA'
import ctaImg from '../../assets/CTA Banner/CTA.jpg'
import bdgWave from '../../assets/intro/bdg-wave.png'
import bdgCenter from '../../assets/intro/bdg-center-icon.png'
import './JoinCta.css'

function JoinCta() {
  return (
    <section className="join-cta">
      <div className="join-cta__inner">
        {/* Image side */}
        <div className="join-cta__image">
          <img src={ctaImg} alt="" className="join-cta__image-img" />
          <div className="join-cta__image-overlay" />
        </div>

        {/* Content side */}
        <div className="join-cta__content">
          {/* Background decorative elements */}
          <div className="join-cta__bg-decor">
            <img src={bdgWave} alt="" className="join-cta__bg-wave" />
            <img src={bdgCenter} alt="" className="join-cta__bg-satellite" />
          </div>

          <h2 className="join-cta__heading">
            Ready to shape your
            <span className="join-cta__heading-accent"> future?</span>
          </h2>
          <p className="join-cta__sub">
            If you're curious, collaborative and driven by purpose, you'll fit right in. Browse our open roles and help build the region.
          </p>
          <HeroCTA text="See vacancies" href="#careers" />
        </div>
      </div>
    </section>
  )
}

export default JoinCta
