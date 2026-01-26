import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, CalendarDays } from "lucide-react";
import logo from "@/assets/logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const services = [
  "Back Pain",
  "Massage Therapy",
  "Neck Pain",
  "Pregnancy Care",
  "Chiropractic Adjustment",
  "Shoulder Pain",
  "Hip Pain",
  "Sciatica",
  "Spinal Decompression",
  "Personal Injury",
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHref = (section: string) => {
    if (isHomePage) {
      return `#${section}`;
    }
    return `/#${section}`;
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-background/98 backdrop-blur-md shadow-sm border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 lg:h-24 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={logo}
                alt="Roy's Company"
                className="h-12 lg:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {["Home", "About"].map((item) => (
              <a
                key={item}
                href={getHref(item.toLowerCase())}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-1 p-4 md:w-[500px] md:grid-cols-2 bg-card border border-border/50 rounded-lg shadow-elevated">
                      {services.map((service) => (
                        <li key={service}>
                          <NavigationMenuLink asChild>
                            <a
                              href={getHref(service.toLowerCase().replace(/\s+/g, '-'))}
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-all hover:bg-secondary/80 group"
                            >
                              <div className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                                {service}
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {["Blog", "Contact"].map((item) => (
              <a
                key={item}
                href={getHref(item.toLowerCase().replace(/\s+/g, '-'))}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
            <a
              href="https://bodybalancehealth.net/team.php"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
            >
              Meet The Team
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
            <a
              href="https://bodybalancefoundation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
            >
              Foundation
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
            <a
              href="https://bodybalancehealth.net/forms/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
            >
              Forms
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium"
              asChild
            >
              <Link to="/book">
                <CalendarDays className="w-4 h-4 mr-2" />
                Book Now
              </Link>
            </Button>
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium shadow-gold hover:shadow-lg transition-all duration-300"
              asChild
            >
              <a href="tel:+12819841247">
              <Phone className="w-4 h-4 mr-2" />
              (281) 984-1247
            </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 space-y-1 border-t border-border/50 animate-fade-in">
            {["Home", "About"].map((item) => (
              <a
                key={item}
                href={getHref(item.toLowerCase())}
                className="block py-3 px-2 text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="py-3 px-2">
              <p className="text-sm font-semibold text-foreground mb-3">Services</p>
              <div className="pl-4 space-y-2 border-l-2 border-accent/30">
                {services.map((service) => (
                  <a
                    key={service}
                    href={getHref(service.toLowerCase().replace(/\s+/g, '-'))}
                    className="block py-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>
            {["Blog", "Contact"].map((item) => (
              <a
                key={item}
                href={getHref(item.toLowerCase().replace(/\s+/g, '-'))}
                className="block py-3 px-2 text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="https://bodybalancehealth.net/team.php"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 px-2 text-sm font-medium hover:text-accent transition-colors"
            >
              Meet The Team
            </a>
            <a
              href="https://bodybalancefoundation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 px-2 text-sm font-medium hover:text-accent transition-colors"
            >
              Foundation
            </a>
            <a
              href="https://bodybalancehealth.net/forms/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 px-2 text-sm font-medium hover:text-accent transition-colors"
            >
              Forms
            </a>
            <div className="pt-4 space-y-3">
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                asChild
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link to="/book">
                  <CalendarDays className="w-4 h-4 mr-2" />
                  Book Appointment
                </Link>
              </Button>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium" asChild>
                <a href="tel:+12819841247">
                  <Phone className="w-4 h-4 mr-2" />
                  Call (281) 984-1247
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
