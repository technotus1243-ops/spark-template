import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "@phosphor-icons/react"

export function SimpleHero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Tushar Khokhar
        </h1>
        <p className="text-xl mb-8 text-muted-foreground">
          Elite Blockchain & Backend Developer
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-primary hover:bg-primary/90">
            View My Work <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button variant="outline">
            <Download size={18} className="mr-2" /> Resume
          </Button>
        </div>
      </div>
    </section>
  )
}