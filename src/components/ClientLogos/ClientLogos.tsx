import afcLogo from '../../assets/Client Logos/AFC.png'
import ecLogo from '../../assets/Client Logos/EC.jpg'
import indomieLogo from '../../assets/Client Logos/Indomie.png'
import ntlLogo from '../../assets/Client Logos/NTL.jpg'
import ntmelLogo from '../../assets/Client Logos/NTMEL.jpg'
import parliamentLogo from '../../assets/Client Logos/Parliament of ghana.png'
import usaidLogo from '../../assets/Client Logos/USAID Logo.png'
import wcfLogo from '../../assets/Client Logos/World Cocoa Foundation.jpg'
import ecomLogo from '../../assets/Client Logos/ECOM.jpg'
import gizLogo from '../../assets/Client Logos/GIZ.png'
import deaLogo from '../../assets/Client Logos/Digital Earth Africa.png'
import nitaLogo from '../../assets/Client Logos/NITA logo.png'
import ugLogo from '../../assets/Client Logos/UG Logo.jpg'
import acadamicCityLogo from '../../assets/Aws Partner logo/Acadamic City.png'
import './ClientLogos.css'

const logos = [afcLogo, ecLogo, indomieLogo, ntlLogo, ntmelLogo, parliamentLogo, usaidLogo, wcfLogo, ecomLogo, gizLogo, deaLogo, nitaLogo, ugLogo, acadamicCityLogo]

function ClientLogos() {
  return (
    <section className="client-logos">
      <h3 className="client-logos__title">Trusted By</h3>
      <div className="client-logos__track-wrapper">
        <div className="client-logos__track">
          {logos.map((logo, i) => (
            <div className="client-logos__item" key={i}>
              <img src={logo} alt="" />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {logos.map((logo, i) => (
            <div className="client-logos__item" key={`dup-${i}`}>
              <img src={logo} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientLogos
