import { Button } from "@/components/ui/button"
import { ArrowDown, GithubLogo, LinkedinLogo, Envelope, Sparkle } from "@phosphor-icons/react"

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 animate-pulse opacity-40" />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '6s' }} />
      <div className="absolute bottom-32 right-1/4 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-bounce" style={{ animationDelay: '2s', animationDuration: '8s' }} />
      <div className="absolute top-1/2 left-1/6 w-16 h-16 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-lg animate-bounce" style={{ animationDelay: '4s', animationDuration: '7s' }} />

      <div className="relative max-w-5xl mx-auto text-center space-y-12">
        {/* Status badge */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-2 px-4 py-2 bg-card/60 backdrop-blur-sm border rounded-full shadow-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Available for new projects</span>
          </div>
        </div>

        <div className="space-y-8">
          <div className="relative">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent animate-gradient">
                Alex Chen
              </span>
            </h1>
            <div className="absolute -top-4 -right-4 text-accent/30">
              <Sparkle className="w-8 h-8 animate-spin" style={{ animationDuration: '3s' }} />
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Elite Full-Stack Developer crafting{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent font-semibold">
                  exceptional digital experiences
                </span>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-primary opacity-30" />
              </span>
              {" "}with React, TypeScript, and Node.js
            </p>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transforming ambitious ideas into production-ready applications for{" "}
              <span className="font-medium text-foreground">fast-growing startups</span> and{" "}
              <span className="font-medium text-foreground">enterprise clients</span>, 
              focusing on performance, scalability, and user delight.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button 
            onClick={scrollToProjects} 
            size="lg" 
            className="group min-w-52 h-14 text-lg bg-gradient-to-r from-accent to-primary hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>View My Work</span>
            <ArrowDown className="ml-3 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="min-w-52 h-14 text-lg border-2 hover:bg-accent/5 hover:border-accent/50 hover:scale-105 transition-all duration-300" 
            asChild
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 pt-12">
          {[
            { href: "https://github.com/alexchen", icon: GithubLogo, label: "GitHub" },
            { href: "https://linkedin.com/in/alexchen", icon: LinkedinLogo, label: "LinkedIn" },
            { href: "mailto:alex@example.com", icon: Envelope, label: "Email" }
          ].map(({ href, icon: Icon, label }) => (
            <a 
              key={label}
              href={href}
              target={href.startsWith('http') ? "_blank" : undefined}
              rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
              className="group p-4 rounded-2xl border-2 border-transparent bg-card/40 backdrop-blur-sm hover:bg-card/60 hover:border-accent/30 hover:shadow-lg hover:scale-110 transition-all duration-300"
              aria-label={label}
            >
              <Icon className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-0.5 h-12 bg-gradient-to-b from-accent to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}