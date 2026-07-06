import './CloudServices.css'

const services = [
  'AWS cloud architecture and deployment',
  'Cloud migration',
  'Managed cloud support',
  'Infrastructure monitoring',
  'Backup and disaster recovery',
  'Cloud security review',
  'Cost optimisation',
  'DevOps and CI/CD setup',
  'Server and application hosting',
  'Database and API deployment',
]

function CloudServices() {
  return (
    <section className="cloud-services">
      {/* Header */}
      <div className="cloud-services__header">
        <h2 className="cloud-services__heading">
          Services included
        </h2>
        <div className="cloud-services__header-right">
          <p className="cloud-services__sub">
            From cloud migration to managed operations, BDG delivers AWS-certified infrastructure that processes intelligence at speed.
          </p>
        </div>
      </div>

      {/* Services grid - 3 columns of cards */}
      <div className="cloud-services__grid">
        {services.map((service, i) => (
          <div className="cloud-services__card" key={i}>
            <span className="cloud-services__card-num">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="cloud-services__card-title">{service}</h3>
          </div>
        ))}
      </div>

      {/* Bottom line */}
      <div className="cloud-services__line" />
    </section>
  )
}

export default CloudServices
