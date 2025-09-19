import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GithubLogo, LinkedinLogo, Download, ArrowRight, Code, Terminal, Lightning, Globe, Brain, Database, Shield, Rocket, Cpu, Circuitry, Cube } from "@phosphor-icons/react"
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
      <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-5"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="animate-neon-pulse w-16 h-16 border-4 border-primary rounded-xl flex items-center justify-center mb-4">
            <Terminal size={32} className="text-primary animate-hologram" />
          </div>
          <div className="text-primary font-mono text-sm animate-fade-in-up">
            Initializing Neural Network...
          </div>
          <div className="flex space-x-1 mt-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-primary rounded-full animate-neon-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const skills = [
    { 
      category: "Blockchain & Web3", 
      items: ["Solidity", "Rust", "Web3.js", "Ethers.js", "Smart Contracts", "DeFi Protocols"],
      icon: <Shield className="w-5 h-5" />,
      color: "from-cyan-400 to-blue-500"
    },
    { 
      category: "Backend Engineering", 
      items: ["Python", "Django", "FastAPI", "PostgreSQL", "Redis", "Microservices"],
      icon: <Database className="w-5 h-5" />,
      color: "from-purple-400 to-pink-500"
    },
    { 
      category: "DevOps & Cloud", 
      items: ["Kubernetes", "Docker", "AWS", "CI/CD", "Infrastructure as Code"],
      icon: <Cpu className="w-5 h-5" />,
      color: "from-green-400 to-cyan-500"
    },
    { 
      category: "AI & Performance", 
      items: ["Trading Bots", "Zero-Knowledge", "GPU Computing", "Real-time Systems"],
      icon: <Brain className="w-5 h-5" />,
      color: "from-orange-400 to-red-500"
    }
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
      <nav className="fixed top-0 w-full z-50 glass-strong border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-neon-pulse"></div>
                <div className="relative w-12 h-12 glass rounded-xl flex items-center justify-center">
                  <Terminal size={24} className="text-primary animate-hologram" />
                </div>
              </div>
              <div>
                <div className="font-bold text-xl">TK</div>
                <div className="text-xs text-primary">Professional Dev</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(`#${item.toLowerCase()}`)}
                  className={`relative text-sm font-medium transition-all duration-300 group ${
                    activeSection === item.toLowerCase()
                      ? 'text-primary text-glow'
                      : 'text-foreground/70 hover:text-primary'
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
                className="relative overflow-hidden bg-transparent border-2 border-primary text-primary hover:text-background group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">Get In Touch</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/50 to-background"></div>
          <div className="absolute inset-0 cyber-grid opacity-10"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          {[
            { Icon: Code, delay: 0, position: { top: '15%', left: '10%' } },
            { Icon: Lightning, delay: 0.5, position: { top: '25%', right: '15%' } },
            { Icon: Globe, delay: 1, position: { top: '60%', left: '8%' } },
            { Icon: Database, delay: 1.5, position: { bottom: '20%', right: '12%' } },
            { Icon: Shield, delay: 2, position: { top: '45%', right: '8%' } },
            { Icon: Rocket, delay: 2.5, position: { bottom: '35%', left: '15%' } },
            { Icon: Brain, delay: 3, position: { top: '35%', left: '85%' } },
            { Icon: Circuitry, delay: 3.5, position: { bottom: '15%', left: '75%' } }
          ].map(({ Icon, delay, position }, index) => (
            <div
              key={index}
              className="absolute w-16 h-16 glass-strong rounded-2xl flex items-center justify-center animate-float hover:scale-110 transition-transform duration-300"
              style={{
                ...position,
                animationDelay: `${delay}s`
              }}
            >
              <Icon size={24} className={`text-primary animate-neon-pulse`} />
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <div className="mb-12 animate-fade-in-up">
            <div className="inline-block mb-6">
              <Badge className="glass-strong border-primary/30 text-primary font-mono text-sm px-4 py-2">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Available for Hire • Remote & Contract
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                Tushar Khokhar
              </span>
            </h1>
            
            <div className="space-y-4 mb-8">
              <h2 className="text-2xl md:text-3xl text-foreground/90 font-medium">
                Senior <span className="text-primary font-semibold">Blockchain Developer</span> & <span className="text-accent font-semibold">Backend Engineer</span>
              </h2>
              <p className="text-lg text-foreground/80 font-mono">
                IIT Kharagpur • 5+ Years Experience • $8M+ Assets Managed
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {[
              { icon: "🏗️", text: "Smart Contract Architect", delay: "0s" },
              { icon: "⚡", text: "High-Performance Systems", delay: "0.1s" },
              { icon: "💼", text: "DeFi Protocol Engineer", delay: "0.2s" },
              { icon: "🤖", text: "Trading Bot Developer", delay: "0.3s" },
              { icon: "🦀", text: "Rust & Solidity Expert", delay: "0.4s" }
            ].map((tag, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="glass-strong px-5 py-2 text-sm hover:scale-105 transition-all duration-300 border border-primary/20 animate-fade-in-up"
                style={{animationDelay: tag.delay}}
              >
                <span className="mr-2">{tag.icon}</span>
                {tag.text}
              </Badge>
            ))}
          </div>

          <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in-up font-light" style={{animationDelay: '0.6s'}}>
            Specializing in building <span className="text-primary font-semibold">scalable blockchain protocols</span>, 
            <span className="text-accent font-semibold"> automated trading systems</span>, and 
            <span className="text-primary font-semibold"> enterprise-grade backend infrastructure</span>. 
            Proven track record with $8M+ in managed protocol assets and 500K+ processed transactions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <Button 
              size="lg"
              className="relative overflow-hidden bg-transparent border-2 border-primary text-primary hover:text-background group px-8 py-3 text-base font-medium"
              onClick={() => handleNavClick('#projects')}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
              <span className="relative z-10 flex items-center">
                View My Projects
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass-strong border-accent/50 hover:border-accent text-accent hover:bg-accent/10 px-8 py-3 text-base font-medium group"
              onClick={() => { 
                window.open('mailto:tushar.khokhar@example.com', '_blank');
                toast.success("📧 Email client opened", {
                  description: "Ready to discuss your project",
                  duration: 3000
                }); 
              }}
            >
              <Download size={18} className="mr-2" />
              Get My Resume
            </Button>
          </div>

          {/* Professional Impact Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-primary/20 animate-fade-in-up" style={{animationDelay: '1s'}}>
            {[
              { value: "$8M+", label: "Protocol Assets Managed", icon: <Shield className="w-5 h-5" />, color: "text-green-400" },
              { value: "500K+", label: "Transactions Processed", icon: <Lightning className="w-5 h-5" />, color: "text-blue-400" },
              { value: "35%", label: "Gas Cost Reduction", icon: <Rocket className="w-5 h-5" />, color: "text-purple-400" },
              { value: "99.9%", label: "System Uptime", icon: <Cpu className="w-5 h-5" />, color: "text-cyan-400" }
            ].map((metric, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <div className="p-3 glass-strong rounded-xl border border-primary/20 group-hover:border-primary/40 transition-colors">
                    <div className={metric.color}>{metric.icon}</div>
                  </div>
                </div>
                <div className={`text-3xl font-bold mb-2 ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20"></div>
        <div className="absolute inset-0 cyber-grid opacity-5"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="glass-strong border-accent/30 text-accent font-mono text-sm px-4 py-2 mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Professional Timeline
            </Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Building enterprise-grade solutions across blockchain, fintech, and high-performance computing
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="glass-strong border-primary/20 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden">
                {/* Timeline connector */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary to-primary/30"></div>
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-2 border-background group-hover:shadow-[0_0_20px_currentColor] transition-all duration-300"></div>
                
                <div className="pl-20 pr-8 py-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300 mb-2">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg text-primary font-semibold">{exp.company}</h4>
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {exp.period}
                      </p>
                    </div>
                    <Badge 
                      variant="outline" 
                      className="glass border-accent/30 text-accent font-mono w-fit"
                    >
                      {exp.period}
                    </Badge>
                  </div>
                  
                  <div className="grid gap-4">
                    <h5 className="font-semibold text-accent flex items-center gap-2 mb-3">
                      <Rocket className="w-4 h-4" />
                      Key Achievements
                    </h5>
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-4 group/achievement">
                        <div className="mt-2 w-6 h-6 glass rounded-lg flex items-center justify-center border border-primary/30 group-hover/achievement:border-primary/60 transition-colors flex-shrink-0">
                          <div className="w-2 h-2 bg-primary rounded-full group-hover/achievement:shadow-[0_0_10px_currentColor] transition-all duration-300"></div>
                        </div>
                        <div className="flex-1">
                          <p className="text-foreground/90 leading-relaxed text-sm">
                            {achievement}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Achievement Summary */}
          <div className="mt-16 glass-strong rounded-2xl p-8 border border-primary/20 text-center">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Career Highlights
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { metric: "5+", label: "Years Elite Experience", icon: <Lightning className="w-5 h-5" /> },
                { metric: "$8M+", label: "Assets Secured", icon: <Shield className="w-5 h-5" /> },
                { metric: "500K+", label: "Transactions Processed", icon: <Database className="w-5 h-5" /> },
                { metric: "40%", label: "Performance Optimized", icon: <Rocket className="w-5 h-5" /> }
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 glass rounded-xl border border-primary/30 group-hover:border-primary/60 transition-colors">
                      <div className="text-primary">{item.icon}</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{item.metric}</div>
                  <div className="text-xs text-muted-foreground font-mono">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
        <div className="absolute inset-0 cyber-grid opacity-5"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="glass-strong border-primary/30 text-primary font-mono text-sm px-4 py-2 mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              Neural Architecture
            </Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Comprehensive proficiency across modern development stacks and emerging technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="glass-strong border-primary/20 hover:border-primary/50 transition-all duration-500 group hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${skillGroup.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {skillGroup.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg text-primary group-hover:text-glow transition-all duration-300">
                        {skillGroup.category}
                      </CardTitle>
                      <div className="text-xs text-muted-foreground">
                        {skillGroup.items.length} core technologies
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="space-y-3">
                    {skillGroup.items.map((skill, i) => (
                      <div key={i} className="flex items-center gap-3 group/item">
                        <div className="w-2 h-2 bg-primary rounded-full group-hover/item:shadow-[0_0_10px_currentColor] transition-all duration-300"></div>
                        <Badge 
                          variant="secondary" 
                          className="glass border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 flex-1 justify-start text-xs"
                        >
                          {skill}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technology Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Languages Mastered", value: "8+", icon: <Code className="w-5 h-5" /> },
              { label: "Frameworks Used", value: "15+", icon: <Globe className="w-5 h-5" /> },
              { label: "Years Experience", value: "5+", icon: <Lightning className="w-5 h-5" /> },
              { label: "Projects Deployed", value: "50+", icon: <Rocket className="w-5 h-5" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center glass-strong rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300 group">
                <div className="flex justify-center mb-3">
                  <div className="p-2 bg-primary/20 rounded-lg text-primary group-hover:bg-primary/30 transition-colors">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="glass-strong border-accent/30 text-accent font-mono text-sm px-4 py-2 mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Portfolio Matrix
            </Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Showcase of impactful solutions demonstrating technical excellence and business value
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <Card key={index} className="glass-strong border-primary/20 group hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 glass rounded-2xl border border-primary/30 group-hover:border-primary/60 transition-all duration-300 group-hover:scale-110">
                      <div className="text-primary group-hover:text-glow transition-all duration-300">
                        {project.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300 mb-2">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        Production System
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed text-foreground/80">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="space-y-6">
                    {/* Key Highlights */}
                    <div>
                      <h4 className="font-semibold mb-3 text-accent flex items-center gap-2">
                        <Lightning className="w-4 h-4" />
                        Key Achievements
                      </h4>
                      <div className="grid gap-2">
                        {project.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm group/highlight">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full group-hover/highlight:shadow-[0_0_8px_currentColor] transition-all duration-300"></div>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technology Stack */}
                    <div>
                      <h4 className="font-semibold mb-3 text-primary flex items-center gap-2">
                        <Cpu className="w-4 h-4" />
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge 
                            key={i} 
                            variant="outline" 
                            className="text-xs glass border-primary/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-primary/20">
                      <Button 
                        size="sm" 
                        className="flex-1 bg-transparent border border-primary/50 text-primary hover:bg-primary/5 group/btn"
                        onClick={() => toast.info("🚀 Live demo available upon request")}
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="flex-1 glass border-accent/50 text-accent hover:bg-accent/5 group/btn"
                        onClick={() => toast.info("📧 Source code available for review")}
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

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="glass-strong rounded-2xl p-8 border border-primary/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-primary">Ready for Your Next Project?</h3>
              <p className="text-foreground/80 mb-6">
                Let's discuss how I can help bring your vision to life with cutting-edge technology
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 group"
                onClick={() => handleNavClick('#contact')}
              >
                <Terminal className="w-5 h-5 mr-2" />
                Start a Conversation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background"></div>
        <div className="absolute inset-0 cyber-grid opacity-5"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-12">
            <Badge className="glass-strong border-primary/30 text-primary font-mono text-sm px-4 py-2 mb-6">
              <Terminal className="w-4 h-4 mr-2" />
              Connection Protocol
            </Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Interested in collaborating on blockchain solutions, trading systems, or backend infrastructure? 
              I'm available for freelance projects and consulting opportunities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Methods */}
            <Card className="glass-strong border-primary/20 hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="inline-flex p-4 glass rounded-2xl border border-primary/30 group-hover:border-primary/60 mb-6 transition-all duration-300">
                    <Terminal className="w-8 h-8 text-primary group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Direct Contact</h3>
                  <p className="text-foreground/70 mb-6 text-sm">
                    Professional consultation • Quick response • Project discussion
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 group/btn"
                    onClick={() => {
                      window.open('mailto:tushar.khokhar@example.com', '_blank');
                      toast.success("📧 Email opened", { description: "tushar.khokhar@example.com" });
                    }}
                  >
                    Contact Me
                    <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-strong border-accent/20 hover:border-accent/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="inline-flex p-4 glass rounded-2xl border border-accent/30 group-hover:border-accent/60 mb-6 transition-all duration-300">
                    <Globe className="w-8 h-8 text-accent group-hover:animate-spin" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-accent">Professional Profiles</h3>
                  <p className="text-foreground/70 mb-6 text-sm">
                    Portfolio • Work history • Technical discussions
                  </p>
                  <div className="flex justify-center gap-4">
                    <a
                      href="https://github.com/tusharkhokhar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 glass rounded-xl border border-primary/30 hover:border-primary/60 text-primary hover:bg-primary/10 transition-all duration-300 group/social"
                      aria-label="GitHub Profile"
                    >
                      <GithubLogo size={24} className="group-hover/social:scale-110 transition-transform" />
                    </a>
                    <a
                      href="https://linkedin.com/in/tusharkhokhar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 glass rounded-xl border border-accent/30 hover:border-accent/60 text-accent hover:bg-accent/10 transition-all duration-300 group/social"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedinLogo size={24} className="group-hover/social:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Availability Status */}
          <Card className="glass-strong max-w-2xl mx-auto border border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_currentColor]"></div>
                  <span className="text-green-400 font-mono text-sm">ONLINE</span>
                </div>
                <div className="w-px h-6 bg-border"></div>
                <div className="text-sm text-muted-foreground">
                  Response Time: &lt; 12hrs
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Freelance Projects", status: "Available", color: "text-green-400" },
                  { label: "Full-time Roles", status: "Open", color: "text-blue-400" },
                  { label: "Technical Consulting", status: "Active", color: "text-purple-400" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xs text-muted-foreground font-mono mb-1">{item.label}</div>
                    <div className={`text-sm font-semibold ${item.color}`}>{item.status}</div>
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
      <footer className="py-12 px-6 border-t border-primary/20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-75"></div>
                  <div className="relative w-10 h-10 glass rounded-xl flex items-center justify-center">
                    <Terminal size={20} className="text-primary" />
                  </div>
                </div>
                <div>
                  <div className="font-bold text-lg text-glow">Tushar Khokhar</div>
                  <div className="text-xs text-primary">Professional Developer</div>
                </div>
              </div>
              <p className="text-sm text-foreground/70">
                Building scalable solutions with modern technology
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-primary mb-3">Quick Navigation</h3>
              <div className="space-y-2">
                {["About", "Skills", "Projects", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(`#${item.toLowerCase()}`)}
                    className="block text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="font-semibold text-accent mb-3">Built With</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind", "Vite"].map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs glass border-accent/30">
                    {tech}
                  </Badge>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Performance optimized & accessible design
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-primary/20 text-center">
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


