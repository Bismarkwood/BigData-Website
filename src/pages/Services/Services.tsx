import { useState, useEffect, useRef } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import StatsBar from '../../components/StatsBar'
import CapabilitiesSection from '../../components/CapabilitiesSection'
import ProjectsHeader from '../../components/ProjectsHeader'
import SolutionsSlider from '../../components/SolutionsSlider'
import CtaBanner from '../../components/CtaBanner'
import JoinCta from '../../components/JoinCta'
import heroVideo1 from '../../assets/Service Page/exceedict_pindown.io_1782990761.mp4'
import heroVideo2 from '../../assets/Service Page/pinflik.com__Earth.mp4'
import heroVideo3 from '../../assets/Service Page/pinflik.com__G20_meeting_aesthetic___G20_group__Digital_world_t.mp4'
import heroVideo4 from '../../assets/Service Page/20d5a09a9048bcbf8ef4cc35d25a0c49.mp4'
import geospatialImg from '../../assets/hero/Geospatial.jpg'
import cloudImg from '../../assets/capabilities/big-data-data-cloud.webp'
import analyticsImg from '../../assets/capabilities/Data analytics and AI.png'
import biImg from '../../assets/capabilities/Business intelligence.jpg'
import './Services.css'

const heroVideos = [heroVideo1, heroVideo2, heroVideo3, heroVideo4]

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
  const [currentVideo, setCurrentVideo] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleEnded = () => {
      setCurrentVideo((prev) => (prev + 1) % heroVideos.length)
    }

    video.addEventListener('ended', handleEnded)
    return () => video.removeEventListener('ended', handleEnded)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.src = heroVideos[currentVideo]
    video.play()
  }, [currentVideo])

  return (
    <main>
      <Navbar />
      {/* Hero Section */}
      <section className="services-hero">
        <video
          ref={videoRef}
          className="services-hero__video"
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

      {/* Service cards from homepage */}
      <CapabilitiesSection />

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

      <CtaBanner />

      <JoinCta />
      <Footer />
    </main>
  )
}

export default Services
