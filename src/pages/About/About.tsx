import { useEffect, useRef } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import StatsBar from '../../components/StatsBar'
import JoinCta from '../../components/JoinCta'
import HeroCTA from '../../components/HeroCTA'
import aboutHeroImg from '../../assets/About/About Hero section.jpg'
import whyBdgImg from '../../assets/Why Big Data Ghana.jpg'
import missionImg from '../../assets/Mission & Vision/Mission & Vision.jpg'
import './About.css'

const values = [
  {
    number: '01',
    title: 'Intelligence-First',
    description: 'Every solution we build starts with data. We believe the best decisions are made when backed by clear, accurate, and actionable intelligence.',
  },
  {
    number: '02',
    title: 'Local Expertise',
    description: 'We understand Ghana. Our team combines deep local knowledge with world-class technical capability to solve problems that matter here.',
  },
  {
    number: '03',
    title: 'Innovation',
    description: 'From geospatial platforms to AI-powered communication, we push boundaries to deliver solutions that set new standards in West Africa.',
  },
  {
    number: '04',
    title: 'Impact',
    description: 'We measure success by the decisions we improve. Our work protects forests, predicts floods, optimizes logistics, and strengthens businesses across Ghana.',
  },
]

const timeline = [
  { year: '2016', event: 'BigData Ghana founded with a focus on geospatial intelligence.' },
  { year: '2018', event: 'Delivered first national-scale spatial platform for government.' },
  { year: '2020', event: 'Became an AWS Partner, expanding cloud infrastructure capability.' },
  { year: '2022', event: 'Launched the National Forest Monitoring System with the Forestry Commission.' },
  { year: '2024', event: 'Released BigConnect AI and expanded into AI-powered business solutions.' },
  { year: '2025', event: 'Serving 5+ sectors with flagship products across Ghana and West Africa.' },
]

function About() {
  const mainRef = useRef<HTMLElement>(null)
  const heroRef = useRef<HTMLElement>(null)

  // Parallax scroll effect for hero
  useEffect(() => {
    const handleScroll = () => {
      const hero = heroRef.current
      if (!hero) return
      const scrollY = window.scrollY
      const bg = hero.querySelector('.about-hero__bg') as HTMLElement
      const content = hero.querySelector('.about-hero__content') as HTMLElement
      if (bg) {
        bg.style.transform = `scale(1.1) translateY(${scrollY * 0.3}px)`
      }
      if (content) {
        content.style.transform = `translateY(${scrollY * 0.15}px)`
        content.style.opacity = `${1 - scrollY / 700}`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="about-page" ref={mainRef}>
      <Navbar />

      {/* Hero */}
      <section className="about-hero" ref={heroRef}>
        <img src={aboutHeroImg} alt="" className="about-hero__bg" />
        <div className="about-hero__overlay" />
        <div className="about-hero__content">
          <h1 className="about-hero__title">
            <span>From a technology company</span>
            <span>to a decision company.</span>
          </h1>
          <p className="about-hero__sub">
            Ghana-specific decision intelligence, built over eight years.
          </p>
          <HeroCTA text="Meet Our Team" href="/team" />
        </div>
        <div className="about-hero__scroll-indicator">
          <span className="about-hero__scroll-dot" />
        </div>
      </section>

      {/* Stats */}
      <StatsBar />

      {/* Our Story */}
      <section className="about-story">
        <div className="about-story__inner">
          <div className="about-story__text">
            <span className="about-story__label">WHO WE ARE</span>
            <h2 className="about-story__heading">A Ghanaian technology and intelligence company.</h2>
            <p className="about-story__desc">
              We combine geospatial intelligence, cloud technologies, data analytics and AI to help organisations understand the places, systems, assets and risks behind their most important decisions.
            </p>
          </div>
          <div className="about-story__image">
            <img src={whyBdgImg} alt="BigData Ghana team at work" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission">
        <div className="about-mission__divider" />
        <div className="about-mission__grid">
          <div className="about-mission__card">
            <div className="about-mission__icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1E8A00" strokeWidth="1.5">
                <path d="M4 5h4v14H4z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 5l8-2v6l-8 2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="about-mission__heading">Who we are</h2>
            <p className="about-mission__text">
              A Ghanaian technology and intelligence company. We combine geospatial intelligence, cloud technologies, data analytics and AI to help organisations understand the places, systems, assets and risks behind their most important decisions.
            </p>
          </div>
          <div className="about-mission__separator" />
          <div className="about-mission__card">
            <div className="about-mission__icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1E8A00" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3"/>
                <circle cx="12" cy="12" r="8"/>
                <path d="M12 4v1M12 19v1M4 12h1M19 12h1" strokeLinecap="round"/>
              </svg>
            </div>
            <h2 className="about-mission__heading">Our advantage</h2>
            <p className="about-mission__text">
              Global platforms can show you a map. BDG helps you understand what that map means in Ghana. Our work is grounded in eight years of spatial data, technical delivery and local operating knowledge. No competitor holds what we hold.
            </p>
          </div>
        </div>
        <div className="about-mission__images">
          <div className="about-mission__img-wrap">
            <img src={missionImg} alt="BigData Ghana" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <h2 className="about-values__title">What drives us</h2>
        <div className="about-values__grid">
          {values.map((value) => (
            <div className="about-values__card" key={value.number}>
              <span className="about-values__num">({value.number})</span>
              <h3 className="about-values__card-title">{value.title}</h3>
              <p className="about-values__card-text">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline / Journey */}
      <section className="about-timeline">
        <h2 className="about-timeline__title">Our Journey</h2>
        <div className="about-timeline__list">
          {timeline.map((item) => (
            <div className="about-timeline__item" key={item.year}>
              <span className="about-timeline__year">{item.year}</span>
              <div className="about-timeline__line" />
              <p className="about-timeline__event">{item.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <JoinCta />

      <Footer />
    </main>
  )
}

export default About
