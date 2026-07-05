import { useState, useCallback, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IntroLoader from './components/IntroLoader'
import ChatWidget from './components/ChatWidget'
import PageTransition from './components/PageTransition'
import Homepage from './pages/Homepage'
import './App.css'

// Lazy load pages for better performance
const Services = lazy(() => import('./pages/Services'))
const Geospatial = lazy(() => import('./pages/Geospatial'))
const CloudPlatforms = lazy(() => import('./pages/CloudPlatforms'))
const Proof = lazy(() => import('./pages/Proof'))
const Insights = lazy(() => import('./pages/Insights'))
const About = lazy(() => import('./pages/About'))
const Team = lazy(() => import('./pages/Team'))
const Contact = lazy(() => import('./pages/Contact'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))

function App() {
  const [introComplete, setIntroComplete] = useState(false)

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
          <PageTransition />
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/services" element={<Services />} />
              <Route path="/geospatial" element={<Geospatial />} />
              <Route path="/cloud-platforms" element={<CloudPlatforms />} />
              <Route path="/proof" element={<Proof />} />
              <Route path="/proof/:slug" element={<ProjectDetail />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
          <ChatWidget />
        </>
      )}
    </BrowserRouter>
  )
}

export default App
