import { motion } from 'framer-motion';

interface LoadingProgressProps {
  progress: number;
  error?: string | null;
}

const LoadingProgress = ({ progress, error }: LoadingProgressProps) => {
  if (error) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-background">
        <div className="text-center px-6">
          <p className="text-destructive text-lg mb-2">Failed to load animation</p>
          <p className="text-muted-foreground text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center bg-background z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Brand name */}
      <motion.h1
        className="text-4xl md:text-6xl font-display font-light tracking-tighter mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Aether<span className="text-gradient-gold">Step</span>
      </motion.h1>

      {/* Progress bar container */}
      <div className="w-64 md:w-80">
        <div className="h-px w-full bg-border/30 overflow-hidden">
          <motion.div
            className="h-full bg-accent origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>

        {/* Progress text */}
        <motion.p
          className="text-label mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Loading Experience {progress}%
        </motion.p>
      </div>

      {/* Animated dots */}
      <motion.div
        className="flex gap-1 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-muted-foreground"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default LoadingProgress;
