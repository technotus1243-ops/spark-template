import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Envelope, LinkedinLogo, GithubLogo, CheckCircle } from "@phosphor-icons/react"
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
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next project? I'd love to hear about your ideas and 
            explore how we can bring them to life.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Your name" 
                      required 
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      required 
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    placeholder="Project inquiry, collaboration, etc." 
                    required 
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                    className="min-h-32"
                    required 
                    disabled={isSubmitting}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Message Sent!
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Get in touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and interesting challenges. Whether you're looking for a full-stack developer, 
                  need technical consultation, or want to explore a potential collaboration, 
                  I'd love to hear from you.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Envelope className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href="mailto:alex@example.com" 
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        alex@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <LinkedinLogo className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <a 
                        href="https://linkedin.com/in/alexchen" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        linkedin.com/in/alexchen
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <GithubLogo className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <a 
                        href="https://github.com/alexchen" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        github.com/alexchen
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Response Time</h3>
                <p className="text-sm text-muted-foreground">
                  I typically respond to all inquiries within 24 hours. For urgent matters, 
                  feel free to mention it in your subject line.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}