"use client"

import { useEffect, useState } from "react"

export function BackgroundEffects() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Large Purple Circle */}
        <div
          className="absolute w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
            top: "10%",
            left: "5%",
            animation: "float 8s ease-in-out infinite",
          }}
        />

        {/* Medium Cyan Circle */}
        <div
          className="absolute w-64 h-64 rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)",
            top: "60%",
            right: "10%",
            animation: "float 6s ease-in-out infinite 2s",
          }}
        />

        {/* Small Pink Circle */}
        <div
          className="absolute w-48 h-48 rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)",
            bottom: "20%",
            left: "15%",
            animation: "float 10s ease-in-out infinite 4s",
          }}
        />

        {/* Additional Small Shapes */}
        <div
          className="absolute w-32 h-32 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, transparent 70%)",
            top: "30%",
            right: "25%",
            animation: "float 7s ease-in-out infinite 1s",
          }}
        />

        <div
          className="absolute w-24 h-24 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.6) 0%, transparent 70%)",
            bottom: "40%",
            right: "5%",
            animation: "float 9s ease-in-out infinite 3s",
          }}
        />
      </div>

      {/* Animated Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "backgroundRotate 30s linear infinite",
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{
            background: "linear-gradient(45deg, #8b5cf6, #06b6d4)",
            top: "-200px",
            left: "-200px",
            animation: "pulse-glow 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
          style={{
            background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
            bottom: "-100px",
            right: "-100px",
            animation: "pulse-glow 6s ease-in-out infinite 2s",
          }}
        />
      </div>
    </>
  )
}
