import { useEffect, useRef } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import StatsBar from '../../components/StatsBar'
import CtaBanner from '../../components/CtaBanner'
import JoinCta from '../../components/JoinCta'
import HeroCTA from '../../components/HeroCTA'
import aboutHeroImg from '../../assets/About/About Hero section.jpg'
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

  useEffect(() => {
    const main = mainRef.current
    if (!main) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about--visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = main.querySelectorAll('.about__animate')
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
          <HeroCTA text="Meet Our Team" href="#team" />
        </div>
        <div className="about-hero__scroll-indicator">
          <span className="about-hero__scroll-dot" />
        </div>
      </section>

      {/* Stats */}
      <StatsBar />

      {/* Mission & Vision */}
      <section className="about-mission">
        <div className="about-mission__grid">
          <div className="about-mission__card about__animate">
            <span className="about-mission__label">Our Mission</span>
            <h2 className="about-mission__heading">Empower decisions with intelligence</h2>
            <p className="about-mission__text">
              To provide organisations with geospatial, data, and AI-powered solutions that transform how they understand risk, allocate resources, and plan for the future. We bring clarity to complexity.
            </p>
          </div>
          <div className="about-mission__card about__animate">
            <span className="about-mission__label">Our Vision</span>
            <h2 className="about-mission__heading">Africa's leading intelligence company</h2>
            <p className="about-mission__text">
              To be the most trusted data and geospatial intelligence partner in West Africa — building platforms that governments, businesses, and communities rely on for critical decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <h2 className="about-values__title about__animate">What drives us</h2>
        <div className="about-values__grid">
          {values.map((value) => (
            <div className="about-values__card about__animate" key={value.number}>
              <span className="about-values__num">({value.number})</span>
              <h3 className="about-values__card-title">{value.title}</h3>
              <p className="about-values__card-text">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline / Journey */}
      <section className="about-timeline">
        <h2 className="about-timeline__title about__animate">Our Journey</h2>
        <div className="about-timeline__list">
          {timeline.map((item) => (
            <div className="about-timeline__item about__animate" key={item.year}>
              <span className="about-timeline__year">{item.year}</span>
              <div className="about-timeline__line" />
              <p className="about-timeline__event">{item.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
      <JoinCta />

      <Footer />
    </main>
  )
}

export default About
