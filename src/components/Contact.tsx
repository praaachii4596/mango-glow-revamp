import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@mangosorange.com",
      action: "mailto:info@mangosorange.com",
      color: "text-blue-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 120 416 4821",
      action: "tel:+911204164821",
      color: "text-green-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Delhi NCR, India",
      action: "#",
      color: "text-purple-500"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
      action: "#",
      color: "text-orange-500"
    }
  ];

  const services = [
    "Staffing Solutions",
    "WISTA Program",
    "Contract Labour",
    "Payroll Outsourcing",
    "Skill Development",
    "Facility Management",
    "Other"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold text-foreground mb-8">Let's Start a Conversation</h3>
              
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action}
                    className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-card hover-lift hover-glow transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-md`}>
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-muted-foreground text-sm">{info.details}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Why Contact Us */}
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h4 className="text-xl font-semibold text-foreground mb-4">Why Partner With Us?</h4>
                <div className="space-y-3">
                  {[
                    "Free consultation and needs assessment",
                    "Customized solutions for your industry",
                    "100+ years of combined expertise",
                    "24/7 dedicated support",
                    "Proven track record with 50+ clients"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@company.com"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground transition-all duration-300 focus:ring-2 focus:ring-accent focus:border-accent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-accent resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-accent hover:scale-105 transition-all duration-300 shadow-accent"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;