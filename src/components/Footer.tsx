import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Back Pain", href: "#back-pain" },
    { label: "Massage Therapy", href: "#massage-therapy" },
    { label: "Neck Pain", href: "#neck-pain" },
    { label: "Pregnancy Care", href: "#pregnancy-care" },
    { label: "Chiropractic Adjustment", href: "#chiropractic-adjustment" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img
              src={logo}
              alt="Roy's Company"
              className="h-12 w-auto brightness-0 invert mb-6"
            />
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Your trusted partner for quality services. Professional, reliable, and dedicated to excellence.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors group"
                >
                  <Icon className="h-4 w-4 text-primary-foreground/70 group-hover:text-accent-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+12819841247"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  (281) 984-1247
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@royscompany.com"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  contact@royscompany.com
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                  <MapPin className="h-4 w-4 text-accent" />
                  Houston, Texas
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2025 Roy's Company. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
