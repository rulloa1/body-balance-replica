import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "(281) 984-1247",
    link: "tel:+12819841247",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@bodybalancehealth.net",
    link: "mailto:info@bodybalancehealth.net",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Houston, Texas",
    link: null,
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Mon-Fri: 9AM-6PM",
    link: null,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-medium tracking-wider uppercase text-sm mb-4">
              Contact Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-6 gold-underline inline-block pb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-8 leading-relaxed">
              Ready to start your journey to better health? Contact us today to schedule your appointment.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map(({ icon: Icon, title, content, link }, index) => (
              <ScrollReveal key={title} delay={index * 100}>
                <Card className="elegant-card border-0 hover-lift">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-muted-foreground mb-1">{title}</h3>
                        {link ? (
                          <a
                            href={link}
                            className="text-foreground font-medium hover:text-accent transition-colors"
                          >
                            {content}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{content}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}

            {/* Additional Hours */}
            <ScrollReveal delay={400}>
              <Card className="elegant-card border-0 mt-6">
                <CardContent className="p-5">
                  <h3 className="font-serif text-lg text-primary mb-4">Office Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-medium">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium text-accent">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={200} className="lg:col-span-3">
            <Card className="elegant-card border-0 shadow-elevated h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif text-primary mb-2">
                  Send Us a Message
                </h3>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you shortly.
                </p>
                
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <Input
                        placeholder="John Doe"
                        className="h-12 bg-secondary/50 border-border/50 focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="(123) 456-7890"
                        className="h-12 bg-secondary/50 border-border/50 focus:border-accent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="h-12 bg-secondary/50 border-border/50 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <Textarea
                      placeholder="Tell us how we can help you..."
                      className="min-h-[140px] bg-secondary/50 border-border/50 focus:border-accent resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium h-12 shadow-gold hover:shadow-lg transition-all duration-300"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
