import { GithubLogo, LinkedinLogo, Envelope, ArrowUp } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-2xl font-bold">Alex Chen</h3>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Full-stack developer passionate about building exceptional digital experiences 
              that solve real-world problems and create lasting value.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/alexchen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg border hover:bg-background transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubLogo className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/alexchen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg border hover:bg-background transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinLogo className="h-5 w-5" />
              </a>
              <a 
                href="mailto:alex@example.com"
                className="p-2 rounded-lg border hover:bg-background transition-colors"
                aria-label="Email Contact"
              >
                <Envelope className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Let's Connect</h4>
            <p className="text-sm text-muted-foreground">
              Ready to discuss your next project?
            </p>
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              size="sm"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 mt-8 border-t">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Alex Chen. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={scrollToTop}
            className="mt-4 sm:mt-0"
          >
            <ArrowUp className="mr-2 h-4 w-4" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  )
}