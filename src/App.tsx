import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GithubLogo, LinkedinLogo, Download, ArrowRight, Code, Terminal, Lightning, Globe, Brain, Database, Shield, Rocket } from "@phosphor-icons/react"
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"

function App() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "contact"]
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(current || "hero")
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
    )
  }

  const skills = [
    { category: "Blockchain", items: ["Solidity", "Rust", "Web3.js", "Ethers.js", "Smart Contracts"] },
    { category: "Backend", items: ["Python", "Django", "FastAPI", "PostgreSQL", "Redis"] },
    { category: "DevOps", items: ["Kubernetes", "Docker", "AWS", "CI/CD", "Microservices"] },
    { category: "Specializations", items: ["DeFi Protocols", "Trading Bots", "Zero-Knowledge", "GPU Computing"] }
  ]

  const projects = [
    {
      title: "Intelligent Crypto Trading Bot",
      description: "Sophisticated trading bot that monitors DEX platforms and executes automated trades based on market cap triggers and proprietary strategies.",
      technologies: ["Python", "Web Scraping", "DeFi APIs", "Trading Algorithms"],
      highlights: ["Real-time market analysis", "4x-5x growth detection", "Automated execution"],
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "High-Performance Rust Trading Bot",
      description: "Rust-based copy-trading system that monitors top crypto wallets and replicates their trades in near real-time with microsecond precision.",
      technologies: ["Rust", "Blockchain APIs", "Low-latency Systems", "Copy Trading"],
      highlights: ["Sub-millisecond execution", "Wallet monitoring", "Real-time replication"],
      icon: <Lightning className="w-6 h-6" />
    },
    {
      title: "AI Game Backend Infrastructure",
      description: "Complete Django backend for Unity-based AI world generation game. Processes text prompts and coordinates with AI models to create game assets.",
      technologies: ["Django", "Unity Integration", "AI APIs", "Real-time Processing"],
      highlights: ["Text-to-world generation", "AI model coordination", "Seamless Unity integration"],
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "DAO Governance Protocol ($8M TVL)",
      description: "Built and deployed smart contracts managing over $8 million in protocol assets with advanced governance mechanisms and security features.",
      technologies: ["Solidity", "Web3", "DeFi", "Governance"],
      highlights: ["$8M+ assets managed", "Advanced governance", "Security audited"],
      icon: <Shield className="w-6 h-6" />
    }
  ]

  const experiences = [
    {
      company: "Mode Network",
      role: "Blockchain Developer",
      period: "2023 - Present",
      achievements: [
        "Built DAO governance smart contracts managing $8M+ in protocol assets",
        "Led Velodrome DEX integration, optimizing transaction routing",
        "Achieved 35% reduction in gas fees through batching optimizations"
      ]
    },
    {
      company: "Eclipse Network", 
      role: "Smart Contract Engineer",
      period: "2022 - 2023",
      achievements: [
        "Developed foundational Rust smart contract for NFT marketplace",
        "Platform processed 500,000+ transactions successfully",
        "Implemented high-throughput transaction processing"
      ]
    },
    {
      company: "Arcane Labs",
      role: "Backend Developer", 
      period: "2022",
      achievements: [
        "Developed 30+ REST APIs for microservices architecture",
        "Engineered low-latency feed system handling 50,000+ items",
        "Maintained sub-200ms response times consistently"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Terminal size={20} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">TK</div>
                <div className="text-xs text-muted-foreground">Developer</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(`#${item.toLowerCase()}`)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-primary'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
              <Button 
                onClick={() => handleNavClick('#contact')}
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              >
                Let's Work
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_600px_at_50%_0%,rgba(59,130,246,0.1),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_80%_100%,rgba(139,92,246,0.08),transparent_70%)]"></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          {[
            { Icon: Code, delay: 0 },
            { Icon: Lightning, delay: 0.5 },
            { Icon: Globe, delay: 1 },
            { Icon: Database, delay: 1.5 },
            { Icon: Shield, delay: 2 },
            { Icon: Rocket, delay: 2.5 }
          ].map(({ Icon, delay }, index) => (
            <div
              key={index}
              className="absolute w-12 h-12 glass rounded-xl flex items-center justify-center animate-float"
              style={{
                top: `${20 + Math.sin(index) * 60}%`,
                left: `${10 + index * 15}%`,
                animationDelay: `${delay}s`
              }}
            >
              <Icon size={20} className="text-primary" />
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                Tushar Khokhar
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-foreground/90 mb-4">
              Elite Blockchain & Backend Developer
            </h2>
            <p className="text-lg text-accent/80 font-mono mb-8">from IIT Kharagpur</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            {["🔗 Blockchain Engineer", "⚡ Backend Architect", "💰 DeFi Specialist", "🤖 AI Systems", "🦀 Rust Expert"].map((tag) => (
              <Badge key={tag} variant="secondary" className="px-4 py-2 glass">
                {tag}
              </Badge>
            ))}
          </div>

          <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Building the future of <span className="text-primary font-semibold">decentralized finance</span>, 
            <span className="text-accent font-semibold"> AI-powered systems</span>, and 
            <span className="text-primary font-semibold"> high-performance infrastructure</span> 
            that scales globally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 px-8 py-3 group"
              onClick={() => handleNavClick('#projects')}
            >
              View My Work
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass border-primary/30 hover:bg-primary/10 px-8 py-3 group"
              onClick={() => { 
                toast.info("Resume download will be available soon!", {
                  description: "Currently preparing the latest version"
                }); 
              }}
            >
              <Download size={18} className="mr-2 group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </Button>
          </div>

          {/* Impact Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-border/50 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="text-center group">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">$8M+</div>
              <div className="text-sm text-muted-foreground">Protocol Assets</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-accent mb-2 group-hover:text-accent/80 transition-colors">500K+</div>
              <div className="text-sm text-muted-foreground">Transactions</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">35%</div>
              <div className="text-sm text-muted-foreground">Gas Reduction</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-accent mb-2 group-hover:text-accent/80 transition-colors">40%</div>
              <div className="text-sm text-muted-foreground">Cost Optimization</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Professional Journey</h2>
          <div className="grid gap-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="glass border-border/50 hover:border-primary/30 transition-all group">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{exp.role}</CardTitle>
                      <CardDescription className="text-primary font-semibold">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-foreground/80">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="glass border-border/50 hover:border-primary/30 transition-all group">
                <CardHeader>
                  <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="mr-1 mb-1 hover:bg-primary/20 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass border-border/50 group hover:border-primary/50 transition-all hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      {project.icon}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-accent">Key Highlights:</h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <div className="w-1 h-1 bg-accent rounded-full"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs hover:bg-accent/10 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Build Something Amazing</h2>
          <p className="text-xl text-foreground/80 mb-12">
            Ready to bring your blockchain or backend project to life? Let's discuss how we can work together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent px-8 py-3 group">
              <a href="mailto:tushar@example.com" className="flex items-center gap-2">
                Get In Touch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/tusharkhokhar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-foreground/60 hover:text-primary hover:bg-primary/10 rounded-lg transition-all group"
                aria-label="GitHub Profile"
              >
                <GithubLogo size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/in/tusharkhokhar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-foreground/60 hover:text-primary hover:bg-primary/10 rounded-lg transition-all group"
                aria-label="LinkedIn Profile"
              >
                <LinkedinLogo size={24} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          <Card className="glass max-w-md mx-auto">
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <div className="text-sm text-muted-foreground mb-2">Available for</div>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge className="bg-primary/20 text-primary">Freelance Projects</Badge>
                  <Badge className="bg-accent/20 text-accent">Full-time Roles</Badge>
                  <Badge className="bg-primary/20 text-primary">Consulting</Badge>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                Response time: Usually within 24 hours
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            © 2024 Tushar Khokhar. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-xs text-muted-foreground">
            Optimized for performance, accessibility, and modern browsers.
          </p>
        </div>
      </footer>

      <Toaster />
    </div>
  )
}

export default App


