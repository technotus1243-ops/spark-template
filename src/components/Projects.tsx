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
    <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/20">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl group-hover:text-accent transition-colors">
              {project.title}
            </CardTitle>
            <CardDescription className="text-base leading-relaxed">
              {project.description}
            </CardDescription>
          </div>
          {project.featured && (
            <Badge variant="secondary" className="shrink-0 ml-4">Featured</Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Technical Challenges Solved:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Quantifiable Results:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <h4 className="font-medium mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex gap-2 pt-2">
            <Button asChild size="sm" className="flex-1">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Eye className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="flex-1">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-2 h-4 w-4" />
                Source Code
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
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A curated selection of my most impactful work, demonstrating expertise in 
            full-stack development, system architecture, and problem-solving.
          </p>
        </div>

        <div className="space-y-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {otherProjects.length > 0 && (
            <>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-8">Additional Projects</h3>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {otherProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" size="lg" asChild>
            <a 
              href="https://github.com/alexchen" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View All Projects on GitHub
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}