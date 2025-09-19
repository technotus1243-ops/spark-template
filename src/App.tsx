import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GithubLogo, LinkedinLogo, Download, ArrowRight, Code, Terminal, Lightning, Globe, Database, Shield, Rocket, Cpu, Phone, MapPin, Calendar, CloudArrowUp, Lock, Network, ChartLineUp } from "@phosphor-icons/react"
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
      category: "Blockchain & Smart Contracts", 
      items: ["Solidity", "Rust", "Anchor", "Move", "Ethereum", "Solana", "Eclipse", "Mode", "Fuel", "DeFi Protocols"],
      icon: <Lock className="w-5 h-5" />
    },
    { 
      category: "Backend Development", 
      items: ["Node.js", "Express.js", "Actix/Axum Web", "Python", "REST APIs", "GraphQL", "WebSockets", "JWT", "gRPC"],
      icon: <Database className="w-5 h-5" />
    },
    { 
      category: "Databases & Caching", 
      items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "Mongoose", "Database Optimization", "Query Performance"],
      icon: <Database className="w-5 h-5" />
    },
    { 
      category: "Cloud & DevOps", 
      items: ["AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "Firebase", "Railway", "GitHub Actions", "CI/CD", "Infrastructure"],
      icon: <CloudArrowUp className="w-5 h-5" />
    },
    { 
      category: "Advanced Technologies", 
      items: ["Zero-Knowledge Proofs", "Public-Key Cryptography", "GPU Computing", "Ray Framework", "Real-time Systems", "CRDTs"],
      icon: <Shield className="w-5 h-5" />
    }
  ]

  const projects = [
    {
      title: "Real-Time Code Collaboration Platform",
      description: "Built a blazing-fast Rust backend with WebSockets and CRDTs for seamless real-time multi-user code editing. Features Redis pub/sub architecture and MongoDB sync for conflict-free collaboration at scale.",
      technologies: ["Rust", "WebSockets", "CRDTs", "Redis Pub/Sub", "MongoDB", "Real-time Sync"],
      metrics: "Multi-user editing • Near-instant updates • Low-end device optimized • Conflict-free collaboration",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Enterprise DAO Governance Protocol",
      description: "Mission-critical smart contract infrastructure managing $8M+ in protocol assets. Implements advanced governance mechanisms with multi-signature security and automated treasury management.",
      technologies: ["Solidity", "OpenZeppelin", "Hardhat", "Web3.js", "IPFS", "Multi-sig Security"],
      metrics: "$8M+ assets secured • 500K+ transactions • Security audited • Zero exploits",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Tinder-Style Dating App Backend",
      description: "Full-featured Node.js backend with sophisticated matching algorithms, real-time messaging, and scalable media handling. Deployed on AWS S3 with MySQL for relational data and secure authentication.",
      technologies: ["Node.js", "Express", "Socket.io", "MySQL", "AWS S3", "JWT Authentication"],
      metrics: "IIT Kharagpur deployment • Event-based matching • Secure data handling • Real-time messaging",
      icon: <Network className="w-6 h-6" />
    },
    {
      title: "Zero-Knowledge GPU Computing Platform",
      description: "Cloud-native infrastructure for distributed GPU computing with zero-knowledge privacy layers. First-of-its-kind platform supporting local GPU connections with Ray framework integration.",
      technologies: ["Kubernetes", "Docker", "Ray Framework", "ZK-Proofs", "GPU Orchestration"],
      metrics: "40% cost reduction • 60% throughput increase • Privacy-preserving • Enterprise-ready",
      icon: <Cpu className="w-6 h-6" />
    }
  ]

  const experiences = [
    {
      company: "Mode Network",
      role: "Senior Blockchain Developer",
      period: "Feb 2025 - Apr 2025",
      type: "Contract",
      description: "Architected mission-critical DAO governance infrastructure and DeFi protocol integrations",
      achievements: [
        "Engineered DAO governance smart contracts securing $8M+ in protocol treasury assets with multi-signature security",
        "Led Velodrome DEX integration achieving 35% gas fee reduction through optimized routing and transaction batching",
        "Automated token flow onboarding logic resulting in 2x increase in new liquidity pool creation",
        "Implemented cross-chain bridge infrastructure processing 100K+ daily transactions with zero security incidents"
      ]
    },
    {
      company: "Eclipse Network", 
      role: "Blockchain Developer",
      period: "Nov 2024 - Feb 2025",
      type: "Full-time",
      description: "Built high-performance Rust smart contracts for enterprise NFT marketplace infrastructure",
      achievements: [
        "Developed foundational Rust smart contract architecture processing 500K+ NFT transactions",
        "Built bulk NFT minting infrastructure enabling 1,000+ creators to mint collections seamlessly",
        "Engineered Telegram bot integration for NFT staking, onboarding 500+ active users",
        "Optimized smart contract gas efficiency reducing transaction costs by 40% through advanced batching"
      ]
    },
    {
      company: "ZkAGI",
      role: "Rust Developer & DevOps Engineer", 
      period: "Nov 2023 - Nov 2024",
      type: "Full-time",
      description: "Designed zero-knowledge cloud-native GPU clustering platform with enterprise security",
      achievements: [
        "Architected first-of-its-kind zero-knowledge GPU-clustering platform supporting local GPU connections",
        "Automated Kubernetes workflows with Docker integration and Ray framework for distributed computing",
        "Engineered ZK-layered pipeline reducing ML compute costs by 40% and increasing GPU throughput by 60%",
        "Built enterprise-grade infrastructure handling distributed GPU workloads across multiple data centers"
      ]
    },
    {
      company: "Arcane Labs",
      role: "Backend Developer & Infrastructure Engineer", 
      period: "May 2023 - Jun 2025",
      type: "Full-time",
      description: "Built enterprise-grade trading infrastructure, Oracle services, and high-performance API systems",
      achievements: [
        "Architected Oracle service using TWAP calculations delivering real-time price feeds for 200+ cryptocurrency tokens",
        "Built webhook integration system processing 100K+ real-time market updates per second with sub-millisecond latency",
        "Developed and maintained 30+ microservice-based REST APIs achieving sub-200ms response times and 99.9% uptime",
        "Designed scalable feed system handling 50,000+ items with optimized caching, reducing data retrieval latency by 75%",
        "Delivered secure, scalable APIs enabling smooth integrations and contributing to 20% increase in user engagement"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 enterprise-nav">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Terminal size={20} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-lg terminal-text">tushar.dev</div>
                <div className="text-xs text-muted-foreground">Blockchain Engineer</div>
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
                <span className="relative z-10">Hire Me</span>
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
                Available for Enterprise Projects
              </Badge>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text leading-tight">
                Tushar Khokhar
              </h1>
              
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl text-foreground font-medium">
                  Blockchain & Backend <span className="gradient-text-accent font-bold">Architect</span>
                </h2>
                <div className="terminal-text text-lg mb-6">
                  <span className="text-muted-foreground">~/projects/</span>
                  <span className="terminal-cursor">enterprise-solutions</span>
                </div>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  IIT Kharagpur graduate specializing in <span className="text-primary font-semibold">secure blockchain protocols</span>, 
                  <span className="text-accent font-semibold"> scalable backend architectures</span>, and 
                  <span className="text-primary font-semibold"> cloud-native infrastructure solutions</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up">
              <Button 
                size="lg"
                className="btn-primary text-lg px-8 py-4"
                onClick={() => handleNavClick('#projects')}
              >
                <span className="relative z-10 flex items-center">
                  View Technical Portfolio
                  <ArrowRight size={20} className="ml-3" />
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="glass-card text-lg px-8 py-4 border-border text-foreground hover:text-primary"
                onClick={() => { 
                  window.open('mailto:tushar.khokhar@iitkharagpur.ac.in', '_blank');
                  toast.success("Opening secure email", {description: "Enterprise consultation available"}); 
                }}
              >
                <Download size={20} className="mr-3" />
                Technical Resume
              </Button>
            </div>

            {/* Technical Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-border animate-slide-up">
              {[
                { value: "$8M+", label: "Protocol Assets Secured", icon: <Shield className="w-5 h-5" />, color: "text-emerald-400" },
                { value: "500K+", label: "Smart Contract Transactions", icon: <Network className="w-5 h-5" />, color: "text-blue-400" },
                { value: "99.9%", label: "API System Uptime", icon: <Cpu className="w-5 h-5" />, color: "text-purple-400" },
                { value: "2+", label: "Years Enterprise Experience", icon: <Code className="w-5 h-5" />, color: "text-orange-400" }
              ].map((metric, index) => (
                <div key={index} className="metric-card group">
                  <div className="flex justify-center mb-3">
                    <div className={`p-3 bg-card rounded-lg ${metric.color} group-hover:scale-110 transition-transform`}>
                      {metric.icon}
                    </div>
                  </div>
                  <div className={`text-3xl font-bold mb-2 terminal-text ${metric.color}`}>
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
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <Badge className="mb-8 bg-primary/20 text-primary border-primary/30">
                <Terminal className="w-4 h-4 mr-2" />
                Technical Excellence
              </Badge>
              <h2 className="text-4xl font-bold mb-8 gradient-text">
                Engineering Mission-Critical Infrastructure
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  As a <span className="text-primary font-semibold">blockchain architect and backend engineer</span> from IIT Kharagpur, 
                  I specialize in building enterprise-grade systems that secure 
                  <span className="text-accent font-semibold"> millions of dollars in protocol assets</span> and 
                  <span className="text-primary font-semibold"> process hundreds of thousands of transactions</span> with zero tolerance for failure.
                </p>
                <p>
                  My expertise spans from architecting <span className="text-emerald-400 font-semibold">DAO governance protocols managing $8M+</span> 
                  to building <span className="text-blue-400 font-semibold">real-time collaborative platforms</span> and 
                  <span className="text-purple-400 font-semibold">zero-knowledge GPU computing infrastructure</span>. 
                  I create robust, scalable systems that enterprises and protocols depend on daily.
                </p>
                <p>
                  Whether developing smart contracts with <span className="text-primary font-semibold">Rust and Solidity</span>, 
                  engineering distributed systems with <span className="text-accent font-semibold">Node.js and Python</span>, 
                  or architecting cloud infrastructure with <span className="text-emerald-400 font-semibold">Kubernetes and Docker</span>, 
                  I bring security-first thinking and performance optimization expertise to every challenge.
                </p>
              </div>
              
              <div className="mt-8 flex gap-4">
                <Button 
                  className="btn-primary"
                  onClick={() => handleNavClick('#experience')}
                >
                  <Rocket size={18} className="mr-2" />
                  Technical Experience
                </Button>
                <Button 
                  variant="outline"
                  className="glass-card border-border text-foreground hover:text-primary"
                  onClick={() => handleNavClick('#contact')}
                >
                  <Terminal size={18} className="mr-2" />
                  Enterprise Consultation
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
                    <span className="font-semibold text-lg">Location</span>
                  </div>
                  <p className="text-muted-foreground">Remote • Global</p>
                </div>
                
                <div className="glass-card p-6 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-accent/20 rounded-lg text-accent group-hover:scale-110 transition-transform">
                      <Code className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-lg">Specialization</span>
                  </div>
                  <p className="text-muted-foreground">Blockchain • Backend • DevOps</p>
                </div>
              </div>
              
              <div className="space-y-6 mt-8">
                <div className="glass-card p-6 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-emerald-500/20 rounded-lg text-emerald-400 group-hover:scale-110 transition-transform">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-lg">Availability</span>
                  </div>
                  <p className="text-muted-foreground">Enterprise Projects Only</p>
                </div>
                
                <div className="glass-card p-6 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-lg">Response Time</span>
                  </div>
                  <p className="text-muted-foreground">Within 4 hours</p>
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
            <h2 className="text-4xl font-bold mb-8 gradient-text">Enterprise Engineering Experience</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building mission-critical blockchain protocols, high-performance backend systems, and enterprise infrastructure across 2+ years of professional experience
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
            <h2 className="text-4xl font-bold mb-8 gradient-text">Technical Expertise & Architecture</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade technology stack spanning blockchain protocols, distributed systems, and cloud-native infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="glass-card group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl text-primary group-hover:scale-110 transition-transform">
                      {skillGroup.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg gradient-text-accent">{skillGroup.category}</CardTitle>
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
                { title: "IIT Kharagpur", subtitle: "Bachelor of Technology", icon: "🎓" },
                { title: "Inter-IIT Tech Meet", subtitle: "Aptos Blockchain Challenge", icon: "🏆" },
                { title: "Enterprise Developer", subtitle: "2+ Years Experience", icon: "⛓️" }
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
            <h2 className="text-4xl font-bold mb-8 gradient-text">Mission-Critical Project Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade solutions demonstrating advanced technical expertise, security-first architecture, and measurable business impact
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
                      <CardTitle className="text-xl mb-3 gradient-text-accent">{project.title}</CardTitle>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-emerald-400 font-semibold">Production Ready</span>
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
                  <h3 className="text-3xl font-bold mb-6 gradient-text">Enterprise-Ready Architecture Solutions</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Partner with me to architect your next breakthrough system. I deliver enterprise-grade technical solutions, 
                    proven security practices, and scalable infrastructure that transforms ambitious visions into production reality.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button 
                    size="lg"
                    className="btn-primary text-lg px-8 py-4"
                    onClick={() => handleNavClick('#contact')}
                  >
                    <Terminal className="w-5 h-5 mr-3" />
                    Start Enterprise Project
                    <ArrowRight className="w-5 h-5 ml-3" />
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="glass-card border-border text-foreground hover:text-primary text-lg px-8 py-4"
                    onClick={() => toast.info("Architecture consultation", {description: "Schedule technical consultation"})}
                  >
                    <Terminal className="w-5 h-5 mr-3" />
                    Technical Architecture
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
              <Terminal className="w-4 h-4 mr-2" />
              Enterprise Partnership
            </Badge>
            <h2 className="text-4xl font-bold mb-8 gradient-text">Ready for Your Next Mission-Critical Project?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Available for enterprise blockchain protocols, high-performance backend systems, 
              and critical infrastructure projects that demand zero compromise on security and performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <Card className="glass-card group">
              <CardContent className="p-10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                    <Terminal className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-6 gradient-text-accent">Direct Enterprise Contact</h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Technical consultation • Architecture review • Enterprise development
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full btn-primary text-lg py-4"
                    onClick={() => {
                      window.open('mailto:tushar.khokhar@iitkharagpur.ac.in?subject=Enterprise Project Inquiry', '_blank');
                      toast.success("Opening secure communication", { description: "Enterprise consultation available within 4 hours" });
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Contact for Projects
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
                    <Globe className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-6 gradient-text">Professional Profiles</h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Technical portfolio • Project history • Code repositories
                  </p>
                  <div className="flex justify-center gap-6">
                    <a
                      href="https://github.com/tusharkhokhar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-4 border-border hover:border-primary/50 transition-all hover:scale-110 group"
                      aria-label="GitHub Profile"
                    >
                      <GithubLogo size={28} className="text-foreground group-hover:text-primary transition-colors" />
                    </a>
                    <a
                      href="https://linkedin.com/in/tusharkhokhar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-4 border-border hover:border-accent/50 transition-all hover:scale-110 group"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedinLogo size={28} className="text-foreground group-hover:text-accent transition-colors" />
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
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-400 font-bold text-lg status-online">AVAILABLE FOR ENTERPRISE PROJECTS</span>
                </div>
                <div className="w-px h-8 bg-border"></div>
                <div className="text-lg text-muted-foreground">
                  Response Time: <span className="text-primary font-semibold">&lt; 4hrs</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { label: "Blockchain Protocols", status: "Available", color: "text-emerald-400" },
                  { label: "Backend Architecture", status: "Available", color: "text-blue-400" },
                  { label: "DevOps Infrastructure", status: "Available", color: "text-purple-400" }
                ].map((item, index) => (
                  <div key={index} className="text-center glass-card p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-2">{item.label}</div>
                    <div className={`text-lg font-bold ${item.color}`}>{item.status}</div>
                  </div>
                ))}
              </div>
              
              <div className="text-lg text-muted-foreground">
                <span className="text-primary font-semibold">Enterprise focus:</span> Mission-critical protocols • 
                High-frequency systems • Zero-downtime infrastructure • Security-first development
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
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Terminal size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-xl gradient-text">tushar.dev</div>
                  <div className="text-sm text-muted-foreground">Blockchain Engineer</div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Engineering secure, scalable blockchain protocols and enterprise backend systems 
                for mission-critical applications.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6 gradient-text-accent">Technical Focus</h3>
              <div className="space-y-3">
                {["Smart Contracts", "Backend Architecture", "DevOps Infrastructure", "Security Auditing", "Performance Optimization"].map((item) => (
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
              <h3 className="font-bold text-lg mb-6 gradient-text-accent">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Solidity", "Rust", "Python", "Kubernetes", "AWS"].map((tech) => (
                  <span key={tech} className="skill-badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Enterprise-grade • Security-first • Performance-optimized
              </p>
            </div>
          </div>

          <div className="pt-12 border-t border-border text-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-muted-foreground">
                © 2024 Tushar Khokhar. Enterprise blockchain & backend engineering.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Global availability</span>
                <div className="w-px h-4 bg-border"></div>
                <span>Enterprise consulting</span>
                <div className="w-px h-4 bg-border"></div>
                <span className="text-emerald-400">Currently accepting projects</span>
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