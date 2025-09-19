import { Navigation } from "./components/Navigation"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            color: 'hsl(var(--foreground))',
          },
        }}
      />
    </div>
  )
}

export default App