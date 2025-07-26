"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon, Sparkles, Code, User, Briefcase, Mail } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { href: "#about", label: "About", icon: User },
    { href: "#skills", label: "Skills", icon: Code },
    { href: "#projects", label: "Projects", icon: Briefcase },
    { href: "#contact", label: "Contact", icon: Mail },
  ]

  // Enhanced scroll detection and progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
      setIsScrolled(scrollTop > 50)

      // Active section detection with improved logic
      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })
      setActiveSection(currentSection || "")
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  if (!mounted) return null

  return (
    <>
      {/* Enhanced Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 via-cyan-500 to-emerald-500 transition-all duration-300 ease-out shadow-lg"
          style={{
            width: `${scrollProgress}%`,
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.6), 0 0 40px rgba(236, 72, 153, 0.4)",
          }}
        />
      </div>

      <header
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? "backdrop-blur-2xl bg-white/10 dark:bg-black/20 border-b border-white/20 dark:border-white/10"
            : "bg-transparent"
        }`}
      >
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${isScrolled ? "opacity-100" : "opacity-0"}`}
          >
            {/* Floating Orbs */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float-slow"
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${20 + (i % 2) * 60}%`,
                  width: `${20 + Math.random() * 30}px`,
                  height: `${20 + Math.random() * 30}px`,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${
                    [
                      "rgba(139, 92, 246, 0.3)",
                      "rgba(236, 72, 153, 0.3)",
                      "rgba(6, 182, 212, 0.3)",
                      "rgba(16, 185, 129, 0.3)",
                    ][i % 4]
                  } 0%, transparent 70%)`,
                  filter: "blur(10px)",
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${8 + i * 2}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center py-4">
            {/* Enhanced Logo */}
            <Link href="/" className="relative group">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  {/* Rotating Ring */}
                  <div
                    className="absolute inset-0 w-12 h-12 border-2 border-purple-500/30 rounded-full animate-spin group-hover:border-cyan-500/50 transition-colors duration-500"
                    style={{ animationDuration: "8s" }}
                  />

                  {/* Inner Glow */}
                  <div className="absolute inset-2 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full group-hover:from-purple-500/40 group-hover:to-cyan-500/40 transition-all duration-500" />

                  {/* Icon */}
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-purple-500 group-hover:text-cyan-500 transition-all duration-500 group-hover:scale-110" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-2xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-500">
                    Raja Rehan
                  </span>
                  <span className="text-xs text-muted-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Full Stack Developer
                  </span>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-cyan-500/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-500 group overflow-hidden ${
                    activeSection === item.href.substring(1)
                      ? "text-white"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {/* Background Layers */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-2xl transition-all duration-500 ${
                      activeSection === item.href.substring(1)
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                    }`}
                  />

                  {/* Animated Border */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-2xl p-[1px] transition-all duration-500 ${
                      activeSection === item.href.substring(1) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <div className="w-full h-full bg-background/80 backdrop-blur-sm rounded-2xl" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex items-center space-x-2">
                    <item.icon
                      className={`h-4 w-4 transition-all duration-500 ${
                        activeSection === item.href.substring(1) ? "text-white scale-110" : "group-hover:scale-110"
                      }`}
                    />
                    <span>{item.label}</span>
                  </div>

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl" />

                  {/* Floating Particles */}
                  {activeSection === item.href.substring(1) && (
                    <div className="absolute inset-0 overflow-hidden rounded-2xl">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white/60 rounded-full animate-float"
                          style={{
                            left: `${20 + i * 30}%`,
                            top: `${30 + i * 20}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${2 + i}s`,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </button>
              ))}

              {/* Enhanced Theme Toggle */}
              <div className="ml-6 flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="relative overflow-hidden group w-12 h-12 rounded-2xl hover:bg-transparent"
                >
                  {/* Rotating Background */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-spin"
                    style={{ animationDuration: "3s" }}
                  />

                  {/* Icon Container */}
                  <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
                    {theme === "dark" ? (
                      <Sun className="h-5 w-5 text-yellow-500 group-hover:text-yellow-400 transition-colors duration-300" />
                    ) : (
                      <Moon className="h-5 w-5 text-purple-600 group-hover:text-purple-500 transition-colors duration-300" />
                    )}
                  </div>

                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500 ${
                      theme === "dark"
                        ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                        : "bg-gradient-to-r from-purple-600 to-blue-600"
                    }`}
                  />
                </Button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-3">
              {/* Mobile Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="relative overflow-hidden group w-10 h-10 rounded-xl"
              >
                <div className="relative z-10">
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4 text-yellow-500" />
                  ) : (
                    <Moon className="h-4 w-4 text-purple-600" />
                  )}
                </div>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative overflow-hidden group w-10 h-10 rounded-xl"
              >
                <div className="relative z-10 transition-transform duration-300">
                  {isMenuOpen ? (
                    <X className="h-5 w-5 transition-transform duration-300 rotate-90" />
                  ) : (
                    <Menu className="h-5 w-5 transition-transform duration-300" />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
              isMenuOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent dark:from-black/20 dark:via-black/10 dark:to-transparent rounded-2xl backdrop-blur-xl border border-white/20 dark:border-white/10 p-4 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left px-6 py-4 rounded-xl text-base font-semibold transition-all duration-500 transform group ${
                    activeSection === item.href.substring(1)
                      ? "text-white bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-cyan-500/30 translate-x-2 scale-105"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/10 dark:hover:bg-white/5 hover:translate-x-1 hover:scale-102"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon
                      className={`h-5 w-5 transition-all duration-300 ${
                        activeSection === item.href.substring(1) ? "text-white scale-110" : "group-hover:scale-110"
                      }`}
                    />
                    <span>{item.label}</span>
                  </div>

                  {/* Active Indicator */}
                  {activeSection === item.href.substring(1) && (
                    <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Glow Line */}
        <div
          className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 via-pink-500/50 via-cyan-500/50 to-transparent transition-opacity duration-500 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        />
      </header>
    </>
  )
}
