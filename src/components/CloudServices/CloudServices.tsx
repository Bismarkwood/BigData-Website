import './CloudServices.css'

const services = [
  {
    image: '',
    tags: ['AWS', 'MIGRATION', 'ARCHITECTURE'],
    title: 'Cloud Architecture and Migration',
    description: 'We design cloud-native architectures and migrate legacy systems to AWS — reducing cost, increasing speed, and unlocking data previously trapped in silos.',
  },
  {
    image: '',
    tags: ['DATA LAKES', 'PIPELINES', 'REAL-TIME'],
    title: 'Data Platform Engineering',
    description: 'Custom data lakes, pipelines, and warehouses that ingest, process, and serve intelligence to your team in real time. Built for scale, governed for trust.',
  },
  {
    image: '',
    tags: ['ENCRYPTION', 'COMPLIANCE', 'ACCESS CONTROL'],
    title: 'Security and Compliance',
    description: 'Enterprise-grade security, encryption, access controls, and compliance frameworks that satisfy regulators and protect your most sensitive data assets.',
  },
  {
    image: '',
    tags: ['MONITORING', '24/7', 'COST OPTIMISATION'],
    title: 'Managed Cloud Operations',
    description: 'Round-the-clock monitoring, cost optimisation, performance tuning, and incident response. We manage the infrastructure so your team focuses on building intelligence.',
  },
  {
    image: '',
    tags: ['CI/CD', 'CONTAINERS', 'AUTOMATION'],
    title: 'DevOps and Deployment',
    description: 'Automated deployment pipelines, containerised workloads, and infrastructure-as-code that accelerate your release cycle without compromising stability.',
  },
]

function CloudServices() {
  return (
    <section className="cloud-services">
      {/* Header */}
      <div className="cloud-services__header">
        <h2 className="cloud-services__heading">
          Cloud services built for<br />enterprise scale
        </h2>
        <div className="cloud-services__header-right">
          <p className="cloud-services__sub">
            From cloud migration to managed operations, BDG delivers AWS-certified infrastructure that processes intelligence at speed.
          </p>
          <a href="#" className="cloud-services__cta">
            Know More <span className="cloud-services__cta-icon">↗</span>
          </a>
        </div>
      </div>

      {/* Scrollable cards */}
      <div className="cloud-services__track">
        {services.map((service, i) => (
          <div className="cloud-services__card" key={i}>
            <div className="cloud-services__card-img">
              {service.image ? (
                <img src={service.image} alt={service.title} className="cloud-services__card-image" />
              ) : (
                <div className="cloud-services__card-placeholder" />
              )}
            </div>
            <div className="cloud-services__card-tags">
              {service.tags.map((tag) => (
                <span key={tag} className="cloud-services__card-tag">{tag}</span>
              ))}
            </div>
            <h3 className="cloud-services__card-title">{service.title}</h3>
            <p className="cloud-services__card-desc">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Bottom line */}
      <div className="cloud-services__line" />
    </section>
  )
}

export default CloudServices
