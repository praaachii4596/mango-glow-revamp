import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Clients = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mock client data - replace with real client information
  const clients = [
    { name: "Automobile Leader", logo: "A", industry: "Automotive" },
    { name: "Pharma Corp", logo: "P", industry: "Pharmaceutical" },
    { name: "Tech Innovators", logo: "T", industry: "Technology" },
    { name: "Electronics Pro", logo: "E", industry: "Electronics" },
    { name: "Food Industries", logo: "F", industry: "Food & Beverage" },
    { name: "Manufacturing Co", logo: "M", industry: "Manufacturing" },
    { name: "Healthcare Plus", logo: "H", industry: "Healthcare" },
    { name: "Education First", logo: "E", industry: "Education" }
  ];

  const testimonials = [
    {
      text: "MangosOrange has been instrumental in helping us scale our workforce efficiently. Their attention to compliance and quality is unmatched.",
      author: "Rajesh Kumar",
      position: "HR Director",
      company: "Automobile Leader",
      rating: 5
    },
    {
      text: "The WISTA program provided by MangosOrange has significantly improved our talent pipeline. Highly recommended for skill development initiatives.",
      author: "Priya Sharma",
      position: "Operations Manager",
      company: "Tech Innovators",
      rating: 5
    },
    {
      text: "Exceptional service in contract labor management. Their team understands our industry needs and delivers consistently.",
      author: "Amit Patel",
      position: "Plant Manager",
      company: "Manufacturing Co",
      rating: 5
    }
  ];

  const caseStudies = [
    {
      title: "Automotive Industry Transformation",
      description: "Helped a leading automotive company streamline their workforce by 40% while maintaining quality standards.",
      metrics: { reduction: "40%", timeline: "6 months", satisfaction: "98%" }
    },
    {
      title: "Pharmaceutical Compliance Success",
      description: "Implemented comprehensive compliance framework for pharmaceutical client, achieving 100% regulatory adherence.",
      metrics: { compliance: "100%", training: "500+ staff", timeline: "3 months" }
    },
    {
      title: "Technology Sector Scaling",
      description: "Enabled rapid scaling for a tech startup, growing their team from 50 to 300 employees in 12 months.",
      metrics: { growth: "600%", hires: "250+", retention: "95%" }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="gradient-text">Clients</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted by leading companies across various industries for their workforce solutions
            </p>
          </div>

          {/* Client Logos */}
          <div className="mb-16 animate-slide-up">
            <h3 className="text-2xl font-semibold text-foreground text-center mb-8">Trusted by Industry Leaders</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {clients.map((client, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center justify-center p-6 bg-card rounded-xl shadow-card hover-lift hover-glow transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center text-white font-bold text-xl mb-2">
                    {client.logo}
                  </div>
                  <div className="text-sm text-center">
                    <div className="font-medium text-foreground">{client.name}</div>
                    <div className="text-muted-foreground text-xs">{client.industry}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground text-center mb-8">What Our Clients Say</h3>
            <div className="relative bg-card rounded-2xl p-8 md:p-12 shadow-card">
              <Quote className="w-12 h-12 text-accent/20 absolute top-6 left-6" />
              
              <div className="text-center animate-fade-in" key={currentSlide}>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-foreground mb-6 italic max-w-3xl mx-auto">
                  "{testimonials[currentSlide].text}"
                </p>
                <div>
                  <div className="font-semibold text-foreground">{testimonials[currentSlide].author}</div>
                  <div className="text-muted-foreground">{testimonials[currentSlide].position}</div>
                  <div className="text-accent font-medium">{testimonials[currentSlide].company}</div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center items-center gap-4 mt-8">
                <Button variant="outline" size="sm" onClick={prevSlide}>
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-accent' : 'bg-muted'
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
                <Button variant="outline" size="sm" onClick={nextSlide}>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Case Studies */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground text-center mb-8">Success Stories</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-card hover-lift hover-glow transition-all duration-500 animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h4 className="text-xl font-semibold text-foreground mb-4">{study.title}</h4>
                  <p className="text-muted-foreground mb-6">{study.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                    {Object.entries(study.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-2xl font-bold text-accent">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Join Our Success Stories
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let us help your organization achieve similar results with our proven solutions.
              </p>
              <Button 
                size="lg" 
                className="bg-accent text-white hover:bg-accent-light hover:scale-105 transition-all duration-300 shadow-accent"
              >
                Start Your Success Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;