import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import ScrollReveal from '@/components/ScrollReveal';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: 'Message Sent',
      description: "We'll get back to you within 24 hours.",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Innovation Avenue', 'San Francisco, CA 94102'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@aetherstep.com', 'press@aetherstep.com'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', 'Mon-Fri, 9am-6pm PST'],
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-gradient" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl"
            >
              <p className="text-label mb-4">Contact</p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tight mb-8">
                Let's <span className="text-gradient-gold">Connect</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Have a question, custom project, or just want to say hello? 
                We'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-aether-charcoal">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <ScrollReveal direction="left">
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight mb-8">
                    Send us a message
                  </h2>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <CheckCircle className="w-16 h-16 text-accent mb-6" />
                      <h3 className="text-2xl font-display font-medium mb-4">Thank You!</h3>
                      <p className="text-muted-foreground max-w-md">
                        Your message has been received. Our team will get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="text-label block mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors duration-300"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="text-label block mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors duration-300"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="text-label block mb-2">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground focus:border-accent focus:outline-none transition-colors duration-300"
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
                        <label htmlFor="message" className="text-label block mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors duration-300 resize-none"
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
                    <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight mb-8">
                      Get in touch
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      Whether you have a question about our products, services, or just want to 
                      share your ideas, we're here to listen and help.
                    </p>
                  </div>

                  <div className="space-y-8">
                    {contactInfo.map((info) => (
                      <div key={info.title} className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 border border-border rounded-sm flex items-center justify-center">
                          <info.icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-lg font-display font-medium mb-1">{info.title}</h3>
                          {info.details.map((detail) => (
                            <p key={detail} className="text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Map placeholder */}
                  <div className="mt-12">
                    <div className="aspect-video bg-aether-dark rounded-sm overflow-hidden relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="w-8 h-8 text-accent mx-auto mb-2" />
                          <p className="text-muted-foreground">Interactive map coming soon</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;
