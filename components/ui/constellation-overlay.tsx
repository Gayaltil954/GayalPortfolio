'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

interface ConstellationOverlayProps {
  particleCount?: number
  particleColor?: string
  lineColor?: string
  maxDistance?: number
  speed?: number
  className?: string
}

export function ConstellationOverlay({
  particleCount = 150,
  particleColor = 'rgba(96, 165, 250, 0.8)',
  lineColor = 'rgba(96, 165, 250, 0.2)',
  maxDistance = 180,
  speed = 0.3,
  className = '',
}: ConstellationOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number | undefined>(undefined)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Initialize particles with better distribution
    const initParticles = () => {
      particlesRef.current = []
      const width = canvas.width
      const height = canvas.height
      
      if (width === 0 || height === 0) return
      
      // Create evenly distributed particles across entire canvas
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          size: Math.random() * 1.5 + 1,
          opacity: Math.random() * 0.3 + 0.5,
        })
      }
    }

    // Set canvas size
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (!parent) return
      
      const width = parent.offsetWidth
      const height = parent.offsetHeight
      
      canvas.width = width
      canvas.height = height
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      
      // Reinitialize particles on resize
      initParticles()
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Mouse movement tracking for interactive effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }
    
    canvas.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return

      const width = canvas.width
      const height = canvas.height
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = width
        if (particle.x > width) particle.x = 0
        if (particle.y < 0) particle.y = height
        if (particle.y > height) particle.y = 0

        // Pulse opacity
        const pulseOpacity = 0.4 + Math.sin(Date.now() * 0.001 + i) * 0.2

        // Draw particle with glow
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particleColor.replace(/[\d.]+\)$/, `${pulseOpacity})`)
        ctx.shadowBlur = 6
        ctx.shadowColor = particleColor.replace(/[\d.]+\)$/, `${pulseOpacity * 0.6})`)
        ctx.fill()
        ctx.shadowBlur = 0

        // Draw connections to nearby particles
        particlesRef.current.forEach((otherParticle, j) => {
          if (j <= i) return // Avoid duplicate lines

          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.4
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = lineColor.replace(/[\d.]+\)$/, `${opacity})`)
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        })
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [particleCount, particleColor, lineColor, maxDistance, speed])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ 
        mixBlendMode: 'screen',
        opacity: 0.7,
        zIndex: 1,
      }}
    />
  )
}
