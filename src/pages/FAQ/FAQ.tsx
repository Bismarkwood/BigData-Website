import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEO from '../../components/SEO'
import './FAQ.css'

const faqCategories = [
  {
    category: 'General',
    questions: [
      { q: 'What does BigData Ghana do?', a: 'We are a Ghanaian technology and intelligence company. We combine geospatial intelligence, cloud technologies, data analytics and AI to help organisations understand the places, systems, assets and risks behind their most important decisions.' },
      { q: 'Who are your typical clients?', a: 'We work with government agencies, banks, agricultural organisations, real estate developers, logistics companies, mining operators, and international development organisations operating in Ghana and West Africa.' },
      { q: 'How long has BDG been operating?', a: 'BigData Ghana was founded in 2016. We have over eight years of spatial data, technical delivery, and local operating knowledge across multiple sectors in Ghana.' },
      { q: 'Where are you located?', a: 'Our office is at No. 4 Blewusi Rd, Airport Residential, Accra, Ghana. GA-117-2050.' },
    ],
  },
  {
    category: 'Services',
    questions: [
      { q: 'What services do you offer?', a: 'We offer geospatial intelligence, cloud platform engineering (AWS), AI and automation, data analytics and business intelligence, satellite monitoring, and custom platform development.' },
      { q: 'Do you build custom platforms?', a: 'Yes. We design and build bespoke platforms tailored to your specific operational needs, whether that is a national monitoring system, a logistics tool, or an AI-powered communication platform.' },
      { q: 'Can you help with cloud migration?', a: 'Absolutely. As an AWS Certified Partner, we design cloud-native architectures and migrate legacy systems to AWS, reducing cost, increasing speed, and unlocking data that was previously trapped in silos.' },
      { q: 'Do you offer ongoing support after project delivery?', a: 'Yes. We provide managed cloud operations, continuous model monitoring, performance tuning, and incident response so your systems improve rather than degrade over time.' },
    ],
  },
  {
    category: 'Projects',
    questions: [
      { q: 'Can I see examples of your work?', a: 'Yes. Visit our Projects page to see case studies including ForestTrace AI, the National Forest Monitoring System, MTTD Traffic Enforcement App, GIS Elections Platform, Route Advisor, and more.' },
      { q: 'Do you work with government organisations?', a: 'Yes. We have delivered national-scale platforms for the Forestry Commission, Electoral Commission, Ghana Police Service MTTD, and other public sector bodies.' },
      { q: 'What industries do you serve?', a: 'Agriculture, banking and finance, real estate, government, logistics, mining, insurance, healthcare, and international development.' },
    ],
  },
  {
    category: 'Products',
    questions: [
      { q: 'What is SendLine SMS?', a: 'SendLine SMS is our bulk messaging platform for fast, secure, and scalable SMS communication. It supports OTP integration, campaign scheduling, delivery tracking, and a REST API for easy integration.' },
      { q: 'What is BigConnect AI?', a: 'BigConnect AI is an intelligent virtual receptionist that answers calls 24/7 in English and French. It collects caller details, provides business information, and generates actionable call summaries.' },
      { q: 'What is Maize Intelligence?', a: 'Maize Intelligence is a yield estimation tool for farmers and agribusinesses. Enter farm details and get a production estimate you can plan around, supporting multiple crop types.' },
    ],
  },
  {
    category: 'Working With Us',
    questions: [
      { q: 'How do I start a project with BDG?', a: 'Contact us through our website or call +233 59 943 2731. Tell us about the decision you are facing and we will show you what the data says. We typically start with a discovery conversation.' },
      { q: 'How long do projects typically take?', a: 'It depends on scope. A focused analysis can be delivered in weeks. A national-scale platform may take several months. We will give you a clear timeline after the discovery phase.' },
      { q: 'Do you work with organisations outside Ghana?', a: 'Yes. While our core expertise is Ghana-specific, we work with international organisations operating in West Africa and have delivered projects with USAID, GIZ, and Digital Earth Africa.' },
      { q: 'Are you hiring?', a: 'We are always looking for talented engineers, data scientists, GIS developers, and product designers. Visit our Careers page for current openings.' },
    ],
  },
]

function FAQ() {
  const [activeCategory, setActiveCategory] = useState('General')
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const currentFaq = faqCategories.find(c => c.category === activeCategory)

  // Filter questions by search
  const filteredQuestions = searchQuery.trim()
    ? faqCategories.flatMap(cat => cat.questions.map((q, i) => ({ ...q, category: cat.category, key: `${cat.category}-${i}` }))).filter(item =>
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null

  const totalQuestions = faqCategories.reduce((sum, cat) => sum + cat.questions.length, 0)

  return (
    <main className="faq-page">
      <SEO
        title="FAQ | BigData Ghana — Frequently Asked Questions"
        description="Answers to common questions about BigData Ghana's services, projects, products, and how to work with us."
        path="/faq"
      />
      <Navbar light />

      {/* Hero */}
      <section className="faq-hero">
        <span className="faq-hero__label">SUPPORT</span>
        <h1 className="faq-hero__title">Frequently Asked<br />Questions</h1>
        <p className="faq-hero__sub">Everything you need to know about BigData Ghana, our services, and how we work.</p>
        <div className="faq-hero__search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35" strokeLinecap="round"/></svg>
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="faq-hero__search-input"
          />
        </div>
        <span className="faq-hero__count">{totalQuestions} questions answered</span>
      </section>

      {/* FAQ Body */}
      <section className="faq-body">
        {/* Category tabs */}
        <div className="faq-tabs">
          {faqCategories.map(cat => (
            <button
              key={cat.category}
              className={`faq-tabs__btn ${activeCategory === cat.category ? 'faq-tabs__btn--active' : ''}`}
              onClick={() => { setActiveCategory(cat.category); setOpenQuestion(null) }}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Questions */}
        <div className="faq-questions">
          {filteredQuestions ? (
            filteredQuestions.length > 0 ? (
              filteredQuestions.map((item, i) => {
                const isOpen = openQuestion === item.key
                return (
                  <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`} key={item.key}>
                    <button
                      className="faq-item__question"
                      onClick={() => setOpenQuestion(isOpen ? null : item.key)}
                    >
                      <span>{item.q}</span>
                      <span className="faq-item__icon">{isOpen ? '−' : '+'}</span>
                    </button>
                    <div className="faq-item__answer">
                      <p>{item.a}</p>
                    </div>
                  </div>
                )
              })
            ) : (
              <p className="faq-empty">No questions match your search. Try a different term.</p>
            )
          ) : (
            currentFaq?.questions.map((item, i) => {
              const isOpen = openQuestion === `${activeCategory}-${i}`
              return (
                <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`} key={`${activeCategory}-${i}`}>
                  <button
                    className="faq-item__question"
                    onClick={() => setOpenQuestion(isOpen ? null : `${activeCategory}-${i}`)}
                  >
                    <span>{item.q}</span>
                    <span className="faq-item__icon">{isOpen ? '−' : '+'}</span>
                  </button>
                  <div className="faq-item__answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="faq-cta">
        <h2 className="faq-cta__title">Still have questions?</h2>
        <p className="faq-cta__sub">Our team is happy to help. Reach out and we will get back to you within 24 hours.</p>
        <a href="/contact" className="faq-cta__btn">Contact Us →</a>
      </section>

      <Footer />
    </main>
  )
}

export default FAQ
