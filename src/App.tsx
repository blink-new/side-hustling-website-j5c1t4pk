import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Textarea } from './components/ui/textarea'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion'
import { CheckCircle, DollarSign, Clock, Shield, Star, Users, TrendingUp, Zap } from 'lucide-react'

function App() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setIsScheduleOpen(false)
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8 text-accent" />,
      title: "Earn $2-5k in 30 Days",
      description: "Proven strategies that generate real income within your first month"
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Zero Upfront Costs",
      description: "Start immediately without any investment or hidden fees"
    },
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      title: "Flexible Schedule",
      description: "Work around your current commitments and lifestyle"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "Scalable Income",
      description: "Build systems that grow your earnings over time"
    }
  ]

  const testimonials = [
    {
      name: "Sarah M.",
      amount: "$3,200",
      text: "I made $3,200 in my first month! The strategies are simple but incredibly effective.",
      rating: 5
    },
    {
      name: "Mike R.",
      amount: "$4,800",
      text: "Exceeded my goal and made $4,800. This completely changed my financial situation.",
      rating: 5
    },
    {
      name: "Jessica L.",
      amount: "$2,650",
      text: "As a busy mom, I was skeptical. But I made $2,650 working just evenings!",
      rating: 5
    }
  ]

  const faqs = [
    {
      question: "Is this really free to start?",
      answer: "Yes, absolutely! There are no upfront costs, hidden fees, or required investments. You can start implementing our strategies immediately without spending a penny."
    },
    {
      question: "How much time do I need to invest?",
      answer: "Most people start with just 2-3 hours per day. The beauty of our system is its flexibility - you can work around your current schedule and commitments."
    },
    {
      question: "What if I don't make $2-5k in 30 days?",
      answer: "While results vary based on effort and implementation, our strategies are proven and tested. During your consultation call, we'll assess your situation and create a personalized plan for your success."
    },
    {
      question: "Do I need any special skills or experience?",
      answer: "No special skills required! Our methods are designed for complete beginners. We provide step-by-step guidance and support throughout your journey."
    },
    {
      question: "How do I get started?",
      answer: "Simply schedule your free consultation call using the form above. We'll discuss your goals, assess your situation, and create a customized action plan for you."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">Side Hustling</h1>
            </div>
            <Dialog open={isScheduleOpen} onOpenChange={setIsScheduleOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 text-white font-semibold">
                  Schedule Free Call
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="h-4 w-4 mr-2" />
              Limited Time: Free Consultation Available
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Make <span className="text-primary">$2-5k</span> in the Next{' '}
              <span className="text-accent">30 Days</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Learn proven strategies to generate real income without any upfront costs. 
              Join thousands who've transformed their financial future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Dialog open={isScheduleOpen} onOpenChange={setIsScheduleOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 text-lg">
                    Schedule Your Free Call Now
                  </Button>
                </DialogTrigger>
              </Dialog>
              <div className="flex items-center text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-accent mr-2" />
                <span>No upfront costs • No hidden fees</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-accent" />
                <span>5,000+ Success Stories</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-2 text-accent" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Side Hustling Program?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We've helped thousands of people create sustainable income streams with our proven methodology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Real Results from Real People
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our community members have achieved in just 30 days
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{testimonial.name}</span>
                    <span className="text-accent font-bold text-lg">{testimonial.amount}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our free consultation call and discover exactly how you can start earning $2-5k in the next 30 days.
          </p>
          <Dialog open={isScheduleOpen} onOpenChange={setIsScheduleOpen}>
            <DialogTrigger asChild>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg">
                Schedule Your Free Call Today
              </Button>
            </DialogTrigger>
          </Dialog>
          <p className="text-sm mt-4 opacity-75">
            No obligation • 100% free • Limited spots available
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to the most common questions about our program
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Side Hustling</h3>
            <p className="text-white/70 mb-6">
              Empowering people to create sustainable income streams and achieve financial freedom.
            </p>
            <Dialog open={isScheduleOpen} onOpenChange={setIsScheduleOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-foreground">
                  Schedule Free Consultation
                </Button>
              </DialogTrigger>
            </Dialog>
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/50 text-sm">
                © 2024 Side Hustling. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Schedule Call Dialog */}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Schedule Your Free Consultation
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div>
            <Label htmlFor="message">Tell us about your goals (optional)</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="What are you hoping to achieve?"
              rows={3}
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            Schedule My Free Call
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            We'll contact you within 24 hours to schedule your consultation.
          </p>
        </form>
      </DialogContent>
    </div>
  )
}

export default App