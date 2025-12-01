import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center">
                <span className="text-lg font-bold text-accent-foreground">BB</span>
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">Body Balance</h3>
                <p className="text-xs opacity-90">Chiropractic & Wellness</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Your trusted partner in achieving optimal health and wellness.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="opacity-80 hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">About</a></li>
              <li><a href="#services" className="opacity-80 hover:opacity-100 transition-opacity">Services</a></li>
              <li><a href="#blog" className="opacity-80 hover:opacity-100 transition-opacity">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#back-pain" className="opacity-80 hover:opacity-100 transition-opacity">Back Pain</a></li>
              <li><a href="#massage-therapy" className="opacity-80 hover:opacity-100 transition-opacity">Massage Therapy</a></li>
              <li><a href="#neck-pain" className="opacity-80 hover:opacity-100 transition-opacity">Neck Pain</a></li>
              <li><a href="#pregnancy-care" className="opacity-80 hover:opacity-100 transition-opacity">Pregnancy Care</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="opacity-80">(281) 890-5599</li>
              <li className="opacity-80">info@bodybalancehealth.net</li>
              <li className="opacity-80">Houston, Texas</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>&copy; 2025 Body Balance Chiropractic & Wellness Center. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#terms" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
