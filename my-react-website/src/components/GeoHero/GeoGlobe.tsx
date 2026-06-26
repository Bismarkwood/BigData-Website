import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

// Ghana/West Africa cities
const cities = [
  { name: 'Accra', lat: 5.6037, lon: -0.1870 },
  { name: 'Kumasi', lat: 6.6885, lon: -1.6244 },
  { name: 'Tamale', lat: 9.4034, lon: -0.8424 },
  { name: 'Cape Coast', lat: 5.1315, lon: -1.2795 },
  { name: 'Ho', lat: 6.6000, lon: 0.4700 },
  { name: 'Sunyani', lat: 7.3393, lon: -2.3287 },
  { name: 'Wa', lat: 10.0601, lon: -2.5099 },
  { name: 'Bolgatanga', lat: 10.7856, lon: -0.8514 },
]

// Data arc connections
const arcs = [
  [0, 2], // Accra → Tamale
  [0, 1], // Accra → Kumasi
  [1, 2], // Kumasi → Tamale
  [0, 3], // Accra → Cape Coast
  [2, 7], // Tamale → Bolgatanga
]

function latLonToVec3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  )
}

// Atmosphere glow shader
function Atmosphere() {
  const materialRef = useRef<THREE.ShaderMaterial>(null)

  const vertexShader = `
    varying vec3 vNormal;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `

  const fragmentShader = `
    varying vec3 vNormal;
    void main() {
      float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
      gl_FragColor = vec4(0.1, 0.5, 1.0, 1.0) * intensity * 0.8;
    }
  `

  return (
    <mesh scale={[1.15, 1.15, 1.15]}>
      <sphereGeometry args={[2, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        blending={THREE.AdditiveBlending}
        side={THREE.BackSide}
        transparent
      />
    </mesh>
  )
}

// Main Earth globe
function EarthGlobe() {
  const meshRef = useRef<THREE.Mesh>(null)

  // Use a procedural dark earth look via material
  const texture = useTexture('https://unpkg.com/three-globe@2.31.1/example/img/earth-blue-marble.jpg')

  return (
    <mesh ref={meshRef} rotation={[0, 3.5, 0]}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshPhongMaterial
        map={texture}
        bumpScale={0.02}
        specular={new THREE.Color('#1a3d6b')}
        shininess={8}
      />
    </mesh>
  )
}

// Wireframe overlay
function WireframeOverlay() {
  return (
    <mesh rotation={[0, 3.5, 0]}>
      <sphereGeometry args={[2.01, 36, 36]} />
      <meshBasicMaterial color="#1a8cff" wireframe transparent opacity={0.04} />
    </mesh>
  )
}

// City points with pulse
function CityPoints() {
  const groupRef = useRef<THREE.Group>(null)

  const positions = useMemo(() =>
    cities.map(c => latLonToVec3(c.lat, c.lon, 2.03)),
    []
  )

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Pulse points
      groupRef.current.children.forEach((child, i) => {
        const scale = 1 + Math.sin(clock.getElapsedTime() * 2 + i * 0.8) * 0.4
        child.scale.setScalar(scale)
      })
    }
  })

  return (
    <group ref={groupRef} rotation={[0, 3.5, 0]}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.03, 12, 12]} />
          <meshBasicMaterial color="#2ea872" transparent opacity={0.9} />
        </mesh>
      ))}
    </group>
  )
}

// Data arcs
function DataArcs() {
  const arcCurves = useMemo(() => {
    return arcs.map(([fromIdx, toIdx]) => {
      const from = latLonToVec3(cities[fromIdx].lat, cities[fromIdx].lon, 2.03)
      const to = latLonToVec3(cities[toIdx].lat, cities[toIdx].lon, 2.03)
      const mid = from.clone().add(to).multiplyScalar(0.5).normalize().multiplyScalar(2.5)
      const curve = new THREE.QuadraticBezierCurve3(from, mid, to)
      return curve.getPoints(32)
    })
  }, [])

  return (
    <group rotation={[0, 3.5, 0]}>
      {arcCurves.map((points, i) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(points)
        return (
          <line key={i} geometry={geometry}>
            <lineBasicMaterial color="#2ea872" transparent opacity={0.3} />
          </line>
        )
      })}
    </group>
  )
}

// Scanning rings
function ScanRings() {
  const ring1Ref = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.PI * 0.35
      ring1Ref.current.rotation.z = clock.getElapsedTime() * 0.15
      const s = 1 + Math.sin(clock.getElapsedTime() * 0.4) * 0.03
      ring1Ref.current.scale.setScalar(s)
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = Math.PI * 0.55
      ring2Ref.current.rotation.y = clock.getElapsedTime() * 0.1
      const s = 1 + Math.cos(clock.getElapsedTime() * 0.3) * 0.02
      ring2Ref.current.scale.setScalar(s)
    }
  })

  return (
    <>
      <mesh ref={ring1Ref}>
        <ringGeometry args={[2.4, 2.42, 128]} />
        <meshBasicMaterial color="#1a8cff" transparent opacity={0.08} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={ring2Ref}>
        <ringGeometry args={[2.6, 2.615, 128]} />
        <meshBasicMaterial color="#1a8cff" transparent opacity={0.05} side={THREE.DoubleSide} />
      </mesh>
    </>
  )
}

// Particles field
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const positions = new Float32Array(600 * 3)
    for (let i = 0; i < 600; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16
      positions[i * 3 + 2] = (Math.random() - 0.5) * 16
    }
    return positions
  }, [])

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.005
      pointsRef.current.rotation.x = clock.getElapsedTime() * 0.003
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={600}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#1a8cff" size={0.015} transparent opacity={0.3} sizeAttenuation />
    </points>
  )
}

// Rain droplets
function RainDroplets() {
  const rainRef = useRef<THREE.Points>(null)

  const { positions, velocities } = useMemo(() => {
    const count = 400
    const pos = new Float32Array(count * 3)
    const vel = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14
      pos[i * 3 + 1] = Math.random() * 10 - 5
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 + 2
      vel[i] = 0.02 + Math.random() * 0.03
    }
    return { positions: pos, velocities: vel }
  }, [])

  useFrame(() => {
    if (!rainRef.current) return
    const posArray = rainRef.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < posArray.length / 3; i++) {
      posArray[i * 3 + 1] -= velocities[i]
      if (posArray[i * 3 + 1] < -5) {
        posArray[i * 3 + 1] = 5
      }
    }
    rainRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={rainRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#6ab4ff"
        size={0.02}
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  )
}

export default function GeoGlobe() {
  return (
    <group position={[0, 0, 0]}>
      {/* Lighting */}
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 3, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-5, -2, 3]} intensity={0.6} color="#4a9eff" />
      <pointLight position={[-4, 3, -4]} intensity={0.5} color="#1a8cff" />
      <pointLight position={[3, -2, 4]} intensity={0.4} color="#ffffff" />

      {/* Globe */}
      <Atmosphere />
      <EarthGlobe />
      <WireframeOverlay />
      <CityPoints />
      <DataArcs />
      <ScanRings />
      <ParticleField />
      <RainDroplets />
    </group>
  )
}
