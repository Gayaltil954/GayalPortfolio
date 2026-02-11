'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { MeshDistortMaterial, type MeshDistortMaterialImpl } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

interface HeroBackgroundProps {
  scrollProgress: number
}

export function HeroBackground({ scrollProgress }: HeroBackgroundProps) {
  return (
    <Canvas
      className="pointer-events-none h-full w-full"
      style={{ height: '100%', width: '100%' }}
      gl={{ antialias: true }}
      camera={{ position: [0, 0, 8], fov: 55 }}
    >
      <color attach="background" args={["#050b16"]} />
      <fog attach="fog" args={["#050b16", 12, 22]} />
      <Scene scrollProgress={scrollProgress} />
    </Canvas>
  )
}

function Scene({ scrollProgress }: HeroBackgroundProps) {
  const blobRef = useRef<THREE.Mesh<THREE.IcosahedronGeometry, MeshDistortMaterialImpl>>(null)
  const sparklesRef = useRef<THREE.Points>(null)
  const { camera } = useThree()
  const cameraTarget = useMemo(() => new THREE.Vector3(), [])
  const particlePositions = useMemo(() => {
    const count = 1500
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 6 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }
    return positions
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (blobRef.current) {
      blobRef.current.rotation.x += 0.002
      blobRef.current.rotation.y += 0.003
      blobRef.current.position.y = Math.sin(t * 0.6) * 0.25
      blobRef.current.position.x = Math.cos(t * 0.3) * 0.15
      const material = blobRef.current.material
      if (material && !Array.isArray(material)) {
        material.distort = 0.32 + Math.sin(t * 0.5) * 0.05
      }
    }

    if (sparklesRef.current) {
      sparklesRef.current.rotation.y = t * 0.02
    }

    const depth = 8 - scrollProgress * 3
    const vertical = -0.4 + scrollProgress * 1.2
    cameraTarget.set(Math.sin(scrollProgress * Math.PI) * 0.8, vertical, depth)
    camera.position.lerp(cameraTarget, 0.05)
    camera.lookAt(0, 0, 0)
  })

  return (
    <group>
      <ambientLight intensity={0.3} />
      <directionalLight position={[4, 5, 6]} intensity={2} color="#6b7280" />
      <pointLight position={[-6, -3, -4]} intensity={0.8} color="#4b5563" />
      <pointLight position={[2, -1, 5]} intensity={0.6} color="#374151" />

      <mesh ref={blobRef} castShadow receiveShadow>
        <icosahedronGeometry args={[2, 64]} />
        <MeshDistortMaterial
          color="#1f2937"
          speed={1.2}
          distort={0.35}
          roughness={0.2}
          metalness={0.6}
          emissive="#374151"
          emissiveIntensity={0.5}
        />
      </mesh>

      <points ref={sparklesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlePositions.length / 3}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          color="#6b7280"
          transparent
          opacity={0.3}
          depthWrite={false}
        />
      </points>
    </group>
  )
}
