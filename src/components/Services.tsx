import { Card, CardContent } from "@/components/ui/card";
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
    description: "Comprehensive treatment for chronic and acute back pain relief.",
  },
  {
    image: massageTherapyImg,
    title: "Massage Therapy",
    description: "Therapeutic massage to promote healing and relaxation.",
  },
  {
    image: neckPainImg,
    title: "Neck Pain",
    description: "Specialized care for neck pain and cervical issues.",
  },
  {
    image: pregnancyCareImg,
    title: "Pregnancy Care",
    description: "Gentle chiropractic care designed for expectant mothers.",
  },
  {
    image: chiroAdjustmentImg,
    title: "Chiropractic Adjustment",
    description: "Expert spinal adjustments to restore proper alignment.",
  },
  {
    image: personalInjuryImg,
    title: "Personal Injury",
    description: "Comprehensive care for accident and injury recovery.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive chiropractic and wellness services designed to help you achieve optimal health and well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <Card
                key={index}
                className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 font-serif">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#all-services"
            className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors"
          >
            View All Services
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
