interface SectionBackgroundProps {
  variant?: "purple" | "cyan" | "pink" | "gradient"
  intensity?: "light" | "medium" | "strong"
}

export function SectionBackground({ variant = "gradient", intensity = "light" }: SectionBackgroundProps) {
  const getBackground = () => {
    const intensityMap = {
      light: "0.05",
      medium: "0.1",
      strong: "0.15",
    }

    const alpha = intensityMap[intensity]

    switch (variant) {
      case "purple":
        return `radial-gradient(circle at 50% 50%, rgba(139, 92, 246, ${alpha}) 0%, transparent 70%)`
      case "cyan":
        return `radial-gradient(circle at 50% 50%, rgba(6, 182, 212, ${alpha}) 0%, transparent 70%)`
      case "pink":
        return `radial-gradient(circle at 50% 50%, rgba(236, 72, 153, ${alpha}) 0%, transparent 70%)`
      case "gradient":
      default:
        return `
          radial-gradient(circle at 20% 20%, rgba(139, 92, 246, ${alpha}) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(6, 182, 212, ${alpha}) 0%, transparent 50%)
        `
    }
  }

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: getBackground(),
        zIndex: -1,
      }}
    />
  )
}
