import { Award, Users, Clock, Shield, Star, Heart } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const badges = [
  {
    icon: Clock,
    value: "15+",
    label: "Years Experience",
    description: "Serving Houston since 2009",
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Patients Treated",
    description: "Trusted by families",
  },
  {
    icon: Award,
    value: "Board",
    label: "Certified",
    description: "Licensed chiropractor",
  },
  {
    icon: Star,
    value: "5.0",
    label: "Star Rating",
    description: "Google Reviews",
  },
  {
    icon: Shield,
    value: "ACA",
    label: "Member",
    description: "American Chiropractic Assoc.",
  },
  {
    icon: Heart,
    value: "100%",
    label: "Dedication",
    description: "Patient-focused care",
  },
];

export const TrustBadges = () => {
  return (
    <section className="relative py-16 lg:py-20 bg-gradient-to-b from-background via-secondary/30 to-background overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-accent font-medium tracking-wider uppercase text-sm">Why Choose Us</span>
            <h2 className="text-3xl lg:text-4xl font-serif text-foreground mt-3">
              Trusted by Thousands
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="group relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:border-accent/30 hover:shadow-[0_8px_30px_-12px_hsl(var(--accent)/0.2)] transition-all duration-500 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 mb-4 group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-500">
                  <badge.icon className="w-5 h-5 text-accent" />
                </div>
                
                {/* Value */}
                <div className="text-2xl lg:text-3xl font-serif font-semibold text-foreground mb-1">
                  {badge.value}
                </div>
                
                {/* Label */}
                <div className="text-sm font-medium text-foreground/80 mb-1">
                  {badge.label}
                </div>
                
                {/* Description */}
                <div className="text-xs text-muted-foreground">
                  {badge.description}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Bottom accent line */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
};