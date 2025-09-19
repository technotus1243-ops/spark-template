import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Blockchain & Web3",
      icon: "🔗",
      skills: [
        "Solidity",
        "Rust",
        "Web3.js/Ethers.js",
        "DeFi Protocols",
        "Smart Contract Security"
      ]
    },
    {
      title: "Backend Development",
      icon: "⚡",
      skills: [
        "Python/Django",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "Microservices"
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: [
        "Kubernetes",
        "AWS",
        "Docker",
        "CI/CD",
        "Infrastructure as Code"
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      skills: [
        "Python/TensorFlow",
        "GPU Computing",
        "Zero-Knowledge Proofs",
        "ML Ops",
        "Data Pipeline Design"
      ]
    }
  ]

  const achievements = [
    {
      title: "🏆 Gold Medal",
      description: "Inter-IIT Tech Meet 12.0 - Aptos Blockchain Challenge",
      year: "2023"
    },
    {
      title: "💰 $8M+ Assets",
      description: "DAO governance contracts under management",
      year: "2023"
    },
    {
      title: "⚡ 500K+ Transactions",
      description: "Successfully processed on NFT marketplace",
      year: "2022"
    },
    {
      title: "🚀 60% Performance Boost",
      description: "GPU throughput optimization achievement",
      year: "2022"
    }
  ]

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Technical Expertise
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Deep specialization in blockchain technologies, backend systems, and cutting-edge infrastructure
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-display">
                    <span className="text-2xl">{category.icon}</span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-1 gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center">
                        <span className="text-accent mr-2">▸</span>
                        <span className="font-medium text-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">Key Achievements</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="glass border-accent/20 hover:border-accent/40 transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-3">{achievement.title.split(' ')[0]}</div>
                    <h4 className="font-semibold text-primary mb-2">
                      {achievement.title.substring(achievement.title.indexOf(' ') + 1)}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {achievement.description}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {achievement.year}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Specializations */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">Core Specializations</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "DeFi Protocol Development",
                "High-Frequency Trading Bots",
                "Smart Contract Security",
                "Zero-Knowledge Systems",
                "GPU-Accelerated Computing",
                "Microservices Architecture",
                "Real-time Data Processing",
                "Blockchain Infrastructure"
              ].map((spec, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium hover:bg-primary/20 transition-colors duration-200"
                >
                  {spec}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}