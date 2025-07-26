"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap, Rocket, Brain, Heart, Star, Trophy, Target, Lightbulb } from "lucide-react"
import { SectionBackground } from "@/components/section-background"
import { SectionGlow } from "@/components/section-glow"
import { useState } from "react"

export function About() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const highlights = [
    {
      icon: Code,
      title: "Clean Architecture",
      description: "Building scalable, maintainable systems with modern design patterns",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      stats: "500+ Projects",
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting beautiful, intuitive interfaces that users love",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      stats: "200+ Designs",
    },
    {
      icon: Zap,
      title: "Performance First",
      description: "Optimizing for lightning-fast user experiences",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      stats: "99% Speed Score",
    },
  ]

  const achievements = [
    { icon: Trophy, label: "Awards Won", value: "15+", color: "text-yellow-500" },
    { icon: Star, label: "Client Rating", value: "4.9/5", color: "text-purple-500" },
    { icon: Target, label: "Success Rate", value: "98%", color: "text-green-500" },
    { icon: Rocket, label: "Projects Launched", value: "500+", color: "text-blue-500" },
  ]

  const skills = [
    { name: "Problem Solving", level: 95, color: "from-emerald-500 to-teal-500" },
    { name: "Team Leadership", level: 88, color: "from-blue-500 to-indigo-500" },
    { name: "Innovation", level: 92, color: "from-purple-500 to-pink-500" },
    { name: "Communication", level: 90, color: "from-orange-500 to-red-500" },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <SectionGlow color="purple" intensity="subtle" position="center" />
      <SectionBackground variant="gradient" intensity="medium" />

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              background: `radial-gradient(circle, ${
                [
                  "rgba(59, 130, 246, 0.1)",
                  "rgba(139, 92, 246, 0.1)",
                  "rgba(236, 72, 153, 0.1)",
                  "rgba(16, 185, 129, 0.1)",
                ][i % 4]
              } 0%, transparent 70%)`,
              borderRadius: "50%",
              filter: "blur(20px)",
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${15 + i * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full mb-6">
            <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-3 rounded-full">
              <Brain className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black mb-6 relative">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400 bg-clip-text text-transparent text-super-bright text-glow">
              About Me
            </span>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse opacity-60" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-bounce opacity-60" />
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-bright font-semibold leading-relaxed">
            Passionate full-stack developer with{" "}
            <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent font-bold">
              5+ years
            </span>{" "}
            of experience creating digital solutions that make a difference. I love turning complex problems into
            simple, beautiful designs.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Highlights */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className={`group relative overflow-hidden border-2 border-transparent
                    bg-gradient-to-br from-white/95 via-white/90 to-white/85 
                    dark:from-black/90 dark:via-black/80 dark:to-black/70 
                    backdrop-blur-xl hover:scale-105 hover:rotate-1
                    transition-all duration-700 cursor-pointer
                    hover:shadow-2xl hover:shadow-purple-500/30
                    before:absolute before:inset-0 before:bg-gradient-to-br before:${item.color} 
                    before:opacity-0 before:group-hover:opacity-10 before:transition-opacity before:duration-500
                    after:absolute after:inset-0 after:bg-gradient-to-br after:${item.color} 
                    after:opacity-0 after:group-hover:opacity-20 after:blur-xl 
                    after:transition-opacity after:duration-500 after:-z-10`}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <CardContent className="p-6 text-center relative z-10">
                    {/* Animated Icon Container */}
                    <div className="relative mb-4">
                      <div
                        className={`w-16 h-16 mx-auto bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center
                          group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500
                          shadow-lg group-hover:shadow-xl`}
                      >
                        <item.icon className="h-8 w-8 text-white" />
                      </div>
                      {/* Floating Ring */}
                      <div
                        className={`absolute inset-0 w-16 h-16 mx-auto border-2 border-transparent bg-gradient-to-r ${item.color} rounded-2xl
                          opacity-0 group-hover:opacity-30 scale-150 group-hover:scale-125 
                          transition-all duration-500 blur-sm`}
                      />
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-super-bright group-hover:text-glow transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-bright font-medium mb-4 leading-relaxed">{item.description}</p>

                    {/* Stats Badge */}
                    <div
                      className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${item.color} rounded-full text-white text-sm font-bold
                        group-hover:scale-110 transition-transform duration-300`}
                    >
                      {item.stats}
                    </div>

                    {/* Floating Particles */}
                    {activeCard === index && (
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className={`absolute w-2 h-2 bg-gradient-to-r ${item.color} rounded-full animate-float opacity-60`}
                            style={{
                              left: `${20 + i * 10}%`,
                              top: `${15 + (i % 3) * 25}%`,
                              animationDelay: `${i * 0.2}s`,
                              animationDuration: `${2 + i * 0.5}s`,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Journey Story */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-white/95 via-white/90 to-white/85 dark:from-black/90 dark:via-black/80 dark:to-black/70 backdrop-blur-xl border-2 border-purple-500/20 hover:border-purple-500/40 transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-3 rounded-full mr-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-super-bright">My Journey</h3>
                </div>
                <div className="space-y-4 text-bright font-medium leading-relaxed">
                  <p>
                    Started as a{" "}
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent font-bold">
                      self-taught developer
                    </span>
                    , I've worked with startups and established companies to build web applications that serve thousands
                    of users.
                  </p>
                  <p>
                    I specialize in{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
                      React, Node.js, and modern web technologies
                    </span>
                    . When I'm not coding, you can find me exploring new technologies, contributing to open source
                    projects, or sharing knowledge with the developer community.
                  </p>
                  <p>
                    My passion lies in creating{" "}
                    <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent font-bold">
                      meaningful digital experiences
                    </span>{" "}
                    that solve real-world problems and make people's lives easier.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Stats & Skills */}
          <div className="space-y-6">
            {/* Achievement Stats */}
            <Card className="bg-gradient-to-br from-white/95 via-white/90 to-white/85 dark:from-black/90 dark:via-black/80 dark:to-black/70 backdrop-blur-xl border-2 border-cyan-500/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Lightbulb className="h-6 w-6 text-cyan-500 mr-2" />
                  <h3 className="text-xl font-bold text-super-bright">Achievements</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="text-center p-4 rounded-xl bg-gradient-to-br from-white/50 to-white/30 dark:from-black/50 dark:to-black/30 hover:scale-105 transition-transform duration-300 cursor-pointer group"
                    >
                      <achievement.icon
                        className={`h-8 w-8 mx-auto mb-2 ${achievement.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                      <div className={`text-2xl font-bold ${achievement.color} mb-1`}>{achievement.value}</div>
                      <div className="text-sm text-bright font-medium">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="bg-gradient-to-br from-white/95 via-white/90 to-white/85 dark:from-black/90 dark:via-black/80 dark:to-black/70 backdrop-blur-xl border-2 border-emerald-500/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Target className="h-6 w-6 text-emerald-500 mr-2" />
                  <h3 className="text-xl font-bold text-super-bright">Core Strengths</h3>
                </div>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-super-bright">{skill.name}</span>
                        <span
                          className={`text-sm font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden
                              before:absolute before:inset-0 before:bg-gradient-to-r 
                              before:from-white/0 before:via-white/40 before:to-white/0
                              before:translate-x-[-100%] before:group-hover:translate-x-[100%]
                              before:transition-transform before:duration-1000`}
                            style={{
                              width: `${skill.level}%`,
                              animationDelay: `${index * 200}ms`,
                            }}
                          />
                        </div>
                        <div
                          className={`absolute top-0 h-2 bg-gradient-to-r ${skill.color} rounded-full opacity-0 group-hover:opacity-40 blur-sm transition-opacity duration-500`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 p-[2px] rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="bg-background rounded-2xl px-8 py-6">
              <p className="text-lg font-semibold text-bright mb-4">
                Ready to bring your ideas to life? Let's create something amazing together!
              </p>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Let's Connect
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
