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
      const sections = ["home", "about", "portfolio", "services", "ventures", "contact"]
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
      category: "Product Development", 
      items: ["Concept to MVP", "Technical Architecture", "Product Strategy", "Full-Stack Development", "Team Leadership", "Quality Assurance"],
      icon: <Rocket className="w-5 h-5" />
    },
    { 
      category: "Blockchain & Web3", 
      items: ["Smart Contract Development", "DeFi Protocols", "NFT Platforms", "DAO Governance", "Token Economics", "Security Audits"],
      icon: <Lock className="w-5 h-5" />
    },
    { 
      category: "Technology Infrastructure", 
      items: ["Cloud Architecture", "DevOps & CI/CD", "API Development", "Database Design", "Performance Optimization", "Security Implementation"],
      icon: <Database className="w-5 h-5" />
    },
    { 
      category: "Business Growth", 
      items: ["Strategic Planning", "Market Expansion", "Partnership Development", "Revenue Optimization", "Operations Scaling", "Exit Strategy"],
      icon: <TrendUp className="w-5 h-5" />
    },
    { 
      category: "AI & Innovation", 
      items: ["Machine Learning Integration", "AI Product Development", "Data Analytics", "Automation Systems", "Predictive Modeling", "Neural Networks"],
      icon: <Brain className="w-5 h-5" />
    }
  ]

  const ventures = [
    {
      title: "DeFiX Protocol",
      description: "Revolutionary cross-chain DeFi protocol enabling seamless asset transfers and yield optimization across multiple blockchains. Built with advanced smart contract architecture and zero-knowledge proofs.",
      stage: "Series A",
      valuation: "$15M",
      metrics: "200K+ users • $50M+ TVL • 15+ blockchain integrations • 99.9% uptime",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "ChainAnalytics AI",
      description: "Enterprise-grade blockchain analytics platform powered by machine learning. Provides real-time transaction monitoring, risk assessment, and compliance tools for institutions.",
      stage: "Seed",
      valuation: "$8M",
      metrics: "50+ enterprise clients • 10B+ transactions analyzed • 95% threat detection accuracy",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "MetaVerse Commerce",
      description: "Next-generation e-commerce platform for virtual worlds and metaverse environments. Enabling seamless transactions and digital asset management across virtual realms.",
      stage: "Pre-Seed",
      valuation: "$3M",
      metrics: "VR/AR ready • Multi-chain support • 3D asset marketplace • Virtual showrooms",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "QuantumTrade Engine",
      description: "High-frequency trading infrastructure leveraging quantum computing principles for cryptocurrency markets. Delivering unprecedented speed and accuracy in trade execution.",
      stage: "R&D",
      valuation: "Stealth",
      metrics: "Sub-millisecond execution • 99.99% accuracy • Multi-exchange arbitrage • Quantum algorithms",
      icon: <Lightning className="w-6 h-6" />
    }
  ]

  const portfolioHighlights = [
    {
      title: "Blockchain Infrastructure", 
      count: "15+",
      description: "Smart contract protocols deployed",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Venture Portfolio", 
      count: "$50M+",
      description: "Total portfolio valuation",
      icon: <TrendUp className="w-6 h-6" />
    },
    {
      title: "Enterprise Clients", 
      count: "100+",
      description: "Fortune 500 partnerships",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Success Rate", 
      count: "95%",
      description: "Ventures reaching Series A",
      icon: <Target className="w-6 h-6" />
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
              {["Home", "About", "Portfolio", "Services", "Ventures", "Contact"].map((item) => (
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
                Building the Future of Web3
              </Badge>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text leading-tight">
                TvaraX
              </h1>
              
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl text-foreground font-medium">
                  Premier <span className="gradient-text-accent font-bold">Technology Company</span>
                </h2>
                <div className="terminal-text text-lg mb-6">
                  <span className="text-muted-foreground">~/ventures/</span>
                  <span className="terminal-cursor">next-unicorn</span>
                </div>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  We architect, launch, and scale <span className="text-primary font-semibold">breakthrough technology companies</span> from 
                  <span className="text-accent font-semibold"> concept to market leadership</span>, specializing in 
                  <span className="text-primary font-semibold"> blockchain, AI, and enterprise solutions</span>
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
                  Explore Portfolio
                  <ArrowRight size={20} className="ml-3" />
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="glass-card text-lg px-8 py-4 border-border text-foreground hover:text-primary"
                onClick={() => { 
                  window.open('mailto:partnerships@tvarax.com', '_blank');
                  toast.success("Opening partnership inquiry", {description: "Let's build the future together"}); 
                }}
              >
                <Handshake size={20} className="mr-3" />
                Partner With Us
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
              <Rocket className="w-4 h-4 mr-2" />
              Technology Excellence
            </Badge>
            <h2 className="text-3xl font-bold mb-6 gradient-text">
              Building Tomorrow's Market Leaders
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              <span className="text-primary font-semibold">TvaraX is a premier technology company</span> that combines deep technical expertise 
              with strategic business acumen to create <span className="text-accent font-semibold">category-defining solutions</span>. 
              We partner with visionary leaders to transform breakthrough ideas into 
              <span className="text-primary font-semibold"> market-leading enterprises</span>.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg text-primary group-hover:scale-110 transition-transform">
                  <Strategy className="w-5 h-5" />
                </div>
                <span className="font-semibold">Approach</span>
              </div>
              <p className="text-muted-foreground text-sm">Technology-First Innovation</p>
            </div>
            
            <div className="glass-card p-6 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/20 rounded-lg text-accent group-hover:scale-110 transition-transform">
                  <Target className="w-5 h-5" />
                </div>
                <span className="font-semibold">Focus</span>
              </div>
              <p className="text-muted-foreground text-sm">Web3 • AI • Enterprise SaaS</p>
            </div>
            
            <div className="glass-card p-6 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400 group-hover:scale-110 transition-transform">
                  <TrendUp className="w-5 h-5" />
                </div>
                <span className="font-semibold">Track Record</span>
              </div>
              <p className="text-muted-foreground text-sm">95% Series A Success</p>
            </div>
            
            <div className="glass-card p-6 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
                  <Users className="w-5 h-5" />
                </div>
                <span className="font-semibold">Network</span>
              </div>
              <p className="text-muted-foreground text-sm">Global • Enterprise • VCs</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-primary"
                onClick={() => handleNavClick('#ventures')}
              >
                <Rocket size={18} className="mr-2" />
                View Portfolio
              </Button>
              <Button 
                variant="outline"
                className="glass-card border-border text-foreground hover:text-primary"
                onClick={() => handleNavClick('#contact')}
              >
                <Terminal size={18} className="mr-2" />
                Start Partnership
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-accent/5"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-accent/20 text-accent border-accent/30">
              <TrendUp className="w-4 h-4 mr-2" />
              Investment Excellence
            </Badge>
            <h2 className="text-3xl font-bold mb-6 gradient-text">Portfolio Performance</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our systematic approach to venture building delivers consistent results across diverse sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioHighlights.map((highlight, index) => (
              <Card key={index} className="glass-card group">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl text-primary group-hover:scale-110 transition-transform">
                      {highlight.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold mb-2 gradient-text-accent">{highlight.count}</div>
                  <div className="text-sm text-muted-foreground">{highlight.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Card className="glass-card max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 gradient-text">Innovation Excellence</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  TvaraX builds breakthrough solutions from conception. We provide technical leadership, 
                  strategic guidance, and operational expertise to maximize innovation impact and value creation.
                </p>
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
                    onClick={() => handleNavClick('#services')}
                  >
                    <Strategy size={18} className="mr-2" />
                    Our Services
                  </Button>
                </div>
              </CardContent>
            </Card>
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
            <h2 className="text-3xl font-bold mb-6 gradient-text\">End-to-End Technology Solutions</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From ideation to implementation, we provide comprehensive support across every stage of technology development
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
          
          {/* Process Overview */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-6 gradient-text">Our Proven Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: "Ideation & Validation", subtitle: "Market research & validation", icon: "💡" },
                { title: "Technical Development", subtitle: "MVP & architecture", icon: "⚡" },
                { title: "Go-to-Market", subtitle: "Launch & customer acquisition", icon: "🚀" },
                { title: "Scale & Exit", subtitle: "Growth & liquidity events", icon: "📈" }
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
              Portfolio Companies
            </Badge>
            <h2 className="text-3xl font-bold mb-6 gradient-text">Our Project Portfolio</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Building the next generation of market-leading solutions across blockchain, AI, and enterprise technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
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
                  <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Build the Next Innovation?</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Partner with TvaraX to transform your breakthrough idea into a market-leading solution. 
                    We provide the technical expertise, strategic guidance, and resources needed to achieve extraordinary outcomes.
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
                    onClick={() => toast.info("Investment opportunities", {description: "Partnership positions available for qualified partners"})}
                  >
                    <TrendUp className="w-4 h-4 mr-2" />
                    Become a Partner
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
              <Handshake className="w-4 h-4 mr-2" />
              Strategic Partnership
            </Badge>
            <h2 className="text-4xl font-bold mb-8 gradient-text">Ready to Build the Future Together?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Whether you're a visionary leader with a breakthrough idea or a partner seeking innovative solutions, 
              TvaraX is your partner in creating tomorrow's market leaders.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <Card className="glass-card group">
              <CardContent className="p-10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                    <Rocket className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-6 gradient-text-accent">Leaders & Entrepreneurs</h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Have a breakthrough idea? Let's co-create your solution from concept to market leadership.
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full btn-primary text-lg py-4"
                    onClick={() => {
                      window.open('mailto:partners@tvarax.com?subject=Partnership Inquiry', '_blank');
                      toast.success("Opening partnership inquiry", { description: "Let's build something extraordinary together" });
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Start Your Project
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
                  <h3 className="text-xl font-bold mb-6 gradient-text">Partners & Clients</h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Join our network of strategic partners and gain access to cutting-edge technology solutions.
                  </p>
                  <div className="flex justify-center gap-6">
                    <a
                      href="https://linkedin.com/company/tvarax"
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
                        window.open('mailto:partners@tvarax.com?subject=Strategic Partnership', '_blank');
                        toast.success("Opening partnership inquiry", { description: "Partnership opportunities available" });
                      }}
                    >
                      <TrendUp size={20} className="mr-2" />
                      Partnership Info
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
                  <span className="text-emerald-400 font-bold text-lg status-online">ACTIVELY BUILDING</span>
                </div>
                <div className="w-px h-8 bg-border"></div>
                <div className="text-lg text-muted-foreground">
                  Portfolio Value: <span className="text-primary font-semibold">$50M+</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { label: "Active Projects", status: "12 Solutions", color: "text-emerald-400" },
                  { label: "Success Rate", status: "95% Delivery", color: "text-blue-400" },
                  { label: "Client Satisfaction", status: "98% Rating", color: "text-purple-400" }
                ].map((item, index) => (
                  <div key={index} className="text-center glass-card p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-2">{item.label}</div>
                    <div className={`text-lg font-bold ${item.color}`}>{item.status}</div>
                  </div>
                ))}
              </div>
              
              <div className="text-lg text-muted-foreground">
                <span className="text-primary font-semibold">Focus sectors:</span> Blockchain protocols • 
                AI & Machine Learning • Enterprise SaaS • Fintech • Deep Tech
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
                Building tomorrow's market leaders through strategic technology creation, 
                technical excellence, and visionary partnerships.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6 gradient-text-accent">Technology Focus</h3>
              <div className="space-y-3">
                {["Blockchain Protocols", "AI & Machine Learning", "Enterprise SaaS", "Deep Tech", "Strategic Partnerships"].map((item) => (
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
              <h3 className="font-bold text-lg mb-6 gradient-text-accent">Project Stats</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {["$50M+ Portfolio", "95% Success", "98% Satisfaction", "12 Projects", "Global"].map((stat) => (
                  <span key={stat} className="skill-badge text-xs">
                    {stat}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Technology-first approach • Innovation model • Long-term partnerships
              </p>
            </div>
          </div>

          <div className="pt-12 border-t border-border text-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-muted-foreground">
                © 2024 TvaraX. Building the future of technology.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Global partnerships</span>
                <div className="w-px h-4 bg-border"></div>
                <span>Technology solutions</span>
                <div className="w-px h-4 bg-border"></div>
                <span className="text-emerald-400">Actively building</span>
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