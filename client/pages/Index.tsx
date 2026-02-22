import { useState, useRef } from "react";
import {
  MessageSquare,
  Zap,
  TrendingUp,
  CheckCircle,
  Building2,
  Stethoscope,
  Wrench,
  Store,
  Home,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import IndustryCard from "@/components/IndustryCard";
import Footer from "@/components/Footer";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    message: "",
  });
  const [formMessage, setFormMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFormMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormMessage(
          "✓ Thank you! We've received your message and will be in touch within 24 hours."
        );
        setFormData({
          name: "",
          email: "",
          businessName: "",
          message: "",
        });
        setTimeout(() => setFormMessage(""), 7000);
      } else {
        setFormMessage(
          data.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormMessage(
        "Failed to send message. Please try again later or email us directly."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with <span className="gradient-text">AI Power</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              AI Website Assistant That Answers Customer Questions & Books Appointments 24/7
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button
                onClick={() =>
                  contactRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary inline-flex items-center justify-center"
              >
                Get a Free AI Demo
                <ArrowRight size={18} className="ml-2" />
              </button>
              <a href="#how-it-works" className="btn-secondary inline-flex items-center justify-center">
                See How It Works
              </a>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
              <div className="glass-effect p-4 rounded-xl">
                <p className="text-2xl md:text-3xl font-bold text-cyan-400">24/7</p>
                <p className="text-gray-400 text-sm">AI Support</p>
              </div>
              <div className="glass-effect p-4 rounded-xl">
                <p className="text-2xl md:text-3xl font-bold text-cyan-400">95%</p>
                <p className="text-gray-400 text-sm">Lead Capture</p>
              </div>
              <div className="glass-effect p-4 rounded-xl">
                <p className="text-2xl md:text-3xl font-bold text-cyan-400">
                  <span className="text-purple-400">∞</span>
                </p>
                <p className="text-gray-400 text-sm">Scalable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Us
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              We're an AI solutions agency dedicated to helping Canadian businesses
              harness the power of artificial intelligence. We don't just build AI
              systems—we build <span className="text-cyan-400">growth engines</span>.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our mission is to make AI accessible, affordable, and effective for
              small and mid-sized businesses. From real estate to healthcare, from
              local services to e-commerce, we tailor intelligent solutions that
              save time, reduce costs, and drive conversions.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Built for Results</h3>
                  <p className="text-gray-400 text-sm">
                    Every solution is designed to increase revenue and efficiency.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    Reliable & Trustworthy
                  </h3>
                  <p className="text-gray-400 text-sm">
                    We prioritize security, reliability, and transparent communication.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    Long-term Partnership
                  </h3>
                  <p className="text-gray-400 text-sm">
                    We grow with you—from agency to SaaS, we're here to scale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-effect p-8 rounded-2xl">
              <div className="w-full h-64 md:h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                <div className="text-6xl animate-float">🤖</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Three core AI solutions designed to transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<MessageSquare size={28} />}
            title="AI Chatbots"
            description="Intelligent conversational AI that never sleeps"
            benefits={[
              "24/7 customer conversations",
              "Lead capture and qualification",
              "Website and business automation",
            ]}
          />

          <ServiceCard
            icon={<Zap size={28} />}
            title="AI Customer Support Systems"
            description="Automate support, accelerate response times"
            benefits={[
              "Automated FAQ responses",
              "Appointment booking",
              "Reduced support workload",
            ]}
          />

          <ServiceCard
            icon={<TrendingUp size={28} />}
            title="AI Data Analysis Services"
            description="Turn data into actionable business insights"
            benefits={[
              "Business insights from your data",
              "Performance tracking",
              "Growth optimization recommendations",
            ]}
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section-container bg-gradient-to-b from-background via-background to-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get your AI solution up and running in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Business Analysis & Setup",
              description:
                "We analyze your business needs and set up the foundation for your AI system.",
            },
            {
              step: "02",
              title: "AI Training with Your Data",
              description:
                "We train the AI with your business data and customer interactions.",
            },
            {
              step: "03",
              title: "Integration & Deployment",
              description:
                "Seamless integration into your website or business systems.",
            },
            {
              step: "04",
              title: "Optimization & Support",
              description:
                "Ongoing optimization and 24/7 support to ensure continued success.",
            },
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="glass-effect p-8 rounded-xl h-full flex flex-col">
                <div className="text-4xl font-bold text-cyan-400/30 mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm flex-grow">
                  {item.description}
                </p>
              </div>
              {index < 3 && (
                <div className="hidden md:block absolute -right-3 top-1/2 text-cyan-400">
                  <ArrowRight size={24} className="animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Work With Us
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What sets us apart from the rest
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Custom AI Solutions",
              description:
                "No templates. Every solution is tailor-made for your business needs and goals.",
            },
            {
              title: "Fast Setup",
              description:
                "Get your AI system live in weeks, not months. Rapid deployment without quality trade-offs.",
            },
            {
              title: "Scalable Systems",
              description:
                "Built to grow with your business, from startup to enterprise-level operations.",
            },
            {
              title: "Business-Focused Results",
              description:
                "We measure success by your metrics: conversions, leads, efficiency, and revenue.",
            },
            {
              title: "Easy Integration",
              description:
                "Works seamlessly with your existing tools, platforms, and workflows.",
            },
            {
              title: "Dedicated Support",
              description:
                "Canadian team ready to support, optimize, and evolve your AI system.",
            },
          ].map((item, index) => (
            <div key={index} className="glass-effect p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                <CheckCircle className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proven expertise across diverse sectors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <IndustryCard
            icon={<Building2 size={24} />}
            name="Real Estate"
            description="Lead generation & property inquiries"
          />
          <IndustryCard
            icon={<Stethoscope size={24} />}
            name="Clinics & Healthcare"
            description="Appointment booking & patient support"
          />
          <IndustryCard
            icon={<Wrench size={24} />}
            name="Home Services"
            description="Scheduling & customer engagement"
          />
          <IndustryCard
            icon={<Store size={24} />}
            name="E-commerce"
            description="Sales support & product queries"
          />
          <IndustryCard
            icon={<Home size={24} />}
            name="Local Businesses"
            description="Customer support & lead capture"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real feedback from businesses we've transformed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="The AI chatbot saved us hours every day. We're capturing leads we would have missed before."
            author="Sarah Chen"
            role="Real Estate Agent"
            company="Century Homes Toronto"
            rating={5}
          />

          <TestimonialCard
            quote="Setup was incredibly smooth. Within two weeks, our appointment booking automated completely."
            author="Dr. James Mitchell"
            role="Clinic Owner"
            company="Health First Clinic"
            rating={5}
          />

          <TestimonialCard
            quote="The ROI is undeniable. Customer support response time dropped by 70%, and satisfaction increased."
            author="Marcus Wong"
            role="E-commerce Owner"
            company="TechGear Canada"
            rating={5}
          />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-container text-center">
        <div className="glass-effect p-12 md:p-16 rounded-2xl border border-cyan-400/20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Scale Your Business?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            See how AI can transform your operations with a personalized demo tailored to your business.
          </p>
          <button
            onClick={() =>
              contactRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary inline-flex items-center justify-center text-lg"
          >
            Book Your Free Demo
            <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions? Let's talk about how we can help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="glass-effect p-8 rounded-xl text-center">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="text-cyan-400" size={24} />
            </div>
            <h3 className="font-bold text-white mb-2">Email</h3>
            <a
              href="mailto:sitebetter.net@gmail.com"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              sitebetter.net@gmail.com
            </a>
          </div>

          <div className="glass-effect p-8 rounded-xl text-center">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
              <Building2 className="text-cyan-400" size={24} />
            </div>
            <h3 className="font-bold text-white mb-2">Location</h3>
            <p className="text-gray-400">Canada 🇨🇦</p>
          </div>

          <div className="glass-effect p-8 rounded-xl text-center">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
              <Zap className="text-cyan-400" size={24} />
            </div>
            <h3 className="font-bold text-white mb-2">Quick Response</h3>
            <p className="text-gray-400">Within 24 hours</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto glass-effect p-8 md:p-12 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Business Name
              </label>
              <input
                type="text"
                name="businessName"
                required
                value={formData.businessName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 transition-colors"
                placeholder="Your company"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                How Can We Help?
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 transition-colors resize-none"
                placeholder="Tell us about your business and what you're looking to achieve..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>

            {formMessage && (
              <p
                className={`text-center text-sm animate-fade-in ${
                  formMessage.startsWith("✓") ? "text-green-400" : "text-red-400"
                }`}
              >
                {formMessage}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
