"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { EnhancedButton } from "@/components/enhanced-button"
import { useEffect, useState } from "react";

type Particle = {
  left: string;
  top: string;
  // add other properties if needed
};

function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        // ...other random properties
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((style, i) => (
        <div
          key={i}
          className="absolute animate-float-slow"
          style={style}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const [showModal, setShowModal] = useState<null | "resume" | "cv">(null);
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-super-bright">
                Hi, I'm{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400 bg-clip-text text-transparent animate-gradient text-glow">
                    Raja Rehan Mustafa
                  </span>
                </span>
              </h1>
              <p className="text-xl font-bold text-super-bright">Full Stack Developer & UI/UX Designer</p>
              <p className="text-lg max-w-lg leading-relaxed text-bright font-semibold">
                I create beautiful, functional, and user-centered digital experiences. Passionate about clean code and
                innovative solutions that make a real impact.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <EnhancedButton
                variant="glow"
                size="lg"
                className="px-8 py-4 text-lg font-bold"
                onClick={() => setShowModal("resume")}
              >
                View My Resume
              </EnhancedButton>
              <EnhancedButton variant="neon" size="lg" className="px-8 py-4 text-lg font-bold" onClick={() => setShowModal("cv")}> 
                View My CV
              </EnhancedButton>
            </div>

            {/* Modal for PDF Viewer */}
            {showModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
                <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-4 relative">
                  <button
                    onClick={() => setShowModal(null)}
                    className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-2xl font-bold"
                    aria-label="Close PDF viewer"
                  >
                    ×
                  </button>
                  <iframe
                    src={showModal === "resume" ? "/Resume.pdf" : "/CV.pdf"}
                    width="100%"
                    height="600px"
                    style={{ border: "none" }}
                    title={showModal === "resume" ? "Resume" : "CV"}
                  ></iframe>
                </div>
              </div>
            )}

            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-purple-500/20 transition-colors duration-300">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-cyan-500/20 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-pink-500/20 transition-colors duration-300">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main image container with better positioning */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-purple-500/30 dark:border-purple-400/30 shadow-2xl animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 z-10" />
                <Image
                  src="/images/profile.jpg"
                  alt="Raja Rehan Mustafa - Full Stack Developer"
                  fill
                  className="object-cover object-center"
                  style={{
                    objectPosition: "center center",
                  }}
                  priority
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>

              {/* Professional badge */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg animate-pulse-gentle z-20">
                <span className="text-white text-lg font-semibold">💻</span>
              </div>

              {/* Subtle orbiting elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: "30s" }}>
                <div className="absolute -top-2 left-1/2 w-3 h-3 bg-purple-500/60 rounded-full animate-pulse" />
              </div>
              <div
                className="absolute inset-0 animate-spin"
                style={{ animationDuration: "25s", animationDirection: "reverse" }}
              >
                <div className="absolute top-1/2 -right-2 w-2 h-2 bg-cyan-500/60 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
