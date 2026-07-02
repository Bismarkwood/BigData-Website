import { useState, useCallback } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IntroLoader from './components/IntroLoader'
import ChatWidget from './components/ChatWidget'
import PageTransition from './components/PageTransition'
import Homepage from './pages/Homepage'
import Services from './pages/Services'
import Geospatial from './pages/Geospatial'
import CloudPlatforms from './pages/CloudPlatforms'
import Proof from './pages/Proof'
import Insights from './pages/Insights'
import About from './pages/About'
import Team from './pages/Team'
import Contact from './pages/Contact'
import ProjectDetail from './pages/ProjectDetail'
import './App.css'

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
          <ChatWidget />
        </>
      )}
    </BrowserRouter>
  )
}

export default App
