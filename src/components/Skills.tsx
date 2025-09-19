import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function Skills() {
  const skillCategories = [
    {
      title: "Blockchain & Web3",
      icon: "🔗",
      skills: [
        { name: "Solidity", level: 95 },
        { name: "Rust", level: 90 },
        { name: "Web3.js/Ethers.js", level: 88 },
        { name: "DeFi Protocols", level: 92 },
        { name: "Smart Contract Security", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚡",
      skills: [
        { name: "Python/Django", level: 92 },
        { name: "Node.js", level: 88 },
        { name: "PostgreSQL", level: 90 },
        { name: "Redis", level: 85 },
        { name: "Microservices", level: 87 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: [
        { name: "Kubernetes", level: 85 },
        { name: "AWS", level: 82 },
        { name: "Docker", level: 88 },
        { name: "CI/CD", level: 80 },
        { name: "Infrastructure as Code", level: 78 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      skills: [
        { name: "Python/TensorFlow", level: 80 },
        { name: "GPU Computing", level: 85 },
        { name: "Zero-Knowledge Proofs", level: 75 },
        { name: "ML Ops", level: 82 },
        { name: "Data Pipeline Design", level: 88 }
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
              <Card key={index} className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 glow-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-display">
                    <span className="text-2xl">{category.icon}</span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
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