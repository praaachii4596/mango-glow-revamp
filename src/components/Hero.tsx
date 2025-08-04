import { ArrowRight, Play, Users, Building, Award, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import heroImage from "@/assets/hero-business.jpg";

const Hero = () => {
  useScrollReveal();
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-subtle">
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern professional team collaboration in premium workspace"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary-light/85"></div>
      </div>

      {/* Sophisticated Floating Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-32 left-16 w-24 h-24 bg-gradient-accent rounded-2xl opacity-20 animate-float blur-sm"></div>
        <div className="absolute top-48 right-24 w-20 h-20 bg-gradient-accent rounded-full opacity-15 animate-float blur-sm" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-32 left-32 w-16 h-16 bg-accent/20 rounded-xl animate-float blur-sm" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-accent-light rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-5xl">
          {/* Premium Badge */}
          <div className="animate-fade-in mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-sm font-medium">
              <Sparkles className="w-4 h-4 text-accent-light" />
              Premium HR Solutions Since 2020
              <TrendingUp className="w-4 h-4 text-success" />
            </div>
          </div>

          <div className="animate-slide-up">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-[0.9] tracking-tight">
              Future-Forward
              <span className="block gradient-text bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent"> 
                Workforce Solutions
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/95 mb-12 max-w-3xl leading-relaxed font-light">
              Transforming businesses through innovative HR solutions, strategic workforce management, and premium talent acquisition for the modern enterprise.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-scale-in">
            <Button 
              size="lg" 
              className="btn-premium bg-gradient-accent text-white shadow-accent font-semibold px-8 py-4 text-lg group relative overflow-hidden"
            >
              <span className="relative z-10">Start Your Transformation</span>
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-all duration-500 font-semibold px-8 py-4 text-lg group backdrop-blur-sm"
            >
              <Play className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              Watch Our Story
            </Button>
          </div>

          {/* Premium Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            <div className="text-center group">
              <div className="flex items-center justify-center w-20 h-20 glass rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-all duration-500 border border-white/20">
                <Users className="w-10 h-10 text-accent-light" />
              </div>
              <div className="text-5xl font-bold text-white mb-3 font-mono">100+</div>
              <div className="text-white/90 font-medium text-lg">Years Combined Experience</div>
              <div className="text-white/70 text-sm mt-1">Across Leadership Team</div>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center w-20 h-20 glass rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-all duration-500 border border-white/20">
                <Building className="w-10 h-10 text-accent-light" />
              </div>
              <div className="text-5xl font-bold text-white mb-3 font-mono">500+</div>
              <div className="text-white/90 font-medium text-lg">Successful Projects</div>
              <div className="text-white/70 text-sm mt-1">Enterprise & SME Clients</div>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center w-20 h-20 glass rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-all duration-500 border border-white/20">
                <Award className="w-10 h-10 text-accent-light" />
              </div>
              <div className="text-5xl font-bold text-white mb-3 font-mono">98%</div>
              <div className="text-white/90 font-medium text-lg">Client Satisfaction</div>
              <div className="text-white/70 text-sm mt-1">Industry Leading Results</div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 animate-fade-in">
        <div className="flex flex-col items-center gap-3">
          <div className="text-white/60 text-sm font-medium tracking-wide">Discover More</div>
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center relative group hover:border-accent-light transition-colors duration-300">
            <div className="w-1.5 h-4 bg-gradient-accent rounded-full animate-pulse mt-2 group-hover:animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;