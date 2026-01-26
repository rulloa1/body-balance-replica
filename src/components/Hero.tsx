import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Play } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video with Enhanced Overlays */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Multi-layer gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-primary/80" />
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--primary)/0.4)_100%)]" />
      </div>
      
      {/* Animated Decorative Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-40 left-10 w-64 h-64 bg-accent/10 rounded-full blur-[80px] animate-pulse delay-700" />
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-primary-foreground/5 rounded-full blur-[60px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-full mb-10 animate-fade-up shadow-lg">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/20">
              <MapPin className="w-3.5 h-3.5 text-accent" />
            </div>
            <span className="text-sm font-medium text-primary-foreground tracking-wide">Houston, Texas</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-serif text-primary-foreground mb-8 leading-[1.05] animate-fade-up delay-100">
            Roy's Company
            <span className="block text-accent mt-3 drop-shadow-[0_2px_20px_hsl(var(--accent)/0.3)]">Reliable &</span>
            <span className="block">Professional Services</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-primary-foreground/85 mb-12 max-w-xl leading-relaxed animate-fade-up delay-200 font-light">
            Your trusted partner for home improvement, automotive, and more. Quality service you can depend on.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 animate-fade-up delay-300">
            <Button 
              size="lg" 
              className="group bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-[0_8px_30px_-6px_hsl(var(--accent)/0.5)] hover:shadow-[0_12px_40px_-6px_hsl(var(--accent)/0.6)] transition-all duration-500 h-16 px-10 text-base rounded-full"
              asChild
            >
              <Link to="/book">
                Schedule Appointment
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group border-2 border-primary-foreground/40 text-primary-foreground bg-primary-foreground/5 hover:bg-primary-foreground/15 hover:border-primary-foreground/60 backdrop-blur-md h-16 px-10 text-base font-medium rounded-full transition-all duration-500"
              asChild
            >
              <a href="#about">
                <Play className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                Learn More
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/50 to-transparent" />
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up delay-400">
        <span className="text-primary-foreground/50 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-primary-foreground/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
