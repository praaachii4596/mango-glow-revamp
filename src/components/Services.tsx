import { ArrowRight, Users, GraduationCap, Briefcase, DollarSign, Zap, Shield, Target, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import staffingIcon from "@/assets/staffing-professional.jpg";
import skillIcon from "@/assets/skills-training.jpg";
import contractIcon from "@/assets/workforce-management.jpg";

const Services = () => {
  useScrollReveal();
  
  const services = [
    {
      icon: Users,
      image: staffingIcon,
      title: "Strategic Staffing Solutions",
      description: "Enterprise-grade staffing solutions powered by AI-driven talent matching and comprehensive industry expertise across Automotive, Technology, Pharmaceutical, and Manufacturing sectors.",
      features: ["AI-Powered Talent Matching", "Executive Search", "Volume Recruitment", "Industry Specialists"],
      accent: "from-accent to-accent-light",
      highlight: "Most Popular"
    },
    {
      icon: GraduationCap,
      image: skillIcon,
      title: "WISTA Excellence Program",
      description: "Revolutionary Work Integrated Skill Training & Apprenticeship platform combining cutting-edge learning methodologies with real-world application for next-generation workforce development.",
      features: ["Immersive Learning Modules", "Industry Certifications", "Mentorship Programs", "Career Pathway Mapping"],
      accent: "from-success to-green-400",
      highlight: "Innovation Award Winner"
    },
    {
      icon: Briefcase,
      image: contractIcon,
      title: "Premium Contract Workforce",
      description: "End-to-end workforce management solutions with 100% legal compliance, advanced analytics, and seamless integration for enterprises seeking agility and excellence.",
      features: ["Legal Compliance Guarantee", "Performance Analytics", "Scalable Workforce", "Risk Management"],
      accent: "from-purple-500 to-purple-400",
      highlight: "Enterprise Grade"
    },
    {
      icon: DollarSign,
      image: staffingIcon,
      title: "Intelligent Payroll Suite",
      description: "Next-generation payroll automation platform featuring real-time processing, predictive analytics, and seamless integration with HR ecosystems for maximum efficiency.",
      features: ["Real-time Processing", "Predictive Analytics", "Multi-currency Support", "API Integration"],
      accent: "from-warning to-yellow-400",
      highlight: "Technology Leader"
    }
  ];

  return (
    <section className="py-32 bg-gradient-subtle relative overflow-hidden min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Premium Header */}
          <div className="text-center mb-20 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-subtle rounded-full text-accent font-medium text-sm mb-6">
              <Zap className="w-4 h-4" />
              Premium Service Portfolio
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
              Transformative <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Comprehensive enterprise solutions designed to revolutionize your workforce management and drive unprecedented business growth
            </p>
          </div>

          {/* Premium Services Grid */}
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index}
                className="service-card group relative bg-card rounded-3xl p-10 shadow-card hover:shadow-premium border border-card-border transition-all duration-700 hover-lift overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                  <div className="absolute top-6 right-6 z-10">
                    <div className="px-3 py-1 bg-gradient-accent text-white text-xs font-medium rounded-full">
                      {service.highlight}
                    </div>
                  </div>
                )}

                {/* Service Image with Premium Overlay */}
                <div className="relative mb-8 overflow-hidden rounded-2xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className="absolute top-6 left-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 glass border border-white/30 rounded-2xl backdrop-blur-sm">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-3xl font-bold text-foreground mb-6 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Premium Features */}
                <div className="grid grid-cols-1 gap-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 group/feature">
                      <div className="flex items-center justify-center w-6 h-6 bg-accent/10 rounded-lg group-hover/feature:bg-accent/20 transition-colors duration-300">
                        <Shield className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Premium CTA Button */}
                <Button 
                  className="w-full btn-premium bg-gradient-accent text-white shadow-accent font-semibold text-lg py-6 group-hover:scale-105 transition-all duration-300"
                >
                  <Target className="mr-3 w-5 h-5" />
                  Explore Solution
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </div>
            ))}
          </div>

          {/* Premium CTA Section */}
          <div className="text-center mt-24 reveal">
            <div className="relative bg-gradient-primary rounded-3xl p-12 md:p-16 text-white overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 border border-white/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white/90 text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  Premium Consultation Available
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Ready to Lead the Future?
                </h3>
                <p className="text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Partner with us to unlock unprecedented growth, innovation, and workforce excellence that sets you apart in today's competitive landscape.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="btn-premium bg-accent text-white shadow-accent font-semibold px-8 py-4 text-lg"
                  >
                    Schedule Premium Consultation
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg backdrop-blur-sm"
                  >
                    Download Case Studies
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;