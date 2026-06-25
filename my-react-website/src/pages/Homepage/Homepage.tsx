import { HeroScrollSection } from '../../components/HeroSection'
import StatsBar from '../../components/StatsBar'
import DiscoverSection from '../../components/DiscoverSection'
import AISection from '../../components/AISection'
import CapabilitiesSection from '../../components/CapabilitiesSection'
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
      {/* Add more homepage sections below as you build them */}
    </main>
  )
}

export default Homepage
