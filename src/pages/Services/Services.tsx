import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import StatsBar from '../../components/StatsBar'
import SEO from '../../components/SEO'
import ProjectsHeader from '../../components/ProjectsHeader'
import SolutionsSlider from '../../components/SolutionsSlider'
import CtaBanner from '../../components/CtaBanner'
import JoinCta from '../../components/JoinCta'
import heroVideo1 from '../../assets/Service Page/20d5a09a9048bcbf8ef4cc35d25a0c49.mp4'
import heroVideo2 from '../../assets/Service Page/71696-540442444_tiny.mp4'
import heroVideo3 from '../../assets/Service Page/pinflik.com__Earth.mp4'
import earthObsVideo from '../../assets/Service Page/Earth observation/ChengYiUniverse888_pindown.io_1782997840.mp4'
import dataAnalyticsVideo from '../../assets/Service Page/Data analytics/Data Analytics.mp4'
import riskVideo from '../../assets/Service Page/Risk Inteliigence/RISK Image card.mp4'
import awsComputingImg from '../../assets/Service Page/New folder/AWS Computing.jpg'
import aiAutomationVideo from '../../assets/Service Page/AI and automation/AI and automation.mp4'
import geospatialImg from '../../assets/hero/Geospatial.jpg'
import cloudImg from '../../assets/capabilities/big-data-data-cloud.webp'
import analyticsImg from '../../assets/capabilities/Data analytics and AI.png'
import biImg from '../../assets/capabilities/Business intelligence.jpg'
import './Services.css'

const heroVideos = [heroVideo1, heroVideo2, heroVideo3]

function Services() {
  const [currentVideo, setCurrentVideo] = useState(0)
  const [fading, setFading] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const switchVideo = () => {
      setFading(true)
      setTimeout(() => {
        setCurrentVideo((prev) => (prev + 1) % heroVideos.length)
        setFading(false)
      }, 600)
    }

    video.src = heroVideos[currentVideo]
    video.load()
    video.play().catch(() => {})

    video.addEventListener('ended', switchVideo)

    const fallback = setTimeout(switchVideo, 8000)

    return () => {
      video.removeEventListener('ended', switchVideo)
      clearTimeout(fallback)
    }
  }, [currentVideo])

  // Scroll animation for service blocks
  useEffect(() => {
    const blocks = document.querySelectorAll('.service-block')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('service-block--visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    )
    blocks.forEach((block) => observer.observe(block))
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <SEO
        title="Services | BigData Ghana — Geospatial, Cloud, AI & Data Analytics"
        description="Earth observation, data analytics, AI automation, cloud computing and risk intelligence services. Purpose-built for organisations operating in Ghana and West Africa."
        path="/services"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          provider: { '@type': 'Organization', name: 'BigData Ghana' },
          areaServed: 'Ghana',
          serviceType: ['Geospatial Intelligence', 'Data Analytics', 'AI Automation', 'Cloud Computing', 'Risk Intelligence'],
        }}
      />
      <Navbar />
      {/* Hero Section */}
      <section className="services-hero">
        <video
          ref={videoRef}
          className={`services-hero__video ${fading ? 'services-hero__video--fading' : ''}`}
          src={heroVideos[0]}
          autoPlay
          muted
          playsInline
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

      {/* ─── Service Sections (5-element structure) ─── */}

      {/* 01 — Geospatial Intelligence & Earth Observation */}
      <section className="service-block">
        <div className="service-block__inner">
          <div className="service-block__header">
            <span className="service-block__num">Earth observation</span>
            <h2 className="service-block__title">Geospatial intelligence<br />and earth observation</h2>
            <p className="service-block__hero-text">
              See further. Move faster. Invest smarter.
            </p>
          </div>
          <div className="service-block__body">
            <div className="service-block__outcomes">
              <h3 className="service-block__section-label">What you get</h3>
              <ul className="service-block__outcome-list">
                <li>Location risk eliminated before capital is committed</li>
                <li>Spatial intelligence competitors cannot access</li>
                <li>Evidence-based site selection backed by 8 years of data</li>
              </ul>
            </div>

          </div>
          <div className="service-block__ctas">
            <Link to="/geospatial" className="service-block__cta-primary">Accelerate next level location decision</Link>
          </div>
        </div>
        <div className="service-block__image">
          <video src={earthObsVideo} autoPlay muted loop playsInline className="service-block__video" />
        </div>
      </section>

      {/* 02 — Cloud Computing */}
      <section className="service-block service-block--reversed">
        <div className="service-block__inner">
          <div className="service-block__header">
            <span className="service-block__num">Cloud · AWS</span>
            <h2 className="service-block__title">Cloud computing</h2>
            <p className="service-block__hero-text">
              Scale faster on infrastructure built for where you are going.
            </p>
          </div>
          <div className="service-block__body">
            <div className="service-block__outcomes">
              <h3 className="service-block__section-label">What you get</h3>
              <ul className="service-block__outcome-list">
                <li>Cloud infrastructure that processes intelligence at speed</li>
                <li>Data accessible in real time, not trapped in silos</li>
                <li>Systems that scale without rebuilding</li>
              </ul>
            </div>

          </div>
          <div className="service-block__ctas">
            <Link to="/cloud-platforms" className="service-block__cta-primary">Start your AWS migration</Link>
          </div>
        </div>
        <div className="service-block__image">
          <img src={awsComputingImg} alt="Cloud Computing" />
        </div>
      </section>

      {/* 03 — AI and Automation */}
      <section className="service-block">
        <div className="service-block__inner">
          <div className="service-block__header">
            <span className="service-block__num">AI and automation</span>
            <h2 className="service-block__title">AI and automation</h2>
            <p className="service-block__hero-text">
              Automate the routine. Accelerate what matters.
            </p>
          </div>
          <div className="service-block__body">
            <div className="service-block__outcomes">
              <h3 className="service-block__section-label">What you get</h3>
              <ul className="service-block__outcome-list">
                <li>Manual workflows replaced with intelligent automation</li>
                <li>Predictive models that forecast what happens next</li>
                <li>AI systems built for your specific business context</li>
              </ul>
            </div>

          </div>
          <div className="service-block__ctas">
            <Link to="/ai-automation" className="service-block__cta-primary">See what we can automate for you</Link>
          </div>
        </div>
        <div className="service-block__image">
          <video src={aiAutomationVideo} autoPlay muted loop playsInline className="service-block__video" />
        </div>
      </section>

      {/* 04 — Data Analytics */}
      <section className="service-block service-block--reversed">
        <div className="service-block__inner">
          <div className="service-block__header">
            <span className="service-block__num">Analytics</span>
            <h2 className="service-block__title">Data analytics</h2>
            <p className="service-block__hero-text">
              Unlock the growth already sitting in your data.
            </p>
          </div>
          <div className="service-block__body">
            <div className="service-block__outcomes">
              <h3 className="service-block__section-label">What you get</h3>
              <ul className="service-block__outcome-list">
                <li>Raw data transformed into competitive decisions</li>
                <li>Patterns and trends visible before your competitors see them</li>
                <li>Clear, actionable reporting for leadership</li>
              </ul>
            </div>

          </div>
          <div className="service-block__ctas">
            <Link to="/data-analytics" className="service-block__cta-primary">See what we can unlock for you</Link>
          </div>
        </div>
        <div className="service-block__image">
          <video src={dataAnalyticsVideo} autoPlay muted loop playsInline className="service-block__video" />
        </div>
      </section>

      {/* 05 — Risk Intelligence */}
      <section className="service-block">
        <div className="service-block__inner">
          <div className="service-block__header">
            <span className="service-block__num">Cross-service lens</span>
            <h2 className="service-block__title">Risk intelligence</h2>
            <p className="service-block__hero-text">
              See risk before it becomes loss.
            </p>
          </div>
          <div className="service-block__body">
            <div className="service-block__outcomes">
              <h3 className="service-block__section-label">What you get</h3>
              <ul className="service-block__outcome-list">
                <li>Risk visible across geography, operations and assets</li>
                <li>Early warning systems that protect before events occur</li>
                <li>Decision confidence backed by multi-layer intelligence</li>
              </ul>
            </div>

          </div>
          <div className="service-block__ctas">
            <Link to="/contact" className="service-block__cta-primary">Map your risk</Link>
          </div>
        </div>
        <div className="service-block__image">
          <video src={riskVideo} autoPlay muted loop playsInline className="service-block__video" />
        </div>
      </section>

      <ProjectsHeader />

      <SolutionsSlider solutions={[
        {
          label: 'LOCATION',
          title: 'Where should we build, expand, invest or operate?',
          description: 'BDG turns Ghana\'s geography into competitive intelligence. Land, location, risk and opportunity — all visible before you commit.',
          image: geospatialImg,
          cardLabel: 'Location',
          link: '/geospatial',
        },
        {
          label: 'RISK',
          title: 'What risks are hidden in our assets, plans or portfolio?',
          description: 'We map what others cannot see — flood zones, encroachment patterns, land disputes, infrastructure gaps — so you invest with confidence.',
          image: cloudImg,
          cardLabel: 'Risk',
          link: '#',
        },
        {
          label: 'CLOUD AND DATA',
          title: 'How do we build the infrastructure to use data better?',
          description: 'We design, build and manage cloud and data platforms for organisations that need to move fast, scale further and process more intelligence.',
          image: analyticsImg,
          cardLabel: 'Cloud and data',
          link: '/cloud-platforms',
        },
        {
          label: 'ANALYTICS AND AI',
          title: 'What is our data telling us, and what is likely to happen next?',
          description: 'BDG turns raw data into competitive decisions and manual workflows into automated systems that accelerate your team.',
          image: biImg,
          cardLabel: 'Analytics and AI',
          link: '#',
        },
      ]} />

      <JoinCta />
      <Footer />
    </main>
  )
}

export default Services
