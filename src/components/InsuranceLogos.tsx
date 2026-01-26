import { ScrollReveal } from "./ScrollReveal";
import { Shield } from "lucide-react";

const insuranceProviders = [
  { name: "Blue Cross Blue Shield", abbr: "BCBS" },
  { name: "Aetna", abbr: "AETNA" },
  { name: "Cigna", abbr: "CIGNA" },
  { name: "United Healthcare", abbr: "UHC" },
  { name: "Humana", abbr: "HUMANA" },
  { name: "Medicare", abbr: "MEDICARE" },
  { name: "Medicaid", abbr: "MEDICAID" },
  { name: "Tricare", abbr: "TRICARE" },
];

export const InsuranceLogos = () => {
  return (
    <section className="py-16 lg:py-20 bg-primary/[0.02]">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium tracking-wider uppercase text-sm">
                Insurance Accepted
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-serif text-foreground">
              We Accept Most Major Insurance Plans
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Making quality health and wellness care accessible and affordable for everyone
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6 max-w-4xl mx-auto">
            {insuranceProviders.map((provider, index) => (
              <div
                key={index}
                className="group flex items-center justify-center px-6 py-4 bg-card border border-border/50 rounded-xl hover:border-accent/30 hover:shadow-[0_4px_20px_-8px_hsl(var(--accent)/0.15)] transition-all duration-300"
              >
                <span className="text-sm lg:text-base font-semibold text-foreground/70 group-hover:text-foreground transition-colors duration-300 tracking-wide">
                  {provider.abbr}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-center mt-10">
            <p className="text-sm text-muted-foreground">
              Don't see your insurance?{" "}
              <a 
                href="#contact" 
                className="text-accent hover:text-accent/80 font-medium underline underline-offset-4 transition-colors"
              >
                Contact us
              </a>{" "}
              to verify your coverage
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};