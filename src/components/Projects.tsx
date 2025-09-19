import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, GithubLogo, ArrowUpRight } from "@phosphor-icons/react"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  challenges: string[]
  results: string[]
  liveUrl: string
  githubUrl: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Analytics Platform",
    description: "Real-time analytics dashboard for e-commerce businesses with advanced reporting and data visualization.",
    longDescription: "Built a comprehensive analytics platform that processes over 1M daily transactions, providing real-time insights to e-commerce businesses. The platform features custom dashboards, automated reporting, and predictive analytics.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Chart.js", "Tailwind CSS"],
    challenges: [
      "Optimized database queries to handle 1M+ daily transactions with sub-200ms response times",
      "Implemented real-time data streaming using WebSockets and Redis pub/sub",
      "Built scalable microservices architecture with Docker and Kubernetes"
    ],
    results: [
      "Reduced client reporting time by 75% through automated dashboard generation",
      "Achieved 99.9% uptime with load balancing and failover systems",
      "Increased user engagement by 40% with intuitive data visualization"
    ],
    liveUrl: "https://analytics-demo.vercel.app",
    githubUrl: "https://github.com/alexchen/ecommerce-analytics",
    featured: true
  },
  {
    id: "task-management",
    title: "Collaborative Task Management",
    description: "Team productivity application with real-time collaboration, file sharing, and project tracking.",
    longDescription: "Developed a full-stack task management application that enables teams to collaborate effectively with real-time updates, file attachments, and comprehensive project tracking capabilities.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "AWS S3", "Express"],
    challenges: [
      "Implemented real-time synchronization across multiple clients using Socket.io",
      "Built secure file upload system with AWS S3 and proper access controls",
      "Designed scalable database schema for complex project hierarchies"
    ],
    results: [
      "Supports 100+ concurrent users with real-time updates",
      "Reduced project completion time by 30% for beta users",
      "Achieved 95% customer satisfaction score in user testing"
    ],
    liveUrl: "https://taskflow-demo.netlify.app",
    githubUrl: "https://github.com/alexchen/task-management",
    featured: true
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generation Tool",
    description: "SaaS application that uses machine learning to generate marketing content and blog posts.",
    longDescription: "Created an AI-powered content generation platform that helps marketers and writers create high-quality content using advanced language models and custom training data.",
    technologies: ["Python", "FastAPI", "React", "OpenAI API", "PostgreSQL", "Stripe"],
    challenges: [
      "Integrated multiple AI models with fallback systems for reliability",
      "Implemented usage-based billing system with Stripe webhooks",
      "Built content quality scoring algorithm with natural language processing"
    ],
    results: [
      "Generated $50K ARR within 6 months of launch",
      "Processed over 500K content requests with 98% success rate",
      "Reduced content creation time by 60% for users"
    ],
    liveUrl: "https://ai-writer-demo.com",
    githubUrl: "https://github.com/alexchen/ai-content-tool",
    featured: true
  },
  {
    id: "weather-dashboard",
    title: "Weather Monitoring Dashboard",
    description: "Real-time weather tracking application with predictive analytics and mobile responsiveness.",
    longDescription: "Built a comprehensive weather monitoring system that aggregates data from multiple APIs and provides accurate forecasting with interactive maps and historical data analysis.",
    technologies: ["Vue.js", "TypeScript", "Express", "Redis", "Mapbox", "Chart.js"],
    challenges: [
      "Integrated multiple weather APIs with data normalization and caching",
      "Implemented predictive algorithms for weather pattern analysis",
      "Optimized map rendering for smooth user interaction on mobile devices"
    ],
    results: [
      "Achieved 95% forecast accuracy through ensemble modeling",
      "Reduced API costs by 40% through intelligent caching strategies",
      "Served 10K+ daily users across web and mobile platforms"
    ],
    liveUrl: "https://weather-pro-demo.vercel.app",
    githubUrl: "https://github.com/alexchen/weather-dashboard"
  },
  {
    id: "blockchain-tracker",
    title: "Cryptocurrency Portfolio Tracker",
    description: "Portfolio management tool for cryptocurrency investments with real-time price tracking.",
    longDescription: "Developed a secure portfolio tracking application that monitors cryptocurrency investments across multiple exchanges with advanced analytics and automated reporting.",
    technologies: ["React Native", "Node.js", "GraphQL", "PostgreSQL", "CoinGecko API"],
    challenges: [
      "Built secure authentication system with multi-factor authentication",
      "Implemented real-time price updates across 1000+ cryptocurrencies",
      "Created cross-platform mobile app with offline capability"
    ],
    results: [
      "Managed $2M+ in tracked portfolio value for beta users",
      "Achieved 99.5% data accuracy through redundant API sources",
      "Reduced portfolio management time by 50% through automation"
    ],
    liveUrl: "https://crypto-tracker-demo.com",
    githubUrl: "https://github.com/alexchen/crypto-tracker"
  }
]

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group relative overflow-hidden glass-strong border-2 border-border/30 hover:border-accent/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Featured badge with glow */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-gradient-to-r from-accent to-primary text-white shadow-lg animate-pulse">
            ✨ Featured
          </Badge>
        </div>
      )}

      <CardHeader className="relative z-10 pb-4">
        <div className="space-y-3">
          <CardTitle className="text-2xl font-bold group-hover:text-accent transition-colors duration-300">
            {project.title}
          </CardTitle>
          <CardDescription className="text-base leading-relaxed text-muted-foreground">
            {project.description}
          </CardDescription>
        </div>
      </CardHeader>
      
      <CardContent className="relative z-10 space-y-6">
        <div className="space-y-5">
          <div className="bg-muted/30 p-4 rounded-lg border border-border/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              Technical Challenges Solved
            </h4>
            <ul className="space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start text-sm text-muted-foreground">
                  <span className="text-accent mr-3 font-bold">•</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              Quantifiable Results
            </h4>
            <ul className="space-y-2">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-start text-sm text-muted-foreground">
                  <span className="text-green-500 mr-3 font-bold">✓</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge 
                  key={tech} 
                  variant="outline" 
                  className="text-xs px-3 py-1 bg-background/50 border-accent/30 hover:bg-accent/10 hover:border-accent transition-all duration-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button 
              asChild 
              size="sm" 
              className="flex-1 bg-gradient-to-r from-accent to-primary hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Eye className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="sm" 
              className="flex-1 border-2 hover:bg-accent/5 hover:border-accent/50 hover:scale-105 transition-all duration-300"
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-2 h-4 w-4" />
                Source
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function Projects() {
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="relative py-24 px-4 overflow-hidden">
      {/* Professional background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-accent/3 to-background/60" />
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-accent/6 to-primary/4 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-primary/4 to-accent/6 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Portfolio Showcase</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A curated collection of my most impactful work, showcasing expertise in{" "}
            <span className="font-semibold text-foreground">full-stack development</span>, {" "}
            <span className="font-semibold text-foreground">system architecture</span>, and{" "}
            <span className="font-semibold text-foreground">innovative problem-solving</span>.
          </p>
        </div>

        <div className="space-y-16">
          <div className="grid gap-8 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {otherProjects.length > 0 && (
            <>
              <div className="text-center space-y-4">
                <h3 className="text-3xl font-bold text-foreground">Additional Projects</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  More examples of my technical expertise and creative solutions
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                {otherProjects.map((project, index) => (
                  <div 
                    key={project.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${(index + featuredProjects.length) * 200}ms` }}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="text-center mt-20">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Want to see more of my work?
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-2 hover:bg-accent/5 hover:border-accent/50 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg" 
              asChild
            >
              <a 
                href="https://github.com/alexchen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <GithubLogo className="h-6 w-6" />
                <span>Explore All Projects on GitHub</span>
                <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}