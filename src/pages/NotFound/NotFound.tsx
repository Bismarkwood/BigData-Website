import { useState, useEffect, useRef, useCallback, KeyboardEvent as ReactKeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

type Asteroid = {
  x: number
  y: number
  radius: number
  speed: number
}

type Laser = {
  x: number
  y: number
  speed: number
}

// Web Audio synthesizer for game sounds (no external files needed)
class GameAudio {
  private ctx: AudioContext | null = null

  private init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
    }
    if (this.ctx.state === 'suspended') this.ctx.resume()
  }

  shoot() {
    this.init()
    if (!this.ctx) return
    const osc = this.ctx.createOscillator()
    const gain = this.ctx.createGain()
    osc.connect(gain)
    gain.connect(this.ctx.destination)
    osc.type = 'square'
    osc.frequency.setValueAtTime(880, this.ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(220, this.ctx.currentTime + 0.08)
    gain.gain.setValueAtTime(0.15, this.ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08)
    osc.start()
    osc.stop(this.ctx.currentTime + 0.08)
  }

  hit() {
    this.init()
    if (!this.ctx) return
    const osc = this.ctx.createOscillator()
    const gain = this.ctx.createGain()
    osc.connect(gain)
    gain.connect(this.ctx.destination)
    osc.type = 'sawtooth'
    osc.frequency.setValueAtTime(300, this.ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.15)
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15)
    osc.start()
    osc.stop(this.ctx.currentTime + 0.15)
  }

  damage() {
    this.init()
    if (!this.ctx) return
    const osc = this.ctx.createOscillator()
    const gain = this.ctx.createGain()
    osc.connect(gain)
    gain.connect(this.ctx.destination)
    osc.type = 'sawtooth'
    osc.frequency.setValueAtTime(150, this.ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.3)
    gain.gain.setValueAtTime(0.25, this.ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3)
    osc.start()
    osc.stop(this.ctx.currentTime + 0.3)
  }

  gameOver() {
    this.init()
    if (!this.ctx) return
    const notes = [400, 350, 300, 200]
    notes.forEach((freq, i) => {
      const osc = this.ctx!.createOscillator()
      const gain = this.ctx!.createGain()
      osc.connect(gain)
      gain.connect(this.ctx!.destination)
      osc.type = 'sine'
      osc.frequency.setValueAtTime(freq, this.ctx!.currentTime + i * 0.12)
      gain.gain.setValueAtTime(0.15, this.ctx!.currentTime + i * 0.12)
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx!.currentTime + i * 0.12 + 0.2)
      osc.start(this.ctx!.currentTime + i * 0.12)
      osc.stop(this.ctx!.currentTime + i * 0.12 + 0.2)
    })
  }

  levelUp() {
    this.init()
    if (!this.ctx) return
    const notes = [400, 500, 700, 900]
    notes.forEach((freq, i) => {
      const osc = this.ctx!.createOscillator()
      const gain = this.ctx!.createGain()
      osc.connect(gain)
      gain.connect(this.ctx!.destination)
      osc.type = 'sine'
      osc.frequency.setValueAtTime(freq, this.ctx!.currentTime + i * 0.08)
      gain.gain.setValueAtTime(0.12, this.ctx!.currentTime + i * 0.08)
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx!.currentTime + i * 0.08 + 0.15)
      osc.start(this.ctx!.currentTime + i * 0.08)
      osc.stop(this.ctx!.currentTime + i * 0.08 + 0.15)
    })
  }
}

const audio = new GameAudio()

function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number | null>(null)
  const lastShotRef = useRef(0)
  const keysRef = useRef<Record<string, boolean>>({})
  const gameTimeRef = useRef(0)
  const levelRef = useRef(1)
  const comboRef = useRef(0)
  const comboTimerRef = useRef(0)

  const playerRef = useRef({ x: 90, y: 170, width: 42, height: 26 })
  const asteroidsRef = useRef<Asteroid[]>([])
  const lasersRef = useRef<Laser[]>([])
  const scoreRef = useRef(0)
  const livesRef = useRef(3)

  const [status, setStatus] = useState<'ready' | 'playing' | 'ended'>('ready')
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(3)
  const [level, setLevel] = useState(1)
  const [combo, setCombo] = useState(0)
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('bdg-orbit-highscore')
    return saved ? parseInt(saved) : 0
  })

  const stopAnimation = useCallback(() => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null
    }
  }, [])

  const endGame = useCallback(() => {
    stopAnimation()
    audio.gameOver()
    setStatus('ended')
    setHighScore(current => {
      const newHigh = Math.max(current, scoreRef.current)
      localStorage.setItem('bdg-orbit-highscore', String(newHigh))
      return newHigh
    })
  }, [stopAnimation])

  const drawGame = useCallback((ctx: CanvasRenderingContext2D, w: number, h: number) => {
    ctx.clearRect(0, 0, w, h)

    const bg = ctx.createRadialGradient(w / 2, h / 2, 20, w / 2, h / 2, w / 1.2)
    bg.addColorStop(0, '#102210')
    bg.addColorStop(0.45, '#06111d')
    bg.addColorStop(1, '#02070f')
    ctx.fillStyle = bg
    ctx.fillRect(0, 0, w, h)

    ctx.fillStyle = 'rgba(255,255,255,0.3)'
    for (let i = 0; i < 60; i++) {
      const sx = (i * 97 + gameTimeRef.current * 0.02 * (i % 3 + 1)) % w
      const sy = (i * 53) % h
      const r = i % 7 === 0 ? 1.4 : 0.6
      ctx.beginPath()
      ctx.arc(sx, sy, r, 0, Math.PI * 2)
      ctx.fill()
    }

    ctx.strokeStyle = 'rgba(30,138,0,0.08)'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.arc(w / 2, h / 2, 85, 0, Math.PI * 2)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(w / 2, h / 2, 145, 0, Math.PI * 2)
    ctx.stroke()

    // Defence line
    ctx.strokeStyle = 'rgba(255,80,80,0.15)'
    ctx.setLineDash([4, 8])
    ctx.beginPath()
    ctx.moveTo(30, 0)
    ctx.lineTo(30, h)
    ctx.stroke()
    ctx.setLineDash([])

    // Player
    const p = playerRef.current
    ctx.save()
    ctx.translate(p.x, p.y)
    ctx.shadowColor = '#1E8A00'
    ctx.shadowBlur = 20
    ctx.fillStyle = '#1E8A00'
    ctx.beginPath()
    ctx.moveTo(p.width / 2, 0)
    ctx.lineTo(-p.width / 2, -p.height / 2)
    ctx.lineTo(-p.width / 3, 0)
    ctx.lineTo(-p.width / 2, p.height / 2)
    ctx.closePath()
    ctx.fill()
    ctx.shadowBlur = 0
    ctx.fillStyle = '#030a06'
    ctx.beginPath()
    ctx.arc(3, 0, 5, 0, Math.PI * 2)
    ctx.fill()
    // Engine glow
    ctx.fillStyle = `rgba(30,138,0,${0.3 + Math.sin(gameTimeRef.current * 0.1) * 0.2})`
    ctx.beginPath()
    ctx.ellipse(-p.width / 2 - 6, 0, 4, 8, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()

    // Lasers
    lasersRef.current.forEach(laser => {
      ctx.shadowColor = '#3fc98a'
      ctx.shadowBlur = 10
      ctx.fillStyle = '#3fc98a'
      ctx.fillRect(laser.x, laser.y - 1.5, 20, 3)
      ctx.shadowBlur = 0
    })

    // Asteroids
    asteroidsRef.current.forEach(a => {
      ctx.save()
      ctx.translate(a.x, a.y)
      ctx.fillStyle = '#5a626e'
      ctx.strokeStyle = '#8a929e'
      ctx.lineWidth = 1.2
      ctx.beginPath()
      ctx.moveTo(-a.radius, -a.radius / 3)
      ctx.lineTo(-a.radius / 3, -a.radius)
      ctx.lineTo(a.radius / 2, -a.radius * 0.75)
      ctx.lineTo(a.radius, 0)
      ctx.lineTo(a.radius / 2, a.radius)
      ctx.lineTo(-a.radius / 2, a.radius * 0.7)
      ctx.closePath()
      ctx.fill()
      ctx.stroke()
      ctx.fillStyle = '#3a424e'
      ctx.beginPath()
      ctx.arc(-a.radius / 4, -a.radius / 4, a.radius / 4, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    })

    // Combo display
    if (comboRef.current > 1) {
      ctx.font = 'bold 14px Manrope, sans-serif'
      ctx.fillStyle = `rgba(63,201,138,${Math.min(1, comboTimerRef.current / 30)})`
      ctx.textAlign = 'center'
      ctx.fillText(`${comboRef.current}x COMBO`, w / 2, 30)
    }

    // Level indicator
    ctx.font = '10px Manrope, sans-serif'
    ctx.fillStyle = 'rgba(255,255,255,0.3)'
    ctx.textAlign = 'left'
    ctx.fillText(`WAVE ${levelRef.current}`, 10, h - 10)
  }, [])

  const startGame = useCallback(() => {
    stopAnimation()
    scoreRef.current = 0
    livesRef.current = 3
    asteroidsRef.current = []
    lasersRef.current = []
    gameTimeRef.current = 0
    levelRef.current = 1
    comboRef.current = 0
    comboTimerRef.current = 0
    playerRef.current = { x: 90, y: 170, width: 42, height: 26 }
    setScore(0)
    setLives(3)
    setLevel(1)
    setCombo(0)
    setStatus('playing')

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const W = 700, H = 340
    canvas.width = W
    canvas.height = H

    let prev = performance.now()
    let asteroidTimer = 0
    let lastLevelScore = 0

    const animate = (now: number) => {
      const dt = Math.min((now - prev) / 16.67, 2.5)
      prev = now
      asteroidTimer += dt
      gameTimeRef.current += dt

      // Combo decay
      if (comboTimerRef.current > 0) {
        comboTimerRef.current -= dt
        if (comboTimerRef.current <= 0) {
          comboRef.current = 0
          setCombo(0)
        }
      }

      // Level scaling — speeds up over time
      const currentLevel = Math.floor(scoreRef.current / 500) + 1
      if (currentLevel > levelRef.current) {
        levelRef.current = currentLevel
        setLevel(currentLevel)
        audio.levelUp()
      }

      const speedMultiplier = 1 + (levelRef.current - 1) * 0.15
      const spawnRate = Math.max(18, 42 - levelRef.current * 3)

      const player = playerRef.current
      const keys = keysRef.current
      const moveSpeed = 5.5

      if (keys.ArrowUp || keys.KeyW) player.y -= moveSpeed * dt
      if (keys.ArrowDown || keys.KeyS) player.y += moveSpeed * dt
      if (keys.ArrowLeft || keys.KeyA) player.x -= (moveSpeed - 0.5) * dt
      if (keys.ArrowRight || keys.KeyD) player.x += (moveSpeed - 0.5) * dt

      player.x = Math.max(35, Math.min(W - 35, player.x))
      player.y = Math.max(28, Math.min(H - 28, player.y))

      // Shoot (fire rate increases slightly with level)
      const fireRate = Math.max(160, 260 - levelRef.current * 10)
      if (keys.Space && now - lastShotRef.current > fireRate) {
        lasersRef.current.push({ x: player.x + 20, y: player.y, speed: 10 + levelRef.current * 0.5 })
        lastShotRef.current = now
        audio.shoot()
      }

      // Spawn asteroids (more frequent + faster at higher levels)
      if (asteroidTimer >= spawnRate) {
        const baseSpeed = 2.2 + Math.random() * 2.0
        asteroidsRef.current.push({
          x: W + 30,
          y: 30 + Math.random() * (H - 60),
          radius: 12 + Math.random() * 16,
          speed: baseSpeed * speedMultiplier,
        })
        asteroidTimer = 0
      }

      lasersRef.current.forEach(l => { l.x += l.speed * dt })
      asteroidsRef.current.forEach(a => { a.x -= a.speed * dt })

      lasersRef.current = lasersRef.current.filter(l => l.x < W + 30)

      // Asteroids passing defence line
      asteroidsRef.current = asteroidsRef.current.filter(a => {
        if (a.x < -40) {
          livesRef.current -= 1
          setLives(livesRef.current)
          comboRef.current = 0
          setCombo(0)
          audio.damage()
          if (livesRef.current <= 0) endGame()
          return false
        }
        return true
      })

      // Collision detection
      for (let ai = asteroidsRef.current.length - 1; ai >= 0; ai--) {
        const a = asteroidsRef.current[ai]
        const hitPlayer = Math.abs(a.x - player.x) < a.radius + player.width / 2 &&
          Math.abs(a.y - player.y) < a.radius + player.height / 2

        if (hitPlayer) {
          asteroidsRef.current.splice(ai, 1)
          livesRef.current -= 1
          setLives(livesRef.current)
          comboRef.current = 0
          setCombo(0)
          audio.damage()
          if (livesRef.current <= 0) endGame()
          continue
        }

        for (let li = lasersRef.current.length - 1; li >= 0; li--) {
          const l = lasersRef.current[li]
          if (Math.abs(l.x - a.x) < a.radius + 12 && Math.abs(l.y - a.y) < a.radius) {
            asteroidsRef.current.splice(ai, 1)
            lasersRef.current.splice(li, 1)

            // Combo system — consecutive hits multiply score
            comboRef.current += 1
            comboTimerRef.current = 90 // ~1.5 seconds to maintain combo
            setCombo(comboRef.current)

            const comboMultiplier = Math.min(5, comboRef.current)
            const points = 100 * comboMultiplier
            scoreRef.current += points
            setScore(scoreRef.current)

            audio.hit()
            break
          }
        }
      }

      drawGame(ctx, W, H)
      if (livesRef.current > 0) {
        animationFrameRef.current = requestAnimationFrame(animate)
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate)
  }, [drawGame, endGame, stopAnimation])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) {
        e.preventDefault()
      }
      keysRef.current[e.code] = true
    }
    const up = (e: KeyboardEvent) => { keysRef.current[e.code] = false }
    window.addEventListener('keydown', down)
    window.addEventListener('keyup', up)
    return () => {
      stopAnimation()
      window.removeEventListener('keydown', down)
      window.removeEventListener('keyup', up)
    }
  }, [stopAnimation])

  const handleCanvasKey = (e: ReactKeyboardEvent<HTMLCanvasElement>) => {
    if (e.code === 'Enter' && status !== 'playing') startGame()
  }

  return (
    <main className="orbit-page">
      <div className="orbit-page__stars" />
      <div className="orbit-page__grid" />

      {/* Header */}
      <header className="orbit-header">
        <Link to="/" className="orbit-header__logo">BDG</Link>
        <Link to="/" className="orbit-header__back">← Back to Homepage</Link>
      </header>

      {/* Hero */}
      <section className="orbit-hero">
        <div className="orbit-hero__rings">
          <div className="orbit-hero__ring orbit-hero__ring--1" />
          <div className="orbit-hero__ring orbit-hero__ring--2" />
        </div>
        <h1 className="orbit-hero__code">
          <span>4</span>
          <span className="orbit-hero__code-mid">0</span>
          <span>4</span>
        </h1>
        <h2 className="orbit-hero__title">Looks like you've wandered <span>off orbit.</span></h2>
        <p className="orbit-hero__sub">The page you're looking for does not exist, but your journey through BDG can continue.</p>
        <div className="orbit-hero__actions">
          <Link to="/" className="orbit-hero__btn orbit-hero__btn--primary">Return to Home</Link>
          <Link to="/services" className="orbit-hero__btn orbit-hero__btn--ghost">Explore Services →</Link>
        </div>
      </section>

      {/* Game Section */}
      <section className="orbit-game">
        <div className="orbit-game__layout">
          {/* Left panel */}
          <div className="orbit-game__sidebar">
            <div className="orbit-game__sidebar-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E8A00" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
            </div>
            <h3 className="orbit-game__sidebar-title">Orbit Defender</h3>
            <p className="orbit-game__sidebar-desc">Destroy asteroids, build combos, survive each wave. Speed increases as you score more!</p>
            <div className="orbit-game__sidebar-controls">
              <p>Move: Arrow keys / WASD</p>
              <p>Shoot: Spacebar</p>
              <p>Combo: Hit streaks = x2–x5</p>
            </div>
            <button className="orbit-game__sidebar-btn" onClick={startGame}>
              {status === 'playing' ? '↻ Restart' : '▶ Play Game'}
            </button>
          </div>

          {/* Canvas */}
          <div className="orbit-game__canvas-wrap">
            <canvas
              ref={canvasRef}
              tabIndex={0}
              onKeyDown={handleCanvasKey}
              className="orbit-game__canvas"
              aria-label="Orbit Defender game"
            />
            {status !== 'playing' && (
              <div className="orbit-game__overlay">
                <div className="orbit-game__overlay-icon">
                  {status === 'ended' ? '🏆' : '🚀'}
                </div>
                <h4 className="orbit-game__overlay-title">
                  {status === 'ended' ? 'Mission Complete' : 'Ready for launch?'}
                </h4>
                <p className="orbit-game__overlay-sub">
                  {status === 'ended'
                    ? `Score: ${score.toLocaleString()} · Wave ${level} · Best combo: ${combo}x`
                    : 'Destroy asteroids. Build combos. Survive the waves.'}
                </p>
                <button className="orbit-game__overlay-btn" onClick={startGame}>
                  {status === 'ended' ? '▶ Play Again' : '▶ Start Mission'}
                </button>
              </div>
            )}
          </div>

          {/* Right panel */}
          <div className="orbit-game__stats">
            <div className="orbit-game__stat-block">
              <span className="orbit-game__stat-label">SCORE</span>
              <span className="orbit-game__stat-value">{score.toLocaleString()}</span>
            </div>
            <div className="orbit-game__stat-block">
              <span className="orbit-game__stat-label">WAVE</span>
              <span className="orbit-game__stat-value orbit-game__stat-value--wave">{level}</span>
            </div>
            <div className="orbit-game__stat-block">
              <span className="orbit-game__stat-label">COMBO</span>
              <span className={`orbit-game__stat-value orbit-game__stat-value--combo ${combo > 2 ? 'orbit-game__stat-value--hot' : ''}`}>{combo}x</span>
            </div>
            <div className="orbit-game__stat-block">
              <span className="orbit-game__stat-label">INTEGRITY</span>
              <div className="orbit-game__lives">
                {[1, 2, 3].map(l => (
                  <span key={l} className={`orbit-game__life ${l <= lives ? 'orbit-game__life--active' : ''}`} />
                ))}
              </div>
            </div>
            <div className="orbit-game__stat-block">
              <span className="orbit-game__stat-label">HIGH SCORE</span>
              <span className="orbit-game__stat-value orbit-game__stat-value--high">{highScore.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="orbit-footer">
        <span className="orbit-footer__brand">BDG</span>
        <span className="orbit-footer__copy">© {new Date().getFullYear()} BigData Ghana Limited. All rights reserved.</span>
      </footer>
    </main>
  )
}

export default NotFound
