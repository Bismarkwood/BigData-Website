import awsLogo from '../../assets/Aws Partner logo/Aws Partner.png'
import odooLogo from '../../assets/Aws Partner logo/odoo_ready_partners_rgb.png'
import ecursLogo from '../../assets/Aws Partner logo/ECURS.png'
import './StatsBar.css'

function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="stats-bar__inner">
        <div className="stats-bar__item">
          <img src={ecursLogo} alt="ECURS" className="stats-bar__aws-logo" />
          <span className="stats-bar__label">ECURS</span>
        </div>
        <div className="stats-bar__divider" />
        <div className="stats-bar__item">
          <img src={odooLogo} alt="Odoo Ready Partner" className="stats-bar__aws-logo" />
          <span className="stats-bar__label">Odoo Ready Partner</span>
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
