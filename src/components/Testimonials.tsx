import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Client",
    content: "Roy and his team are absolutely amazing. I came in with severe back pain and after just a few sessions, I feel like a new person. Highly recommended!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Athlete",
    content: "As a runner, I struggle with hip issues. Roy's Company has helped me maintain my performance and recover faster. The personalized care is outstanding.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Client",
    content: "The best wellness experience I've ever had. The staff is friendly, the facility is beautiful, and the treatments are effective. Thank you Roy's Company!",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Client",
    content: "I was skeptical about wellness care, but Roy changed my mind. He took the time to explain everything and the results speak for themselves.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-medium tracking-wider uppercase text-sm mb-4">
              Patient Stories
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-6 gold-underline inline-block pb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-8 leading-relaxed">
              Don't just take our word for it. Read about the experiences of those who have found relief and wellness with us.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-5xl mx-auto px-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="h-full">
                      <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/30 transition-all duration-300 group">
                        <CardContent className="p-8 flex flex-col h-full">
                          <Quote className="w-10 h-10 text-accent/20 mb-6 group-hover:text-accent/40 transition-colors" />
                          
                          <div className="flex mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                          
                          <p className="text-muted-foreground italic mb-6 flex-grow leading-relaxed">
                            "{testimonial.content}"
                          </p>
                          
                          <div className="mt-auto pt-6 border-t border-border/50">
                            <h4 className="font-serif font-medium text-foreground text-lg">
                              {testimonial.name}
                            </h4>
                            <span className="text-sm text-accent">
                              {testimonial.role}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground" />
              <CarouselNext className="hidden md:flex -right-12 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground" />
            </Carousel>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
