import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { InsuranceLogos } from "@/components/InsuranceLogos";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <Services />
        <About />
        <InsuranceLogos />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
