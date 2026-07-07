import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import bdgWave from '../../assets/intro/bdg-wave.png'
import bdgCenter from '../../assets/intro/bdg-center-icon.png'
import './PageTransition.css'

function PageTransition() {
  const location = useLocation()
  const [phase, setPhase] = useState<'idle' | 'entering' | 'active' | 'exiting'>('idle')
  const prevPath = useRef(location.pathname)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      prevPath.current = location.pathname
      return
    }

    if (location.pathname === prevPath.current) return
    prevPath.current = location.pathname

    // Phase 1: Panels scroll up to cover
    setPhase('entering')

    // Phase 2: Logo gently appears
    const activeTimer = setTimeout(() => setPhase('active'), 600)

    // Phase 3: Panels scroll down to exit
    const exitTimer = setTimeout(() => setPhase('exiting'), 1400)

    // Phase 4: Done
    const doneTimer = setTimeout(() => setPhase('idle'), 2000)

    return () => {
      clearTimeout(activeTimer)
      clearTimeout(exitTimer)
      clearTimeout(doneTimer)
    }
  }, [location.pathname])

  if (phase === 'idle') return null

  return (
    <div className={`panel-transition panel-transition--${phase}`}>
      {/* 4 Vertical Panels */}
      <div className="panel-transition__panels">
        <div className="panel-transition__panel panel-transition__panel--1" />
        <div className="panel-transition__panel panel-transition__panel--2" />
        <div className="panel-transition__panel panel-transition__panel--3" />
        <div className="panel-transition__panel panel-transition__panel--4" />
      </div>

      {/* Logo + Ripple (above panels) */}
      <div className="panel-transition__center">
        <div className="panel-transition__glow" />
        <div className="panel-transition__ripple panel-transition__ripple--1" />
        <div className="panel-transition__ripple panel-transition__ripple--2" />
        <div className="panel-transition__ripple panel-transition__ripple--3" />
        <div className="panel-transition__logo">
          <img src={bdgWave} alt="" className="panel-transition__wave" />
          <img src={bdgCenter} alt="" className="panel-transition__satellite" />
        </div>
      </div>
    </div>
  )
}

export default PageTransition
