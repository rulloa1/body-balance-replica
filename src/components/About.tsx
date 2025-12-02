import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Heart } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import aboutImage from "@/assets/about-treatment.jpg";

const highlights = [
  { icon: Award, label: "Top Rated", value: "Chiropractor" },
  { icon: Users, label: "Patients", value: "10,000+" },
  { icon: Heart, label: "Years", value: "15+" },
];

export const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Main Image */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-gold rounded-2xl opacity-20 blur-xl" />
                <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={aboutImage}
                    alt="Dr. Shawn Taher - Chiropractic care specialist"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              </div>

              {/* Stats Card */}
              <div className="absolute -bottom-8 -right-8 lg:right-8 bg-card p-6 rounded-xl shadow-elevated border border-border/50">
                <div className="grid grid-cols-3 gap-6">
                  {highlights.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="text-center">
                      <Icon className="w-6 h-6 text-accent mx-auto mb-2" />
                      <div className="text-xl font-serif font-bold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content Column */}
          <ScrollReveal direction="right" delay={200}>
            <div className="lg:pl-8">
              <span className="inline-block text-accent font-medium tracking-wider uppercase text-sm mb-4">
                About Us
              </span>
              <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-6 leading-tight">
                Body Balance Chiropractic & Wellness Center
              </h2>
              
              <div className="w-16 h-1 bg-gradient-gold rounded-full mb-8" />

              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  At Body Balance Chiropractic & Wellness Center in Houston, Texas, led by <strong className="text-foreground">Dr. Shawn Taher, DC</strong>, we offer a multidisciplinary and holistic approach to health care, giving patients an exceptional experience when they walk through the door.
                </p>
                <p>
                  Voted top chiropractor by Houstonians, Dr. Taher has earned a solid reputation for providing patients with superior outcomes. His effective treatments focus on the root cause of each patient's issue, optimizing their balance to ultimately eliminate pain.
                </p>
                <p className="text-lg font-medium text-foreground italic border-l-4 border-accent pl-4">
                  "Taking pain out of life and putting balance in."
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium h-12 px-6"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-border text-foreground hover:bg-secondary font-medium h-12 px-6"
                >
                  Meet Our Team
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
