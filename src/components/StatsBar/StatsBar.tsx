import awsLogo from '../../assets/Aws Partner logo/AWS-Partner-transparent.webp'
import odooLogo from '../../assets/Aws Partner logo/odoo_ready_partners_rgb.png'
import ecursLogo from '../../assets/Aws Partner logo/ECURS.png'
import acadamicCityLogo from '../../assets/Aws Partner logo/Acadamic City.png'
import apiTechLogo from '../../assets/Aws Partner logo/API technologies.png'
import agbedusLogo from '../../assets/Aws Partner logo/Agbedus Consult.png'
import './StatsBar.css'

function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="stats-bar__inner">
        <span className="stats-bar__title">Our Partners</span>
        <div className="stats-bar__divider" />
        <div className="stats-bar__logos">
          <img src={awsLogo} alt="AWS" />
          <img src={odooLogo} alt="Odoo" />
          <img src={ecursLogo} alt="ECURS" />
          <img src={acadamicCityLogo} alt="Academic City" />
          <img src={apiTechLogo} alt="API Technologies" />
          <img src={agbedusLogo} alt="Agbedus Consult" />
          <img src={awsLogo} alt="AWS" />
          <img src={odooLogo} alt="Odoo" />
          <img src={ecursLogo} alt="ECURS" />
          <img src={acadamicCityLogo} alt="Academic City" />
          <img src={apiTechLogo} alt="API Technologies" />
          <img src={agbedusLogo} alt="Agbedus Consult" />
          <img src={awsLogo} alt="AWS" />
          <img src={odooLogo} alt="Odoo" />
          <img src={ecursLogo} alt="ECURS" />
          <img src={acadamicCityLogo} alt="Academic City" />
          <img src={apiTechLogo} alt="API Technologies" />
          <img src={agbedusLogo} alt="Agbedus Consult" />
        </div>
      </div>
    </section>
  )
}

export default StatsBar
