import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CloudStatsBar from '../../components/CloudStatsBar'
import CtaBanner from '../../components/CtaBanner'
import JoinCta from '../../components/JoinCta'
import SEO from '../../components/SEO'
import CloudHeroSection from '../../components/CloudHero'
import CloudServices from '../../components/CloudServices'
import './CloudPlatforms.css'

function CloudPlatforms() {
  return (
    <main>
      <SEO
        title="Cloud Platforms | BigData Ghana — AWS-Certified Infrastructure for Africa"
        description="Scale faster on cloud infrastructure built for growth. AWS-certified architecture, data platform engineering, security and managed operations for organisations in Ghana."
        path="/cloud-platforms"
      />
      <Navbar />
      <CloudHeroSection />

      <CloudStatsBar />

      <CloudServices />

      {/* Overview Section */}
      <section className="cloud-overview">
        <div className="cloud-overview__header">
          <h2 className="cloud-overview__heading">Infrastructure that scales with your ambition</h2>
          <p className="cloud-overview__sub">
            Most organisations outgrow their data infrastructure before they realise it. We build cloud platforms that process intelligence at the speed your business demands — certified by AWS, designed for Africa.
          </p>
        </div>

        <div className="cloud-overview__grid">
          <div className="cloud-overview__card">
            <div className="cloud-overview__card-img">
              <div className="cloud-overview__card-img-placeholder" />
            </div>
            <div className="cloud-overview__card-tags">
              <span className="cloud-overview__card-tag">01</span>
              <span className="cloud-overview__card-tag">Architecture</span>
            </div>
            <h3 className="cloud-overview__card-title">Cloud architecture and migration</h3>
            <p className="cloud-overview__card-desc">
              We design cloud-native architectures and migrate legacy systems to AWS — reducing cost, increasing speed, and unlocking data that was previously trapped in silos.
            </p>
          </div>

          <div className="cloud-overview__card">
            <div className="cloud-overview__card-img">
              <div className="cloud-overview__card-img-placeholder" />
            </div>
            <div className="cloud-overview__card-tags">
              <span className="cloud-overview__card-tag">02</span>
              <span className="cloud-overview__card-tag">Data</span>
            </div>
            <h3 className="cloud-overview__card-title">Data platform engineering</h3>
            <p className="cloud-overview__card-desc">
              Custom data lakes, pipelines, and warehouses that ingest, process, and serve intelligence to your team in real time. Built for scale, governed for trust.
            </p>
          </div>

          <div className="cloud-overview__card">
            <div className="cloud-overview__card-img">
              <div className="cloud-overview__card-img-placeholder" />
            </div>
            <div className="cloud-overview__card-tags">
              <span className="cloud-overview__card-tag">03</span>
              <span className="cloud-overview__card-tag">Security</span>
            </div>
            <h3 className="cloud-overview__card-title">Security and compliance</h3>
            <p className="cloud-overview__card-desc">
              Enterprise-grade security, encryption, access controls, and compliance frameworks that satisfy regulators and protect your most sensitive data assets.
            </p>
          </div>

          <div className="cloud-overview__card">
            <div className="cloud-overview__card-img">
              <div className="cloud-overview__card-img-placeholder" />
            </div>
            <div className="cloud-overview__card-tags">
              <span className="cloud-overview__card-tag">04</span>
              <span className="cloud-overview__card-tag">Operations</span>
            </div>
            <h3 className="cloud-overview__card-title">Managed cloud operations</h3>
            <p className="cloud-overview__card-desc">
              24/7 monitoring, cost optimisation, performance tuning, and incident response. We manage the infrastructure so your team can focus on building intelligence.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
      <JoinCta />
      <Footer />
    </main>
  )
}

export default CloudPlatforms
