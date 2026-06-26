import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import StatsBar from '../../components/StatsBar'
import ServiceScroll from '../../components/ServiceScroll'
import ProjectsHeader from '../../components/ProjectsHeader'
import CapabilitiesSection from '../../components/CapabilitiesSection'
import CtaBanner from '../../components/CtaBanner'
import serviceHeroBg from '../../assets/Service Page/Hero section.jpg'
import geospatialImg from '../../assets/hero/Geospatial.jpg'
import cloudImg from '../../assets/capabilities/big-data-data-cloud.webp'
import analyticsImg from '../../assets/capabilities/Data analytics and AI.png'
import biImg from '../../assets/capabilities/Business intelligence.jpg'
import './Services.css'

const services = [
  {
    number: '01',
    label: 'WHAT WE DO',
    title: 'Geospatial intelligence and land analytics',
    description: 'See further. Move faster. Invest smarter. BDG turns Ghana\'s geography into competitive intelligence. Land, location, risk and opportunity, all visible before you commit.',
    image: geospatialImg,
  },
  {
    number: '02',
    label: 'WHAT WE DO',
    title: 'Cloud and data platforms',
    description: 'Scale on infrastructure built for growth. BDG is an AWS Certified Partner. We design, build and manage cloud and data platforms for organisations that need to move fast, scale further and process more intelligence than their current systems allow.',
    image: cloudImg,
  },
  {
    number: '03',
    label: 'WHAT WE DO',
    title: 'Data analytics and AI',
    description: 'Unlock the growth sitting in your data. Most organisations generate more intelligence than they use. BDG turns raw data into competitive decisions and manual workflows into automated systems that accelerate your team.',
    image: analyticsImg,
  },
  {
    number: '04',
    label: 'WHAT WE DO',
    title: 'Business intelligence',
    description: 'See everything. Act on what drives growth. BDG builds the business intelligence systems that give leadership real-time visibility, faster decisions and a clear view of where the next growth opportunity lives.',
    image: biImg,
  },
]

function Services() {
  return (
    <main>
      <Navbar />
      {/* Hero Section */}
      <section className="services-hero">
        <div
          className="services-hero__bg"
          style={{ backgroundImage: `url(${serviceHeroBg})` }}
        />
        <div className="services-hero__overlay" />
        <div className="services-hero__content">
          <h1 className="services-hero__title">See further. Move faster.<br />Invest smarter.</h1>
          <div className="services-hero__divider" />
          <p className="services-hero__sub">
            Ghana's geography turned into competitive intelligence before you commit.
          </p>
          {/* Scroll indicator */}
          <div className="services-hero__scroll">
            <div className="services-hero__scroll-line">
              <div className="services-hero__scroll-dot" />
            </div>
            <span className="services-hero__scroll-text">Scroll</span>
          </div>
        </div>
      </section>
      <StatsBar />

      {/* Pinned scroll services */}
      <ServiceScroll services={services} />

      <ProjectsHeader />

      <CapabilitiesSection hideHeader customCards={[
        {
          title: 'Location',
          description: 'Where should we build, expand, invest or operate?',
          image: geospatialImg,
        },
        {
          title: 'Risk',
          description: 'What risks are hidden in our assets, plans or portfolio?',
          image: cloudImg,
        },
        {
          title: 'Cloud and data',
          description: 'How do we build the infrastructure to use data better?',
          image: analyticsImg,
        },
        {
          title: 'Analytics and AI',
          description: 'What is our data telling us, and what is likely to happen next?',
          image: biImg,
        },
      ]} />

      <CtaBanner />

      <Footer />
    </main>
  )
}

export default Services
