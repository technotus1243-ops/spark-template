import { useState, useEffect } from "react"
import { GithubLogo, LinkedinLogo, List, X, Download, Code } from "@phosphor-icons/react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = ["hero", "about", "skills", "projects", "contact"]
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(current || "")
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "About", id: "about" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#contact", label: "Contact", id: "contact" },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-xl border-b border-border/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Professional Brand */}
            <div className="flex-shrink-0">
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="group flex items-center space-x-3"
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    <Code size={20} className="text-background" />
                  </div>
                </div>
                <div className="hidden sm:block">
                  <div className="font-display font-bold text-lg text-foreground">
                    Tushar Khokhar
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    Blockchain Engineer
                  </div>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                      activeSection === item.id
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="https://github.com/tusharkhokhar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-foreground/60 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <GithubLogo size={18} />
              </a>
              <a
                href="https://linkedin.com/in/tusharkhokhar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-foreground/60 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <LinkedinLogo size={18} />
              </a>
              
              <div className="w-px h-6 bg-border/50 mx-2"></div>
              
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('#contact')
                }}
                className="px-6 py-2 text-sm font-semibold text-primary-foreground bg-gradient-to-r from-primary to-accent rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-200"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-foreground/80 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-all duration-200"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <List size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pt-2 pb-6 space-y-1 bg-background/95 backdrop-blur-xl border-t border-border/50">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                }`}
              >
                {item.label}
              </a>
            ))}
            
            <div className="pt-4 mt-4 border-t border-border/50">
              <div className="flex items-center justify-between px-4 py-2">
                <div className="flex items-center space-x-3">
                  <a
                    href="https://github.com/tusharkhokhar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-foreground/60 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <GithubLogo size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/tusharkhokhar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-foreground/60 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <LinkedinLogo size={20} />
                  </a>
                </div>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('#contact')
                  }}
                  className="px-6 py-2 text-sm font-semibold text-primary-foreground bg-gradient-to-r from-primary to-accent rounded-lg"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer for fixed navigation */}
      <div className="h-16"></div>
    </>
  )
}