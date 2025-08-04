import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Why Choose Us", href: "/why-choose-us" },
    { name: "Clients", href: "/clients" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass-strong shadow-premium' : 'bg-transparent'
    }`}>
      {/* Top contact bar */}
      <div className="hidden md:block bg-gradient-primary text-primary-foreground py-3">
        <div className="container mx-auto px-4 flex justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:info@mangosorange.com" className="flex items-center gap-2 hover:text-accent-light transition-all duration-300 hover-glow">
              <Mail className="w-4 h-4" />
              info@mangosorange.com
            </a>
            <a href="tel:+911204164821" className="flex items-center gap-2 hover:text-accent-light transition-all duration-300 hover-glow">
              <Phone className="w-4 h-4" />
              +91 120 416 4821
            </a>
          </div>
          <div className="text-sm font-medium flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent-light" />
            Premium HR Solutions & Workforce Management
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-accent hover-glow transition-all duration-300">
                M
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold gradient-text">MangosOrange</span>
              <span className="text-xs text-muted-foreground font-medium">Excellence in HR Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link px-4 py-2 font-medium text-sm transition-colors duration-300 ${
                  location.pathname === item.href
                    ? "text-accent active"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-3 ml-4">
              <ThemeToggle />
              <Button className="btn-premium bg-gradient-accent hover:shadow-accent text-white font-medium px-6">
                Get Quote
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="p-2 hover-glow transition-all duration-300 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 py-6 glass-strong rounded-2xl animate-scale-in">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-6 py-4 hover:bg-card-hover transition-all duration-300 nav-link ${
                  location.pathname === item.href
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-6 pt-4">
              <Button className="w-full btn-premium bg-gradient-accent shadow-accent text-white font-medium">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;