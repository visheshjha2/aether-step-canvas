import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface TextOverlayProps {
  children: React.ReactNode;
  scrollStart: number;
  scrollEnd: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const TextOverlay = ({ 
  children, 
  scrollStart, 
  scrollEnd, 
  direction = 'up',
  className = '' 
}: TextOverlayProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(
    scrollYProgress,
    [scrollStart, scrollStart + 0.05, scrollEnd - 0.05, scrollEnd],
    [0, 1, 1, 0]
  );

  // Determine output range based on direction
  const isReverse = direction === 'down' || direction === 'right';
  const outputRange: [number, number, number, number] = isReverse
    ? [-60, 0, 0, 60]
    : [60, 0, 0, -60];

  const transform = useTransform(
    scrollYProgress,
    [scrollStart, scrollStart + 0.05, scrollEnd - 0.05, scrollEnd],
    outputRange
  );

  const style = {
    opacity,
    ...(direction === 'up' || direction === 'down'
      ? { y: transform }
      : { x: transform }),
  };

  return (
    <motion.div
      ref={ref}
      style={style}
      className={`absolute inset-0 flex items-center justify-center pointer-events-none ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default TextOverlay;