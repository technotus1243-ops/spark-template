import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Envelope, LinkedinLogo, GithubLogo, CheckCircle, Clock, Sparkle } from "@phosphor-icons/react"
import { toast } from "sonner"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    }

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('Form submitted:', data)
      setIsSubmitted(true)
      toast.success("Message sent successfully! I'll get back to you soon.")
      
      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
      
    } catch (error) {
      toast.error("Failed to send message. Please try again or email me directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-accent/5" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-t from-accent/10 to-primary/10 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/60 backdrop-blur-sm border rounded-full">
            <Sparkle className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Let's Connect</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your next project? I'd love to hear about your ideas and 
            explore how we can{" "}
            <span className="font-semibold text-foreground">bring them to life</span>.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="bg-gradient-to-br from-card/50 to-card backdrop-blur-sm border-2 border-border/50 hover:border-accent/30 transition-all duration-500">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold">Send me a message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">Name *</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Your name" 
                        required 
                        disabled={isSubmitting}
                        className="h-12 border-2 focus:border-accent/50 transition-colors duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        required 
                        disabled={isSubmitting}
                        className="h-12 border-2 focus:border-accent/50 transition-colors duration-300"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">Subject *</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      placeholder="Project inquiry, collaboration, etc." 
                      required 
                      disabled={isSubmitting}
                      className="h-12 border-2 focus:border-accent/50 transition-colors duration-300"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                      className="min-h-32 border-2 focus:border-accent/50 transition-colors duration-300 resize-none"
                      required 
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full h-14 text-lg bg-gradient-to-r from-accent to-primary hover:shadow-xl hover:scale-[1.02] transition-all duration-300" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Sending Message...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Envelope className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gradient-to-br from-card/50 to-card backdrop-blur-sm border-2 border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Get in touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and interesting challenges.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: Envelope,
                      label: "Email",
                      value: "alex@example.com",
                      href: "mailto:alex@example.com"
                    },
                    {
                      icon: LinkedinLogo,
                      label: "LinkedIn",
                      value: "linkedin.com/in/alexchen",
                      href: "https://linkedin.com/in/alexchen"
                    },
                    {
                      icon: GithubLogo,
                      label: "GitHub",
                      value: "github.com/alexchen",
                      href: "https://github.com/alexchen"
                    }
                  ].map((contact) => {
                    const Icon = contact.icon
                    return (
                      <a
                        key={contact.label}
                        href={contact.href}
                        target={contact.href.startsWith('http') ? "_blank" : undefined}
                        rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="group flex items-center space-x-4 p-3 rounded-lg border border-border/30 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
                      >
                        <div className="p-3 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 group-hover:from-accent/20 group-hover:to-primary/20 transition-all duration-300">
                          <Icon className="h-5 w-5 text-accent" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                            {contact.label}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {contact.value}
                          </p>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/5 to-primary/5 border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-accent/20">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
                    <p className="text-sm text-muted-foreground">
                      I typically respond to all inquiries within 24 hours. For urgent matters, 
                      feel free to mention it in your subject line.
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