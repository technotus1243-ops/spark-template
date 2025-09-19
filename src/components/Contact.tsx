import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { GithubLogo, LinkedinLogo, Envelope, MapPin, Calendar } from "@phosphor-icons/react"
import { toast } from "sonner"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulate form submission
    toast.success("Message sent successfully! I'll get back to you within 24 hours.")
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      project: "",
      budget: "",
      message: ""
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const services = [
    {
      title: "Blockchain Development",
      description: "Smart contracts, DeFi protocols, and Web3 integrations",
      price: "$150-300/hr"
    },
    {
      title: "Backend Systems",
      description: "High-performance APIs, microservices, and database optimization",
      price: "$100-200/hr"
    },
    {
      title: "Trading Bot Development",
      description: "Automated trading systems and market analysis tools",
      price: "$200-400/hr"
    },
    {
      title: "AI Integration",
      description: "ML model deployment and AI-powered backend systems",
      price: "$180-350/hr"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Let's Build Something Amazing
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your blockchain or backend project to life? Let's discuss your vision and create something extraordinary together.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="glass border-primary/20 glow-primary">
                <CardHeader>
                  <CardTitle className="text-2xl font-display">Start Your Project</CardTitle>
                  <p className="text-muted-foreground">
                    Tell me about your project and I'll get back to you within 24 hours with a detailed proposal.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Full Name *</label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email Address *</label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium">Company/Organization</label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="budget" className="text-sm font-medium">Project Budget</label>
                        <Input
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          placeholder="$10,000 - $50,000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="project" className="text-sm font-medium">Project Type</label>
                      <Input
                        id="project"
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        placeholder="DeFi Protocol, Trading Bot, Backend API, etc."
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Project Details *</label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your project requirements, timeline, and any specific technical needs..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 glow-primary"
                      size="lg"
                    >
                      Send Project Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Services */}
            <div className="space-y-6">
              {/* Contact Information */}
              <Card className="glass border-accent/20">
                <CardHeader>
                  <CardTitle className="text-xl font-display">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Envelope size={20} className="text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">tushar.khokhar@iitkg.ac.in</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-primary" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">Kharagpur, India (Remote Available)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar size={20} className="text-primary" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-sm text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-3">Connect with me:</p>
                    <div className="flex gap-3">
                      <Button size="icon" variant="outline" asChild>
                        <a href="https://github.com/tusharkhokhar" target="_blank" rel="noopener noreferrer">
                          <GithubLogo size={20} />
                        </a>
                      </Button>
                      <Button size="icon" variant="outline" asChild>
                        <a href="https://linkedin.com/in/tusharkhokhar" target="_blank" rel="noopener noreferrer">
                          <LinkedinLogo size={20} />
                        </a>
                      </Button>
                      <Button size="icon" variant="outline" asChild>
                        <a href="mailto:tushar.khokhar@iitkg.ac.in">
                          <Envelope size={20} />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Services & Rates */}
              <Card className="glass border-accent/20">
                <CardHeader>
                  <CardTitle className="text-xl font-display">Services & Rates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{service.title}</h4>
                        <Badge variant="secondary">{service.price}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                      {index < services.length - 1 && <div className="border-b border-border pt-2" />}
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      * Rates vary based on project complexity and timeline. 
                      Fixed-price projects available for well-defined scopes.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="glass border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2 animate-pulse"></div>
                  <p className="font-medium text-sm">Currently Available</p>
                  <p className="text-xs text-muted-foreground">
                    Accepting new projects for Q1 2024
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}