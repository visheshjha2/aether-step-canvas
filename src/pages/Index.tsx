import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CanvasScrollSequence from '@/components/CanvasScrollSequence';
import ScrollReveal from '@/components/ScrollReveal';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Leaf, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Canvas Animation */}
      <CanvasScrollSequence />

      {/* Features Section */}
      <section className="section-padding bg-aether-charcoal">
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
                  className="p-8 border border-border rounded-sm hover:border-accent/50 transition-colors duration-500 group"
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

      {/* Brand Story Preview */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-aether-charcoal/50 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-label mb-4">Our Story</p>
                <h2 className="text-4xl md:text-5xl font-display font-light tracking-tight mb-6">
                  Born from a vision to redefine movement
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Aether Step was founded on the belief that footwear should be an extension of the human body. 
                  Every stitch, every curve, every material choice is deliberate—engineered to elevate your 
                  natural motion while minimizing environmental impact.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-foreground link-underline group"
                >
                  <span className="text-sm tracking-widest uppercase">Discover More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative">
                <div className="aspect-square bg-aether-dark rounded-sm overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-aether-dark to-aether-charcoal flex items-center justify-center">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-aether-charcoal relative overflow-hidden">
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
              <Link to="/register" className="btn-luxury">
                Create Account
              </Link>
              <Link to="/contact" className="btn-luxury-outline">
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
