import { GithubLogo, LinkedinLogo, Envelope, ArrowUp, Heart } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-b from-muted/30 to-muted/50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-3xl opacity-60" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-6 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <h3 className="text-2xl font-bold">Alex Chen</h3>
            </div>
            
            <p className="text-muted-foreground max-w-md leading-relaxed text-lg">
              Full-stack developer passionate about building{" "}
              <span className="font-semibold text-foreground">exceptional digital experiences</span>{" "}
              that solve real-world problems and create lasting value.
            </p>
            
            <div className="flex space-x-3">
              {[
                { href: "https://github.com/alexchen", icon: GithubLogo, label: "GitHub" },
                { href: "https://linkedin.com/in/alexchen", icon: LinkedinLogo, label: "LinkedIn" },
                { href: "mailto:alex@example.com", icon: Envelope, label: "Email" }
              ].map(({ href, icon: Icon, label }) => (
                <a 
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? "_blank" : undefined}
                  rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="group p-3 rounded-xl border-2 border-border/50 hover:border-accent/30 hover:bg-accent/5 hover:scale-110 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg">Quick Navigation</h4>
            <nav className="flex flex-col space-y-3">
              {[
                { label: "About", id: "about" },
                { label: "Projects", id: "projects" },
                { label: "Contact", id: "contact" }
              ].map(({ label, id }) => (
                <button 
                  key={id}
                  onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="group text-muted-foreground hover:text-foreground transition-all duration-300 text-left flex items-center gap-2"
                >
                  <span className="w-0 h-0.5 bg-accent group-hover:w-4 transition-all duration-300" />
                  {label}
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg">Let's Connect</h4>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Ready to discuss your next project? Let's create something amazing together.
              </p>
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-accent to-primary hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-12 mt-12 border-t border-border/50">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Alex Chen.</p>
            <div className="flex items-center gap-1">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using React, TypeScript, and Tailwind CSS</span>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={scrollToTop}
            className="group mt-6 sm:mt-0 border-2 hover:bg-accent/5 hover:border-accent/50 hover:scale-105 transition-all duration-300"
          >
            <ArrowUp className="mr-2 h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  )
}