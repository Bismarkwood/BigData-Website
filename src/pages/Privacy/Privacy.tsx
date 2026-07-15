import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEO from '../../components/SEO'
import './Privacy.css'

function Privacy() {
  return (
    <main className="privacy-page">
      <SEO
        title="Privacy Policy | BigData Ghana"
        description="BigData Ghana's privacy policy. How we collect, use, protect, and share your information."
        path="/privacy"
      />
      <Navbar />

      {/* Hero */}
      <section className="privacy-hero">
        <div className="privacy-hero__content">
          <span className="privacy-hero__label">LEGAL</span>
          <h1 className="privacy-hero__title">Privacy Policy</h1>
          <p className="privacy-hero__sub">Last updated: July 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="privacy-content">
        <div className="privacy-content__inner">
          <aside className="privacy-toc">
            <h3 className="privacy-toc__title">Contents</h3>
            <nav className="privacy-toc__nav">
              <a href="#introduction">Introduction</a>
              <a href="#information-collected">Information We Collect</a>
              <a href="#how-we-use">How We Use Your Information</a>
              <a href="#data-sharing">Data Sharing & Disclosure</a>
              <a href="#data-security">Data Security</a>
              <a href="#data-retention">Data Retention</a>
              <a href="#your-rights">Your Rights</a>
              <a href="#cookies">Cookies</a>
              <a href="#third-party">Third-Party Links</a>
              <a href="#changes">Changes to This Policy</a>
              <a href="#contact">Contact Us</a>
            </nav>
          </aside>

          <div className="privacy-body">
            <div className="privacy-section" id="introduction">
              <h2>1. Introduction</h2>
              <p>
                BigData Ghana ("we," "us," or "our") is committed to protecting the privacy of our clients, partners, and website visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div className="privacy-section" id="information-collected">
              <h2>2. Information We Collect</h2>
              <h3>Personal Information</h3>
              <p>We may collect personally identifiable information that you voluntarily provide, including:</p>
              <ul>
                <li>Name and contact details (email, phone number)</li>
                <li>Company name and job title</li>
                <li>Information provided through contact forms or service inquiries</li>
                <li>Communication history with our team</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>When you visit our website, we may automatically collect:</p>
              <ul>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent</li>
                <li>Referring website addresses</li>
                <li>IP address and general location data</li>
              </ul>
            </div>

            <div className="privacy-section" id="how-we-use">
              <h2>3. How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul>
                <li>Provide and improve our services</li>
                <li>Respond to inquiries and support requests</li>
                <li>Send relevant communications about our services</li>
                <li>Analyse website usage to improve user experience</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraudulent or unauthorized activity</li>
              </ul>
            </div>

            <div className="privacy-section" id="data-sharing">
              <h2>4. Data Sharing & Disclosure</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share information with:
              </p>
              <ul>
                <li>Service providers who assist in operating our website and delivering services (e.g., cloud hosting, analytics)</li>
                <li>Legal authorities when required by law or to protect our rights</li>
                <li>Business partners with your explicit consent</li>
              </ul>
            </div>

            <div className="privacy-section" id="data-security">
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, access controls, and regular security assessments. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div className="privacy-section" id="data-retention">
              <h2>6. Data Retention</h2>
              <p>
                We retain personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable laws. When data is no longer needed, it is securely deleted or anonymised.
              </p>
            </div>

            <div className="privacy-section" id="your-rights">
              <h2>7. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at <a href="mailto:info@bigdataghana.com">info@bigdataghana.com</a>.
              </p>
            </div>

            <div className="privacy-section" id="cookies">
              <h2>8. Cookies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings. Disabling cookies may affect some website functionality.
              </p>
            </div>

            <div className="privacy-section" id="third-party">
              <h2>9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party sites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </div>

            <div className="privacy-section" id="changes">
              <h2>10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div className="privacy-section" id="contact">
              <h2>11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="privacy-contact-card">
                <div className="privacy-contact-card__item">
                  <span className="privacy-contact-card__label">Email</span>
                  <a href="mailto:info@bigdataghana.com">info@bigdataghana.com</a>
                </div>
                <div className="privacy-contact-card__item">
                  <span className="privacy-contact-card__label">Phone</span>
                  <span>+233 (0) 302 123 456</span>
                </div>
                <div className="privacy-contact-card__item">
                  <span className="privacy-contact-card__label">Address</span>
                  <span>Accra, Ghana, West Africa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Privacy
