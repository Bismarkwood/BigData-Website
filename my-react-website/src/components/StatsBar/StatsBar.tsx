import awsLogo from '../../assets/Aws Partner logo/Aws Partner.png'
import './StatsBar.css'

function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="stats-bar__inner">
        <div className="stats-bar__item">
          <span className="stats-bar__number">8+</span>
          <span className="stats-bar__label">Years of Ghana-specific data</span>
        </div>
        <div className="stats-bar__divider" />
        <div className="stats-bar__item">
          <span className="stats-bar__number">50+</span>
          <span className="stats-bar__label">Projects delivered across Ghana</span>
        </div>
        <div className="stats-bar__divider" />
        <div className="stats-bar__item">
          <img src={awsLogo} alt="AWS Partner" className="stats-bar__aws-logo" />
          <span className="stats-bar__label">AWS Certified Partner</span>
        </div>
      </div>
    </section>
  )
}

export default StatsBar
