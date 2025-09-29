import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GithubLogo, LinkedinLogo, Download, ArrowRight, Code, Terminal, Lightning, Globe, Database, Shield, Rocket, Cpu, Phone, MapPin, Calendar, CloudArrowUp, Lock, Network, ChartLineUp, TrendUp, Users, Handshake, Strategy, Target, Brain } from "@phosphor-icons/react"
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"

function App() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      const sections = ["home", "about", "services", "ventures", "contact"]
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(current || "home")
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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">Initializing portfolio...</p>
          <div className="mt-4 flex justify-center space-x-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    )
  }

  const services = [
    { 
      category: "Blockchain Development", 
      items: ["Smart Contract Development", "DAO Governance Systems", "DeFi Protocols", "NFT Marketplaces", "Cross-chain Solutions", "Token Economics"],
      icon: <Lock className="w-5 h-5" />
    },
    { 
      category: "Full-Stack Development", 
      items: ["React/Next.js Frontend", "Node.js/Express Backend", "Database Design", "API Development", "Real-time Systems", "Cloud Integration"],
      icon: <Code className="w-5 h-5" />
    },
    { 
      category: "DevOps & Infrastructure", 
      items: ["Kubernetes Orchestration", "Docker Containerization", "CI/CD Pipelines", "Cloud Deployment", "Load Balancing", "Monitoring Systems"],
      icon: <Database className="w-5 h-5" />
    },
    { 
      category: "Backend Systems", 
      items: ["Microservices Architecture", "API Gateway Design", "Database Optimization", "Caching Strategies", "Queue Management", "Event-Driven Systems"],
      icon: <Network className="w-5 h-5" />
    },
    { 
      category: "AI & ML Integration", 
      items: ["Machine Learning Pipelines", "AI Service APIs", "GPU Clustering", "Zero-Knowledge Systems", "Automated Workflows", "Real-time Processing"],
      icon: <Brain className="w-5 h-5" />
    }
  ]

  const ventures = [
    {
      title: "Mode Network DAO Protocol",
      description: "Built comprehensive DAO governance smart contracts managing $8M+ in protocol assets. Features secure treasury operations, community-driven proposals, and integrated Velodrome for optimized token swaps with 35% gas reduction.",
      stage: "Live",
      valuation: "Production",
      metrics: "500K+ users • $8M+ assets managed • 35% gas reduction • Full-stack integration",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Eclipse NFT Marketplace",
      description: "Deployed production-ready NFT marketplace on Solana using Anchor framework. Supports minting, listing, escrow handling, and secure purchases. Includes bulk minting solution for 1,000+ creators with automated staking rewards.",
      stage: "Live",
      valuation: "Production",
      metrics: "500K+ transactions • 1K+ creators • Telegram bot integration • Rust-based automation",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "zkAGI GPU Clustering Platform",
      description: "Pioneered zero-knowledge, cloud-native GPU clustering platform with local GPU connections. Features automated Kubernetes workflows, custom OpenVPN Docker images, and Ray integration for scalable orchestration.",
      stage: "Live",
      valuation: "Production",
      metrics: "40% cost reduction • 60% GPU throughput boost • ZK-layered ML pipeline • Cloud-native",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "AI + Blockchain Game Ecosystem",
      description: "Real-time AI-driven game ecosystem where human and AI agents interact. Features 3D asset generation, MCP server cluster, scalable architecture with NGINX load balancer, and automated deployment pipeline.",
      stage: "Live",
      valuation: "Production",
      metrics: "Real-time multiplayer • AI asset generation • Google Cloud deployment • WebSocket architecture",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Solana Card Game Platform",
      description: "Developed Solana NFT card game with on-chain matchmaking, real-time multiplayer interactions, and secure tokenized assets using Rust (Anchor framework). Features competitive gameplay and reward distribution.",
      stage: "Live",
      valuation: "Production",
      metrics: "On-chain matchmaking • Real-time multiplayer • NFT-based assets • Rust/Anchor framework",
      icon: <Lightning className="w-6 h-6" />
    },
    {
      title: "Telegram AI Launchpad",
      description: "Built Telegram-integrated launchpad enabling users to launch tokens/NFTs via chat commands or AI-assisted workflows. Implemented AI-driven onboarding and automated asset generation without manual intervention.",
      stage: "Live",
      valuation: "Production",
      metrics: "AI-assisted workflows • Chat-based launching • Automated generation • Zero manual intervention",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "Go Wallet Tracker Service",
      description: "Developed Go microservice that tracks wallet activity, parses transactions, identifies buys/sells, and enriches tokens with price, liquidity, and market cap metrics for real-time portfolio analysis.",
      stage: "Live",
      valuation: "Production", 
      metrics: "Real-time tracking • Transaction parsing • Price enrichment • Market cap analysis",
      icon: <ChartLineUp className="w-6 h-6" />
    }
  ]

  const portfolioHighlights = [
    {
      title: "Live Projects", 
      count: "7+",
      description: "Production systems deployed and active",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Transaction Volume", 
      count: "500K+",
      description: "Transactions processed successfully",
      icon: <TrendUp className="w-6 h-6" />
    },
    {
      title: "Protocol Assets", 
      count: "$8M+",
      description: "Assets managed via DAO governance",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Performance Boost", 
      count: "60%",
      description: "Average optimization achieved",
      icon: <Lightning className="w-6 h-6" />
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 enterprise-nav">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center relative">
                <div className="text-2xl font-bold text-white font-mono">T</div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <div className="font-bold text-xl terminal-text gradient-text">TvaraX</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Services", "Ventures", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(`#${item.toLowerCase()}`)}
                  className={`text-sm font-medium transition-all duration-300 relative group ${ 
                    activeSection === item.toLowerCase()
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ${
                    activeSection === item.toLowerCase() ? 'w-full' : 'group-hover:w-full'
                  }`}></span>
                </button>
              ))}
              <Button 
                onClick={() => handleNavClick('#contact')}
                className="btn-primary"
                size="sm"
              >
                <span className="relative z-10">Partner With Us</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="mb-8 animate-slide-up">
              <Badge className="mb-6 bg-emerald-500/20 text-emerald-400 border-emerald-500/30 status-online">
                Venture Studio & Tech Solutions
              </Badge>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text leading-tight">
                TvaraX
              </h1>
              
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl text-foreground font-medium">
                  <span className="gradient-text-accent font-bold">Venture Studio</span> & Tech Solutions
                </h2>
                <div className="terminal-text text-lg mb-6">
                  <span className="text-muted-foreground">~/ventures/</span>
                  <span className="terminal-cursor">end-to-end-solutions</span>
                </div>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Full-service <span className="text-primary font-semibold">venture studio providing blockchain, DevOps, full-stack, and smart contract development</span>. 
                  From <span className="text-accent font-semibold">concept to deployment</span>, we deliver production-ready solutions across 
                  <span className="text-primary font-semibold">DeFi, NFTs, AI integration, and enterprise systems</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up">
              <Button 
                size="lg"
                className="btn-primary text-lg px-8 py-4"
                onClick={() => handleNavClick('#ventures')}
              >
                <span className="relative z-10 flex items-center">
                  View Projects
                  <ArrowRight size={20} className="ml-3" />
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="glass-card text-lg px-8 py-4 border-border text-foreground hover:text-primary"
                onClick={() => { 
                  window.open('mailto:tusharkhokhar.iit@gmail.com', '_blank');
                  toast.success("Opening contact email", {description: "Let's discuss your next project"}); 
                }}
              >
                <Phone size={20} className="mr-3" />
                Get In Touch
              </Button>
            </div>

            {/* Venture Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-border animate-slide-up">
              {portfolioHighlights.map((metric, index) => (
                <div key={index} className="metric-card group">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-card rounded-lg text-primary group-hover:scale-110 transition-transform">
                      {metric.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-2 terminal-text text-primary">
                    {metric.count}
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 relative">
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              <Code className="w-4 h-4 mr-2" />
              Technical Excellence
            </Badge>
            <h2 className="text-3xl font-bold mb-6 gradient-text">
              Building Production-Ready Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              <span className="text-primary font-semibold">TvaraX operates as a comprehensive venture studio</span> delivering end-to-end technology solutions 
              across <span className="text-accent font-semibold">blockchain, DevOps, full-stack development, and AI integration</span>. 
              We build <span className="text-primary font-semibold">production-ready systems from concept to deployment</span>.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg text-primary group-hover:scale-110 transition-transform">
                  <Strategy className="w-5 h-5" />
                </div>
                <span className="font-semibold">Specialization</span>
              </div>
              <p className="text-muted-foreground text-sm">Blockchain & Full-Stack</p>
            </div>
            
            <div className="glass-card p-6 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/20 rounded-lg text-accent group-hover:scale-110 transition-transform">
                  <Target className="w-5 h-5" />
                </div>
                <span className="font-semibold">Technologies</span>
              </div>
              <p className="text-muted-foreground text-sm">Solana • Ethereum • React • Node.js</p>
            </div>
            
            <div className="glass-card p-6 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400 group-hover:scale-110 transition-transform">
                  <TrendUp className="w-5 h-5" />
                </div>
                <span className="font-semibold">Experience</span>
              </div>
              <p className="text-muted-foreground text-sm">Production Systems</p>
            </div>
            
            <div className="glass-card p-6 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
                  <Users className="w-5 h-5" />
                </div>
                <span className="font-semibold">Services</span>
              </div>
              <p className="text-muted-foreground text-sm">End-to-End Development</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-primary"
                onClick={() => handleNavClick('#ventures')}
              >
                <Rocket size={18} className="mr-2" />
                View Projects
              </Button>
              <Button 
                variant="outline"
                className="glass-card border-border text-foreground hover:text-primary"
                onClick={() => handleNavClick('#contact')}
              >
                <Terminal size={18} className="mr-2" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              <Strategy className="w-4 h-4 mr-2" />
              Comprehensive Solutions
            </Badge>
            <h2 className="text-3xl font-bold mb-6 gradient-text\">Comprehensive Development Services</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From blockchain protocols to full-stack applications, delivering end-to-end technology solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((serviceGroup, index) => (
              <Card key={index} className="glass-card group h-fit">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl text-primary group-hover:scale-110 transition-transform">
                      {serviceGroup.icon}
                    </div>
                    <div>
                      <CardTitle className="text-base gradient-text-accent">{serviceGroup.category}</CardTitle>
                      <div className="text-xs text-muted-foreground">
                        {serviceGroup.items.length} services
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2">
                    {serviceGroup.items.slice(0, 4).map((service, i) => (
                      <div 
                        key={i} 
                        className="skill-badge group-hover:transform group-hover:scale-105 transition-all text-xs"
                      >
                        {service}
                      </div>
                    ))}
                    {serviceGroup.items.length > 4 && (
                      <div className="text-center">
                        <Badge variant="outline" className="text-xs">
                          +{serviceGroup.items.length - 4} more
                        </Badge>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Experience Highlights */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 gradient-text text-center">Notable Achievements</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-bold text-lg gradient-text-accent">Mode Network</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Built DAO governance managing $8M+ assets</li>
                    <li>• Integrated Velodrome with 35% gas reduction</li>
                    <li>• Full-stack dashboard implementation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-accent/20 rounded-lg">
                      <Code className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-bold text-lg gradient-text-accent">Eclipse</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• NFT marketplace with 500K+ transactions</li>
                    <li>• Bulk minting for 1,000+ creators</li>
                    <li>• Telegram staking bot in Rust</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-emerald-500/20 rounded-lg">
                      <Brain className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h4 className="font-bold text-lg gradient-text-accent">zkAGI</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Zero-knowledge GPU clustering platform</li>
                    <li>• 40% cost reduction, 60% throughput boost</li>
                    <li>• Kubernetes + Ray orchestration</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Process Overview */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-6 gradient-text">Development Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: "Discovery & Planning", subtitle: "Requirements & architecture", icon: "🔍" },
                { title: "Development", subtitle: "Smart contracts & applications", icon: "⚡" },
                { title: "Testing & Deployment", subtitle: "Security audits & launch", icon: "🚀" },
                { title: "Maintenance & Support", subtitle: "Monitoring & optimization", icon: "📈" }
              ].map((phase, index) => (
                <div key={index} className="glass-card p-6 text-center group">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{phase.icon}</div>
                  <h4 className="font-bold text-base mb-2 text-primary">{phase.title}</h4>
                  <p className="text-muted-foreground text-sm">{phase.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section id="ventures" className="py-16 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-primary/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-accent/20 text-accent border-accent/30">
              <Rocket className="w-4 h-4 mr-2" />
              Studio Portfolio
            </Badge>
            <h2 className="text-3xl font-bold mb-6 gradient-text">Production Projects</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Live applications and systems developed across blockchain, AI, and full-stack technologies serving users in production
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {ventures.map((venture, index) => (
              <Card key={index} className="project-card group h-fit">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl text-primary group-hover:scale-110 transition-transform">
                      {venture.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 gradient-text-accent">{venture.title}</CardTitle>
                      <div className="flex items-center gap-4 text-xs mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-emerald-400 font-semibold">{venture.stage}</span>
                        </div>
                        <div className="w-px h-3 bg-border"></div>
                        <span className="text-primary font-semibold">{venture.valuation} valuation</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {venture.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-bold text-sm mb-3 text-accent flex items-center gap-2">
                      <div className="p-1 bg-accent/20 rounded">
                        <TrendUp className="w-3 h-3" />
                      </div>
                      Key Metrics
                    </h4>
                    <div className="glass-card p-3 rounded-lg">
                      <p className="text-muted-foreground text-xs">{venture.metrics}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-white/10">
                    <Button 
                      size="sm" 
                      className="btn-primary flex-1 text-xs py-2"
                      onClick={() => toast.success("Investor deck available", {description: "Contact for detailed information"})}
                    >
                      <TrendUp className="w-3 h-3 mr-1" />
                      Investment Info
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="glass-card border-white/20 text-foreground hover:text-white flex-1 text-xs py-2"
                      onClick={() => toast.info("Partnership opportunities", {description: "Strategic partnerships available"})}
                    >
                      <Handshake className="w-3 h-3 mr-1" />
                      Partner
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="glass-card max-w-3xl mx-auto">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Build Your Next Project?</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Let's collaborate to bring your blockchain ideas to life. From smart contracts to full-stack applications, 
                    I provide the technical expertise and development skills needed to deliver production-ready solutions.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="btn-primary text-base px-6 py-3"
                    onClick={() => handleNavClick('#contact')}
                  >
                    <Rocket className="w-4 h-4 mr-2" />
                    Start Your Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="glass-card border-border text-foreground hover:text-primary text-base px-6 py-3"
                    onClick={() => window.open('https://www.linkedin.com/in/tushar-khokhar-642569387/', '_blank')}
                  >
                    <LinkedinLogo className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="mb-16">
            <Badge className="mb-8 bg-primary/20 text-primary border-primary/30">
              <Phone className="w-4 h-4 mr-2" />
              Let's Build Together
            </Badge>
            <h2 className="text-4xl font-bold mb-8 gradient-text">Ready to Start Your Next Project?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Whether you need smart contract development, full-stack blockchain applications, or comprehensive technical solutions, 
              let's discuss how we can bring your ideas to life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <Card className="glass-card group">
              <CardContent className="p-10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                    <Rocket className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-6 gradient-text-accent">Project Inquiry</h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Have a blockchain project in mind? Let's discuss your requirements and create a custom solution.
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full btn-primary text-lg py-4"
                    onClick={() => {
                      window.open('mailto:tusharkhokhar.iit@gmail.com?subject=Project Inquiry', '_blank');
                      toast.success("Opening email client", { description: "Let's discuss your project requirements" });
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Start Discussion
                      <ArrowRight size={20} className="ml-3" />
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card group">
              <CardContent className="p-10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                    <TrendUp className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-6 gradient-text">Connect & Collaborate</h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Connect on LinkedIn or reach out directly to explore collaboration opportunities.
                  </p>
                  <div className="flex justify-center gap-6">
                    <a
                      href="https://www.linkedin.com/in/tushar-khokhar-642569387/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-4 border-border hover:border-primary/50 transition-all hover:scale-110 group"
                      aria-label="LinkedIn"
                    >
                      <LinkedinLogo size={28} className="text-foreground group-hover:text-primary transition-colors" />
                    </a>
                    <Button 
                      variant="outline"
                      className="glass-card border-border text-foreground hover:text-accent"
                      onClick={() => {
                        window.open('mailto:tusharkhokhar.iit@gmail.com?subject=Collaboration Inquiry', '_blank');
                        toast.success("Opening email client", { description: "Let's explore working together" });
                      }}
                    >
                      <Phone size={20} className="mr-2" />
                      Send Email
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="p-10">
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-400 font-bold text-lg status-online">AVAILABLE FOR PROJECTS</span>
                </div>
                <div className="w-px h-8 bg-border"></div>
                <div className="text-lg text-muted-foreground">
                  Contact: <span className="text-primary font-semibold">tusharkhokhar.iit@gmail.com</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { label: "Live Projects", status: "7 Active", color: "text-emerald-400" },
                  { label: "Technologies", status: "10+ Stacks", color: "text-blue-400" },
                  { label: "Experience", status: "Production Ready", color: "text-purple-400" }
                ].map((item, index) => (
                  <div key={index} className="text-center glass-card p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-2">{item.label}</div>
                    <div className={`text-lg font-bold ${item.color}`}>{item.status}</div>
                  </div>
                ))}
              </div>
              
              <div className="text-lg text-muted-foreground">
                <span className="text-primary font-semibold">Specializations:</span> Smart Contracts • 
                Full-Stack Development • DevOps • Backend Systems • AI Integration
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 enterprise-footer">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center relative">
                  <div className="text-2xl font-bold text-white font-mono">T</div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <div className="font-bold text-xl gradient-text">TvaraX</div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive venture studio delivering innovative blockchain solutions, full-stack applications, DevOps infrastructure, 
                and AI-integrated systems for the next generation of decentralized and scalable technologies.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6 gradient-text-accent">Service Areas</h3>
              <div className="space-y-3">
                {["Blockchain Development", "Smart Contracts", "Full-Stack Applications", "DevOps & Cloud", "AI Integration"].map((item) => (
                  <div
                    key={item}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6 gradient-text-accent">Project Status</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Live Production", "500K+ Transactions", "$8M+ Managed", "Multi-Chain", "Available"].map((stat) => (
                  <span key={stat} className="skill-badge text-xs">
                    {stat}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Production-ready solutions • Proven performance • Scalable architecture
              </p>
            </div>
          </div>

          <div className="pt-12 border-t border-border text-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-muted-foreground">
                © 2024 TvaraX. Expert blockchain development & technical solutions.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Blockchain development</span>
                <div className="w-px h-4 bg-border"></div>
                <span>Full-stack solutions</span>
                <div className="w-px h-4 bg-border"></div>
                <span className="text-emerald-400">Available for projects</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  )
}

export default App