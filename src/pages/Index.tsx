import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CanvasScrollSequence from '@/components/CanvasScrollSequence';
import ScrollReveal from '@/components/ScrollReveal';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Leaf, Trophy, Palette, Cpu, Wrench, MapPin, Mail, Phone, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: 'Message Sent',
      description: "We'll get back to you within 24 hours.",
    });
  };

  const features = [
    {
      icon: Zap,
      title: 'Adaptive Response',
      description: 'AI-powered cushioning that adapts to your stride in real-time for optimal performance.',
    },
    {
      icon: Leaf,
      title: 'Eco-Conscious',
      description: 'Made from 100% recycled ocean plastics and sustainable plant-based materials.',
    },
    {
      icon: Trophy,
      title: 'Award-Winning Design',
      description: 'Recognized globally for innovation in athletic footwear engineering.',
    },
  ];

  const services = [
    {
      icon: Palette,
      title: 'Custom Design',
      description: 'Work with our design team to create your unique pair.',
      features: ['Color customization', 'Material selection', 'Personalized engravings'],
    },
    {
      icon: Cpu,
      title: 'Performance Technology',
      description: 'Experience our proprietary Zero Gravity cushioning and adaptive response.',
      features: ['AI-powered cushioning', 'Real-time adaptation', 'Performance analytics'],
    },
    {
      icon: Leaf,
      title: 'Sustainability Program',
      description: 'Join our circular economy initiative for a better planet.',
      features: ['Shoe recycling program', 'Sustainable materials', 'Carbon neutral shipping'],
    },
    {
      icon: Wrench,
      title: 'Care & Repair',
      description: 'Extend the life of your Aether Step footwear with professional care.',
      features: ['Professional cleaning', 'Sole replacement', 'Warranty repairs'],
    },
  ];

  const milestones = [
    { year: '2019', title: 'Founded', description: 'Aether Step was born from a vision to revolutionize footwear.' },
    { year: '2021', title: 'Sustainability Pledge', description: 'Committed to 100% sustainable materials by 2025.' },
    { year: '2023', title: 'Design Award', description: 'Won the International Footwear Innovation Award.' },
    { year: '2024', title: 'The Future', description: 'Continuing to push boundaries in performance and sustainability.' },
  ];

  const contactInfo = [
    { icon: MapPin, title: 'Visit Us', details: ['123 Innovation Avenue', 'San Francisco, CA 94102'] },
    { icon: Mail, title: 'Email Us', details: ['hello@aetherstep.com', 'press@aetherstep.com'] },
    { icon: Phone, title: 'Call Us', details: ['+1 (555) 123-4567', 'Mon-Fri, 9am-6pm PST'] },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ═══════════════════ HERO - Full Page Scroll Animation ═══════════════════ */}
      <section id="home">
        <CanvasScrollSequence />
      </section>

      {/* ═══════════════════ FEATURES ═══════════════════ */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-label mb-4">Why Aether Step</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight">
                Technology Meets <span className="text-gradient-gold">Artistry</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <motion.div
                  className="p-8 bg-card border border-border rounded-sm hover:border-accent/50 transition-colors duration-500 group"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  <feature.icon className="w-8 h-8 text-accent mb-6" strokeWidth={1.5} />
                  <h3 className="text-xl font-display font-medium mb-4 group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ ABOUT SECTION ═══════════════════ */}
      <section id="about" className="section-padding bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          {/* About Header */}
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-label mb-4">About Us</p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-light tracking-tight mb-6">
                Crafting the Future of <span className="text-gradient-gold">Movement</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                At Aether Step, we believe that great design is invisible—it simply enables
                you to move better, feel better, and perform better.
              </p>
            </div>
          </ScrollReveal>

          {/* Mission & Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <ScrollReveal direction="left">
              <div>
                <p className="text-label mb-4">Our Story</p>
                <h3 className="text-3xl md:text-4xl font-display font-light tracking-tight mb-6">
                  Born from a vision to redefine movement
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Aether Step was founded on the belief that footwear should be an extension of the human body.
                  Every stitch, every curve, every material choice is deliberate—engineered to elevate your
                  natural motion while minimizing environmental impact.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative">
                <div className="aspect-square bg-secondary rounded-sm overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                    <motion.div
                      className="text-8xl font-display font-light text-accent/20"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                    >
                      AS
                    </motion.div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-accent/30" />
                <div className="absolute -top-6 -left-6 w-24 h-24 border border-accent/30" />
              </div>
            </ScrollReveal>
          </div>

          {/* Timeline */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-label mb-4">Our Journey</p>
              <h3 className="text-3xl md:text-4xl font-display font-light tracking-tight">
                A Story of <span className="text-gradient-gold">Innovation</span>
              </h3>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <ScrollReveal key={milestone.year} delay={index * 0.1}>
                <div className="flex gap-8 mb-10 last:mb-0">
                  <div className="flex-shrink-0 w-20">
                    <span className="text-accent font-display text-2xl">{milestone.year}</span>
                  </div>
                  <div className="flex-grow border-l border-border pl-8 pb-6">
                    <h4 className="text-lg font-display font-medium mb-2">{milestone.title}</h4>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICES SECTION ═══════════════════ */}
      <section id="services" className="section-padding bg-secondary">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-label mb-4">Our Services</p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-light tracking-tight mb-6">
                Elevate Your <span className="text-gradient-gold">Experience</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From custom design to sustainable care, we offer comprehensive services
                that extend far beyond the initial purchase.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <motion.div
                  className="p-8 lg:p-10 bg-card border border-border rounded-sm hover:border-accent/50 transition-all duration-500 h-full group"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  <service.icon className="w-10 h-10 text-accent mb-6" strokeWidth={1.5} />
                  <h3 className="text-2xl font-display font-medium mb-4 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="w-1 h-1 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Process */}
          <div className="mt-24">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-label mb-4">Custom Design</p>
                <h3 className="text-3xl md:text-4xl font-display font-light tracking-tight">
                  The <span className="text-gradient-gold">Process</span>
                </h3>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Consultation', description: 'Share your vision with our design experts' },
                { step: '02', title: 'Design', description: 'We create detailed renderings for your approval' },
                { step: '03', title: 'Craft', description: 'Master artisans bring your design to life' },
                { step: '04', title: 'Delivery', description: 'Your custom creation arrives at your door' },
              ].map((item, index) => (
                <ScrollReveal key={item.step} delay={index * 0.1}>
                  <div className="relative">
                    <span className="text-8xl font-display font-light text-accent/10 absolute -top-4 -left-2">
                      {item.step}
                    </span>
                    <div className="relative z-10 pt-8">
                      <h4 className="text-xl font-display font-medium mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CONTACT SECTION ═══════════════════ */}
      <section id="contact" className="section-padding bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-label mb-4">Contact</p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-light tracking-tight mb-6">
                Let's <span className="text-gradient-gold">Connect</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have a question, custom project, or just want to say hello?
                We'd love to hear from you.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollReveal direction="left">
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-light tracking-tight mb-8">
                  Send us a message
                </h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <CheckCircle className="w-16 h-16 text-accent mb-6" />
                    <h4 className="text-2xl font-display font-medium mb-4">Thank You!</h4>
                    <p className="text-muted-foreground max-w-md">
                      Your message has been received. Our team will get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="text-label block mb-2">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors duration-300"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-label block mb-2">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="text-label block mb-2">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground focus:border-accent focus:outline-none transition-colors duration-300"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="custom">Custom Design Request</option>
                        <option value="support">Customer Support</option>
                        <option value="press">Press & Media</option>
                        <option value="partnership">Partnership Opportunity</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="text-label block mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors duration-300 resize-none"
                        placeholder="Tell us about your project or question..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-luxury w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-light tracking-tight mb-8">
                    Get in touch
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Whether you have a question about our products, services, or just want to
                    share your ideas, we're here to listen and help.
                  </p>
                </div>

                <div className="space-y-8">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 border border-border rounded-sm flex items-center justify-center bg-card">
                        <info.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-lg font-display font-medium mb-1">{info.title}</h4>
                        {info.details.map((detail) => (
                          <p key={detail} className="text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA SECTION ═══════════════════ */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <p className="text-label mb-4">Ready to Elevate?</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-light tracking-tight mb-8">
              Join the <span className="text-gradient-gold">Movement</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
              Be among the first to experience the next generation of footwear.
              Exclusive access awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-luxury">
                Get in Touch
              </a>
              <a href="#about" className="btn-luxury-outline">
                Learn More
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;