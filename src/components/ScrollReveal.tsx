import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const ScrollReveal = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up' 
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getInitial = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 60 };
      case 'down':
        return { opacity: 0, y: -60 };
      case 'left':
        return { opacity: 0, x: 60 };
      case 'right':
        return { opacity: 0, x: -60 };
      case 'none':
        return { opacity: 0 };
      default:
        return { opacity: 0, y: 60 };
    }
  };

  const getAnimate = () => {
    const base = { opacity: 1 };
    if (direction === 'up' || direction === 'down') {
      return { ...base, y: 0 };
    }
    if (direction === 'left' || direction === 'right') {
      return { ...base, x: 0 };
    }
    return base;
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? getAnimate() : getInitial()}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
