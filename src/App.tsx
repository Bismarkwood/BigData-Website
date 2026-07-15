import { useState, useCallback, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IntroLoader from './components/IntroLoader'
import ChatWidget from './components/ChatWidget'
import PageTransition from './components/PageTransition'
import ScrollToTop from './components/ScrollToTop'
import Homepage from './pages/Homepage'
import Proof from './pages/Proof'
import './App.css'

// Lazy load pages for better performance
const Services = lazy(() => import('./pages/Services'))
const Geospatial = lazy(() => import('./pages/Geospatial'))
const CloudPlatforms = lazy(() => import('./pages/CloudPlatforms'))
const Solutions = lazy(() => import('./pages/Solutions'))
const Insights = lazy(() => import('./pages/Insights'))
const InsightDetail = lazy(() => import('./pages/InsightDetail'))
const About = lazy(() => import('./pages/About'))
const Team = lazy(() => import('./pages/Team'))
const Careers = lazy(() => import('./pages/Careers'))
const CareerDetail = lazy(() => import('./pages/CareerDetail'))
const Contact = lazy(() => import('./pages/Contact'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const Privacy = lazy(() => import('./pages/Privacy'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  const [introComplete, setIntroComplete] = useState(true)

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true)
  }, [])

  return (
    <BrowserRouter>
      {/* Intro Loader — only on first load */}
      {!introComplete && <IntroLoader onComplete={handleIntroComplete} />}

      {/* Routes — rendered after intro completes */}
      {introComplete && (
        <>
          <ScrollToTop />
          {/* <PageTransition /> */}
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/services" element={<Services />} />
              <Route path="/geospatial" element={<Geospatial />} />
              <Route path="/cloud-platforms" element={<CloudPlatforms />} />
              <Route path="/proof" element={<Proof />} />
              <Route path="/projects" element={<Proof />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/proof/:slug" element={<ProjectDetail />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/project/:slug" element={<ProjectDetail />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:slug" element={<InsightDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/:slug" element={<CareerDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <ChatWidget />
        </>
      )}
    </BrowserRouter>
  )
}

export default App
