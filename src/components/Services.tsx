import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import backPainImg from "@/assets/services/back-pain.jpg";
import massageTherapyImg from "@/assets/services/massage-therapy.jpg";
import neckPainImg from "@/assets/services/neck-pain.jpg";
import pregnancyCareImg from "@/assets/services/pregnancy-care.jpg";
import chiroAdjustmentImg from "@/assets/services/chiropractic-adjustment.jpg";
import personalInjuryImg from "@/assets/services/personal-injury.jpg";

const services = [
  {
    image: backPainImg,
    title: "Back Pain",
    description: "Comprehensive treatment for chronic and acute back pain relief through proven techniques.",
  },
  {
    image: massageTherapyImg,
    title: "Massage Therapy",
    description: "Therapeutic massage to promote healing, relaxation, and overall wellness.",
  },
  {
    image: neckPainImg,
    title: "Neck Pain",
    description: "Specialized care for neck pain and cervical issues using gentle methods.",
  },
  {
    image: pregnancyCareImg,
    title: "Pregnancy Care",
    description: "Gentle chiropractic care designed specifically for expectant mothers.",
  },
  {
    image: chiroAdjustmentImg,
    title: "Chiropractic Adjustment",
    description: "Expert spinal adjustments to restore proper alignment and function.",
  },
  {
    image: personalInjuryImg,
    title: "Personal Injury",
    description: "Comprehensive care for accident recovery and injury rehabilitation.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-medium tracking-wider uppercase text-sm mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-6 gold-underline inline-block pb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-8 leading-relaxed">
            Comprehensive chiropractic and wellness services designed to help you achieve optimal health and lasting well-being.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group elegant-card hover-lift cursor-pointer overflow-hidden border-0"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-16">
          <a
            href="#all-services"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors group"
          >
            <span className="relative">
              View All Services
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
