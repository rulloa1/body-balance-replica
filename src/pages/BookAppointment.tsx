import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookingForm } from "@/components/BookingForm";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CalendarDays } from "lucide-react";
import { Helmet } from "react-helmet-async";

const BookAppointment = () => {
  return (
    <>
      <Helmet>
        <title>Book Appointment | Body Balance Chiropractic & Wellness</title>
        <meta name="description" content="Schedule your chiropractic appointment online. Book a consultation for back pain, neck pain, massage therapy, and more at Body Balance Health." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="bg-gradient-hero pt-32 pb-16">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
                  <CalendarDays className="w-8 h-8 text-accent" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-serif text-primary-foreground mb-4">
                  Book Your Appointment
                </h1>
                <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                  Take the first step toward better health. Schedule your consultation with our experienced team.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <BookingForm />
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default BookAppointment;
