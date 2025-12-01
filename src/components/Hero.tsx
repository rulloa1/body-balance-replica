import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Active wellness lifestyle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-5xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
            Body Balance
            <br />
            <span className="text-4xl lg:text-6xl">Chiropractic &</span>
            <br />
            <span className="text-4xl lg:text-6xl">Wellness Center</span>
          </h2>
          
          <div className="mb-8">
            <p className="text-lg text-muted-foreground mb-2">Chiropractor located in</p>
            <h3 className="text-2xl font-serif text-accent font-bold">Houston, Texas</h3>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              Schedule Appointment
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        <button className="w-3 h-3 rounded-full bg-primary" aria-label="Slide 1" />
        <button className="w-3 h-3 rounded-full bg-primary/30" aria-label="Slide 2" />
        <button className="w-3 h-3 rounded-full bg-primary/30" aria-label="Slide 3" />
        <button className="w-3 h-3 rounded-full bg-primary/30" aria-label="Slide 4" />
      </div>
    </section>
  );
};
