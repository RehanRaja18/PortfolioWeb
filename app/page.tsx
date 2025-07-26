import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { SimpleWonderfulBackground } from "@/components/simple-wonderful-background"

export default function Home() {
  return (
    <>
      {/* BACKGROUND - HIGHEST PRIORITY */}
      <SimpleWonderfulBackground />

      {/* MAIN CONTENT */}
      <div className="relative z-10 min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
