"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ExternalLink,
  Github,
  Star,
  Eye,
  Calendar,
  Users,
  Code,
  Zap,
  Award,
  TrendingUp,
  Play,
  Heart,
  Bookmark,
  Share,
} from "lucide-react"
import Image from "next/image"
import { SectionBackground } from "@/components/section-background"
import { useState, useRef } from "react"

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "masonry" | "carousel">("masonry")
  const [likedProjects, setLikedProjects] = useState<Set<number>>(new Set())
  const [bookmarkedProjects, setBookmarkedProjects] = useState<Set<number>>(new Set())
  const containerRef = useRef<HTMLDivElement>(null)

  const categories = [
    { id: "all", label: "All", icon: Code, count: 12, color: "from-slate-500 to-gray-500" },
    { id: "web", label: "Web Apps", icon: Zap, count: 6, color: "from-blue-500 to-cyan-500" },
    { id: "mobile", label: "Mobile", icon: Users, count: 3, color: "from-green-500 to-emerald-500" },
    { id: "ai", label: "AI/ML", icon: Award, count: 3, color: "from-purple-500 to-pink-500" },
  ]

  const projects = [
    {
      id: 1,
      title: "Netflix Clone Pro",
      subtitle: "Full-Stack Streaming Platform",
      description:
        "A comprehensive Netflix clone with advanced features including user authentication, movie streaming, personalized recommendations, watchlists, admin panel, and payment integration.",
      image: "/images/netflix-clone-hero.png",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe", "AWS", "Socket.io", "Redis"],
      category: "web",
      liveUrl: "https://netflix-clone-demo.vercel.app",
      githubUrl: "https://github.com/rajarehann/netflix-clone",
      stats: { stars: 245, views: "5.2k", forks: 89, likes: 156 },
      status: "Live",
      featured: true,
      difficulty: "Advanced",
      timeline: "3 months",
      team: "Solo Project",
      highlights: ["Real-time streaming", "AI recommendations", "Payment gateway", "Admin dashboard"],
      colors: {
        primary: "from-red-500 via-pink-500 to-rose-500",
        secondary: "from-red-600 via-pink-600 to-rose-600",
        accent: "bg-red-500/10",
        border: "border-red-500/30",
        glow: "shadow-red-500/25",
      },
      size: "large", // For masonry layout
    },
    {
      id: 2,
      title: "AI Chat Interface",
      subtitle: "Intelligent Conversation Platform",
      description:
        "Modern chat interface with AI integration, real-time messaging, smart response generation, and advanced natural language processing capabilities.",
      image: "/images/ai-chat-interface.png",
      technologies: ["Next.js", "OpenAI", "WebSocket", "Redis", "Python", "TensorFlow"],
      category: "ai",
      liveUrl: "https://ai-chat-pro.vercel.app",
      githubUrl: "https://github.com/rajarehann/ai-chat",
      stats: { stars: 298, views: "6.7k", forks: 124, likes: 203 },
      status: "Live",
      featured: true,
      difficulty: "Expert",
      timeline: "4 months",
      team: "2 developers",
      highlights: ["GPT-4 integration", "Voice recognition", "Multi-language", "Context awareness"],
      colors: {
        primary: "from-blue-500 via-cyan-500 to-teal-500",
        secondary: "from-blue-600 via-cyan-600 to-teal-600",
        accent: "bg-blue-500/10",
        border: "border-blue-500/30",
        glow: "shadow-blue-500/25",
      },
      size: "medium",
    },
    {
      id: 3,
      title: "E-Commerce Dashboard",
      subtitle: "Advanced Analytics Platform",
      description:
        "Comprehensive admin dashboard for e-commerce with real-time analytics, inventory management, order tracking, and advanced reporting features.",
      image: "/images/ecommerce-dashboard.png",
      technologies: ["React", "TypeScript", "Tailwind", "Chart.js", "PostgreSQL", "Express"],
      category: "web",
      liveUrl: "https://ecommerce-dashboard-demo.vercel.app",
      githubUrl: "https://github.com/rajarehann/ecommerce-dashboard",
      stats: { stars: 189, views: "3.8k", forks: 67, likes: 134 },
      status: "Live",
      featured: true,
      difficulty: "Advanced",
      timeline: "2 months",
      team: "Solo Project",
      highlights: ["Real-time analytics", "Inventory management", "Order tracking", "Custom reports"],
      colors: {
        primary: "from-purple-500 via-violet-500 to-indigo-500",
        secondary: "from-purple-600 via-violet-600 to-indigo-600",
        accent: "bg-purple-500/10",
        border: "border-purple-500/30",
        glow: "shadow-purple-500/25",
      },
      size: "small",
    },
    {
      id: 4,
      title: "Task Management Mobile",
      subtitle: "Cross-Platform Productivity App",
      description:
        "Collaborative task management mobile app with real-time updates, team collaboration, project tracking, and advanced notification system.",
      image: "/images/mobile-task-app.png",
      technologies: ["React Native", "TypeScript", "Firebase", "Redux", "Expo"],
      category: "mobile",
      liveUrl: "https://taskflow-app.vercel.app",
      githubUrl: "https://github.com/rajarehann/taskflow-mobile",
      stats: { stars: 156, views: "2.9k", forks: 45, likes: 98 },
      status: "Beta",
      featured: false,
      difficulty: "Intermediate",
      timeline: "2.5 months",
      team: "3 developers",
      highlights: ["Cross-platform", "Offline sync", "Push notifications", "Team collaboration"],
      colors: {
        primary: "from-green-500 via-emerald-500 to-teal-500",
        secondary: "from-green-600 via-emerald-600 to-teal-600",
        accent: "bg-green-500/10",
        border: "border-green-500/30",
        glow: "shadow-green-500/25",
      },
      size: "medium",
    },
    {
      id: 5,
      title: "Weather AI Predictor",
      subtitle: "Machine Learning Weather App",
      description:
        "Advanced weather application with AI-powered predictions, location-based forecasts, interactive maps, and detailed climate analytics.",
      image: "/images/weather-ai-app.png",
      technologies: ["Python", "TensorFlow", "React", "D3.js", "Weather API", "Docker"],
      category: "ai",
      liveUrl: "https://weather-ai-predictor.vercel.app",
      githubUrl: "https://github.com/rajarehann/weather-ai",
      stats: { stars: 134, views: "2.1k", forks: 38, likes: 87 },
      status: "Live",
      featured: false,
      difficulty: "Advanced",
      timeline: "3 months",
      team: "Solo Project",
      highlights: ["AI predictions", "Interactive maps", "Climate analytics", "Severe weather alerts"],
      colors: {
        primary: "from-cyan-500 via-sky-500 to-blue-500",
        secondary: "from-cyan-600 via-sky-600 to-blue-600",
        accent: "bg-cyan-500/10",
        border: "border-cyan-500/30",
        glow: "shadow-cyan-500/25",
      },
      size: "small",
    },
    {
      id: 6,
      title: "Crypto Portfolio Tracker",
      subtitle: "Real-time Trading Dashboard",
      description:
        "Comprehensive cryptocurrency tracking platform with portfolio management, price alerts, market analysis, and automated trading features.",
      image: "/images/crypto-portfolio.png",
      technologies: ["React", "Node.js", "MongoDB", "WebSocket", "CoinGecko API", "Chart.js"],
      category: "web",
      liveUrl: "https://crypto-tracker-pro.vercel.app",
      githubUrl: "https://github.com/rajarehann/crypto-tracker",
      stats: { stars: 203, views: "4.1k", forks: 76, likes: 145 },
      status: "Live",
      featured: false,
      difficulty: "Advanced",
      timeline: "2 months",
      team: "Solo Project",
      highlights: ["Real-time tracking", "Portfolio optimization", "Price alerts", "Market analysis"],
      colors: {
        primary: "from-yellow-500 via-orange-500 to-amber-500",
        secondary: "from-yellow-600 via-orange-600 to-amber-500",
        accent: "bg-yellow-500/10",
        border: "border-yellow-500/30",
        glow: "shadow-yellow-500/25",
      },
      size: "large",
    },
  ]

  const filteredProjects = projects.filter((project) => activeFilter === "all" || project.category === activeFilter)

  const handleLiveDemo = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const handleGithub = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const toggleLike = (projectId: number) => {
    setLikedProjects((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(projectId)) {
        newSet.delete(projectId)
      } else {
        newSet.add(projectId)
      }
      return newSet
    })
  }

  const toggleBookmark = (projectId: number) => {
    setBookmarkedProjects((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(projectId)) {
        newSet.delete(projectId)
      } else {
        newSet.add(projectId)
      }
      return newSet
    })
  }

  const getMasonryClass = (size: string, index: number) => {
    if (viewMode !== "masonry") return ""

    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2"
      case "medium":
        return index % 3 === 0 ? "md:row-span-2" : ""
      case "small":
      default:
        return ""
    }
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <SectionBackground variant="purple" intensity="light" />

      {/* Revolutionary Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Code Symbols */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl font-mono opacity-5 animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${15 + i * 2}s`,
              color: ["#3b82f6", "#8b5cf6", "#ec4899", "#10b981", "#f59e0b"][i % 5],
            }}
          >
            {["</>", "{}", "[]", "()", "&&", "||", "=>", "!=", "===", "..."][i % 10]}
          </div>
        ))}

        {/* Geometric Patterns */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-spin"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              background: `conic-gradient(from ${i * 18}deg, transparent, ${
                ["#3b82f6", "#8b5cf6", "#ec4899", "#10b981", "#f59e0b"][i % 5]
              }20, transparent)`,
              borderRadius: "50%",
              animationDuration: `${20 + i * 5}s`,
              opacity: 0.1,
            }}
          />
        ))}
      </div>

      {/* Hero Background Image */}
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{
          // backgroundImage: "url('/images/project-hero-bg.png')",
          filter: "blur(1px)",
        }}
      />

      {/* Code Pattern Background */}
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat mix-blend-overlay"
        style={{
          // backgroundImage: "url('/images/code-background.png')",
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10" ref={containerRef}>
        {/* Revolutionary Header */}
        <div className="text-center mb-16 relative">
          {/* Animated Background Text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <span className="text-9xl font-black text-gradient bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              PROJECTS
            </span>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-full mb-8 backdrop-blur-xl border border-white/10">
              <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 p-4 rounded-full animate-pulse">
                <Code className="h-10 w-10 text-white" />
              </div>
            </div>

            <h2 className="text-6xl sm:text-7xl font-black mb-8 relative">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400 bg-clip-text text-transparent text-super-bright text-glow">
                My Projects
              </span>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce opacity-60" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse opacity-60" />
              <div className="absolute top-1/2 -right-12 w-6 h-6 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full animate-ping opacity-40" />
            </h2>

            <p className="text-2xl max-w-4xl mx-auto text-bright font-semibold leading-relaxed mb-8">
              Crafting digital experiences with{" "}
              <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent font-bold animate-pulse">
                cutting-edge technologies
              </span>{" "}
              and innovative solutions that push the boundaries of what's possible
            </p>
          </div>
        </div>

        {/* Revolutionary Filter & View Controls */}
        <div className="mb-12 space-y-6">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-700 overflow-hidden transform-gpu ${
                  activeFilter === category.id
                    ? "text-white scale-110 shadow-2xl"
                    : "text-bright hover:text-super-bright hover:scale-105"
                }`}
              >
                {/* Animated Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl transition-all duration-700 ${
                    activeFilter === category.id
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-90 group-hover:opacity-80 group-hover:scale-100"
                  }`}
                />

                {/* Glowing Border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl p-[2px] transition-all duration-700 ${
                    activeFilter === category.id ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                  }`}
                >
                  <div className="w-full h-full bg-background/90 backdrop-blur-sm rounded-2xl" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex items-center space-x-3">
                  <category.icon className="h-6 w-6" />
                  <span>{category.label}</span>
                  <Badge className={`bg-gradient-to-r ${category.color} text-white text-sm px-3 py-1`}>
                    {category.count}
                  </Badge>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl" />

                {/* Particle Burst */}
                {activeFilter === category.id && (
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full animate-ping"
                        style={{
                          left: `${20 + i * 10}%`,
                          top: `${30 + (i % 2) * 40}%`,
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: `${1 + i * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* View Mode Controls */}
          <div className="flex justify-center gap-2">
            {[
              { mode: "masonry", label: "Masonry", icon: "⬜" },
              { mode: "grid", label: "Grid", icon: "▦" },
              { mode: "carousel", label: "Carousel", icon: "→" },
            ].map((view) => (
              <button
                key={view.mode}
                onClick={() => setViewMode(view.mode as any)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  viewMode === view.mode
                    ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg"
                    : "bg-white/10 dark:bg-black/20 text-bright hover:bg-white/20 dark:hover:bg-black/30"
                }`}
              >
                <span className="mr-2">{view.icon}</span>
                {view.label}
              </button>
            ))}
          </div>
        </div>

        {/* Revolutionary Projects Display */}
        <div
          className={`${
            viewMode === "masonry"
              ? "columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
              : viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "flex overflow-x-auto gap-8 pb-4"
          }`}
        >
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`group relative overflow-hidden border-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85 dark:from-black/90 dark:via-black/80 dark:to-black/70 backdrop-blur-xl transition-all duration-700 cursor-pointer transform-gpu will-change-transform hover:scale-105 hover:-rotate-1 ${project.colors.glow} hover:shadow-2xl ${
                viewMode === "masonry" ? "break-inside-avoid mb-8" : ""
              } ${viewMode === "carousel" ? "flex-shrink-0 w-80" : ""}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Animated Border */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.colors.primary} rounded-2xl p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              >
                <div className="w-full h-full bg-background rounded-2xl" />
              </div>

              {/* Project Image with Revolutionary Overlay */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <div className="aspect-video relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  {/* Multi-Layer Overlay System */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Holographic Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.colors.primary} opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay`}
                  />

                  {/* Status Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge
                      className={`${
                        project.status === "Live"
                          ? "bg-green-500/90 text-white border-0"
                          : project.status === "Beta"
                            ? "bg-yellow-500/90 text-white border-0"
                            : "bg-blue-500/90 text-white border-0"
                      } backdrop-blur-sm font-bold`}
                    >
                      {project.status}
                    </Badge>
                    {project.featured && (
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 font-bold">
                        <Award className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* Interactive Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleLike(project.id)
                      }}
                      className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                        likedProjects.has(project.id)
                          ? "bg-red-500 text-white"
                          : "bg-white/20 text-white hover:bg-red-500"
                      }`}
                    >
                      <Heart className="h-4 w-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleBookmark(project.id)
                      }}
                      className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                        bookmarkedProjects.has(project.id)
                          ? "bg-blue-500 text-white"
                          : "bg-white/20 text-white hover:bg-blue-500"
                      }`}
                    >
                      <Bookmark className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-full bg-white/20 text-white hover:bg-purple-500 backdrop-blur-sm transition-all duration-300">
                      <Share className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Central Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button
                      onClick={() => handleLiveDemo(project.liveUrl)}
                      className={`p-6 rounded-full bg-gradient-to-r ${project.colors.primary} text-white shadow-2xl hover:scale-110 transition-all duration-300 backdrop-blur-sm`}
                    >
                      <Play className="h-8 w-8 ml-1" />
                    </button>
                  </div>

                  {/* Bottom Stats Bar */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Star className="h-3 w-3" />
                        {project.stats.stars}
                      </div>
                      <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Eye className="h-3 w-3" />
                        {project.stats.views}
                      </div>
                      <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Heart className="h-3 w-3" />
                        {project.stats.likes}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Calendar className="h-3 w-3" />
                      {project.timeline}
                    </div>
                  </div>
                </div>
              </div>

              {/* Revolutionary Content Section */}
              <CardContent className="p-6 relative z-10">
                {/* Title & Subtitle */}
                <div className="mb-4">
                  <h3 className="text-2xl font-black text-super-bright group-hover:text-glow transition-all duration-300 mb-2">
                    {project.title}
                  </h3>
                  <p
                    className={`text-sm font-bold bg-gradient-to-r ${project.colors.primary} bg-clip-text text-transparent mb-3`}
                  >
                    {project.subtitle}
                  </p>
                  <p className="text-bright font-medium leading-relaxed line-clamp-3">{project.description}</p>
                </div>

                {/* Technology Stack with Animated Tags */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-bright mb-3 flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 6).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className={`text-xs font-semibold bg-gradient-to-r ${project.colors.primary} text-white border-0 hover:scale-110 transition-all duration-300 cursor-pointer`}
                        style={{
                          animationDelay: `${techIndex * 0.1}s`,
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 6 && (
                      <Badge className="text-xs bg-muted/50 text-muted-foreground">
                        +{project.technologies.length - 6}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-bright mb-3 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.highlights.slice(0, 4).map((highlight, idx) => (
                      <div
                        key={idx}
                        className="text-xs px-3 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-center hover:scale-105 transition-transform duration-300"
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    className={`flex-1 btn-hover-effect bg-gradient-to-r ${project.colors.primary} hover:${project.colors.secondary} text-white border-0 font-bold shadow-lg`}
                    onClick={() => handleLiveDemo(project.liveUrl)}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    className={`btn-hover-effect ${project.colors.border} text-bright hover:bg-gradient-to-r hover:${project.colors.primary} hover:text-white bg-transparent font-semibold`}
                    onClick={() => handleGithub(project.githubUrl)}
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>

                {/* Floating Particles Effect */}
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${project.colors.primary} rounded-full animate-float opacity-60`}
                        style={{
                          left: `${10 + i * 6}%`,
                          top: `${10 + (i % 5) * 18}%`,
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: `${1 + i * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Revolutionary Statistics Dashboard */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              label: "Total Projects",
              value: "50+",
              icon: Code,
              color: "from-blue-500 to-cyan-500",
              bgColor: "bg-blue-500/10",
            },
            {
              label: "GitHub Stars",
              value: "1.2k+",
              icon: Star,
              color: "from-yellow-500 to-orange-500",
              bgColor: "bg-yellow-500/10",
            },
            {
              label: "Live Deployments",
              value: "35+",
              icon: TrendingUp,
              color: "from-green-500 to-emerald-500",
              bgColor: "bg-green-500/10",
            },
            {
              label: "Technologies Used",
              value: "25+",
              icon: Zap,
              color: "from-purple-500 to-pink-500",
              bgColor: "bg-purple-500/10",
            },
          ].map((stat, index) => (
            <Card
              key={index}
              className="group text-center p-8 bg-gradient-to-br from-white/95 via-white/90 to-white/85 dark:from-black/90 dark:via-black/80 dark:to-black/70 backdrop-blur-xl border-2 border-purple-500/20 hover:border-purple-500/40 hover:scale-110 hover:rotate-3 transition-all duration-500 cursor-pointer"
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 ${stat.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
              >
                <stat.icon className={`h-8 w-8 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
              </div>
              <div className={`text-4xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-sm text-bright font-bold">{stat.label}</div>

              {/* Animated Ring */}
              <div
                className={`absolute inset-0 border-2 border-transparent bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-30 scale-110 group-hover:scale-100 transition-all duration-500 blur-sm`}
              />
            </Card>
          ))}
        </div>

        {/* Additional Tech Stack */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-8 text-super-bright">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              {
                name: "Vercel",
                color: "from-black to-gray-800",
                icon: "🚀",
                hoverColor: "hover:from-black hover:to-gray-800",
              },
              {
                name: "Netlify",
                color: "from-teal-500 to-cyan-500",
                icon: "🌐",
                hoverColor: "hover:from-teal-500 hover:to-cyan-500",
              },
              {
                name: "Firebase",
                color: "from-yellow-500 to-orange-500",
                icon: "🔥",
                hoverColor: "hover:from-yellow-500 hover:to-orange-500",
              },
              {
                name: "Supabase",
                color: "from-green-500 to-emerald-500",
                icon: "⚡",
                hoverColor: "hover:from-green-500 hover:to-emerald-500",
              },
              {
                name: "Prisma",
                color: "from-indigo-500 to-purple-500",
                icon: "🔷",
                hoverColor: "hover:from-indigo-500 hover:to-purple-500",
              },
              {
                name: "Stripe",
                color: "from-blue-500 to-indigo-500",
                icon: "💳",
                hoverColor: "hover:from-blue-500 hover:to-indigo-500",
              },
              {
                name: "Socket.io",
                color: "from-gray-700 to-gray-900",
                icon: "🔌",
                hoverColor: "hover:from-gray-700 hover:to-gray-900",
              },
              {
                name: "WebRTC",
                color: "from-red-500 to-pink-500",
                icon: "📹",
                hoverColor: "hover:from-red-500 hover:to-pink-500",
              },
              {
                name: "Three.js",
                color: "from-purple-500 to-pink-500",
                icon: "🎮",
                hoverColor: "hover:from-purple-500 hover:to-pink-500",
              },
              {
                name: "D3.js",
                color: "from-orange-500 to-red-500",
                icon: "📊",
                hoverColor: "hover:from-orange-500 hover:to-red-500",
              },
              {
                name: "Framer Motion",
                color: "from-pink-500 to-rose-500",
                icon: "✨",
                hoverColor: "hover:from-pink-500 hover:to-rose-500",
              },
              {
                name: "GSAP",
                color: "from-green-500 to-teal-500",
                icon: "🎬",
                hoverColor: "hover:from-green-500 hover:to-teal-500",
              },
              {
                name: "Electron",
                color: "from-blue-600 to-cyan-600",
                icon: "⚛️",
                hoverColor: "hover:from-blue-600 hover:to-cyan-600",
              },
              {
                name: "PWA",
                color: "from-purple-600 to-indigo-600",
                icon: "📱",
                hoverColor: "hover:from-purple-600 hover:to-indigo-600",
              },
              {
                name: "WebAssembly",
                color: "from-gray-600 to-gray-800",
                icon: "⚙️",
                hoverColor: "hover:from-gray-600 hover:to-gray-800",
              },
              {
                name: "GraphQL",
                color: "from-pink-500 to-purple-500",
                icon: "🔗",
                hoverColor: "hover:from-pink-500 hover:to-purple-500",
              },
              {
                name: "Apollo",
                color: "from-indigo-500 to-blue-500",
                icon: "🚀",
                hoverColor: "hover:from-indigo-500 hover:to-blue-500",
              },
              {
                name: "Zustand",
                color: "from-yellow-500 to-amber-500",
                icon: "🐻",
                hoverColor: "hover:from-yellow-500 hover:to-amber-500",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="group relative cursor-pointer transform-gpu transition-all duration-500 hover:scale-110"
                style={{
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                {/* Main Badge */}
                <Badge
                  className={`
                    relative overflow-hidden px-6 py-3 text-lg font-semibold 
                    bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 
                    text-gray-800 dark:text-gray-200 
                    border-2 border-gray-300 dark:border-gray-600 
                    transition-all duration-500 ease-out
                    hover:shadow-2xl hover:border-transparent hover:text-white
                    ${tech.hoverColor}
                    group-hover:animate-pulse
                  `}
                >
                  {/* Animated Background Overlay */}
                  <div
                    className={`
                      absolute inset-0 bg-gradient-to-r ${tech.color} 
                      opacity-0 group-hover:opacity-100 
                      transition-all duration-500 rounded-lg
                      transform scale-0 group-hover:scale-100
                    `}
                  />

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-lg" />

                  {/* Content */}
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-base transition-transform duration-300 group-hover:animate-bounce group-hover:scale-125">
                      {tech.icon}
                    </span>
                    <span className="font-bold">{tech.name}</span>
                  </span>
                </Badge>

                {/* Glow Effect */}
                <div
                  className={`
                    absolute inset-0 bg-gradient-to-r ${tech.color} 
                    opacity-0 group-hover:opacity-60 
                    blur-xl transition-all duration-500 -z-10 rounded-lg
                    scale-75 group-hover:scale-110
                  `}
                />

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1.5 h-1.5 bg-gradient-to-r ${tech.color} rounded-full animate-float`}
                      style={{
                        left: `${15 + i * 12}%`,
                        top: `${10 + (i % 3) * 25}%`,
                        animationDelay: `${i * 0.15}s`,
                        animationDuration: `${1.5 + i * 0.3}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Ripple Effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20">
                  <div
                    className={`
                      absolute inset-0 bg-gradient-to-r ${tech.color} 
                      rounded-lg animate-ping opacity-30
                    `}
                    style={{
                      animationDuration: "2s",
                    }}
                  />
                </div>

                {/* Enhanced Tooltip */}
                <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                  <div
                    className={`
                      px-4 py-2 bg-gradient-to-r ${tech.color} text-white text-sm font-bold 
                      rounded-xl shadow-2xl backdrop-blur-sm border border-white/20
                      animate-bounce
                    `}
                  >
                    <span className="flex items-center gap-2">
                      <span>{tech.icon}</span>
                      {tech.name}
                    </span>
                    {/* Tooltip Arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/80"></div>
                    </div>
                  </div>
                </div>

                {/* Magnetic Effect Ring */}
                <div
                  className={`
                    absolute inset-0 border-2 border-transparent bg-gradient-to-r ${tech.color} 
                    rounded-lg opacity-0 group-hover:opacity-40 
                    scale-110 group-hover:scale-125 
                    transition-all duration-500 blur-sm -z-10
                  `}
                />

                {/* Pulsing Dots */}
                <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className={`w-3 h-3 bg-gradient-to-r ${tech.color} rounded-full animate-ping`}
                    style={{
                      animationDuration: "1.5s",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 p-[3px] rounded-3xl hover:scale-105 transition-transform duration-300">
            <div className="bg-background rounded-3xl px-12 py-8">
              <h3 className="text-3xl font-black text-super-bright mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-lg font-semibold text-bright mb-6">
                Let's collaborate and create the next groundbreaking project together!
              </p>
              <Button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                Start a Project
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
