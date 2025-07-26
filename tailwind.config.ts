import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)",
        "purple-gradient": "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
        "dark-gradient": "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)",
        "light-mesh":
          "radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)",
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "float-3d": "float-3d 8s ease-in-out infinite",
        rain: "rain 8s linear infinite",
        "glitch-1": "glitch-1 3s ease-in-out infinite",
        "glitch-2": "glitch-2 4s ease-in-out infinite",
        beam: "beam 6s ease-in-out infinite",
        "neural-pulse": "neural-pulse 2s ease-in-out infinite",
        aurora: "aurora 12s ease-in-out infinite",
        holographic: "holographic 8s ease infinite",
        breathing: "breathing 8s ease-in-out infinite",
        "float-slow": "float-slow 20s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        "wave-slow": "wave-slow 12s ease-in-out infinite",
        "rotate-slow": "rotate-slow 30s linear infinite",
        "pulse-gentle": "pulse-gentle 6s ease-in-out infinite",
        sway: "sway 10s ease-in-out infinite",
        "mesh-1": "mesh-1 20s ease-in-out infinite",
        "mesh-2": "mesh-2 25s ease-in-out infinite",
        "mesh-3": "mesh-3 30s ease-in-out infinite",
        "text-glow": "text-glow 2s ease-in-out infinite alternate",
        "rainbow-text": "rainbow-text 3s linear infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)" },
          "100%": { boxShadow: "0 0 30px rgba(139, 92, 246, 0.8)" },
        },
        "text-glow": {
          "0%": {
            textShadow:
              "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(139, 92, 246, 0.6), 0 0 30px rgba(6, 182, 212, 0.4)",
          },
          "100%": {
            textShadow:
              "0 0 20px rgba(255, 255, 255, 1), 0 0 30px rgba(139, 92, 246, 0.8), 0 0 40px rgba(6, 182, 212, 0.6)",
          },
        },
        "rainbow-text": {
          "0%": { color: "#ff006e" },
          "16.66%": { color: "#8338ec" },
          "33.33%": { color: "#3a86ff" },
          "50%": { color: "#06ffa5" },
          "66.66%": { color: "#ffbe0b" },
          "83.33%": { color: "#fb5607" },
          "100%": { color: "#ff006e" },
        },
        breathing: {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "0.5",
          },
          "50%": {
            transform: "scale(1.05)",
            opacity: "0.8",
          },
        },
        "float-slow": {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px)",
          },
          "33%": {
            transform: "translateY(-30px) translateX(20px)",
          },
          "66%": {
            transform: "translateY(15px) translateX(-15px)",
          },
        },
        twinkle: {
          "0%, 100%": {
            opacity: "0.2",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.5)",
          },
        },
        "wave-slow": {
          "0%, 100%": {
            transform: "translateX(0px)",
          },
          "50%": {
            transform: "translateX(-50px)",
          },
        },
        "rotate-slow": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        "pulse-gentle": {
          "0%, 100%": {
            opacity: "0.1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.3",
            transform: "scale(1.1)",
          },
        },
        sway: {
          "0%, 100%": {
            transform: "translateX(0px) rotate(10deg)",
          },
          "50%": {
            transform: "translateX(20px) rotate(-10deg)",
          },
        },
        "mesh-1": {
          "0%, 100%": {
            transform: "translateX(0px) translateY(0px) scale(1)",
          },
          "33%": {
            transform: "translateX(30px) translateY(-20px) scale(1.1)",
          },
          "66%": {
            transform: "translateX(-20px) translateY(30px) scale(0.9)",
          },
        },
        "mesh-2": {
          "0%, 100%": {
            transform: "translateX(0px) translateY(0px) rotate(0deg)",
          },
          "50%": {
            transform: "translateX(-40px) translateY(20px) rotate(180deg)",
          },
        },
        "mesh-3": {
          "0%, 100%": {
            transform: "translateY(0px) scale(1)",
          },
          "50%": {
            transform: "translateY(-50px) scale(1.2)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
