import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import InsightsSection from '../../components/InsightsSection'
import JoinCta from '../../components/JoinCta'
import './Insights.css'

function Insights() {
  return (
    <main>
      <Navbar />
      <section className="insights-hero">
        <div className="insights-hero__content">
          <h1 className="insights-hero__title">Insights</h1>
          <p className="insights-hero__sub">
            Perspectives on geospatial intelligence, data platforms, climate risk, and the decisions that shape Ghana's future.
          </p>
        </div>
      </section>
      <InsightsSection />
      <JoinCta />
      <Footer />
    </main>
  )
}

export default Insights
