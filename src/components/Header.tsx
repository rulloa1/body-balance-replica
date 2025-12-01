import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="h-12 w-12 rounded-full bg-gradient-hero flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">BB</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary leading-tight">Body Balance</h1>
                <p className="text-xs text-muted-foreground">Chiropractic & Wellness</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </a>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {services.map((service) => (
                        <li key={service}>
                          <NavigationMenuLink asChild>
                            <a
                              href={`#${service.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{service}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a href="#blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Blog
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <a href="#team" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Meet The Team
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Call us (281-890-5599)
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-4 border-t border-border">
            <a href="#home" className="block py-2 text-sm font-medium">Home</a>
            <a href="#about" className="block py-2 text-sm font-medium">About</a>
            <div className="py-2">
              <p className="text-sm font-medium mb-2">Services</p>
              <div className="pl-4 space-y-2">
                {services.map((service) => (
                  <a
                    key={service}
                    href={`#${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block py-1 text-sm text-muted-foreground"
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>
            <a href="#blog" className="block py-2 text-sm font-medium">Blog</a>
            <a href="#contact" className="block py-2 text-sm font-medium">Contact</a>
            <a href="#team" className="block py-2 text-sm font-medium">Meet The Team</a>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Call us (281-890-5599)
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
