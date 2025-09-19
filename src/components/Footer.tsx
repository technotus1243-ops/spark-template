import { GithubLogo, LinkedinLogo, Envelope, Heart } from "@phosphor-icons/react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Bio */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xl">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Tushar Khokhar
              </span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Blockchain & Backend Engineer passionate about building the future of digital interaction 
              through DeFi, AI systems, and high-performance infrastructure.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/tusharkhokhar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <GithubLogo size={20} />
              </a>
              <a
                href="https://linkedin.com/in/tusharkhokhar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <LinkedinLogo size={20} />
              </a>
              <a
                href="mailto:tushar.khokhar@iitkg.ac.in"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Envelope size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                About Me
              </a>
              <a href="#skills" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Skills & Expertise
              </a>
              <a href="#projects" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Featured Projects
              </a>
              <a href="#contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Contact & Hire
              </a>
            </div>
          </div>

          {/* Specializations */}
          <div className="space-y-4">
            <h4 className="font-semibold">Specializations</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Smart Contract Development</p>
              <p>• DeFi Protocol Engineering</p>
              <p>• High-Performance Backend Systems</p>
              <p>• Trading Bot Development</p>
              <p>• AI/ML Integration</p>
              <p>• Zero-Knowledge Systems</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Tushar Khokhar. Built with</span>
              <Heart size={16} className="text-red-500" />
              <span>using React, Three.js & shadcn/ui</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a 
                href="#contact" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Available for Freelance
              </a>
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}