import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './Contact.css'

function Contact() {
  return (
    <main className="contact-page">
      <Navbar />

      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero__content">
          <h1 className="contact-hero__title">Get in Touch</h1>
          <p className="contact-hero__sub">
            Ready to make better decisions? Let's talk about how BDG can help your organisation.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="contact-form-section">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="contact-form__row">
            <div className="contact-form__field">
              <label>First name <span className="contact-form__required">*</span></label>
              <input type="text" placeholder="John" />
            </div>
            <div className="contact-form__field">
              <label>Last name <span className="contact-form__required">*</span></label>
              <input type="text" placeholder="Doe" />
            </div>
          </div>

          <div className="contact-form__row">
            <div className="contact-form__field">
              <label>Email <span className="contact-form__required">*</span></label>
              <input type="email" placeholder="john@company.com" />
            </div>
            <div className="contact-form__field">
              <label>Company</label>
              <input type="text" placeholder="Your company" />
            </div>
          </div>

          <div className="contact-form__field contact-form__field--full">
            <label>Phone number <span className="contact-form__required">*</span></label>
            <div className="contact-form__phone-input">
              <div className="contact-form__phone-code">+233</div>
              <input type="tel" placeholder="24 000 0000" />
            </div>
          </div>

          <div className="contact-form__field contact-form__field--full">
            <label>How can we help? <span className="contact-form__required">*</span></label>
            <textarea placeholder="Tell us about your project or question..." rows={5}></textarea>
          </div>

          <button type="submit" className="contact-form__submit">
            Send Message
            <span className="contact-form__submit-icon">&#8599;</span>
          </button>
        </form>
      </section>

      <Footer />
    </main>
  )
}

export default Contact
