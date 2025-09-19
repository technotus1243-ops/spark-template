import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = {
  "Languages": ["TypeScript", "JavaScript", "Python", "Go", "SQL"],
  "Frontend": ["React", "Next.js", "Vue.js", "Tailwind CSS", "HTML5", "CSS3"],
  "Backend": ["Node.js", "Express", "FastAPI", "GraphQL", "REST APIs"],
  "Databases": ["PostgreSQL", "MongoDB", "Redis", "MySQL", "SQLite"],
  "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "Vercel", "Netlify", "GitHub Actions"],
  "Tools & Other": ["Git", "Webpack", "Vite", "Jest", "Cypress", "Figma"]
}

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about building exceptional digital experiences that solve real-world problems
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    My journey into software development began during my computer science studies, 
                    where I discovered the profound satisfaction of turning complex problems into 
                    elegant, functional solutions. What started as academic curiosity quickly evolved 
                    into a deep passion for creating technology that makes a meaningful impact.
                  </p>
                  
                  <p>
                    I specialize in full-stack web development, with a particular focus on building 
                    scalable applications for fast-growing startups and established companies. My 
                    approach combines technical excellence with user-centered design, ensuring that 
                    every application I build is not only robust and performant but also intuitive 
                    and delightful to use.
                  </p>
                  
                  <p>
                    When I'm not coding, you'll find me contributing to open-source projects, 
                    mentoring junior developers, or exploring the latest advances in web technologies. 
                    I believe that great software is built by great teams, and I'm always eager to 
                    collaborate with like-minded professionals who share my commitment to quality 
                    and innovation.
                  </p>
                  
                  <div className="pt-4 border-t">
                    <p className="font-medium text-accent">
                      Currently seeking opportunities with innovative teams building products 
                      that challenge the status quo and create lasting value.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
                <div className="space-y-6">
                  {Object.entries(skills).map(([category, techs]) => (
                    <div key={category}>
                      <h4 className="font-medium text-lg mb-3 text-accent">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Core Values</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-accent mb-2">Technical Excellence</h4>
                    <p className="text-muted-foreground">
                      Writing clean, maintainable code that stands the test of time and scales with business needs.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent mb-2">User-Centric Design</h4>
                    <p className="text-muted-foreground">
                      Building applications that prioritize user experience and accessibility for all users.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent mb-2">Continuous Learning</h4>
                    <p className="text-muted-foreground">
                      Staying current with emerging technologies and best practices in the rapidly evolving tech landscape.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent mb-2">Collaborative Innovation</h4>
                    <p className="text-muted-foreground">
                      Working closely with teams to solve complex problems and deliver exceptional results.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}