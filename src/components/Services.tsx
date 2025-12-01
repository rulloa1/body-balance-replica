import { Card, CardContent } from "@/components/ui/card";
import { Activity, Heart, Stethoscope, Smile, Bone, Users } from "lucide-react";

const services = [
  {
    icon: Bone,
    title: "Back Pain",
    description: "Comprehensive treatment for chronic and acute back pain relief.",
  },
  {
    icon: Heart,
    title: "Massage Therapy",
    description: "Therapeutic massage to promote healing and relaxation.",
  },
  {
    icon: Activity,
    title: "Neck Pain",
    description: "Specialized care for neck pain and cervical issues.",
  },
  {
    icon: Smile,
    title: "Pregnancy Care",
    description: "Gentle chiropractic care designed for expectant mothers.",
  },
  {
    icon: Stethoscope,
    title: "Chiropractic Adjustment",
    description: "Expert spinal adjustments to restore proper alignment.",
  },
  {
    icon: Users,
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
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Icon className="h-7 w-7 text-accent group-hover:text-accent-foreground" />
                  </div>
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
