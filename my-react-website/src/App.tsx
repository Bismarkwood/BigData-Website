import { useState, useCallback } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IntroLoader from './components/IntroLoader'
import ChatWidget from './components/ChatWidget'
import Homepage from './pages/Homepage'
import Services from './pages/Services'
import Geospatial from './pages/Geospatial'
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
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/geospatial" element={<Geospatial />} />
          </Routes>
          <ChatWidget />
        </>
      )}
    </BrowserRouter>
  )
}

export default App
