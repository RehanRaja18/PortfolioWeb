interface SectionGlowProps {
  color?: "purple" | "cyan" | "pink" | "emerald"
  intensity?: "subtle" | "medium" | "strong"
  position?: "top" | "center" | "bottom"
}

export function SectionGlow({ color = "purple", intensity = "subtle", position = "center" }: SectionGlowProps) {
  const colors = {
    purple: "rgba(139, 92, 246, 0.1)",
    cyan: "rgba(6, 182, 212, 0.1)",
    pink: "rgba(236, 72, 153, 0.1)",
    emerald: "rgba(16, 185, 129, 0.1)",
  }

  const intensities = {
    subtle: "0.05",
    medium: "0.1",
    strong: "0.15",
  }

  const positions = {
    top: "20%",
    center: "50%",
    bottom: "80%",
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
      <div
        className="absolute w-96 h-96 rounded-full animate-pulse-gentle"
        style={{
          background: `radial-gradient(circle, ${colors[color].replace("0.1", intensities[intensity])} 0%, transparent 70%)`,
          top: positions[position],
          left: "50%",
          transform: "translateX(-50%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  )
}
