import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    toast({
      title: 'Welcome back!',
      description: 'You have successfully logged in.',
    });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
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
              Welcome back
            </h1>
            <p className="text-muted-foreground">
              Sign in to access your account and continue your journey.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-border rounded-sm bg-secondary checked:bg-accent checked:border-accent focus:ring-0 focus:ring-offset-0"
                />
                <span className="text-sm text-muted-foreground">Remember me</span>
              </label>
              <Link
                to="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Forgot password?
              </Link>
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
                'Sign In'
              )}
            </motion.button>
          </form>

          <p className="mt-8 text-center text-muted-foreground">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="text-foreground hover:text-accent transition-colors duration-300"
            >
              Create one
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right side - Visual */}
      <div className="hidden lg:flex flex-1 bg-aether-charcoal items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-aether-charcoal to-aether-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center px-16"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="text-[200px] font-display font-light text-accent/10 mb-8"
          >
            AS
          </motion.div>
          <h2 className="text-3xl font-display font-light tracking-tight mb-4">
            Step into the future
          </h2>
          <p className="text-muted-foreground">
            Access exclusive collections, track your orders, and join the Aether community.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
