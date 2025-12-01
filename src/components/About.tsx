import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-treatment.jpg";

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-full overflow-hidden w-[400px] h-[400px] mx-auto shadow-elevated">
              <img
                src={aboutImage}
                alt="Chiropractic care"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              About Body Balance Chiropractic
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Body Balance Chiropractic & Wellness Center, we are dedicated to helping you achieve optimal health through comprehensive, patient-centered care. Our team of experienced professionals combines traditional chiropractic techniques with modern wellness approaches.
              </p>
              <p>
                With years of experience serving the Houston community, we understand that each patient is unique. We take the time to listen to your concerns, perform thorough evaluations, and create personalized treatment plans tailored to your specific needs and health goals.
              </p>
              <p>
                Whether you're seeking relief from pain, recovering from an injury, or looking to enhance your overall wellness, our state-of-the-art facility and compassionate team are here to support you every step of the way.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
