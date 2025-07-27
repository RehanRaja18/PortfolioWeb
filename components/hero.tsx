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

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

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
              <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-70 animate-fade-in">
                <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-0 h-[80vh] flex flex-col overflow-hidden border border-gray-200">
                  {/* Title Bar */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-purple-50 via-cyan-50 to-pink-50">
                    <span className="text-lg font-bold text-gray-800">
                      {showModal === "resume" ? "Resume" : "CV"}
                    </span>
                    <button
                      onClick={() => setShowModal(null)}
                      className="text-gray-500 hover:text-red-500 text-2xl font-bold transition-colors duration-200 rounded-full w-10 h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-red-400"
                      aria-label="Close PDF viewer"
                    >
                      ×
                    </button>
                  </div>
                  {/* PDF Viewer */}
                  <div className="flex-1 overflow-auto bg-gray-50">
                    <iframe
                      src={showModal === "resume" ? "/Resume.pdf" : "/CV.pdf"}
                      width="100%"
                      height="100%"
                      style={{ border: "none", minHeight: "100%" }}
                      title={showModal === "resume" ? "Resume" : "CV"}
                      className="w-full h-full rounded-b-2xl"
                    ></iframe>
                  </div>
                </div>
                <style jsx global>{`
                  .animate-fade-in {
                    animation: fadeInModal 0.3s ease;
                  }
                  @keyframes fadeInModal {
                    from { opacity: 0; }
                    to { opacity: 1; }
                  }
                `}</style>
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
  width={320}
  height={320}
  className="object-contain object-center rounded-full"
  priority
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

// "use client"

// import { Button } from "@/components/ui/button"
// import { Github, Linkedin, Mail, X, Download } from "lucide-react"
// import Image from "next/image"
// import { EnhancedButton } from "@/components/enhanced-button"
// import { useEffect, useState } from "react"

// type Particle = {
//   left: string
//   top: string
//   // add other properties if needed
// }

// function FloatingParticles() {
//   const [particles, setParticles] = useState<Particle[]>([])

//   useEffect(() => {
//     setParticles(
//       Array.from({ length: 20 }, () => ({
//         left: `${Math.random() * 100}%`,
//         top: `${Math.random() * 100}%`,
//         // ...other random properties
//       })),
//     )
//   }, [])

//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {particles.map((style, i) => (
//         <div key={i} className="absolute animate-float-slow" style={style} />
//       ))}
//     </div>
//   )
// }

// export function Hero() {
//   const [showModal, setShowModal] = useState<null | "resume" | "cv">(null)
//   const [isLoading, setIsLoading] = useState(false)

//   // Prevent background scroll when modal is open
//   useEffect(() => {
//     if (showModal) {
//       document.body.style.overflow = "hidden"
//     } else {
//       document.body.style.overflow = ""
//     }
//     return () => {
//       document.body.style.overflow = ""
//     }
//   }, [showModal])

//   const handleOpenModal = (type: "resume" | "cv") => {
//     setIsLoading(true)
//     setShowModal(type)
//     // Simulate loading time for smooth transition
//     setTimeout(() => setIsLoading(false), 800)
//   }

//   const handleDownload = () => {
//     const link = document.createElement("a")
//     link.href = showModal === "resume" ? "/Resume.pdf" : "/CV.pdf"
//     link.download = showModal === "resume" ? "Raja_Rehan_Mustafa_Resume.pdf" : "Raja_Rehan_Mustafa_CV.pdf"
//     link.click()
//   }

//   return (
//     <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//       <div className="container mx-auto max-w-6xl relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             <div className="space-y-4">
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-super-bright">
//                 Hi, I'm{" "}
//                 <span className="relative">
//                   <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400 bg-clip-text text-transparent animate-gradient text-glow">
//                     Raja Rehan Mustafa
//                   </span>
//                 </span>
//               </h1>
//               <p className="text-xl font-bold text-super-bright">Full Stack Developer & UI/UX Designer</p>
//               <p className="text-lg max-w-lg leading-relaxed text-bright font-semibold">
//                 I create beautiful, functional, and user-centered digital experiences. Passionate about clean code and
//                 innovative solutions that make a real impact.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-4">
//               <EnhancedButton
//                 variant="glow"
//                 size="lg"
//                 className="px-8 py-4 text-lg font-bold"
//                 onClick={() => handleOpenModal("resume")}
//               >
//                 View My Resume
//               </EnhancedButton>
//               <EnhancedButton
//                 variant="neon"
//                 size="lg"
//                 className="px-8 py-4 text-lg font-bold"
//                 onClick={() => handleOpenModal("cv")}
//               >
//                 View My CV
//               </EnhancedButton>
//             </div>

//             {/* Ultra-Modern Modal for PDF Viewer */}
//             {showModal && (
//               <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-gradient-to-br from-black/90 via-purple-900/20 to-black/90 backdrop-blur-md animate-fade-in">
//                 <div className="relative w-full max-w-7xl h-[95vh] bg-gradient-to-br from-white/95 via-gray-50/90 to-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
//                   {/* Animated Background Pattern */}
//                   <div className="absolute inset-0 opacity-5">
//                     <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500 via-cyan-500 to-pink-500 animate-pulse"></div>
//                     <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-float"></div>
//                     <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl animate-float delay-1000"></div>
//                     <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-pink-400/20 rounded-full blur-xl animate-float delay-500"></div>
//                   </div>

//                   {/* Ultra-Modern Header */}
//                   <div className="relative z-10 flex items-center justify-between px-8 py-6 bg-gradient-to-r from-white/80 via-gray-50/70 to-white/80 backdrop-blur-sm border-b border-gray-200/30">
//                     <div className="flex items-center gap-6">
//                       {/* Animated Icon Container */}
//                       <div className="relative">
//                         <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 via-cyan-500 to-pink-500 flex items-center justify-center shadow-2xl animate-pulse">
//                           <div className="w-14 h-14 rounded-xl bg-white/90 flex items-center justify-center">
//                             <span className="text-2xl animate-bounce">{showModal === "resume" ? "📄" : "📋"}</span>
//                           </div>
//                         </div>
//                         <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 rounded-2xl blur opacity-30 animate-pulse"></div>
//                       </div>

//                       {/* Title Section */}
//                       <div className="space-y-1">
//                         <h2 className="text-3xl font-black bg-gradient-to-r from-gray-900 via-purple-800 to-cyan-800 bg-clip-text text-transparent">
//                           {showModal === "resume" ? "My Resume" : "My CV"}
//                         </h2>
//                         <p className="text-lg font-semibold text-gray-600">Raja Rehan Mustafa • Full Stack Developer</p>
//                         <div className="flex items-center gap-2 text-sm text-gray-500">
//                           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                           <span>Live Document</span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="flex items-center gap-4">
//                       <button
//                         onClick={handleDownload}
//                         className="group relative px-6 py-3 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-400 hover:via-green-400 hover:to-teal-400 text-white font-bold rounded-2xl shadow-2xl hover:shadow-emerald-500/30 transform hover:scale-105 transition-all duration-300 overflow-hidden"
//                       >
//                         <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
//                         <div className="relative flex items-center gap-3">
//                           <Download className="w-5 h-5 group-hover:animate-bounce" />
//                           <span>Download</span>
//                         </div>
//                       </button>

//                       <button
//                         onClick={() => setShowModal(null)}
//                         className="group relative w-14 h-14 bg-gradient-to-r from-red-500 via-pink-500 to-rose-500 hover:from-red-400 hover:via-pink-400 hover:to-rose-400 text-white rounded-2xl shadow-2xl hover:shadow-red-500/30 transform hover:scale-105 hover:rotate-90 transition-all duration-300 flex items-center justify-center"
//                       >
//                         <X className="w-6 h-6 group-hover:animate-spin" />
//                       </button>
//                     </div>
//                   </div>

//                   {/* Loading State with Modern Design */}
//                   {isLoading && (
//                     <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50/80 to-white/80 backdrop-blur-sm">
//                       <div className="text-center space-y-8">
//                         <div className="relative">
//                           <div className="w-24 h-24 border-8 border-gray-200 border-t-purple-600 border-r-cyan-500 border-b-pink-500 rounded-full animate-spin mx-auto"></div>
//                           <div
//                             className="absolute inset-0 w-24 h-24 border-8 border-transparent border-t-purple-400 rounded-full animate-spin mx-auto"
//                             style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
//                           ></div>
//                         </div>
//                         <div className="space-y-3">
//                           <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
//                             Loading {showModal === "resume" ? "Resume" : "CV"}
//                           </h3>
//                           <div className="flex items-center justify-center gap-2">
//                             <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
//                             <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-100"></div>
//                             <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-200"></div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   {/* Ultra-Modern PDF Viewer */}
//                   {!isLoading && (
//                     <div className="flex-1 p-6 bg-gradient-to-br from-gray-50/50 via-white/30 to-gray-100/50 backdrop-blur-sm">
//                       <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/50 bg-white/90 backdrop-blur-sm">
//                         {/* PDF Container with Modern Frame */}
//                         <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-white rounded-3xl">
//                         <embed
//   src={showModal === "resume" ? "/public/Resume.pdf" : "/public/CV.pdf"}
//   type="application/pdf"
//   width="100%"
//   height="100%"
//   className="w-full h-full rounded-3xl"
// />

//                         </div>

//                         {/* Decorative Corner Elements */}
//                         <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-purple-500/30 rounded-tl-xl"></div>
//                         <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-cyan-500/30 rounded-tr-xl"></div>
//                         <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-pink-500/30 rounded-bl-xl"></div>
//                         <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-purple-500/30 rounded-br-xl"></div>
//                       </div>
//                     </div>
//                   )}

//                   {/* Ultra-Modern Decorative Elements */}
//                   <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 animate-pulse"></div>
//                   <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-50"></div>

//                   {/* Floating Orbs */}
//                   <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-sm animate-pulse opacity-60"></div>
//                   <div className="absolute -top-2 -right-6 w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-sm animate-pulse delay-300 opacity-60"></div>
//                   <div className="absolute -bottom-4 -left-6 w-6 h-6 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full blur-sm animate-pulse delay-700 opacity-60"></div>
//                   <div className="absolute -bottom-2 -right-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full blur-sm animate-pulse delay-1000 opacity-60"></div>
//                 </div>

//                 <style jsx global>{`
//                   .animate-fade-in {
//                     animation: fadeInModal 0.6s cubic-bezier(0.16, 1, 0.3, 1);
//                   }
//                   .animate-float {
//                     animation: float 6s ease-in-out infinite;
//                   }
//                   @keyframes fadeInModal {
//                     from { 
//                       opacity: 0; 
//                       transform: scale(0.9) translateY(40px);
//                       filter: blur(10px);
//                     }
//                     to { 
//                       opacity: 1; 
//                       transform: scale(1) translateY(0);
//                       filter: blur(0px);
//                     }
//                   }
//                   @keyframes float {
//                     0%, 100% { transform: translateY(0px) rotate(0deg); }
//                     50% { transform: translateY(-20px) rotate(180deg); }
//                   }
//                 `}</style>
//               </div>
//             )}

//             <div className="flex space-x-4">
//               <Button variant="ghost" size="icon" className="hover:bg-purple-500/20 transition-colors duration-300">
//                 <Github className="h-5 w-5" />
//               </Button>
//               <Button variant="ghost" size="icon" className="hover:bg-cyan-500/20 transition-colors duration-300">
//                 <Linkedin className="h-5 w-5" />
//               </Button>
//               <Button variant="ghost" size="icon" className="hover:bg-pink-500/20 transition-colors duration-300">
//                 <Mail className="h-5 w-5" />
//               </Button>
//             </div>
//           </div>

//           <div className="flex justify-center lg:justify-end">
//             <div className="relative">
//               {/* Main image container with better positioning */}
//               <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-purple-500/30 dark:border-purple-400/30 shadow-2xl animate-float">
//                 <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 z-10" />
//                 <Image
//                   src="/images/profile.jpg"
//                   alt="Raja Rehan Mustafa - Full Stack Developer"
//                   fill
//                   className="object-cover object-center"
//                   style={{
//                     objectPosition: "center center",
//                   }}
//                   priority
//                   sizes="(max-width: 768px) 100vw, 320px"
//                 />
//               </div>

//               {/* Professional badge */}
//               <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg animate-pulse-gentle z-20">
//                 <span className="text-white text-lg font-semibold">💻</span>
//               </div>

//               {/* Subtle orbiting elements */}
//               <div className="absolute inset-0 animate-spin" style={{ animationDuration: "30s" }}>
//                 <div className="absolute -top-2 left-1/2 w-3 h-3 bg-purple-500/60 rounded-full animate-pulse" />
//               </div>
//               <div
//                 className="absolute inset-0 animate-spin"
//                 style={{ animationDuration: "25s", animationDirection: "reverse" }}
//               >
//                 <div className="absolute top-1/2 -right-2 w-2 h-2 bg-cyan-500/60 rounded-full animate-pulse" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
