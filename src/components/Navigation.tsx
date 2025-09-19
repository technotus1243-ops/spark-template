import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { List, X } from "@phosphor-icons/react"

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-xl font-bold hover:text-accent transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span>Alex Chen</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-300" />
                </button>
              ))}
              <Button 
                onClick={() => handleNavClick('#contact')}
                size="sm"
                className="bg-gradient-to-r from-accent to-primary hover:shadow-lg hover:scale-105 transition-all duration-300 px-6"
              >
                Get In Touch
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:bg-accent/10 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <List className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="fixed inset-0 bg-background/90 backdrop-blur-xl" 
            onClick={() => setIsMobileMenuOpen(false)} 
          />
          <div className="fixed top-20 left-0 right-0 bg-card/95 backdrop-blur-xl border-b border-border/50 shadow-2xl">
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left py-3 text-lg font-medium text-muted-foreground hover:text-foreground hover:translate-x-2 transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => handleNavClick('#contact')}
                className="w-full mt-6 h-12 bg-gradient-to-r from-accent to-primary hover:shadow-lg transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}