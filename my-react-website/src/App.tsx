import { useState, useCallback } from 'react'
import IntroLoader from './components/IntroLoader'
import Homepage from './pages/Homepage'
import './App.css'

function App() {
  const [introComplete, setIntroComplete] = useState(false)

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true)
  }, [])

  return (
    <>
      {/* Intro Loader */}
      <IntroLoader onComplete={handleIntroComplete} />

      {/* Homepage — rendered after intro completes */}
      {introComplete && <Homepage />}
    </>
  )
}

export default App
