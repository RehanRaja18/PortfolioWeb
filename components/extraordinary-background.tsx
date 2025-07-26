"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  life: number
}

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  connections: number[]
}

export function ExtraordinaryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Theme-aware colors
    const isDark = theme === "dark"
    const colors = isDark
      ? ["#8b5cf6", "#06b6d4", "#ec4899", "#10b981", "#f59e0b"]
      : ["#7c3aed", "#0891b2", "#db2777", "#059669", "#d97706"]

    // Particle system
    const particles: Particle[] = []
    const maxParticles = 150

    // Neural network nodes
    const nodes: Node[] = []
    const maxNodes = 25

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: Math.random() * 100 + 50,
      })
    }

    // Initialize neural network nodes
    for (let i = 0; i < maxNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        connections: [],
      })
    }

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", handleMouseMove)

    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create holographic gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.sin(time) * 100,
        canvas.height / 2 + Math.cos(time) * 100,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height),
      )
      gradient.addColorStop(0, `hsla(${(time * 50) % 360}, 70%, 60%, 0.03)`)
      gradient.addColorStop(0.5, `hsla(${(time * 30 + 120) % 360}, 70%, 60%, 0.02)`)
      gradient.addColorStop(1, `hsla(${(time * 40 + 240) % 360}, 70%, 60%, 0.01)`)
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw aurora-like waves
      ctx.save()
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        ctx.strokeStyle = `hsla(${(time * 60 + i * 120) % 360}, 70%, 60%, 0.1)`
        ctx.lineWidth = 2
        for (let x = 0; x <= canvas.width; x += 10) {
          const y =
            canvas.height / 2 + Math.sin((x + time * 100) * 0.01 + i) * 50 + Math.sin((x + time * 150) * 0.005 + i) * 30
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      }
      ctx.restore()

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Mouse attraction
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          const force = (150 - distance) / 150
          particle.vx += (dx / distance) * force * 0.01
          particle.vy += (dy / distance) * force * 0.01
        }

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life -= 0.2

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Reset particle if life is over
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width
          particle.y = Math.random() * canvas.height
          particle.life = Math.random() * 100 + 50
          particle.vx = (Math.random() - 0.5) * 0.5
          particle.vy = (Math.random() - 0.5) * 0.5
        }

        // Draw particle with glow effect
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.shadowBlur = 20
        ctx.shadowColor = particle.color
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        // Draw connections between nearby particles
        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.save()
            ctx.globalAlpha = ((100 - distance) / 100) * 0.2
            ctx.strokeStyle = particle.color
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
            ctx.restore()
          }
        })
      })

      // Update and draw neural network
      nodes.forEach((node, index) => {
        node.x += node.vx
        node.y += node.vy

        // Boundary check
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Find connections
        node.connections = []
        nodes.forEach((otherNode, otherIndex) => {
          if (index !== otherIndex) {
            const dx = node.x - otherNode.x
            const dy = node.y - otherNode.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            if (distance < 200) {
              node.connections.push(otherIndex)
            }
          }
        })

        // Draw node
        ctx.save()
        ctx.shadowBlur = 15
        ctx.shadowColor = "#8b5cf6"
        ctx.fillStyle = "#8b5cf6"
        ctx.globalAlpha = 0.6
        ctx.beginPath()
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        // Draw connections
        node.connections.forEach((connectionIndex) => {
          const connectedNode = nodes[connectionIndex]
          const dx = node.x - connectedNode.x
          const dy = node.y - connectedNode.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          ctx.save()
          ctx.globalAlpha = ((200 - distance) / 200) * 0.3
          ctx.strokeStyle = "#06b6d4"
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(connectedNode.x, connectedNode.y)
          ctx.stroke()
          ctx.restore()
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [mounted, theme])

  if (!mounted) return null

  return (
    <>
      {/* Canvas for interactive effects */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ mixBlendMode: "screen" }} />

      {/* CSS-based extraordinary effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Holographic mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/20 via-transparent to-emerald-500/20 animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-orange-500/20 animate-pulse delay-2000" />
        </div>

        {/* Floating 3D geometric shapes */}
        <div className="floating-3d-shapes">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-3d"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${8 + i}s`,
              }}
            >
              <div
                className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/5 transform-gpu"
                style={{
                  clipPath:
                    i % 3 === 0
                      ? "polygon(50% 0%, 0% 100%, 100% 100%)"
                      : i % 3 === 1
                        ? "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
                        : "circle(50%)",
                  transform: `rotateX(${i * 45}deg) rotateY(${i * 30}deg)`,
                  animation: `float-3d ${8 + i}s ease-in-out infinite, rotate-3d ${10 + i}s linear infinite`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Matrix-style digital rain */}
        <div className="digital-rain">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 text-green-400/20 text-xs font-mono animate-rain"
              style={{
                left: `${i * 5}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
              }}
            >
              {Array.from({ length: 20 }, () => String.fromCharCode(0x30a0 + Math.random() * 96)).join("")}
            </div>
          ))}
        </div>

        {/* Glitch overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-glitch-1" />
          <div className="w-full h-full bg-gradient-to-l from-transparent via-cyan-400 to-transparent animate-glitch-2" />
        </div>

        {/* Prismatic light beams */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute h-full w-1 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-beam"
              style={{
                left: `${20 + i * 15}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${8 + i}s`,
                transform: `rotate(${15 + i * 10}deg)`,
              }}
            />
          ))}
        </div>
      </div>
    </>
  )
}
