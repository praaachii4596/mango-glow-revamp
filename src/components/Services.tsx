import { ArrowRight, Users, GraduationCap, Briefcase, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import staffingIcon from "@/assets/staffing-icon.jpg";
import skillIcon from "@/assets/skill-development-icon.jpg";
import contractIcon from "@/assets/contract-labor-icon.jpg";

const Services = () => {
  const services = [
    {
      icon: Users,
      image: staffingIcon,
      title: "Staffing Solutions",
      description: "Comprehensive staffing solutions for all major industries including Automobile, Electrical, Electronics, Pharmaceutical, Food, Plastic, and Educational sectors.",
      features: ["Industry-specific expertise", "Quality talent sourcing", "Scalable solutions", "Compliance management"],
      accent: "bg-blue-500"
    },
    {
      icon: GraduationCap,
      image: skillIcon,
      title: "WISTA Program",
      description: "Work Integrated Skill Training & Apprenticeship - A flexible, modular framework enabling youth to obtain industry-relevant qualifications.",
      features: ["Industry-relevant training", "On-the-job experience", "Skill certification", "Career advancement"],
      accent: "bg-green-500"
    },
    {
      icon: Briefcase,
      image: contractIcon,
      title: "Contract Labour",
      description: "Complete workforce solutions from junior to senior level positions with 100% legal compliance and comprehensive management.",
      features: ["100% legal compliance", "All-level positions", "Comprehensive management", "Risk mitigation"],
      accent: "bg-purple-500"
    },
    {
      icon: DollarSign,
      image: staffingIcon,
      title: "Payroll Outsourcing",
      description: "Fully automated payroll processing with advanced technology solutions ensuring accuracy, compliance, and efficiency.",
      features: ["Automated processing", "Compliance assurance", "Cost-effective", "Real-time reporting"],
      accent: "bg-orange-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet your business needs with expertise and excellence
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-card rounded-2xl p-8 shadow-card hover-lift hover-glow transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Service Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/90 rounded-full">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-accent group-hover:text-accent transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our integrated solutions can help your organization achieve its goals.
              </p>
              <Button 
                size="lg" 
                className="bg-accent text-white hover:bg-accent-light hover:scale-105 transition-all duration-300 shadow-accent"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;