import { Mail, Phone, MapPin, ArrowUp, Linkedin, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const services = [
    "Staffing Solutions",
    "WISTA Program", 
    "Contract Labour",
    "Payroll Outsourcing",
    "Skill Development",
    "Facility Management"
  ];

  const industries = [
    "Automobile",
    "Pharmaceutical", 
    "Electronics",
    "Food & Beverage",
    "Education",
    "Manufacturing"
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-current rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-current rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 border-2 border-current rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 border-2 border-current rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <span className="text-2xl font-bold">MangosOrange</span>
              </div>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Integrated service provider company with a knack for customized solutions for national & multinational brands.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a href="mailto:info@mangosorange.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors">
                  <Mail className="w-5 h-5" />
                  info@mangosorange.com
                </a>
                <a href="tel:+911204164821" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5" />
                  +91 120 416 4821
                </a>
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <MapPin className="w-5 h-5" />
                  Delhi NCR, India
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors block">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Industries We Serve</h3>
              <ul className="space-y-3">
                {industries.map((industry, index) => (
                  <li key={index}>
                    <span className="text-primary-foreground/80 block">
                      {industry}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Stay Connected</h3>
              <p className="text-primary-foreground/80 mb-4">
                Get the latest updates on workforce solutions and industry insights.
              </p>
              
              <div className="flex gap-2 mb-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-primary-glow/20 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-accent"
                />
                <Button variant="secondary" size="sm" className="bg-accent text-white hover:bg-accent-light">
                  Subscribe
                </Button>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-primary-foreground/80 mb-3">Follow us:</p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-primary-glow/20 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-glow/20 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-glow/20 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-primary-foreground/80">
                © 2024 MangosOrange Group. All rights reserved.
              </p>
              <p className="text-sm text-primary-foreground/60 mt-1">
                Aspiring to be a Fortune 500 company
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                Careers
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white shadow-accent hover:scale-110 transition-all duration-300 z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;