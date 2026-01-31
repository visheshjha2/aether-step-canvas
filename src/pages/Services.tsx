import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import ScrollReveal from '@/components/ScrollReveal';
import { motion } from 'framer-motion';
import { Palette, Cpu, Leaf, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Custom Design',
      description: 'Work with our design team to create your unique pair. Choose colors, materials, and personalization options for footwear that\'s truly yours.',
      features: ['Color customization', 'Material selection', 'Personalized engravings', 'Limited edition collaborations'],
    },
    {
      icon: Cpu,
      title: 'Performance Technology',
      description: 'Experience our proprietary Zero Gravity cushioning and adaptive response systems. Technology that learns and adapts to your movement.',
      features: ['AI-powered cushioning', 'Real-time adaptation', 'Performance analytics', 'Connected app integration'],
    },
    {
      icon: Leaf,
      title: 'Sustainability Program',
      description: 'Join our circular economy initiative. Return worn shoes for recycling and receive credit toward your next purchase.',
      features: ['Shoe recycling program', 'Sustainable materials', 'Carbon neutral shipping', 'Eco-friendly packaging'],
    },
    {
      icon: Wrench,
      title: 'Care & Repair',
      description: 'Extend the life of your Aether Step footwear with our professional care and repair services. Built to last, maintained to perfection.',
      features: ['Professional cleaning', 'Sole replacement', 'Leather restoration', 'Warranty repairs'],
    },
  ];

  const process = [
    { step: '01', title: 'Consultation', description: 'Share your vision with our design experts' },
    { step: '02', title: 'Design', description: 'We create detailed renderings for your approval' },
    { step: '03', title: 'Craft', description: 'Master artisans bring your design to life' },
    { step: '04', title: 'Delivery', description: 'Your custom creation arrives at your door' },
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
              <p className="text-label mb-4">Our Services</p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tight mb-8">
                Elevate Your <span className="text-gradient-gold">Experience</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                From custom design to sustainable care, we offer comprehensive services 
                that extend far beyond the initial purchase.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-aether-charcoal">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <ScrollReveal key={service.title} delay={index * 0.1}>
                  <motion.div
                    className="p-8 lg:p-12 border border-border rounded-sm hover:border-accent/50 transition-all duration-500 h-full group"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4 }}
                  >
                    <service.icon className="w-10 h-10 text-accent mb-6" strokeWidth={1.5} />
                    <h3 className="text-2xl md:text-3xl font-display font-medium mb-4 group-hover:text-accent transition-colors duration-300">
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
          </div>
        </section>

        {/* Custom Design Process */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-label mb-4">Custom Design</p>
                <h2 className="text-4xl md:text-5xl font-display font-light tracking-tight">
                  The <span className="text-gradient-gold">Process</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <ScrollReveal key={item.step} delay={index * 0.1}>
                  <div className="relative">
                    <span className="text-8xl font-display font-light text-accent/10 absolute -top-4 -left-2">
                      {item.step}
                    </span>
                    <div className="relative z-10 pt-8">
                      <h3 className="text-xl font-display font-medium mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="section-padding bg-aether-charcoal">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="left">
                <div>
                  <p className="text-label mb-4">Investment</p>
                  <h2 className="text-4xl md:text-5xl font-display font-light tracking-tight mb-6">
                    Pricing tailored to your vision
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Every custom project is unique. Our pricing reflects the complexity of your design, 
                    materials selected, and level of customization. Contact us for a personalized quote.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center border-b border-border pb-4">
                      <span className="text-foreground">Standard Collection</span>
                      <span className="text-accent">From $350</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-border pb-4">
                      <span className="text-foreground">Custom Design</span>
                      <span className="text-accent">From $650</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-border pb-4">
                      <span className="text-foreground">Bespoke Experience</span>
                      <span className="text-accent">From $1,200</span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-foreground link-underline group"
                  >
                    <span className="text-sm tracking-widest uppercase">Request a Quote</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <div className="relative">
                  <div className="aspect-[4/5] bg-aether-dark rounded-sm overflow-hidden flex items-center justify-center">
                    <motion.div
                      className="text-9xl font-display font-light text-accent/10"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      AS
                    </motion.div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <ScrollReveal>
              <p className="text-label mb-4">Ready to Begin?</p>
              <h2 className="text-4xl md:text-5xl font-display font-light tracking-tight mb-8">
                Let's create something <span className="text-gradient-gold">extraordinary</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-luxury">
                  Start Your Project
                </Link>
                <Link to="/about" className="btn-luxury-outline">
                  Learn More
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Services;
