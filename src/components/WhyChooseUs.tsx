import { useState, useEffect } from "react";
import { Shield, Clock, Award, TrendingUp, Users, Globe } from "lucide-react";

const WhyChooseUs = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    satisfaction: 0
  });

  const stats = [
    { 
      key: 'experience', 
      value: 100, 
      label: 'Years Combined Experience', 
      icon: Clock,
      suffix: '+'
    },
    { 
      key: 'projects', 
      value: 500, 
      label: 'Projects Completed', 
      icon: TrendingUp,
      suffix: '+'
    },
    { 
      key: 'clients', 
      value: 50, 
      label: 'Satisfied Clients', 
      icon: Users,
      suffix: '+'
    },
    { 
      key: 'satisfaction', 
      value: 99, 
      label: 'Client Satisfaction', 
      icon: Award,
      suffix: '%'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "100% Legal Compliance",
      description: "Full compliance with all regulatory requirements and industry standards",
      color: "text-blue-500"
    },
    {
      icon: Globe,
      title: "National & International Reach",
      description: "Serving both national and multinational brands across industries",
      color: "text-green-500"
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Specialized knowledge across automobile, pharmaceutical, electronics, and more",
      color: "text-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "From startups to enterprises, solutions that grow with your business",
      color: "text-orange-500"
    }
  ];

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      stats.forEach(stat => {
        let current = 0;
        const target = stat.value;
        const stepValue = target / steps;

        const timer = setInterval(() => {
          current += stepValue;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({
            ...prev,
            [stat.key]: Math.floor(current)
          }));
        }, increment);
      });
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    });

    const target = document.getElementById('stats-section');
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose <span className="gradient-text">MangosOrange</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With over a century of combined experience, we deliver excellence through innovation and dedication
            </p>
          </div>

          {/* Stats Section */}
          <div id="stats-section" className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center bg-card rounded-xl p-6 shadow-card hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {counters[stat.key as keyof typeof counters]}{stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-6 bg-card rounded-xl p-8 shadow-card hover-lift hover-glow transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-md`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Process Timeline */}
          <div className="mt-16 animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
              Our Process
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-accent hidden md:block"></div>
              
              {/* Process steps */}
              <div className="space-y-12 md:space-y-16">
                {[
                  { step: "01", title: "Understanding Requirements", description: "We analyze your specific needs and business objectives" },
                  { step: "02", title: "Solution Design", description: "Custom solutions tailored to your industry and scale" },
                  { step: "03", title: "Implementation", description: "Seamless deployment with minimal business disruption" },
                  { step: "04", title: "Ongoing Support", description: "Continuous monitoring and optimization for best results" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className="flex-1 bg-card rounded-xl p-6 shadow-card hover-lift">
                      <div className="text-accent font-bold text-lg mb-2">{item.step}</div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="hidden md:flex w-12 h-12 bg-gradient-accent rounded-full items-center justify-center text-white font-bold z-10">
                      {item.step}
                    </div>
                    <div className="flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;