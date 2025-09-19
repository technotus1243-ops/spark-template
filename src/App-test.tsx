import { Navigation } from "./components/Navigation"
import { Hero3D } from "./components/Hero3D"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="relative">
        <Hero3D />
      </main>
    </div>
  )
}

export default App