import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GithubLogo, LinkedinLogo, Download, ArrowRight, Code, Terminal, Lightning, Globe, Brain, Database, Shield, Rocket, Cpu, Phone, MapPin, Calendar } from "@phosphor-icons/react"
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"

function App() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skills", "projects", "contact"]
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

  const skills = [
    { 
      category: "Blockchain & Web3", 
      items: ["Solidity", "Rust", "Web3.js", "Ethers.js", "Smart Contracts", "DeFi Protocols"],
      icon: <Shield className="w-5 h-5" />
    },
    { 
      category: "Backend Engineering", 
      items: ["Python", "Django", "FastAPI", "PostgreSQL", "Redis", "Microservices"],
      icon: <Database className="w-5 h-5" />
    },
    { 
      category: "DevOps & Cloud", 
      items: ["Kubernetes", "Docker", "AWS", "CI/CD", "Infrastructure as Code"],
      icon: <Cpu className="w-5 h-5" />
    },
    { 
      category: "AI & Performance", 
      items: ["Trading Bots", "Zero-Knowledge", "GPU Computing", "Real-time Systems"],
      icon: <Brain className="w-5 h-5" />
    }
  ]

  const projects = [
    {
      title: "Intelligent Crypto Trading Bot",
      description: "Advanced trading system that monitors DEX platforms and executes automated trades based on market cap triggers. Built with Python and proprietary algorithms.",
      technologies: ["Python", "Web Scraping", "DeFi APIs", "Trading Algorithms"],
      metrics: "4x-5x growth detection • Real-time execution • $50K+ trading volume",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Rust-Based Copy Trading System",
      description: "High-performance trading bot written in Rust that monitors top crypto wallets and replicates trades with microsecond precision.",
      technologies: ["Rust", "Blockchain APIs", "Low-latency Systems", "Copy Trading"],
      metrics: "Sub-millisecond execution • 99.9% uptime • Real-time replication",
      icon: <Lightning className="w-6 h-6" />
    },
    {
      title: "AI Game Backend Infrastructure",
      description: "Complete Django backend for Unity-based AI world generation game. Processes text prompts and coordinates with AI models.",
      technologies: ["Django", "Unity Integration", "AI APIs", "Real-time Processing"],
      metrics: "Text-to-world generation • Seamless Unity integration • 10K+ users",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "DAO Governance Protocol",
      description: "Built and deployed smart contracts managing over $8 million in protocol assets with advanced governance mechanisms.",
      technologies: ["Solidity", "Web3", "DeFi", "Governance"],
      metrics: "$8M+ assets managed • Security audited • 500K+ transactions",
      icon: <Shield className="w-6 h-6" />
    }
  ]

  const experiences = [
    {
      company: "Mode Network",
      role: "Senior Blockchain Developer",
      period: "2023 - Present",
      type: "Full-time",
      description: "Leading blockchain development for Layer 2 scaling solutions",
      achievements: [
        "Built DAO governance smart contracts managing $8M+ in protocol assets",
        "Led Velodrome DEX integration with 35% gas fee reduction",
        "Architected cross-chain bridge infrastructure handling 100K+ daily transactions"
      ]
    },
    {
      company: "Eclipse Network", 
      role: "Smart Contract Engineer",
      period: "2022 - 2023",
      type: "Full-time",
      description: "Developed core infrastructure for high-throughput NFT marketplace",
      achievements: [
        "Built foundational Rust smart contract processing 500K+ transactions",
        "Implemented high-throughput consensus mechanisms",
        "Optimized gas efficiency reducing costs by 40%"
      ]
    },
    {
      company: "Arcane Labs",
      role: "Backend Developer", 
      period: "2022",
      type: "Contract",
      description: "Built scalable microservices architecture for fintech platform",
      achievements: [
        "Developed 30+ REST APIs with sub-200ms response times",
        "Engineered low-latency feed system handling 50K+ concurrent users",
        "Implemented caching strategies improving performance by 60%"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-18">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center animate-glow">
                <Terminal size={24} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-xl gradient-text">Tushar Khokhar</div>
                <div className="text-xs text-muted-foreground">Elite Developer • IIT Kharagpur</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
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
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                    activeSection === item.toLowerCase() ? 'w-full' : 'group-hover:w-full'
                  }`}></span>
                </button>
              ))}
              <Button 
                onClick={() => handleNavClick('#contact')}
                className="btn-primary relative overflow-hidden"
                size="sm"
              >
                <span className="relative z-10">Hire Me</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="mb-8 animate-slide-up">
              <Badge className="mb-6 bg-green-500/20 text-green-400 border-green-500/30 animate-pulse-border">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Available for elite projects
              </Badge>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 gradient-text leading-tight">
                Tushar Khokhar
              </h1>
              
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl text-foreground font-light">
                  Elite Blockchain & Backend <span className="gradient-text-blue font-semibold">Architect</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  IIT Kharagpur graduate engineering next-generation financial infrastructure. 
                  Specialized in building <span className="text-primary font-semibold">$8M+ DeFi protocols</span>, 
                  <span className="text-accent font-semibold"> high-frequency trading systems</span>, and 
                  <span className="text-primary font-semibold"> enterprise-scale backends</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-slide-up">
              <Button 
                size="lg"
                className="btn-primary text-lg px-8 py-4"
                onClick={() => handleNavClick('#projects')}
              >
                <span className="relative z-10 flex items-center">
                  Explore My Work
                  <ArrowRight size={20} className="ml-3" />
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="glass-card text-lg px-8 py-4 border-white/20 text-foreground hover:text-white"
                onClick={() => { 
                  window.open('mailto:tushar.khokhar@example.com', '_blank');
                  toast.success("Opening email client", {description: "Let's discuss your next big project"}); 
                }}
              >
                <Download size={20} className="mr-3" />
                Download Resume
              </Button>
            </div>

            {/* Enhanced Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t border-white/10 animate-slide-up">
              {[
                { value: "$8M+", label: "Protocol Assets Managed", icon: <Shield className="w-6 h-6" />, color: "text-green-400" },
                { value: "500K+", label: "Transactions Processed", icon: <Lightning className="w-6 h-6" />, color: "text-blue-400" },
                { value: "35%", label: "Cost Optimization", icon: <Rocket className="w-6 h-6" />, color: "text-purple-400" },
                { value: "5+", label: "Years Elite Experience", icon: <Code className="w-6 h-6" />, color: "text-orange-400" }
              ].map((metric, index) => (
                <div key={index} className="metric-card group">
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl ${metric.color} group-hover:scale-110 transition-transform`}>
                      {metric.icon}
                    </div>
                  </div>
                  <div className={`text-4xl font-bold mb-2 ${metric.color}`}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <Badge className="mb-8 bg-primary/20 text-primary border-primary/30">
                <Brain className="w-4 h-4 mr-2" />
                Engineering Excellence
              </Badge>
              <h2 className="text-5xl font-bold mb-8 gradient-text">
                Building the Future of Digital Finance
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  As a <span className="text-primary font-semibold">blockchain architect from IIT Kharagpur</span>, 
                  I specialize in building mission-critical financial infrastructure at the intersection of 
                  <span className="text-accent font-semibold"> DeFi protocols</span>, 
                  <span className="text-primary font-semibold"> artificial intelligence</span>, and 
                  <span className="text-accent font-semibold"> high-performance backend systems</span>.
                </p>
                <p>
                  My expertise spans from managing <span className="text-green-400 font-semibold">$8M+ in protocol assets</span> 
                  to processing <span className="text-blue-400 font-semibold">500K+ transactions</span> with microsecond precision. 
                  I create robust, scalable systems that real users and enterprises depend on daily.
                </p>
                <p>
                  Whether architecting intelligent trading algorithms, engineering DAO governance systems, 
                  or building AI-powered game backends, I bring <span className="text-primary font-semibold">strategic thinking</span> 
                  and <span className="text-accent font-semibold">cutting-edge technical expertise</span> to every challenge.
                </p>
              </div>
              
              <div className="mt-8 flex gap-4">
                <Button 
                  className="btn-primary"
                  onClick={() => handleNavClick('#experience')}
                >
                  <Rocket size={18} className="mr-2" />
                  View Experience
                </Button>
                <Button 
                  variant="outline"
                  className="glass-card border-white/20 text-foreground hover:text-white"
                  onClick={() => handleNavClick('#contact')}
                >
                  <Terminal size={18} className="mr-2" />
                  Let's Connect
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 animate-slide-up">
              <div className="space-y-6">
                <div className="glass-card p-6 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/20 rounded-lg text-primary group-hover:scale-110 transition-transform">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-lg">Global Reach</span>
                  </div>
                  <p className="text-muted-foreground">Remote • Worldwide</p>
                </div>
                
                <div className="glass-card p-6 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-accent/20 rounded-lg text-accent group-hover:scale-110 transition-transform">
                      <Code className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-lg">Elite Experience</span>
                  </div>
                  <p className="text-muted-foreground">5+ Years • IIT Graduate</p>
                </div>
              </div>
              
              <div className="space-y-6 mt-8">
                <div className="glass-card p-6 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-green-500/20 rounded-lg text-green-400 group-hover:scale-110 transition-transform">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-lg">Availability</span>
                  </div>
                  <p className="text-muted-foreground">Open for Premium Projects</p>
                </div>
                
                <div className="glass-card p-6 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-lg">Response Time</span>
                  </div>
                  <p className="text-muted-foreground">Within 6 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-accent/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <Badge className="mb-8 bg-accent/20 text-accent border-accent/30">
              <Rocket className="w-4 h-4 mr-2" />
              Professional Excellence
            </Badge>
            <h2 className="text-5xl font-bold mb-8 gradient-text">Elite Career Journey</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Building enterprise-grade solutions across blockchain protocols, fintech platforms, and high-performance computing infrastructure
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <Card key={index} className="project-card group overflow-hidden">
                <CardContent className="p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                    <div className="mb-6 lg:mb-0">
                      <h3 className="text-3xl font-bold mb-3 gradient-text-blue">{exp.role}</h3>
                      <div className="flex items-center gap-4 mb-4">
                        <h4 className="text-xl text-primary font-bold">{exp.company}</h4>
                        <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                          {exp.type}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-lg">{exp.description}</p>
                    </div>
                    <Badge variant="outline" className="glass-card border-white/20 text-accent w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-xl mb-6 flex items-center gap-3">
                      <div className="p-2 bg-accent/20 rounded-lg">
                        <Lightning className="w-5 h-5 text-accent" />
                      </div>
                      Impact & Achievements
                    </h5>
                    <div className="grid gap-4">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-4 glass-card p-4 rounded-lg">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground text-lg">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <Badge className="mb-8 bg-primary/20 text-primary border-primary/30">
              <Cpu className="w-4 h-4 mr-2" />
              Technical Arsenal
            </Badge>
            <h2 className="text-5xl font-bold mb-8 gradient-text">Elite Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Mastery across cutting-edge development frameworks, blockchain protocols, and enterprise-grade infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="glass-card group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl text-primary group-hover:scale-110 transition-transform">
                      {skillGroup.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl gradient-text-blue">{skillGroup.category}</CardTitle>
                      <div className="text-sm text-muted-foreground">
                        {skillGroup.items.length} technologies
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    {skillGroup.items.map((skill, i) => (
                      <div 
                        key={i} 
                        className="skill-badge group-hover:transform group-hover:scale-105 transition-all"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Additional Certifications/Achievements */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-8 gradient-text">Professional Recognition</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "IIT Kharagpur", subtitle: "Computer Science Graduate", icon: "🎓" },
                { title: "Inter-IIT Tech Meet", subtitle: "Gold Medal Winner", icon: "🏆" },
                { title: "Blockchain Expert", subtitle: "5+ Years Experience", icon: "⛓️" }
              ].map((cert, index) => (
                <div key={index} className="glass-card p-6 text-center group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{cert.icon}</div>
                  <h4 className="font-bold text-lg mb-2 text-primary">{cert.title}</h4>
                  <p className="text-muted-foreground">{cert.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-primary/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <Badge className="mb-8 bg-accent/20 text-accent border-accent/30">
              <Code className="w-4 h-4 mr-2" />
              Portfolio Showcase
            </Badge>
            <h2 className="text-5xl font-bold mb-8 gradient-text">Elite Project Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Mission-critical solutions demonstrating advanced technical expertise and measurable business impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <Card key={index} className="project-card group">
                <CardHeader className="pb-6">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="p-5 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl text-primary group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-3 gradient-text-blue">{project.title}</CardTitle>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 font-semibold">Production Ready</span>
                        <div className="w-px h-4 bg-border"></div>
                        <span className="text-muted-foreground">Enterprise Grade</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-lg leading-relaxed text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-8">
                    <div>
                      <h4 className="font-bold text-lg mb-4 text-accent flex items-center gap-3">
                        <div className="p-2 bg-accent/20 rounded-lg">
                          <Lightning className="w-4 h-4" />
                        </div>
                        Performance Metrics
                      </h4>
                      <div className="glass-card p-4 rounded-lg">
                        <p className="text-muted-foreground">{project.metrics}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg mb-4 flex items-center gap-3">
                        <div className="p-2 bg-primary/20 rounded-lg">
                          <Cpu className="w-4 h-4 text-primary" />
                        </div>
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="skill-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-6 border-t border-white/10">
                      <Button 
                        size="sm" 
                        className="btn-primary flex-1"
                        onClick={() => toast.success("Demo access granted", {description: "Contact for live demonstration"})}
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="glass-card border-white/20 text-foreground hover:text-white flex-1"
                        onClick={() => toast.info("Source code available", {description: "Available for technical review"})}
                      >
                        <Code className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-20">
            <Card className="glass-card max-w-4xl mx-auto">
              <CardContent className="p-12">
                <div className="mb-8">
                  <h3 className="text-4xl font-bold mb-6 gradient-text">Ready to Build Something Extraordinary?</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Let's collaborate on your next breakthrough project. I bring elite technical expertise, 
                    proven track record, and strategic insight to transform your vision into reality.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button 
                    size="lg"
                    className="btn-primary text-lg px-8 py-4"
                    onClick={() => handleNavClick('#contact')}
                  >
                    <Terminal className="w-5 h-5 mr-3" />
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-3" />
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="glass-card border-white/20 text-foreground hover:text-white text-lg px-8 py-4"
                    onClick={() => toast.info("Portfolio discussion", {description: "Schedule a technical consultation"})}
                  >
                    <Brain className="w-5 h-5 mr-3" />
                    Technical Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10"></div>
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="mb-16">
            <Badge className="mb-8 bg-primary/20 text-primary border-primary/30">
              <Terminal className="w-4 h-4 mr-2" />
              Elite Collaboration
            </Badge>
            <h2 className="text-5xl font-bold mb-8 gradient-text">Let's Build the Future Together</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ready to transform your vision into reality? I'm available for premium blockchain projects, 
              high-performance trading systems, and enterprise-grade backend solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <Card className="glass-card group">
              <CardContent className="p-10">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                    <Terminal className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 gradient-text-blue">Direct Collaboration</h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Elite consultation • Strategic planning • Premium project development
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full btn-primary text-lg py-4"
                    onClick={() => {
                      window.open('mailto:tushar.khokhar@example.com', '_blank');
                      toast.success("Opening secure communication", { description: "tushar.khokhar@example.com" });
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Contact Me Directly
                      <ArrowRight size={20} className="ml-3" />
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card group">
              <CardContent className="p-10">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                    <Globe className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 gradient-text">Professional Networks</h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Technical portfolio • Career history • Industry connections
                  </p>
                  <div className="flex justify-center gap-6">
                    <a
                      href="https://github.com/tusharkhokhar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-6 border-white/20 hover:border-primary/50 transition-all hover:scale-110 group"
                      aria-label="GitHub Profile"
                    >
                      <GithubLogo size={32} className="text-foreground group-hover:text-primary transition-colors" />
                    </a>
                    <a
                      href="https://linkedin.com/in/tusharkhokhar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-6 border-white/20 hover:border-accent/50 transition-all hover:scale-110 group"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedinLogo size={32} className="text-foreground group-hover:text-accent transition-colors" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="p-10">
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-bold text-lg">AVAILABLE FOR HIRE</span>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div className="text-lg text-muted-foreground">
                  Response Time: <span className="text-primary font-semibold">&lt; 6hrs</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { label: "Premium Freelance Projects", status: "Accepting", color: "text-green-400" },
                  { label: "Full-time Elite Roles", status: "Considering", color: "text-blue-400" },
                  { label: "Technical Consulting", status: "Available Now", color: "text-purple-400" }
                ].map((item, index) => (
                  <div key={index} className="text-center glass-card p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-2">{item.label}</div>
                    <div className={`text-lg font-bold ${item.color}`}>{item.status}</div>
                  </div>
                ))}
              </div>
              
              <div className="text-lg text-muted-foreground">
                <span className="text-primary font-semibold">Specializing in:</span> Complex blockchain protocols • 
                High-frequency trading systems • Enterprise backend architecture • Remote-first collaboration
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 footer-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center animate-glow">
                  <Terminal size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-2xl gradient-text">Tushar Khokhar</div>
                  <div className="text-sm text-muted-foreground">Elite Developer • IIT Graduate</div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Engineering the future of digital finance with cutting-edge blockchain protocols 
                and high-performance backend systems.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-6 gradient-text-blue">Quick Navigation</h3>
              <div className="space-y-3">
                {["About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(`#${item.toLowerCase()}`)}
                    className="block text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-6 gradient-text-blue">Technology Stack</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"].map((tech) => (
                  <span key={tech} className="skill-badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Optimized for performance • Fully accessible • Modern architecture
              </p>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-muted-foreground">
                © 2024 Tushar Khokhar. Elite blockchain & backend development.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Available worldwide</span>
                <div className="w-px h-4 bg-white/20"></div>
                <span>Remote-first collaboration</span>
                <div className="w-px h-4 bg-white/20"></div>
                <span className="text-green-400">Currently accepting projects</span>
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