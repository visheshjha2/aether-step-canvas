import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import TextOverlay from './TextOverlay';
import heroShoe from '@/assets/hero-shoe.jpg';

const CanvasScrollSequence = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth spring animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Transforms for the hero shoe
  const scale = useTransform(smoothProgress, [0, 0.3, 0.6, 1], [1.2, 1, 0.9, 1.1]);
  const rotateY = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [0, 15, 0, -15, 0]);
  const rotateX = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [0, 5, 10, 5, 0]);
  const y = useTransform(smoothProgress, [0, 0.3, 0.6, 1], ['0%', '-5%', '5%', '0%']);
  const x = useTransform(smoothProgress, [0, 0.3, 0.6, 1], ['0%', '10%', '-10%', '0%']);
  
  // Background effects
  const bgOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.3, 0.5, 0.7]);
  const glowScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.5, 1]);
  const vignetteOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.4, 0.6, 0.8]);

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden bg-background">
        {/* Background gradient layers */}
        <div className="absolute inset-0 bg-hero-gradient" />
        
        {/* Animated glow behind shoe */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, hsl(38 35% 50% / 0.1) 0%, transparent 70%)',
            scale: glowScale,
          }}
        />

        {/* Hero shoe image with 3D transforms */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            scale,
            y,
            x,
            rotateY,
            rotateX,
            perspective: 1000,
          }}
        >
          <motion.img
            src={heroShoe}
            alt="Aether Step Premium Sneaker"
            className="w-full h-full object-contain max-w-4xl mx-auto"
            style={{
              filter: 'drop-shadow(0 50px 100px rgba(0,0,0,0.8))',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        {/* Vignette overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, hsl(0 0% 0%) 100%)',
            opacity: vignetteOpacity,
          }}
        />

        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none" />

        {/* Text Overlays */}
        <TextOverlay scrollStart={0} scrollEnd={0.18} direction="up">
          <div className="text-center px-6">
            <motion.p
              className="text-label mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Introducing
            </motion.p>
            <motion.h1
              className="text-display-large mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              Aether<span className="text-gradient-gold">Step</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground font-light max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Where innovation meets elevation
            </motion.p>
          </div>
        </TextOverlay>

        <TextOverlay scrollStart={0.2} scrollEnd={0.38} direction="left">
          <div className="text-center px-6">
            <p className="text-label mb-4">Engineered Performance</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-light tracking-tight mb-4">
              Zero Gravity
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Revolutionary cushioning technology that makes every step feel weightless
            </p>
          </div>
        </TextOverlay>

        <TextOverlay scrollStart={0.4} scrollEnd={0.58} direction="right">
          <div className="text-center px-6">
            <p className="text-label mb-4">Premium Materials</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-light tracking-tight mb-4">
              Crafted Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Sustainable materials meet precision engineering
            </p>
          </div>
        </TextOverlay>

        <TextOverlay scrollStart={0.6} scrollEnd={0.78} direction="up">
          <div className="text-center px-6">
            <p className="text-label mb-4">Design Philosophy</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-light tracking-tight mb-4">
              Form Follows Motion
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Every curve designed for natural movement
            </p>
          </div>
        </TextOverlay>

        <TextOverlay scrollStart={0.8} scrollEnd={1} direction="up">
          <div className="text-center px-6">
            <p className="text-label mb-6">The Future is Now</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-light tracking-tight mb-8">
              Step Into Tomorrow
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
              <a href="/services" className="btn-luxury">
                Explore Collection
              </a>
              <a href="/about" className="btn-luxury-outline">
                Our Story
              </a>
            </div>
          </div>
        </TextOverlay>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          style={{
            opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]),
          }}
        >
          <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">
            Scroll to explore
          </p>
          <motion.div
            className="w-6 h-10 border border-muted-foreground/50 rounded-full flex items-start justify-center p-1"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-foreground rounded-full"
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>

        {/* Progress indicator */}
        <motion.div
          className="fixed right-6 top-1/2 -translate-y-1/2 w-1 h-32 bg-border/30 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="w-full bg-accent rounded-full origin-top"
            style={{ 
              scaleY: smoothProgress,
              height: '100%',
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CanvasScrollSequence;
