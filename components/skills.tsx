"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Wrench, Palette, Server, Smartphone, Download } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "JavaScript", level: 94 },
        { name: "HTML5/CSS3", level: 96 },
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      skills: [
        { name: "Node.js", level: 87 },
        { name: "Express.js", level: 85 },
        { name: "Python", level: 82 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 78 },
        { name: "Microservices", level: 75 },
      ],
    },
    {
      title: "Database & Cloud",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      skills: [
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 80 },
        { name: "AWS", level: 82 },
        { name: "Docker", level: 78 },
        { name: "Kubernetes", level: 70 },
      ],
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe XD", level: 85 },
        { name: "Photoshop", level: 82 },
        { name: "UI Design", level: 88 },
        { name: "UX Research", level: 80 },
        { name: "Prototyping", level: 86 },
      ],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/30",
      skills: [
        { name: "React Native", level: 85 },
        { name: "Flutter", level: 75 },
        { name: "iOS Development", level: 70 },
        { name: "Android", level: 72 },
        { name: "Expo", level: 88 },
        { name: "Mobile UI", level: 90 },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-500/10",
      borderColor: "border-teal-500/30",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "CI/CD", level: 82 },
        { name: "Jest/Testing", level: 85 },
        { name: "Webpack", level: 78 },
        { name: "Linux", level: 80 },
        { name: "Nginx", level: 75 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400 bg-clip-text text-transparent text-super-bright text-glow">
            Skills & Technologies
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-bright font-semibold">
            Comprehensive expertise across the full development stack with modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-2 ${category.borderColor} 
    bg-gradient-to-br from-white/95 via-white/90 to-white/85 
    dark:from-black/90 dark:via-black/80 dark:to-black/70 
    backdrop-blur-xl hover:scale-105 hover:rotate-1
    transition-all duration-700 hover:shadow-2xl
    hover:shadow-purple-500/30 dark:hover:shadow-cyan-500/30
    transform-gpu will-change-transform
    before:absolute before:inset-0 before:bg-gradient-to-br before:${category.color} 
    before:opacity-0 before:group-hover:opacity-10 before:transition-opacity before:duration-500
    after:absolute after:inset-0 after:bg-gradient-to-br after:${category.color} 
    after:opacity-0 after:group-hover:opacity-20 after:blur-xl 
    after:transition-opacity after:duration-500 after:-z-10`}
            >
              <CardContent className="p-6 sm:p-8 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
                  <div
                    className={`p-3 sm:p-4 rounded-2xl ${category.bgColor} ${category.borderColor} border-2 
      mb-4 sm:mb-0 sm:mr-4 group-hover:scale-110 group-hover:rotate-12
      transition-transform duration-500 self-start sm:self-auto`}
                  >
                    <category.icon
                      className={`h-6 w-6 sm:h-8 sm:w-8 bg-gradient-to-br ${category.color} bg-clip-text text-transparent`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-super-bright group-hover:text-glow transition-all duration-300">
                      {category.title}
                    </h3>
                    <div
                      className={`h-1 w-12 sm:w-16 bg-gradient-to-r ${category.color} rounded-full mt-2 
        group-hover:w-20 sm:group-hover:w-24 transition-all duration-500`}
                    />
                  </div>
                </div>

                {/* Skills with Progress Bars */}
                <div className="space-y-4 sm:space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-2 sm:mb-3">
                        <span className="text-base sm:text-lg font-semibold text-super-bright group-hover/skill:text-glow transition-all duration-300">
                          {skill.name}
                        </span>
                        <Badge
                          className={`${category.bgColor} ${category.borderColor} border text-xs sm:text-sm font-bold 
            bg-gradient-to-r ${category.color} bg-clip-text text-transparent
            group-hover/skill:scale-110 transition-transform duration-300`}
                        >
                          {skill.level}%
                        </Badge>
                      </div>

                      {/* Enhanced Progress Bar */}
                      <div className="relative">
                        <div className="h-2 sm:h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full 
              transition-all duration-1000 ease-out group-hover:animate-pulse
              relative overflow-hidden
              before:absolute before:inset-0 before:bg-gradient-to-r 
              before:from-white/0 before:via-white/30 before:to-white/0
              before:translate-x-[-100%] before:group-hover/skill:translate-x-[100%]
              before:transition-transform before:duration-1000`}
                            style={{
                              width: `${skill.level}%`,
                              animationDelay: `${skillIndex * 100}ms`,
                            }}
                          />
                        </div>

                        {/* Enhanced Glowing Effect */}
                        <div
                          className={`absolute top-0 h-2 sm:h-3 bg-gradient-to-r ${category.color} rounded-full 
            opacity-0 group-hover:opacity-40 blur-sm transition-opacity duration-500
            group-hover/skill:animate-pulse`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floating Particles Effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-2 h-2 bg-gradient-to-br ${category.color} rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000`}
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${10 + (i % 3) * 30}%`,
                        animationDelay: `${i * 200}ms`,
                        animation: "float 4s ease-in-out infinite",
                      }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Tech Stack */}
        {/* <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-8 text-super-bright">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Vercel",
              "Netlify",
              "Firebase",
              "Supabase",
              "Prisma",
              "Stripe",
              "Socket.io",
              "WebRTC",
              "Three.js",
              "D3.js",
              "Framer Motion",
              "GSAP",
              "Electron",
              "PWA",
              "WebAssembly",
              "GraphQL",
              "Apollo",
              "Zustand",
            ].map((tech, index) => (
              <Badge
                key={index}
                className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-200 border-2 border-gray-300 dark:border-gray-600 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 hover:border-purple-500/50"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div> */}
        <div className="flex gap-4 justify-center mt-8">
  {/* View CV Button */}
  
  {/* Download CV Button */}
  {/* <a
    href="/mResume.pdf"
    download
    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
  >
    <Download className="w-5 h-5" />
    Download My Resume
  </a> */}
</div>
      </div>
    </section>
  )
}
