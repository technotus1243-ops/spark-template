import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Heart, Lightbulb, Users } from "@phosphor-icons/react"

const skills = {
  "Languages": ["TypeScript", "JavaScript", "Python", "Go", "SQL"],
  "Frontend": ["React", "Next.js", "Vue.js", "Tailwind CSS", "HTML5", "CSS3"],
  "Backend": ["Node.js", "Express", "FastAPI", "GraphQL", "REST APIs"],
  "Databases": ["PostgreSQL", "MongoDB", "Redis", "MySQL", "SQLite"],
  "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "Vercel", "Netlify", "GitHub Actions"],
  "Tools & Other": ["Git", "Webpack", "Vite", "Jest", "Cypress", "Figma"]
}

const values = [
  {
    icon: Code,
    title: "Technical Excellence",
    description: "Writing clean, maintainable code that stands the test of time and scales with business needs."
  },
  {
    icon: Heart,
    title: "User-Centric Design",
    description: "Building applications that prioritize user experience and accessibility for all users."
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "Staying current with emerging technologies and best practices in the rapidly evolving tech landscape."
  },
  {
    icon: Users,
    title: "Collaborative Innovation",
    description: "Working closely with teams to solve complex problems and deliver exceptional results."
  }
]

export function About() {
  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      {/* Professional background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-muted/20 to-background/80" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-accent/6 to-primary/4 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">About Me</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent">
              Crafting Digital Excellence
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Passionate about building exceptional digital experiences that solve{" "}
            <span className="font-semibold text-foreground">real-world problems</span> and create{" "}
            <span className="font-semibold text-foreground">lasting value</span>
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3 items-start">
          {/* Story Section */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="glass-strong border-2 border-border/30 hover:border-accent/20 transition-all duration-500 shadow-lg">
              <CardContent className="p-10">
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-xl font-medium text-foreground">
                    My journey into software development began during my computer science studies, 
                    where I discovered the profound satisfaction of turning complex problems into 
                    elegant, functional solutions.
                  </p>
                  
                  <p className="text-muted-foreground">
                    What started as academic curiosity quickly evolved into a deep passion for creating 
                    technology that makes a meaningful impact. I specialize in full-stack web development, 
                    with a particular focus on building scalable applications for fast-growing startups 
                    and established companies.
                  </p>
                  
                  <p className="text-muted-foreground">
                    My approach combines technical excellence with user-centered design, ensuring that 
                    every application I build is not only robust and performant but also intuitive 
                    and delightful to use. When I'm not coding, you'll find me contributing to 
                    open-source projects, mentoring junior developers, or exploring the latest 
                    advances in web technologies.
                  </p>
                  
                  <div className="pt-6 border-t border-border/30">
                    <div className="glass p-6 rounded-lg border border-accent/20">
                      <p className="font-semibold text-accent text-lg">
                        Currently seeking opportunities with innovative teams building products 
                        that challenge the status quo and create lasting value.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Core Values */}
            <Card className="glass-strong border-2 border-border/30 shadow-lg">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold mb-8 text-center">Core Values</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  {values.map((value, index) => {
                    const Icon = value.icon
                    return (
                      <div key={value.title} className="group p-6 rounded-lg border border-border/20 hover:border-accent/30 glass hover:glass-strong transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 group-hover:from-accent/20 group-hover:to-primary/20 transition-all duration-300">
                            <Icon className="h-6 w-6 text-accent" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                              {value.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {value.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <Card className="glass-strong border-2 border-border/30 hover:border-accent/20 transition-all duration-500 sticky top-24 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-8 text-center">Technical Arsenal</h3>
                <div className="space-y-6">
                  {Object.entries(skills).map(([category, techs]) => (
                    <div key={category} className="space-y-3">
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className="text-xs px-3 py-1 glass border border-accent/20 hover:glass-strong hover:border-accent/40 hover:scale-105 transition-all duration-300 cursor-default"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}