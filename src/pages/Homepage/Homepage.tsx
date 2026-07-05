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

function Homepage() {
  return (
    <main>
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
