import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import ScrollReveal from '@/components/ScrollReveal';
import { motion } from 'framer-motion';

const About = () => {
  const milestones = [
    { year: '2019', title: 'Founded', description: 'Aether Step was born from a vision to revolutionize footwear.' },
    { year: '2020', title: 'First Prototype', description: 'Developed the Zero Gravity cushioning technology.' },
    { year: '2021', title: 'Sustainability Pledge', description: 'Committed to 100% sustainable materials by 2025.' },
    { year: '2022', title: 'Global Launch', description: 'Expanded to 30 countries worldwide.' },
    { year: '2023', title: 'Design Award', description: 'Won the International Footwear Innovation Award.' },
    { year: '2024', title: 'The Future', description: 'Continuing to push boundaries in performance and sustainability.' },
  ];

  const values = [
    { title: 'Innovation', description: 'Pushing the boundaries of what footwear can achieve through relentless R&D.' },
    { title: 'Sustainability', description: 'Every decision we make considers our impact on the planet.' },
    { title: 'Excellence', description: 'Uncompromising quality in every stitch, every material, every detail.' },
    { title: 'Community', description: 'Building a global community of athletes, creators, and dreamers.' },
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
              <p className="text-label mb-4">About Us</p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tight mb-8">
                Crafting the Future of <span className="text-gradient-gold">Movement</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                At Aether Step, we believe that great design is invisible—it simply enables 
                you to move better, feel better, and perform better.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-aether-charcoal">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ScrollReveal direction="left">
                <div>
                  <p className="text-label mb-4">Our Mission</p>
                  <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight mb-6">
                    To create footwear that amplifies human potential
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We're not just making shoes—we're engineering experiences. Every product 
                    we create is designed to unlock new levels of performance, comfort, and 
                    self-expression while respecting our planet.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <div>
                  <p className="text-label mb-4">Our Vision</p>
                  <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight mb-6">
                    A world where every step matters
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We envision a future where footwear technology and environmental responsibility 
                    go hand in hand. Where innovation serves both the athlete and the earth. 
                    Where beauty and function are inseparable.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-label mb-4">What We Stand For</p>
                <h2 className="text-4xl md:text-5xl font-display font-light tracking-tight">
                  Our Core <span className="text-gradient-gold">Values</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 0.1}>
                  <motion.div
                    className="text-center p-8 border-t border-border"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="text-2xl font-display font-medium mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-aether-charcoal">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-label mb-4">Our Journey</p>
                <h2 className="text-4xl md:text-5xl font-display font-light tracking-tight">
                  A Story of <span className="text-gradient-gold">Innovation</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <ScrollReveal key={milestone.year} delay={index * 0.1}>
                  <div className="flex gap-8 mb-12 last:mb-0">
                    <div className="flex-shrink-0 w-20">
                      <span className="text-accent font-display text-2xl">{milestone.year}</span>
                    </div>
                    <div className="flex-grow border-l border-border pl-8 pb-8">
                      <h3 className="text-xl font-display font-medium mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team Quote */}
        <section className="section-padding bg-background relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <ScrollReveal>
              <blockquote className="max-w-3xl mx-auto">
                <p className="text-3xl md:text-4xl lg:text-5xl font-display font-light tracking-tight leading-relaxed mb-8">
                  "We don't just design shoes. We engineer possibilities."
                </p>
                <footer className="text-muted-foreground">
                  <span className="font-medium text-foreground">Elena Chen</span>
                  <span className="mx-2">—</span>
                  <span>Founder & CEO, Aether Step</span>
                </footer>
              </blockquote>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
