import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ArrowRight, Code, Database, Sparkle } from "@phosphor-icons/react"

export function SimpleHero() {
  const [currentRole, setCurrentRole] = useState(0)
  
  const roles = [
    "Blockchain Engineer",
    "Backend Developer", 
    "DeFi Specialist",
    "Smart Contract Auditor",
    "AI Systems Engineer"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleScrollToWork = () => {
    const projectsSection = document.getElementById('projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleDownloadResume = () => {
    // Create a simple resume download - in production this would link to actual resume
    const resumeContent = `
TUSHAR KHOKHAR
Blockchain & Backend Developer | IIT Kharagpur

CONTACT:
Email: tushar.khokhar@iitkg.ac.in
LinkedIn: linkedin.com/in/tusharkhokhar
GitHub: github.com/tusharkhokhar

EXPERTISE:
• Blockchain Development (Solidity, Rust, Web3)
• Backend Engineering (Python, Node.js, Go)
• DeFi Protocols & Smart Contracts
• High-Performance Systems & APIs
• AI/ML Integration

EXPERIENCE:
Mode Network - Blockchain Developer (2023-Present)
• Built DAO governance contracts managing $8M+ assets
• Led Velodrome DEX integration with 35% gas optimization

Eclipse Network - Smart Contract Engineer (2022-2023)  
• Developed Rust smart contracts for NFT marketplace
• Processed 500,000+ transactions successfully

ACHIEVEMENTS:
• Gold Medal - Inter-IIT Tech Meet 12.0 Aptos Challenge
• $8M+ in protocol assets under management
• 500K+ transactions processed on deployed contracts
    `
    
    const blob = new Blob([resumeContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'Tushar_Khokhar_Resume.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="mb-8 animate-fade-in-up">
            <Badge variant="secondary" className="px-4 py-2 text-sm mb-4 glass border-primary/20">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Available for Freelance Projects
            </Badge>
          </div>

          {/* Main heading */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                Tushar Khokhar
              </span>
            </h1>
            
            <div className="text-xl md:text-3xl text-muted-foreground mb-4">
              <span className="text-foreground font-semibold">Elite </span>
              <span 
                className="text-primary font-bold transition-all duration-500 ease-in-out"
                key={currentRole}
              >
                {roles[currentRole]}
              </span>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Building the future of digital interaction through 
              <span className="text-primary font-semibold"> blockchain innovation</span>,
              <span className="text-accent font-semibold"> AI systems</span>, and 
              <span className="text-primary font-semibold"> high-performance backend engineering</span>
            </p>
          </div>

          {/* Key stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="glass p-4 rounded-lg border-primary/20">
              <div className="text-2xl font-bold text-primary mb-1">$8M+</div>
              <div className="text-sm text-muted-foreground">Assets Managed</div>
            </div>
            <div className="glass p-4 rounded-lg border-accent/20">
              <div className="text-2xl font-bold text-accent mb-1">500K+</div>
              <div className="text-sm text-muted-foreground">Transactions</div>
            </div>
            <div className="glass p-4 rounded-lg border-primary/20">
              <div className="text-2xl font-bold text-primary mb-1">35%</div>
              <div className="text-sm text-muted-foreground">Gas Savings</div>
            </div>
            <div className="glass p-4 rounded-lg border-accent/20">
              <div className="text-2xl font-bold text-accent mb-1">🏆</div>
              <div className="text-sm text-muted-foreground">Gold Medal</div>
            </div>
          </div>

          {/* Specializations */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Badge variant="outline" className="px-4 py-2 glass border-primary/30">
              <Database size={16} className="mr-2 text-primary" />
              Smart Contracts
            </Badge>
            <Badge variant="outline" className="px-4 py-2 glass border-accent/30">
              <Code size={16} className="mr-2 text-accent" />
              DeFi Protocols
            </Badge>
            <Badge variant="outline" className="px-4 py-2 glass border-primary/30">
              <Sparkle size={16} className="mr-2 text-primary" />
              Trading Bots
            </Badge>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Button 
              onClick={handleScrollToWork}
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              View My Work 
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              onClick={handleDownloadResume}
              variant="outline" 
              size="lg"
              className="glass border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <Download size={20} className="mr-2 group-hover:scale-110 transition-transform duration-300" /> 
              Download Resume
            </Button>
          </div>

          {/* Education credential */}
          <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="text-sm text-muted-foreground">
              <span className="text-accent font-semibold">Indian Institute of Technology, Kharagpur</span>
              <span className="mx-2">•</span>
              <span>Bachelor of Technology</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}