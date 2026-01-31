import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, ArrowLeft, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate registration
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    toast({
      title: 'Account created!',
      description: 'Welcome to Aether Step. Please check your email to verify your account.',
    });
    navigate('/dashboard');
  };

  const benefits = [
    'Early access to new collections',
    'Exclusive member-only offers',
    'Custom design consultations',
    'Priority customer support',
  ];

  const passwordRequirements = [
    { label: 'At least 8 characters', met: formData.password.length >= 8 },
    { label: 'Contains a number', met: /\d/.test(formData.password) },
    { label: 'Contains uppercase', met: /[A-Z]/.test(formData.password) },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left side - Visual */}
      <div className="hidden lg:flex flex-1 bg-aether-charcoal items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-aether-charcoal to-aether-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 px-16"
        >
          <h2 className="text-4xl font-display font-light tracking-tight mb-8">
            Join the <span className="text-gradient-gold">Movement</span>
          </h2>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.li
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full border border-accent/50 flex items-center justify-center">
                  <Check className="w-3 h-3 text-accent" />
                </div>
                <span className="text-muted-foreground">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to home</span>
          </Link>

          <div className="mb-8">
            <Link to="/" className="inline-block mb-8">
              <span className="text-2xl font-display font-semibold tracking-tight text-foreground">
                Aether<span className="text-accent">Step</span>
              </span>
            </Link>
            <h1 className="text-4xl font-display font-light tracking-tight mb-2">
              Create account
            </h1>
            <p className="text-muted-foreground">
              Join Aether Step and experience the future of footwear.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="text-label block mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors duration-300"
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
                className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors duration-300"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-label block mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 pr-12 bg-secondary border border-border rounded-sm text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors duration-300"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <div className="mt-3 space-y-1">
                {passwordRequirements.map((req) => (
                  <div key={req.label} className="flex items-center gap-2 text-xs">
                    <div
                      className={`w-3 h-3 rounded-full flex items-center justify-center ${
                        req.met ? 'bg-accent' : 'bg-muted'
                      }`}
                    >
                      {req.met && <Check className="w-2 h-2 text-primary-foreground" />}
                    </div>
                    <span className={req.met ? 'text-foreground' : 'text-muted-foreground'}>
                      {req.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="w-4 h-4 mt-0.5 border border-border rounded-sm bg-secondary checked:bg-accent checked:border-accent focus:ring-0 focus:ring-offset-0"
                />
                <span className="text-sm text-muted-foreground">
                  I agree to the{' '}
                  <Link to="#" className="text-foreground hover:text-accent transition-colors duration-300">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="#" className="text-foreground hover:text-accent transition-colors duration-300">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              className="btn-luxury w-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                />
              ) : (
                'Create Account'
              )}
            </motion.button>
          </form>

          <p className="mt-8 text-center text-muted-foreground">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-foreground hover:text-accent transition-colors duration-300"
            >
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
