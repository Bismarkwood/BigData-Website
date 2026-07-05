import { HeroScrollSection } from '../../components/HeroSection'
import StatsBar from '../../components/StatsBar'
import DiscoverSection from '../../components/DiscoverSection'
import AISection from '../../components/AISection'
import CapabilitiesSection from '../../components/CapabilitiesSection'
import ClientLogos from '../../components/ClientLogos'
import CtaBanner from '../../components/CtaBanner'
import InsightsSection from '../../components/InsightsSection'
import JoinCta from '../../components/JoinCta'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import SEO from '../../components/SEO'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BigData Ghana',
  url: 'https://big-data-website-eta.vercel.app',
  description: 'Geospatial intelligence, data analytics, AI and cloud solutions for better decisions across Ghana and West Africa.',
  foundingDate: '2016',
  areaServed: 'Ghana',
  sameAs: [],
  knowsAbout: ['Geospatial Intelligence', 'Data Analytics', 'AI', 'Cloud Computing', 'Earth Observation', 'Risk Intelligence'],
}

function Homepage() {
  return (
    <main>
      <SEO
        title="BigData Ghana | Geospatial Intelligence & Data Solutions"
        description="BigData Ghana combines geospatial intelligence, cloud technologies, data analytics and AI to help organisations across Ghana and West Africa make better decisions. 8+ years of Ghana-specific data."
        path="/"
        structuredData={structuredData}
      />
      <Navbar />
      <HeroScrollSection />
      <StatsBar />
      <DiscoverSection />
      <AISection />
      <CapabilitiesSection />
      <ClientLogos />
      <CtaBanner />
      <InsightsSection />
      <JoinCta />
      <Footer />
      {/* Add more homepage sections below as you build them */}
    </main>
  )
}

export default Homepage
