import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import JoinCta from '../../components/JoinCta'
import HeroCTA from '../../components/HeroCTA'
import './Careers.css'

const openRoles = [
  {
    title: 'Cloud Engineer',
    type: 'Full-time',
    location: 'Accra, Ghana',
  },
  {
    title: 'GIS Developer',
    type: 'Full-time',
    location: 'Accra, Ghana',
  },
  {
    title: 'Data Analyst',
    type: 'Full-time',
    location: 'Accra, Ghana',
  },
  {
    title: 'Software Engineer',
    type: 'Full-time',
    location: 'Accra, Ghana',
  },
  {
    title: 'Product Designer',
    type: 'Full-time',
    location: 'Accra, Ghana',
  },
]

function Careers() {
  return (
    <main className="careers-page">
      <Navbar light />

      {/* Hero */}
      <section className="careers-hero">
        <div className="careers-hero__content">
          <h1 className="careers-hero__title">
            <span>Build what matters.</span>
            <span>From Ghana.</span>
          </h1>
          <p className="careers-hero__sub">
            We are hiring people who want to solve problems that change how organisations decide. If you are curious, technical, and want your work to matter — this is the place.
          </p>
          <HeroCTA text="View Open Roles" href="#roles" />
        </div>
      </section>

      {/* Why BDG */}
      <section className="careers-why">
        <div className="careers-why__inner">
          <div className="careers-why__left">
            <span className="careers-why__label">WHY BDG</span>
            <h2 className="careers-why__heading">We build intelligence that compounds.</h2>
          </div>
          <div className="careers-why__right">
            <p className="careers-why__text">
              Every quarter we solve problems that did not exist in our industry five years ago. You will work with eight years of spatial data, national-scale platforms, and AI systems purpose-built for West Africa. The work you do here stays visible.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="careers-benefits">
        <h2 className="careers-benefits__title">What you get</h2>
        <div className="careers-benefits__grid">
          <div className="careers-benefits__card">
            <span className="careers-benefits__icon">🚀</span>
            <h3>Real impact</h3>
            <p>Your work protects forests, predicts floods, and strengthens businesses across Ghana.</p>
          </div>
          <div className="careers-benefits__card">
            <span className="careers-benefits__icon">☁️</span>
            <h3>AWS & cloud-first</h3>
            <p>Work with enterprise-grade infrastructure, AI tools, and the latest cloud technologies.</p>
          </div>
          <div className="careers-benefits__card">
            <span className="careers-benefits__icon">📈</span>
            <h3>Growth</h3>
            <p>Certifications, mentorship, and a team that pushes each other to be better every week.</p>
          </div>
          <div className="careers-benefits__card">
            <span className="careers-benefits__icon">🤝</span>
            <h3>Culture</h3>
            <p>No fluff, just brilliance. A small team where your ideas are heard and your contributions visible.</p>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="careers-roles" id="roles">
        <h2 className="careers-roles__title">Open Roles</h2>
        <p className="careers-roles__sub">We are always looking for exceptional people. If you do not see your role, reach out anyway.</p>
        <div className="careers-roles__list">
          {openRoles.map((role, i) => (
            <a href="/contact" className="careers-roles__item" key={i}>
              <div className="careers-roles__item-left">
                <h3 className="careers-roles__item-title">{role.title}</h3>
                <span className="careers-roles__item-meta">{role.type} · {role.location}</span>
              </div>
              <span className="careers-roles__item-arrow">→</span>
            </a>
          ))}
        </div>
      </section>

      <JoinCta />
      <Footer />
    </main>
  )
}

export default Careers
