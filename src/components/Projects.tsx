import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowSquareOut, GithubLogo, Play } from "@phosphor-icons/react"

export function Projects() {
  const projects = [
    {
      title: "Intelligent Crypto Trading Bot",
      category: "DeFi & Automation",
      description: "Sophisticated crypto trading bot that monitors DEX UIs and market aggregators in real-time, automatically identifying and capitalizing on explosive growth opportunities with 4x-5x market cap increases.",
      longDescription: "Built from the ground up to navigate fast-paced cryptocurrency markets, this bot actively scrapes and analyzes data from top DEX UIs like CoinGecko and Pump.fun. Features proprietary trading strategies for automated buy/hold/sell decisions to maximize profit potential.",
      technologies: ["Python", "Web Scraping", "Real-time Analytics", "DeFi APIs", "Trading Algorithms"],
      metrics: [
        "Real-time market monitoring",
        "4x-5x growth detection",
        "Automated trade execution",
        "Proprietary strategy engine"
      ],
      image: "/api/placeholder/600/400",
      github: "https://github.com/tusharkhokhar/crypto-trading-bot",
      demo: "#",
      featured: true
    },
    {
      title: "High-Performance Rust Trading Bot",
      category: "Rust & Blockchain",
      description: "Ultra-fast copy-trading bot written in Rust for high-frequency trading scenarios. Monitors blockchain for top-performing wallet transactions and replicates trades in near real-time.",
      longDescription: "Leveraging Rust's guarantees of safety, speed, and concurrency, this bot provides millisecond-critical performance for copy-trading strategies. Tracks curated lists of successful crypto wallets and automatically replicates their movements.",
      technologies: ["Rust", "Blockchain Monitoring", "Low-latency Systems", "Real-time Trading", "Concurrency"],
      metrics: [
        "Sub-millisecond latency",
        "Real-time blockchain monitoring",
        "Automatic trade replication",
        "High-frequency performance"
      ],
      image: "/api/placeholder/600/400",
      github: "https://github.com/tusharkhokhar/rust-trading-bot",
      demo: "#",
      featured: true
    },
    {
      title: "AI-Powered Gaming Backend",
      category: "AI & Game Development",
      description: "Complete Django backend infrastructure for Unity-based AI game where players create worlds through text prompts. Bridges user imagination with AI-generated 3D environments.",
      longDescription: "Architected the critical bridge between player creativity and game world generation. The system processes text inputs, communicates with AI models, and translates user visions into precise coordinates and instructions for Unity rendering.",
      technologies: ["Django", "Unity Integration", "AI/ML APIs", "Real-time Processing", "Game Backend"],
      metrics: [
        "Text-to-3D generation",
        "Real-time AI processing",
        "Unity game integration",
        "Seamless user experience"
      ],
      image: "/api/placeholder/600/400",
      github: "https://github.com/tusharkhokhar/ai-game-backend",
      demo: "#",
      featured: true
    },
    {
      title: "Mode Network DAO Governance",
      category: "Smart Contracts & DeFi",
      description: "Built robust DAO governance smart contracts managing over $8 million in protocol assets. Led Velodrome DEX integration with 35% gas fee reduction through optimized transaction routing.",
      longDescription: "Developed secure and efficient governance mechanisms for decentralized decision-making. Implemented advanced transaction batching and routing optimizations that significantly reduced costs for users.",
      technologies: ["Solidity", "DAO Governance", "DeFi Integration", "Gas Optimization", "Smart Contract Security"],
      metrics: [
        "$8M+ assets under management",
        "35% gas fee reduction",
        "Velodrome DEX integration",
        "Advanced governance features"
      ],
      image: "/api/placeholder/600/400",
      github: "#",
      demo: "https://mode.network",
      featured: false
    },
    {
      title: "Eclipse NFT Marketplace",
      category: "Rust & NFTs",
      description: "Foundational Rust smart contract for high-throughput NFT marketplace on Solana. Successfully processed over 500,000 transactions with optimal performance.",
      longDescription: "Designed and implemented the core smart contract infrastructure for a scalable NFT trading platform. Focused on high-throughput transaction processing and user experience optimization.",
      technologies: ["Rust", "Solana", "NFT Standards", "High Throughput", "Smart Contracts"],
      metrics: [
        "500K+ transactions processed",
        "High-throughput architecture",
        "Solana blockchain integration",
        "Optimal performance design"
      ],
      image: "/api/placeholder/600/400",
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "ZKAGI GPU Clustering Platform",
      category: "Infrastructure & ZK",
      description: "Zero-knowledge cloud-native GPU-clustering platform with automated Kubernetes workflows. Achieved 40% cost reduction and 60% GPU throughput improvement.",
      longDescription: "Engineered a sophisticated zero-knowledge layered pipeline for ML compute optimization. Designed automated workflows that dramatically improved both cost efficiency and performance metrics.",
      technologies: ["Kubernetes", "ZK-Proofs", "GPU Computing", "Cloud Infrastructure", "ML Ops"],
      metrics: [
        "40% cost reduction",
        "60% GPU throughput boost",
        "Zero-knowledge privacy",
        "Automated K8s workflows"
      ],
      image: "/api/placeholder/600/400",
      github: "#",
      demo: "#",
      featured: false
    }
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge solutions in blockchain, AI, and high-performance systems that drive real-world impact
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-12 mb-20">
            {featuredProjects.map((project, index) => (
              <Card key={index} className={`glass border-primary/20 overflow-hidden glow-primary ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}>
                <div className="lg:flex">
                  {/* Project Image */}
                  <div className="lg:w-1/2">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Play size={32} className="text-primary" />
                        </div>
                        <p className="text-muted-foreground">Interactive Demo Available</p>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="lg:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Featured
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold font-display mb-4">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <p className="text-foreground/80 text-sm mb-6">{project.longDescription}</p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <span className="text-accent mr-2">▸</span>
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button asChild className="bg-gradient-to-r from-primary to-accent">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ArrowSquareOut size={16} className="mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <GithubLogo size={16} className="mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">Additional Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card key={index} className="glass border-accent/20 hover:border-accent/40 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                      <div className="flex gap-2">
                        <Button size="icon" variant="ghost" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <GithubLogo size={16} />
                          </a>
                        </Button>
                        <Button size="icon" variant="ghost" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ArrowSquareOut size={16} />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Key Metrics */}
                      <div className="space-y-1">
                        {project.metrics.slice(0, 2).map((metric, i) => (
                          <div key={i} className="flex items-center text-sm">
                            <span className="text-accent mr-2">▸</span>
                            <span>{metric}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}