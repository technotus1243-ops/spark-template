import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function About() {
  const experiences = [
    {
      company: "Mode Network",
      role: "Blockchain Developer",
      period: "2023 - Present",
      achievements: [
        "Built DAO governance smart contracts managing $8M+ in protocol assets",
        "Led Velodrome DEX integration, optimizing transaction routing",
        "Achieved 35% reduction in gas fees through batching optimizations"
      ],
      technologies: ["Solidity", "Web3.js", "DeFi Protocols"]
    },
    {
      company: "Eclipse Network",
      role: "Smart Contract Engineer",
      period: "2022 - 2023",
      achievements: [
        "Developed foundational Rust smart contract for NFT marketplace",
        "Platform processed 500,000+ transactions successfully",
        "Implemented high-throughput transaction processing"
      ],
      technologies: ["Rust", "Solana", "NFT Standards"]
    },
    {
      company: "Arcane Labs",
      role: "Backend Developer",
      period: "2022",
      achievements: [
        "Developed 30+ REST APIs for microservices architecture",
        "Engineered low-latency feed system handling 50,000+ items",
        "Maintained sub-200ms response times consistently"
      ],
      technologies: ["Python", "Django", "PostgreSQL", "Redis"]
    },
    {
      company: "ZKAGI",
      role: "Infrastructure Engineer",
      period: "2021 - 2022",
      achievements: [
        "Designed zero-knowledge cloud-native GPU-clustering platform",
        "Reduced ML compute costs by 40% through optimization",
        "Boosted GPU throughput by 60% via automated Kubernetes workflows"
      ],
      technologies: ["Kubernetes", "ZK-Proofs", "GPU Computing"]
    }
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building the future of digital interaction through blockchain innovation and high-performance backend systems
            </p>
          </div>

          {/* Bio Section */}
          <div className="mb-16">
            <Card className="glass border-primary/20 glow-primary">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed">
                  <p className="text-lg mb-6">
                    Hello, and welcome to my digital space. My name is <span className="text-primary font-semibold">Tushar Khokhar</span>, 
                    and I'm a Blockchain and Backend Developer with a degree from the 
                    <span className="text-accent font-semibold"> Indian Institute of Technology, Kharagpur</span>. 
                    Ever since I started my journey in technology, I've been driven by a deep curiosity for how things work 
                    and a passion for building systems that can make a real impact.
                  </p>
                  
                  <p className="text-lg mb-6">
                    My work sits at the exciting crossroads where <span className="text-primary font-semibold">decentralized finance</span>, 
                    <span className="text-accent font-semibold"> artificial intelligence</span>, and 
                    <span className="text-primary font-semibold"> high-performance backend engineering</span> meet. 
                    For me, it's all about building the secure, scalable, and efficient systems that will serve as 
                    the backbone for the next generation of digital interaction.
                  </p>

                  <p className="text-lg">
                    I thrive in forward-thinking environments dedicated to solving tangible, real-world problems 
                    with clean, reliable, and thoughtfully crafted code. My ultimate goal is not just to write software, 
                    but to engineer robust infrastructure that empowers users, whether that's through a seamless 
                    on-chain transaction or a lightning-fast API response.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Professional Journey</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="glass border-accent/20 hover:border-accent/40 transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl font-display">{exp.role}</CardTitle>
                        <CardDescription className="text-primary font-semibold text-lg">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="mt-2 md:mt-0 w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-accent mr-2 mt-1">▸</span>
                          <span className="text-foreground/90">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
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