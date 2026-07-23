import { useEffect, useRef } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import StatsBar from '../../components/StatsBar'
import JoinCta from '../../components/JoinCta'
import HeroCTA from '../../components/HeroCTA'
import SEO from '../../components/SEO'
import aboutHeroImg from '../../assets/About/About Hero section.jpg'
import whyBdgImg from '../../assets/Why Big Data Ghana.jpg'
import missionImg from '../../assets/Mission & Vision/Mission & Vision.jpg'
import clientLogo1 from '../../assets/Client Logos/AFC.png'
import clientLogo2 from '../../assets/Client Logos/Indomie.png'
import clientLogo3 from '../../assets/Client Logos/Parliament of ghana.png'
import clientLogo4 from '../../assets/Client Logos/USAID Logo.png'
import clientLogo5 from '../../assets/Client Logos/GIZ.png'
import clientLogo6 from '../../assets/Client Logos/Digital Earth Africa.png'
import clientLogo7 from '../../assets/Client Logos/NITA logo.png'
import clientLogo8 from '../../assets/Client Logos/UG Logo.png'
import clientLogo9 from '../../assets/Client Logos/World Cocoa Foundation.png'
import lifeImg1 from '../../assets/Life at Big Data Ghana/007A2148SIMPI26.jpg'
import lifeImg2 from '../../assets/Life at Big Data Ghana/007A2256SIMPI26.jpg'
import lifeImg3 from '../../assets/Life at Big Data Ghana/1756482542508.jpg'
import lifeImg4 from '../../assets/Life at Big Data Ghana/1760444434707.jpg'
import lifeImg5 from '../../assets/Life at Big Data Ghana/1761132122684.jpg'
import lifeImg6 from '../../assets/Life at Big Data Ghana/1765533172285.jpg'
import lifeImg7 from '../../assets/Life at Big Data Ghana/photo_2026-07-23_09-52-24.jpg'
import lifeImg8 from '../../assets/Life at Big Data Ghana/photo_2026-07-23_09-52-27.jpg'
import teamFace1 from '../../assets/Teams/Mr. Henry Baffoe.jpg'
import teamFace2 from '../../assets/Teams/Nanayaa Fordjour.jpg'
import teamFace3 from '../../assets/Teams/Priscillia Fianu.jpg'
import teamFace4 from '../../assets/Teams/Akwasi Anto Darkwah.jpg'
import teamFace5 from '../../assets/Teams/Gertrude Chichi.jpg'
import teamFace6 from '../../assets/Teams/Logan Linford Kojo.jpg'
import teamFace7 from '../../assets/Teams/Bismark Gyebi Duah.jpg'
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

  // Scroll-triggered animations
  useEffect(() => {
    const main = mainRef.current
    if (!main) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about-reveal')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    const elements = main.querySelectorAll('.about-animate')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

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
      <SEO
        title="About Us | BigData Ghana — From Technology to Decision Intelligence"
        description="A Ghanaian technology and intelligence company. 8+ years of spatial data, AWS-certified, serving government, banking, agriculture and logistics across Ghana and West Africa."
        path="/about"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          mainEntity: {
            '@type': 'Organization',
            name: 'BigData Ghana',
            foundingDate: '2016',
            numberOfEmployees: { '@type': 'QuantitativeValue', value: 15 },
            areaServed: 'Ghana',
            knowsAbout: ['Geospatial Intelligence', 'Earth Observation', 'Data Analytics', 'Cloud Computing', 'AI'],
          },
        }}
      />
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
          <div className="about-story__images">
            <div className="about-story__image">
              <img src={whyBdgImg} alt="BigData Ghana team at work" />
            </div>
            <div className="about-story__image">
              <img src={lifeImg1} alt="Life at BigData Ghana" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission about-animate">
        <div className="about-mission__divider" />
        <div className="about-mission__grid">
          <div className="about-mission__card about-animate about-animate--delay-1">
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
          <div className="about-mission__card about-animate about-animate--delay-2">
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

      {/* Impact Showcase */}
      <section className="about-impact">
        <div className="about-impact__divider" />
        <div className="about-impact__top">
          <div className="about-impact__left">
            <h2 className="about-impact__heading">Life at Big Data Ghana</h2>
          </div>
          <div className="about-impact__right">
            <p className="about-impact__sub">
              We are a company in motion. Every quarter we solve problems that did not exist in our industry five years ago, applying intelligence to decisions that shape how Ghana's private sector grows, invests and builds. We are building something that compounds over time: eight years of spatial data, a growing proof record across real estate, banking, agriculture and logistics, and a client base that returns because the intelligence changes how they act.
            </p>
          </div>
        </div>
        <div className="about-impact__marquee">
          <div className="about-impact__track">
            <div className="about-impact__card"><img src={lifeImg1} alt="" /></div>
            <div className="about-impact__card"><img src={lifeImg2} alt="" /></div>
            <div className="about-impact__card"><img src={lifeImg3} alt="" /></div>
            <div className="about-impact__card"><img src={lifeImg4} alt="" /></div>
            <div className="about-impact__card"><img src={lifeImg5} alt="" /></div>
            <div className="about-impact__card"><img src={lifeImg6} alt="" /></div>
            <div className="about-impact__card"><img src={lifeImg7} alt="" /></div>
            <div className="about-impact__card"><img src={lifeImg8} alt="" /></div>
            {/* Duplicate for seamless loop */}
            <div className="about-impact__card"><img src={lifeImg1} alt="" /></div>
            <div className="about-impact__card"><img src={lifeImg2} alt="" /></div>
            <div className="about-impact__card"><img src={lifeImg3} alt="" /></div>
            <div className="about-impact__card"><img src={lifeImg4} alt="" /></div>
            <div className="about-impact__card"><img src={lifeImg5} alt="" /></div>
            <div className="about-impact__card"><img src={lifeImg6} alt="" /></div>
            <div className="about-impact__card"><img src={lifeImg7} alt="" /></div>
            <div className="about-impact__card"><img src={lifeImg8} alt="" /></div>
          </div>
        </div>
      </section>

      {/* Team Faces Section */}
      <section className="about-team-faces">
        <div className="about-team-faces__top">
          <div className="about-team-faces__left">
            <h2 className="about-team-faces__heading">
              <span>The people behind</span>
              <span>Big Data Ghana</span>
            </h2>
          </div>
          <div className="about-team-faces__right">
            <p className="about-team-faces__sub">A focused, senior team embedded directly into your project. Intelligence built by people who understand Ghana.</p>
          </div>
        </div>
        <div className="about-team-faces__grid">
          {/* Row 1 - slides from left */}
          <div className="about-team-faces__row about-team-faces__row--1 about-animate">
            <div className="about-team-faces__stat">
              <span className="about-team-faces__stat-num">15+</span>
              <span className="about-team-faces__stat-label">Team Members...</span>
            </div>
            <div className="about-team-faces__face"><img src={teamFace1} alt="" /></div>
            <div className="about-team-faces__face"><img src={teamFace2} alt="" /></div>
            <div className="about-team-faces__face"><img src={teamFace3} alt="" /></div>
            <div className="about-team-faces__face"><img src={teamFace4} alt="" /></div>
          </div>
          {/* Row 2 - slides from right */}
          <div className="about-team-faces__row about-team-faces__row--2 about-animate">
            <div className="about-team-faces__face"><img src={teamFace5} alt="" /></div>
            <div className="about-team-faces__face"><img src={teamFace6} alt="" /></div>
            <div className="about-team-faces__face"><img src={teamFace7} alt="" /></div>
            <div className="about-team-faces__cta-card">
              <p className="about-team-faces__cta-text">We're all about hard work, smart solutions, & impossible deadlines. No fluff, just brilliance.</p>
              <a href="/careers" className="about-team-faces__cta-btn">Careers at Big Data Ghana ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="about-testimonials">
        <div className="about-testimonials__header">
          <div className="about-testimonials__header-left">
            <span className="about-testimonials__label">TESTIMONIALS</span>
            <h2 className="about-testimonials__heading">
              CLIENT <span className="about-testimonials__heading-accent">FEEDBACK</span><br />THAT MATTERS
            </h2>
          </div>
          <div className="about-testimonials__nav">
            <button className="about-testimonials__nav-btn" id="test-prev" aria-label="Previous">←</button>
            <button className="about-testimonials__nav-btn" id="test-next" aria-label="Next">→</button>
          </div>
        </div>
        <div className="about-testimonials__body">
          <div className="about-testimonials__logos">
            <div className="about-testimonials__logo-item"><img src={clientLogo1} alt="AFC" /></div>
            <div className="about-testimonials__logo-item"><img src={clientLogo2} alt="Indomie" /></div>
            <div className="about-testimonials__logo-item"><img src={clientLogo3} alt="Parliament" /></div>
            <div className="about-testimonials__logo-item"><img src={clientLogo4} alt="USAID" /></div>
            <div className="about-testimonials__logo-item"><img src={clientLogo5} alt="GIZ" /></div>
            <div className="about-testimonials__logo-item"><img src={clientLogo6} alt="Digital Earth Africa" /></div>
            <div className="about-testimonials__logo-item"><img src={clientLogo7} alt="NITA" /></div>
            <div className="about-testimonials__logo-item"><img src={clientLogo8} alt="UG" /></div>
            <div className="about-testimonials__logo-item"><img src={clientLogo9} alt="World Cocoa Foundation" /></div>
          </div>
          <div className="about-testimonials__card">
            <span className="about-testimonials__card-industry">GEOSPATIAL INTELLIGENCE</span>
            <p className="about-testimonials__card-quote">
              "Working with BigData Ghana was transformative. Their team delivered spatial intelligence that completely changed how we assess investment risk across our portfolio."
            </p>
            <div className="about-testimonials__card-author">
              <div className="about-testimonials__card-avatar" />
              <div className="about-testimonials__card-info">
                <span className="about-testimonials__card-name">Client Partner</span>
                <span className="about-testimonials__card-role">Real Estate Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / Journey */}
      <section className="about-timeline about-animate">
        <h2 className="about-timeline__title">Our Journey</h2>
        <div className="about-timeline__list">
          {timeline.map((item, i) => (
            <div className="about-timeline__item about-animate" key={item.year} style={{ transitionDelay: `${i * 0.1}s` }}>
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
