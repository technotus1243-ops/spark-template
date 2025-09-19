import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "@phosphor-icons/react"
import { toast } from "sonner"

export function Hero3D() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-20 left-10 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center animate-float">
          <span className="text-primary font-mono font-bold">RS</span>
        </div>
        <div className="absolute top-32 right-20 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
          <span className="text-accent font-mono text-sm">Web3</span>
        </div>
        <div className="absolute bottom-40 left-20 w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
          <span className="text-primary font-mono">AI</span>
        </div>
        <div className="absolute bottom-32 right-16 w-18 h-18 bg-accent/10 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
          <span className="text-accent font-mono text-xs">DeFi</span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Tushar Khokhar
            </span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-mono border border-primary/20 animate-fade-in">
              Blockchain Engineer
            </span>
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-mono border border-accent/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Backend Architect
            </span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-mono border border-primary/20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              DeFi Developer
            </span>
          </div>

          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Building the future of <span className="text-primary font-semibold">decentralized finance</span>, 
            <span className="text-accent font-semibold"> AI-powered systems</span>, and 
            <span className="text-primary font-semibold"> high-performance infrastructure</span> 
            that scales globally.
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            IIT Kharagpur graduate with expertise in Rust, Solidity, and modern backend technologies. 
            Specialized in creating secure, scalable systems that power the next generation of digital innovation.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 glow-primary group px-8 py-6 text-lg"
            asChild
          >
            <a href="#projects" className="flex items-center gap-2">
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 hover:bg-primary/10 px-8 py-6 text-lg group"
            asChild
          >
            <a href="#" onClick={(e) => { e.preventDefault(); toast.info("Resume download will be available soon!"); }} className="flex items-center gap-2">
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
              Download Resume
            </a>
          </Button>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border/50 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">$8M+</div>
            <div className="text-sm text-muted-foreground">Assets Managed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-accent mb-2">500K+</div>
            <div className="text-sm text-muted-foreground">Transactions Processed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">35%</div>
            <div className="text-sm text-muted-foreground">Gas Fee Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-accent mb-2">40%</div>
            <div className="text-sm text-muted-foreground">Cost Optimization</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}