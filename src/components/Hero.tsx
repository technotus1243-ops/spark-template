import { Button } from "@/components/ui/button"
import { ArrowDown, GithubLogo, LinkedinLogo, Envelope } from "@phosphor-icons/react"

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Alex Chen
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Full-Stack Developer specializing in scalable, performant web applications 
            with <span className="text-accent font-medium">React</span>, {" "}
            <span className="text-accent font-medium">TypeScript</span>, and {" "}
            <span className="text-accent font-medium">Node.js</span>
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I build production-ready applications for fast-growing startups, 
            focusing on exceptional user experience and robust architecture.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={scrollToProjects} size="lg" className="min-w-48">
            View My Work
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="min-w-48" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 pt-8">
          <a 
            href="https://github.com/alexchen" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-lg border hover:bg-muted transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubLogo className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com/in/alexchen" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-lg border hover:bg-muted transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinLogo className="h-6 w-6" />
          </a>
          <a 
            href="mailto:alex@example.com"
            className="p-3 rounded-lg border hover:bg-muted transition-colors"
            aria-label="Email Contact"
          >
            <Envelope className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}