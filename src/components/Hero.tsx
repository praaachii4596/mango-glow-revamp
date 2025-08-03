import { ArrowRight, Play, Users, Building, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Integrated Service 
              <span className="block text-accent"> Provider Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Customized solutions for National & Multinational Brands with over 100+ years of cumulative team experience
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up">
            <Button 
              size="lg" 
              className="bg-accent text-white hover:bg-accent-light hover:scale-105 transition-all duration-300 shadow-accent group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-8 animate-scale-in">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 mx-auto">
                <Building className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;