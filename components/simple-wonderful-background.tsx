"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function SimpleWonderfulBackground() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)

    const forceBackgroundChange = () => {
      const isDark = theme === "dark"

      // Clear existing backgrounds
      document.body.style.background = "none"
      document.body.style.backgroundColor = "transparent"
      document.documentElement.style.background = "none"
      document.documentElement.style.backgroundColor = "transparent"

      setTimeout(() => {
        if (isDark) {
          // Dark mode: Cyberpunk neon city
          document.body.style.background = `
            radial-gradient(circle at 25% 25%, #0a0a0a 0%, #000000 50%),
            radial-gradient(circle at 75% 75%, #1a0033 0%, #000000 50%),
            linear-gradient(135deg, #000000 0%, #0d1117 20%, #161b22 40%, #21262d 60%, #2d1b69 80%, #000000 100%)
          `
        } else {
          // Light mode: Warm sunset gradient with perfect contrast
          document.body.style.background = `
            radial-gradient(circle at 30% 20%, #fef3c7 0%, #fbbf24 20%, #f59e0b 40%),
            radial-gradient(circle at 70% 80%, #fed7aa 0%, #fb923c 20%, #ea580c 40%),
            linear-gradient(135deg, #fef3c7 0%, #fde68a 10%, #fcd34d 20%, #fbbf24 30%, #f59e0b 40%, #d97706 50%, #b45309 60%, #92400e 70%, #78350f 80%, #451a03 90%, #1c0a00 100%)
          `
        }
        document.body.style.backgroundAttachment = "fixed"
        document.body.style.backgroundSize = "100% 100%"
        document.body.style.minHeight = "100vh"
      }, 100)
    }

    forceBackgroundChange()

    const observer = new MutationObserver(forceBackgroundChange)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => {
      observer.disconnect()
    }
  }, [theme, mounted])

  if (!mounted) {
    return (
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
        }}
      />
    )
  }

  const isDark = theme === "dark"

  return (
    <>
      {/* PRIMARY BACKGROUND */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: isDark
            ? `
              radial-gradient(circle at 25% 25%, #0a0a0a 0%, #000000 50%),
              radial-gradient(circle at 75% 75%, #1a0033 0%, #000000 50%),
              linear-gradient(135deg, #000000 0%, #0d1117 20%, #161b22 40%, #21262d 60%, #2d1b69 80%, #000000 100%)
            `
            : `
              radial-gradient(circle at 30% 20%, #fef3c7 0%, #fbbf24 20%, #f59e0b 40%),
              radial-gradient(circle at 70% 80%, #fed7aa 0%, #fb923c 20%, #ea580c 40%),
              linear-gradient(135deg, #fef3c7 0%, #fde68a 10%, #fcd34d 20%, #fbbf24 30%, #f59e0b 40%, #d97706 50%, #b45309 60%, #92400e 70%, #78350f 80%, #451a03 90%, #1c0a00 100%)
            `,
          backgroundAttachment: "fixed",
          backgroundSize: "100% 100%",
        }}
      />

      {/* PATTERN OVERLAY */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: isDark
            ? `
              radial-gradient(circle at 50% 50%, #ff0080 1px, transparent 1px),
              radial-gradient(circle at 25% 75%, #00ffff 1px, transparent 1px),
              radial-gradient(circle at 75% 25%, #ff4000 1px, transparent 1px)
            `
            : `
              radial-gradient(circle at 50% 50%, #7c2d12 1px, transparent 1px),
              radial-gradient(circle at 25% 75%, #b45309 1px, transparent 1px),
              radial-gradient(circle at 75% 25%, #92400e 1px, transparent 1px)
            `,
          backgroundSize: "120px 120px, 180px 180px, 150px 150px",
          backgroundPosition: "0 0, 60px 60px, 30px 90px",
          opacity: isDark ? 0.3 : 0.2,
          animation: "patternFlow 25s linear infinite",
        }}
      />

      {/* FLOATING GEOMETRIC SHAPES */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-geometricFloat"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${30 + Math.random() * 60}px`,
              height: `${30 + Math.random() * 60}px`,
              background: isDark
                ? [
                    "linear-gradient(45deg, #ff0080, #ff4000)",
                    "linear-gradient(45deg, #00ffff, #0080ff)",
                    "linear-gradient(45deg, #ff4000, #ffff00)",
                    "linear-gradient(45deg, #8000ff, #ff0080)",
                  ][i % 4]
                : [
                    "linear-gradient(45deg, #dc2626, #b91c1c)",
                    "linear-gradient(45deg, #d97706, #b45309)",
                    "linear-gradient(45deg, #92400e, #78350f)",
                    "linear-gradient(45deg, #451a03, #1c0a00)",
                  ][i % 4],
              opacity: isDark ? 0.1 : 0.08,
              clipPath: [
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", // Hexagon
                "polygon(50% 0%, 0% 100%, 100% 100%)", // Triangle
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)", // Hexagon
                "circle(50%)", // Circle
              ][i % 4],
              animationDelay: `${i * 1.8}s`,
              animationDuration: `${25 + i * 4}s`,
              filter: "blur(2px)",
            }}
          />
        ))}
      </div>

      {/* GRID LINES */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: isDark
            ? `
              linear-gradient(90deg, transparent 98%, #ff0080 99%, #ff0080 100%),
              linear-gradient(0deg, transparent 98%, #00ffff 99%, #00ffff 100%)
            `
            : `
              linear-gradient(90deg, transparent 97%, #78350f 98%, #78350f 100%),
              linear-gradient(0deg, transparent 97%, #92400e 98%, #92400e 100%)
            `,
          backgroundSize: "100px 100px",
          opacity: isDark ? 0.15 : 0.12,
          animation: "gridPulse 10s ease-in-out infinite",
        }}
      />

      {/* ENERGY WAVES */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-energyWave"
            style={{
              left: `${i * 12.5}%`,
              top: "0%",
              width: "1px",
              height: "100%",
              background: isDark
                ? `linear-gradient(to bottom, transparent, #ff0080, #00ffff, #ff4000, transparent)`
                : `linear-gradient(to bottom, transparent, #dc2626, #d97706, #92400e, transparent)`,
              opacity: isDark ? 0.3 : 0.15,
              animationDelay: `${i * 1}s`,
              animationDuration: `${8 + i * 2}s`,
              filter: "blur(0.5px)",
            }}
          />
        ))}
      </div>

      {/* AMBIENT ORBS */}
      <div className="fixed inset-0 z-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-holoFloat"
            style={{
              left: `${20 + i * 15}%`,
              top: `${25 + (i % 2) * 30}%`,
              width: `${120 + i * 50}px`,
              height: `${120 + i * 50}px`,
              borderRadius: "50%",
              background: isDark
                ? `radial-gradient(circle, rgba(255, 0, 128, 0.15) 0%, rgba(0, 255, 255, 0.1) 50%, transparent 70%)`
                : `radial-gradient(circle, rgba(220, 38, 38, 0.12) 0%, rgba(217, 119, 6, 0.08) 50%, transparent 70%)`,
              filter: "blur(40px)",
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${15 + i * 3}s`,
            }}
          />
        ))}
      </div>

      {/* CSS ANIMATIONS */}
      <style jsx>{`
        @keyframes patternFlow {
          0% { transform: translateX(0) translateY(0) rotate(0deg); }
          25% { transform: translateX(25px) translateY(-15px) rotate(90deg); }
          50% { transform: translateX(-15px) translateY(25px) rotate(180deg); }
          75% { transform: translateX(15px) translateY(-25px) rotate(270deg); }
          100% { transform: translateX(0) translateY(0) rotate(360deg); }
        }

        @keyframes geometricFloat {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); }
          25% { transform: translateY(-70px) translateX(50px) rotate(90deg) scale(1.1); }
          50% { transform: translateY(-35px) translateX(-35px) rotate(180deg) scale(0.9); }
          75% { transform: translateY(50px) translateX(25px) rotate(270deg) scale(1.05); }
        }

        @keyframes gridPulse {
          0%, 100% { opacity: 0.08; }
          50% { opacity: 0.2; }
        }

        @keyframes energyWave {
          0% { transform: translateY(-100%) scaleY(0); opacity: 0; }
          50% { transform: translateY(0%) scaleY(1); opacity: 1; }
          100% { transform: translateY(100%) scaleY(0); opacity: 0; }
        }

        @keyframes holoFloat {
          0%, 100% { transform: translateY(0px) scale(1) rotate(0deg); }
          33% { transform: translateY(-50px) scale(1.1) rotate(120deg); }
          66% { transform: translateY(25px) scale(0.9) rotate(240deg); }
        }
      `}</style>
    </>
  )
}
