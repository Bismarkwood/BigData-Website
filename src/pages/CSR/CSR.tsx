import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import JoinCta from '../../components/JoinCta'
import SEO from '../../components/SEO'
import heroImg from '../../assets/Life at Big Data Ghana/007A2148SIMPI26.jpg'
import cardImg1 from '../../assets/Life at Big Data Ghana/1756482542508.jpg'
import cardImg2 from '../../assets/Life at Big Data Ghana/photo_2026-07-23_09-52-24.jpg'
import cardImg3 from '../../assets/hero/Geospatial.jpg'
import cardImg4 from '../../assets/Life at Big Data Ghana/photo_2026-07-23_09-52-27.jpg'
import './CSR.css'

const initiatives = [
  {
    num: '01',
    title: 'Tech Education & Skills Development',
    description: 'We invest in building Ghana\'s next generation of technology professionals through training programmes, internships, and partnerships with academic institutions. Our goal is to close the skills gap in geospatial technology, cloud computing, and data science across West Africa.',
    tag: 'EDUCATION',
    image: cardImg1,
  },
  {
    num: '02',
    title: 'Community Mapping & Spatial Inclusion',
    description: 'Underserved communities often go unmapped, making them invisible to planners and service providers. We contribute geospatial expertise to community mapping projects that ensure every neighbourhood, school, health facility and road is visible in national spatial databases.',
    tag: 'COMMUNITIES',
    image: cardImg2,
  },
  {
    num: '03',
    title: 'Environmental Monitoring & Climate Action',
    description: 'Through our satellite monitoring capabilities, we support environmental conservation efforts including forest monitoring, deforestation detection, and climate risk assessment. We provide technical expertise to help protect Ghana\'s natural resources for future generations.',
    tag: 'ENVIRONMENT',
    image: cardImg3,
  },
  {
    num: '04',
    title: 'Open Data & Knowledge Sharing',
    description: 'We believe that access to spatial data and intelligence should not be a privilege. We contribute to open data initiatives, publish research and insights, and share knowledge through conferences, publications and collaborative projects that benefit the wider Ghanaian technology ecosystem.',
    tag: 'KNOWLEDGE',
    image: cardImg4,
  },
]

function CSR() {
  return (
    <main className="csr-page">
      <SEO
        title="Corporate Social Responsibility | BigData Ghana"
        description="BigData Ghana's commitment to technology education, community mapping, environmental monitoring, and knowledge sharing across Ghana and West Africa."
        path="/csr"
      />
      <Navbar />

      {/* Hero with image */}
      <section className="csr-hero">
        <img src={heroImg} alt="" className="csr-hero__bg" />
        <div className="csr-hero__overlay" />
        <div className="csr-hero__content">
          <span className="csr-hero__label">CORPORATE SOCIAL RESPONSIBILITY</span>
          <h1 className="csr-hero__title">Technology that serves<br />communities, not just clients.</h1>
          <p className="csr-hero__sub">
            We believe the intelligence we build should benefit more than balance sheets. Our CSR commitment focuses on education, inclusion, environmental protection, and open knowledge.
          </p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="csr-vision">
        <div className="csr-vision__inner">
          <span className="csr-vision__label">OUR COMMITMENT</span>
          <h2 className="csr-vision__heading">
            The same geospatial intelligence, cloud technology, and data expertise we apply to business decisions can also protect forests, include communities, educate the next generation, and strengthen the public systems Ghana depends on.
          </h2>
        </div>
      </section>

      {/* Initiatives with images */}
      <section className="csr-initiatives">
        <div className="csr-initiatives__header">
          <h2 className="csr-initiatives__title">Our Focus Areas</h2>
          <p className="csr-initiatives__sub">Where we direct our time, technology, and expertise beyond commercial work.</p>
        </div>
        <div className="csr-initiatives__grid">
          {initiatives.map((item, i) => (
            <div className="csr-initiatives__card" key={i}>
              <div className="csr-initiatives__card-img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="csr-initiatives__card-body">
                <div className="csr-initiatives__card-top">
                  <span className="csr-initiatives__card-tag">{item.tag}</span>
                  <span className="csr-initiatives__card-num">{item.num}</span>
                </div>
                <h3 className="csr-initiatives__card-title">{item.title}</h3>
                <p className="csr-initiatives__card-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="csr-impact">
        <div className="csr-impact__grid">
          <div className="csr-impact__stat">
            <span className="csr-impact__stat-num">15+</span>
            <span className="csr-impact__stat-label">Interns & trainees supported</span>
          </div>
          <div className="csr-impact__divider" />
          <div className="csr-impact__stat">
            <span className="csr-impact__stat-num">8+</span>
            <span className="csr-impact__stat-label">Years of community contribution</span>
          </div>
          <div className="csr-impact__divider" />
          <div className="csr-impact__stat">
            <span className="csr-impact__stat-num">5+</span>
            <span className="csr-impact__stat-label">Environmental monitoring projects</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="csr-cta">
        <h2 className="csr-cta__title">Want to collaborate on a social impact project?</h2>
        <p className="csr-cta__sub">If you are working on something that benefits Ghana's communities, environment, or education system, we would like to hear about it.</p>
        <a href="/contact" className="csr-cta__btn">Get in Touch →</a>
      </section>

      <JoinCta />
      <Footer />
    </main>
  )
}

export default CSR
