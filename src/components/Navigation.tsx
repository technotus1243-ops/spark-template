import { useState, useEffect } from "react"
import { GithubLogo, LinkedinLogo, List, X, Download } from "@phosphor-icons/react"

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
    { href: "#projects", label: "Work", id: "projects" },
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
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Brand */}
            <div className="flex-shrink-0">
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="group flex items-center space-x-2"
              >
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary via-accent to-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-background font-bold text-sm">T</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
                </div>
                <span className="font-display font-semibold text-lg text-foreground hidden sm:block">
                  Tushar
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                      activeSection === item.id
                        ? 'text-primary'
                        : 'text-foreground/70 hover:text-foreground'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                      activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://github.com/tusharkhokhar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-foreground/60 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
                aria-label="GitHub"
              >
                <GithubLogo size={18} />
              </a>
              <a
                href="https://linkedin.com/in/tusharkhokhar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-foreground/60 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={18} />
              </a>
              
              <div className="w-px h-6 bg-border"></div>
              
              <button className="group relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground border border-border hover:border-primary/50 rounded-lg transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center space-x-2">
                  <Download size={16} />
                  <span>Resume</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('#contact')
                }}
                className="group relative px-6 py-2 text-sm font-semibold text-primary-foreground bg-gradient-to-r from-primary to-accent rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                <span className="relative z-10">Let's Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-foreground/80 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-all duration-300"
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
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
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
                <div className="flex items-center space-x-4">
                  <a
                    href="https://github.com/tusharkhokhar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-foreground/60 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <GithubLogo size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/tusharkhokhar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-foreground/60 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
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
                  Let's Work
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