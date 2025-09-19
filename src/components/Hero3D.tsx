import { Button } from "@/components/ui/button"
import { Download, ArrowRight, Code, Lightning, Globe } from "@phosphor-icons/react"
import { toast } from "sonner"
import { ThreeScene } from "./ThreeScene"

export function Hero3D() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background Scene */}
      <ThreeScene />
      
      {/* Enhanced animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-transparent to-accent/8 animate-gradient"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_600px_at_50%_0%,rgba(59,130,246,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_80%_100%,rgba(139,92,246,0.12),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_400px_300px_at_20%_80%,rgba(6,182,212,0.08),transparent_70%)]"></div>
      </div>

      {/* Floating decorative elements - enhanced with glassmorphism */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block z-10">
        <div className="absolute top-20 left-16 w-16 h-16 glass rounded-xl flex items-center justify-center animate-float">
          <Code size={24} className="text-primary" />
        </div>
        <div className="absolute top-32 right-24 w-14 h-14 glass rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
          <Lightning size={20} className="text-accent" />
        </div>
        <div className="absolute bottom-40 left-24 w-18 h-18 glass rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
          <Globe size={28} className="text-primary" />
        </div>
        <div className="absolute top-1/2 right-16 w-12 h-12 glass rounded-lg flex items-center justify-center animate-float" style={{animationDelay: '3s'}}>
          <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse-glow"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 glass rounded-2xl flex items-center justify-center animate-float" style={{animationDelay: '4s'}}>
          <div className="text-2xl">⚡</div>
        </div>
        <div className="absolute top-3/4 right-1/3 w-16 h-16 glass rounded-full flex items-center justify-center animate-float" style={{animationDelay: '5s'}}>
          <div className="text-xl">🚀</div>
        </div>
        <div className="absolute top-1/4 left-1/2 w-14 h-14 glass rounded-lg flex items-center justify-center animate-float" style={{animationDelay: '6s'}}>
          <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg animate-pulse-glow"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-6">
        <div className="mb-12 animate-fade-in-up">
          {/* Name and title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-display mb-4 leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                Tushar Khokhar
              </span>
            </h1>
            <div className="text-xl md:text-2xl lg:text-3xl font-display text-foreground/90 mb-6">
              Elite Blockchain & Backend Developer
            </div>
            <div className="text-lg md:text-xl text-accent/80 font-mono">
              from IIT Kharagpur
            </div>
          </div>
          
          {/* Expertise badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="px-4 py-2 glass text-primary rounded-full text-sm font-mono hover:bg-primary/20 transition-all animate-pulse-glow">
              🔗 Blockchain Engineer
            </span>
            <span className="px-4 py-2 glass text-accent rounded-full text-sm font-mono hover:bg-accent/20 transition-all">
              ⚡ Backend Architect
            </span>
            <span className="px-4 py-2 glass text-primary rounded-full text-sm font-mono hover:bg-primary/20 transition-all">
              💰 DeFi Specialist
            </span>
            <span className="px-4 py-2 glass text-accent rounded-full text-sm font-mono hover:bg-accent/20 transition-all">
              🤖 AI Systems
            </span>
            <span className="px-4 py-2 glass text-primary rounded-full text-sm font-mono hover:bg-primary/20 transition-all">
              🦀 Rust Expert
            </span>
          </div>

          {/* Value proposition */}
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed mb-6">
            Building the future of <span className="text-primary font-semibold">decentralized finance</span>, 
            <span className="text-accent font-semibold"> AI-powered systems</span>, and 
            <span className="text-primary font-semibold"> high-performance infrastructure</span> 
            that scales globally.
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
            Specialized in creating secure, scalable systems that power the next generation of digital innovation. 
            From automated trading bots to smart contract governance, I engineer solutions that matter.
          </p>
        </div>

        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group px-8 py-3 text-base font-semibold"
            onClick={() => handleNavClick('#projects')}
          >
            <span className="flex items-center gap-2">
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="glass border-primary/30 hover:bg-primary/10 hover:border-primary/50 px-8 py-3 text-base font-semibold group transition-all duration-300"
            onClick={(e) => { 
              e.preventDefault(); 
              toast.info("Resume download will be available soon!", {
                description: "Currently preparing the latest version"
              }); 
            }}
          >
            <span className="flex items-center gap-2">
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </span>
          </Button>
        </div>

        {/* Impact metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-8 border-t border-border/50 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="text-center group">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">$8M+</div>
            <div className="text-sm md:text-base text-muted-foreground">Protocol Assets Managed</div>
          </div>
          <div className="text-center group">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-2 group-hover:text-accent/80 transition-colors">500K+</div>
            <div className="text-sm md:text-base text-muted-foreground">Transactions Processed</div>
          </div>
          <div className="text-center group">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">35%</div>
            <div className="text-sm md:text-base text-muted-foreground">Gas Fee Reduction</div>
          </div>
          <div className="text-center group">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-2 group-hover:text-accent/80 transition-colors">40%</div>
            <div className="text-sm md:text-base text-muted-foreground">Cost Optimization</div>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up z-30" style={{animationDelay: '1s'}}>
        <div className="w-6 h-10 glass border-primary/50 rounded-full flex justify-center hover:border-primary transition-colors cursor-pointer"
             onClick={() => handleNavClick('#about')}>
          <div className="w-0.5 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}