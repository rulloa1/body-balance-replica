import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full mb-8 animate-fade-up">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground/90">Houston, Texas</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-primary-foreground mb-6 leading-[1.1] animate-fade-up delay-100">
            Body Balance
            <span className="block text-accent mt-2">Chiropractic &</span>
            <span className="block">Wellness Center</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-primary-foreground/80 mb-10 max-w-lg leading-relaxed animate-fade-up delay-200">
            Experience exceptional care with Dr. Shawn Taher. Taking pain out of life and putting balance in.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium shadow-gold hover:shadow-lg transition-all duration-300 h-14 px-8 text-base"
              asChild
            >
              <Link to="/book">
                Schedule Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary-foreground/50 text-primary-foreground bg-primary-foreground/5 hover:bg-primary-foreground/20 backdrop-blur-sm h-14 px-8 text-base font-medium"
            >
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
