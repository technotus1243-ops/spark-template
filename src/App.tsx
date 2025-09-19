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
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading portfolio...</p>
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
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Terminal size={20} className="text-white" />
              </div>
              <div>
                <div className="font-semibold text-lg">Tushar Khokhar</div>
                <div className="text-xs text-muted-foreground">Blockchain Developer</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              {["Home", "About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(`#${item.toLowerCase()}`)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
              <Button 
                onClick={() => handleNavClick('#contact')}
                className="btn-primary"
                size="sm"
              >
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-6 animate-fade-in">
              <Badge className="mb-4 bg-green-50 text-green-700 border-green-200">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Available for freelance projects
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Tushar Khokhar
              </h1>
              
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
                  Senior Blockchain & Backend Developer
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  IIT Kharagpur graduate with 5+ years building scalable blockchain protocols, 
                  trading systems, and enterprise backend infrastructure
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
              <Button 
                size="lg"
                className="btn-primary"
                onClick={() => handleNavClick('#projects')}
              >
                View My Work
                <ArrowRight size={18} className="ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => { 
                  window.open('mailto:tushar.khokhar@example.com', '_blank');
                  toast.success("Email client opened"); 
                }}
              >
                <Download size={18} className="mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-border animate-fade-in">
              {[
                { value: "$8M+", label: "Assets Managed", icon: <Shield className="w-5 h-5" /> },
                { value: "500K+", label: "Transactions", icon: <Lightning className="w-5 h-5" /> },
                { value: "35%", label: "Cost Reduction", icon: <Rocket className="w-5 h-5" /> },
                { value: "5+", label: "Years Experience", icon: <Code className="w-5 h-5" /> }
              ].map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {metric.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">
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
      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                <Brain className="w-4 h-4 mr-2" />
                About Me
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Building the Future of Digital Interaction
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate blockchain and backend developer with a degree from IIT Kharagpur. 
                  My work sits at the intersection of decentralized finance, artificial intelligence, 
                  and high-performance backend engineering.
                </p>
                <p>
                  I specialize in building secure, scalable systems that power the next generation 
                  of digital applications. From managing $8M+ in protocol assets to processing 
                  500K+ transactions, I focus on creating robust infrastructure that real users depend on.
                </p>
                <p>
                  Whether it's developing intelligent trading bots, architecting DAO governance systems, 
                  or building AI-powered game backends, I bring a unique blend of technical expertise 
                  and strategic thinking to every project.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              <div className="space-y-4">
                <div className="card-clean p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-medium">Location</span>
                  </div>
                  <p className="text-muted-foreground">Remote • Global</p>
                </div>
                <div className="card-clean p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Code className="w-5 h-5 text-primary" />
                    <span className="font-medium">Experience</span>
                  </div>
                  <p className="text-muted-foreground">5+ Years</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="card-clean p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-medium">Availability</span>
                  </div>
                  <p className="text-muted-foreground">Open to projects</p>
                </div>
                <div className="card-clean p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="font-medium">Response</span>
                  </div>
                  <p className="text-muted-foreground">Within 12 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">
              <Rocket className="w-4 h-4 mr-2" />
              Professional Journey
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Work Experience</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Building enterprise-grade solutions across blockchain, fintech, and high-performance computing
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="card-clean group">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg text-primary font-semibold">{exp.company}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{exp.description}</p>
                    </div>
                    <Badge variant="outline" className="w-fit text-xs">
                      {exp.period}
                    </Badge>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-4 flex items-center gap-2">
                      <Lightning className="w-4 h-4 text-accent" />
                      Key Achievements
                    </h5>
                    <div className="grid gap-3">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{achievement}</p>
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
      <section id="skills" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Cpu className="w-4 h-4 mr-2" />
              Technical Expertise
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Skills & Technologies</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive proficiency across modern development stacks and emerging technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="card-clean group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {skillGroup.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                      <div className="text-xs text-muted-foreground">
                        {skillGroup.items.length} technologies
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="text-xs mr-2 mb-2"
                      >
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">
              <Code className="w-4 h-4 mr-2" />
              Featured Work
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Recent Projects</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Showcase of impactful solutions demonstrating technical excellence and business value
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-clean group">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 bg-primary/10 rounded-lg text-primary">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Production Ready
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-accent flex items-center gap-2">
                        <Lightning className="w-4 h-4" />
                        Key Metrics
                      </h4>
                      <p className="text-sm text-muted-foreground">{project.metrics}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Cpu className="w-4 h-4" />
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-border">
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="flex-1"
                        onClick={() => toast.info("Demo available upon request")}
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="flex-1"
                        onClick={() => toast.info("Source code available for review")}
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

          <div className="text-center mt-16">
            <Card className="card-clean max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready for Your Next Project?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how I can help bring your vision to life with cutting-edge technology
                </p>
                <Button 
                  size="lg"
                  className="btn-primary"
                  onClick={() => handleNavClick('#contact')}
                >
                  <Terminal className="w-5 h-5 mr-2" />
                  Start a Conversation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Terminal className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Interested in collaborating on blockchain solutions, trading systems, or backend infrastructure? 
              I'm available for freelance projects and consulting opportunities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="card-clean">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Terminal className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Direct Contact</h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    Professional consultation • Quick response • Project discussion
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full btn-primary"
                    onClick={() => {
                      window.open('mailto:tushar.khokhar@example.com', '_blank');
                      toast.success("Email opened", { description: "tushar.khokhar@example.com" });
                    }}
                  >
                    Contact Me
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="card-clean">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Professional Profiles</h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    Portfolio • Work history • Technical discussions
                  </p>
                  <div className="flex justify-center gap-4">
                    <a
                      href="https://github.com/tusharkhokhar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <GithubLogo size={24} className="text-foreground" />
                    </a>
                    <a
                      href="https://linkedin.com/in/tusharkhokhar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 border border-border rounded-lg hover:border-accent/50 transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedinLogo size={24} className="text-foreground" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="card-clean max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-600 font-medium text-sm">AVAILABLE</span>
                </div>
                <div className="w-px h-6 bg-border"></div>
                <div className="text-sm text-muted-foreground">
                  Response Time: &lt; 12hrs
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Freelance Projects", status: "Open" },
                  { label: "Full-time Roles", status: "Considering" },
                  { label: "Technical Consulting", status: "Available" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                    <div className="text-sm font-semibold text-primary">{item.status}</div>
                  </div>
                ))}
              </div>
              
              <div className="text-xs text-muted-foreground">
                Available for complex projects • Blockchain & backend specialist • Remote-first
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Terminal size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg">Tushar Khokhar</div>
                  <div className="text-xs text-muted-foreground">Professional Developer</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Building scalable solutions with modern technology
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Quick Links</h3>
              <div className="space-y-2">
                {["About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(`#${item.toLowerCase()}`)}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Built With</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind", "Vite"].map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Performance optimized & accessible design
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center">
            <p className="text-muted-foreground mb-2 text-sm">
              © 2024 Tushar Khokhar. Professional web development.
            </p>
            <p className="text-xs text-muted-foreground">
              Available worldwide for remote projects
            </p>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  )
}

export default App