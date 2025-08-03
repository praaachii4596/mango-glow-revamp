import { CheckCircle, Target, Users, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Fortune 500 Vision",
      description: "Aspiring to be a Fortune 500 company with innovative solutions"
    },
    {
      icon: Users,
      title: "100+ Years Experience",
      description: "Cumulative team experience delivering quality solutions"
    },
    {
      icon: Zap,
      title: "Customized Solutions",
      description: "Tailored services for national & multinational brands"
    }
  ];

  const services = [
    "Staffing Solutions including Contract Labour & Payroll Services",
    "Work Integrated Skill Training & Apprenticeship (WISTA)",
    "Vocational Education & Skill Development Projects",
    "Catering Services in Industries, Hospitals, Centers & Hostels",
    "Research & Development in Agritech & Allied Domain"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Welcome to <span className="gradient-text">MangosOrange Group</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are an integrated service provider company with a knack for customized solutions for our esteemed national & multinational brands.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center group hover-lift bg-card rounded-xl p-8 shadow-card animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Services List */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card animate-slide-up">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Our Core Services
            </h3>
            <div className="grid gap-4 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 hover:bg-card-hover rounded-lg transition-colors duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground leading-relaxed">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;